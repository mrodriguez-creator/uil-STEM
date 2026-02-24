// UIL CS Written Test Trainer – Main Application
// Vanilla JS, single-page app with 5-choice multiple-choice (A–E)
// UIL Scoring: +6 correct, -2 incorrect, 0 skipped

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
  score: 0,               // correct count
  uilScore: 0,            // UIL score (+6/-2/0)
  results: [],            // { question, selected, correct, isCorrect, isSkipped }
  timeLeft: 0,
  timed: false,
  timerInterval: null,
  showModal: false,       // time picker modal
  hintVisible: false,     // hint toggle state
  difficultyFilter: 0,    // 0 = all, 1-5 = specific difficulty
};

// ── PERSISTENCE ──
const STORAGE_KEY = 'uil-cs-written-stats';

function loadStats() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || defaultStats(); }
  catch { return defaultStats(); }
}
function defaultStats() { return { sessions: [], topicScores: {} }; }
function saveStats(stats) { localStorage.setItem(STORAGE_KEY, JSON.stringify(stats)); }

function recordSession(mode, topic, results, timeTaken) {
  const stats = loadStats();
  const correct = results.filter(r => r.isCorrect).length;
  const wrong = results.filter(r => !r.isCorrect && !r.isSkipped).length;
  const skipped = results.filter(r => r.isSkipped).length;
  const uilScore = correct * 6 - wrong * 2;
  stats.sessions.push({
    date: new Date().toISOString(),
    mode, topic,
    total: results.length,
    correct, wrong, skipped, uilScore,
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

// ── DIFFICULTY HELPERS ──
function difficultyStars(d) {
  return '<span class="difficulty-stars">' + '★'.repeat(d) + '<span class="star-empty">' + '☆'.repeat(5 - d) + '</span></span>';
}

function filterByDifficulty(questions) {
  if (state.difficultyFilter === 0) return questions;
  return questions.filter(q => q.difficulty === state.difficultyFilter);
}

// ── START MODES ──
function startSkills(topic) {
  const questions = shuffleArray(filterByDifficulty(getQuestionsForTopic(topic)));
  if (questions.length === 0) { alert('No questions match that difficulty level.'); return; }
  setState({
    screen: 'test', mode: 'skills', topic,
    problems: questions, idx: 0, selected: -1, answered: false,
    score: 0, uilScore: 0, results: [], timed: false, timeLeft: 0, hintVisible: false
  });
}

function startDrill() {
  const filtered = filterByDifficulty(getAllQuestions());
  if (filtered.length === 0) { alert('No questions match that difficulty level.'); return; }
  const questions = shuffleArray(filtered);
  setState({
    screen: 'test', mode: 'drill', topic: null,
    problems: questions, idx: 0, selected: -1, answered: false,
    score: 0, uilScore: 0, results: [], timed: false, timeLeft: 0, hintVisible: false
  });
}

function startPractice(seconds) {
  const questions = shuffleArray(getAllQuestions()).slice(0, 40);
  setState({
    screen: 'test', mode: 'practice', topic: null,
    problems: questions, idx: 0, selected: -1, answered: false,
    score: 0, uilScore: 0, results: [], showModal: false, hintVisible: false
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
  state.results.push({ question: q, selected: state.selected, correct: q.answer, isCorrect, isSkipped: false });
  setState({
    answered: true,
    score: state.score + (isCorrect ? 1 : 0),
    uilScore: state.uilScore + (isCorrect ? 6 : -2)
  });
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
  state.results.push({ question: q, selected: -1, correct: q.answer, isCorrect: false, isSkipped: true });
  if (state.idx + 1 >= state.problems.length) { finishTest(); return; }
  setState({ idx: state.idx + 1, selected: -1, answered: false, hintVisible: false });
}

function finishTest() {
  clearTimer();
  // In practice mode, mark remaining unanswered questions as skipped
  if (state.mode === 'practice') {
    for (let i = state.results.length; i < state.problems.length; i++) {
      const q = state.problems[i];
      state.results.push({ question: q, selected: -1, correct: q.answer, isCorrect: false, isSkipped: true });
    }
  }
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
  'Base Conversions': { icon: '🔢', desc: 'Binary, octal, decimal, hex conversions & two\'s complement' },
  'Boolean Logic': { icon: '🔀', desc: 'Boolean algebra, De Morgan\'s law, truth tables, logic gates' },
  'Data Types & Operators': { icon: '📦', desc: 'Primitives, casting, precedence, integer division, overflow' },
  'String Methods': { icon: '🔤', desc: 'substring, indexOf, charAt, compareTo, equals, split' },
  'Math Class': { icon: '🧮', desc: 'ceil, floor, round, pow, sqrt, abs, random' },
  'Collections API': { icon: '📚', desc: 'ArrayList, HashMap, HashSet, Stack, Queue methods' },
  'Big-O Analysis': { icon: '📊', desc: 'Time & space complexity, growth rates, algorithm analysis' },
  'Sorting & Searching': { icon: '🔍', desc: 'Sort properties, binary search, stability, efficiency' },
  'Data Structures': { icon: '🌳', desc: 'Stack, Queue, BST, Heap, Hash Table, traversals' },
  'Polish Notation': { icon: '🧩', desc: 'Infix, prefix, postfix evaluation & conversion' },
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
      <p>40 questions &middot; 45 minutes &middot; No calculators &middot; +6/&minus;2/0 scoring</p>
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

      <div class="section-tag">Difficulty Filter</div>
      <div class="diff-filter">
        <button class="diff-btn ${state.difficultyFilter === 0 ? 'active' : ''}" onclick="setState({difficultyFilter:0})">All</button>
        ${[1,2,3,4,5].map(d => `<button class="diff-btn ${state.difficultyFilter === d ? 'active' : ''}" onclick="setState({difficultyFilter:${d}})">${'★'.repeat(d)}</button>`).join('')}
      </div>

      <div class="section-tag">Practice Modes</div>
      <div class="focus-card">
        <div class="fc-head">
          <div class="fc-icon">💻</div>
          <div>
            <h2>CS Written Test</h2>
            <p>UIL Computer Science Written Test covers Java concepts, data structures, algorithms, and computational thinking. 5-choice multiple choice (A–E) with penalty scoring.</p>
          </div>
        </div>
        <div class="mode-row">
          <button class="mode-btn" onclick="startDrill()">
            <div class="mb-title">🔥 Drill Mode</div>
            <div class="mb-desc">Random questions across all topics. No timer, immediate feedback after each question.</div>
          </button>
          <button class="mode-btn" onclick="setState({showModal:true})">
            <div class="mb-title">⏱ Practice Test</div>
            <div class="mb-desc">Timed test simulating UIL competition. 40 questions with +6/−2/0 scoring.</div>
          </button>
        </div>
      </div>

      <div class="section-tag">Skills – Choose a Topic</div>
      <div class="topic-grid">
        ${topics.map(t => {
          const ts = stats.topicScores[t.topic];
          const pct = ts ? Math.round(ts.correct / ts.total * 100) + '%' : '';
          const filteredCount = state.difficultyFilter === 0 ? t.count : getQuestionsForTopic(t.topic).filter(q => q.difficulty === state.difficultyFilter).length;
          return `<button class="topic-btn" onclick="startSkills('${t.topic}')" ${filteredCount === 0 ? 'disabled style="opacity:0.4"' : ''}>
            <div class="tb-icon">${topicIcon(t.topic)}</div>
            <div class="tb-name">${t.topic}</div>
            <div class="tb-sub">${filteredCount} Qs${pct ? ' · ' + pct : ''}</div>
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
        <p class="modal-sub">Choose a time limit. UIL CS Written is 45 minutes for 40 questions.</p>
        <button class="time-btn" onclick="startPractice(900)">
          <div class="tb-row"><span>15 Minutes</span><span class="tb-time">Quick Drill</span></div>
          <div class="tb-note">Fast warmup session</div>
        </button>
        <button class="time-btn" onclick="startPractice(1500)">
          <div class="tb-row"><span>25 Minutes</span><span class="tb-time">Half Test</span></div>
          <div class="tb-note">Solid practice session</div>
        </button>
        <button class="time-btn" onclick="startPractice(2700)">
          <div class="tb-row"><span>45 Minutes</span><span class="tb-time">Full UIL Test</span></div>
          <div class="tb-note">Official UIL CS Written time</div>
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

  // Calculate current UIL score for display
  const correct = state.results.filter(r => r.isCorrect).length;
  const wrong = state.results.filter(r => !r.isCorrect && !r.isSkipped).length;
  const currentUIL = correct * 6 - wrong * 2;

  let feedbackHTML = '';
  if (state.answered) {
    const isCorrect = state.selected === q.answer;
    feedbackHTML = `
      <div class="feedback-bar ${isCorrect ? 'correct' : 'wrong'}">
        ${isCorrect ? '✓ Correct! (+6)' : `✕ Incorrect (−2) — Answer is ${letters[q.answer]}`}
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
        <span class="t-score">UIL: ${currentUIL}</span>
      </div>
      <div class="prog-bar"><div class="prog-fill" style="width:${(state.idx + 1) / state.problems.length * 100}%"></div></div>
    </div>
    <div class="test-body">
      <div class="question-box">
        <div class="question-text">${q.question}</div>
        <div class="question-meta">
          <span class="question-tag">${q.topic}</span>
          ${q.difficulty ? difficultyStars(q.difficulty) : ''}
        </div>
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
          <button class="btn btn-subtle" onclick="skipQuestion()">Skip (0 pts)</button>
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
  const wrong = state.results.filter(r => !r.isCorrect && !r.isSkipped).length;
  const skipped = state.results.filter(r => r.isSkipped).length;
  const uilScore = correct * 6 - wrong * 2;
  const pct = total > 0 ? Math.round(correct / total * 100) : 0;
  const letters = ['A', 'B', 'C', 'D', 'E'];

  app.innerHTML = `
    <div class="results-wrap">
      <h1>Results</h1>
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-val ${uilScore >= 0 ? 'positive' : 'negative'}">${uilScore}</div>
          <div class="stat-label">UIL Score</div>
        </div>
        <div class="stat-card">
          <div class="stat-val positive">${correct}</div>
          <div class="stat-label">Correct (+6)</div>
        </div>
        <div class="stat-card">
          <div class="stat-val negative">${wrong}</div>
          <div class="stat-label">Wrong (−2)</div>
        </div>
        <div class="stat-card">
          <div class="stat-val">${skipped}</div>
          <div class="stat-label">Skipped (0)</div>
        </div>
        <div class="stat-card">
          <div class="stat-val">${pct}%</div>
          <div class="stat-label">Accuracy</div>
        </div>
      </div>

      <div class="review-title">Review Answers</div>
      <div class="review-box">
        ${state.results.map((r, i) => {
          const cls = r.isCorrect ? 'correct' : r.isSkipped ? 'skipped' : 'wrong';
          const yourAns = r.selected >= 0 ? letters[r.selected] : '—';
          const label = r.isCorrect ? '✓' : r.isSkipped ? 'Skip' : '✕';
          return `<div class="rev-item ${cls}">
            <span class="ri-num">#${i + 1}</span>
            <span class="ri-q">${truncate(r.question.question.replace(/<[^>]*>/g, ''), 50)}</span>
            <span class="ri-a">${label} ${yourAns}${!r.isCorrect && !r.isSkipped ? ' → ' + letters[r.correct] : ''}</span>
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
  const totalUIL = sessions.reduce((s, x) => s + (x.uilScore || 0), 0);
  const avgUIL = Math.round(totalUIL / sessions.length);

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
            <div class="stat-val ${avgUIL >= 0 ? 'positive' : 'negative'}">${avgUIL}</div>
            <div class="stat-label">Avg UIL Score</div>
          </div>
        </div>

        <div class="section-tag" style="margin-top:24px;">Topic Breakdown</div>
        <div class="subject-breakdown">
          <div class="subject-stat-card">
            <h3>💻 CS Written Topics</h3>
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
              <span class="hi-score">${s.correct}/${s.total} (${pct}%) · UIL: ${s.uilScore || 0}</span>
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
