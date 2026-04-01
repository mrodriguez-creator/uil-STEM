/* ── Space Invader: Advanced UIL Number Sense Generators ──────
   Extends the base generators.js with competition-level tricks.
   Uses utilities from generators.js: randInt, randPick, gcd, shuffle
   Each generator returns { display, answer, category, difficulty }
   ─────────────────────────────────────────────────────────── */

// ── Squaring Tricks ────────────────────────────────────────
const squaringGens = [
  // Squaring numbers ending in 5
  () => {
    const tens = randInt(1, 9);
    const n = tens * 10 + 5;
    return { display: `${n}&sup2;`, answer: n * n, category: 'Squaring', difficulty: 2 };
  },
  // Squaring near 50
  () => {
    const d = randInt(-9, 9);
    const n = 50 + d;
    return { display: `${n}&sup2;`, answer: n * n, category: 'Squaring', difficulty: 3 };
  },
  // Squaring near 100
  () => {
    const d = randInt(-12, 12);
    const n = 100 + d;
    return { display: `${n}&sup2;`, answer: n * n, category: 'Squaring', difficulty: 4 };
  },
  // Squaring 2-digit numbers
  () => {
    const n = randInt(11, 30);
    return { display: `${n}&sup2;`, answer: n * n, category: 'Squaring', difficulty: 3 };
  },
  // Perfect squares recognition
  () => {
    const n = randInt(2, 25);
    return { display: `&radic;${n * n}`, answer: n, category: 'Squaring', difficulty: 2 };
  },
];

// ── Multiplication Shortcuts ───────────────────────────────
const multShortcutGens = [
  // Multiply by 11 (2-digit)
  () => {
    const n = randInt(12, 89);
    return { display: `${n} &times; 11`, answer: n * 11, category: 'Mult Tricks', difficulty: 2 };
  },
  // Multiply by 11 (3-digit)
  () => {
    const n = randInt(100, 300);
    return { display: `${n} &times; 11`, answer: n * 11, category: 'Mult Tricks', difficulty: 4 };
  },
  // Multiply by 25
  () => {
    const n = randInt(4, 80);
    return { display: `${n} &times; 25`, answer: n * 25, category: 'Mult Tricks', difficulty: 2 };
  },
  // Multiply by 99
  () => {
    const n = randInt(2, 50);
    return { display: `${n} &times; 99`, answer: n * 99, category: 'Mult Tricks', difficulty: 3 };
  },
  // Multiply by 101
  () => {
    const n = randInt(2, 50);
    return { display: `${n} &times; 101`, answer: n * 101, category: 'Mult Tricks', difficulty: 3 };
  },
  // Multiply by 125
  () => {
    const n = randInt(2, 40);
    return { display: `${n} &times; 125`, answer: n * 125, category: 'Mult Tricks', difficulty: 3 };
  },
  // Multiply by 5 (large)
  () => {
    const n = randInt(100, 999);
    return { display: `${n} &times; 5`, answer: n * 5, category: 'Mult Tricks', difficulty: 2 };
  },
  // Multiply by 50
  () => {
    const n = randInt(10, 200);
    return { display: `${n} &times; 50`, answer: n * 50, category: 'Mult Tricks', difficulty: 3 };
  },
  // Complement multiplication (numbers that sum to 100)
  () => {
    const a = randInt(20, 80);
    const b = 100 - a;
    return { display: `${a} &times; ${b}`, answer: a * b, category: 'Mult Tricks', difficulty: 4 };
  },
];

// ── Divisibility & Remainders ──────────────────────────────
const divisibilityGens = [
  // Is N divisible by D?
  () => {
    const d = randPick([3, 4, 6, 7, 8, 9, 11]);
    const q = randInt(10, 99);
    const extra = randPick([0, 0, 0, randInt(1, d - 1)]); // 75% chance divisible
    const n = q * d + extra;
    const ans = extra === 0 ? 1 : 0;
    return { display: `${n} divisible by ${d}? (1=yes, 0=no)`, answer: ans, category: 'Divisibility', difficulty: 2 };
  },
  // Remainder when dividing
  () => {
    const d = randPick([3, 4, 7, 8, 9, 11, 13]);
    const n = randInt(50, 999);
    return { display: `Remainder: ${n} &divide; ${d}`, answer: n % d, category: 'Remainders', difficulty: 3 };
  },
  // Remainder of large power
  () => {
    const base = randPick([2, 3, 5, 7]);
    const exp = randInt(3, 10);
    const mod = randPick([3, 4, 5, 7, 9, 10]);
    let result = 1;
    for (let i = 0; i < exp; i++) result = (result * base) % mod;
    return { display: `Remainder: ${base}^${exp} &divide; ${mod}`, answer: result, category: 'Remainders', difficulty: 4 };
  },
  // Sum of digits divisibility
  () => {
    const n = randInt(100, 9999);
    const digitSum = String(n).split('').reduce((s, c) => s + Number(c), 0);
    return { display: `Sum of digits of ${n}`, answer: digitSum, category: 'Divisibility', difficulty: 2 };
  },
];

// ── Roman Numerals ─────────────────────────────────────────
const romanGens = (() => {
  const romanMap = [
    [1000,'M'],[900,'CM'],[500,'D'],[400,'CD'],
    [100,'C'],[90,'XC'],[50,'L'],[40,'XL'],
    [10,'X'],[9,'IX'],[5,'V'],[4,'IV'],[1,'I']
  ];
  function toRoman(n) {
    let s = '';
    for (const [val, sym] of romanMap) {
      while (n >= val) { s += sym; n -= val; }
    }
    return s;
  }
  return [
    // Roman to decimal (easy)
    () => {
      const n = randInt(1, 50);
      return { display: `${toRoman(n)} = ?`, answer: n, category: 'Roman Numerals', difficulty: 2 };
    },
    // Roman to decimal (medium)
    () => {
      const n = randInt(50, 400);
      return { display: `${toRoman(n)} = ?`, answer: n, category: 'Roman Numerals', difficulty: 3 };
    },
    // Roman to decimal (hard)
    () => {
      const n = randInt(400, 2000);
      return { display: `${toRoman(n)} = ?`, answer: n, category: 'Roman Numerals', difficulty: 4 };
    },
    // Roman addition
    () => {
      const a = randInt(5, 50), b = randInt(5, 50);
      return { display: `${toRoman(a)} + ${toRoman(b)}`, answer: a + b, category: 'Roman Numerals', difficulty: 3 };
    },
    // Roman subtraction
    () => {
      const a = randInt(20, 100), b = randInt(1, a - 1);
      return { display: `${toRoman(a)} &minus; ${toRoman(b)}`, answer: a - b, category: 'Roman Numerals', difficulty: 3 };
    },
  ];
})();

// ── Base Conversions ───────────────────────────────────────
const baseConvGens = [
  // Binary to decimal
  () => {
    const n = randInt(1, 63);
    return { display: `${n.toString(2)}<sub>2</sub> = ?<sub>10</sub>`, answer: n, category: 'Base Conversion', difficulty: 3 };
  },
  // Binary to decimal (larger)
  () => {
    const n = randInt(64, 255);
    return { display: `${n.toString(2)}<sub>2</sub> = ?<sub>10</sub>`, answer: n, category: 'Base Conversion', difficulty: 4 };
  },
  // Octal to decimal
  () => {
    const n = randInt(8, 127);
    return { display: `${n.toString(8)}<sub>8</sub> = ?<sub>10</sub>`, answer: n, category: 'Base Conversion', difficulty: 3 };
  },
  // Hex to decimal
  () => {
    const n = randInt(16, 255);
    return { display: `${n.toString(16).toUpperCase()}<sub>16</sub> = ?<sub>10</sub>`, answer: n, category: 'Base Conversion', difficulty: 4 };
  },
  // Decimal to binary (give number of 1s)
  () => {
    const n = randInt(1, 127);
    const ones = n.toString(2).split('').filter(c => c === '1').length;
    return { display: `# of 1s in binary of ${n}`, answer: ones, category: 'Base Conversion', difficulty: 3 };
  },
  // Base 5 to decimal
  () => {
    const n = randInt(5, 60);
    return { display: `${n.toString(5)}<sub>5</sub> = ?<sub>10</sub>`, answer: n, category: 'Base Conversion', difficulty: 4 };
  },
];

// ── Sequences & Patterns ───────────────────────────────────
const sequenceGens = [
  // Arithmetic sequence next term
  () => {
    const a = randInt(1, 20);
    const d = randInt(2, 15);
    const terms = [a, a+d, a+2*d, a+3*d];
    return { display: `${terms.join(', ')}, ?`, answer: a + 4*d, category: 'Sequences', difficulty: 2 };
  },
  // Geometric sequence next term
  () => {
    const a = randInt(1, 5);
    const r = randPick([2, 3, -2]);
    const terms = [a, a*r, a*r*r, a*r*r*r];
    return { display: `${terms.join(', ')}, ?`, answer: a*r*r*r*r, category: 'Sequences', difficulty: 3 };
  },
  // Triangular numbers
  () => {
    const n = randInt(3, 12);
    const terms = [];
    for (let i = 1; i <= n - 1; i++) terms.push(i*(i+1)/2);
    const last3 = terms.slice(-3);
    return { display: `${last3.join(', ')}, ?`, answer: n*(n+1)/2, category: 'Sequences', difficulty: 3 };
  },
  // Fibonacci-like: next term
  () => {
    const a = randInt(1, 5), b = randInt(1, 5);
    const seq = [a, b, a+b, a+2*b, 2*a+3*b];
    return { display: `${seq.slice(0,4).join(', ')}, ?`, answer: seq[4], category: 'Sequences', difficulty: 3 };
  },
  // Square number sequence
  () => {
    const start = randInt(1, 6);
    const terms = [start*start, (start+1)*(start+1), (start+2)*(start+2), (start+3)*(start+3)];
    return { display: `${terms.join(', ')}, ?`, answer: (start+4)*(start+4), category: 'Sequences', difficulty: 3 };
  },
  // Arithmetic series sum
  () => {
    const n = randInt(5, 15);
    const a = randInt(1, 10);
    const d = randInt(1, 5);
    const sum = n * (2*a + (n-1)*d) / 2;
    return { display: `Sum: ${a} + ${a+d} + ... (${n} terms, d=${d})`, answer: sum, category: 'Sequences', difficulty: 4 };
  },
];

// ── GCD & LCM ──────────────────────────────────────────────
const gcdLcmGens = [
  // GCD easy
  () => {
    const g = randInt(2, 12);
    const a = g * randInt(2, 10), b = g * randInt(2, 10);
    const actual = gcd(a, b);
    return { display: `GCD(${a}, ${b})`, answer: actual, category: 'GCD/LCM', difficulty: 2 };
  },
  // GCD medium
  () => {
    const a = randInt(24, 200), b = randInt(24, 200);
    return { display: `GCD(${a}, ${b})`, answer: gcd(a, b), category: 'GCD/LCM', difficulty: 3 };
  },
  // LCM
  () => {
    const a = randInt(2, 20), b = randInt(2, 20);
    const lcm = (a * b) / gcd(a, b);
    return { display: `LCM(${a}, ${b})`, answer: lcm, category: 'GCD/LCM', difficulty: 3 };
  },
  // LCM of three small numbers
  () => {
    const nums = [randInt(2, 8), randInt(2, 8), randInt(2, 8)];
    const lcm2 = (a, b) => (a * b) / gcd(a, b);
    const ans = lcm2(lcm2(nums[0], nums[1]), nums[2]);
    return { display: `LCM(${nums.join(', ')})`, answer: ans, category: 'GCD/LCM', difficulty: 4 };
  },
];

// ── Percentage Calculations ────────────────────────────────
const percentGens = [
  // X% of Y
  () => {
    const pct = randPick([10, 15, 20, 25, 30, 40, 50, 75]);
    const n = randInt(2, 20) * 10;
    return { display: `${pct}% of ${n}`, answer: pct * n / 100, category: 'Percentages', difficulty: 2 };
  },
  // What percent is A of B?
  () => {
    const b = randPick([20, 25, 40, 50, 80, 100, 200]);
    const pct = randPick([10, 20, 25, 30, 40, 50, 75]);
    const a = b * pct / 100;
    return { display: `${a} is what % of ${b}?`, answer: pct, category: 'Percentages', difficulty: 3 };
  },
  // Percent increase
  () => {
    const orig = randPick([20, 25, 40, 50, 80, 100]);
    const pct = randPick([10, 20, 25, 50]);
    const ans = orig + orig * pct / 100;
    return { display: `${orig} + ${pct}% = ?`, answer: ans, category: 'Percentages', difficulty: 3 };
  },
  // Percent decrease
  () => {
    const orig = randPick([40, 50, 60, 80, 100, 200]);
    const pct = randPick([10, 20, 25, 50]);
    const ans = orig - orig * pct / 100;
    return { display: `${orig} &minus; ${pct}% = ?`, answer: ans, category: 'Percentages', difficulty: 3 };
  },
];

// ── Fraction / Decimal / Percent Conversion ────────────────
const conversionGens = [
  // Fraction to percent
  () => {
    const pairs = [[1,2,50],[1,4,25],[3,4,75],[1,5,20],[2,5,40],[3,5,60],[4,5,80],
                   [1,8,12.5],[3,8,37.5],[5,8,62.5],[7,8,87.5],[1,3,33],[2,3,67],
                   [1,6,17],[5,6,83],[1,10,10],[3,10,30],[7,10,70]];
    const [n, d, pct] = randPick(pairs);
    // Use rounded integer percents for easy input
    return { display: `${n}/${d} = ?%`, answer: Math.round(pct), category: 'Conversions', difficulty: 2 };
  },
  // Decimal to fraction (give numerator when denominator shown)
  () => {
    const pairs = [[0.25,1,4],[0.5,1,2],[0.75,3,4],[0.2,1,5],[0.4,2,5],
                   [0.6,3,5],[0.8,4,5],[0.125,1,8],[0.375,3,8]];
    const [dec, num, den] = randPick(pairs);
    return { display: `${dec} = ?/${den}`, answer: num, category: 'Conversions', difficulty: 2 };
  },
];

// ── Unit Digit Patterns ────────────────────────────────────
const unitDigitGens = [
  // Units digit of power
  () => {
    const base = randPick([2, 3, 4, 7, 8, 9]);
    const exp = randInt(5, 50);
    const cycles = { 2: [2,4,8,6], 3: [3,9,7,1], 4: [4,6], 7: [7,9,3,1], 8: [8,4,2,6], 9: [9,1] };
    const cycle = cycles[base];
    const ans = cycle[(exp - 1) % cycle.length];
    return { display: `Units digit of ${base}^${exp}`, answer: ans, category: 'Unit Digits', difficulty: 3 };
  },
  // Units digit of product
  () => {
    const a = randInt(10, 99), b = randInt(10, 99);
    const ans = (a * b) % 10;
    return { display: `Units digit of ${a} &times; ${b}`, answer: ans, category: 'Unit Digits', difficulty: 2 };
  },
  // Units digit of factorial
  () => {
    const n = randInt(5, 30); // factorial >= 5 always ends in 0
    return { display: `Units digit of ${n}!`, answer: 0, category: 'Unit Digits', difficulty: 2 };
  },
  // Units digit of sum
  () => {
    const a = randInt(100, 999), b = randInt(100, 999), c = randInt(100, 999);
    const ans = (a + b + c) % 10;
    return { display: `Units digit of ${a}+${b}+${c}`, answer: ans, category: 'Unit Digits', difficulty: 3 };
  },
];

// ── Powers & Roots ─────────────────────────────────────────
const powerRootGens = [
  // Cubes of small numbers
  () => {
    const n = randInt(2, 10);
    return { display: `${n}&sup3;`, answer: n * n * n, category: 'Powers', difficulty: 2 };
  },
  // Cube root
  () => {
    const n = randPick([2, 3, 4, 5, 6, 7, 8]);
    return { display: `Cube root of ${n*n*n}`, answer: n, category: 'Powers', difficulty: 3 };
  },
  // Powers of 2
  () => {
    const exp = randInt(2, 12);
    return { display: `2^${exp}`, answer: Math.pow(2, exp), category: 'Powers', difficulty: 2 };
  },
  // Powers of 3
  () => {
    const exp = randInt(2, 6);
    return { display: `3^${exp}`, answer: Math.pow(3, exp), category: 'Powers', difficulty: 3 };
  },
  // What power? (e.g., 2^? = 64)
  () => {
    const base = randPick([2, 3, 5]);
    const exp = randInt(2, base === 2 ? 10 : 5);
    const val = Math.pow(base, exp);
    return { display: `${base}^? = ${val}`, answer: exp, category: 'Powers', difficulty: 3 };
  },
];

// ── Counting / Combinatorics ───────────────────────────────
const countingGens = [
  // nCr simple
  () => {
    const n = randInt(4, 8), r = randInt(2, Math.min(3, n - 1));
    function comb(n, r) {
      if (r > n - r) r = n - r;
      let res = 1;
      for (let i = 0; i < r; i++) res = res * (n - i) / (i + 1);
      return Math.round(res);
    }
    return { display: `C(${n},${r})`, answer: comb(n, r), category: 'Counting', difficulty: 4 };
  },
  // nPr simple
  () => {
    const n = randInt(4, 7), r = randInt(2, 3);
    let ans = 1;
    for (let i = 0; i < r; i++) ans *= (n - i);
    return { display: `P(${n},${r})`, answer: ans, category: 'Counting', difficulty: 4 };
  },
  // Factorial
  () => {
    const n = randInt(3, 7);
    let ans = 1;
    for (let i = 2; i <= n; i++) ans *= i;
    return { display: `${n}!`, answer: ans, category: 'Counting', difficulty: 3 };
  },
  // How many ways to arrange
  () => {
    const n = randInt(3, 5);
    let ans = 1;
    for (let i = 2; i <= n; i++) ans *= i;
    return { display: `Ways to arrange ${n} items`, answer: ans, category: 'Counting', difficulty: 3 };
  },
];

// ── Estimation ─────────────────────────────────────────────
const estimationGens = [
  // Round to nearest 10
  () => {
    const n = randInt(11, 999);
    return { display: `Round ${n} to nearest 10`, answer: Math.round(n / 10) * 10, category: 'Estimation', difficulty: 1 };
  },
  // Round to nearest 100
  () => {
    const n = randInt(50, 9999);
    return { display: `Round ${n} to nearest 100`, answer: Math.round(n / 100) * 100, category: 'Estimation', difficulty: 2 };
  },
  // Closest perfect square
  () => {
    const target = randInt(10, 150);
    let best = 1;
    for (let i = 1; i * i <= target + 20; i++) {
      if (Math.abs(i*i - target) < Math.abs(best*best - target)) best = i;
    }
    return { display: `Closest perfect square to ${target}`, answer: best * best, category: 'Estimation', difficulty: 3 };
  },
];

// ── Algebra Basics ─────────────────────────────────────────
const algebraGens = [
  // Solve for x: ax + b = c
  () => {
    const x = randInt(-10, 10);
    const a = randInt(2, 9);
    const b = randInt(-20, 20);
    const c = a * x + b;
    return { display: `${a}x + ${b < 0 ? `(${b})` : b} = ${c}, x=?`, answer: x, category: 'Algebra', difficulty: 3 };
  },
  // Solve for x: x/a = b
  () => {
    const a = randInt(2, 12);
    const b = randInt(1, 15);
    return { display: `x/${a} = ${b}, x=?`, answer: a * b, category: 'Algebra', difficulty: 2 };
  },
  // Evaluate expression
  () => {
    const x = randInt(1, 10);
    const a = randInt(1, 5), b = randInt(-10, 10);
    const ans = a * x * x + b;
    return { display: `${a}x&sup2; + ${b < 0 ? `(${b})` : b} when x=${x}`, answer: ans, category: 'Algebra', difficulty: 4 };
  },
  // Sum of two consecutive numbers
  () => {
    const n = randInt(10, 99);
    const sum = n + n + 1;
    return { display: `Two consecutive integers sum to ${sum}. Smaller = ?`, answer: n, category: 'Algebra', difficulty: 2 };
  },
];

// ── Geometry Basics ────────────────────────────────────────
const geometryGens = [
  // Triangle angle sum
  () => {
    const a = randInt(20, 80), b = randInt(20, 80);
    const c = 180 - a - b;
    if (c <= 0) return { display: `Angles: 60&deg; + 70&deg; + ?&deg; = 180`, answer: 50, category: 'Geometry', difficulty: 2 };
    return { display: `Triangle angles: ${a}&deg;, ${b}&deg;, ?&deg;`, answer: c, category: 'Geometry', difficulty: 2 };
  },
  // Rectangle perimeter
  () => {
    const l = randInt(3, 20), w = randInt(3, 20);
    return { display: `Perimeter: rect ${l}&times;${w}`, answer: 2*(l+w), category: 'Geometry', difficulty: 2 };
  },
  // Rectangle area
  () => {
    const l = randInt(3, 25), w = randInt(3, 25);
    return { display: `Area: rect ${l}&times;${w}`, answer: l*w, category: 'Geometry', difficulty: 2 };
  },
  // Circle area (integer result)
  () => {
    const r = randInt(1, 10);
    return { display: `Area of circle r=${r} (coeff of &pi;)`, answer: r*r, category: 'Geometry', difficulty: 3 };
  },
  // Pythagorean triples
  () => {
    const triples = [[3,4,5],[5,12,13],[8,15,17],[7,24,25],[6,8,10],[9,12,15]];
    const [a,b,c] = randPick(triples);
    const which = randPick(['a','b','c']);
    if (which === 'c') return { display: `Right triangle: ${a}, ${b}, ?`, answer: c, category: 'Geometry', difficulty: 3 };
    if (which === 'a') return { display: `Right triangle: ?, ${b}, ${c}`, answer: a, category: 'Geometry', difficulty: 3 };
    return { display: `Right triangle: ${a}, ?, ${c}`, answer: b, category: 'Geometry', difficulty: 3 };
  },
  // Interior angle of regular polygon
  () => {
    const n = randPick([3, 4, 5, 6, 8, 10, 12]);
    const ans = (n - 2) * 180 / n;
    if (!Number.isInteger(ans)) return { display: `Interior angle of regular hexagon`, answer: 120, category: 'Geometry', difficulty: 3 };
    return { display: `Interior angle of regular ${n}-gon`, answer: ans, category: 'Geometry', difficulty: 4 };
  },
];

// ── Combine all advanced generators ────────────────────────
const ADVANCED_GENERATORS = [
  ...squaringGens,
  ...multShortcutGens,
  ...divisibilityGens,
  ...romanGens,
  ...baseConvGens,
  ...sequenceGens,
  ...gcdLcmGens,
  ...percentGens,
  ...conversionGens,
  ...unitDigitGens,
  ...powerRootGens,
  ...countingGens,
  ...estimationGens,
  ...algebraGens,
  ...geometryGens,
];
