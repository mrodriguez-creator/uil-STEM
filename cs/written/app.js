// UIL Computer Science Trainer – Main Application
// Vanilla JS, single-page app with 5-choice multiple-choice (A–E)

const $ = id => document.getElementById(id);
const app = document.getElementById('app');

// ── STATE ──
const state = {
  screen: 'menu',        // menu | test | results | stats
  mode: null,             // skills | drill | practice
  topic: null,            // topic name or null
  problems: [],           // current question set
  idx: 0,                 // current question index
  selected: -1,           // selected choice index (-1 = none)
  answered: false,        // has current question been answered?
  score: 0,
  results: [],            // { question, selected, correct, isCorrect }
  timeLeft: 0,
  timed: false,
  timerInterval: null,
  showModal: false,       // time picker modal
  hintVisible: false,     // hint toggle state
};

// ── PERSISTENCE ──
const STORAGE_KEY = 'uil-cs-stats';

function loadStats() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || defaultStats(); }
  catch { return defaultStats(); }
}
function defaultStats() { return { sessions: [], topicScores: {} }; }
function saveStats(stats) { localStorage.setItem(STORAGE_KEY, JSON.stringify(stats)); }

function recordSession(mode, topic, results, timeTaken) {
  const stats = loadStats();
  stats.sessions.push({
    date: new Date().toISOString(),
    mode, topic,
    total: results.length,
    correct: results.filter(r => r.isCorrect).length,
    timeTaken
  });
  results.forEach(r => {
    const key = r.question.topic;
    if (!stats.topicScores[key]) stats.topicScores[key] = { correct: 0, total: 0 };
    stats.topicScores[key].total++;
    if (r.isCorrect) stats.topicScores[key].correct++;
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

// ── START MODES ──
function startSkills(topic) {
  const questions = shuffleArray(getQuestionsForTopic(topic));
  if (questions.length === 0) return;
  setState({
    screen: 'test', mode: 'skills', topic,
    problems: questions, idx: 0, selected: -1, answered: false,
    score: 0, results: [], timed: false, timeLeft: 0, hintVisible: false
  });
}

function startDrill() {
  const questions = shuffleArray(getAllQuestions());
  setState({
    screen: 'test', mode: 'drill', topic: null,
    problems: questions, idx: 0, selected: -1, answered: false,
    score: 0, results: [], timed: false, timeLeft: 0, hintVisible: false
  });
}

function startPractice(seconds) {
  const all = shuffleArray(getAllQuestions());
  const questions = all.slice(0, 40); // UIL CS written test is 40 questions
  setState({
    screen: 'test', mode: 'practice', topic: null,
    problems: questions, idx: 0, selected: -1, answered: false,
    score: 0, results: [], showModal: false, hintVisible: false
  });
  startTimer(seconds);
}

// ── HINT TOGGLE ──
function toggleHint() {
  state.hintVisible = !state.hintVisible;
  render();
}

// ── ANSWER LOGIC ──
function selectChoice(i) {
  if (state.answered) return;
  setState({ selected: i });
}

function submitAnswer() {
  if (state.selected < 0 || state.answered) return;
  const q = state.problems[state.idx];
  const isCorrect = state.selected === q.answer;
  state.results.push({ question: q, selected: state.selected, correct: q.answer, isCorrect });
  setState({ answered: true, score: state.score + (isCorrect ? 1 : 0) });
}

function nextQuestion() {
  if (state.idx + 1 >= state.problems.length) {
    finishTest();
    return;
  }
  setState({ idx: state.idx + 1, selected: -1, answered: false, hintVisible: false });
}

function skipQuestion() {
  const q = state.problems[state.idx];
  state.results.push({ question: q, selected: -1, correct: q.answer, isCorrect: false });
  if (state.idx + 1 >= state.problems.length) { finishTest(); return; }
  setState({ idx: state.idx + 1, selected: -1, answered: false, hintVisible: false });
}

function finishTest() {
  clearTimer();
  recordSession(state.mode, state.topic, state.results, 0);
  setState({ screen: 'results', timed: false });
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

// ── TOPIC INFO ──
const TOPIC_INFO = {
  'Base Conversions': { icon: '🔢', desc: 'Binary, hex, octal, two\'s complement, base arithmetic' },
  'Java Basics': { icon: '☕', desc: 'Expressions, operators, data types, output, printf, casting' },
  'Strings & Math': { icon: '📝', desc: 'String methods, parsing, Math class, Character operations' },
  'Boolean Logic': { icon: '⚡', desc: 'Boolean operators, bitwise, De Morgan\'s, logic gates, Polish notation' },
  'Control Flow': { icon: '🔄', desc: 'Conditionals, loops, break/continue, accumulation patterns' },
  'Arrays & Collections': { icon: '📦', desc: 'Arrays, ArrayList, HashMap, Stack, Queue, sorting, searching' },
  'OOP': { icon: '🏗️', desc: 'Classes, inheritance, polymorphism, interfaces, abstract classes' },
  'Data Structures & Algorithms': { icon: '🌳', desc: 'Trees, graphs, Big-O, sorting algorithms, recursion' },
  'Code Tracing': { icon: '🔍', desc: 'Multi-step output tracing, loops, arrays, recursion, OOP, mixed complexity' },
};

function topicIcon(topic) {
  return TOPIC_INFO[topic]?.icon || '📝';
}

// ── MENU SCREEN ──
function renderMenu() {
  const topics = getTopics();
  const stats = loadStats();
  const sessions = stats.sessions;
  const totalQ = sessions.reduce((s, x) => s + x.total, 0);
  const totalC = sessions.reduce((s, x) => s + x.correct, 0);

  app.innerHTML = `
    <div class="header">
      <a href="../index.html" class="back-home">&larr; CS Home</a>
      <h1>💻 UIL CS Written Test</h1>
      <p>40 multiple-choice questions &middot; 45 minutes &middot; Java-based</p>
    </div>
    ${state.showModal ? renderTimePicker() : ''}
    <div class="menu-body">
      ${sessions.length > 0 ? `
        <div class="stats-preview">
          <span class="sp-item">${totalQ} Questions Practiced</span>
          <span class="sp-item">${totalQ > 0 ? Math.round(totalC/totalQ*100) : 0}% Accuracy</span>
          <span class="sp-item">${sessions.length} Sessions</span>
        </div>
        <div style="text-align:center;margin-bottom:10px;">
          <button class="stats-btn" onclick="setState({screen:'stats'})">View Stats</button>
        </div>
      ` : ''}

      <div class="section-tag">Practice Modes</div>
      <div class="focus-card">
        <div class="fc-head">
          <div class="fc-icon">💻</div>
          <div>
            <h2>Computer Science</h2>
            <p>UIL Computer Science covers Java programming, data structures, algorithms, Boolean logic, base conversions, and more. 5-choice multiple choice (A–E).</p>
          </div>
        </div>
        <div class="mode-row">
          <button class="mode-btn" onclick="startDrill()">
            <div class="mb-title">🔥 Drill Mode</div>
            <div class="mb-desc">Random questions across all topics. No timer, immediate feedback after each question.</div>
          </button>
          <button class="mode-btn" onclick="setState({showModal:true})">
            <div class="mb-title">⏱ Practice Test</div>
            <div class="mb-desc">Timed test simulating UIL competition. 40 questions in 45 minutes.</div>
          </button>
        </div>
      </div>

      <div class="section-tag">Skills – Choose a Topic</div>
      <div class="topic-grid">
        ${topics.map(t => {
          const ts = stats.topicScores[t.topic];
          const pct = ts ? Math.round(ts.correct / ts.total * 100) + '%' : '';
          return `<button class="topic-btn" onclick="startSkills('${t.topic}')">
            <div class="tb-icon">${topicIcon(t.topic)}</div>
            <div class="tb-name">${t.topic}</div>
            <div class="tb-sub">${t.count} Qs${pct ? ' · ' + pct : ''}</div>
          </button>`;
        }).join('')}
      </div>
    </div>
  `;
}

function renderTimePicker() {
  return `
    <div class="modal-overlay" onclick="setState({showModal:false})">
      <div class="modal-box" onclick="event.stopPropagation()">
        <h2>⏱ Practice Test</h2>
        <p class="modal-sub">Choose a time limit. UIL Computer Science is 45 minutes for 40 questions.</p>
        <button class="time-btn" onclick="startPractice(600)">
          <div class="tb-row"><span>10 Minutes</span><span class="tb-time">Quick Drill</span></div>
          <div class="tb-note">Fast warmup session</div>
        </button>
        <button class="time-btn" onclick="startPractice(1350)">
          <div class="tb-row"><span>22 Minutes</span><span class="tb-time">Half Test</span></div>
          <div class="tb-note">Solid practice session</div>
        </button>
        <button class="time-btn" onclick="startPractice(2700)">
          <div class="tb-row"><span>45 Minutes</span><span class="tb-time">Full UIL Test</span></div>
          <div class="tb-note">Official UIL Computer Science time</div>
        </button>
        <button class="modal-close" onclick="setState({showModal:false})">Cancel</button>
      </div>
    </div>
  `;
}

// ── TEST SCREEN ──
function renderTest() {
  const q = state.problems[state.idx];
  const modeLabel = state.mode === 'skills' ? `Skills: ${state.topic}` :
                    state.mode === 'drill' ? 'Drill Mode' : 'Practice Test';
  const letters = ['A', 'B', 'C', 'D', 'E'];

  let feedbackHTML = '';
  if (state.answered) {
    const isCorrect = state.selected === q.answer;
    feedbackHTML = `
      <div class="feedback-bar ${isCorrect ? 'correct' : 'wrong'}">
        ${isCorrect ? '✓ Correct!' : `✕ Incorrect — Answer is ${letters[q.answer]}`}
      </div>
      <div class="explanation-box">
        <div class="explanation-label">Solution</div>
        <div class="explanation-text">${q.explanation}</div>
      </div>
    `;
  }

  app.innerHTML = `
    <div class="test-header">
      <div class="test-top">
        <span class="t-label">💻 ${modeLabel}</span>
        <span>Q ${state.idx + 1} of ${state.problems.length}</span>
        ${state.timed ? `<span class="t-timer ${timerClass()}">${formatTime(state.timeLeft)}</span>` : ''}
        <span class="t-score">${state.score}/${state.results.length} correct</span>
      </div>
      <div class="prog-bar"><div class="prog-fill" style="width:${(state.idx + 1) / state.problems.length * 100}%"></div></div>
    </div>
    <div class="test-body">
      <div class="question-box">
        <div class="question-text">${q.question}</div>
        <div class="question-tag">${q.topic}</div>
      </div>
      <div class="choices">
        ${q.choices.map((c, i) => {
          let cls = 'choice-btn';
          if (state.answered) {
            if (i === q.answer) cls += ' correct reveal-correct';
            else if (i === state.selected) cls += ' wrong';
          } else if (i === state.selected) {
            cls += ' selected';
          }
          return `<button class="${cls}" onclick="selectChoice(${i})" ${state.answered ? 'disabled' : ''}>
            <span class="choice-letter">${letters[i]}</span>
            <span class="choice-text">${c}</span>
          </button>`;
        }).join('')}
      </div>
      ${q.hint && !state.answered ? `
      <div class="hint-section">
        <button class="hint-toggle" onclick="toggleHint()">
          <span class="hint-icon">${state.hintVisible ? '▼' : '▶'}</span>
          ${state.hintVisible ? 'Hide Hint' : 'Show Hint'}
        </button>
        ${state.hintVisible ? `
        <div class="hint-content">
          <div class="hint-label">💡 Hint</div>
          <div class="hint-text">${q.hint}</div>
        </div>` : ''}
      </div>` : ''}
      ${feedbackHTML}
      <div class="btn-row">
        ${!state.answered ? `
          <button class="btn btn-primary" onclick="submitAnswer()" ${state.selected < 0 ? 'disabled style="opacity:0.5;cursor:not-allowed"' : ''}>Submit</button>
          <button class="btn btn-subtle" onclick="skipQuestion()">Skip</button>
        ` : `
          <button class="btn btn-primary" onclick="nextQuestion()">${state.idx + 1 >= state.problems.length ? 'View Results' : 'Next Question'}</button>
        `}
      </div>
      <div style="text-align:center;margin-top:10px;">
        <button class="btn btn-subtle" onclick="if(confirm('End this session?')) finishTest()" style="width:auto;display:inline-block;">End Session</button>
      </div>
    </div>
  `;
}

// ── RESULTS SCREEN ──
function renderResults() {
  const total = state.results.length;
  const correct = state.results.filter(r => r.isCorrect).length;
  const pct = total > 0 ? Math.round(correct / total * 100) : 0;
  const letters = ['A', 'B', 'C', 'D', 'E'];

  app.innerHTML = `
    <div class="results-wrap">
      <h1>Results</h1>
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-val">${pct}%</div>
          <div class="stat-label">Accuracy</div>
        </div>
        <div class="stat-card">
          <div class="stat-val">${correct}</div>
          <div class="stat-label">Correct</div>
        </div>
        <div class="stat-card">
          <div class="stat-val">${total - correct}</div>
          <div class="stat-label">Incorrect</div>
        </div>
        <div class="stat-card">
          <div class="stat-val">${total}</div>
          <div class="stat-label">Total</div>
        </div>
      </div>

      <div class="review-title">Review Answers</div>
      <div class="review-box">
        ${state.results.map((r, i) => {
          const cls = r.isCorrect ? 'correct' : 'wrong';
          const yourAns = r.selected >= 0 ? letters[r.selected] : '—';
          return `<div class="rev-item ${cls}">
            <span class="ri-num">#${i + 1}</span>
            <span class="ri-q">${truncate(r.question.question.replace(/<[^>]*>/g, ''), 50)}</span>
            <span class="ri-a">${r.isCorrect ? '✓' : '✕'} ${yourAns}${!r.isCorrect ? ' → ' + letters[r.correct] : ''}</span>
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
    startSkills(state.topic);
  } else if (state.mode === 'drill') {
    startDrill();
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
  const overallPct = Math.round(totalC / totalQ * 100);

  const topicBreakdowns = getTopics().map(t => {
    const ts = stats.topicScores[t.topic];
    return {
      name: t.topic,
      icon: topicIcon(t.topic),
      correct: ts ? ts.correct : 0,
      total: ts ? ts.total : 0
    };
  }).filter(t => t.total > 0);

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
            <div class="stat-label">Questions</div>
          </div>
          <div class="stat-card">
            <div class="stat-val">${overallPct}%</div>
            <div class="stat-label">Accuracy</div>
          </div>
          <div class="stat-card">
            <div class="stat-val">${totalC}</div>
            <div class="stat-label">Correct</div>
          </div>
        </div>

        <div class="section-tag" style="margin-top:24px;">Topic Breakdown</div>
        <div class="subject-breakdown">
          <div class="subject-stat-card">
            <h3>💻 Computer Science Topics</h3>
            ${topicBreakdowns.map(t => {
              const tp = t.total > 0 ? Math.round(t.correct / t.total * 100) : 0;
              const barColor = tp >= 70 ? '#48bb78' : tp >= 40 ? '#ed8936' : '#f56565';
              return `<div class="topic-stat">
                <span class="ts-name">${t.icon} ${t.name}</span>
                <div class="ts-bar-wrap"><div class="ts-bar" style="width:${tp}%;background:${barColor};"></div></div>
                <span class="ts-score">${t.correct}/${t.total} (${tp}%)</span>
              </div>`;
            }).join('')}
          </div>
        </div>

        <div class="history-section">
          <h3>Recent Sessions</h3>
          ${recent.map(s => {
            const pct = Math.round(s.correct / s.total * 100);
            const d = new Date(s.date);
            const dateStr = (d.getMonth()+1) + '/' + d.getDate() + ' ' + d.getHours() + ':' + (d.getMinutes()<10?'0':'') + d.getMinutes();
            return `<div class="history-item">
              <span class="hi-mode">💻 ${capitalize(s.mode)}${s.topic ? ': ' + s.topic : ''}</span>
              <span class="hi-score">${s.correct}/${s.total} (${pct}%)</span>
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

// ── INIT ──
render();
