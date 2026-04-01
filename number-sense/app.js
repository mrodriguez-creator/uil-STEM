/* ── Number Sense Tower Battle  ·  Main App ──────────────────────
   Screens: setup | game | win
   ─────────────────────────────────────────────────────────────── */

const app = document.getElementById('app');

// ── State ───────────────────────────────────────────────────────
const state = {
  screen: 'setup',
  teamA: { name: 'Team Alpha', players: [] },
  teamB: { name: 'Team Bravo', players: [] },
  pullsToWin: 5,
  difficulty: 3,
  currentProblem: null,
  currentPlayerA: '',
  currentPlayerB: '',
  inputA: '',
  inputB: '',
  lockedA: false,
  lockedB: false,
  lockTimeA: 0,
  lockTimeB: 0,
  animating: false,
  roundNumber: 0,
  history: [],
  playerStats: {},         // { name: { correct, wrong } }
  winner: null,
  showResult: null,        // { team, correct, text }
  addPlayerInputA: '',
  addPlayerInputB: '',
};

function setState(partial) {
  Object.assign(state, partial);
  render();
}

// ── Pick random player from roster ──────────────────────────────
function pickPlayer(players) {
  if (!players.length) return '???';
  return players[Math.floor(Math.random() * players.length)];
}

function initPlayerStat(name) {
  if (!state.playerStats[name]) state.playerStats[name] = { correct: 0, wrong: 0 };
}

// ── Robot AI system ──────────────────────────────────────────────
// Players named "Robot1"–"Robot5" are AI-controlled.
// Level 1: 30s delay, 75% accuracy. Each level: -5s delay, +5% accuracy.
let robotTimerA = null;
let robotTimerB = null;

function getRobotLevel(playerName) {
  const m = /^Robot(\d)$/i.exec(playerName);
  if (!m) return 0;
  return Math.max(1, Math.min(5, parseInt(m[1])));
}

function robotDelay(level) { return (35 - level * 5) * 1000; }   // 30s, 25s, 20s, 15s, 10s
function robotAccuracy(level) { return 0.70 + level * 0.05; }    // 75%, 80%, 85%, 90%, 95%

function generateWrongAnswer(problem) {
  // Produce a plausible wrong answer: offset by ±1–5 from correct
  const offset = (Math.random() < 0.5 ? -1 : 1) * (1 + Math.floor(Math.random() * 4));
  if (problem.fractionAnswer) {
    const { n, d } = problem.fractionAnswer;
    return String((n + offset) * 100 + d);
  }
  if (Number.isInteger(problem.answer)) return String(problem.answer + offset);
  return String(Math.round((problem.answer + offset) * 100) / 100);
}

function scheduleRobots() {
  clearTimeout(robotTimerA);
  clearTimeout(robotTimerB);
  robotTimerA = null;
  robotTimerB = null;

  if (state.screen !== 'game' || state.animating) return;

  const lvlA = getRobotLevel(state.currentPlayerA);
  const lvlB = getRobotLevel(state.currentPlayerB);

  if (lvlA > 0 && !state.lockedA) {
    const delay = robotDelay(lvlA);
    const acc = robotAccuracy(lvlA);
    robotTimerA = setTimeout(() => {
      if (state.animating || state.lockedA || state.screen !== 'game') return;
      const problem = state.currentProblem;
      const isCorrect = Math.random() < acc;
      let answer;
      if (isCorrect) {
        if (problem.fractionAnswer) {
          const { n, d } = problem.fractionAnswer;
          answer = String(n * 100 + d);
        } else {
          answer = String(problem.answer);
        }
      } else {
        answer = generateWrongAnswer(problem);
      }
      state.inputA = answer;
      // Update display
      const d = document.getElementById('display-A');
      if (d) { d.textContent = answer; d.className = 'answer-display has-input'; }
      submitAnswer('A');
    }, delay);
  }

  if (lvlB > 0 && !state.lockedB) {
    const delay = robotDelay(lvlB);
    const acc = robotAccuracy(lvlB);
    robotTimerB = setTimeout(() => {
      if (state.animating || state.lockedB || state.screen !== 'game') return;
      const problem = state.currentProblem;
      const isCorrect = Math.random() < acc;
      let answer;
      if (isCorrect) {
        if (problem.fractionAnswer) {
          const { n, d } = problem.fractionAnswer;
          answer = String(n * 100 + d);
        } else {
          answer = String(problem.answer);
        }
      } else {
        answer = generateWrongAnswer(problem);
      }
      state.inputB = answer;
      const d = document.getElementById('display-B');
      if (d) { d.textContent = answer; d.className = 'answer-display has-input'; }
      submitAnswer('B');
    }, delay);
  }
}

// ── Start a new round ───────────────────────────────────────────
function nextRound() {
  const pA = pickPlayer(state.teamA.players);
  const pB = pickPlayer(state.teamB.players);
  initPlayerStat(pA);
  initPlayerStat(pB);
  setState({
    currentProblem: generateProblem(state.difficulty),
    currentPlayerA: pA,
    currentPlayerB: pB,
    inputA: '',
    inputB: '',
    lockedA: false,
    lockedB: false,
    roundNumber: state.roundNumber + 1,
    showResult: null,
    animating: false,
  });
  // Schedule any robot players for this round
  scheduleRobots();
}

// ── Check if answer is correct ──────────────────────────────────
function checkAnswer(input, problem) {
  const parsed = parseFloat(input);
  if (isNaN(parsed)) return false;
  if (problem.fractionAnswer) {
    const { n, d } = problem.fractionAnswer;
    return parsed === n * 100 + d || Math.abs(parsed - n / d) < 0.01;
  }
  if (Number.isInteger(problem.answer)) {
    return parseInt(input) === problem.answer;
  }
  return Math.abs(parsed - problem.answer) < 0.05;
}

// ── Submit answer (lock-in system) ──────────────────────────────
function submitAnswer(team) {
  if (state.animating) return;
  // Already locked in? Can't re-submit
  if (team === 'A' && state.lockedA) return;
  if (team === 'B' && state.lockedB) return;

  const input = team === 'A' ? state.inputA : state.inputB;
  if (input.trim() === '') return;
  if (isNaN(parseFloat(input))) return;

  // Lock this team in — record timestamp for speed tiebreaker
  if (team === 'A') {
    state.lockedA = true;
    state.lockTimeA = Date.now();
  } else {
    state.lockedB = true;
    state.lockTimeB = Date.now();
  }

  // Update just the display for the locked team (no full re-render)
  const displayEl = document.getElementById('display-' + team);
  if (displayEl) {
    displayEl.classList.add('locked-in');
  }
  // Show LOCKED IN badge
  const badge = document.getElementById('lock-badge-' + team);
  if (badge) {
    badge.classList.add('visible');
  }
  // Disable that team's buttons visually
  const zone = document.querySelector(`.team-zone.team-${team.toLowerCase()}`);
  if (zone) zone.classList.add('pad-locked');

  // If both teams are locked in, judge the round
  if (state.lockedA && state.lockedB) {
    judgeRound();
  }
}

// ── Judge the round after both teams lock in ────────────────────
function judgeRound() {
  state.animating = true;
  const problem = state.currentProblem;

  const correctA = checkAnswer(state.inputA, problem);
  const correctB = checkAnswer(state.inputB, problem);

  const playerA = state.currentPlayerA;
  const playerB = state.currentPlayerB;

  let winnerTeam = null;   // team that gets a block
  let resultTeam = null;   // team shown in result flash
  let resultCorrect = true;
  let resultText = '';
  let wasWrong = false;

  if (correctA && correctB) {
    // Both correct — faster team wins the block
    winnerTeam = state.lockTimeA <= state.lockTimeB ? 'A' : 'B';
    resultTeam = winnerTeam;
    resultText = 'BOTH CORRECT — ' + (winnerTeam === 'A' ? state.teamA.name : state.teamB.name) + ' FASTER!';
    state.playerStats[playerA].correct++;
    state.playerStats[playerB].correct++;
  } else if (correctA) {
    winnerTeam = 'A';
    resultTeam = 'A';
    resultText = 'CORRECT!';
    state.playerStats[playerA].correct++;
    state.playerStats[playerB].wrong++;
  } else if (correctB) {
    winnerTeam = 'B';
    resultTeam = 'B';
    resultText = 'CORRECT!';
    state.playerStats[playerB].correct++;
    state.playerStats[playerA].wrong++;
  } else {
    // Both wrong — no block awarded
    winnerTeam = null;
    resultTeam = null;
    resultCorrect = false;
    resultText = 'BOTH WRONG!';
    state.playerStats[playerA].wrong++;
    state.playerStats[playerB].wrong++;
  }

  // Record history
  if (winnerTeam) {
    state.history.push({
      round: state.roundNumber,
      problem: problem.display,
      answer: problem.answer,
      winner: winnerTeam,
      player: winnerTeam === 'A' ? playerA : playerB,
      wasWrong: false,
    });
  } else {
    // Both wrong — record but no winner
    state.history.push({
      round: state.roundNumber,
      problem: problem.display,
      answer: problem.answer,
      winner: null,
      player: null,
      wasWrong: true,
    });
  }

  state.showResult = resultTeam
    ? { team: resultTeam, correct: true, text: resultText }
    : { team: 'A', correct: false, text: resultText };
  render();

  // Trigger effects
  if (winnerTeam) {
    setTimeout(() => spawnParticles(winnerTeam), 100);
  } else {
    // Both wrong — shake both zones
    document.querySelectorAll('.team-zone').forEach(z => {
      z.classList.add('shake');
      setTimeout(() => z.classList.remove('shake'), 450);
    });
  }

  setTimeout(() => {
    // Check win
    const sA = state.history.filter(h => h.winner === 'A').length;
    const sB = state.history.filter(h => h.winner === 'B').length;
    if (sA >= state.pullsToWin || sB >= state.pullsToWin) {
      setState({
        screen: 'win',
        winner: sA >= state.pullsToWin ? 'A' : 'B',
        animating: false,
        showResult: null,
      });
      spawnConfetti();
    } else {
      nextRound();
    }
  }, 1200);
}

// ── Numpad press ────────────────────────────────────────────────
// Update input WITHOUT full re-render so SVG animations aren't reset
function pressKey(team, key) {
  if (state.animating) return;
  // Block input if this team is locked in
  if (team === 'A' && state.lockedA) return;
  if (team === 'B' && state.lockedB) return;
  const field = team === 'A' ? 'inputA' : 'inputB';
  const current = state[field];
  let next = current;
  if (key === 'backspace') {
    next = current.slice(0, -1);
  } else if (key === '.') {
    if (!current.includes('.')) next = current + '.';
  } else if (key === '-') {
    next = current === '' ? '-' : current === '-' ? '' : current;
  } else {
    if (current.length < 10) next = current + key;
  }
  state[field] = next;
  // Patch only the display element instead of full render
  const displayEl = document.getElementById('display-' + team);
  if (displayEl) {
    displayEl.textContent = next || '\u00A0';
    displayEl.className = next ? 'answer-display has-input' : 'answer-display';
  }
}

// ── Particle effects ────────────────────────────────────────────
function spawnParticles(team) {
  const colors = team === 'A'
    ? ['#667eea', '#7b93f5', '#9dacf7', '#f6ad55']
    : ['#f56565', '#f88080', '#fbb0b0', '#f6ad55'];
  const container = document.createElement('div');
  container.className = 'particle-container';
  const cx = team === 'A' ? window.innerWidth * 0.25 : window.innerWidth * 0.75;
  const cy = window.innerHeight * 0.5;
  container.style.left = cx + 'px';
  container.style.top = cy + 'px';
  for (let i = 0; i < 20; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const angle = (Math.PI * 2 * i) / 20 + (Math.random() - 0.5) * 0.5;
    const dist = 40 + Math.random() * 80;
    p.style.setProperty('--dx', Math.cos(angle) * dist + 'px');
    p.style.setProperty('--dy', Math.sin(angle) * dist + 'px');
    p.style.background = colors[i % colors.length];
    p.style.width = (4 + Math.random() * 6) + 'px';
    p.style.height = p.style.width;
    container.appendChild(p);
  }
  document.body.appendChild(container);
  setTimeout(() => container.remove(), 700);
}

function spawnConfetti() {
  const container = document.createElement('div');
  container.className = 'confetti-container';
  const colors = ['#667eea', '#f56565', '#f6ad55', '#48bb78', '#ed64a6', '#ecc94b', '#4fd1c5'];
  for (let i = 0; i < 80; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.setProperty('--x', Math.random() * 100 + '%');
    piece.style.setProperty('--delay', (Math.random() * 1.5) + 's');
    piece.style.setProperty('--fall-dur', (2.5 + Math.random() * 2) + 's');
    piece.style.setProperty('--rot', Math.random() * 360 + 'deg');
    piece.style.setProperty('--color', colors[Math.floor(Math.random() * colors.length)]);
    container.appendChild(piece);
  }
  document.body.appendChild(container);
  setTimeout(() => container.remove(), 5000);
}

// ── SVG Tower Battle ────────────────────────────────────────────
function renderTowerSVG() {
  const W = 900, H = 300;
  const ptw = state.pullsToWin;
  const scoreA = state.history.filter(h => h.winner === 'A').length;
  const scoreB = state.history.filter(h => h.winner === 'B').length;
  const isWin = state.screen === 'win';

  // Tower dimensions
  const blockW = 100, blockH = 22, blockGap = 3;
  const baseY = H - 30;          // bottom of tower base
  const baseH = 14;
  const towerAx = W * 0.3;       // center X of tower A
  const towerBx = W * 0.7;       // center X of tower B

  // Goal line Y = baseY minus (pullsToWin blocks stacked)
  const goalY = baseY - baseH - ptw * (blockH + blockGap) - 8;

  // Shade variations for blocks
  const shadesA = ['#4a6cf7', '#5577f9', '#6080fb', '#3a5ce5', '#7090ff'];
  const shadesB = ['#e84d4d', '#f06060', '#d63c3c', '#f07878', '#c83535'];

  // Build block stack for a team
  function buildBlocks(cx, count, shades, teamClass, isWinner, isLoser) {
    let blocks = '';
    for (let i = 0; i < count; i++) {
      const bx = cx - blockW / 2;
      const by = baseY - baseH - (i + 1) * (blockH + blockGap);
      const shade = shades[i % shades.length];
      const isNewest = (i === count - 1 && !isWin);
      const cls = isNewest ? 'tower-block block-new' : 'tower-block';
      const crumbleCls = isLoser ? ` block-crumble` : '';
      const glowCls = isWinner ? ` block-glow` : '';
      // 3D effect: lighter top face
      blocks += `
        <rect class="${cls}${crumbleCls}${glowCls}" x="${bx}" y="${by}" width="${blockW}" height="${blockH}" rx="4"
              fill="${shade}" style="animation-delay:${isLoser ? (count - i) * 0.06 : 0}s">
        </rect>
        <rect x="${bx}" y="${by}" width="${blockW}" height="${blockH / 3}" rx="4"
              fill="rgba(255,255,255,.12)" class="${crumbleCls}" style="animation-delay:${isLoser ? (count - i) * 0.06 : 0}s"/>`;
      // Block number label
      blocks += `<text x="${cx}" y="${by + blockH * 0.7}" text-anchor="middle" fill="rgba(255,255,255,.7)"
                       font-size="11" font-weight="700" class="${crumbleCls}" style="animation-delay:${isLoser ? (count - i) * 0.06 : 0}s">${i + 1}</text>`;
    }
    return blocks;
  }

  // Trophy / star for winner
  function trophy(cx, count) {
    const ty = baseY - baseH - (count) * (blockH + blockGap) - 30;
    return `<text x="${cx}" y="${ty}" text-anchor="middle" font-size="28" class="trophy-bounce">&#9733;</text>`;
  }

  const blocksA = buildBlocks(towerAx, scoreA, shadesA, 'a', isWin && state.winner === 'A', isWin && state.winner === 'B');
  const blocksB = buildBlocks(towerBx, scoreB, shadesB, 'b', isWin && state.winner === 'B', isWin && state.winner === 'A');

  // Goal marker slots (empty block outlines)
  let goalSlots = '';
  for (let i = 0; i < ptw; i++) {
    const byA = baseY - baseH - (i + 1) * (blockH + blockGap);
    const byB = byA;
    if (i >= scoreA) {
      goalSlots += `<rect x="${towerAx - blockW / 2}" y="${byA}" width="${blockW}" height="${blockH}" rx="4"
                          fill="none" stroke="#2d3748" stroke-width="1" stroke-dasharray="4,3" opacity=".4"/>`;
    }
    if (i >= scoreB) {
      goalSlots += `<rect x="${towerBx - blockW / 2}" y="${byB}" width="${blockW}" height="${blockH}" rx="4"
                          fill="none" stroke="#2d3748" stroke-width="1" stroke-dasharray="4,3" opacity=".4"/>`;
    }
  }

  // Goal line
  const goalLineY = baseY - baseH - ptw * (blockH + blockGap) - blockGap;

  return `
  <svg class="tower-svg" viewBox="0 0 ${W} ${H}">
    <defs>
      <linearGradient id="baseGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#353d50"/>
        <stop offset="100%" stop-color="#1a1f2e"/>
      </linearGradient>
    </defs>

    <!-- Goal line -->
    <line x1="${towerAx - blockW}" y1="${goalLineY}" x2="${towerBx + blockW}" y2="${goalLineY}"
          stroke="var(--accent)" stroke-width="2" stroke-dasharray="8,4" opacity=".5"/>
    <text x="${W / 2}" y="${goalLineY - 6}" text-anchor="middle" fill="var(--accent)" font-size="11" font-weight="600" opacity=".7">GOAL: ${ptw}</text>

    <!-- Ground -->
    <rect x="40" y="${baseY}" width="${W - 80}" height="4" rx="2" fill="#1a1f2e"/>

    <!-- Tower A base -->
    <rect x="${towerAx - blockW / 2 - 10}" y="${baseY - baseH}" width="${blockW + 20}" height="${baseH}" rx="4" fill="url(#baseGrad)" stroke="#3a4555" stroke-width="1"/>
    <text x="${towerAx}" y="${baseY + 18}" text-anchor="middle" fill="var(--team-a)" font-size="13" font-weight="700">${state.teamA.name}</text>

    <!-- Tower B base -->
    <rect x="${towerBx - blockW / 2 - 10}" y="${baseY - baseH}" width="${blockW + 20}" height="${baseH}" rx="4" fill="url(#baseGrad)" stroke="#3a4555" stroke-width="1"/>
    <text x="${towerBx}" y="${baseY + 18}" text-anchor="middle" fill="var(--team-b)" font-size="13" font-weight="700">${state.teamB.name}</text>

    <!-- Goal slots (empty outlines) -->
    ${goalSlots}

    <!-- Filled blocks -->
    ${blocksA}
    ${blocksB}

    <!-- VS divider -->
    <line x1="${W / 2}" y1="${goalLineY + 10}" x2="${W / 2}" y2="${baseY}" stroke="#2d3748" stroke-width="1" stroke-dasharray="3,5" opacity=".4"/>
    <text x="${W / 2}" y="${baseY - baseH - ptw / 2 * (blockH + blockGap)}" text-anchor="middle" fill="var(--muted)" font-size="16" font-weight="800" opacity=".3">VS</text>

    <!-- Winner trophy -->
    ${isWin && state.winner === 'A' ? trophy(towerAx, scoreA) : ''}
    ${isWin && state.winner === 'B' ? trophy(towerBx, scoreB) : ''}
  </svg>`;
}

// ── RENDER: Setup Screen ────────────────────────────────────────
function renderSetup() {
  function rosterHTML(team, players, side) {
    const color = side === 'A' ? 'team-a' : 'team-b';
    let items = players.map((p, i) => {
      const rl = getRobotLevel(p);
      const robotTag = rl > 0 ? `<span class="robot-tag">BOT Lv${rl}</span>` : '';
      return `<div class="roster-item">
        <span>${p} ${robotTag}</span>
        <button class="roster-remove" onclick="removePlayer('${side}', ${i})">&times;</button>
      </div>`;
    }).join('');
    return `
      <div class="roster-list">${items || '<div style="color:var(--muted);font-size:.85rem;text-align:center;padding:8px">No players yet</div>'}</div>
      <div class="add-player-row">
        <input class="add-player-input" id="addInput${side}" placeholder="Player name or Robot1-5"
               value="${side === 'A' ? state.addPlayerInputA : state.addPlayerInputB}"
               oninput="state.${side === 'A' ? 'addPlayerInputA' : 'addPlayerInputB'} = this.value"
               onkeydown="if(event.key==='Enter') addPlayer('${side}')">
        <button class="add-player-btn" onclick="addPlayer('${side}')">+ Add</button>
      </div>`;
  }

  const canStart = state.teamA.players.length > 0 && state.teamB.players.length > 0;

  return `
  <div class="setup-screen">
    <a href="../extra-credit/index.html" class="back-link">&larr; Extra Credit</a>
    <h1 class="setup-title">TOWER BATTLE</h1>
    <p class="setup-subtitle">Number Sense Challenge</p>

    <div class="setup-teams">
      <div class="setup-team team-a">
        <h3>TEAM A</h3>
        <input class="team-name-input" value="${state.teamA.name}"
               onchange="state.teamA.name = this.value"
               placeholder="Team name">
        ${rosterHTML(state.teamA, state.teamA.players, 'A')}
      </div>
      <div class="setup-team team-b">
        <h3>TEAM B</h3>
        <input class="team-name-input" value="${state.teamB.name}"
               onchange="state.teamB.name = this.value"
               placeholder="Team name">
        ${rosterHTML(state.teamB, state.teamB.players, 'B')}
      </div>
    </div>

    <div class="setup-options">
      <div class="option-group">
        <label>Blocks to Win</label>
        <div class="option-btns">
          ${[3, 5, 7].map(n => `<button class="opt-btn ${state.pullsToWin === n ? 'active' : ''}" onclick="setState({pullsToWin:${n}})">${n}</button>`).join('')}
        </div>
      </div>
      <div class="option-group">
        <label>Difficulty</label>
        <div class="option-btns">
          ${[1, 2, 3, 4, 5].map(n => `<button class="opt-btn ${state.difficulty === n ? 'active' : ''}" onclick="setState({difficulty:${n}})">${n}</button>`).join('')}
        </div>
      </div>
    </div>

    <button class="start-btn" ${canStart ? '' : 'disabled'} onclick="startGame()">
      START
    </button>
    ${canStart ? '' : '<p style="color:var(--muted);font-size:.85rem">Add at least 1 player to each team</p>'}
  </div>`;
}

// ── RENDER: Game Screen ─────────────────────────────────────────
function renderGame() {
  const scoreA = state.history.filter(h => h.winner === 'A').length;
  const scoreB = state.history.filter(h => h.winner === 'B').length;

  function numpadHTML(team) {
    const locked = team === 'A' ? state.lockedA : state.lockedB;
    const disabled = (state.animating || locked) ? 'disabled' : '';
    const keys = [7,8,9,4,5,6,1,2,3];
    let html = '<div class="numpad">';
    keys.forEach(k => {
      html += `<button class="num-btn" ${disabled} ontouchstart="event.preventDefault();pressKey('${team}','${k}')" onclick="pressKey('${team}','${k}')">${k}</button>`;
    });
    html += `<button class="num-btn" ${disabled} ontouchstart="event.preventDefault();pressKey('${team}','0')" onclick="pressKey('${team}','0')">0</button>`;
    html += `<button class="num-btn" ${disabled} ontouchstart="event.preventDefault();pressKey('${team}','.')" onclick="pressKey('${team}','.')">.</button>`;
    html += `<button class="num-btn backspace" ${disabled} ontouchstart="event.preventDefault();pressKey('${team}','backspace')" onclick="pressKey('${team}','backspace')">&larr;</button>`;
    html += `<button class="num-btn" ${disabled} ontouchstart="event.preventDefault();pressKey('${team}','-')" onclick="pressKey('${team}','-')" style="grid-column:1">&plusmn;</button>`;
    html += `<button class="submit-btn" ${disabled} ontouchstart="event.preventDefault();submitAnswer('${team}')" onclick="submitAnswer('${team}')" style="grid-column:2/4">${locked ? 'LOCKED IN' : 'SUBMIT'}</button>`;
    html += '</div>';
    return html;
  }

  const lockedAClass = state.lockedA ? ' locked-in' : '';
  const lockedBClass = state.lockedB ? ' locked-in' : '';
  const inputAClass = (state.inputA ? 'answer-display has-input' : 'answer-display') + lockedAClass;
  const inputBClass = (state.inputB ? 'answer-display has-input' : 'answer-display') + lockedBClass;

  let resultOverlay = '';
  if (state.showResult) {
    const r = state.showResult;
    const flashClass = r.correct ? `flash-${r.team.toLowerCase()}` : 'flash-wrong';
    const textColor = r.correct
      ? (r.team === 'A' ? 'var(--team-a)' : 'var(--team-b)')
      : 'var(--red)';
    resultOverlay = `
      <div class="result-flash ${flashClass}"></div>
      <div class="result-text" style="color:${textColor}">${r.text}</div>`;
  }

  return `
  <div class="game-screen">
    <!-- Question bar -->
    <div class="question-bar">
      <div class="round-badge">Round ${state.roundNumber}</div>
      <div class="question-text" key="${state.roundNumber}">${state.currentProblem ? state.currentProblem.display : ''}</div>
    </div>

    <!-- Team A zone -->
    <div class="team-zone team-a${state.lockedA ? ' pad-locked' : ''}">
      <div class="team-header">
        <div class="team-label">${state.teamA.name}</div>
        <div class="team-score ${state.showResult && state.showResult.team === 'A' && state.showResult.correct ? 'score-pop' : ''}">${scoreA}</div>
      </div>
      <div class="player-up" key="${state.currentPlayerA}">${state.currentPlayerA}${getRobotLevel(state.currentPlayerA) ? ' <span class="robot-tag">BOT</span>' : ''}</div>
      <div id="display-A" class="${inputAClass}">${state.inputA || '&nbsp;'}</div>
      <div id="lock-badge-A" class="lock-badge${state.lockedA ? ' visible' : ''}">LOCKED IN</div>
      ${numpadHTML('A')}
    </div>

    <!-- Tower area -->
    <div class="tower-area">
      ${renderTowerSVG()}
    </div>

    <!-- Team B zone -->
    <div class="team-zone team-b${state.lockedB ? ' pad-locked' : ''}">
      <div class="team-header">
        <div class="team-label">${state.teamB.name}</div>
        <div class="team-score ${state.showResult && state.showResult.team === 'B' && state.showResult.correct ? 'score-pop' : ''}">${scoreB}</div>
      </div>
      <div class="player-up" key="${state.currentPlayerB}">${state.currentPlayerB}${getRobotLevel(state.currentPlayerB) ? ' <span class="robot-tag">BOT</span>' : ''}</div>
      <div id="display-B" class="${inputBClass}">${state.inputB || '&nbsp;'}</div>
      <div id="lock-badge-B" class="lock-badge${state.lockedB ? ' visible' : ''}">LOCKED IN</div>
      ${numpadHTML('B')}
    </div>
  </div>
  ${resultOverlay}`;
}

// ── RENDER: Win Screen ──────────────────────────────────────────
function renderWin() {
  const w = state.winner;
  const winTeam = w === 'A' ? state.teamA : state.teamB;
  const loseTeam = w === 'A' ? state.teamB : state.teamA;
  const winClass = w === 'A' ? 'win-a' : 'win-b';

  // MVP: player with most correct answers on each team
  function getMVP(players) {
    let best = { name: 'N/A', correct: 0 };
    players.forEach(p => {
      const s = state.playerStats[p];
      if (s && s.correct > best.correct) best = { name: p, correct: s.correct, wrong: s.wrong || 0 };
    });
    return best;
  }
  const mvpWin = getMVP(winTeam.players);
  const mvpLose = getMVP(loseTeam.players);

  const totalRounds = state.history.length;
  const scoreA = state.history.filter(h => h.winner === 'A').length;
  const scoreB = state.history.filter(h => h.winner === 'B').length;

  return `
  <div class="win-screen ${winClass}">
    <div class="win-tower">${renderTowerSVG()}</div>

    <div class="win-title">${winTeam.name} WINS!</div>
    <div class="win-subtitle">${scoreA} &ndash; ${scoreB} in ${totalRounds} rounds</div>

    <div class="mvp-section">
      <div class="mvp-card">
        <h4>${winTeam.name} MVP</h4>
        <div class="mvp-name" style="color:${w === 'A' ? 'var(--team-a)' : 'var(--team-b)'}">${mvpWin.name}</div>
        <div class="mvp-stat">${mvpWin.correct} correct</div>
      </div>
      <div class="mvp-card">
        <h4>${loseTeam.name} MVP</h4>
        <div class="mvp-name" style="color:${w === 'A' ? 'var(--team-b)' : 'var(--team-a)'}">${mvpLose.name}</div>
        <div class="mvp-stat">${mvpLose.correct} correct</div>
      </div>
    </div>

    <div class="win-buttons">
      <button class="win-btn primary" onclick="rematch()">REMATCH</button>
      <button class="win-btn" onclick="newGame()">NEW MATCH</button>
    </div>
  </div>`;
}

// ── Main render dispatch ────────────────────────────────────────
function render() {
  switch (state.screen) {
    case 'setup':  app.innerHTML = renderSetup(); break;
    case 'game':   app.innerHTML = renderGame(); break;
    case 'win':    app.innerHTML = renderWin(); break;
  }
}

// ── Actions ─────────────────────────────────────────────────────
function addPlayer(side) {
  const field = side === 'A' ? 'addPlayerInputA' : 'addPlayerInputB';
  const name = state[field].trim();
  if (!name) return;
  const team = side === 'A' ? state.teamA : state.teamB;
  team.players.push(name);
  state[field] = '';
  initPlayerStat(name);
  render();
  // Re-focus the input
  setTimeout(() => {
    const el = document.getElementById('addInput' + side);
    if (el) el.focus();
  }, 10);
}

function removePlayer(side, index) {
  const team = side === 'A' ? state.teamA : state.teamB;
  team.players.splice(index, 1);
  render();
}

function startGame() {
  if (state.teamA.players.length === 0 || state.teamB.players.length === 0) return;
  state.screen = 'game';

  state.roundNumber = 0;
  state.history = [];
  state.winner = null;
  // Reset player stats
  state.playerStats = {};
  state.teamA.players.forEach(p => initPlayerStat(p));
  state.teamB.players.forEach(p => initPlayerStat(p));
  nextRound();
}

function rematch() {
  state.screen = 'game';

  state.roundNumber = 0;
  state.history = [];
  state.winner = null;
  state.playerStats = {};
  state.teamA.players.forEach(p => initPlayerStat(p));
  state.teamB.players.forEach(p => initPlayerStat(p));
  nextRound();
}

function cancelRobots() {
  clearTimeout(robotTimerA);
  clearTimeout(robotTimerB);
  robotTimerA = null;
  robotTimerB = null;
}

function newGame() {
  cancelRobots();
  Object.assign(state, {
    screen: 'setup',
    teamA: { name: 'Team Alpha', players: [] },
    teamB: { name: 'Team Bravo', players: [] },
    pullsToWin: 5,
    difficulty: 3,
    ropePosition: 0,
    currentProblem: null,
    currentPlayerA: '',
    currentPlayerB: '',
    inputA: '',
    inputB: '',
    lockedA: false,
    lockedB: false,
    animating: false,
    roundNumber: 0,
    history: [],
    playerStats: {},
    winner: null,
    showResult: null,
    addPlayerInputA: '',
    addPlayerInputB: '',
  });
  render();
}

// ── Initial render ──────────────────────────────────────────────
render();
