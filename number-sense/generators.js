/* ── Number Sense Tug-of-War: Problem Generators ─────────────────
   Procedurally generates mental-math problems.
   NO cubes, powers, or roots.
   Each generator returns { display, answer, category, difficulty }
   ─────────────────────────────────────────────────────────────── */

// ── Utilities ───────────────────────────────────────────────────
function randInt(lo, hi) { return Math.floor(Math.random() * (hi - lo + 1)) + lo; }
function randPick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function gcd(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { [a, b] = [b, a % b]; } return a; }
function shuffle(arr) { for (let i = arr.length - 1; i > 0; i--) { const j = randInt(0, i); [arr[i], arr[j]] = [arr[j], arr[i]]; } return arr; }

// ── Addition / Subtraction ──────────────────────────────────────
const addSubGenerators = [
  // Difficulty 1: simple 2-digit
  () => {
    const a = randInt(10, 99), b = randInt(10, 99);
    return { display: `${a} + ${b}`, answer: a + b, category: 'Addition', difficulty: 1 };
  },
  () => {
    const a = randInt(20, 99), b = randInt(10, a);
    return { display: `${a} &minus; ${b}`, answer: a - b, category: 'Subtraction', difficulty: 1 };
  },
  // Difficulty 2: 3-digit + 2-digit
  () => {
    const a = randInt(100, 999), b = randInt(10, 99);
    const op = randPick(['+', '-']);
    if (op === '+') return { display: `${a} + ${b}`, answer: a + b, category: 'Addition', difficulty: 2 };
    return { display: `${a} &minus; ${b}`, answer: a - b, category: 'Subtraction', difficulty: 2 };
  },
  // Difficulty 3: 3-digit + 3-digit
  () => {
    const a = randInt(100, 999), b = randInt(100, 999);
    const op = randPick(['+', '-']);
    if (op === '+') return { display: `${a} + ${b}`, answer: a + b, category: 'Addition', difficulty: 3 };
    const [big, small] = a >= b ? [a, b] : [b, a];
    return { display: `${big} &minus; ${small}`, answer: big - small, category: 'Subtraction', difficulty: 3 };
  },
  // Difficulty 4: multi-operand chain
  () => {
    const a = randInt(100, 500), b = randInt(50, 300), c = randInt(10, 200);
    const ops = shuffle(['+', '-', '+']);
    let expr = `${a}`, val = a;
    [b, c].forEach((n, i) => {
      if (ops[i] === '+') { expr += ` + ${n}`; val += n; }
      else { expr += ` &minus; ${n}`; val -= n; }
    });
    return { display: expr, answer: val, category: 'Addition', difficulty: 4 };
  },
  // Difficulty 5: 4-digit chain
  () => {
    const a = randInt(1000, 5000), b = randInt(100, 999), c = randInt(100, 999);
    const ans = a + b - c;
    return { display: `${a} + ${b} &minus; ${c}`, answer: ans, category: 'Addition', difficulty: 5 };
  },
];

// ── Multiplication ──────────────────────────────────────────────
const multGenerators = [
  // Difficulty 1: single x single
  () => {
    const a = randInt(2, 9), b = randInt(2, 9);
    return { display: `${a} &times; ${b}`, answer: a * b, category: 'Multiplication', difficulty: 1 };
  },
  // Difficulty 1: multiply by 10/100
  () => {
    const a = randInt(2, 99), b = randPick([10, 100]);
    return { display: `${a} &times; ${b}`, answer: a * b, category: 'Multiplication', difficulty: 1 };
  },
  // Difficulty 2: single x double
  () => {
    const a = randInt(3, 9), b = randInt(11, 99);
    return { display: `${a} &times; ${b}`, answer: a * b, category: 'Multiplication', difficulty: 2 };
  },
  // Difficulty 2: multiply by 11
  () => {
    const a = randInt(11, 99);
    return { display: `${a} &times; 11`, answer: a * 11, category: 'Multiplication', difficulty: 2 };
  },
  // Difficulty 3: 2-digit x 2-digit
  () => {
    const a = randInt(11, 49), b = randInt(11, 49);
    return { display: `${a} &times; ${b}`, answer: a * b, category: 'Multiplication', difficulty: 3 };
  },
  // Difficulty 3: multiply by 25
  () => {
    const a = randInt(4, 99);
    return { display: `${a} &times; 25`, answer: a * 25, category: 'Multiplication', difficulty: 3 };
  },
  // Difficulty 4: 2-digit x 2-digit (larger)
  () => {
    const a = randInt(20, 99), b = randInt(20, 99);
    return { display: `${a} &times; ${b}`, answer: a * b, category: 'Multiplication', difficulty: 4 };
  },
  // Difficulty 5: 3-digit x single
  () => {
    const a = randInt(100, 999), b = randInt(3, 9);
    return { display: `${a} &times; ${b}`, answer: a * b, category: 'Multiplication', difficulty: 5 };
  },
];

// ── Division ────────────────────────────────────────────────────
const divGenerators = [
  // Difficulty 1: basic facts
  () => {
    const b = randInt(2, 9), a = b * randInt(2, 9);
    return { display: `${a} &divide; ${b}`, answer: a / b, category: 'Division', difficulty: 1 };
  },
  // Difficulty 2: larger dividend
  () => {
    const b = randInt(2, 9), q = randInt(10, 50), a = b * q;
    return { display: `${a} &divide; ${b}`, answer: q, category: 'Division', difficulty: 2 };
  },
  // Difficulty 3: with remainder (answer = quotient)
  () => {
    const b = randInt(3, 12), q = randInt(10, 99), r = randInt(1, b - 1), a = b * q + r;
    return { display: `${a} &divide; ${b} (remainder?)`, answer: r, category: 'Division', difficulty: 3 };
  },
  // Difficulty 4: 3-digit / 2-digit
  () => {
    const b = randInt(11, 25), q = randInt(10, 40), a = b * q;
    return { display: `${a} &divide; ${b}`, answer: q, category: 'Division', difficulty: 4 };
  },
  // Difficulty 5: 4-digit / 1-digit
  () => {
    const b = randInt(3, 9), q = randInt(100, 999), a = b * q;
    return { display: `${a} &divide; ${b}`, answer: q, category: 'Division', difficulty: 5 };
  },
];

// ── Fractions ───────────────────────────────────────────────────
function makeFrac(maxD) {
  const d = randInt(2, maxD);
  let n = randInt(1, d * 2);
  const g = gcd(n, d);
  return { n: n / g, d: d / g };
}

const fractionGenerators = [
  // Difficulty 2: add fractions same denom
  () => {
    const d = randInt(2, 10);
    const a = randInt(1, d - 1), b = randInt(1, d - 1);
    const num = a + b, g = gcd(num, d);
    const rn = num / g, rd = d / g;
    const disp = `<span class="frac-inline">${a}/${d}</span> + <span class="frac-inline">${b}/${d}</span>`;
    // answer as improper fraction numerator if denom is 1, else decimal
    if (rd === 1) return { display: disp, answer: rn, category: 'Fractions', difficulty: 2 };
    return { display: disp + ' = ?/?', answer: rn * 100 + rd, category: 'Fractions', difficulty: 2, fractionAnswer: { n: rn, d: rd } };
  },
  // Difficulty 3: add fractions diff denom
  () => {
    const d1 = randInt(2, 6), d2 = randInt(2, 6);
    const n1 = randInt(1, d1 - 1), n2 = randInt(1, d2 - 1);
    const cd = (d1 * d2) / gcd(d1, d2);
    const num = n1 * (cd / d1) + n2 * (cd / d2);
    const g = gcd(num, cd);
    const rn = num / g, rd = cd / g;
    const disp = `<span class="frac-inline">${n1}/${d1}</span> + <span class="frac-inline">${n2}/${d2}</span>`;
    if (rd === 1) return { display: disp, answer: rn, category: 'Fractions', difficulty: 3 };
    return { display: disp + ' = ?/?', answer: rn * 100 + rd, category: 'Fractions', difficulty: 3, fractionAnswer: { n: rn, d: rd } };
  },
  // Difficulty 3: multiply fractions
  () => {
    const f1 = makeFrac(6), f2 = makeFrac(6);
    const num = f1.n * f2.n, den = f1.d * f2.d, g = gcd(num, den);
    const rn = num / g, rd = den / g;
    const disp = `<span class="frac-inline">${f1.n}/${f1.d}</span> &times; <span class="frac-inline">${f2.n}/${f2.d}</span>`;
    if (rd === 1) return { display: disp, answer: rn, category: 'Fractions', difficulty: 3 };
    return { display: disp + ' = ?/?', answer: rn * 100 + rd, category: 'Fractions', difficulty: 3, fractionAnswer: { n: rn, d: rd } };
  },
  // Difficulty 4: divide fractions
  () => {
    const f1 = makeFrac(8), f2 = makeFrac(6);
    const num = f1.n * f2.d, den = f1.d * f2.n, g = gcd(num, den);
    const rn = num / g, rd = den / g;
    const disp = `<span class="frac-inline">${f1.n}/${f1.d}</span> &divide; <span class="frac-inline">${f2.n}/${f2.d}</span>`;
    if (rd === 1) return { display: disp, answer: rn, category: 'Fractions', difficulty: 4 };
    return { display: disp + ' = ?/?', answer: rn * 100 + rd, category: 'Fractions', difficulty: 4, fractionAnswer: { n: rn, d: rd } };
  },
];

// ── Percentages ─────────────────────────────────────────────────
const percentGenerators = [
  // Difficulty 1: 10% of round number
  () => {
    const n = randInt(1, 50) * 10;
    return { display: `10% of ${n}`, answer: n * 0.1, category: 'Percentages', difficulty: 1 };
  },
  // Difficulty 2: 25%/50% of number
  () => {
    const p = randPick([25, 50]), n = randInt(2, 40) * 4;
    return { display: `${p}% of ${n}`, answer: n * p / 100, category: 'Percentages', difficulty: 2 };
  },
  // Difficulty 3: arbitrary %
  () => {
    const p = randPick([5, 15, 20, 30, 40, 60, 75]), n = randInt(10, 200);
    const ans = Math.round(n * p / 100 * 100) / 100;
    return { display: `${p}% of ${n}`, answer: ans, category: 'Percentages', difficulty: 3 };
  },
  // Difficulty 4: what % is A of B?
  () => {
    const pct = randPick([10, 20, 25, 30, 40, 50, 60, 75, 80]);
    const b = randInt(10, 100);
    const a = b * pct / 100;
    return { display: `${a} is what % of ${b}?`, answer: pct, category: 'Percentages', difficulty: 4 };
  },
  // Difficulty 5: percent change
  () => {
    const orig = randInt(20, 200), change = randPick([10, 15, 20, 25, 30, 50]);
    const newVal = orig + Math.round(orig * change / 100);
    return { display: `${orig} &rarr; ${newVal}, % increase?`, answer: change, category: 'Percentages', difficulty: 5 };
  },
];

// ── Order of Operations ─────────────────────────────────────────
const oooGenerators = [
  // Difficulty 2: two operations
  () => {
    const a = randInt(2, 10), b = randInt(2, 10), c = randInt(1, 10);
    return { display: `${a} &times; ${b} + ${c}`, answer: a * b + c, category: 'Order of Ops', difficulty: 2 };
  },
  () => {
    const a = randInt(10, 50), b = randInt(2, 9), c = randInt(2, 9);
    return { display: `${a} + ${b} &times; ${c}`, answer: a + b * c, category: 'Order of Ops', difficulty: 2 };
  },
  // Difficulty 3: parentheses
  () => {
    const a = randInt(2, 20), b = randInt(2, 10), c = randInt(2, 9);
    return { display: `(${a} + ${b}) &times; ${c}`, answer: (a + b) * c, category: 'Order of Ops', difficulty: 3 };
  },
  () => {
    const a = randInt(2, 9), b = randInt(2, 9), c = randInt(1, 20);
    return { display: `${a} &times; (${b} + ${c})`, answer: a * (b + c), category: 'Order of Ops', difficulty: 3 };
  },
  // Difficulty 4: three operations
  () => {
    const a = randInt(2, 9), b = randInt(2, 9), c = randInt(2, 9), d = randInt(1, 10);
    return { display: `${a} &times; ${b} + ${c} &times; ${d}`, answer: a * b + c * d, category: 'Order of Ops', difficulty: 4 };
  },
  // Difficulty 5: nested
  () => {
    const a = randInt(2, 8), b = randInt(2, 8), c = randInt(2, 5), d = randInt(1, 10);
    return { display: `(${a} + ${b}) &times; (${c} + ${d})`, answer: (a + b) * (c + d), category: 'Order of Ops', difficulty: 5 };
  },
];

// ── Estimation / Rounding ───────────────────────────────────────
const estimationGenerators = [
  // Difficulty 1: round to nearest 10
  () => {
    const n = randInt(11, 99);
    const ans = Math.round(n / 10) * 10;
    return { display: `Round ${n} to the nearest 10`, answer: ans, category: 'Estimation', difficulty: 1 };
  },
  // Difficulty 2: round to nearest 100
  () => {
    const n = randInt(101, 999);
    const ans = Math.round(n / 100) * 100;
    return { display: `Round ${n} to the nearest 100`, answer: ans, category: 'Estimation', difficulty: 2 };
  },
  // Difficulty 3: estimate product
  () => {
    const a = randInt(18, 52), b = randInt(18, 52);
    const ra = Math.round(a / 10) * 10, rb = Math.round(b / 10) * 10;
    return { display: `Estimate: ${a} &times; ${b} (nearest 100)`, answer: ra * rb, category: 'Estimation', difficulty: 3 };
  },
];

// ── Mental Math Tricks ──────────────────────────────────────────
const trickGenerators = [
  // Difficulty 2: multiply by 5
  () => {
    const a = randInt(10, 199);
    return { display: `${a} &times; 5`, answer: a * 5, category: 'Tricks', difficulty: 2 };
  },
  // Difficulty 3: divisibility — is it divisible?
  () => {
    const div = randPick([3, 4, 6, 9]);
    const q = randInt(10, 99), n = q * div + randPick([0, 0, 0, randInt(1, div - 1)]);
    const ans = n % div === 0 ? 1 : 0;
    return { display: `Is ${n} divisible by ${div}? (1=yes, 0=no)`, answer: ans, category: 'Tricks', difficulty: 3 };
  },
  // Difficulty 2: doubling & halving
  () => {
    const a = randInt(10, 500);
    const op = randPick(['double', 'half']);
    if (op === 'double') return { display: `Double ${a}`, answer: a * 2, category: 'Tricks', difficulty: 2 };
    const even = a % 2 === 0 ? a : a + 1;
    return { display: `Half of ${even}`, answer: even / 2, category: 'Tricks', difficulty: 2 };
  },
  // Difficulty 3: complement to 100/1000
  () => {
    const n = randInt(1, 99);
    return { display: `${n} + ? = 100`, answer: 100 - n, category: 'Tricks', difficulty: 3 };
  },
  () => {
    const n = randInt(10, 999);
    return { display: `${n} + ? = 1000`, answer: 1000 - n, category: 'Tricks', difficulty: 4 };
  },
];

// ── Master list of all generators ───────────────────────────────
const ALL_GENERATORS = [
  ...addSubGenerators,
  ...multGenerators,
  ...divGenerators,
  // fractionGenerators removed — fraction questions disabled
  ...percentGenerators,
  ...oooGenerators,
  ...estimationGenerators,
  ...trickGenerators,
];
