// UIL Calculator Applications – Dynamic Geometry Problem Generators
// Each generator produces a fresh problem object with random values each call.
// The SVGs use the same color convention:
//   Blue (#667eea)  – shapes/outlines
//   Orange (#ed8936) – given values
//   Green (#48bb78)  – unknowns / answers
//   Gray (#8899aa)   – labels

// ── UTILITY: random number in range, rounded to dp decimal places ──
function randBetween(lo, hi, dp) {
  if (dp === undefined) dp = 2;
  const raw = lo + Math.random() * (hi - lo);
  const factor = Math.pow(10, dp);
  return Math.round(raw * factor) / factor;
}
function randInt(lo, hi) {
  return Math.floor(Math.random() * (hi - lo + 1)) + lo;
}
// Pick one item at random
function randPick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
// Round to n significant figures
function sigFig(x, n) {
  if (x === 0) return 0;
  const d = Math.ceil(Math.log10(Math.abs(x)));
  const pw = Math.pow(10, n - d);
  return Math.round(x * pw) / pw;
}

// ═══════════════════════════════════════════════════
//  BASIC 2D GEOMETRY GENERATORS
// ═══════════════════════════════════════════════════

const GEO_GENERATORS_BASIC = [

  // ── CIRCLE ──
  // Given R, find D
  function genCircle_R_to_D() {
    const R = randBetween(1.5, 9000, randPick([0,1,2,3]));
    const D = 2 * R;
    return {
      id: "gx", category: "geometry", topic: "Circle",
      display: `<b>CIRCLE</b> with Radius = ${R}. Find the Diameter.`,
      plain: `Circle: R=${R}, find D`,
      answerType: "standard", answer: sigFig(D, 3), tolerance: sigFig(D, 3) * 0.005 || 0.001, units: "",
      explanation: `D = 2R = 2(${R}) = ${sigFig(D, 4)}.`,
      svg: `<svg viewBox="0 0 220 180" class="geo-svg">
      <circle cx="110" cy="90" r="65" fill="none" stroke="#667eea" stroke-width="2"/>
      <line x1="110" y1="90" x2="175" y2="90" stroke="#ed8936" stroke-width="1.5" stroke-dasharray="5,4"/>
      <text x="135" y="83" fill="#ed8936" font-size="11">R = ${R}</text>
      <text x="75" y="170" fill="#48bb78" font-size="11" font-style="italic">D = ?</text>
    </svg>`
    };
  },

  // Given D, find Area
  function genCircle_D_to_A() {
    const D = randBetween(2, 800, randPick([0,1,2]));
    const R = D / 2;
    const A = Math.PI * R * R;
    return {
      id: "gx", category: "geometry", topic: "Circle",
      display: `<b>CIRCLE</b> with Diameter = ${D}. Find the Area.`,
      plain: `Circle: D=${D}, find Area`,
      answerType: "standard", answer: sigFig(A, 3), tolerance: Math.max(sigFig(A, 3) * 0.005, 0.001), units: "",
      explanation: `R = ${D}/2 = ${R}. A = πR² = π(${R})² = ${sigFig(A, 4)}.`,
      svg: `<svg viewBox="0 0 220 180" class="geo-svg">
      <circle cx="110" cy="90" r="65" fill="none" stroke="#667eea" stroke-width="2"/>
      <line x1="45" y1="90" x2="175" y2="90" stroke="#ed8936" stroke-width="1.5"/>
      <text x="95" y="83" fill="#ed8936" font-size="11">D = ${D}</text>
      <text x="75" y="170" fill="#48bb78" font-size="11" font-style="italic">Area = ?</text>
    </svg>`
    };
  },

  // Given A, find D
  function genCircle_A_to_D() {
    const A = randBetween(5, 5000, randPick([0,1,2]));
    const R = Math.sqrt(A / Math.PI);
    const D = 2 * R;
    return {
      id: "gx", category: "geometry", topic: "Circle",
      display: `<b>CIRCLE</b> with Area = ${A}. Find the Diameter.`,
      plain: `Circle: A=${A}, find D`,
      answerType: "standard", answer: sigFig(D, 3), tolerance: Math.max(sigFig(D, 3) * 0.005, 0.001), units: "",
      explanation: `A = πR². R² = ${A}/π = ${sigFig(A/Math.PI, 4)}. R = ${sigFig(R, 4)}. D = 2R = ${sigFig(D, 4)}.`,
      svg: `<svg viewBox="0 0 220 180" class="geo-svg">
      <circle cx="110" cy="90" r="65" fill="none" stroke="#667eea" stroke-width="2"/>
      <text x="85" y="95" fill="#ed8936" font-size="11">Area = ${A}</text>
      <line x1="45" y1="90" x2="175" y2="90" stroke="#48bb78" stroke-width="1.5" stroke-dasharray="5,4"/>
      <text x="90" y="80" fill="#48bb78" font-size="11" font-style="italic">D = ?</text>
    </svg>`
    };
  },

  // Given C (circumference), find R
  function genCircle_C_to_R() {
    const C = randBetween(5, 8000, randPick([0,1,2]));
    const R = C / (2 * Math.PI);
    return {
      id: "gx", category: "geometry", topic: "Circle",
      display: `<b>CIRCLE</b> with Circumference = ${C}. Find the Radius.`,
      plain: `Circle: C=${C}, find R`,
      answerType: "standard", answer: sigFig(R, 3), tolerance: Math.max(sigFig(R, 3) * 0.005, 0.001), units: "",
      explanation: `C = 2πR. R = C/(2π) = ${C}/${sigFig(2*Math.PI, 5)} = ${sigFig(R, 4)}.`,
      svg: `<svg viewBox="0 0 220 180" class="geo-svg">
      <circle cx="110" cy="90" r="65" fill="none" stroke="#667eea" stroke-width="2"/>
      <text x="55" y="30" fill="#ed8936" font-size="10">C = ${C}</text>
      <line x1="110" y1="90" x2="175" y2="90" stroke="#48bb78" stroke-width="1.5" stroke-dasharray="5,4"/>
      <text x="130" y="83" fill="#48bb78" font-size="11" font-style="italic">R = ?</text>
    </svg>`
    };
  },

  // Given C (circumference), find Area
  function genCircle_C_to_A() {
    const C = randBetween(10, 2000, randPick([0,1]));
    const R = C / (2 * Math.PI);
    const A = Math.PI * R * R;
    return {
      id: "gx", category: "geometry", topic: "Circle",
      display: `<b>CIRCLE</b> with Circumference = ${C}. Find the Area.`,
      plain: `Circle: C=${C}, find Area`,
      answerType: "standard", answer: sigFig(A, 3), tolerance: Math.max(sigFig(A, 3) * 0.005, 0.001), units: "",
      explanation: `R = C/(2π) = ${C}/${sigFig(2*Math.PI,5)} = ${sigFig(R,4)}. A = πR² = ${sigFig(A,4)}.`,
      svg: `<svg viewBox="0 0 220 180" class="geo-svg">
      <circle cx="110" cy="90" r="65" fill="none" stroke="#667eea" stroke-width="2"/>
      <text x="55" y="30" fill="#ed8936" font-size="10">C = ${C}</text>
      <text x="75" y="170" fill="#48bb78" font-size="11" font-style="italic">Area = ?</text>
    </svg>`
    };
  },

  // Given A, find R
  function genCircle_A_to_R() {
    const A = randBetween(3, 3000, randPick([0,1,2]));
    const R = Math.sqrt(A / Math.PI);
    return {
      id: "gx", category: "geometry", topic: "Circle",
      display: `<b>CIRCLE</b> with Area = ${A}. Find the Radius.`,
      plain: `Circle: A=${A}, find R`,
      answerType: "standard", answer: sigFig(R, 3), tolerance: Math.max(sigFig(R, 3) * 0.005, 0.001), units: "",
      explanation: `A = πR². R² = ${A}/π = ${sigFig(A/Math.PI,4)}. R = ${sigFig(R,4)}.`,
      svg: `<svg viewBox="0 0 220 180" class="geo-svg">
      <circle cx="110" cy="90" r="65" fill="none" stroke="#667eea" stroke-width="2"/>
      <text x="75" y="95" fill="#ed8936" font-size="11">Area = ${A}</text>
      <line x1="110" y1="90" x2="175" y2="90" stroke="#48bb78" stroke-width="1.5" stroke-dasharray="5,4"/>
      <text x="130" y="83" fill="#48bb78" font-size="11" font-style="italic">R = ?</text>
    </svg>`
    };
  },

  // ── SEMICIRCLE ──
  // Given R, find Area
  function genSemicircle_R_to_A() {
    const R = randBetween(1, 900, randPick([0,1,2,3]));
    const A = Math.PI * R * R / 2;
    return {
      id: "gx", category: "geometry", topic: "Semicircle",
      display: `<b>SEMICIRCLE</b> with R = ${R}. Find the Area.`,
      plain: `Semicircle: R=${R}, find area`,
      answerType: "standard", answer: sigFig(A, 3), tolerance: Math.max(sigFig(A, 3) * 0.005, 0.001), units: "",
      explanation: `A = πR²/2 = π(${R})²/2 = ${sigFig(A, 4)}.`,
      svg: `<svg viewBox="0 0 260 160" class="geo-svg">
      <path d="M 30 130 A 100 100 0 0 1 230 130" fill="none" stroke="#667eea" stroke-width="2"/>
      <line x1="30" y1="130" x2="230" y2="130" stroke="#667eea" stroke-width="2"/>
      <line x1="130" y1="130" x2="130" y2="30" stroke="#ed8936" stroke-width="1.5" stroke-dasharray="5,4"/>
      <circle cx="130" cy="130" r="3" fill="#ed8936"/>
      <text x="135" y="85" fill="#ed8936" font-size="13" font-style="italic">R = ${R}</text>
      <text x="112" y="155" fill="#48bb78" font-size="11" font-style="italic">Area = ?</text>
    </svg>`
    };
  },

  // Given R, find Perimeter
  function genSemicircle_R_to_P() {
    const R = randBetween(2, 900, randPick([0,1,2]));
    const P = R * (Math.PI + 2);
    return {
      id: "gx", category: "geometry", topic: "Semicircle",
      display: `<b>SEMICIRCLE</b> with Radius = ${R}. Find the Perimeter.`,
      plain: `Semicircle: R=${R}, find perimeter`,
      answerType: "standard", answer: sigFig(P, 3), tolerance: Math.max(sigFig(P, 3) * 0.005, 0.001), units: "",
      explanation: `P = R(π+2) = ${R}(${sigFig(Math.PI+2, 5)}) = ${sigFig(P, 4)}.`,
      svg: `<svg viewBox="0 0 220 150" class="geo-svg">
      <path d="M 30,110 A 80,80 0 0,1 190,110" fill="none" stroke="#667eea" stroke-width="2"/>
      <line x1="30" y1="110" x2="190" y2="110" stroke="#667eea" stroke-width="2"/>
      <line x1="110" y1="110" x2="190" y2="110" stroke="#ed8936" stroke-width="1" stroke-dasharray="4,3"/>
      <text x="140" y="130" fill="#ed8936" font-size="11">R = ${R}</text>
      <text x="55" y="60" fill="#48bb78" font-size="11" font-style="italic">Perimeter = ?</text>
    </svg>`
    };
  },

  // Given A, find R
  function genSemicircle_A_to_R() {
    const A = randBetween(0.1, 5000, randPick([1,2,3]));
    const R = Math.sqrt(2 * A / Math.PI);
    return {
      id: "gx", category: "geometry", topic: "Semicircle",
      display: `<b>SEMICIRCLE</b> with Area = ${A}. Find the Radius.`,
      plain: `Semicircle: A=${A}, find R`,
      answerType: "standard", answer: sigFig(R, 3), tolerance: Math.max(sigFig(R, 3) * 0.005, 0.001), units: "",
      explanation: `A = πR²/2. R² = 2A/π = ${sigFig(2*A/Math.PI, 4)}. R = ${sigFig(R, 4)}.`,
      svg: `<svg viewBox="0 0 220 150" class="geo-svg">
      <path d="M 30,110 A 80,80 0 0,1 190,110" fill="none" stroke="#667eea" stroke-width="2"/>
      <line x1="30" y1="110" x2="190" y2="110" stroke="#667eea" stroke-width="2"/>
      <text x="80" y="80" fill="#ed8936" font-size="11">A = ${A}</text>
      <line x1="110" y1="110" x2="175" y2="110" stroke="#48bb78" stroke-width="1" stroke-dasharray="4,3"/>
      <text x="130" y="130" fill="#48bb78" font-size="11" font-style="italic">R = ?</text>
    </svg>`
    };
  },

  // ── QUARTER CIRCLE ──
  function genQuarterCircle_R_to_P() {
    const R = randBetween(2, 500, randPick([0,1,2]));
    const P = Math.PI * R / 2 + 2 * R;
    return {
      id: "gx", category: "geometry", topic: "Quarter Circle",
      display: `<b>QUARTER CIRCLE</b> with Radius = ${R}. Find the Perimeter.`,
      plain: `Quarter circle: R=${R}, find perimeter`,
      answerType: "standard", answer: sigFig(P, 3), tolerance: Math.max(sigFig(P, 3) * 0.005, 0.001), units: "",
      explanation: `P = πR/2 + 2R = ${sigFig(Math.PI*R/2, 4)} + ${sigFig(2*R, 4)} = ${sigFig(P, 4)}.`,
      svg: `<svg viewBox="0 0 200 180" class="geo-svg">
      <path d="M 30,30 L 30,150 A 120,120 0 0,0 150,30 Z" fill="none" stroke="#667eea" stroke-width="2"/>
      <rect x="30" y="142" width="8" height="8" fill="none" stroke="#8899aa" stroke-width="1"/>
      <text x="12" y="95" fill="#ed8936" font-size="11">${R}</text>
      <text x="70" y="170" fill="#48bb78" font-size="11" font-style="italic">Perimeter = ?</text>
    </svg>`
    };
  },

  function genQuarterCircle_A_to_R() {
    const A = randBetween(10, 5000, randPick([0,1]));
    const R = Math.sqrt(4 * A / Math.PI);
    return {
      id: "gx", category: "geometry", topic: "Quarter Circle",
      display: `<b>QUARTER CIRCLE</b> with Area = ${A}. Find the Radius.`,
      plain: `Quarter circle: A=${A}, find R`,
      answerType: "standard", answer: sigFig(R, 3), tolerance: Math.max(sigFig(R, 3) * 0.005, 0.001), units: "",
      explanation: `A = πR²/4. R² = 4A/π = ${sigFig(4*A/Math.PI, 4)}. R = ${sigFig(R, 4)}.`,
      svg: `<svg viewBox="0 0 200 180" class="geo-svg">
      <path d="M 30,30 L 30,150 A 120,120 0 0,0 150,30 Z" fill="none" stroke="#667eea" stroke-width="2"/>
      <rect x="30" y="142" width="8" height="8" fill="none" stroke="#8899aa" stroke-width="1"/>
      <text x="55" y="100" fill="#ed8936" font-size="11">A = ${A}</text>
      <text x="55" y="25" fill="#48bb78" font-size="11" font-style="italic">R = ?</text>
    </svg>`
    };
  },

  // ── SQUARE ──
  function genSquare_s_to_A() {
    const s = randBetween(0.1, 800, randPick([0,1,2,3]));
    const A = s * s;
    return {
      id: "gx", category: "geometry", topic: "Square",
      display: `<b>SQUARE</b> with side = ${s}. Find the Area.`,
      plain: `Square: s=${s}, find area`,
      answerType: "standard", answer: sigFig(A, 3), tolerance: Math.max(sigFig(A, 3) * 0.005, 0.001), units: "",
      explanation: `A = s² = (${s})² = ${sigFig(A, 4)}.`,
      svg: `<svg viewBox="0 0 200 180" class="geo-svg">
      <rect x="30" y="20" width="140" height="140" fill="none" stroke="#667eea" stroke-width="2"/>
      <text x="8" y="95" fill="#ed8936" font-size="11">${s}</text>
      <text x="75" y="100" fill="#48bb78" font-size="12" font-style="italic">A = ?</text>
    </svg>`
    };
  },

  function genSquare_P_to_A() {
    const P = randBetween(1, 2000, randPick([0,1,2]));
    const s = P / 4;
    const A = s * s;
    return {
      id: "gx", category: "geometry", topic: "Square",
      display: `<b>SQUARE</b> with Perimeter = ${P}. Find the Area.`,
      plain: `Square: P=${P}, find area`,
      answerType: "standard", answer: sigFig(A, 3), tolerance: Math.max(sigFig(A, 3) * 0.005, 0.001), units: "",
      explanation: `s = P/4 = ${P}/4 = ${sigFig(s, 4)}. A = s² = ${sigFig(A, 4)}.`,
      svg: `<svg viewBox="0 0 200 180" class="geo-svg">
      <rect x="30" y="20" width="140" height="140" fill="none" stroke="#667eea" stroke-width="2"/>
      <text x="55" y="15" fill="#ed8936" font-size="11">P = ${P}</text>
      <text x="75" y="100" fill="#48bb78" font-size="12" font-style="italic">A = ?</text>
    </svg>`
    };
  },

  function genSquare_s_to_diag() {
    const s = randBetween(1, 500, randPick([1,2,3]));
    const d = s * Math.SQRT2;
    return {
      id: "gx", category: "geometry", topic: "Square",
      display: `<b>SQUARE</b> with side = ${s}. Find the diagonal.`,
      plain: `Square: s=${s}, find diagonal`,
      answerType: "standard", answer: sigFig(d, 3), tolerance: Math.max(sigFig(d, 3) * 0.005, 0.001), units: "",
      explanation: `Diagonal = s√2 = ${s} × 1.4142 = ${sigFig(d, 4)}.`,
      svg: `<svg viewBox="0 0 200 180" class="geo-svg">
      <rect x="30" y="20" width="140" height="140" fill="none" stroke="#667eea" stroke-width="2"/>
      <line x1="30" y1="160" x2="170" y2="20" stroke="#667eea" stroke-width="1.5" stroke-dasharray="5,4"/>
      <text x="60" y="175" fill="#ed8936" font-size="11">${s}</text>
      <text x="85" y="80" fill="#48bb78" font-size="11" font-style="italic">d = ?</text>
    </svg>`
    };
  },

  function genSquare_A_to_s() {
    const A = randBetween(0.5, 5000, randPick([0,1,2,3]));
    const s = Math.sqrt(A);
    return {
      id: "gx", category: "geometry", topic: "Square",
      display: `<b>SQUARE</b> with Area = ${A}. Find the side length.`,
      plain: `Square: A=${A}, find side`,
      answerType: "standard", answer: sigFig(s, 3), tolerance: Math.max(sigFig(s, 3) * 0.005, 0.001), units: "",
      explanation: `s = √A = √${A} = ${sigFig(s, 4)}.`,
      svg: `<svg viewBox="0 0 200 180" class="geo-svg">
      <rect x="30" y="20" width="140" height="140" fill="none" stroke="#667eea" stroke-width="2"/>
      <text x="65" y="95" fill="#ed8936" font-size="11">Area = ${A}</text>
      <text x="8" y="95" fill="#48bb78" font-size="11" font-style="italic">?</text>
    </svg>`
    };
  },

  // ── RECTANGLE ──
  function genRectangle_lw_to_A() {
    const l = randBetween(2, 5000, randPick([0,1,2]));
    const w = randBetween(1, l * 0.8, randPick([0,1,2]));
    const A = l * w;
    return {
      id: "gx", category: "geometry", topic: "Rectangle",
      display: `<b>RECTANGLE</b> with sides ${l} and ${w}. Find the Area.`,
      plain: `Rectangle: l=${l}, w=${w}, find area`,
      answerType: "standard", answer: sigFig(A, 3), tolerance: Math.max(sigFig(A, 3) * 0.005, 0.001), units: "",
      explanation: `A = l×w = ${l} × ${w} = ${sigFig(A, 4)}.`,
      svg: `<svg viewBox="0 0 260 140" class="geo-svg">
      <rect x="20" y="20" width="220" height="100" fill="none" stroke="#667eea" stroke-width="2"/>
      <text x="130" y="135" fill="#ed8936" font-size="11" text-anchor="middle">${l}</text>
      <text x="248" y="75" fill="#ed8936" font-size="11">${w}</text>
      <text x="110" y="75" fill="#48bb78" font-size="12" font-style="italic">Area = ?</text>
    </svg>`
    };
  },

  function genRectangle_wP_to_l() {
    const w = randBetween(10, 2000, randPick([0,1]));
    const l = randBetween(w * 0.5, w * 2, randPick([0,1]));
    const P = 2 * (l + w);
    return {
      id: "gx", category: "geometry", topic: "Rectangle",
      display: `<b>RECTANGLE</b> with width = ${w} and Perimeter = ${sigFig(P, 4)}. Find the length.`,
      plain: `Rectangle: w=${w}, P=${sigFig(P,4)}, find length`,
      answerType: "standard", answer: sigFig(l, 3), tolerance: Math.max(sigFig(l, 3) * 0.005, 0.001), units: "",
      explanation: `P = 2(l+w). l+w = ${sigFig(P,4)}/2 = ${sigFig(P/2,4)}. l = ${sigFig(P/2,4)}−${w} = ${sigFig(l,4)}.`,
      svg: `<svg viewBox="0 0 260 160" class="geo-svg">
      <rect x="20" y="30" width="220" height="100" fill="none" stroke="#667eea" stroke-width="2"/>
      <text x="248" y="85" fill="#ed8936" font-size="11">${w}</text>
      <text x="80" y="15" fill="#ed8936" font-size="10">Perimeter = ${sigFig(P,4)}</text>
      <text x="110" y="145" fill="#48bb78" font-size="11" font-style="italic">length = ?</text>
    </svg>`
    };
  },

  // ── PARALLELOGRAM ──
  function genParallelogram_bh_to_A() {
    const b = randBetween(2, 9000, randPick([0,1,2]));
    const h = randBetween(1, b * 0.8, randPick([0,1,2]));
    const A = b * h;
    return {
      id: "gx", category: "geometry", topic: "Parallelogram",
      display: `<b>PARALLELOGRAM</b> with base = ${b} and height = ${h}. Find the Area.`,
      plain: `Parallelogram: b=${b}, h=${h}, find area`,
      answerType: "standard", answer: sigFig(A, 3), tolerance: Math.max(sigFig(A, 3) * 0.005, 0.001), units: "",
      explanation: `A = b×h = ${b} × ${h} = ${sigFig(A, 4)}.`,
      svg: `<svg viewBox="0 0 260 160" class="geo-svg">
      <polygon points="60,130 240,130 200,30 20,30" fill="none" stroke="#667eea" stroke-width="2"/>
      <line x1="60" y1="30" x2="60" y2="130" stroke="#ed8936" stroke-width="1" stroke-dasharray="4,3"/>
      <text x="130" y="150" fill="#ed8936" font-size="11" text-anchor="middle">${b}</text>
      <text x="40" y="85" fill="#ed8936" font-size="11">${h}</text>
      <text x="120" y="90" fill="#48bb78" font-size="12" font-style="italic">Area = ?</text>
    </svg>`
    };
  },

  function genParallelogram_bA_to_h() {
    const b = randBetween(2, 500, randPick([1,2]));
    const h = randBetween(1, b * 1.5, randPick([1,2]));
    const A = b * h;
    return {
      id: "gx", category: "geometry", topic: "Parallelogram",
      display: `<b>PARALLELOGRAM</b> with base = ${b} and Area = ${sigFig(A, 3)}. Find the height.`,
      plain: `Parallelogram: b=${b}, A=${sigFig(A,3)}, find h`,
      answerType: "standard", answer: sigFig(h, 3), tolerance: Math.max(sigFig(h, 3) * 0.005, 0.001), units: "",
      explanation: `A = b×h. h = A/b = ${sigFig(A,3)}/${b} = ${sigFig(h, 4)}.`,
      svg: `<svg viewBox="0 0 260 160" class="geo-svg">
      <polygon points="60,130 240,130 200,30 20,30" fill="none" stroke="#667eea" stroke-width="2"/>
      <line x1="60" y1="30" x2="60" y2="130" stroke="#48bb78" stroke-width="1" stroke-dasharray="4,3"/>
      <text x="130" y="150" fill="#ed8936" font-size="11" text-anchor="middle">${b}</text>
      <text x="120" y="85" fill="#ed8936" font-size="10">A = ${sigFig(A,3)}</text>
      <text x="35" y="85" fill="#48bb78" font-size="11" font-style="italic">h?</text>
    </svg>`
    };
  },

  // ── RHOMBUS ──
  function genRhombus_diag_to_A() {
    const d1 = randBetween(3, 100, randPick([1,2]));
    const d2 = randBetween(3, 100, randPick([1,2]));
    const A = d1 * d2 / 2;
    return {
      id: "gx", category: "geometry", topic: "Rhombus",
      display: `<b>RHOMBUS</b> with diagonals ${d1} and ${d2}. Find the Area.`,
      plain: `Rhombus: d1=${d1}, d2=${d2}, find area`,
      answerType: "standard", answer: sigFig(A, 3), tolerance: Math.max(sigFig(A, 3) * 0.005, 0.001), units: "",
      explanation: `A = d₁d₂/2 = (${d1})(${d2})/2 = ${sigFig(A, 4)}.`,
      svg: `<svg viewBox="0 0 260 180" class="geo-svg">
      <polygon points="130,20 220,90 130,160 40,90" fill="none" stroke="#667eea" stroke-width="2"/>
      <line x1="130" y1="20" x2="130" y2="160" stroke="#ed8936" stroke-width="1.5" stroke-dasharray="5,4"/>
      <line x1="40" y1="90" x2="220" y2="90" stroke="#ed8936" stroke-width="1.5" stroke-dasharray="5,4"/>
      <text x="135" y="95" fill="#ed8936" font-size="11">${d1}</text>
      <text x="125" y="45" fill="#ed8936" font-size="11" transform="rotate(90,135,45)">${d2}</text>
      <text x="90" y="175" fill="#48bb78" font-size="11" font-style="italic">Area = ?</text>
    </svg>`
    };
  },

  function genRhombus_sAngle_to_A() {
    const s = randBetween(2, 100, randPick([1,2]));
    const angle = randBetween(25, 80, 1);
    const A = s * s * Math.sin(angle * Math.PI / 180);
    return {
      id: "gx", category: "geometry", topic: "Rhombus",
      display: `<b>RHOMBUS</b> with side ${s} and one angle ${angle}°. Find the Area.`,
      plain: `Rhombus: side=${s}, angle=${angle}°, find area`,
      answerType: "standard", answer: sigFig(A, 3), tolerance: Math.max(sigFig(A, 3) * 0.005, 0.001), units: "",
      explanation: `A = s²sin(θ) = (${s})²sin(${angle}°) = ${sigFig(s*s, 4)}×${sigFig(Math.sin(angle*Math.PI/180), 4)} = ${sigFig(A, 4)}.`,
      svg: `<svg viewBox="0 0 260 180" class="geo-svg">
      <polygon points="85,150 195,150 175,40 65,40" fill="none" stroke="#667eea" stroke-width="2"/>
      <text x="140" y="168" fill="#ed8936" font-size="11" text-anchor="middle">${s}</text>
      <path d="M 100,150 A 20,20 0 0,0 92,135" fill="none" stroke="#ed8936" stroke-width="1.5"/>
      <text x="98" y="132" fill="#ed8936" font-size="10">${angle}°</text>
      <text x="105" y="105" fill="#48bb78" font-size="12" font-style="italic">Area = ?</text>
    </svg>`
    };
  },

  // ── TRAPEZOID ──
  function genTrapezoid_to_A() {
    let a, b, leg, halfDiff;
    // Ensure leg > halfDiff for valid trapezoid height
    do {
      a = randBetween(5, 100, randPick([1,2]));
      b = randBetween(a * 1.2, a * 2.5, randPick([1,2]));
      leg = randBetween(a * 0.3, a * 1.5, randPick([1,2]));
      halfDiff = (b - a) / 2;
    } while (leg <= halfDiff);
    const h = Math.sqrt(leg * leg - halfDiff * halfDiff);
    const A = (a + b) / 2 * h;
    return {
      id: "gx", category: "geometry", topic: "Trapezoid",
      display: `<b>ISOSCELES TRAPEZOID</b> with parallel sides ${a} (top) and ${b} (bottom), and leg ${leg}. Find the Area.`,
      plain: `Isosceles trapezoid: a=${a}, b=${b}, leg=${leg}, find area`,
      answerType: "standard", answer: sigFig(A, 3), tolerance: Math.max(sigFig(A, 3) * 0.005, 0.001), units: "",
      explanation: `Half-base diff = (${b}−${a})/2 = ${sigFig(halfDiff,4)}. h = √(${leg}²−${sigFig(halfDiff,4)}²) = ${sigFig(h,4)}. A = (a+b)/2 × h = ${sigFig((a+b)/2,4)} × ${sigFig(h,4)} = ${sigFig(A,4)}.`,
      svg: `<svg viewBox="0 0 260 170" class="geo-svg">
      <polygon points="75,40 185,40 230,130 30,130" fill="none" stroke="#667eea" stroke-width="2"/>
      <text x="130" y="30" fill="#ed8936" font-size="11" text-anchor="middle">${a}</text>
      <text x="130" y="150" fill="#ed8936" font-size="11" text-anchor="middle">${b}</text>
      <text x="38" y="82" fill="#ed8936" font-size="11" transform="rotate(-68,42,82)">${leg}</text>
      <text x="110" y="100" fill="#48bb78" font-size="12" font-style="italic">Area = ?</text>
    </svg>`
    };
  },

  function genTrapezoid_to_P() {
    const a = randBetween(5, 100, randPick([1,2]));
    const b = randBetween(a * 1.2, a * 2.5, randPick([1,2]));
    const leg = randBetween(5, 80, randPick([1,2]));
    const P = a + b + 2 * leg;
    return {
      id: "gx", category: "geometry", topic: "Trapezoid",
      display: `<b>ISOSCELES TRAPEZOID</b> with parallel sides ${a} (top) and ${b} (bottom), leg = ${leg}. Find the Perimeter.`,
      plain: `Isosceles trapezoid: a=${a}, b=${b}, leg=${leg}, find perimeter`,
      answerType: "standard", answer: sigFig(P, 3), tolerance: Math.max(sigFig(P, 3) * 0.005, 0.001), units: "",
      explanation: `P = a + b + 2×leg = ${a} + ${b} + 2(${leg}) = ${sigFig(P, 4)}.`,
      svg: `<svg viewBox="0 0 260 160" class="geo-svg">
      <polygon points="75,30 185,30 240,130 20,130" fill="none" stroke="#667eea" stroke-width="2"/>
      <text x="130" y="22" fill="#ed8936" font-size="11" text-anchor="middle">${a}</text>
      <text x="130" y="150" fill="#ed8936" font-size="11" text-anchor="middle">${b}</text>
      <text x="30" y="75" fill="#ed8936" font-size="11" transform="rotate(-66,35,75)">${leg}</text>
      <text x="100" y="90" fill="#48bb78" font-size="11" font-style="italic">P = ?</text>
    </svg>`
    };
  },

  // ── EQUILATERAL TRIANGLE ──
  function genEqTri_s_to_A() {
    const s = randBetween(2, 500, randPick([0,1,2]));
    const A = s * s * Math.sqrt(3) / 4;
    return {
      id: "gx", category: "geometry", topic: "Equilateral Triangle",
      display: `<b>EQUILATERAL TRIANGLE</b> with side = ${s}. Find the Area.`,
      plain: `Equilateral triangle: s=${s}, find area`,
      answerType: "standard", answer: sigFig(A, 3), tolerance: Math.max(sigFig(A, 3) * 0.005, 0.001), units: "",
      explanation: `A = (s²√3)/4 = (${s})²(√3)/4 = ${sigFig(A, 4)}.`,
      svg: `<svg viewBox="0 0 240 190" class="geo-svg">
      <polygon points="120,20 20,170 220,170" fill="none" stroke="#667eea" stroke-width="2"/>
      <text x="120" y="185" fill="#ed8936" font-size="11" text-anchor="middle">${s}</text>
      <text x="100" y="120" fill="#48bb78" font-size="12" font-style="italic">Area = ?</text>
    </svg>`
    };
  },

  function genEqTri_A_to_s() {
    const A = randBetween(10, 50000, randPick([0,1]));
    const s = Math.sqrt(4 * A / Math.sqrt(3));
    return {
      id: "gx", category: "geometry", topic: "Equilateral Triangle",
      display: `<b>EQUILATERAL TRIANGLE</b> with Area = ${A}. Find the side.`,
      plain: `Equilateral triangle: A=${A}, find side`,
      answerType: "standard", answer: sigFig(s, 3), tolerance: Math.max(sigFig(s, 3) * 0.005, 0.001), units: "",
      explanation: `A = (s²√3)/4. s² = 4A/√3 = ${sigFig(4*A/Math.sqrt(3), 4)}. s = ${sigFig(s, 4)}.`,
      svg: `<svg viewBox="0 0 240 190" class="geo-svg">
      <polygon points="120,20 20,170 220,170" fill="none" stroke="#667eea" stroke-width="2"/>
      <text x="85" y="110" fill="#ed8936" font-size="11">A = ${A}</text>
      <text x="120" y="185" fill="#48bb78" font-size="11" font-style="italic" text-anchor="middle">s = ?</text>
    </svg>`
    };
  },

  // ── SECTOR ──
  function genSector_rAngle_to_arc() {
    const r = randBetween(2, 100, randPick([1,2]));
    const deg = randBetween(15, 160, 1);
    const rad = deg * Math.PI / 180;
    const arc = r * rad;
    return {
      id: "gx", category: "geometry", topic: "Sector",
      display: `<b>SECTOR</b> with radius ${r} and central angle ${deg}°. Find the Arc Length.`,
      plain: `Sector: r=${r}, θ=${deg}°, find arc length`,
      answerType: "standard", answer: sigFig(arc, 3), tolerance: Math.max(sigFig(arc, 3) * 0.005, 0.001), units: "",
      explanation: `Arc = rθ(rad) = ${r} × ${deg}° × π/180 = ${r} × ${sigFig(rad, 4)} = ${sigFig(arc, 4)}.`,
      svg: `<svg viewBox="0 0 260 180" class="geo-svg">
      <path d="M 60 150 L 60 50 A 100 100 0 0 1 154 118 Z" fill="none" stroke="#667eea" stroke-width="2"/>
      <line x1="60" y1="150" x2="60" y2="50" stroke="#ed8936" stroke-width="1.5" stroke-dasharray="5,4"/>
      <text x="40" y="100" fill="#ed8936" font-size="11">${r}</text>
      <path d="M 60,130 A 20,20 0 0,1 76,140" fill="none" stroke="#ed8936" stroke-width="1.5"/>
      <text x="72" y="132" fill="#ed8936" font-size="10">${deg}°</text>
      <text x="100" y="100" fill="#48bb78" font-size="11" font-style="italic">arc = ?</text>
    </svg>`
    };
  },

  function genSector_rA_to_angle() {
    const r = randBetween(3, 50, randPick([1,2]));
    const theta = randBetween(0.3, 2.5, 3); // radians
    const A = r * r * theta / 2;
    return {
      id: "gx", category: "geometry", topic: "Sector",
      display: `<b>SECTOR</b> with radius ${r} and area ${sigFig(A, 3)}. Find the central angle in radians.`,
      plain: `Sector: r=${r}, A=${sigFig(A,3)}, find θ (rad)`,
      answerType: "standard", answer: sigFig(theta, 3), tolerance: Math.max(sigFig(theta, 3) * 0.005, 0.001), units: "rad",
      explanation: `A = r²θ/2. θ = 2A/r² = 2(${sigFig(A,3)})/(${r})² = ${sigFig(theta, 4)} rad.`,
      svg: `<svg viewBox="0 0 260 180" class="geo-svg">
      <path d="M 50 150 L 50 40 A 110 110 0 0 1 140 130 Z" fill="none" stroke="#667eea" stroke-width="2"/>
      <text x="30" y="100" fill="#ed8936" font-size="11">${r}</text>
      <path d="M 50,130 A 20,20 0 0,1 65,138" fill="none" stroke="#48bb78" stroke-width="1.5"/>
      <text x="68" y="130" fill="#48bb78" font-size="11" font-style="italic">θ = ?</text>
      <text x="80" y="105" fill="#8899aa" font-size="11">A = ${sigFig(A,3)}</text>
    </svg>`
    };
  },

  // ── ANNULUS ──
  function genAnnulus_to_A() {
    const R = randBetween(5, 100, randPick([1,2]));
    const r = randBetween(R * 0.3, R * 0.8, randPick([1,2]));
    const A = Math.PI * (R * R - r * r);
    return {
      id: "gx", category: "geometry", topic: "Annulus",
      display: `<b>ANNULUS</b> (ring) with outer radius ${R} and inner radius ${r}. Find the Area.`,
      plain: `Annulus: R=${R}, r=${r}, find area`,
      answerType: "standard", answer: sigFig(A, 3), tolerance: Math.max(sigFig(A, 3) * 0.005, 0.001), units: "",
      explanation: `A = π(R²−r²) = π(${sigFig(R*R,4)}−${sigFig(r*r,4)}) = ${sigFig(A, 4)}.`,
      svg: `<svg viewBox="0 0 260 180" class="geo-svg">
      <circle cx="130" cy="90" r="70" fill="none" stroke="#667eea" stroke-width="2"/>
      <circle cx="130" cy="90" r="38" fill="none" stroke="#667eea" stroke-width="2"/>
      <line x1="130" y1="90" x2="200" y2="90" stroke="#ed8936" stroke-width="1.5" stroke-dasharray="5,4"/>
      <line x1="130" y1="90" x2="130" y2="52" stroke="#ed8936" stroke-width="1.5" stroke-dasharray="5,4"/>
      <circle cx="130" cy="90" r="3" fill="#ed8936"/>
      <text x="160" y="84" fill="#ed8936" font-size="11">R = ${R}</text>
      <text x="133" y="68" fill="#ed8936" font-size="11">r = ${r}</text>
      <text x="95" y="175" fill="#48bb78" font-size="11" font-style="italic">Area = ?</text>
    </svg>`
    };
  },

  // ── HEXAGON ──
  function genHexagon_s_to_A() {
    const s = randBetween(2, 200, randPick([0,1,2]));
    const A = 3 * Math.sqrt(3) / 2 * s * s;
    return {
      id: "gx", category: "geometry", topic: "Hexagon",
      display: `<b>REGULAR HEXAGON</b> with side length ${s}. Find the Area.`,
      plain: `Regular hexagon: side=${s}, find area`,
      answerType: "standard", answer: sigFig(A, 3), tolerance: Math.max(sigFig(A, 3) * 0.005, 0.001), units: "",
      explanation: `A = (3√3/2)s² = 2.5981×(${s})² = ${sigFig(A, 4)}.`,
      svg: `<svg viewBox="0 0 260 180" class="geo-svg">
      <polygon points="130,20 210,55 210,125 130,160 50,125 50,55" fill="none" stroke="#667eea" stroke-width="2"/>
      <line x1="130" y1="20" x2="210" y2="55" stroke="#ed8936" stroke-width="1.5" stroke-dasharray="5,4"/>
      <text x="175" y="30" fill="#ed8936" font-size="11">${s}</text>
      <text x="115" y="100" fill="#48bb78" font-size="12" font-style="italic">Area = ?</text>
    </svg>`
    };
  },

  function genHexagon_apothem_to_P() {
    const a = randBetween(3, 200, randPick([0,1,2]));
    const s = 2 * a / Math.sqrt(3);
    const P = 6 * s;
    return {
      id: "gx", category: "geometry", topic: "Hexagon",
      display: `<b>REGULAR HEXAGON</b> with apothem ${a}. Find the Perimeter.`,
      plain: `Regular hexagon: apothem=${a}, find perimeter`,
      answerType: "standard", answer: sigFig(P, 3), tolerance: Math.max(sigFig(P, 3) * 0.005, 0.001), units: "",
      explanation: `s = 2a/√3 = 2(${a})/1.7321 = ${sigFig(s, 4)}. P = 6s = ${sigFig(P, 4)}.`,
      svg: `<svg viewBox="0 0 260 180" class="geo-svg">
      <polygon points="130,20 210,55 210,125 130,160 50,125 50,55" fill="none" stroke="#667eea" stroke-width="2"/>
      <line x1="130" y1="90" x2="210" y2="90" stroke="#ed8936" stroke-width="1.5" stroke-dasharray="5,4"/>
      <circle cx="130" cy="90" r="3" fill="#ed8936"/>
      <text x="160" y="84" fill="#ed8936" font-size="11">a = ${a}</text>
      <text x="90" y="178" fill="#48bb78" font-size="11" font-style="italic">Perimeter = ?</text>
    </svg>`
    };
  },

  // ── ELLIPSE ──
  function genEllipse_ab_to_A() {
    const a = randBetween(3, 100, randPick([1,2]));
    const b = randBetween(a * 0.3, a * 0.9, randPick([1,2]));
    const A = Math.PI * a * b;
    return {
      id: "gx", category: "geometry", topic: "Ellipse",
      display: `<b>ELLIPSE</b> with semi-major axis a = ${a} and semi-minor axis b = ${b}. Find the Area.`,
      plain: `Ellipse: a=${a}, b=${b}, find area`,
      answerType: "standard", answer: sigFig(A, 3), tolerance: Math.max(sigFig(A, 3) * 0.005, 0.001), units: "",
      explanation: `A = πab = π(${a})(${b}) = ${sigFig(A, 4)}.`,
      svg: `<svg viewBox="0 0 260 170" class="geo-svg">
      <ellipse cx="130" cy="85" rx="100" ry="60" fill="none" stroke="#667eea" stroke-width="2"/>
      <line x1="130" y1="85" x2="230" y2="85" stroke="#ed8936" stroke-width="1.5" stroke-dasharray="5,4"/>
      <line x1="130" y1="85" x2="130" y2="25" stroke="#ed8936" stroke-width="1.5" stroke-dasharray="5,4"/>
      <circle cx="130" cy="85" r="3" fill="#ed8936"/>
      <text x="175" y="80" fill="#ed8936" font-size="11">a = ${a}</text>
      <text x="135" y="55" fill="#ed8936" font-size="11">b = ${b}</text>
      <text x="95" y="165" fill="#48bb78" font-size="11" font-style="italic">Area = ?</text>
    </svg>`
    };
  },

  // ── RIGHT TRIANGLE (Pythagorean) ──
  function genRightTri_legs_to_hyp() {
    const a = randBetween(1, 800, randPick([0,1,2,3]));
    const b = randBetween(1, 800, randPick([0,1,2,3]));
    const c = Math.sqrt(a * a + b * b);
    return {
      id: "gx", category: "geometry", topic: "Right Triangle",
      display: `<b>RIGHT TRIANGLE</b> with legs ${a} and ${b}. Find the hypotenuse.`,
      plain: `Right triangle: a=${a}, b=${b}, find c`,
      answerType: "standard", answer: sigFig(c, 3), tolerance: Math.max(sigFig(c, 3) * 0.005, 0.001), units: "",
      explanation: `c = √(a²+b²) = √(${sigFig(a*a,4)}+${sigFig(b*b,4)}) = ${sigFig(c, 4)}.`,
      svg: `<svg viewBox="0 0 240 180" class="geo-svg">
      <polygon points="40,150 200,150 40,40" fill="none" stroke="#667eea" stroke-width="2"/>
      <rect x="40" y="142" width="8" height="8" fill="none" stroke="#8899aa" stroke-width="1"/>
      <text x="20" y="100" fill="#ed8936" font-size="11">${a}</text>
      <text x="110" y="168" fill="#ed8936" font-size="11">${b}</text>
      <text x="120" y="85" fill="#48bb78" font-size="11" font-style="italic">c = ?</text>
    </svg>`
    };
  },

  function genRightTri_hypLeg_to_leg() {
    const a = randBetween(50, 20000, randPick([0,1]));
    const b = randBetween(a * 0.3, a * 0.9, randPick([0,1]));
    const c = Math.sqrt(a * a + b * b);
    // Given c and b, find a
    return {
      id: "gx", category: "geometry", topic: "Right Triangle",
      display: `<b>RIGHT TRIANGLE</b> with hypotenuse = ${sigFig(c, 4)} and one leg = ${b}. Find the other leg.`,
      plain: `Right triangle: c=${sigFig(c,4)}, b=${b}, find a`,
      answerType: "standard", answer: sigFig(a, 3), tolerance: Math.max(sigFig(a, 3) * 0.005, 0.001), units: "",
      explanation: `a = √(c²−b²) = √(${sigFig(c*c,4)}−${sigFig(b*b,4)}) = ${sigFig(a, 4)}.`,
      svg: `<svg viewBox="0 0 250 180" class="geo-svg">
      <polygon points="30,160 220,160 220,30" fill="none" stroke="#667eea" stroke-width="2"/>
      <rect x="212" y="152" width="8" height="8" fill="none" stroke="#8899aa" stroke-width="1"/>
      <text x="115" y="85" fill="#ed8936" font-size="11" transform="rotate(-30,115,85)">${sigFig(c,4)}</text>
      <text x="230" y="100" fill="#ed8936" font-size="11">${b}</text>
      <text x="110" y="178" fill="#48bb78" font-size="11" font-style="italic">? = a</text>
    </svg>`
    };
  },

  function genRightTri_legs_to_area() {
    const a = randBetween(1, 500, randPick([1,2,3]));
    const b = randBetween(1, 500, randPick([1,2,3]));
    const A = 0.5 * a * b;
    return {
      id: "gx", category: "geometry", topic: "Right Triangle",
      display: `<b>RIGHT TRIANGLE</b> with legs ${a} and ${b}. Find the Area.`,
      plain: `Right triangle: a=${a}, b=${b}, find area`,
      answerType: "standard", answer: sigFig(A, 3), tolerance: Math.max(sigFig(A, 3) * 0.005, 0.001), units: "",
      explanation: `A = (1/2)ab = (1/2)(${a})(${b}) = ${sigFig(A, 4)}.`,
      svg: `<svg viewBox="0 0 220 180" class="geo-svg">
      <polygon points="30,160 200,160 30,30" fill="none" stroke="#667eea" stroke-width="2"/>
      <rect x="30" y="152" width="8" height="8" fill="none" stroke="#8899aa" stroke-width="1"/>
      <text x="8" y="100" fill="#ed8936" font-size="11">${a}</text>
      <text x="105" y="178" fill="#ed8936" font-size="11">${b}</text>
      <text x="80" y="120" fill="#48bb78" font-size="12" font-style="italic">A = ?</text>
    </svg>`
    };
  },
];


// ═══════════════════════════════════════════════════
//  3D GEOMETRY GENERATORS
// ═══════════════════════════════════════════════════

const GEO_GENERATORS_3D = [

  // ── SPHERE ──
  function genSphere_R_to_V() {
    const R = randBetween(1, 5000, randPick([0,1,2,3]));
    const V = (4 / 3) * Math.PI * R * R * R;
    return {
      id: "gx", category: "geometry", topic: "Sphere",
      display: `<b>SPHERE</b> with Radius = ${R}. Find the Volume.`,
      plain: `Sphere: R=${R}, find V`,
      answerType: "standard", answer: sigFig(V, 3), tolerance: Math.max(sigFig(V, 3) * 0.005, 0.001), units: "",
      explanation: `V = (4/3)πR³ = (4/3)π(${R})³ = ${sigFig(V, 4)}.`,
      svg: `<svg viewBox="0 0 220 190" class="geo-svg">
      <circle cx="110" cy="95" r="70" fill="none" stroke="#667eea" stroke-width="2"/>
      <ellipse cx="110" cy="95" rx="70" ry="20" fill="none" stroke="#667eea" stroke-width="1" stroke-dasharray="5,4"/>
      <line x1="110" y1="95" x2="180" y2="95" stroke="#ed8936" stroke-width="1.5" stroke-dasharray="4,3"/>
      <text x="130" y="88" fill="#ed8936" font-size="10">R = ${R}</text>
      <text x="70" y="175" fill="#48bb78" font-size="11" font-style="italic">V = ?</text>
    </svg>`
    };
  },

  function genSphere_V_to_R() {
    const V = randBetween(10, 100000, randPick([0,1]));
    const R = Math.pow(3 * V / (4 * Math.PI), 1 / 3);
    return {
      id: "gx", category: "geometry", topic: "Sphere",
      display: `<b>SPHERE</b> with Volume = ${V}. Find the Radius.`,
      plain: `Sphere: V=${V}, find R`,
      answerType: "standard", answer: sigFig(R, 3), tolerance: Math.max(sigFig(R, 3) * 0.005, 0.001), units: "",
      explanation: `V = (4/3)πR³. R³ = 3V/(4π) = ${sigFig(3*V/(4*Math.PI), 4)}. R = ${sigFig(R, 4)}.`,
      svg: `<svg viewBox="0 0 220 190" class="geo-svg">
      <circle cx="110" cy="95" r="70" fill="none" stroke="#667eea" stroke-width="2"/>
      <ellipse cx="110" cy="95" rx="70" ry="20" fill="none" stroke="#667eea" stroke-width="1" stroke-dasharray="5,4"/>
      <text x="75" y="100" fill="#ed8936" font-size="11">V = ${V}</text>
      <line x1="110" y1="95" x2="175" y2="80" stroke="#48bb78" stroke-width="1.5" stroke-dasharray="4,3"/>
      <text x="140" y="75" fill="#48bb78" font-size="11" font-style="italic">R = ?</text>
    </svg>`
    };
  },

  function genSphere_SA_to_D() {
    const SA = randBetween(5, 10000, randPick([0,1]));
    const R = Math.sqrt(SA / (4 * Math.PI));
    const D = 2 * R;
    return {
      id: "gx", category: "geometry", topic: "Sphere",
      display: `<b>SPHERE</b> with Surface Area = ${SA}. Find the Diameter.`,
      plain: `Sphere: SA=${SA}, find D`,
      answerType: "standard", answer: sigFig(D, 3), tolerance: Math.max(sigFig(D, 3) * 0.005, 0.001), units: "",
      explanation: `SA = 4πR². R = √(SA/(4π)) = ${sigFig(R, 4)}. D = 2R = ${sigFig(D, 4)}.`,
      svg: `<svg viewBox="0 0 220 190" class="geo-svg">
      <circle cx="110" cy="95" r="70" fill="none" stroke="#667eea" stroke-width="2"/>
      <ellipse cx="110" cy="95" rx="70" ry="20" fill="none" stroke="#667eea" stroke-width="1" stroke-dasharray="5,4"/>
      <text x="60" y="50" fill="#ed8936" font-size="10">TSA = ${SA}</text>
      <line x1="40" y1="95" x2="180" y2="95" stroke="#48bb78" stroke-width="1.5" stroke-dasharray="4,3"/>
      <text x="90" y="88" fill="#48bb78" font-size="11" font-style="italic">D = ?</text>
    </svg>`
    };
  },

  // ── HEMISPHERE ──
  function genHemisphere_R_to_TSA() {
    const R = randBetween(0.5, 200, randPick([1,2,3]));
    const TSA = 3 * Math.PI * R * R;
    return {
      id: "gx", category: "geometry", topic: "Hemisphere",
      display: `<b>HEMISPHERE</b> with radius ${R}. Find the Total Surface Area (curved + flat).`,
      plain: `Hemisphere: r=${R}, find TSA`,
      answerType: "standard", answer: sigFig(TSA, 3), tolerance: Math.max(sigFig(TSA, 3) * 0.005, 0.001), units: "",
      explanation: `TSA = 3πR² = 3π(${R})² = ${sigFig(TSA, 4)}.`,
      svg: `<svg viewBox="0 0 260 160" class="geo-svg">
      <path d="M 40 110 A 90 90 0 0 1 220 110" fill="none" stroke="#667eea" stroke-width="2"/>
      <ellipse cx="130" cy="110" rx="90" ry="20" fill="none" stroke="#667eea" stroke-width="2"/>
      <line x1="130" y1="110" x2="220" y2="110" stroke="#ed8936" stroke-width="1.5" stroke-dasharray="5,4"/>
      <circle cx="130" cy="110" r="3" fill="#ed8936"/>
      <text x="165" y="104" fill="#ed8936" font-size="11">r = ${R}</text>
      <text x="90" y="150" fill="#48bb78" font-size="11" font-style="italic">TSA = ?</text>
    </svg>`
    };
  },

  function genHemisphere_V_to_R() {
    const V = randBetween(10, 100000, randPick([0,1]));
    const R = Math.pow(3 * V / (2 * Math.PI), 1 / 3);
    return {
      id: "gx", category: "geometry", topic: "Hemisphere",
      display: `<b>HEMISPHERE</b> with Volume = ${V}. Find the radius R.`,
      plain: `Hemisphere: V=(2/3)πR³=${V}, find R`,
      answerType: "standard", answer: sigFig(R, 3), tolerance: Math.max(sigFig(R, 3) * 0.005, 0.001), units: "",
      explanation: `V = (2/3)πR³. R³ = 3V/(2π) = ${sigFig(3*V/(2*Math.PI), 4)}. R = ${sigFig(R, 4)}.`,
      svg: `<svg viewBox="0 0 260 160" class="geo-svg">
      <path d="M 40 110 A 90 90 0 0 1 220 110" fill="none" stroke="#667eea" stroke-width="2"/>
      <ellipse cx="130" cy="110" rx="90" ry="20" fill="none" stroke="#667eea" stroke-width="2"/>
      <line x1="130" y1="110" x2="220" y2="110" stroke="#48bb78" stroke-width="1.5" stroke-dasharray="5,4"/>
      <circle cx="130" cy="110" r="3" fill="#48bb78"/>
      <text x="165" y="104" fill="#48bb78" font-size="11" font-style="italic">R = ?</text>
      <text x="100" y="75" fill="#ed8936" font-size="11">V = ${V}</text>
    </svg>`
    };
  },

  // ── CYLINDER ──
  function genCylinder_rh_to_V() {
    const r = randBetween(0.5, 200, randPick([1,2,3]));
    const h = randBetween(1, 300, randPick([1,2,3]));
    const V = Math.PI * r * r * h;
    return {
      id: "gx", category: "geometry", topic: "Cylinder",
      display: `<b>CYLINDER</b> with radius ${r} and height ${h}. Find the Volume.`,
      plain: `Cylinder: r=${r}, h=${h}, find V`,
      answerType: "standard", answer: sigFig(V, 3), tolerance: Math.max(sigFig(V, 3) * 0.005, 0.001), units: "",
      explanation: `V = πr²h = π(${r})²(${h}) = ${sigFig(V, 4)}.`,
      svg: `<svg viewBox="0 0 260 190" class="geo-svg">
      <ellipse cx="130" cy="35" rx="55" ry="15" fill="none" stroke="#667eea" stroke-width="2"/>
      <ellipse cx="130" cy="150" rx="55" ry="15" fill="none" stroke="#667eea" stroke-width="2"/>
      <line x1="75" y1="35" x2="75" y2="150" stroke="#667eea" stroke-width="2"/>
      <line x1="185" y1="35" x2="185" y2="150" stroke="#667eea" stroke-width="2"/>
      <line x1="130" y1="35" x2="185" y2="35" stroke="#ed8936" stroke-width="1.5" stroke-dasharray="5,4"/>
      <text x="148" y="28" fill="#ed8936" font-size="11">r = ${r}</text>
      <text x="192" y="98" fill="#ed8936" font-size="11">h = ${h}</text>
      <text x="95" y="100" fill="#48bb78" font-size="12" font-style="italic">V = ?</text>
    </svg>`
    };
  },

  function genCylinder_Rh_to_TSA() {
    const R = randBetween(2, 200, randPick([0,1]));
    const h = randBetween(2, 500, randPick([0,1]));
    const TSA = 2 * Math.PI * R * (R + h);
    return {
      id: "gx", category: "geometry", topic: "Cylinder",
      display: `<b>CYLINDER</b> with Radius = ${R} and height = ${h}. Find the Total Surface Area.`,
      plain: `Cylinder: R=${R}, h=${h}, find TSA`,
      answerType: "standard", answer: sigFig(TSA, 3), tolerance: Math.max(sigFig(TSA, 3) * 0.005, 0.001), units: "",
      explanation: `TSA = 2πR(R+h) = 2π(${R})(${R}+${h}) = ${sigFig(TSA, 4)}.`,
      svg: `<svg viewBox="0 0 220 190" class="geo-svg">
      <ellipse cx="110" cy="35" rx="50" ry="15" fill="none" stroke="#667eea" stroke-width="2"/>
      <ellipse cx="110" cy="150" rx="50" ry="15" fill="none" stroke="#667eea" stroke-width="2"/>
      <line x1="60" y1="35" x2="60" y2="150" stroke="#667eea" stroke-width="2"/>
      <line x1="160" y1="35" x2="160" y2="150" stroke="#667eea" stroke-width="2"/>
      <line x1="110" y1="35" x2="160" y2="35" stroke="#ed8936" stroke-width="1" stroke-dasharray="4,3"/>
      <text x="120" y="28" fill="#ed8936" font-size="10">R = ${R}</text>
      <text x="170" y="98" fill="#ed8936" font-size="10">h = ${h}</text>
      <text x="55" y="175" fill="#48bb78" font-size="11" font-style="italic">TSA = ?</text>
    </svg>`
    };
  },

  function genCylinder_hV_to_R() {
    const h = randBetween(1, 200, randPick([1,2,3,4]));
    const R = randBetween(0.5, 100, randPick([1,2,3,4]));
    const V = Math.PI * R * R * h;
    return {
      id: "gx", category: "geometry", topic: "Cylinder",
      display: `<b>CYLINDER</b> with height = ${h} and Volume = ${sigFig(V, 3)}. Find the Radius.`,
      plain: `Cylinder: h=${h}, V=${sigFig(V,3)}, find R`,
      answerType: "standard", answer: sigFig(R, 3), tolerance: Math.max(sigFig(R, 3) * 0.005, 0.001), units: "",
      explanation: `V = πR²h. R² = V/(πh) = ${sigFig(V,3)}/(π×${h}) = ${sigFig(V/(Math.PI*h), 4)}. R = ${sigFig(R, 4)}.`,
      svg: `<svg viewBox="0 0 220 190" class="geo-svg">
      <ellipse cx="110" cy="35" rx="50" ry="15" fill="none" stroke="#667eea" stroke-width="2"/>
      <ellipse cx="110" cy="150" rx="50" ry="15" fill="none" stroke="#667eea" stroke-width="2"/>
      <line x1="60" y1="35" x2="60" y2="150" stroke="#667eea" stroke-width="2"/>
      <line x1="160" y1="35" x2="160" y2="150" stroke="#667eea" stroke-width="2"/>
      <text x="170" y="98" fill="#ed8936" font-size="10">h = ${h}</text>
      <text x="55" y="175" fill="#ed8936" font-size="10">V = ${sigFig(V,3)}</text>
      <line x1="110" y1="35" x2="160" y2="35" stroke="#48bb78" stroke-width="1" stroke-dasharray="4,3"/>
      <text x="120" y="28" fill="#48bb78" font-size="10" font-style="italic">R = ?</text>
    </svg>`
    };
  },

  // ── CONE ──
  function genCone_Rh_to_V() {
    const R = randBetween(2, 200, randPick([0,1,2]));
    const h = randBetween(3, 300, randPick([0,1]));
    const V = Math.PI * R * R * h / 3;
    return {
      id: "gx", category: "geometry", topic: "Cone",
      display: `<b>CONE</b> with base radius R = ${R} and height = ${h}. Find the Volume.`,
      plain: `Cone: R=${R}, h=${h}, find V`,
      answerType: "standard", answer: sigFig(V, 3), tolerance: Math.max(sigFig(V, 3) * 0.005, 0.001), units: "",
      explanation: `V = (1/3)πR²h = (1/3)π(${R})²(${h}) = ${sigFig(V, 4)}.`,
      svg: `<svg viewBox="0 0 220 200" class="geo-svg">
      <line x1="110" y1="20" x2="40" y2="170" stroke="#667eea" stroke-width="2"/>
      <line x1="110" y1="20" x2="180" y2="170" stroke="#667eea" stroke-width="2"/>
      <ellipse cx="110" cy="170" rx="70" ry="18" fill="none" stroke="#667eea" stroke-width="2"/>
      <line x1="110" y1="20" x2="110" y2="170" stroke="#ed8936" stroke-width="1" stroke-dasharray="4,3"/>
      <text x="115" y="100" fill="#ed8936" font-size="10">h = ${h}</text>
      <line x1="110" y1="170" x2="180" y2="170" stroke="#ed8936" stroke-width="1" stroke-dasharray="4,3"/>
      <text x="135" y="185" fill="#ed8936" font-size="10">R = ${R}</text>
      <text x="50" y="100" fill="#48bb78" font-size="11" font-style="italic">V = ?</text>
    </svg>`
    };
  },

  function genCone_hV_to_R() {
    const h = randBetween(3, 200, randPick([0,1,2]));
    const R = randBetween(1, 100, randPick([1,2]));
    const V = Math.PI * R * R * h / 3;
    return {
      id: "gx", category: "geometry", topic: "Cone",
      display: `<b>CONE</b> with height ${h} and volume ${sigFig(V, 3)}. Find the radius.`,
      plain: `Cone: h=${h}, V=${sigFig(V,3)}, find r`,
      answerType: "standard", answer: sigFig(R, 3), tolerance: Math.max(sigFig(R, 3) * 0.005, 0.001), units: "",
      explanation: `V = πr²h/3. r² = 3V/(πh) = ${sigFig(3*V/(Math.PI*h), 4)}. r = ${sigFig(R, 4)}.`,
      svg: `<svg viewBox="0 0 220 200" class="geo-svg">
      <line x1="110" y1="20" x2="40" y2="170" stroke="#667eea" stroke-width="2"/>
      <line x1="110" y1="20" x2="180" y2="170" stroke="#667eea" stroke-width="2"/>
      <ellipse cx="110" cy="170" rx="70" ry="18" fill="none" stroke="#667eea" stroke-width="2"/>
      <line x1="110" y1="20" x2="110" y2="170" stroke="#ed8936" stroke-width="1" stroke-dasharray="4,3"/>
      <text x="115" y="100" fill="#ed8936" font-size="10">h = ${h}</text>
      <text x="130" y="175" fill="#48bb78" font-size="11" text-anchor="middle" font-style="italic">r = ?</text>
      <text x="40" y="100" fill="#8899aa" font-size="10">V = ${sigFig(V,3)}</text>
    </svg>`
    };
  },

  // ── PYRAMID ──
  function genPyramid_sh_to_V() {
    const s = randBetween(2, 200, randPick([0,1,2]));
    const h = randBetween(2, 200, randPick([0,1,2]));
    const V = s * s * h / 3;
    return {
      id: "gx", category: "geometry", topic: "Pyramid",
      display: `<b>SQUARE PYRAMID</b> with base edge ${s} and height ${h}. Find the Volume.`,
      plain: `Square pyramid: base=${s}, h=${h}, find volume`,
      answerType: "standard", answer: sigFig(V, 3), tolerance: Math.max(sigFig(V, 3) * 0.005, 0.001), units: "",
      explanation: `V = (1/3)s²h = (1/3)(${s})²(${h}) = ${sigFig(V, 4)}.`,
      svg: `<svg viewBox="0 0 260 200" class="geo-svg">
      <polygon points="70,160 190,160 210,120 90,120" fill="none" stroke="#667eea" stroke-width="2"/>
      <line x1="70" y1="160" x2="140" y2="25" stroke="#667eea" stroke-width="2"/>
      <line x1="190" y1="160" x2="140" y2="25" stroke="#667eea" stroke-width="2"/>
      <line x1="210" y1="120" x2="140" y2="25" stroke="#667eea" stroke-width="2"/>
      <line x1="90" y1="120" x2="140" y2="25" stroke="#667eea" stroke-width="1" stroke-dasharray="4,3" opacity="0.5"/>
      <line x1="140" y1="25" x2="140" y2="140" stroke="#ed8936" stroke-width="1.5" stroke-dasharray="5,4"/>
      <text x="145" y="90" fill="#ed8936" font-size="11">h=${h}</text>
      <text x="130" y="178" fill="#ed8936" font-size="11" text-anchor="middle">${s}</text>
      <text x="65" y="100" fill="#48bb78" font-size="11" font-style="italic">V = ?</text>
    </svg>`
    };
  },

  // ── RECTANGULAR SOLID ──
  function genRectSolid_to_TSA() {
    const l = randBetween(5, 5000, randPick([0,1]));
    const w = randBetween(5, 5000, randPick([0,1]));
    const h = randBetween(5, 5000, randPick([0,1]));
    const TSA = 2 * (l * w + l * h + w * h);
    return {
      id: "gx", category: "geometry", topic: "Rectangular Solid",
      display: `<b>RECTANGULAR SOLID</b> with dimensions ${l} × ${w} × ${h}. Find the Total Surface Area.`,
      plain: `Rectangular solid: l=${l}, w=${w}, h=${h}, find TSA`,
      answerType: "standard", answer: sigFig(TSA, 3), tolerance: Math.max(sigFig(TSA, 3) * 0.005, 0.001), units: "",
      explanation: `TSA = 2(lw+lh+wh) = 2(${sigFig(l*w,4)}+${sigFig(l*h,4)}+${sigFig(w*h,4)}) = ${sigFig(TSA, 4)}.`,
      svg: `<svg viewBox="0 0 260 180" class="geo-svg">
      <polygon points="30,140 160,140 160,50 30,50" fill="none" stroke="#667eea" stroke-width="2"/>
      <polygon points="30,50 70,20 200,20 160,50" fill="none" stroke="#667eea" stroke-width="2"/>
      <line x1="160" y1="140" x2="200" y2="110" stroke="#667eea" stroke-width="2"/>
      <line x1="200" y1="110" x2="200" y2="20" stroke="#667eea" stroke-width="2"/>
      <text x="85" y="155" fill="#ed8936" font-size="10" text-anchor="middle">${l}</text>
      <text x="205" y="70" fill="#ed8936" font-size="10">${h}</text>
      <text x="175" y="142" fill="#ed8936" font-size="10">${w}</text>
      <text x="80" y="100" fill="#48bb78" font-size="11" font-style="italic">TSA = ?</text>
    </svg>`
    };
  },

  function genRectSolid_to_diag() {
    const l = randBetween(5, 200, randPick([1,2]));
    const w = randBetween(5, 200, randPick([1,2]));
    const h = randBetween(5, 200, randPick([1,2]));
    const d = Math.sqrt(l * l + w * w + h * h);
    return {
      id: "gx", category: "geometry", topic: "Rectangular Solid",
      display: `<b>RECTANGULAR SOLID</b> with dimensions ${l} × ${w} × ${h}. Find the space diagonal.`,
      plain: `Rectangular solid: l=${l}, w=${w}, h=${h}, find diagonal`,
      answerType: "standard", answer: sigFig(d, 3), tolerance: Math.max(sigFig(d, 3) * 0.005, 0.001), units: "",
      explanation: `d = √(l²+w²+h²) = √(${sigFig(l*l,4)}+${sigFig(w*w,4)}+${sigFig(h*h,4)}) = ${sigFig(d, 4)}.`,
      svg: `<svg viewBox="0 0 260 180" class="geo-svg">
      <polygon points="30,140 160,140 160,50 30,50" fill="none" stroke="#667eea" stroke-width="2"/>
      <polygon points="30,50 70,20 200,20 160,50" fill="none" stroke="#667eea" stroke-width="2"/>
      <line x1="160" y1="140" x2="200" y2="110" stroke="#667eea" stroke-width="2"/>
      <line x1="200" y1="110" x2="200" y2="20" stroke="#667eea" stroke-width="2"/>
      <line x1="30" y1="140" x2="200" y2="20" stroke="#48bb78" stroke-width="1.5" stroke-dasharray="5,4"/>
      <text x="85" y="155" fill="#ed8936" font-size="10">${l}</text>
      <text x="175" y="142" fill="#ed8936" font-size="10">${w}</text>
      <text x="205" y="70" fill="#ed8936" font-size="10">${h}</text>
      <text x="100" y="70" fill="#48bb78" font-size="11" font-style="italic">d = ?</text>
    </svg>`
    };
  },

  // ── FRUSTUM ──
  function genFrustum_to_V() {
    const R = randBetween(5, 100, randPick([1,2]));
    const r = randBetween(R * 0.3, R * 0.7, randPick([1,2]));
    const h = randBetween(5, 100, randPick([1,2]));
    const V = Math.PI * h / 3 * (R * R + R * r + r * r);
    return {
      id: "gx", category: "geometry", topic: "Frustum",
      display: `<b>FRUSTUM</b> (truncated cone) with top radius r = ${r}, base radius R = ${R}, and height = ${h}. Find the Volume.`,
      plain: `Frustum: r=${r}, R=${R}, h=${h}, find V`,
      answerType: "standard", answer: sigFig(V, 3), tolerance: Math.max(sigFig(V, 3) * 0.005, 0.001), units: "",
      explanation: `V = (πh/3)(R²+Rr+r²) = (π(${h})/3)(${sigFig(R*R,4)}+${sigFig(R*r,4)}+${sigFig(r*r,4)}) = ${sigFig(V, 4)}.`,
      svg: `<svg viewBox="0 0 240 190" class="geo-svg">
      <line x1="80" y1="30" x2="30" y2="170" stroke="#667eea" stroke-width="2"/>
      <line x1="160" y1="30" x2="210" y2="170" stroke="#667eea" stroke-width="2"/>
      <ellipse cx="120" cy="30" rx="40" ry="10" fill="none" stroke="#667eea" stroke-width="2"/>
      <ellipse cx="120" cy="170" rx="90" ry="15" fill="none" stroke="#667eea" stroke-width="2"/>
      <line x1="120" y1="30" x2="160" y2="30" stroke="#ed8936" stroke-width="1" stroke-dasharray="3,3"/>
      <text x="130" y="25" fill="#ed8936" font-size="9">r=${r}</text>
      <line x1="120" y1="170" x2="210" y2="170" stroke="#ed8936" stroke-width="1" stroke-dasharray="3,3"/>
      <text x="155" y="185" fill="#ed8936" font-size="9">R=${R}</text>
      <text x="215" y="105" fill="#ed8936" font-size="10">h=${h}</text>
      <text x="70" y="110" fill="#48bb78" font-size="11" font-style="italic">V = ?</text>
    </svg>`
    };
  },
];


// ═══════════════════════════════════════════════════
//  ADVANCED GEOMETRY GENERATORS
// ═══════════════════════════════════════════════════

const GEO_GENERATORS_ADVANCED = [

  // ── RIGHT TRIANGLE – TRIG ──
  // Given hyp and angle (rad), find opposite leg
  function genRightTri_trig_opp() {
    const hyp = randBetween(0.5, 2000, randPick([0,1,2,3]));
    const angleDeg = randBetween(15, 75, 1);
    const angleRad = angleDeg * Math.PI / 180;
    const useRad = Math.random() > 0.5;
    const opp = hyp * Math.sin(angleRad);
    const angleStr = useRad ? sigFig(angleRad, 3) + ' rad' : angleDeg + '°';
    return {
      id: "gx", category: "geometry", topic: "Right Triangle",
      display: `<b>RIGHT TRIANGLE</b> with hypotenuse ${hyp} and angle ${angleStr}. Find the opposite leg.`,
      plain: `Right triangle: hyp=${hyp}, angle=${angleStr}, find opp`,
      answerType: "standard", answer: sigFig(opp, 3), tolerance: Math.max(sigFig(opp, 3) * 0.005, 0.001), units: "",
      explanation: `opp = hyp × sin(${angleStr}) = ${hyp} × ${sigFig(Math.sin(angleRad), 4)} = ${sigFig(opp, 4)}.`,
      svg: `<svg viewBox="0 0 260 180" class="geo-svg">
      <polygon points="40,150 220,150 220,40" fill="none" stroke="#667eea" stroke-width="2"/>
      <rect x="212" y="142" width="8" height="8" fill="none" stroke="#8899aa" stroke-width="1"/>
      <text x="140" y="88" fill="#ed8936" font-size="12" transform="rotate(-31,140,88)">${hyp}</text>
      <path d="M 60,150 A 20,20 0 0,0 55,135" fill="none" stroke="#ed8936" stroke-width="1.5"/>
      <text x="63" y="133" fill="#ed8936" font-size="11">${angleStr}</text>
      <text x="232" y="100" fill="#48bb78" font-size="12" font-style="italic">? = x</text>
    </svg>`
    };
  },

  // Given angle and adjacent, find opposite
  function genRightTri_trig_tan() {
    const adj = randBetween(10, 5000, randPick([0,1]));
    const angleDeg = randBetween(10, 70, 1);
    const angleRad = angleDeg * Math.PI / 180;
    const useRad = Math.random() > 0.5;
    const opp = adj * Math.tan(angleRad);
    const angleStr = useRad ? sigFig(angleRad, 3) + ' rad' : angleDeg + '°';
    return {
      id: "gx", category: "geometry", topic: "Right Triangle",
      display: `<b>RIGHT TRIANGLE</b> with angle = ${angleStr} and adjacent side = ${adj}. Find the opposite side.`,
      plain: `Right triangle: θ=${angleStr}, adj=${adj}, find opp`,
      answerType: "standard", answer: sigFig(opp, 3), tolerance: Math.max(sigFig(opp, 3) * 0.005, 0.001), units: "",
      explanation: `opp = adj × tan(${angleStr}) = ${adj} × ${sigFig(Math.tan(angleRad), 4)} = ${sigFig(opp, 4)}.`,
      svg: `<svg viewBox="0 0 240 180" class="geo-svg">
      <polygon points="30,160 220,160 220,40" fill="none" stroke="#667eea" stroke-width="2"/>
      <rect x="212" y="152" width="8" height="8" fill="none" stroke="#8899aa" stroke-width="1"/>
      <path d="M 55,160 A 25,25 0 0,0 45,142" fill="none" stroke="#ed8936" stroke-width="1.5"/>
      <text x="55" y="140" fill="#ed8936" font-size="10">${angleStr}</text>
      <text x="115" y="178" fill="#ed8936" font-size="11">${adj}</text>
      <text x="225" y="105" fill="#48bb78" font-size="11" font-style="italic">?</text>
    </svg>`
    };
  },

  // Given hyp and leg, find angle (degrees)
  function genRightTri_trig_angle_deg() {
    const angleDeg = randBetween(15, 75, 1);
    const angleRad = angleDeg * Math.PI / 180;
    const hyp = randBetween(0.5, 5000, randPick([0,1,2,3]));
    const leg = hyp * Math.sin(angleRad);
    return {
      id: "gx", category: "geometry", topic: "Right Triangle",
      display: `<b>RIGHT TRIANGLE</b> with hypotenuse = ${sigFig(hyp, 4)} and one leg = ${sigFig(leg, 3)}. Find the angle (in degrees) opposite that leg.`,
      plain: `Right triangle: hyp=${sigFig(hyp,4)}, leg=${sigFig(leg,3)}, find angle (deg)`,
      answerType: "standard", answer: sigFig(angleDeg, 3), tolerance: 0.5, units: "deg",
      explanation: `sin(θ) = ${sigFig(leg,3)}/${sigFig(hyp,4)} = ${sigFig(Math.sin(angleRad), 4)}. θ = arcsin(...) = ${sigFig(angleDeg, 4)}°.`,
      svg: `<svg viewBox="0 0 260 180" class="geo-svg">
      <polygon points="40,150 220,150 40,50" fill="none" stroke="#667eea" stroke-width="2"/>
      <rect x="40" y="142" width="8" height="8" fill="none" stroke="#8899aa" stroke-width="1"/>
      <text x="22" y="105" fill="#ed8936" font-size="12">${sigFig(leg,3)}</text>
      <text x="140" y="92" fill="#ed8936" font-size="12" transform="rotate(-25,140,92)">${sigFig(hyp,4)}</text>
      <path d="M 205,150 A 18,18 0 0,0 200,134" fill="none" stroke="#48bb78" stroke-width="1.5"/>
      <text x="180" y="130" fill="#48bb78" font-size="11" font-style="italic">θ = ?</text>
    </svg>`
    };
  },

  // Given hyp and leg, find angle (radians)
  function genRightTri_trig_angle_rad() {
    const angleDeg = randBetween(15, 75, 1);
    const angleRad = angleDeg * Math.PI / 180;
    const hyp = randBetween(10, 5000, randPick([0,1]));
    const leg = hyp * Math.sin(angleRad);
    return {
      id: "gx", category: "geometry", topic: "Right Triangle",
      display: `<b>RIGHT TRIANGLE</b> with hypotenuse ${sigFig(hyp, 4)} and one leg ${sigFig(leg, 3)}. Find the angle (in rad) opposite that leg.`,
      plain: `Right triangle: hyp=${sigFig(hyp,4)}, leg=${sigFig(leg,3)}, find angle (rad)`,
      answerType: "standard", answer: sigFig(angleRad, 3), tolerance: Math.max(sigFig(angleRad, 3) * 0.005, 0.001), units: "rad",
      explanation: `sin(θ) = ${sigFig(leg,3)}/${sigFig(hyp,4)} = ${sigFig(Math.sin(angleRad), 4)}. θ = arcsin(...) = ${sigFig(angleRad, 4)} rad.`,
      svg: `<svg viewBox="0 0 260 180" class="geo-svg">
      <polygon points="40,150 220,150 40,40" fill="none" stroke="#667eea" stroke-width="2"/>
      <rect x="40" y="142" width="8" height="8" fill="none" stroke="#8899aa" stroke-width="1"/>
      <text x="130" y="168" fill="#ed8936" font-size="12" text-anchor="middle">${sigFig(leg,3)}</text>
      <text x="142" y="88" fill="#ed8936" font-size="12" transform="rotate(-32,142,88)">${sigFig(hyp,4)}</text>
      <path d="M 205,150 A 20,20 0 0,0 210,135" fill="none" stroke="#48bb78" stroke-width="1.5"/>
      <text x="193" y="132" fill="#48bb78" font-size="12">θ = ?</text>
      <text x="80" y="175" fill="#8899aa" font-size="11">rad</text>
    </svg>`
    };
  },

  // ── SCALENE TRIANGLE (law of cosines) ──
  function genScalene_cosine() {
    const a = randBetween(100, 8000, randPick([0,1]));
    const b = randBetween(100, 8000, randPick([0,1]));
    const C = randBetween(20, 140, 1);
    const Crad = C * Math.PI / 180;
    const c = Math.sqrt(a * a + b * b - 2 * a * b * Math.cos(Crad));
    return {
      id: "gx", category: "geometry", topic: "Scalene Triangle",
      display: `<b>SCALENE TRIANGLE</b>: sides ${a} and ${b}, angle between them ${C}°. Find the third side.`,
      plain: `Scalene triangle: a=${a}, b=${b}, C=${C}°, find c`,
      answerType: "standard", answer: sigFig(c, 3), tolerance: Math.max(sigFig(c, 3) * 0.005, 0.001), units: "",
      explanation: `c² = a²+b²−2ab·cos(C) = ${sigFig(a*a,4)}+${sigFig(b*b,4)}−2(${a})(${b})cos(${C}°) = ${sigFig(c*c,4)}. c = ${sigFig(c, 4)}.`,
      svg: `<svg viewBox="0 0 260 180" class="geo-svg">
      <polygon points="30,150 240,150 170,30" fill="none" stroke="#667eea" stroke-width="2"/>
      <text x="125" y="168" fill="#ed8936" font-size="10">${a}</text>
      <text x="210" y="90" fill="#ed8936" font-size="10">${b}</text>
      <path d="M 60,150 A 30,30 0 0,0 45,125" fill="none" stroke="#ed8936" stroke-width="1.5"/>
      <text x="55" y="130" fill="#ed8936" font-size="9">${C}°</text>
      <text x="80" y="80" fill="#48bb78" font-size="11" font-style="italic">c = ?</text>
    </svg>`
    };
  },

  // ── SCALENE TRIANGLE (law of sines) ──
  function genScalene_sines() {
    let A, B, C;
    do {
      A = randBetween(30, 100, 1);
      B = randBetween(20, 150 - A, 1);
      C = 180 - A - B;
    } while (C <= 5 || C >= 170);
    const Arad = A * Math.PI / 180;
    const Crad = C * Math.PI / 180;
    const a = randBetween(0.3, 2000, randPick([0,1,2,3]));
    const c = a * Math.sin(Crad) / Math.sin(Arad);
    return {
      id: "gx", category: "geometry", topic: "Scalene Triangle",
      display: `<b>SCALENE TRIANGLE</b>: One side ${a}, angles ${A}° and ${B}°. Find the side opposite the remaining angle (${C}°).`,
      plain: `Scalene triangle: side=${a} opposite ${A}°, angles ${A}° and ${B}°, find side opposite ${C}°`,
      answerType: "standard", answer: sigFig(c, 3), tolerance: Math.max(sigFig(c, 3) * 0.005, 0.001), units: "",
      explanation: `Third angle = ${C}°. Law of sines: x/sin(${C}°) = ${a}/sin(${A}°). x = ${a}×sin(${C}°)/sin(${A}°) = ${sigFig(c, 4)}.`,
      svg: `<svg viewBox="0 0 260 170" class="geo-svg">
      <polygon points="40,140 220,140 150,30" fill="none" stroke="#667eea" stroke-width="2"/>
      <text x="50" y="135" fill="#ed8936" font-size="10">${A}°</text>
      <text x="195" y="135" fill="#ed8936" font-size="10">${B}°</text>
      <text x="130" y="155" fill="#ed8936" font-size="10" text-anchor="middle">${a}</text>
      <text x="195" y="80" fill="#48bb78" font-size="11" transform="rotate(-60,195,80)">x = ?</text>
    </svg>`
    };
  },

  // ── INSCRIBED: Circle in equilateral triangle ──
  function genInscribed_circle_in_eqTri() {
    const s = randBetween(50, 9000, randPick([0,1]));
    const r = s / (2 * Math.sqrt(3));
    return {
      id: "gx", category: "geometry", topic: "Inscribed",
      display: `<b>CIRCLE AND EQUILATERAL TRIANGLE</b>: A circle is inscribed in an equilateral triangle with side = ${s}. Find the radius of the inscribed circle.`,
      plain: `Equilateral triangle s=${s} with inscribed circle, find r`,
      answerType: "standard", answer: sigFig(r, 3), tolerance: Math.max(sigFig(r, 3) * 0.005, 0.001), units: "",
      explanation: `r = s/(2√3) = ${s}/${sigFig(2*Math.sqrt(3), 4)} = ${sigFig(r, 4)}.`,
      svg: `<svg viewBox="0 0 240 190" class="geo-svg">
      <polygon points="120,6 30,162 210,162" fill="none" stroke="#667eea" stroke-width="2"/>
      <circle cx="120" cy="110" r="52" fill="none" stroke="#ed8936" stroke-width="1.5"/>
      <text x="120" y="178" fill="#ed8936" font-size="11" text-anchor="middle">s = ${s}</text>
      <line x1="120" y1="110" x2="172" y2="110" stroke="#48bb78" stroke-width="1" stroke-dasharray="4,3"/>
      <text x="135" y="103" fill="#48bb78" font-size="10" font-style="italic">r = ?</text>
    </svg>`
    };
  },

  // ── CIRCUMSCRIBED: equilateral triangle in circle ──
  function genCircumscribed_eqTri_in_circle() {
    const R = randBetween(2, 500, randPick([1,2]));
    const s = R * Math.sqrt(3);
    return {
      id: "gx", category: "geometry", topic: "Circumscribed",
      display: `<b>EQUILATERAL TRIANGLE AND CIRCLE</b>: An equilateral triangle is inscribed in a circle with Radius = ${R}. Find the side of the triangle.`,
      plain: `Circle R=${R} with inscribed equilateral triangle, find side`,
      answerType: "standard", answer: sigFig(s, 3), tolerance: Math.max(sigFig(s, 3) * 0.005, 0.001), units: "",
      explanation: `s = R√3 = ${R} × 1.7321 = ${sigFig(s, 4)}.`,
      svg: `<svg viewBox="0 0 220 190" class="geo-svg">
      <circle cx="110" cy="100" r="75" fill="none" stroke="#667eea" stroke-width="2"/>
      <polygon points="110,25 45,138 175,138" fill="none" stroke="#ed8936" stroke-width="1.5"/>
      <line x1="110" y1="100" x2="185" y2="100" stroke="#ed8936" stroke-width="1" stroke-dasharray="4,3"/>
      <text x="140" y="93" fill="#ed8936" font-size="10">R = ${R}</text>
      <text x="110" y="155" fill="#48bb78" font-size="11" font-style="italic" text-anchor="middle">s = ?</text>
    </svg>`
    };
  },
];


// ═══════════════════════════════════════════════════
//  MASTER GENERATOR
// ═══════════════════════════════════════════════════

const ALL_GEO_GENERATORS = [
  ...GEO_GENERATORS_BASIC,
  ...GEO_GENERATORS_3D,
  ...GEO_GENERATORS_ADVANCED,
];

// Generate N unique random geometry problems
function generateGeometryProblems(n) {
  const problems = [];
  for (let i = 0; i < n; i++) {
    const gen = ALL_GEO_GENERATORS[Math.floor(Math.random() * ALL_GEO_GENERATORS.length)];
    const p = gen();
    p.id = 'gdyn_' + i;
    problems.push(p);
  }
  return problems;
}

// Expose the generator function globally
window.generateGeometryProblems = generateGeometryProblems;
