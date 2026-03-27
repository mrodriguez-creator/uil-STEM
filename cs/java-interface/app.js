// UIL Java Interface – Scratch Pad with Custom Input
// Vanilla JS SPA: Monaco Editor + Judge0 CE API (free, no key required)

const app = document.getElementById('app');

const DEFAULT_CODE = `import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

    }
}`;

// ── PERSISTENCE ──
const SAVE_KEY = 'uil-java-interface';

function loadSaved() {
  try {
    return JSON.parse(localStorage.getItem(SAVE_KEY)) || {};
  } catch { return {}; }
}

function saveWork() {
  localStorage.setItem(SAVE_KEY, JSON.stringify({
    code: state.code,
    customInput: state.customInput,
  }));
}

// ── STATE ──
const saved = loadSaved();
const state = {
  code: saved.code || DEFAULT_CODE,
  customInput: saved.customInput || '',
  output: '',
  compileError: null,
  running: false,
};

let editor = null;

function setState(partial) {
  Object.assign(state, partial);
  render();
}

// ── MONACO EDITOR SETUP ──
let monacoReady = false;
let monacoReadyCallbacks = [];

function initMonaco() {
  require.config({ paths: { vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.45.0/min/vs' } });
  require(['vs/editor/editor.main'], function () {
    monaco.editor.defineTheme('uil-dark', {
      base: 'vs-dark',
      inherit: true,
      rules: [],
      colors: {
        'editor.background': '#0d1117',
        'editor.foreground': '#e2e8f0',
        'editorLineNumber.foreground': '#4a5568',
        'editorLineNumber.activeForeground': '#a0aec0',
        'editor.selectionBackground': '#2d374880',
        'editor.lineHighlightBackground': '#1a1f2e',
      }
    });
    monacoReady = true;
    monacoReadyCallbacks.forEach(fn => fn());
    monacoReadyCallbacks = [];
  });
}

function createEditor(containerId, initialCode) {
  const doCreate = () => {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (editor) { editor.dispose(); editor = null; }

    editor = monaco.editor.create(container, {
      value: initialCode,
      language: 'java',
      theme: 'uil-dark',
      fontSize: 14,
      fontFamily: '"Cascadia Code", "Fira Code", "Consolas", monospace',
      minimap: { enabled: false },
      scrollBeyondLastLine: false,
      automaticLayout: true,
      tabSize: 4,
      insertSpaces: true,
      lineNumbers: 'on',
      renderWhitespace: 'selection',
      bracketPairColorization: { enabled: true },
      padding: { top: 10, bottom: 10 },
      wordWrap: 'on',
      suggest: { showKeywords: true, showSnippets: true },
    });

    editor.onDidChangeModelContent(() => {
      state.code = editor.getValue();
      saveWork();
    });

    state.code = initialCode;
  };

  if (monacoReady) {
    setTimeout(doCreate, 0);
  } else {
    monacoReadyCallbacks.push(doCreate);
  }
}

// ── JUDGE0 CE API (free, no key required, Java 17) ──
const JUDGE0_ENDPOINTS = [
  'https://ce.judge0.com',
  'https://judge0-ce.p.sulu.sh',
];

async function submitToEndpoint(baseUrl, submissionCode, stdin) {
  const syncUrl = `${baseUrl}/submissions/?base64_encoded=false&wait=true`;
  const resp = await fetch(syncUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      source_code: submissionCode,
      language_id: 91,
      stdin: stdin || '',
    })
  });

  if (!resp.ok) {
    if (resp.status === 502 || resp.status === 503) {
      return await submitAsync(baseUrl, submissionCode, stdin);
    }
    throw new Error(`HTTP ${resp.status}: ${resp.statusText}`);
  }

  const text = await resp.text();
  try {
    return JSON.parse(text);
  } catch {
    return await submitAsync(baseUrl, submissionCode, stdin);
  }
}

async function submitAsync(baseUrl, submissionCode, stdin) {
  const asyncUrl = `${baseUrl}/submissions/?base64_encoded=false`;
  const resp = await fetch(asyncUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      source_code: submissionCode,
      language_id: 91,
      stdin: stdin || '',
    })
  });

  if (!resp.ok) throw new Error(`HTTP ${resp.status}: ${resp.statusText}`);
  const { token } = await resp.json();
  if (!token) throw new Error('No submission token received');

  for (let i = 0; i < 20; i++) {
    await new Promise(r => setTimeout(r, 1500));
    const pollResp = await fetch(`${baseUrl}/submissions/${token}?base64_encoded=false`);
    if (!pollResp.ok) continue;
    const data = await pollResp.json();
    if (data.status && data.status.id <= 2) continue;
    return data;
  }
  throw new Error('Submission timed out after 30 seconds');
}

async function runCode(code, stdin) {
  const submissionCode = code;
  let lastError = null;

  for (const baseUrl of JUDGE0_ENDPOINTS) {
    try {
      const data = await submitToEndpoint(baseUrl, submissionCode, stdin);

      if (data.status && data.status.id === 6) {
        return { error: data.compile_output || 'Compilation error' };
      }
      if (data.status && data.status.id >= 7) {
        return { error: data.stderr || data.compile_output || data.status.description };
      }
      if (data.status && data.status.id === 5) {
        return { error: 'Time Limit Exceeded — your code took too long to run.' };
      }
      return { output: data.stdout || '' };
    } catch (e) {
      lastError = e;
      continue;
    }
  }

  return { error: `All Judge0 servers are currently down. Please try again in a few minutes.\n(${lastError?.message || 'Unknown error'})` };
}

// ── ACTIONS ──
async function handleRun() {
  const code = state.code;
  if (!code.trim()) return;

  setState({ running: true, output: '', compileError: null });

  const result = await runCode(code, state.customInput);

  if (result.error) {
    setState({ running: false, compileError: result.error, output: '' });
  } else {
    setState({ running: false, output: result.output || '', compileError: null });
  }
}

function handleReset() {
  if (editor) editor.setValue(DEFAULT_CODE);
  localStorage.removeItem(SAVE_KEY);
  setState({ code: DEFAULT_CODE, customInput: '', output: '', compileError: null });
  // Clear the custom input textarea after render
  setTimeout(() => {
    const ta = document.getElementById('custom-input');
    if (ta) ta.value = '';
  }, 0);
}

// ── RENDER ──
function render() {
  const savedInput = state.customInput;

  app.innerHTML = `
    <div class="header">
      <a href="../index.html" class="back-link">&larr; CS Home</a>
      <h1>&#9749; Java Interface</h1>
      <p>Scratch pad with custom input</p>
    </div>
    <div class="main-screen">
      <div class="toolbar">
        <button class="btn btn-reset" onclick="handleReset()">&#8634; Reset</button>
        <button class="btn btn-run" onclick="handleRun()" ${state.running ? 'disabled' : ''}>
          ${state.running ? '<span class="spinner"></span>Running...' : '&#9654; Run'}
        </button>
      </div>
      <div class="split-pane">
        <div class="editor-panel">
          <div class="panel-label">Code</div>
          <div class="editor-container" id="editor-container"></div>
        </div>
        <div class="io-panel">
          <div class="io-section input-section">
            <div class="panel-label">Custom Input</div>
            <textarea id="custom-input" class="io-textarea"
              placeholder="Enter your stdin input here..."
              oninput="state.customInput = this.value; saveWork()"
            >${escapeHtml(savedInput)}</textarea>
          </div>
          <div class="io-section output-section">
            <div class="panel-label">Output</div>
            <div class="output-area">${renderOutput()}</div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Re-mount editor
  if (editor) {
    const container = document.getElementById('editor-container');
    if (container && !container.hasChildNodes()) {
      createEditor('editor-container', state.code);
    }
  }

  // Restore textarea value (innerHTML escaping can alter it)
  const ta = document.getElementById('custom-input');
  if (ta && savedInput) ta.value = savedInput;
}

function renderOutput() {
  if (state.running) {
    return '<span class="info">&#9203; Compiling and running...</span>';
  }
  if (state.compileError) {
    return `<span class="error">&#10060; Compilation / Runtime Error:\n${escapeHtml(state.compileError)}</span>`;
  }
  if (state.output) {
    return escapeHtml(state.output);
  }
  return '<span class="muted">Click "Run" to execute your code.\nOutput will appear here.</span>';
}

function escapeHtml(s) {
  if (!s) return '';
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// ── INIT ──
initMonaco();
render();
setTimeout(() => createEditor('editor-container', state.code), 50);
