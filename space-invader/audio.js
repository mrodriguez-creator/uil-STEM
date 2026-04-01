/* ── Space Invader: Audio Manager ─────────────────────────────
   Web Audio API synthesized sounds. No external files.
   Muted by default; toggle via HUD.
   ─────────────────────────────────────────────────────────── */

const AudioManager = (() => {
  let ctx = null;
  let muted = true;
  let initialized = false;

  function init() {
    if (initialized) return;
    try {
      ctx = new (window.AudioContext || window.webkitAudioContext)();
      initialized = true;
    } catch (e) { /* Web Audio not supported */ }
  }

  function isMuted() { return muted; }
  function toggleMute() {
    muted = !muted;
    if (!initialized && !muted) init();
    return muted;
  }

  function tone(freq, duration, type, vol, startTime) {
    if (muted || !ctx) return;
    const t = startTime || ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type || 'square';
    osc.frequency.setValueAtTime(freq, t);
    gain.gain.setValueAtTime(vol || 0.15, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + duration);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(t);
    osc.stop(t + duration);
  }

  function noise(duration, vol, startTime) {
    if (muted || !ctx) return;
    const t = startTime || ctx.currentTime;
    const bufferSize = ctx.sampleRate * duration;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
    const src = ctx.createBufferSource();
    src.buffer = buffer;
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(vol || 0.1, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + duration);
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(3000, t);
    filter.frequency.exponentialRampToValueAtTime(200, t + duration);
    src.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    src.start(t);
    src.stop(t + duration);
  }

  const sounds = {
    click() {
      tone(800, 0.04, 'square', 0.08);
    },
    shoot() {
      if (!ctx) return;
      const t = ctx.currentTime;
      tone(400, 0.1, 'sawtooth', 0.12, t);
      tone(800, 0.1, 'sawtooth', 0.08, t + 0.05);
      tone(1200, 0.15, 'sine', 0.06, t + 0.08);
    },
    explosion() {
      noise(0.3, 0.15);
      if (ctx) tone(80, 0.2, 'sine', 0.15);
    },
    wrong() {
      if (!ctx) return;
      const t = ctx.currentTime;
      tone(200, 0.15, 'square', 0.12, t);
      tone(150, 0.2, 'square', 0.12, t + 0.12);
    },
    hit() {
      if (!ctx) return;
      tone(100, 0.3, 'sine', 0.2);
      noise(0.15, 0.1);
    },
    powerup() {
      if (!ctx) return;
      const t = ctx.currentTime;
      tone(523, 0.1, 'sine', 0.12, t);
      tone(659, 0.1, 'sine', 0.12, t + 0.08);
      tone(784, 0.15, 'sine', 0.12, t + 0.16);
    },
    bossAppear() {
      if (!ctx) return;
      const t = ctx.currentTime;
      tone(80, 0.8, 'sawtooth', 0.1, t);
      tone(60, 1.0, 'sine', 0.08, t + 0.2);
    },
    bossHit() {
      noise(0.2, 0.12);
      tone(120, 0.15, 'square', 0.12);
    },
    bossDeath() {
      if (!ctx) return;
      const t = ctx.currentTime;
      for (let i = 0; i < 5; i++) {
        noise(0.2, 0.12, t + i * 0.12);
        tone(200 - i * 30, 0.2, 'sawtooth', 0.1, t + i * 0.12);
      }
    },
    levelUp() {
      if (!ctx) return;
      const t = ctx.currentTime;
      [523, 659, 784, 1047].forEach((f, i) => {
        tone(f, 0.2, 'sine', 0.1, t + i * 0.12);
      });
    },
    gameOver() {
      if (!ctx) return;
      const t = ctx.currentTime;
      [400, 350, 300, 200].forEach((f, i) => {
        tone(f, 0.3, 'square', 0.1, t + i * 0.2);
      });
    }
  };

  function play(name) {
    if (muted) return;
    if (!initialized) init();
    if (ctx && ctx.state === 'suspended') ctx.resume();
    if (sounds[name]) sounds[name]();
  }

  return { init, play, toggleMute, isMuted };
})();
