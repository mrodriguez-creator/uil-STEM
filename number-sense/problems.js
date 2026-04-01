/* ── Problem Loader ───────────────────────────────────────────────
   Wraps generators.js and exposes generateProblem(difficulty).
   Difficulty 1-5.  Picks a random matching generator each call.
   ─────────────────────────────────────────────────────────────── */

function generateProblem(difficulty) {
  // Allow +-1 from target difficulty so variety stays high
  const pool = ALL_GENERATORS.filter(g => {
    const p = g();
    // We can't peek without calling, so we just filter on call
    return true;
  });

  // Generate until we get one within difficulty range
  let attempts = 0;
  while (attempts < 60) {
    const gen = randPick(ALL_GENERATORS);
    const problem = gen();
    if (Math.abs(problem.difficulty - difficulty) <= 1) return problem;
    attempts++;
  }
  // Fallback: just return any problem
  return randPick(ALL_GENERATORS)();
}
