// UIL Calculator Applications – Problem Bank Loader
// Merges all sub-category problem files into CALC_PROBLEMS
//
// Individual problem files (loaded before this via <script> tags):
//   problems/numerical.js       → NUMERICAL_PROBLEMS
//   problems/stated.js          → STATED_PROBLEMS
//   problems/geometry-basic.js  → GEOMETRY_BASIC_PROBLEMS
//   problems/geometry-3d.js     → GEOMETRY_3D_PROBLEMS
//   problems/geometry-advanced.js → GEOMETRY_ADVANCED_PROBLEMS

const CALC_PROBLEMS = [
  ...NUMERICAL_PROBLEMS,
  ...STATED_PROBLEMS,
  ...GEOMETRY_BASIC_PROBLEMS,
  ...GEOMETRY_3D_PROBLEMS,
  ...GEOMETRY_ADVANCED_PROBLEMS,
];

// Utility: shuffle an array (Fisher-Yates)
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
