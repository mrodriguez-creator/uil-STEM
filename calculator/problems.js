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
  return Object.values(CALC_TOPICS).filter(t => t.category === category);
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
