// UIL Science Trainer – Main Application
// Vanilla JS, single-page app with screen-based navigation

const $ = id => document.getElementById(id);
const app = $('app');

// ── STATE ──
const state = {
  screen: 'menu',        // menu | test | results | stats
  subject: 'biology',    // biology | chemistry | physics
  mode: null,             // skills | drill | practice
  topic: null,            // topic name or null (for practice/drill = all)
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
};

// ── PERSISTENCE ──
const STORAGE_KEY = 'uil-science-stats';

function loadStats() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || defaultStats(); }
  catch { return defaultStats(); }
}

function defaultStats() {
  return { sessions: [], topicScores: {} };
}

function saveStats(stats) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
}

function recordSession(mode, subject, topic, results, timeTaken) {
  const stats = loadStats();
  stats.sessions.push({
    date: new Date().toISOString(),
    mode, subject, topic,
    total: results.length,
    correct: results.filter(r => r.isCorrect).length,
    timeTaken
  });
  // Track per-topic scores
  results.forEach(r => {
    const key = r.question.subject + '|' + r.question.topic;
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
  if (state.timerInterval) {
    clearInterval(state.timerInterval);
    state.timerInterval = null;
  }
}

function formatTime(s) {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return m + ':' + (sec < 10 ? '0' : '') + sec;
}

function timerClass() {
  if (!state.timed) return 'none';
  if (state.timeLeft > 300) return 'ok';
  if (state.timeLeft > 60) return 'warn';
  return 'urgent';
}

// ── START MODES ──
function startSkills(subject, topic) {
  const questions = shuffleArray(getQuestionsForTopic(subject, topic));
  if (questions.length === 0) return;
  setState({
    screen: 'test', mode: 'skills', subject, topic,
    problems: questions, idx: 0, selected: -1, answered: false,
    score: 0, results: [], timed: false, timeLeft: 0
  });
}

function startDrill(subject) {
  const questions = shuffleArray(getQuestionsForSubject(subject));
  setState({
    screen: 'test', mode: 'drill', subject, topic: null,
    problems: questions, idx: 0, selected: -1, answered: false,
    score: 0, results: [], timed: false, timeLeft: 0
  });
}

function startPractice(subject, seconds) {
  const questions = shuffleArray(getQuestionsForSubject(subject));
  setState({
    screen: 'test', mode: 'practice', subject, topic: null,
    problems: questions, idx: 0, selected: -1, answered: false,
    score: 0, results: [], showModal: false
  });
  startTimer(seconds);
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
  const result = {
    question: q,
    selected: state.selected,
    correct: q.answer,
    isCorrect
  };
  state.results.push(result);
  setState({
    answered: true,
    score: state.score + (isCorrect ? 1 : 0)
  });
}

function nextQuestion() {
  if (state.idx + 1 >= state.problems.length) {
    finishTest();
    return;
  }
  setState({
    idx: state.idx + 1,
    selected: -1,
    answered: false
  });
}

function skipQuestion() {
  const q = state.problems[state.idx];
  state.results.push({
    question: q,
    selected: -1,
    correct: q.answer,
    isCorrect: false
  });
  nextQuestion();
}

function finishTest() {
  clearTimer();
  const timeTaken = state.mode === 'practice' ? (state.timed ? undefined : 0) : 0;
  recordSession(state.mode, state.subject, state.topic, state.results, timeTaken);
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

// ── MENU SCREEN ──
function renderMenu() {
  const subj = SUBJECTS[state.subject];
  const topics = getTopicsForSubject(state.subject);
  const stats = loadStats();
  const subjSessions = stats.sessions.filter(s => s.subject === state.subject);
  const totalQ = subjSessions.reduce((s, x) => s + x.total, 0);
  const totalC = subjSessions.reduce((s, x) => s + x.correct, 0);

  app.innerHTML = `
    <div class="header">
      <a href="../index.html" class="back-home">&larr; STEM Home</a>
      <h1>${subj.icon} UIL Science Trainer</h1>
      <p>Biology, Chemistry, Physics & Book practice</p>
      <div class="tab-bar">
        ${['biology','chemistry','physics','book'].map(s =>
          `<button class="tab-btn ${state.subject === s ? 'active' : ''}" onclick="switchSubject('${s}')">${SUBJECTS[s].icon} ${SUBJECTS[s].name}</button>`
        ).join('')}
      </div>
    </div>
    ${state.showModal ? renderTimePicker() : ''}
    <div class="menu-body">
      ${subjSessions.length > 0 ? `
        <div class="stats-preview">
          <span class="sp-item">${totalQ} Questions Practiced</span>
          <span class="sp-item">${totalQ > 0 ? Math.round(totalC/totalQ*100) : 0}% Accuracy</span>
          <span class="sp-item">${subjSessions.length} Sessions</span>
        </div>
        <div style="text-align:center;margin-bottom:10px;">
          <button class="stats-btn" onclick="setState({screen:'stats'})">View Stats</button>
        </div>
      ` : ''}

      ${state.subject === 'book' ? `
        <div class="focus-card" style="border-color:#ecc94b;margin-bottom:16px;">
          <div class="fc-head">
            <div class="fc-icon">📖</div>
            <div>
              <h2 style="font-size:1.1rem;">Radioactivity: A History of a Mysterious Science</h2>
              <p style="color:#ecc94b;font-size:0.82rem;margin-bottom:2px;">Marjorie C. Malley · ISBN: 978-0199766413</p>
              <p>2025–2026 UIL Science assigned text. Covers the discovery and development of radioactivity from Becquerel (1896) through nuclear fission (1938).</p>
            </div>
          </div>
        </div>
      ` : ''}
      <div class="section-tag">Practice Modes</div>
      <div class="focus-card">
        <div class="fc-head">
          <div class="fc-icon">${subj.icon}</div>
          <div>
            <h2>${subj.name}</h2>
            <p>${state.subject === 'book'
              ? 'Practice questions from <em>Radioactivity: A History of a Mysterious Science</em> by Marjorie C. Malley — the 2025–2026 UIL assigned text.'
              : 'Choose a practice mode to start training. Skills focus on specific topics, drills test you across all topics, and practice tests simulate UIL competition conditions.'}</p>
          </div>
        </div>
        <div class="mode-row">
          <button class="mode-btn" onclick="startDrill('${state.subject}')">
            <div class="mb-title">🔥 Drill Mode</div>
            <div class="mb-desc">Rapid-fire questions across all ${subj.name} topics. No timer, immediate feedback.</div>
          </button>
          <button class="mode-btn" onclick="setState({showModal:true})">
            <div class="mb-title">⏱ Practice Test</div>
            <div class="mb-desc">Timed test simulating UIL competition format. Choose your time limit.</div>
          </button>
        </div>
      </div>

      <div class="section-tag">Skills – Choose a Topic</div>
      <div class="topic-grid">
        ${topics.map(t => {
          const key = t.subject + '|' + t.topic;
          const ts = stats.topicScores[key];
          const pct = ts ? Math.round(ts.correct / ts.total * 100) + '%' : '';
          return `<button class="topic-btn" onclick="startSkills('${t.subject}','${t.topic}')">
            <div class="tb-icon">${topicIcon(t.topic)}</div>
            <div class="tb-name">${t.topic}</div>
            <div class="tb-sub">${t.count} Qs${pct ? ' · ' + pct : ''}</div>
          </button>`;
        }).join('')}
      </div>
    </div>
  `;
}

function topicIcon(topic) {
  const icons = {
    'Cell Biology': '🔬', 'Genetics': '🧬', 'Ecology': '🌿', 'Evolution': '🦎',
    'Body Systems': '🫀', 'Taxonomy': '📋', 'Photosynthesis': '🌱',
    'Atomic Structure': '⚛️', 'Periodic Table': '📊', 'Chemical Bonding': '🔗',
    'Reactions': '💥', 'Acids & Bases': '🧪', 'Gas Laws': '💨', 'Solutions': '🫧',
    'Mechanics': '🏗️', 'Energy': '⚡', 'Waves': '🌊', 'Electricity': '🔌',
    'Optics': '🔦', 'Thermodynamics': '🌡️', 'Momentum': '🎱',
    'The Beginnings': '🌅', 'The Curies': '👩‍🔬', 'Rutherford & Soddy': '⚛️',
    'Radioactive Earth': '🌍', 'Radiochemistry': '🧪', 'Inside the Atom': '🔭',
    'Sequel': '💥', 'Medicine & Safety': '🏥', 'New Industries': '🏭',
    'Key Figures': '👥'
  };
  return icons[topic] || '📝';
}

function renderTimePicker() {
  return `
    <div class="modal-overlay" onclick="setState({showModal:false})">
      <div class="modal-box" onclick="event.stopPropagation()">
        <h2>⏱ Practice Test</h2>
        <p class="modal-sub">Choose a time limit for your ${SUBJECTS[state.subject].name} practice test.</p>
        <button class="time-btn" onclick="startPractice('${state.subject}', 600)">
          <div class="tb-row"><span>10 Minutes</span><span class="tb-time">Quick Review</span></div>
          <div class="tb-note">Great for a fast warmup</div>
        </button>
        <button class="time-btn" onclick="startPractice('${state.subject}', 1200)">
          <div class="tb-row"><span>20 Minutes</span><span class="tb-time">Half Test</span></div>
          <div class="tb-note">Solid practice session</div>
        </button>
        <button class="time-btn" onclick="startPractice('${state.subject}', 1800)">
          <div class="tb-row"><span>30 Minutes</span><span class="tb-time">Full UIL Test</span></div>
          <div class="tb-note">Official UIL Science time limit</div>
        </button>
        <button class="modal-close" onclick="setState({showModal:false})">Cancel</button>
      </div>
    </div>
  `;
}

// ── TEST SCREEN ──
function renderTest() {
  const q = state.problems[state.idx];
  const subj = SUBJECTS[q.subject];
  const modeLabel = state.mode === 'skills' ? `Skills: ${state.topic}` :
                    state.mode === 'drill' ? 'Drill Mode' : 'Practice Test';
  const letters = ['A', 'B', 'C', 'D'];

  let feedbackHTML = '';
  if (state.answered) {
    const isCorrect = state.selected === q.answer;
    feedbackHTML = `
      <div class="feedback-bar ${isCorrect ? 'correct' : 'wrong'}">
        ${isCorrect ? '✓ Correct!' : `✕ Incorrect — Answer is ${letters[q.answer]}`}
      </div>
      <div class="explanation-box">
        <div class="explanation-label">Explanation</div>
        <div class="explanation-text">${q.explanation}</div>
      </div>
    `;
  }

  app.innerHTML = `
    <div class="test-header">
      <div class="test-top">
        <span class="t-label">${subj.icon} ${modeLabel}</span>
        <span>Q ${state.idx + 1} of ${state.problems.length}</span>
        ${state.timed ? `<span class="t-timer ${timerClass()}">${formatTime(state.timeLeft)}</span>` : ''}
        <span class="t-score">${state.score}/${state.results.length} correct</span>
      </div>
      <div class="prog-bar"><div class="prog-fill" style="width:${(state.idx + 1) / state.problems.length * 100}%"></div></div>
    </div>
    <div class="test-body">
      <div class="question-box">
        <div class="question-text">${q.question}</div>
        <div class="question-tag">${q.subject} · ${q.topic}</div>
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
  const letters = ['A', 'B', 'C', 'D'];
  const subj = SUBJECTS[state.subject];

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
            <span class="ri-q">${truncate(r.question.question, 50)}</span>
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
    startSkills(state.subject, state.topic);
  } else if (state.mode === 'drill') {
    startDrill(state.subject);
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

  // Per-subject breakdowns
  const subjectBreakdowns = ['biology', 'chemistry', 'physics', 'book'].map(subj => {
    const subjSessions = sessions.filter(s => s.subject === subj);
    const sq = subjSessions.reduce((s, x) => s + x.total, 0);
    const sc = subjSessions.reduce((s, x) => s + x.correct, 0);
    const topics = getTopicsForSubject(subj).map(t => {
      const key = t.subject + '|' + t.topic;
      const ts = stats.topicScores[key];
      return { name: t.topic, correct: ts ? ts.correct : 0, total: ts ? ts.total : 0 };
    }).filter(t => t.total > 0);
    return { subject: subj, info: SUBJECTS[subj], questions: sq, correct: sc, topics };
  });

  // Recent sessions (last 10)
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

        <div class="section-tag" style="margin-top:24px;">Subject Breakdown</div>
        <div class="subject-breakdown">
          ${subjectBreakdowns.map(sb => {
            if (sb.questions === 0) return '';
            const pct = Math.round(sb.correct / sb.questions * 100);
            return `<div class="subject-stat-card">
              <h3>${sb.info.icon} ${sb.info.name} — ${pct}%</h3>
              ${sb.topics.map(t => {
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
            return `<div class="history-item">
              <span class="hi-mode">${SUBJECTS[s.subject]?.icon || ''} ${capitalize(s.mode)}${s.topic ? ': ' + s.topic : ''}</span>
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

// ── SUBJECT SWITCHING ──
function switchSubject(s) {
  setState({ subject: s, showModal: false });
}

// ── INIT ──
render();
