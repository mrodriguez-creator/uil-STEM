/* ── Space Invader: Problem Provider ──────────────────────────
   Merges base generators (from number-sense/generators.js) with
   advanced generators. Provides level-based category progression
   so players start with easy core skills and unlock harder
   categories as they advance.
   ─────────────────────────────────────────────────────────── */

const COMBINED_GENERATORS = [
  ...(typeof ALL_GENERATORS !== 'undefined' ? ALL_GENERATORS : []),
  ...(typeof ADVANCED_GENERATORS !== 'undefined' ? ADVANCED_GENERATORS : [])
];

/* ── Category Tier System ────────────────────────────────────
   Categories unlock progressively by level. Each tier adds new
   categories while keeping all previous ones available.
   ──────────────────────────────────────────────────────────── */
const CATEGORY_TIERS = [
  // Tier 1 (Levels 1-2): Core arithmetic
  {
    maxLevel: 2,
    categories: ['Addition', 'Subtraction'],
    maxDifficulty: 1,
  },
  // Tier 2 (Levels 3-4): Multiplication & division basics
  {
    maxLevel: 4,
    categories: ['Addition', 'Subtraction', 'Multiplication', 'Division', 'Estimation'],
    maxDifficulty: 2,
  },
  // Tier 3 (Levels 5-6): Tricks, order of ops, percentages intro
  {
    maxLevel: 6,
    categories: ['Addition', 'Subtraction', 'Multiplication', 'Division',
                 'Estimation', 'Tricks', 'Order of Ops', 'Percentages',
                 'Mult Tricks', 'Divisibility'],
    maxDifficulty: 3,
  },
  // Tier 4 (Levels 7-8): Squaring, sequences, GCD/LCM, conversions
  {
    maxLevel: 8,
    categories: ['Addition', 'Subtraction', 'Multiplication', 'Division',
                 'Estimation', 'Tricks', 'Order of Ops', 'Percentages',
                 'Mult Tricks', 'Divisibility', 'Squaring', 'Sequences',
                 'GCD/LCM', 'Conversions', 'Unit Digits', 'Powers',
                 'Fractions'],
    maxDifficulty: 3,
  },
  // Tier 5 (Levels 9-10): Roman numerals, remainders, algebra
  {
    maxLevel: 10,
    categories: ['Addition', 'Subtraction', 'Multiplication', 'Division',
                 'Estimation', 'Tricks', 'Order of Ops', 'Percentages',
                 'Mult Tricks', 'Divisibility', 'Squaring', 'Sequences',
                 'GCD/LCM', 'Conversions', 'Unit Digits', 'Powers',
                 'Fractions', 'Roman Numerals', 'Remainders', 'Algebra',
                 'Geometry'],
    maxDifficulty: 4,
  },
  // Tier 6 (Levels 11+): Everything unlocked
  {
    maxLevel: Infinity,
    categories: null, // null = all categories allowed
    maxDifficulty: 5,
  },
];

function getTierForLevel(level) {
  for (const tier of CATEGORY_TIERS) {
    if (level <= tier.maxLevel) return tier;
  }
  return CATEGORY_TIERS[CATEGORY_TIERS.length - 1];
}

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
    .replace(/&deg;/g, '\u00B0')
    .replace(/&amp;/g, '&')
    .replace(/<sup>/g, '^').replace(/<\/sup>/g, '')
    .replace(/<sub>/g, '_').replace(/<\/sub>/g, '')
    .replace(/<[^>]+>/g, '');
}

/* Generate a problem appropriate for the given level */
function generateSpaceProblem(difficulty, options) {
  options = options || {};
  const gens = COMBINED_GENERATORS;
  if (gens.length === 0) {
    return { display: '1 + 1', answer: 2, category: 'Fallback', difficulty: 1 };
  }

  const level = options.level || 1;
  const tier = getTierForLevel(level);
  const allowedCategories = options.category
    ? [options.category]
    : tier.categories; // null means all
  const maxDiff = tier.maxDifficulty;

  let attempts = 0;
  while (attempts < 100) {
    const gen = randPick(gens);
    const p = gen();

    // Check difficulty: must be within range for this tier
    if (p.difficulty > maxDiff) { attempts++; continue; }
    // Allow +-1 from target difficulty
    if (Math.abs(p.difficulty - difficulty) > 1) { attempts++; continue; }

    // Check category is unlocked
    if (allowedCategories && !allowedCategories.includes(p.category)) {
      attempts++; continue;
    }

    // Skip fraction-encoded answers
    if (options.integerOnly !== false && typeof p.answer === 'number' && !Number.isInteger(p.answer)) {
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

  // Fallback: pick any generator in allowed categories
  for (let i = 0; i < 20; i++) {
    const p = randPick(gens)();
    if (allowedCategories && !allowedCategories.includes(p.category)) continue;
    if (p.difficulty > maxDiff) continue;
    return {
      display: htmlToPlain(String(p.display)),
      answer: p.answer,
      category: p.category || 'General',
      difficulty: p.difficulty || 1
    };
  }

  // Ultimate fallback
  const p = randPick(gens)();
  return {
    display: htmlToPlain(String(p.display)),
    answer: p.answer,
    category: p.category || 'General',
    difficulty: p.difficulty || 1
  };
}
