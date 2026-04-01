/* ── Space Invader: Leaderboard ───────────────────────────────
   Local: localStorage, top 20.
   Remote: placeholder for future jsonbin.io integration.
   ─────────────────────────────────────────────────────────── */

const Leaderboard = (() => {
  const STORAGE_KEY = 'space-invader-leaderboard';
  const MAX_ENTRIES = 20;

  function getLocal() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch { return []; }
  }

  function saveLocal(scores) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(scores));
    } catch { /* storage full or unavailable */ }
  }

  function getScores() {
    return getLocal();
  }

  function addScore(name, score, level, aliensDefeated, maxCombo) {
    const scores = getLocal();
    scores.push({
      name: (name || 'Anonymous').slice(0, 16),
      score,
      level,
      aliens: aliensDefeated || 0,
      combo: maxCombo || 0,
      date: new Date().toISOString()
    });
    scores.sort((a, b) => b.score - a.score);
    if (scores.length > MAX_ENTRIES) scores.length = MAX_ENTRIES;
    saveLocal(scores);
    return scores;
  }

  function isHighScore(score) {
    const scores = getLocal();
    if (scores.length < MAX_ENTRIES) return true;
    return score > scores[scores.length - 1].score;
  }

  function getHighScore() {
    const scores = getLocal();
    return scores.length > 0 ? scores[0].score : 0;
  }

  function clearScores() {
    localStorage.removeItem(STORAGE_KEY);
  }

  return { getScores, addScore, isHighScore, getHighScore, clearScores };
})();
