// UIL CS Programming Trainer – Main Application
// Vanilla JS SPA: Monaco Editor + Judge0 CE API (free, no key required)

const app = document.getElementById('app');

// ── STATE ──
const state = {
  screen: 'menu',         // menu | problem | results | stats
  problem: null,           // current problem object
  code: '',                // user's code in editor
  output: '',              // program stdout
  compileError: null,      // compile/runtime error
  running: false,          // API call in progress?
  testResults: [],         // [{name, input, expected, actual, passed}]
  consoleTab: 'output',    // output | testcases
  hintVisible: false,
  editorReady: false,
};

let editor = null;  // Monaco editor instance

// ── PERSISTENCE ──
const STATS_KEY = 'uil-prog-stats';
const SOLVED_KEY = 'uil-prog-solved';

function loadSolved() {
  try { return new Set(JSON.parse(localStorage.getItem(SOLVED_KEY)) || []); }
  catch { return new Set(); }
}
function saveSolved(s) { localStorage.setItem(SOLVED_KEY, JSON.stringify([...s])); }

function loadStats() {
  try { return JSON.parse(localStorage.getItem(STATS_KEY)) || defaultStats(); }
  catch { return defaultStats(); }
}
function defaultStats() {
  return { totalRuns: 0, totalSubmissions: 0, solvedByDiff: { starter: 0, easy: 0, medium: 0, hard: 0, advanced: 0 }, history: [] };
}
function saveStats(s) { localStorage.setItem(STATS_KEY, JSON.stringify(s)); }

// ── STATE UPDATE ──
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
    });

    state.code = initialCode;
    state.editorReady = true;
  };

  if (monacoReady) {
    setTimeout(doCreate, 0);
  } else {
    monacoReadyCallbacks.push(doCreate);
  }
}

// ── JUDGE0 CE API (free, no key required, Java 17) ──
const JUDGE0_URL = 'https://ce.judge0.com/submissions/?base64_encoded=false&wait=true';

async function runCode(code, stdin) {
  // Judge0 always uses Main.java, so rewrite the class name to Main
  const originalClass = extractClassName(code);
  const submissionCode = code.replace('public class ' + originalClass, 'public class Main');

  try {
    const resp = await fetch(JUDGE0_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        source_code: submissionCode,
        language_id: 91,  // Java (JDK 17.0.6)
        stdin: stdin || '',
      })
    });

    if (!resp.ok) {
      return { error: `HTTP ${resp.status}: ${resp.statusText}` };
    }

    const data = await resp.json();

    // Judge0 status IDs: 3=Accepted, 4=Wrong Answer, 5=TLE, 6=Compilation Error, etc.
    if (data.status && data.status.id === 6) {
      // Compilation error — translate "Main" back to original class name in error messages
      let errMsg = data.compile_output || 'Compilation error';
      errMsg = errMsg.replace(/Main\.java/g, originalClass + '.java');
      return { error: errMsg };
    }

    if (data.status && data.status.id >= 7) {
      // Runtime error
      let errMsg = data.stderr || data.compile_output || data.status.description;
      errMsg = errMsg.replace(/Main\.java/g, originalClass + '.java');
      return { error: errMsg };
    }

    if (data.status && data.status.id === 5) {
      return { error: 'Time Limit Exceeded — your code took too long to run.' };
    }

    return { output: data.stdout || '' };
  } catch (e) {
    return { error: `Network error: ${e.message}` };
  }
}

// ── PROBLEM ACTIONS ──
async function handleRun() {
  const code = state.code;
  if (!code.trim()) return;

  setState({ running: true, output: '', compileError: null, consoleTab: 'output' });

  const prob = state.problem;
  const stdin = prob.testCases[0].input;

  const result = await runCode(code, stdin);

  if (result.error) {
    setState({ running: false, compileError: result.error, output: '' });
    return;
  }

  const out = result.output || '';
  const stats = loadStats();
  stats.totalRuns++;
  saveStats(stats);
  setState({ running: false, output: out, compileError: null });
}

async function handleSubmit() {
  const code = state.code;
  if (!code.trim()) return;

  setState({ running: true, output: '', compileError: null, testResults: [] });

  const prob = state.problem;
  const results = [];
  let allPassed = true;

  for (let i = 0; i < prob.testCases.length; i++) {
    const tc = prob.testCases[i];
    const result = await runCode(code, tc.input);

    if (result.error) {
      results.push({
        name: `Test ${i + 1}`,
        input: tc.input,
        expected: tc.expected,
        actual: `Error: ${result.error}`,
        passed: false,
      });
      allPassed = false;
      continue;
    }

    const actual = (result.output || '').replace(/\r\n/g, '\n');
    const expected = tc.expected.replace(/\r\n/g, '\n');

    // Normalize: trim trailing whitespace from each line, trim trailing newlines
    const normActual = normalizeOutput(actual);
    const normExpected = normalizeOutput(expected);

    const passed = normActual === normExpected;
    if (!passed) allPassed = false;

    results.push({
      name: `Test ${i + 1}`,
      input: tc.input,
      expected: tc.expected,
      actual: result.output || '',
      passed,
    });
  }

  // Record stats
  const stats = loadStats();
  stats.totalSubmissions++;
  stats.history.push({
    date: new Date().toISOString(),
    problemId: prob.id,
    problemName: prob.name,
    difficulty: prob.difficulty.toLowerCase(),
    passed: allPassed,
    testsTotal: prob.testCases.length,
    testsPassed: results.filter(r => r.passed).length,
  });

  if (allPassed) {
    const solved = loadSolved();
    if (!solved.has(prob.id)) {
      solved.add(prob.id);
      saveSolved(solved);
      stats.solvedByDiff[prob.difficulty.toLowerCase()]++;
    }
  }
  saveStats(stats);

  setState({
    running: false,
    testResults: results,
    screen: 'results',
  });
}

function normalizeOutput(s) {
  return s.split('\n').map(line => line.trimEnd()).join('\n').replace(/\n+$/, '');
}

function resetCode() {
  if (!state.problem) return;
  const code = state.problem.starterCode;
  if (editor) editor.setValue(code);
  setState({ code, output: '', compileError: null, testResults: [] });
}

// ── RENDER ──
function render() {
  switch (state.screen) {
    case 'menu': renderMenu(); break;
    case 'problem': renderProblem(); break;
    case 'results': renderResults(); break;
    case 'stats': renderStats(); break;
  }
}

// ── MENU SCREEN ──
function renderMenu() {
  const solved = loadSolved();
  const difficulties = ['starter', 'easy', 'medium', 'hard', 'advanced'];
  const grouped = {};
  difficulties.forEach(d => grouped[d] = []);
  PROBLEMS.forEach(p => {
    const d = p.difficulty.toLowerCase();
    if (grouped[d]) grouped[d].push(p);
  });

  const totalSolved = solved.size;
  const totalProblems = PROBLEMS.length;

  app.innerHTML = `
    <div class="header">
      <a href="../index.html" class="back-link">&larr; CS Home</a>
      <h1>⌨️ Programming Trainer</h1>
      <p>${totalSolved}/${totalProblems} problems solved</p>
    </div>
    <div class="menu-wrap">
      <div class="menu-header">
        <h2>Practice Problems</h2>
        <span class="stats-link" onclick="setState({screen:'stats'})">📊 View Stats</span>
      </div>
      ${difficulties.map(d => `
        <div class="diff-section">
          <div class="diff-label ${d}">${d} (${grouped[d].filter(p => solved.has(p.id)).length}/${grouped[d].length})</div>
          <div class="problem-grid">
            ${grouped[d].map(p => `
              <div class="problem-card ${solved.has(p.id) ? 'solved' : ''}" onclick="openProblem('${p.id}')">
                <div class="pc-top">
                  <span class="pc-name">${p.name}</span>
                  <span class="pc-badge ${solved.has(p.id) ? 'solved' : 'new'}">${solved.has(p.id) ? '✓ Solved' : 'New'}</span>
                </div>
                <div class="pc-concepts">${p.concepts.join(' · ')}</div>
              </div>
            `).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function openProblem(id) {
  const prob = PROBLEMS.find(p => p.id === id);
  if (!prob) return;
  setState({
    screen: 'problem',
    problem: prob,
    code: prob.starterCode,
    output: '',
    compileError: null,
    testResults: [],
    consoleTab: 'output',
    hintVisible: false,
    running: false,
    editorReady: false,
  });
  // Editor is created after render puts the container in the DOM
  setTimeout(() => createEditor('editor-container', prob.starterCode), 50);
}

// ── PROBLEM SCREEN ──
function renderProblem() {
  const p = state.problem;
  const diffClass = p.difficulty.toLowerCase();

  app.innerHTML = `
    <div class="header" style="padding: 10px 20px 8px;">
      <a href="../index.html" class="back-link">&larr; CS Home</a>
      <h1 style="font-size:1.2rem;">⌨️ Programming Trainer</h1>
    </div>
    <div class="problem-screen">
      <div class="prob-bar">
        <div class="prob-bar-left">
          <button class="prob-back" onclick="backToMenu()">&larr; Back</button>
          <span class="prob-title">${p.name}</span>
          <span class="prob-diff ${diffClass}">${p.difficulty}</span>
        </div>
        <div class="prob-bar-right">
          <button class="btn btn-reset" onclick="resetCode()">↺ Reset</button>
          <button class="btn btn-run" onclick="handleRun()" ${state.running ? 'disabled' : ''}>
            ${state.running ? '<span class="spinner"></span>Running...' : '▶ Run'}
          </button>
          <button class="btn btn-submit" onclick="handleSubmit()" ${state.running ? 'disabled' : ''}>
            ${state.running ? '' : '✓ Submit'}
          </button>
        </div>
      </div>
      <div class="split-pane">
        <div class="left-panel">
          <div class="prob-desc">
            <h3>Problem</h3>
            <p>${p.description}</p>
            ${p.inputFormat ? `<h3>Input Format</h3><p>${p.inputFormat}</p>` : ''}
            ${p.outputFormat ? `<h3>Output Format</h3><p>${p.outputFormat}</p>` : ''}
            ${p.constraints ? `<h3>Constraints</h3><p>${p.constraints}</p>` : ''}

            <h3>Sample Input</h3>
            <div class="sample-box">${escapeHtml(p.sampleInput || '(no input)')}</div>

            <h3>Sample Output</h3>
            <div class="sample-box">${escapeHtml(p.sampleOutput)}</div>

            ${p.hint ? `
              <button class="hint-toggle" onclick="setState({hintVisible:!state.hintVisible})">
                ${state.hintVisible ? 'Hide Hint ▲' : 'Show Hint ▼'}
              </button>
              ${state.hintVisible ? `<div class="hint-box">${p.hint}</div>` : ''}
            ` : ''}

            <div class="contest-note">
              <strong>📌 Contest Note:</strong> On contest day, you'll read from <code>${p.dataFile || p.name.toLowerCase() + '.dat'}</code> using
              <code>Scanner(new File("${p.dataFile || p.name.toLowerCase() + '.dat'}"))</code>.
              Here, we use <code>Scanner(System.in)</code> so the test data can be piped in.
            </div>
          </div>
        </div>
        <div class="right-panel">
          <div class="editor-container" id="editor-container"></div>
          <div class="console-area">
            <div class="console-tabs">
              <button class="console-tab ${state.consoleTab === 'output' ? 'active' : ''}"
                      onclick="setState({consoleTab:'output'})">Output</button>
              <button class="console-tab ${state.consoleTab === 'testcases' ? 'active' : ''}"
                      onclick="setState({consoleTab:'testcases'})">Test Cases (${p.testCases.length})</button>
            </div>
            <div class="console-output">${renderConsole()}</div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Re-mount editor if it was already created (render causes DOM rebuild)
  if (editor && state.editorReady) {
    const container = document.getElementById('editor-container');
    if (container && !container.hasChildNodes()) {
      // Re-create with current code
      createEditor('editor-container', state.code);
    }
  }
}

function renderConsole() {
  if (state.consoleTab === 'testcases') {
    const p = state.problem;
    return p.testCases.map((tc, i) => {
      return `<span class="info">── Test Case ${i + 1} ──</span>\n` +
             `<span class="muted">Input:</span>\n${escapeHtml(tc.input || '(none)')}\n` +
             `<span class="muted">Expected Output:</span>\n${escapeHtml(tc.expected)}\n`;
    }).join('\n');
  }

  // Output tab
  if (state.running) {
    return '<span class="info">⏳ Compiling and running...</span>';
  }
  if (state.compileError) {
    return `<span class="error">❌ Compilation / Runtime Error:\n${escapeHtml(state.compileError)}</span>`;
  }
  if (state.output) {
    return escapeHtml(state.output);
  }
  return '<span class="muted">Click "Run" to execute your code against the first test case.\nClick "Submit" to run against all test cases and check your solution.</span>';
}

function backToMenu() {
  if (editor) { editor.dispose(); editor = null; }
  setState({
    screen: 'menu',
    problem: null,
    editorReady: false,
  });
}

// ── RESULTS SCREEN ──
function renderResults() {
  const p = state.problem;
  const results = state.testResults;
  const passed = results.filter(r => r.passed).length;
  const total = results.length;
  const allPassed = passed === total;

  app.innerHTML = `
    <div class="header">
      <a href="../index.html" class="back-link">&larr; CS Home</a>
      <h1>⌨️ Programming Trainer</h1>
      <p>Submission Results</p>
    </div>
    <div class="results-wrap">
      <h2>${allPassed ? '🎉 All Tests Passed!' : '❌ Some Tests Failed'} — ${p.name}</h2>

      <div class="results-summary">
        <div class="res-stat">
          <div class="val ${allPassed ? 'pass' : 'fail'}">${passed}/${total}</div>
          <div class="lbl">Tests Passed</div>
        </div>
        <div class="res-stat">
          <div class="val" style="color: #b794f4;">${p.difficulty}</div>
          <div class="lbl">Difficulty</div>
        </div>
      </div>

      <h3 style="margin-bottom: 12px; font-size: 0.95rem;">Test Case Details</h3>
      <div class="tc-list">
        ${results.map((r, i) => `
          <div class="tc-card ${r.passed ? 'pass' : 'fail'}">
            <div class="tc-header">
              <span class="tc-label">${r.name}</span>
              <span class="tc-status ${r.passed ? 'pass' : 'fail'}">${r.passed ? '✓ PASS' : '✗ FAIL'}</span>
            </div>
            ${!r.passed ? `
              <div class="tc-diff">
                <div class="tc-col">
                  <label>Expected</label>
                  <pre>${escapeHtml(r.expected)}</pre>
                </div>
                <div class="tc-col">
                  <label>Your Output</label>
                  <pre class="fail-text">${escapeHtml(r.actual)}</pre>
                </div>
              </div>
            ` : ''}
          </div>
        `).join('')}
      </div>

      <div class="results-actions">
        <button class="btn-outline" onclick="backToMenu()">← Problem List</button>
        <button class="btn-primary" onclick="retryProblem()">Try Again →</button>
      </div>
    </div>
  `;
}

function retryProblem() {
  setState({
    screen: 'problem',
    output: '',
    compileError: null,
    testResults: [],
    consoleTab: 'output',
    editorReady: false,
  });
  setTimeout(() => createEditor('editor-container', state.code), 50);
}

// ── STATS SCREEN ──
function renderStats() {
  const stats = loadStats();
  const solved = loadSolved();
  const difficulties = ['starter', 'easy', 'medium', 'hard', 'advanced'];

  const countByDiff = {};
  difficulties.forEach(d => countByDiff[d] = PROBLEMS.filter(p => p.difficulty.toLowerCase() === d).length);

  app.innerHTML = `
    <div class="header">
      <a href="../index.html" class="back-link">&larr; CS Home</a>
      <h1>⌨️ Programming Trainer</h1>
      <p>Your Statistics</p>
    </div>
    <div class="stats-wrap">
      <button class="btn-outline" onclick="setState({screen:'menu'})" style="margin-bottom:20px;">&larr; Back to Problems</button>

      <div class="stat-grid">
        <div class="stat-card">
          <div class="val">${solved.size}</div>
          <div class="lbl">Solved</div>
        </div>
        <div class="stat-card">
          <div class="val">${PROBLEMS.length}</div>
          <div class="lbl">Total</div>
        </div>
        <div class="stat-card">
          <div class="val">${stats.totalRuns}</div>
          <div class="lbl">Test Runs</div>
        </div>
        <div class="stat-card">
          <div class="val">${stats.totalSubmissions}</div>
          <div class="lbl">Submissions</div>
        </div>
      </div>

      <div class="diff-stats">
        <h3>Progress by Difficulty</h3>
        ${difficulties.map(d => {
          const total = countByDiff[d];
          const solvedCount = PROBLEMS.filter(p => p.difficulty.toLowerCase() === d && solved.has(p.id)).length;
          const pct = total > 0 ? Math.round(solvedCount / total * 100) : 0;
          return `
            <div class="diff-bar">
              <span class="diff-bar-label">${d}</span>
              <div class="diff-bar-track">
                <div class="diff-bar-fill ${d}" style="width:${pct}%"></div>
              </div>
              <span class="diff-bar-pct">${solvedCount}/${total}</span>
            </div>
          `;
        }).join('')}
      </div>

      ${stats.history.length > 0 ? `
        <h3 style="margin-top: 24px; margin-bottom: 12px;">Recent Submissions</h3>
        <div class="tc-list">
          ${stats.history.slice(-10).reverse().map(h => `
            <div class="tc-card ${h.passed ? 'pass' : 'fail'}">
              <div class="tc-header">
                <span class="tc-label">${h.problemName}</span>
                <span class="tc-status ${h.passed ? 'pass' : 'fail'}">${h.passed ? '✓ PASS' : `${h.testsPassed}/${h.testsTotal}`}</span>
              </div>
              <div style="font-size:0.75rem; color:#718096; margin-top:4px;">
                ${new Date(h.date).toLocaleDateString()} ${new Date(h.date).toLocaleTimeString()}
              </div>
            </div>
          `).join('')}
        </div>
      ` : ''}

      <div style="margin-top: 24px;">
        <button class="btn-outline" style="color:#fc8181; border-color:#742a2a;" onclick="clearAllStats()">🗑️ Reset All Stats</button>
      </div>
    </div>
  `;
}

function clearAllStats() {
  if (!confirm('Reset all stats and solved problems? This cannot be undone.')) return;
  localStorage.removeItem(STATS_KEY);
  localStorage.removeItem(SOLVED_KEY);
  render();
}

// ── HELPERS ──
function extractClassName(code) {
  const match = code.match(/public\s+class\s+(\w+)/);
  return match ? match[1] : 'Main';
}

function escapeHtml(s) {
  if (!s) return '';
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// ── INIT ──
initMonaco();
render();
