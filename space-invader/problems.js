/* ── Space Invader: Problem Provider ──────────────────────────
   Merges base generators (from number-sense/generators.js) with
   advanced generators and converts HTML entities to Unicode for
   canvas rendering.
   ─────────────────────────────────────────────────────────── */

const COMBINED_GENERATORS = [
  ...(typeof ALL_GENERATORS !== 'undefined' ? ALL_GENERATORS : []),
  ...(typeof ADVANCED_GENERATORS !== 'undefined' ? ADVANCED_GENERATORS : [])
];

/* Convert HTML entities to Unicode for canvas fillText */
function htmlToPlain(str) {
  return str
    .replace(/&times;/g, '\u00D7')
    .replace(/&minus;/g, '\u2212')
    .replace(/&divide;/g, '\u00F7')
    .replace(/&rarr;/g, '\u2192')
    .replace(/&le;/g, '\u2264')
    .replace(/&ge;/g, '\u2265')
    .replace(/&ne;/g, '\u2260')
    .replace(/&pi;/g, '\u03C0')
    .replace(/&radic;/g, '\u221A')
    .replace(/&sup2;/g, '\u00B2')
    .replace(/&sup3;/g, '\u00B3')
    .replace(/&frac12;/g, '\u00BD')
    .replace(/&frac14;/g, '\u00BC')
    .replace(/&frac34;/g, '\u00BE')
    .replace(/&amp;/g, '&')
    .replace(/<sup>/g, '^').replace(/<\/sup>/g, '')
    .replace(/<sub>/g, '_').replace(/<\/sub>/g, '')
    .replace(/<[^>]+>/g, '');
}

/* Generate a problem at the specified difficulty (1-5) */
function generateSpaceProblem(difficulty, options) {
  options = options || {};
  const gens = COMBINED_GENERATORS;
  if (gens.length === 0) {
    return { display: '1 + 1', answer: 2, category: 'Fallback', difficulty: 1 };
  }

  let attempts = 0;
  while (attempts < 80) {
    const gen = randPick(gens);
    const p = gen();
    if (Math.abs(p.difficulty - difficulty) > 1) { attempts++; continue; }
    if (options.category && p.category !== options.category) { attempts++; continue; }
    // Skip fraction-encoded answers unless decimals are ok
    if (options.integerOnly !== false && typeof p.answer === 'number' && !Number.isInteger(p.answer)) {
      // Allow decimals that are clean (1 decimal place)
      const rounded = Math.round(p.answer * 100) / 100;
      if (rounded !== p.answer) { attempts++; continue; }
    }
    return {
      display: htmlToPlain(String(p.display)),
      answer: p.answer,
      category: p.category || 'General',
      difficulty: p.difficulty || difficulty
    };
  }
  // Fallback
  const p = randPick(gens)();
  return {
    display: htmlToPlain(String(p.display)),
    answer: p.answer,
    category: p.category || 'General',
    difficulty: p.difficulty || 1
  };
}
