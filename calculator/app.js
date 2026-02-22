// UIL Calculator Applications Trainer – Main Application
// Vanilla JS, single-page app with typed numerical answer input

const $ = id => document.getElementById(id);
const app = document.getElementById('app');

// ── STATE ──
const state = {
  screen: 'menu',          // menu | test | results | stats
  category: 'numerical',   // numerical | stated | geometry
  mode: null,               // skills | drill | practice
  topic: null,
  problems: [],
  idx: 0,
  userAnswer: '',
  answered: false,
  gradeResult: null,        // { status: 'correct'|'wrong'|'partial'|'skipped', points }
  totalPoints: 0,
  results: [],              // { problem, userAnswer, gradeResult }
  timeLeft: 0,
  timed: false,
  timerInterval: null,
  showModal: false,
};

// ── PERSISTENCE ──
const STORAGE_KEY = 'uil-calculator-stats';

function loadStats() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || defaultStats(); }
  catch { return defaultStats(); }
}
function defaultStats() { return { sessions: [], topicScores: {} }; }
function saveStats(stats) { localStorage.setItem(STORAGE_KEY, JSON.stringify(stats)); }

function recordSession(mode, category, topic, results, timeTaken) {
  const stats = loadStats();
  const correct = results.filter(r => r.gradeResult.status === 'correct').length;
  const points = results.reduce((s, r) => s + r.gradeResult.points, 0);
  stats.sessions.push({
    date: new Date().toISOString(),
    mode, category, topic,
    total: results.length,
    correct,
    points,
    timeTaken
  });
  results.forEach(r => {
    const key = r.problem.category + '|' + r.problem.topic;
    if (!stats.topicScores[key]) stats.topicScores[key] = { correct: 0, total: 0, points: 0 };
    stats.topicScores[key].total++;
    if (r.gradeResult.status === 'correct') stats.topicScores[key].correct++;
    stats.topicScores[key].points += r.gradeResult.points;
  });
  saveStats(stats);
}

// ── STATE UPDATE ──
function setState(partial) {
  Object.assign(state, partial);
  render();
}

// ── TIMER ──
function startTimer(seconds) {
  clearTimer();
  state.timeLeft = seconds;
  state.timed = true;
  state.timerInterval = setInterval(() => {
    state.timeLeft--;
    if (state.timeLeft <= 0) {
      clearTimer();
      state.timed = false;
      finishTest();
    }
    render();
  }, 1000);
}
function clearTimer() {
  if (state.timerInterval) { clearInterval(state.timerInterval); state.timerInterval = null; }
}
function formatTime(s) {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return m + ':' + (sec < 10 ? '0' : '') + sec;
}
function timerClass() {
  if (!state.timed) return 'none';
  if (state.timeLeft > 600) return 'ok';
  if (state.timeLeft > 120) return 'warn';
  return 'urgent';
}

// ══════════════════════════════════════════════
//  ANSWER GRADING – The heart of Calculator Apps
// ══════════════════════════════════════════════

function parseUserAnswer(input) {
  // Clean up input: trim, remove spaces, handle common notations
  let s = input.trim();
  if (s === '') return null;

  // Handle dollar signs
  s = s.replace(/^\$/, '');

  // Handle scientific notation variants: 1.23x10^4, 1.23×10^4, 1.23e4, 1.23E4, 1.23*10^4
  s = s.replace(/[×xX]\s*10\s*\^\s*([-+]?\d+)/g, 'e$1');
  s = s.replace(/[×xX]\s*10\s*\*\*\s*([-+]?\d+)/g, 'e$1');
  s = s.replace(/\*\s*10\s*\^\s*([-+]?\d+)/g, 'e$1');

  const num = parseFloat(s);
  return isNaN(num) ? null : num;
}

function countSigFigs(input) {
  let s = input.trim().replace(/^\$/, '').replace(/^-/, '');
  // Remove scientific notation part
  s = s.replace(/[×xXeE]\s*10\s*[\^]*\s*[-+]?\d+/g, '').replace(/[eE][-+]?\d+/g, '');
  s = s.trim();

  // Remove leading zeros before decimal
  if (s.includes('.')) {
    // Remove leading "0." zeros for counting
    const parts = s.split('.');
    const whole = parts[0].replace(/^0+/, '');
    const dec = parts[1] || '';
    if (whole === '' || whole === '0') {
      // Number like 0.00123 — sig figs start at first non-zero
      const match = dec.match(/^0*/);
      const leadingZeros = match ? match[0].length : 0;
      return dec.length - leadingZeros;
    }
    return whole.length + dec.length;
  } else {
    // Integer — trailing zeros are ambiguous, but count all digits
    s = s.replace(/^0+/, '');
    return s.length || 1;
  }
}

function formatAnswer(num, answerType) {
  if (answerType === 'integer') return Math.round(num).toString();
  if (answerType === 'dollar') return '$' + Math.abs(num).toFixed(2);

  // Standard 3-sig-fig formatting
  if (num === 0) return '0.00';
  const absNum = Math.abs(num);
  const sign = num < 0 ? '-' : '';

  if (absNum >= 1000) {
    // Use scientific notation for large numbers
    const exp = Math.floor(Math.log10(absNum));
    const mantissa = absNum / Math.pow(10, exp);
    return sign + mantissa.toFixed(2) + '×10' + superscript(exp);
  }
  if (absNum >= 1) {
    const exp = Math.floor(Math.log10(absNum));
    const digits = 3 - exp - 1;
    if (digits <= 0) {
      return sign + Math.round(absNum / Math.pow(10, -digits)) * Math.pow(10, -digits);
    }
    return sign + absNum.toFixed(digits);
  }
  if (absNum >= 0.001) {
    // Find first sig fig position
    const exp = Math.floor(Math.log10(absNum));
    const digits = 3 - exp - 1;
    return sign + absNum.toFixed(Math.min(digits, 10));
  }
  // Very small — use scientific notation
  const exp = Math.floor(Math.log10(absNum));
  const mantissa = absNum / Math.pow(10, exp);
  return sign + mantissa.toFixed(2) + '×10' + superscript(exp);
}

function superscript(n) {
  const sup = { '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹', '-': '⁻' };
  return String(n).split('').map(c => sup[c] || c).join('');
}

function gradeAnswer(userInput, problem) {
  const parsed = parseUserAnswer(userInput);

  if (parsed === null || userInput.trim() === '') {
    return { status: 'skipped', points: 0, userValue: null };
  }

  const correct = problem.answer;
  const type = problem.answerType;

  if (type === 'integer') {
    // Must be exact integer
    if (Number.isInteger(parsed) && parsed === correct) {
      return { status: 'correct', points: 5, userValue: parsed };
    }
    return { status: 'wrong', points: -2, userValue: parsed };
  }

  if (type === 'dollar') {
    // Within ±$0.01
    if (Math.abs(parsed - correct) <= 0.015) {
      return { status: 'correct', points: 5, userValue: parsed };
    }
    return { status: 'wrong', points: -2, userValue: parsed };
  }

  // Standard and SD: 3 significant digit comparison
  // Check if the answer is within tolerance
  const tol = problem.tolerance || getDefaultTolerance(correct);

  if (Math.abs(parsed - correct) <= tol) {
    return { status: 'correct', points: 5, userValue: parsed };
  }

  // For stated/geometry: check if it's a sig-fig error (close but wrong precision)
  if (problem.category === 'stated' || problem.category === 'geometry') {
    // Check if answer rounds to correct with fewer sig figs
    const looseToI = tol * 10;
    if (Math.abs(parsed - correct) <= looseToI) {
      return { status: 'partial', points: 2, userValue: parsed };
    }
  }

  return { status: 'wrong', points: -2, userValue: parsed };
}

function getDefaultTolerance(answer) {
  if (answer === 0) return 0.005;
  const absAns = Math.abs(answer);
  // Tolerance ≈ 0.5 in the 3rd significant digit
  const magnitude = Math.pow(10, Math.floor(Math.log10(absAns)));
  return magnitude * 0.005;
}

// ── START MODES ──
function startSkills(category, topic) {
  const problems = shuffleArray(getCalcProblemsForTopic(category, topic));
  if (problems.length === 0) return;
  setState({
    screen: 'test', mode: 'skills', category, topic,
    problems, idx: 0, userAnswer: '', answered: false,
    gradeResult: null, totalPoints: 0, results: [], timed: false, timeLeft: 0
  });
  focusInput();
}

function startDrill(category) {
  const problems = shuffleArray(getCalcProblemsForCategory(category));
  setState({
    screen: 'test', mode: 'drill', category, topic: null,
    problems, idx: 0, userAnswer: '', answered: false,
    gradeResult: null, totalPoints: 0, results: [], timed: false, timeLeft: 0
  });
  focusInput();
}

function startPractice(category, seconds) {
  // Practice test: all categories mixed
  let problems;
  if (category === 'all') {
    problems = shuffleArray([...CALC_PROBLEMS]);
  } else {
    problems = shuffleArray(getCalcProblemsForCategory(category));
  }
  setState({
    screen: 'test', mode: 'practice', category, topic: null,
    problems, idx: 0, userAnswer: '', answered: false,
    gradeResult: null, totalPoints: 0, results: [], showModal: false
  });
  startTimer(seconds);
  focusInput();
}

function focusInput() {
  setTimeout(() => {
    const inp = document.getElementById('answer-input');
    if (inp) inp.focus();
  }, 50);
}

// ── ANSWER LOGIC ──
function submitAnswer() {
  if (state.answered) return;
  const p = state.problems[state.idx];
  const result = gradeAnswer(state.userAnswer, p);
  state.results.push({ problem: p, userAnswer: state.userAnswer, gradeResult: result });
  setState({
    answered: true,
    gradeResult: result,
    totalPoints: state.totalPoints + result.points
  });
}

function nextQuestion() {
  if (state.idx + 1 >= state.problems.length) {
    finishTest();
    return;
  }
  setState({
    idx: state.idx + 1,
    userAnswer: '',
    answered: false,
    gradeResult: null
  });
  focusInput();
}

function skipQuestion() {
  const p = state.problems[state.idx];
  state.results.push({ problem: p, userAnswer: '', gradeResult: { status: 'skipped', points: 0, userValue: null } });
  if (state.idx + 1 >= state.problems.length) {
    finishTest();
    return;
  }
  setState({
    idx: state.idx + 1,
    userAnswer: '',
    answered: false,
    gradeResult: null
  });
  focusInput();
}

function finishTest() {
  clearTimer();
  recordSession(state.mode, state.category, state.topic, state.results, 0);
  setState({ screen: 'results', timed: false });
}

// ── INPUT HANDLER ──
function handleAnswerInput(e) {
  state.userAnswer = e.target.value;
}

function handleAnswerKeydown(e) {
  if (e.key === 'Enter') {
    if (state.answered) {
      nextQuestion();
    } else {
      submitAnswer();
    }
  }
}

// ── RENDER ──
function render() {
  switch (state.screen) {
    case 'menu': renderMenu(); break;
    case 'test': renderTest(); break;
    case 'results': renderResults(); break;
    case 'stats': renderStats(); break;
  }
}

// ── MENU SCREEN ──
function renderMenu() {
  const cat = CATEGORIES[state.category];
  const topics = getCalcTopicsForCategory(state.category);
  const stats = loadStats();
  const catSessions = stats.sessions.filter(s => s.category === state.category);
  const totalQ = catSessions.reduce((s, x) => s + x.total, 0);
  const totalC = catSessions.reduce((s, x) => s + x.correct, 0);
  const totalPts = catSessions.reduce((s, x) => s + (x.points || 0), 0);

  app.innerHTML = `
    <div class="header">
      <a href="../index.html" class="back-home">&larr; STEM Home</a>
      <h1>🧮 UIL Calculator Applications</h1>
      <p>Typed-answer practice &middot; 3 significant digits</p>
      <div class="tab-bar">
        ${['numerical','stated','geometry'].map(c =>
          `<button class="tab-btn ${state.category === c ? 'active' : ''}" onclick="switchCategory('${c}')">${CATEGORIES[c].icon} ${CATEGORIES[c].name}</button>`
        ).join('')}
      </div>
    </div>
    ${state.showModal ? renderTimePicker() : ''}
    <div class="menu-body">
      ${catSessions.length > 0 ? `
        <div class="stats-preview">
          <span class="sp-item">${totalQ} Problems Attempted</span>
          <span class="sp-item">${totalQ > 0 ? Math.round(totalC/totalQ*100) : 0}% Accuracy</span>
          <span class="sp-item">${totalPts >= 0 ? '+' : ''}${totalPts} Points</span>
        </div>
        <div style="text-align:center;margin-bottom:10px;">
          <button class="stats-btn" onclick="setState({screen:'stats'})">View Stats</button>
        </div>
      ` : ''}

      <div class="scoring-info">
        <div class="scoring-row">
          <span><span class="sc-pos">+5</span> Correct</span>
          <span><span class="sc-neg">&minus;2</span> Wrong / Skipped</span>
          <span><span class="sc-part">+2</span> Wrong sig figs (stated/geo)</span>
        </div>
      </div>

      <div class="section-tag">Practice Modes</div>
      <div class="focus-card">
        <div class="fc-head">
          <div class="fc-icon">${cat.icon}</div>
          <div>
            <h2>${cat.name} Problems</h2>
            <p>${categoryDescription(state.category)}</p>
          </div>
        </div>
        <div class="mode-row">
          <button class="mode-btn" onclick="startDrill('${state.category}')">
            <div class="mb-title">🔥 Drill Mode</div>
            <div class="mb-desc">Random ${cat.name.toLowerCase()} problems. No timer, immediate feedback after each answer.</div>
          </button>
          <button class="mode-btn" onclick="setState({showModal:true})">
            <div class="mb-title">⏱ Practice Test</div>
            <div class="mb-desc">Timed test simulating UIL competition. Type answers in 3-sig-fig format.</div>
          </button>
        </div>
      </div>

      <div class="section-tag">Skills – Choose a Topic</div>
      <div class="topic-grid">
        ${topics.map(t => {
          const key = t.category + '|' + t.topic;
          const ts = stats.topicScores[key];
          const pct = ts ? Math.round(ts.correct / ts.total * 100) + '%' : '';
          return `<button class="topic-btn" onclick="startSkills('${t.category}','${t.topic}')">
            <div class="tb-icon">${topicIcon(t.topic)}</div>
            <div class="tb-name">${t.topic}</div>
            <div class="tb-sub">${t.count} Qs${pct ? ' · ' + pct : ''}</div>
          </button>`;
        }).join('')}
      </div>
    </div>
  `;
}

function categoryDescription(cat) {
  const descs = {
    numerical: 'Pure calculator expressions: arithmetic, fractions, powers, roots, logarithms, trig, exponentials. Type your answer in 3 significant digits.',
    stated: 'Word problems requiring translation to math: unit conversion, rates, percents, cost problems, optimization, calculus, statistics, and matrix operations.',
    geometry: 'Geometric figures with given dimensions. Calculate area, perimeter, volume, surface area, or missing sides/angles.'
  };
  return descs[cat] || '';
}

function topicIcon(topic) {
  const icons = {
    'Arithmetic': '➕', 'Complex Expressions': '🔣', 'Powers & Roots': '√',
    'Logarithms': '📊', 'Exponentials': '📈', 'Trigonometry': '📐',
    'Mixed Advanced': '🧩',
    'Unit Conversion': '🔄', 'Rate': '⏱', 'Percent': '💯',
    'Geometry Word': '📏', 'Conversion': '🔄', 'Dollar': '💵',
    'Statistics': '📊', 'Integer': '🔢', 'SD': '🎯',
    'Optimization': '⚡', 'Calculus': '∫', 'Matrix': '🔲',
    'Semicircle': '🌙', 'Trapezoid': '⬡', 'Right Triangle': '📐',
    'Parallelogram': '▰', 'Scalene Triangle': '△',
    'Frustum': '🔺', 'Prism': '🔷', 'Cuboid': '📦',
    'Sphere': '🌐', 'Cylinder': '🛢', 'Circle': '⭕', 'Combined': '🔀'
  };
  return icons[topic] || '📝';
}

function renderTimePicker() {
  return `
    <div class="modal-overlay" onclick="setState({showModal:false})">
      <div class="modal-box" onclick="event.stopPropagation()">
        <h2>⏱ Practice Test</h2>
        <p class="modal-sub">Choose a time limit. UIL Calculator Apps is 30 minutes for 70 problems.</p>
        <button class="time-btn" onclick="startPractice('${state.category}', 600)">
          <div class="tb-row"><span>10 Minutes</span><span class="tb-time">Quick Drill</span></div>
          <div class="tb-note">Fast warmup session</div>
        </button>
        <button class="time-btn" onclick="startPractice('${state.category}', 1200)">
          <div class="tb-row"><span>20 Minutes</span><span class="tb-time">Half Test</span></div>
          <div class="tb-note">Solid practice session</div>
        </button>
        <button class="time-btn" onclick="startPractice('${state.category}', 1800)">
          <div class="tb-row"><span>30 Minutes</span><span class="tb-time">Full UIL Test</span></div>
          <div class="tb-note">Official UIL Calculator Applications time</div>
        </button>
        <button class="time-btn" onclick="startPractice('all', 1800)">
          <div class="tb-row"><span>30 Min – All Categories</span><span class="tb-time">Full Mix</span></div>
          <div class="tb-note">All problem types combined</div>
        </button>
        <button class="modal-close" onclick="setState({showModal:false})">Cancel</button>
      </div>
    </div>
  `;
}

// ── TEST SCREEN ──
function renderTest() {
  const p = state.problems[state.idx];
  const cat = CATEGORIES[p.category] || CATEGORIES.numerical;
  const modeLabel = state.mode === 'skills' ? `Skills: ${state.topic}` :
                    state.mode === 'drill' ? 'Drill Mode' : 'Practice Test';

  // Answer type hint
  const hintMap = {
    standard: '3 SIG FIGS',
    integer: 'INTEGER',
    dollar: 'DOLLAR ($)',
    sd: 'SIG DIGITS'
  };
  const hint = hintMap[p.answerType] || '3 SIG FIGS';

  let feedbackHTML = '';
  if (state.answered && state.gradeResult) {
    const r = state.gradeResult;
    const statusText = r.status === 'correct' ? '✓ Correct! (+5 pts)' :
                       r.status === 'partial' ? '~ Sig Fig Error (+2 pts)' :
                       r.status === 'skipped' ? '— Skipped (0 pts)' :
                       '✕ Incorrect (−2 pts)';
    feedbackHTML = `
      <div class="feedback-bar ${r.status}">
        ${statusText}
      </div>
      <div class="correct-answer">
        Correct answer: <strong>${formatAnswer(p.answer, p.answerType)}</strong>${p.units ? ' ' + p.units : ''}
      </div>
      <div class="explanation-box">
        <div class="explanation-label">Solution</div>
        <div class="explanation-text">${p.explanation}</div>
      </div>
    `;
  }

  const inputClass = state.answered ? (state.gradeResult ?
    (state.gradeResult.status === 'correct' ? 'correct' :
     state.gradeResult.status === 'partial' ? 'partial' : 'wrong') : '') : '';

  const pointsDisplay = state.totalPoints >= 0 ?
    `<span style="color:#48bb78">+${state.totalPoints}</span>` :
    `<span style="color:#f56565">${state.totalPoints}</span>`;

  app.innerHTML = `
    <div class="test-header">
      <div class="test-top">
        <span class="t-label">${cat.icon} ${modeLabel}</span>
        <span>Q ${state.idx + 1} of ${state.problems.length}</span>
        ${state.timed ? `<span class="t-timer ${timerClass()}">${formatTime(state.timeLeft)}</span>` : ''}
        <span class="t-score">${pointsDisplay} pts</span>
      </div>
      <div class="prog-bar"><div class="prog-fill" style="width:${(state.idx + 1) / state.problems.length * 100}%"></div></div>
    </div>
    <div class="test-body">
      <div class="question-box">
        ${p.svg ? `<div class="geo-diagram">${p.svg}</div>` : ''}
        <div class="question-text math-expr">${p.display}</div>
        <div class="question-tag">${p.category} · ${p.topic}</div>
      </div>

      <div class="answer-section">
        <div class="answer-label">
          Your Answer
          <span class="answer-hint">${hint}</span>
        </div>
        <div class="answer-row">
          ${p.units === '$' ? '<span class="answer-units">$</span>' : ''}
          <input
            type="text"
            id="answer-input"
            class="answer-input ${inputClass}"
            placeholder="${getPlaceholder(p.answerType)}"
            value="${state.userAnswer}"
            oninput="handleAnswerInput(event)"
            onkeydown="handleAnswerKeydown(event)"
            ${state.answered ? 'disabled' : ''}
            autocomplete="off"
            spellcheck="false"
          />
          ${p.units && p.units !== '$' ? `<span class="answer-units">${p.units}</span>` : ''}
        </div>
      </div>

      ${feedbackHTML}

      <div class="btn-row">
        ${!state.answered ? `
          <button class="btn btn-primary" onclick="submitAnswer()">Submit (Enter)</button>
          <button class="btn btn-subtle" onclick="skipQuestion()">Skip</button>
        ` : `
          <button class="btn btn-primary" onclick="nextQuestion()">${state.idx + 1 >= state.problems.length ? 'View Results' : 'Next (Enter)'}</button>
        `}
      </div>
      <div style="text-align:center;margin-top:10px;">
        <button class="btn btn-subtle" onclick="if(confirm('End this session?')) finishTest()" style="width:auto;display:inline-block;">End Session</button>
      </div>
    </div>
  `;
}

function getPlaceholder(type) {
  switch (type) {
    case 'integer': return 'Type an integer (e.g. 42)';
    case 'dollar': return 'e.g. 23.54';
    case 'sd': return '3 sig figs (e.g. 16.8)';
    default: return 'e.g. 1.23, 4.56x10^3, 0.0190';
  }
}

// ── RESULTS SCREEN ──
function renderResults() {
  const total = state.results.length;
  const correct = state.results.filter(r => r.gradeResult.status === 'correct').length;
  const partial = state.results.filter(r => r.gradeResult.status === 'partial').length;
  const wrong = state.results.filter(r => r.gradeResult.status === 'wrong').length;
  const skipped = state.results.filter(r => r.gradeResult.status === 'skipped').length;
  const points = state.results.reduce((s, r) => s + r.gradeResult.points, 0);
  const pct = total > 0 ? Math.round(correct / total * 100) : 0;

  app.innerHTML = `
    <div class="results-wrap">
      <h1>Results</h1>
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-val ${points >= 0 ? 'positive' : 'negative'}">${points >= 0 ? '+' : ''}${points}</div>
          <div class="stat-label">UIL Points</div>
        </div>
        <div class="stat-card">
          <div class="stat-val">${pct}%</div>
          <div class="stat-label">Accuracy</div>
        </div>
        <div class="stat-card">
          <div class="stat-val">${correct}</div>
          <div class="stat-label">Correct (+5)</div>
        </div>
        <div class="stat-card">
          <div class="stat-val">${partial}</div>
          <div class="stat-label">Partial (+2)</div>
        </div>
        <div class="stat-card">
          <div class="stat-val">${wrong}</div>
          <div class="stat-label">Wrong (−2)</div>
        </div>
        <div class="stat-card">
          <div class="stat-val">${skipped}</div>
          <div class="stat-label">Skipped</div>
        </div>
      </div>

      <div class="review-title">Review Answers</div>
      <div class="review-box">
        ${state.results.map((r, i) => {
          const cls = r.gradeResult.status;
          const yourAns = r.userAnswer || '—';
          const correctAns = formatAnswer(r.problem.answer, r.problem.answerType);
          const pts = r.gradeResult.points;
          const ptsStr = pts > 0 ? `+${pts}` : pts === 0 ? '0' : `${pts}`;
          return `<div class="rev-item ${cls}">
            <span class="ri-num">#${i + 1}</span>
            <span class="ri-q">${truncate(r.problem.plain || r.problem.display.replace(/<[^>]*>/g, ''), 40)}</span>
            <span class="ri-a">${ptsStr} | ${yourAns}${cls !== 'correct' ? ' → ' + correctAns : ''}</span>
          </div>`;
        }).join('')}
      </div>

      <div class="res-btns">
        <button class="btn btn-primary" onclick="restartSameMode()">Try Again</button>
        <button class="btn btn-green" onclick="setState({screen:'menu',showModal:false})">New Mode</button>
        <button class="btn btn-subtle" onclick="setState({screen:'stats'})">View Stats</button>
      </div>
    </div>
  `;
}

function truncate(s, n) {
  return s.length > n ? s.slice(0, n) + '...' : s;
}

function restartSameMode() {
  if (state.mode === 'skills' && state.topic) {
    startSkills(state.category, state.topic);
  } else if (state.mode === 'drill') {
    startDrill(state.category);
  } else {
    setState({ screen: 'menu', showModal: true });
  }
}

// ── STATS SCREEN ──
function renderStats() {
  const stats = loadStats();
  const sessions = stats.sessions;

  if (sessions.length === 0) {
    app.innerHTML = `
      <div class="stats-screen">
        <div class="header">
          <h1>Your Progress</h1>
          <button class="stats-back" onclick="setState({screen:'menu'})">Back</button>
        </div>
        <div class="empty-state">
          <div class="es-icon">📊</div>
          <h2>No Data Yet</h2>
          <p>Complete some practice sessions to see your progress.</p>
          <button class="btn btn-primary" style="width:auto;display:inline-block;padding:14px 32px;" onclick="setState({screen:'menu'})">Start Practicing</button>
        </div>
      </div>
    `;
    return;
  }

  const totalQ = sessions.reduce((s, x) => s + x.total, 0);
  const totalC = sessions.reduce((s, x) => s + x.correct, 0);
  const totalPts = sessions.reduce((s, x) => s + (x.points || 0), 0);
  const overallPct = Math.round(totalC / totalQ * 100);

  const catBreakdowns = ['numerical', 'stated', 'geometry'].map(cat => {
    const catSessions = sessions.filter(s => s.category === cat);
    const sq = catSessions.reduce((s, x) => s + x.total, 0);
    const sc = catSessions.reduce((s, x) => s + x.correct, 0);
    const topics = getCalcTopicsForCategory(cat).map(t => {
      const key = t.category + '|' + t.topic;
      const ts = stats.topicScores[key];
      return { name: t.topic, correct: ts ? ts.correct : 0, total: ts ? ts.total : 0 };
    }).filter(t => t.total > 0);
    return { category: cat, info: CATEGORIES[cat], questions: sq, correct: sc, topics };
  });

  const recent = [...sessions].reverse().slice(0, 10);

  app.innerHTML = `
    <div class="stats-screen">
      <div class="header">
        <h1>📈 Your Progress</h1>
        <button class="stats-back" onclick="setState({screen:'menu'})">Back</button>
      </div>
      <div class="stats-body">
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-val">${sessions.length}</div>
            <div class="stat-label">Sessions</div>
          </div>
          <div class="stat-card">
            <div class="stat-val">${totalQ}</div>
            <div class="stat-label">Problems</div>
          </div>
          <div class="stat-card">
            <div class="stat-val">${overallPct}%</div>
            <div class="stat-label">Accuracy</div>
          </div>
          <div class="stat-card">
            <div class="stat-val ${totalPts >= 0 ? 'positive' : 'negative'}">${totalPts >= 0 ? '+' : ''}${totalPts}</div>
            <div class="stat-label">Total Points</div>
          </div>
        </div>

        <div class="section-tag" style="margin-top:24px;">Category Breakdown</div>
        <div class="subject-breakdown">
          ${catBreakdowns.map(cb => {
            if (cb.questions === 0) return '';
            const pct = Math.round(cb.correct / cb.questions * 100);
            return `<div class="subject-stat-card">
              <h3>${cb.info.icon} ${cb.info.name} — ${pct}%</h3>
              ${cb.topics.map(t => {
                const tp = t.total > 0 ? Math.round(t.correct / t.total * 100) : 0;
                const barColor = tp >= 70 ? '#48bb78' : tp >= 40 ? '#ed8936' : '#f56565';
                return `<div class="topic-stat">
                  <span class="ts-name">${t.name}</span>
                  <div class="ts-bar-wrap"><div class="ts-bar" style="width:${tp}%;background:${barColor};"></div></div>
                  <span class="ts-score">${t.correct}/${t.total} (${tp}%)</span>
                </div>`;
              }).join('')}
            </div>`;
          }).join('')}
        </div>

        <div class="history-section">
          <h3>Recent Sessions</h3>
          ${recent.map(s => {
            const pct = Math.round(s.correct / s.total * 100);
            const d = new Date(s.date);
            const dateStr = (d.getMonth()+1) + '/' + d.getDate() + ' ' + d.getHours() + ':' + (d.getMinutes()<10?'0':'') + d.getMinutes();
            const catInfo = CATEGORIES[s.category];
            return `<div class="history-item">
              <span class="hi-mode">${catInfo ? catInfo.icon : '🧮'} ${capitalize(s.mode)}${s.topic ? ': ' + s.topic : ''}</span>
              <span class="hi-score">${s.correct}/${s.total} (${pct}%) · ${(s.points||0) >= 0 ? '+' : ''}${s.points||0} pts</span>
              <span class="hi-date">${dateStr}</span>
            </div>`;
          }).join('')}
        </div>

        <div style="text-align:center;margin-top:24px;">
          <button class="btn btn-subtle" style="width:auto;display:inline-block;" onclick="if(confirm('Clear all stats? This cannot be undone.')){localStorage.removeItem('${STORAGE_KEY}');setState({screen:'stats'});}">Reset All Stats</button>
        </div>
      </div>
    </div>
  `;
}

function capitalize(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

// ── CATEGORY SWITCHING ──
function switchCategory(c) {
  setState({ category: c, showModal: false });
}

// ── INIT ──
render();
