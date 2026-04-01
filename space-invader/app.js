/* ── Space Invader: Main Game Engine ──────────────────────────
   Canvas + HTML hybrid. requestAnimationFrame game loop.
   State machine: menu | game | boss | levelcomplete | gameover | leaderboard
   ─────────────────────────────────────────────────────────── */

// ═══════════════════════════════════════════════════════════
// §1  CONSTANTS
// ═══════════════════════════════════════════════════════════
const ALIEN_TYPES = [
  { name: 'scout',    shape: 'triangle', hp: 1, speedMod: 1.0, drift: 0,    color: '#667eea', minLevel: 1 },
  { name: 'drone',    shape: 'hexagon',  hp: 1, speedMod: 1.1, drift: 0.8,  color: '#48bb78', minLevel: 2 },
  { name: 'tank',     shape: 'square',   hp: 2, speedMod: 0.7, drift: 0,    color: '#ed8936', minLevel: 4 },
  { name: 'zigzag',   shape: 'diamond',  hp: 1, speedMod: 1.2, drift: 2.0,  color: '#e53e3e', minLevel: 6 },
  { name: 'shielded', shape: 'circle',   hp: 2, speedMod: 0.9, drift: 0.3,  color: '#9f7aea', minLevel: 8 },
];

const BOSS_TYPES = [
  { name: 'Mothership',      color: '#ff4444', mechanic: 'spawns',     baseHp: 5 },
  { name: 'Mathemagician',   color: '#9f7aea', mechanic: 'timed',      baseHp: 4 },
  { name: 'Number Cruncher', color: '#ed8936', mechanic: 'rapid',      baseHp: 6 },
  { name: 'The Professor',   color: '#4299e1', mechanic: 'hard',       baseHp: 5 },
  { name: 'Glitch',          color: '#38b2ac', mechanic: 'scramble',   baseHp: 3 },
];

const POWERUP_TYPES = [
  { type: 'slowmo', icon: '\u231B', label: 'Slow-Mo',    color: '#00e5ff', duration: 8000 },
  { type: 'freeze', icon: '\u2744', label: 'Freeze',     color: '#64b4ff', duration: 5000 },
  { type: 'shield', icon: '\u26E8', label: 'Shield',     color: '#ffd700', duration: 0 },
  { type: 'bomb',   icon: '\uD83D\uDCA3', label: 'Bomb', color: '#ff4444', duration: 0 },
  { type: 'laser',  icon: '\u26A1', label: 'Laser',      color: '#ffff00', duration: 0 },
  { type: 'double', icon: '\u2605', label: '2x Points',  color: '#ffa500', duration: 10000 },
  { type: 'life',   icon: '\u2764', label: '+1 Life',    color: '#ff69b4', duration: 0 },
];

const BASE_SPAWN_INTERVAL = 3000;
const MIN_SPAWN_INTERVAL = 800;
const BASE_ALIEN_SPEED = 22;       // px/s at level 1
const ALIEN_SPEED_PER_LEVEL = 3;
const MAX_ALIEN_SPEED = 60;
const BEAM_DURATION = 300;
const MAX_PARTICLES = 200;
const MAX_LIVES = 5;
const BOSS_ATTACK_BASE = 8000;
const BOSS_ATTACK_MIN = 4000;

// ═══════════════════════════════════════════════════════════
// §2  STATE
// ═══════════════════════════════════════════════════════════
let state = {};
let canvas, ctx, overlay;
let canvasW = 0, canvasH = 0, dpr = 1;
let numpadH = 0, problemBarH = 0, inputBarH = 0, hudH = 0;
let animFrame = 0;
let flashTimer = 0, flashType = '';

function initState() {
  state = {
    screen: 'menu',
    score: 0,
    level: 1,
    lives: 3,
    combo: 0,
    maxCombo: 0,
    multiplier: 1,
    aliensDefeated: 0,
    aliensForLevel: aliensForLevel(1),
    aliens: [],
    selectedAlien: null,
    inputValue: '',
    beamActive: false,
    beamTarget: null,
    beamTimer: 0,
    activePowerUps: [],
    powerUpDrops: [],
    boss: null,
    bossTimer: 0,
    bossScrambleTimer: 0,
    bossMiniSpawnTimer: 0,
    particles: [],
    stars: [],
    spawnTimer: 0,
    lastTimestamp: 0,
    levelKills: 0,
    levelStartTime: 0,
    levelCorrect: 0,
    levelWrong: 0,
    responseStart: 0,
    inputWrong: false,
    paused: false,
  };
}

function aliensForLevel(lvl) { return 5 + 3 * lvl; }
function difficultyForLevel(lvl) {
  if (lvl <= 2) return 1;
  if (lvl <= 4) return 2;
  if (lvl <= 7) return 3;
  if (lvl <= 10) return 4;
  return 5;
}
function spawnInterval(lvl) {
  return Math.max(MIN_SPAWN_INTERVAL, BASE_SPAWN_INTERVAL - (lvl - 1) * 200);
}
function alienSpeed(lvl) {
  return Math.min(MAX_ALIEN_SPEED, BASE_ALIEN_SPEED + (lvl - 1) * ALIEN_SPEED_PER_LEVEL);
}

// ═══════════════════════════════════════════════════════════
// §3  CANVAS SETUP
// ═══════════════════════════════════════════════════════════
function setupCanvas() {
  canvas = document.getElementById('game-canvas');
  ctx = canvas.getContext('2d');
  overlay = document.getElementById('ui-overlay');
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  window.addEventListener('orientationchange', () => setTimeout(resizeCanvas, 100));
}

function resizeCanvas() {
  dpr = window.devicePixelRatio || 1;
  canvas.width = window.innerWidth * dpr;
  canvas.height = window.innerHeight * dpr;
  canvas.style.width = window.innerWidth + 'px';
  canvas.style.height = window.innerHeight + 'px';
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  canvasW = window.innerWidth;
  canvasH = window.innerHeight;
}

// ═══════════════════════════════════════════════════════════
// §4  STAR FIELD
// ═══════════════════════════════════════════════════════════
function initStars() {
  state.stars = [];
  for (let i = 0; i < 70; i++) {
    state.stars.push({
      x: Math.random() * canvasW,
      y: Math.random() * canvasH,
      speed: 8 + Math.random() * 25,
      size: 0.5 + Math.random() * 1.5,
      brightness: 0.3 + Math.random() * 0.7,
    });
  }
}

function updateStars(dt) {
  for (const s of state.stars) {
    s.y += s.speed * (dt / 1000);
    if (s.y > canvasH) {
      s.y = -2;
      s.x = Math.random() * canvasW;
    }
  }
}

function drawStars() {
  for (const s of state.stars) {
    ctx.globalAlpha = s.brightness;
    ctx.fillStyle = '#fff';
    ctx.fillRect(s.x, s.y, s.size, s.size);
  }
  ctx.globalAlpha = 1;
}

// ═══════════════════════════════════════════════════════════
// §5  PARTICLE SYSTEM
// ═══════════════════════════════════════════════════════════
function spawnParticles(x, y, color, count, speed) {
  for (let i = 0; i < count && state.particles.length < MAX_PARTICLES; i++) {
    const angle = Math.random() * Math.PI * 2;
    const v = (speed || 80) * (0.3 + Math.random() * 0.7);
    state.particles.push({
      x, y,
      vx: Math.cos(angle) * v,
      vy: Math.sin(angle) * v,
      life: 0.4 + Math.random() * 0.5,
      maxLife: 0.8,
      color: color || '#fff',
      size: 1.5 + Math.random() * 3,
    });
  }
}

function updateParticles(dt) {
  const sec = dt / 1000;
  for (let i = state.particles.length - 1; i >= 0; i--) {
    const p = state.particles[i];
    p.x += p.vx * sec;
    p.y += p.vy * sec;
    p.vy += 40 * sec; // gravity
    p.life -= sec;
    if (p.life <= 0) state.particles.splice(i, 1);
  }
}

function drawParticles() {
  for (const p of state.particles) {
    const alpha = Math.max(0, p.life / p.maxLife);
    ctx.globalAlpha = alpha;
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size * alpha, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;
}

// ═══════════════════════════════════════════════════════════
// §6  ALIEN DRAWING
// ═══════════════════════════════════════════════════════════
const ALIEN_SIZE = 36;

function drawAlienShape(x, y, type, hp, maxHp, time) {
  const t = type;
  const size = t.name === 'tank' ? ALIEN_SIZE * 1.2 : ALIEN_SIZE;
  const pulse = 1 + Math.sin(time * 3) * 0.04;
  const s = size * pulse;

  ctx.save();
  ctx.translate(x, y);
  ctx.shadowColor = t.color;
  ctx.shadowBlur = 12;
  ctx.fillStyle = t.color;
  ctx.strokeStyle = t.color;
  ctx.lineWidth = 2;

  if (t.shape === 'triangle') {
    ctx.beginPath();
    ctx.moveTo(0, -s * 0.6);
    ctx.lineTo(-s * 0.5, s * 0.4);
    ctx.lineTo(s * 0.5, s * 0.4);
    ctx.closePath();
    ctx.fill();
  } else if (t.shape === 'hexagon') {
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const a = (Math.PI / 3) * i - Math.PI / 6;
      const px = Math.cos(a) * s * 0.5;
      const py = Math.sin(a) * s * 0.5;
      i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.fill();
  } else if (t.shape === 'square') {
    const hs = s * 0.45;
    ctx.fillRect(-hs, -hs, hs * 2, hs * 2);
  } else if (t.shape === 'diamond') {
    ctx.beginPath();
    ctx.moveTo(0, -s * 0.55);
    ctx.lineTo(s * 0.4, 0);
    ctx.lineTo(0, s * 0.55);
    ctx.lineTo(-s * 0.4, 0);
    ctx.closePath();
    ctx.fill();
  } else if (t.shape === 'circle') {
    ctx.beginPath();
    ctx.arc(0, 0, s * 0.4, 0, Math.PI * 2);
    ctx.fill();
    // Shield ring
    if (hp >= maxHp) {
      ctx.beginPath();
      ctx.arc(0, 0, s * 0.55, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(159,122,234,0.6)';
      ctx.lineWidth = 3;
      ctx.stroke();
    }
  }

  ctx.shadowBlur = 0;
  ctx.restore();
}

function drawAlien(alien, time) {
  drawAlienShape(alien.x, alien.y, alien.typeData, alien.hp, alien.maxHp, time);

  // Problem text on alien
  ctx.save();
  ctx.font = 'bold 11px -apple-system, sans-serif';
  ctx.fillStyle = '#fff';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  // Truncate long problems
  let text = alien.problem.display;
  if (text.length > 14) text = text.slice(0, 13) + '..';
  ctx.fillText(text, alien.x, alien.y);
  ctx.restore();
}

function drawSelectedRing(alien, time) {
  const r = ALIEN_SIZE * 0.7;
  ctx.save();
  ctx.strokeStyle = '#00e5ff';
  ctx.lineWidth = 2;
  ctx.shadowColor = '#00e5ff';
  ctx.shadowBlur = 10;
  ctx.setLineDash([4, 4]);
  ctx.lineDashOffset = -time * 30;
  ctx.beginPath();
  ctx.arc(alien.x, alien.y, r, 0, Math.PI * 2);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.shadowBlur = 0;
  ctx.restore();
}

// ═══════════════════════════════════════════════════════════
// §7  SHIP
// ═══════════════════════════════════════════════════════════
function drawShip(time) {
  const sx = canvasW / 2;
  // Compute game area bottom: just above the problem bar
  const gameBottom = getGameBottom();
  const sy = gameBottom - 20;

  ctx.save();
  ctx.translate(sx, sy);

  // Engine glow
  const flickr = 0.5 + Math.random() * 0.5;
  ctx.shadowColor = '#667eea';
  ctx.shadowBlur = 15 * flickr;

  // Ship body
  const grad = ctx.createLinearGradient(0, -18, 0, 12);
  grad.addColorStop(0, '#667eea');
  grad.addColorStop(1, '#764ba2');
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.moveTo(0, -18);
  ctx.lineTo(-14, 12);
  ctx.lineTo(14, 12);
  ctx.closePath();
  ctx.fill();

  // Cockpit
  ctx.fillStyle = '#00e5ff';
  ctx.beginPath();
  ctx.arc(0, -4, 4, 0, Math.PI * 2);
  ctx.fill();

  // Engine flame
  ctx.fillStyle = `rgba(255,${100 + Math.random()*100},50,${flickr * 0.8})`;
  ctx.beginPath();
  ctx.moveTo(-6, 12);
  ctx.lineTo(0, 12 + 8 + Math.random() * 6);
  ctx.lineTo(6, 12);
  ctx.closePath();
  ctx.fill();

  ctx.shadowBlur = 0;
  ctx.restore();

  return { x: sx, y: sy };
}

// ═══════════════════════════════════════════════════════════
// §8  BEAM
// ═══════════════════════════════════════════════════════════
function drawBeam(shipPos, target, progress) {
  if (!target) return;
  const alpha = 1 - progress;
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.strokeStyle = '#00e5ff';
  ctx.lineWidth = 3 - progress * 2;
  ctx.shadowColor = '#00e5ff';
  ctx.shadowBlur = 20;
  ctx.beginPath();
  ctx.moveTo(shipPos.x, shipPos.y - 18);
  ctx.lineTo(target.x, target.y);
  ctx.stroke();
  ctx.shadowBlur = 0;
  ctx.globalAlpha = 1;
  ctx.restore();
}

// ═══════════════════════════════════════════════════════════
// §9  BOSS DRAWING
// ═══════════════════════════════════════════════════════════
function drawBoss(boss, time) {
  const bx = canvasW / 2;
  const by = hudH + 50;
  const size = 50 + Math.sin(time * 2) * 3;
  boss._x = bx;
  boss._y = by;

  ctx.save();
  ctx.translate(bx, by);
  ctx.shadowColor = boss.def.color;
  ctx.shadowBlur = 20;
  ctx.fillStyle = boss.def.color;

  if (boss.def.mechanic === 'spawns') {
    // Mothership: wide saucer
    ctx.beginPath();
    ctx.ellipse(0, 0, size * 1.2, size * 0.5, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(0, -5, 12, 0, Math.PI * 2);
    ctx.fill();
  } else if (boss.def.mechanic === 'timed') {
    // Mathemagician: wizard hat shape
    ctx.beginPath();
    ctx.moveTo(0, -size * 0.8);
    ctx.lineTo(-size * 0.6, size * 0.3);
    ctx.lineTo(size * 0.6, size * 0.3);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 20px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('\u2605', 0, 10);
  } else if (boss.def.mechanic === 'rapid') {
    // Number Cruncher: calculator shape
    const w = size * 0.8, h = size * 1.0;
    ctx.fillRect(-w/2, -h/2, w, h);
    ctx.fillStyle = '#1a1a2e';
    ctx.fillRect(-w/2 + 6, -h/2 + 6, w - 12, h * 0.3);
  } else if (boss.def.mechanic === 'hard') {
    // The Professor: brain with glasses
    ctx.beginPath();
    ctx.arc(0, 0, size * 0.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;
    // Glasses
    ctx.beginPath();
    ctx.arc(-12, -3, 8, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(12, -3, 8, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(-4, -3);
    ctx.lineTo(4, -3);
    ctx.stroke();
  } else if (boss.def.mechanic === 'scramble') {
    // Glitch: pixelated/distorted
    for (let i = 0; i < 12; i++) {
      const gx = (Math.random() - 0.5) * size;
      const gy = (Math.random() - 0.5) * size;
      const gs = 5 + Math.random() * 10;
      ctx.globalAlpha = 0.5 + Math.random() * 0.5;
      ctx.fillRect(gx, gy, gs, gs);
    }
    ctx.globalAlpha = 1;
  }

  ctx.shadowBlur = 0;
  ctx.restore();

  // Problem on boss
  if (boss.problem) {
    ctx.save();
    ctx.font = 'bold 14px -apple-system, sans-serif';
    ctx.fillStyle = '#fff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    let txt = boss.problem.display;
    // Scramble effect
    if (boss.def.mechanic === 'scramble' && boss.scrambleTimer > 0) {
      txt = txt.split('').map(c => Math.random() > 0.4 ? String.fromCharCode(33 + Math.floor(Math.random() * 60)) : c).join('');
    }
    ctx.fillText(txt, bx, by + size * 0.5 + 18);
    ctx.restore();
  }
}

// ═══════════════════════════════════════════════════════════
// §10  POWER-UP DROPS
// ═══════════════════════════════════════════════════════════
function drawPowerUpDrops(time) {
  for (const d of state.powerUpDrops) {
    const def = POWERUP_TYPES.find(p => p.type === d.type);
    if (!def) continue;
    ctx.save();
    ctx.translate(d.x, d.y);
    const pulse = 1 + Math.sin(time * 5) * 0.1;
    ctx.scale(pulse, pulse);
    // Background circle
    ctx.fillStyle = def.color;
    ctx.globalAlpha = 0.3;
    ctx.beginPath();
    ctx.arc(0, 0, 14, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
    // Icon
    ctx.font = '16px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(def.icon, 0, 0);
    ctx.restore();
  }
}

// ═══════════════════════════════════════════════════════════
// §11  GAME AREA MEASUREMENTS
// ═══════════════════════════════════════════════════════════
function getGameBottom() {
  // In landscape: problem bar is in the right column, use game spacer bottom instead
  const spacer = document.getElementById('game-touch-area');
  if (spacer) {
    const rect = spacer.getBoundingClientRect();
    if (rect.height > 0) return rect.bottom;
  }
  // In portrait: game area is above problem bar
  const el = document.querySelector('.problem-bar');
  if (el) {
    const top = el.getBoundingClientRect().top;
    if (top > 50) return top; // sanity check: must be reasonable
  }
  return canvasH * 0.58;
}

function getGameTop() {
  const el = document.querySelector('.hud');
  if (el) return el.getBoundingClientRect().bottom;
  return 42;
}

// ═══════════════════════════════════════════════════════════
// §12  SPAWNING
// ═══════════════════════════════════════════════════════════
let nextAlienId = 1;

function spawnAlien() {
  const lvl = state.level;
  // Pick alien type
  const available = ALIEN_TYPES.filter(t => t.minLevel <= lvl);
  const typeData = randPick(available);
  const diff = difficultyForLevel(lvl);
  const problem = generateSpaceProblem(diff, { level: state.level });
  const gameTop = getGameTop();
  const padding = 40;

  const alien = {
    id: nextAlienId++,
    x: padding + Math.random() * (canvasW - padding * 2),
    y: gameTop - 30,
    baseSpeed: alienSpeed(lvl) * typeData.speedMod,
    typeData,
    hp: typeData.hp,
    maxHp: typeData.hp,
    problem,
    drift: typeData.drift,
    driftPhase: Math.random() * Math.PI * 2,
    spawnTime: performance.now() / 1000,
  };
  state.aliens.push(alien);
}

// ═══════════════════════════════════════════════════════════
// §13  UPDATE LOGIC
// ═══════════════════════════════════════════════════════════
function update(dt) {
  const sec = dt / 1000;
  const time = performance.now() / 1000;

  updateStars(dt);

  // Speed modifiers from power-ups
  let speedMult = 1;
  if (state.activePowerUps.find(p => p.type === 'freeze')) speedMult = 0;
  else if (state.activePowerUps.find(p => p.type === 'slowmo')) speedMult = 0.5;

  // Update aliens
  const gameBottom = getGameBottom();
  for (let i = state.aliens.length - 1; i >= 0; i--) {
    const a = state.aliens[i];
    a.y += a.baseSpeed * speedMult * sec;
    // Drift
    if (a.drift > 0) {
      a.x += Math.sin((time - a.spawnTime) * 2 + a.driftPhase) * a.drift * 30 * sec;
      a.x = Math.max(20, Math.min(canvasW - 20, a.x));
    }
    // Reached bottom
    if (a.y > gameBottom - 10) {
      loseLife();
      spawnParticles(a.x, a.y, '#ff4444', 8, 50);
      state.aliens.splice(i, 1);
      if (state.selectedAlien === a.id) state.selectedAlien = null;
    }
  }

  // Auto-target: pick closest to bottom
  if (!state.aliens.find(a => a.id === state.selectedAlien)) {
    autoTarget();
  }

  // Update power-up timers
  for (let i = state.activePowerUps.length - 1; i >= 0; i--) {
    if (state.activePowerUps[i].duration > 0) {
      state.activePowerUps[i].remaining -= dt;
      if (state.activePowerUps[i].remaining <= 0) {
        state.activePowerUps.splice(i, 1);
      }
    }
  }

  // Update power-up drops
  for (let i = state.powerUpDrops.length - 1; i >= 0; i--) {
    const d = state.powerUpDrops[i];
    d.y += 40 * sec;
    // Collect if near bottom
    if (d.y > gameBottom - 60) {
      collectPowerUp(d.type);
      state.powerUpDrops.splice(i, 1);
    }
  }

  // Beam timer
  if (state.beamActive) {
    state.beamTimer -= dt;
    if (state.beamTimer <= 0) {
      state.beamActive = false;
      state.beamTarget = null;
    }
  }

  // Flash timer
  if (flashTimer > 0) {
    flashTimer -= dt;
    if (flashTimer <= 0) {
      flashTimer = 0;
      const el = document.querySelector('.flash-overlay');
      if (el) el.className = 'flash-overlay';
    }
  }

  updateParticles(dt);

  // Spawn logic (only in game mode, not boss)
  if (state.screen === 'game') {
    if (state.levelKills < state.aliensForLevel) {
      state.spawnTimer += dt;
      const interval = spawnInterval(state.level);
      if (state.spawnTimer >= interval) {
        state.spawnTimer = 0;
        spawnAlien();
        // Extra aliens at higher levels
        if (state.level >= 5 && Math.random() < 0.2) spawnAlien();
        if (state.level >= 9 && Math.random() < 0.3) spawnAlien();
      }
    } else if (state.aliens.length === 0) {
      // All aliens for this level defeated, start boss
      startBoss();
    }
  }

  // Boss logic
  if (state.screen === 'boss' && state.boss) {
    const boss = state.boss;
    // Attack timer
    boss.attackTimer -= dt;
    if (boss.attackTimer <= 0) {
      loseLife();
      AudioManager.play('hit');
      boss.attackTimer = Math.max(BOSS_ATTACK_MIN, BOSS_ATTACK_BASE - state.level * 500);
      // New problem on attack
      boss.problem = generateSpaceProblem(Math.min(5, difficultyForLevel(state.level) + 1), { level: state.level });
      state.responseStart = performance.now();
    }

    // Scramble timer
    if (boss.scrambleTimer > 0) boss.scrambleTimer -= dt;

    // Mothership mini-spawn
    if (boss.def.mechanic === 'spawns') {
      boss.miniSpawnTimer -= dt;
      if (boss.miniSpawnTimer <= 0) {
        boss.miniSpawnTimer = 6000;
        spawnAlien(); // spawns a regular alien
      }
    }

    // Still have regular aliens from mothership
    const gameBottom2 = getGameBottom();
    for (let i = state.aliens.length - 1; i >= 0; i--) {
      const a = state.aliens[i];
      a.y += a.baseSpeed * speedMult * sec;
      if (a.y > gameBottom2 - 10) {
        loseLife();
        state.aliens.splice(i, 1);
      }
    }
  }

  // Check game over
  if (state.lives <= 0 && state.screen !== 'gameover') {
    gameOver();
  }
}

// ═══════════════════════════════════════════════════════════
// §14  GAME ACTIONS
// ═══════════════════════════════════════════════════════════
function autoTarget() {
  if (state.aliens.length === 0) { state.selectedAlien = null; return; }
  let best = state.aliens[0];
  for (const a of state.aliens) {
    if (a.y > best.y) best = a;
  }
  state.selectedAlien = best.id;
  state.responseStart = performance.now();
}

function cycleTarget(direction) {
  if (state.aliens.length === 0) return;
  if (state.aliens.length === 1) {
    state.selectedAlien = state.aliens[0].id;
    state.responseStart = performance.now();
    renderProblem();
    return;
  }
  // Sort aliens left-to-right by x position for intuitive cycling
  const sorted = [...state.aliens].sort((a, b) => a.x - b.x);
  const currentIdx = sorted.findIndex(a => a.id === state.selectedAlien);
  let nextIdx;
  if (currentIdx < 0) {
    nextIdx = 0;
  } else if (direction === 1) {
    nextIdx = (currentIdx + 1) % sorted.length;
  } else {
    nextIdx = (currentIdx - 1 + sorted.length) % sorted.length;
  }
  state.selectedAlien = sorted[nextIdx].id;
  state.responseStart = performance.now();
  state.inputValue = '';
  renderInput();
  renderProblem();
  AudioManager.play('click');
}

function loseLife() {
  // Check for shield
  const shieldIdx = state.activePowerUps.findIndex(p => p.type === 'shield');
  if (shieldIdx >= 0) {
    state.activePowerUps.splice(shieldIdx, 1);
    AudioManager.play('powerup');
    triggerFlash('correct');
    renderHUD();
    return;
  }
  state.lives--;
  state.combo = 0;
  AudioManager.play('hit');
  triggerFlash('wrong');
  renderHUD();
}

function triggerFlash(type) {
  flashType = type;
  flashTimer = 200;
  const el = document.querySelector('.flash-overlay');
  if (el) el.className = 'flash-overlay ' + type;
}

function submitAnswer() {
  const val = state.inputValue.trim();
  if (val === '' || val === '-' || val === '.') return;
  const numVal = parseFloat(val);
  if (isNaN(numVal)) { state.inputValue = ''; renderInput(); return; }

  AudioManager.play('click');

  // Boss mode
  if (state.screen === 'boss' && state.boss) {
    submitBossAnswer(numVal);
    return;
  }

  // Normal game
  const alien = state.aliens.find(a => a.id === state.selectedAlien);
  if (!alien) { state.inputValue = ''; renderInput(); return; }

  const correct = checkAnswer(numVal, alien.problem.answer);

  if (correct) {
    alien.hp--;
    AudioManager.play('shoot');

    // Beam animation
    state.beamActive = true;
    state.beamTarget = { x: alien.x, y: alien.y };
    state.beamTimer = BEAM_DURATION;

    if (alien.hp <= 0) {
      // Destroyed
      AudioManager.play('explosion');
      spawnParticles(alien.x, alien.y, alien.typeData.color, 15, 100);

      // Score
      const responseMs = performance.now() - state.responseStart;
      const basePoints = 10 * alien.problem.difficulty;
      const comboBonus = Math.floor(state.combo / 3) * 5;
      const speedBonus = Math.max(0, Math.floor((5000 - responseMs) / 500));
      const mult = state.activePowerUps.find(p => p.type === 'double') ? 2 : 1;
      state.score += (basePoints + comboBonus + speedBonus) * mult;

      state.combo++;
      state.maxCombo = Math.max(state.maxCombo, state.combo);
      state.aliensDefeated++;
      state.levelKills++;
      state.levelCorrect++;

      // Remove alien
      const idx = state.aliens.indexOf(alien);
      if (idx >= 0) state.aliens.splice(idx, 1);
      state.selectedAlien = null;
      autoTarget();

      // Power-up drop chance
      if (state.combo > 0 && state.combo % 5 === 0) {
        dropPowerUp(alien.x, alien.y);
      } else if (Math.random() < 0.10) {
        dropPowerUp(alien.x, alien.y);
      }

      triggerFlash('correct');
    }
  } else {
    // Wrong answer
    state.levelWrong++;
    loseLife();
    state.inputWrong = true;
    setTimeout(() => { state.inputWrong = false; renderInput(); }, 300);
  }

  state.inputValue = '';
  renderInput();
  renderHUD();
}

function submitBossAnswer(numVal) {
  const boss = state.boss;
  if (!boss || !boss.problem) return;

  const correct = checkAnswer(numVal, boss.problem.answer);
  if (correct) {
    boss.hp--;
    state.score += 50 * state.level;
    state.combo++;
    state.maxCombo = Math.max(state.maxCombo, state.combo);
    state.levelCorrect++;
    AudioManager.play('bossHit');
    spawnParticles(boss._x || canvasW/2, boss._y || 80, boss.def.color, 10, 80);
    triggerFlash('correct');

    if (boss.hp <= 0) {
      // Boss defeated
      state.score += 500 * state.level;
      AudioManager.play('bossDeath');
      spawnParticles(boss._x || canvasW/2, boss._y || 80, boss.def.color, 30, 150);
      state.boss = null;
      levelComplete();
    } else {
      // Next boss problem
      const diff = boss.def.mechanic === 'hard'
        ? Math.min(5, difficultyForLevel(state.level) + 2)
        : Math.min(5, difficultyForLevel(state.level) + 1);
      boss.problem = generateSpaceProblem(diff, { level: state.level });
      boss.attackTimer = Math.max(BOSS_ATTACK_MIN, BOSS_ATTACK_BASE - state.level * 500);
      if (boss.def.mechanic === 'scramble') boss.scrambleTimer = 1200;
      state.responseStart = performance.now();
    }
  } else {
    state.levelWrong++;
    loseLife();
    state.inputWrong = true;
    setTimeout(() => { state.inputWrong = false; renderInput(); }, 300);
  }

  state.inputValue = '';
  renderInput();
  renderHUD();
}

function checkAnswer(input, expected) {
  if (Number.isInteger(expected)) return input === expected;
  return Math.abs(input - expected) < 0.015;
}

function dropPowerUp(x, y) {
  const def = randPick(POWERUP_TYPES);
  state.powerUpDrops.push({ type: def.type, x, y, speed: 40 });
}

function collectPowerUp(type) {
  AudioManager.play('powerup');
  const def = POWERUP_TYPES.find(p => p.type === type);
  if (!def) return;

  if (type === 'bomb') {
    // Destroy all on-screen aliens
    for (const a of state.aliens) {
      state.score += 10 * a.problem.difficulty;
      state.aliensDefeated++;
      state.levelKills++;
      spawnParticles(a.x, a.y, a.typeData.color, 8, 80);
    }
    state.aliens = [];
    state.selectedAlien = null;
    AudioManager.play('explosion');
  } else if (type === 'laser') {
    const alien = state.aliens.find(a => a.id === state.selectedAlien);
    if (alien) {
      alien.hp = 0;
      state.score += 10 * alien.problem.difficulty;
      state.aliensDefeated++;
      state.levelKills++;
      spawnParticles(alien.x, alien.y, alien.typeData.color, 15, 100);
      const idx = state.aliens.indexOf(alien);
      if (idx >= 0) state.aliens.splice(idx, 1);
      state.selectedAlien = null;
      autoTarget();
      AudioManager.play('explosion');
    }
  } else if (type === 'life') {
    if (state.lives < MAX_LIVES) state.lives++;
  } else if (def.duration > 0) {
    // Timed power-up
    const existing = state.activePowerUps.find(p => p.type === type);
    if (existing) {
      existing.remaining = def.duration;
    } else {
      state.activePowerUps.push({ type, duration: def.duration, remaining: def.duration });
    }
  }
  renderHUD();
}

// ═══════════════════════════════════════════════════════════
// §15  BOSS MANAGEMENT
// ═══════════════════════════════════════════════════════════
function startBoss() {
  state.screen = 'boss';
  const bossIdx = (state.level - 1) % BOSS_TYPES.length;
  const def = BOSS_TYPES[bossIdx];
  const diff = def.mechanic === 'hard'
    ? Math.min(5, difficultyForLevel(state.level) + 2)
    : Math.min(5, difficultyForLevel(state.level) + 1);

  state.boss = {
    def,
    hp: def.baseHp + state.level,
    maxHp: def.baseHp + state.level,
    problem: generateSpaceProblem(diff, { level: state.level }),
    attackTimer: Math.max(BOSS_ATTACK_MIN, BOSS_ATTACK_BASE - state.level * 500),
    scrambleTimer: def.mechanic === 'scramble' ? 1200 : 0,
    miniSpawnTimer: 6000,
    _x: canvasW / 2,
    _y: 80,
  };
  state.responseStart = performance.now();
  AudioManager.play('bossAppear');
  renderHUD();
  renderProblem();
}

// ═══════════════════════════════════════════════════════════
// §16  LEVEL MANAGEMENT
// ═══════════════════════════════════════════════════════════
function levelComplete() {
  state.screen = 'levelcomplete';
  AudioManager.play('levelUp');
  state.score += 100 * state.level;
  renderLevelComplete();
}

function nextLevel() {
  state.level++;
  state.levelKills = 0;
  state.aliensForLevel = aliensForLevel(state.level);
  state.spawnTimer = 0;
  state.aliens = [];
  state.boss = null;
  state.selectedAlien = null;
  state.activePowerUps = [];
  state.powerUpDrops = [];
  state.levelCorrect = 0;
  state.levelWrong = 0;
  state.levelStartTime = performance.now();
  state.screen = 'game';
  state.inputValue = '';
  renderUI();
}

function gameOver() {
  state.screen = 'gameover';
  AudioManager.play('gameOver');
  renderGameOver();
}

// ═══════════════════════════════════════════════════════════
// §17  RENDERING (HTML OVERLAY)
// ═══════════════════════════════════════════════════════════
function renderUI() {
  if (state.screen === 'menu') {
    renderMenu();
  } else if (state.screen === 'game' || state.screen === 'boss') {
    renderGameUI();
  } else if (state.screen === 'gameover') {
    renderGameOver();
  } else if (state.screen === 'levelcomplete') {
    renderLevelComplete();
  } else if (state.screen === 'leaderboard') {
    renderLeaderboard();
  }
}

function renderMenu() {
  const hs = Leaderboard.getHighScore();
  overlay.innerHTML = `
    <div class="menu-screen">
      <div class="menu-title">NUMBER SENSE<br>SPACE INVADER</div>
      <div class="menu-subtitle">Destroy aliens with mental math!</div>
      <div class="menu-subtitle" style="font-size:11px;margin-top:-12px;color:#667eea">Number Sense Practice</div>
      ${hs > 0 ? `<div class="menu-highscore">High Score: ${hs.toLocaleString()}</div>` : ''}
      <button class="menu-btn play" id="btn-play">PLAY</button>
      <button class="menu-btn leaderboard" id="btn-lb">LEADERBOARD</button>
      <a href="../index.html" class="menu-btn back-home">&larr; STEM Home</a>
    </div>
  `;
  document.getElementById('btn-play').addEventListener('touchstart', startGame, { passive: true });
  document.getElementById('btn-play').addEventListener('click', startGame);
  document.getElementById('btn-lb').addEventListener('touchstart', (e) => { e.preventDefault(); showLeaderboard(); }, { passive: false });
  document.getElementById('btn-lb').addEventListener('click', showLeaderboard);
}

function renderGameUI() {
  const isLandscape = canvasW > canvasH;

  if (isLandscape) {
    overlay.innerHTML = `
      <div class="game-col">
        ${hudHTML()}
        ${powerUpBarHTML()}
        ${state.screen === 'boss' && state.boss ? bossBarHTML() : ''}
        <div class="game-spacer" id="game-touch-area"></div>
      </div>
      <div class="input-col">
        ${problemBarHTML()}
        ${inputBarHTML()}
        ${numpadHTML()}
      </div>
      <div class="flash-overlay"></div>
    `;
  } else {
    overlay.innerHTML = `
      ${hudHTML()}
      ${powerUpBarHTML()}
      ${state.screen === 'boss' && state.boss ? bossBarHTML() : ''}
      <div class="game-spacer" id="game-touch-area"></div>
      ${problemBarHTML()}
      ${inputBarHTML()}
      ${numpadHTML()}
      <div class="flash-overlay"></div>
    `;
  }

  bindNumpad();
  bindGameTouch();
}

function hudHTML() {
  let hearts = '';
  for (let i = 0; i < MAX_LIVES; i++) {
    hearts += `<span class="hud-heart ${i < state.lives ? '' : 'lost'}">\u2764</span>`;
  }
  return `
    <div class="hud">
      <div class="hud-left">
        <span class="hud-score">${state.score.toLocaleString()}</span>
      </div>
      <div class="hud-center">
        <span class="hud-level">LVL ${state.level}</span>
        ${state.combo >= 3 ? `<span class="hud-combo">${state.combo}x</span>` : ''}
      </div>
      <div class="hud-right">
        <div class="hud-lives">${hearts}</div>
        <button class="hud-audio" id="btn-audio">${AudioManager.isMuted() ? '\uD83D\uDD07' : '\uD83D\uDD0A'}</button>
      </div>
    </div>
  `;
}

function powerUpBarHTML() {
  if (state.activePowerUps.length === 0) return '<div class="powerup-bar"></div>';
  let html = '<div class="powerup-bar">';
  for (const pu of state.activePowerUps) {
    const def = POWERUP_TYPES.find(p => p.type === pu.type);
    if (!def) continue;
    const secs = pu.duration > 0 ? Math.ceil(pu.remaining / 1000) : '';
    html += `<div class="powerup-indicator ${pu.type}">${def.icon} ${secs}s</div>`;
  }
  html += '</div>';
  return html;
}

function bossBarHTML() {
  const boss = state.boss;
  const pct = (boss.hp / boss.maxHp * 100).toFixed(0);
  return `
    <div class="boss-bar">
      <div class="boss-name">${boss.def.name} (${boss.hp}/${boss.maxHp})</div>
      <div class="boss-bar-inner"><div class="boss-bar-fill" style="width:${pct}%"></div></div>
    </div>
  `;
}

function problemBarHTML() {
  let text = '';
  let category = '';

  if (state.screen === 'boss' && state.boss && state.boss.problem) {
    text = state.boss.problem.display;
    category = state.boss.problem.category;
  } else {
    const alien = state.aliens.find(a => a.id === state.selectedAlien);
    if (alien) {
      text = alien.problem.display;
      category = alien.problem.category;
    }
  }
  const showArrows = state.screen === 'game' && state.aliens.length > 1;
  return `
    <div class="problem-bar">
      ${showArrows ? '<button class="target-arrow target-prev" data-dir="-1">\u25C0</button>' : ''}
      <div class="problem-text">${text || 'Get ready...'}
        ${category ? `<span class="category-tag">${category}</span>` : ''}
        ${showArrows ? `<span class="target-count">${state.aliens.findIndex(a => a.id === state.selectedAlien) + 1} / ${state.aliens.length}</span>` : ''}
      </div>
      ${showArrows ? '<button class="target-arrow target-next" data-dir="1">\u25B6</button>' : ''}
    </div>
  `;
}

function inputBarHTML() {
  return `
    <div class="input-bar">
      <div class="input-value ${state.inputWrong ? 'wrong' : ''}" id="input-display">${state.inputValue || '&nbsp;'}</div>
    </div>
  `;
}

function numpadHTML() {
  return `
    <div class="numpad">
      <button class="numpad-btn" data-val="1">1</button>
      <button class="numpad-btn" data-val="2">2</button>
      <button class="numpad-btn" data-val="3">3</button>
      <button class="numpad-btn del" data-action="del">DEL</button>
      <button class="numpad-btn" data-val="4">4</button>
      <button class="numpad-btn" data-val="5">5</button>
      <button class="numpad-btn" data-val="6">6</button>
      <button class="numpad-btn clr" data-action="clr">CLR</button>
      <button class="numpad-btn" data-val="7">7</button>
      <button class="numpad-btn" data-val="8">8</button>
      <button class="numpad-btn" data-val="9">9</button>
      <button class="numpad-btn neg" data-action="neg">(&minus;)</button>
      <button class="numpad-btn dot" data-val=".">.</button>
      <button class="numpad-btn" data-val="0">0</button>
      <button class="numpad-btn submit" data-action="submit">FIRE</button>
    </div>
  `;
}

function bindNumpad() {
  const buttons = overlay.querySelectorAll('.numpad-btn');
  for (const btn of buttons) {
    const handler = (e) => {
      e.preventDefault();
      const val = btn.dataset.val;
      const action = btn.dataset.action;
      if (val !== undefined) {
        if (val === '.' && state.inputValue.includes('.')) return;
        state.inputValue += val;
        AudioManager.play('click');
      } else if (action === 'del') {
        state.inputValue = state.inputValue.slice(0, -1);
        AudioManager.play('click');
      } else if (action === 'clr') {
        state.inputValue = '';
        AudioManager.play('click');
      } else if (action === 'neg') {
        if (state.inputValue.startsWith('-')) state.inputValue = state.inputValue.slice(1);
        else state.inputValue = '-' + state.inputValue;
        AudioManager.play('click');
      } else if (action === 'submit') {
        submitAnswer();
        return;
      }
      renderInput();
    };
    btn.addEventListener('touchstart', handler, { passive: false });
    btn.addEventListener('mousedown', (e) => { e.preventDefault(); handler(e); });
  }

  // Audio toggle
  const audioBtn = document.getElementById('btn-audio');
  if (audioBtn) {
    const toggleAudio = (e) => {
      e.preventDefault();
      AudioManager.init();
      AudioManager.toggleMute();
      audioBtn.textContent = AudioManager.isMuted() ? '\uD83D\uDD07' : '\uD83D\uDD0A';
    };
    audioBtn.addEventListener('touchstart', toggleAudio, { passive: false });
    audioBtn.addEventListener('click', toggleAudio);
  }

  // Target arrow buttons
  const arrows = overlay.querySelectorAll('.target-arrow');
  for (const arrow of arrows) {
    const dir = parseInt(arrow.dataset.dir);
    const handler = (e) => { e.preventDefault(); cycleTarget(dir); };
    arrow.addEventListener('touchstart', handler, { passive: false });
    arrow.addEventListener('mousedown', (e) => { e.preventDefault(); handler(e); });
  }
}

function bindGameTouch() {
  const area = document.getElementById('game-touch-area');
  if (!area) return;

  function selectAlienAt(clientX, clientY) {
    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    let closest = null, closestDist = 60;
    for (const a of state.aliens) {
      const dist = Math.hypot(a.x - x, a.y - y);
      if (dist < closestDist) {
        closest = a;
        closestDist = dist;
      }
    }
    if (closest) {
      state.selectedAlien = closest.id;
      state.responseStart = performance.now();
      state.inputValue = '';
      renderInput();
      renderProblem();
      AudioManager.play('click');
    }
  }

  area.addEventListener('touchstart', (e) => {
    selectAlienAt(e.touches[0].clientX, e.touches[0].clientY);
  }, { passive: true });

  area.addEventListener('click', (e) => {
    selectAlienAt(e.clientX, e.clientY);
  });
}

// Partial re-renders
function renderHUD() {
  const hudEl = overlay.querySelector('.hud');
  if (hudEl) {
    const temp = document.createElement('div');
    temp.innerHTML = hudHTML();
    hudEl.replaceWith(temp.firstElementChild);
    // Re-bind audio button
    const audioBtn = document.getElementById('btn-audio');
    if (audioBtn) {
      const toggleAudio = (e) => {
        e.preventDefault();
        AudioManager.init();
        AudioManager.toggleMute();
        audioBtn.textContent = AudioManager.isMuted() ? '\uD83D\uDD07' : '\uD83D\uDD0A';
      };
      audioBtn.addEventListener('touchstart', toggleAudio, { passive: false });
      audioBtn.addEventListener('click', toggleAudio);
    }
  }
  // Boss bar
  const bossBar = overlay.querySelector('.boss-bar');
  if (state.screen === 'boss' && state.boss) {
    if (bossBar) {
      const temp = document.createElement('div');
      temp.innerHTML = bossBarHTML();
      bossBar.replaceWith(temp.firstElementChild);
    }
  }
  // Power-up bar
  const puBar = overlay.querySelector('.powerup-bar');
  if (puBar) {
    const temp = document.createElement('div');
    temp.innerHTML = powerUpBarHTML();
    puBar.replaceWith(temp.firstElementChild);
  }
}

function renderInput() {
  const el = document.getElementById('input-display');
  if (el) {
    el.textContent = state.inputValue || '\u00A0';
    el.className = 'input-value' + (state.inputWrong ? ' wrong' : '');
  }
}

function renderProblem() {
  const el = overlay.querySelector('.problem-bar');
  if (el) {
    const temp = document.createElement('div');
    temp.innerHTML = problemBarHTML();
    el.replaceWith(temp.firstElementChild);
  }
}

// ═══════════════════════════════════════════════════════════
// §18  GAME OVER / LEVEL COMPLETE / LEADERBOARD SCREENS
// ═══════════════════════════════════════════════════════════
function renderGameOver() {
  const isHigh = Leaderboard.isHighScore(state.score);
  overlay.innerHTML = `
    <div class="gameover-screen">
      <div class="gameover-title">TIME'S UP</div>
      <dl class="gameover-stats">
        <dt>Score</dt><dd>${state.score.toLocaleString()}</dd>
        <dt>Level</dt><dd>${state.level}</dd>
        <dt>Aliens</dt><dd>${state.aliensDefeated}</dd>
        <dt>Max Combo</dt><dd>${state.maxCombo}</dd>
      </dl>
      ${isHigh ? `
        <div class="gameover-newscore">NEW HIGH SCORE!</div>
        <input class="gameover-name-input" id="name-input" type="text" placeholder="Enter name" maxlength="16" autocomplete="off">
        <button class="menu-btn play" id="btn-save">SAVE SCORE</button>
      ` : ''}
      <button class="menu-btn play" id="btn-retry">TRY AGAIN</button>
      <button class="menu-btn leaderboard" id="btn-lb">LEADERBOARD</button>
      <button class="menu-btn back-home" id="btn-menu">MAIN MENU</button>
    </div>
  `;

  const bindBtn = (id, fn) => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('touchstart', (e) => { e.preventDefault(); fn(); }, { passive: false });
      el.addEventListener('click', fn);
    }
  };

  bindBtn('btn-save', () => {
    const name = (document.getElementById('name-input')?.value || '').trim() || 'Anonymous';
    Leaderboard.addScore(name, state.score, state.level, state.aliensDefeated, state.maxCombo);
    showLeaderboard();
  });
  bindBtn('btn-retry', startGame);
  bindBtn('btn-lb', showLeaderboard);
  bindBtn('btn-menu', () => { state.screen = 'menu'; renderUI(); });
}

function renderLevelComplete() {
  const elapsed = ((performance.now() - state.levelStartTime) / 1000).toFixed(1);
  const acc = state.levelCorrect + state.levelWrong > 0
    ? Math.round(state.levelCorrect / (state.levelCorrect + state.levelWrong) * 100) : 100;
  overlay.innerHTML = `
    <div class="levelcomplete-screen">
      <div class="levelcomplete-title">LEVEL ${state.level} COMPLETE!</div>
      <div class="levelcomplete-stats">
        Score: <span>${state.score.toLocaleString()}</span><br>
        Accuracy: <span>${acc}%</span><br>
        Time: <span>${elapsed}s</span><br>
        Combo: <span>${state.maxCombo}x</span>
      </div>
      <button class="menu-btn play" id="btn-next">NEXT LEVEL</button>
    </div>
  `;
  const el = document.getElementById('btn-next');
  if (el) {
    el.addEventListener('touchstart', (e) => { e.preventDefault(); nextLevel(); }, { passive: false });
    el.addEventListener('click', nextLevel);
  }
}

function showLeaderboard() {
  state.screen = 'leaderboard';
  renderLeaderboard();
}

function renderLeaderboard() {
  const scores = Leaderboard.getScores();
  let rows = '';
  scores.forEach((s, i) => {
    rows += `<tr>
      <td class="lb-rank">${i + 1}</td>
      <td>${s.name}</td>
      <td class="lb-score">${s.score.toLocaleString()}</td>
      <td class="lb-level">${s.level}</td>
    </tr>`;
  });
  if (scores.length === 0) rows = '<tr><td colspan="4" style="text-align:center;color:var(--text-dim)">No scores yet</td></tr>';

  overlay.innerHTML = `
    <div class="leaderboard-screen">
      <div class="leaderboard-title">LEADERBOARD</div>
      <table class="leaderboard-table">
        <thead><tr><th>#</th><th>Name</th><th>Score</th><th>Lvl</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
      <button class="menu-btn play" id="btn-back" style="margin-top:20px">BACK</button>
    </div>
  `;
  const el = document.getElementById('btn-back');
  if (el) {
    const back = () => { state.screen = 'menu'; renderUI(); };
    el.addEventListener('touchstart', (e) => { e.preventDefault(); back(); }, { passive: false });
    el.addEventListener('click', back);
  }
}

// ═══════════════════════════════════════════════════════════
// §19  START GAME
// ═══════════════════════════════════════════════════════════
function startGame() {
  initState();
  state.screen = 'game';
  state.levelStartTime = performance.now();
  initStars();
  nextAlienId = 1;
  renderUI();
  // First spawn after brief delay
  setTimeout(() => {
    if (state.screen === 'game') spawnAlien();
  }, 800);
}

// ═══════════════════════════════════════════════════════════
// §20  GAME LOOP
// ═══════════════════════════════════════════════════════════
let lastProblemRender = 0;

function gameLoop(timestamp) {
  if (state.lastTimestamp === 0) state.lastTimestamp = timestamp;
  const dt = Math.min(timestamp - state.lastTimestamp, 100); // cap dt
  state.lastTimestamp = timestamp;

  // Always draw star field
  ctx.clearRect(0, 0, canvasW, canvasH);
  updateStars(dt);
  drawStars();

  if (state.screen === 'game' || state.screen === 'boss') {
    update(dt);
    const time = timestamp / 1000;

    // Draw power-up drops
    drawPowerUpDrops(time);

    // Draw aliens
    for (const a of state.aliens) {
      drawAlien(a, time);
      if (a.id === state.selectedAlien) drawSelectedRing(a, time);
    }

    // Draw boss
    if (state.screen === 'boss' && state.boss) {
      drawBoss(state.boss, time);
    }

    // Draw ship
    const shipPos = drawShip(time);

    // Draw beam
    if (state.beamActive && state.beamTarget) {
      const progress = 1 - (state.beamTimer / BEAM_DURATION);
      drawBeam(shipPos, state.beamTarget, progress);
    }

    // Draw particles
    drawParticles();

    // Periodic UI updates (problem text)
    if (timestamp - lastProblemRender > 200) {
      lastProblemRender = timestamp;
      renderProblem();
    }
  }

  animFrame = requestAnimationFrame(gameLoop);
}

// ═══════════════════════════════════════════════════════════
// §21  KEYBOARD INPUT (desktop fallback)
// ═══════════════════════════════════════════════════════════
document.addEventListener('keydown', (e) => {
  if (state.screen !== 'game' && state.screen !== 'boss') return;
  if (e.key >= '0' && e.key <= '9') {
    state.inputValue += e.key;
    AudioManager.play('click');
    renderInput();
  } else if (e.key === '.') {
    if (!state.inputValue.includes('.')) {
      state.inputValue += '.';
      AudioManager.play('click');
      renderInput();
    }
  } else if (e.key === '-') {
    if (state.inputValue.startsWith('-')) state.inputValue = state.inputValue.slice(1);
    else state.inputValue = '-' + state.inputValue;
    AudioManager.play('click');
    renderInput();
  } else if (e.key === 'Backspace') {
    state.inputValue = state.inputValue.slice(0, -1);
    renderInput();
  } else if (e.key === 'Escape') {
    state.inputValue = '';
    renderInput();
  } else if (e.key === 'Enter') {
    submitAnswer();
  } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
    e.preventDefault();
    cycleTarget(-1);
  } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
    e.preventDefault();
    cycleTarget(1);
  } else if (e.key === 'Tab') {
    e.preventDefault();
    cycleTarget(e.shiftKey ? -1 : 1);
  }
});

// ═══════════════════════════════════════════════════════════
// §22  INIT
// ═══════════════════════════════════════════════════════════
function init() {
  setupCanvas();
  initState();
  initStars();
  renderUI();
  animFrame = requestAnimationFrame(gameLoop);
}

// Start when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
