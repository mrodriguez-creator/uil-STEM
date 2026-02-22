// UIL Calculator Applications – Problem Bank Loader
// Merges all sub-category problem files into CALC_PROBLEMS
// Also generates dynamic geometry problems with random values each session
//
// Individual problem files (loaded before this via <script> tags):
//   problems/numerical.js           → NUMERICAL_PROBLEMS
//   problems/stated.js              → STATED_PROBLEMS
//   problems/geometry-basic.js      → GEOMETRY_BASIC_PROBLEMS
//   problems/geometry-3d.js         → GEOMETRY_3D_PROBLEMS
//   problems/geometry-advanced.js   → GEOMETRY_ADVANCED_PROBLEMS
//   problems/geometry-generators.js → generateGeometryProblems()

// Generate fresh geometry problems with random values each session
let GENERATED_GEOMETRY = [];
try {
  GENERATED_GEOMETRY = generateGeometryProblems(80);
} catch (e) {
  console.error('Geometry generator error:', e);
}

const CALC_PROBLEMS = [
  ...NUMERICAL_PROBLEMS,
  ...STATED_PROBLEMS,
  ...GEOMETRY_BASIC_PROBLEMS,
  ...GEOMETRY_3D_PROBLEMS,
  ...GEOMETRY_ADVANCED_PROBLEMS,
  ...GENERATED_GEOMETRY,
];

// ── CATEGORY / TOPIC METADATA ──
const CATEGORIES = {
  numerical: { name: "Numerical", icon: "🔢", color: "#667eea" },
  stated:    { name: "Stated",    icon: "📝", color: "#48bb78" },
  geometry:  { name: "Geometry",  icon: "📐", color: "#ed8936" }
};

// ── TOPIC ORDERING BY UIL TEST PAGE POSITION ──
// Based on the official UIL Calculator Applications Drill Manual layout.
// Each test page has 10 problems: 1-5 Numerical, 6-8 Stated, 9-10 Geometry.
// Topics are ordered by the page where they typically appear on the contest.
const TOPIC_ORDER = {
  // ── NUMERICAL: positions 1-5 per page, easiest to hardest ──
  'numerical|Arithmetic':           { sort: 1, page: 'Pg 1' },    // Easy expressions
  'numerical|Complex Expressions':  { sort: 2, page: 'Pg 2' },    // Harder fractions/multi-step
  'numerical|Powers & Roots':       { sort: 3, page: 'Pg 3' },    // Powers, roots, nested radicals
  'numerical|Mixed Advanced':       { sort: 4, page: 'Pg 4' },    // Hard mixed expressions
  'numerical|Exponentials':         { sort: 5, page: 'Pg 5' },    // e^x, 10^x expressions
  'numerical|Logarithms':           { sort: 6, page: 'Pg 5-6' },  // Log, Ln expressions
  'numerical|Trigonometry':         { sort: 7, page: 'Pg 6-7' },  // sin/cos/tan/arctan

  // ── STATED: positions 6-8 per page ──
  // Page 1: Easy General (translation, dollar, integer)
  'stated|Translation':             { sort: 1, page: 'Pg 1' },
  'stated|Dollar':                  { sort: 2, page: 'Pg 1' },
  'stated|Integer':                 { sort: 3, page: 'Pg 1' },
  // Page 2-3: Medium General (unit conversion, rate, percent, geometry word)
  'stated|Unit Conversion':         { sort: 4, page: 'Pg 2' },
  'stated|Conversion':              { sort: 5, page: 'Pg 2' },
  'stated|Rate':                    { sort: 6, page: 'Pg 2-3' },
  'stated|Percent':                 { sort: 7, page: 'Pg 2-3' },
  'stated|Geometry Word':           { sort: 8, page: 'Pg 2-3' },
  'stated|SD':                      { sort: 9, page: 'Pg 3' },
  'stated|Compound Interest':       { sort: 10, page: 'Pg 3-4' },
  // Page 4: Hard General
  'stated|Mixed Advanced':          { sort: 11, page: 'Pg 4' },
  // Page 5: Scaling, Best-Fit Line, Solver
  'stated|Statistics':              { sort: 12, page: 'Pg 5' },
  // Page 6: Calculus, Matrices
  'stated|Calculus':                { sort: 13, page: 'Pg 6' },
  'stated|Matrix':                  { sort: 14, page: 'Pg 6' },
  // Page 7: Study List (optimization, hard problems)
  'stated|Optimization':            { sort: 15, page: 'Pg 7' },

  // ── GEOMETRY: positions 9-10 per page ──
  // Page 1: Simple, One-Step Non-Triangular Shapes
  'geometry|Circle':                { sort: 1, page: 'Pg 1' },
  'geometry|Semicircle':            { sort: 2, page: 'Pg 1' },
  'geometry|Quarter Circle':        { sort: 3, page: 'Pg 1' },
  'geometry|Square':                { sort: 4, page: 'Pg 1' },
  'geometry|Rectangle':             { sort: 5, page: 'Pg 1' },
  'geometry|Rhombus':               { sort: 6, page: 'Pg 1' },
  'geometry|Parallelogram':         { sort: 7, page: 'Pg 1' },
  'geometry|Trapezoid':             { sort: 8, page: 'Pg 1' },
  'geometry|Equilateral Triangle':  { sort: 9, page: 'Pg 1' },
  'geometry|Hexagon':               { sort: 10, page: 'Pg 1' },
  'geometry|Sector':                { sort: 11, page: 'Pg 1' },
  'geometry|Annulus':               { sort: 12, page: 'Pg 1' },
  'geometry|Ellipse':               { sort: 13, page: 'Pg 1' },
  // Page 2: Right Triangles (Pythagorean, Sine, Cosine, Tangent)
  'geometry|Right Triangle':        { sort: 14, page: 'Pg 2' },
  // Page 3: Simple, One-Step Solid Geometry
  'geometry|Sphere':                { sort: 15, page: 'Pg 3' },
  'geometry|Hemisphere':            { sort: 16, page: 'Pg 3' },
  'geometry|Cuboid':                { sort: 17, page: 'Pg 3' },
  'geometry|Rectangular Solid':     { sort: 18, page: 'Pg 3' },
  'geometry|Cylinder':              { sort: 19, page: 'Pg 3' },
  'geometry|Cone':                  { sort: 20, page: 'Pg 3' },
  'geometry|Frustum':               { sort: 21, page: 'Pg 3' },
  'geometry|Pyramid':               { sort: 22, page: 'Pg 3' },
  'geometry|Prism':                 { sort: 23, page: 'Pg 3' },
  // Page 4: Inscribed/Circumscribed + Law of Sines/Cosines
  'geometry|Inscribed':             { sort: 24, page: 'Pg 4' },
  'geometry|Circumscribed':         { sort: 25, page: 'Pg 4' },
  'geometry|Scalene Triangle':      { sort: 26, page: 'Pg 4' },
  // Page 5-6: Medium/Hard Solid + Combined + Calculus Geometry
  'geometry|Combined':              { sort: 27, page: 'Pg 5-6' },
};

// Build topic index from problem bank
const CALC_TOPICS = {};
CALC_PROBLEMS.forEach(q => {
  const key = q.category + "|" + q.topic;
  if (!CALC_TOPICS[key]) {
    CALC_TOPICS[key] = { category: q.category, topic: q.topic, count: 0 };
  }
  CALC_TOPICS[key].count++;
});

function getCalcTopicsForCategory(category) {
  return Object.values(CALC_TOPICS)
    .filter(t => t.category === category)
    .sort((a, b) => {
      const ka = a.category + '|' + a.topic;
      const kb = b.category + '|' + b.topic;
      const oa = TOPIC_ORDER[ka] ? TOPIC_ORDER[ka].sort : 999;
      const ob = TOPIC_ORDER[kb] ? TOPIC_ORDER[kb].sort : 999;
      return oa - ob;
    });
}

function getTopicPage(category, topic) {
  const key = category + '|' + topic;
  return TOPIC_ORDER[key] ? TOPIC_ORDER[key].page : '';
}

function getCalcProblemsForTopic(category, topic) {
  return CALC_PROBLEMS.filter(q => q.category === category && q.topic === topic);
}

function getCalcProblemsForCategory(category) {
  return CALC_PROBLEMS.filter(q => q.category === category);
}

// Utility: shuffle an array (Fisher-Yates)
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
