// UIL Mathematics – Problem Bank Loader
// Merges all topic-specific problem files into MATH_QUESTIONS
//
// Individual problem files (loaded before this via <script> tags):
//   problems/algebra.js        → ALGEBRA_PROBLEMS
//   problems/geometry.js       → GEOMETRY_PROBLEMS
//   problems/trigonometry.js   → TRIGONOMETRY_PROBLEMS
//   problems/precalculus.js    → PRECALCULUS_PROBLEMS
//   problems/calculus.js       → CALCULUS_PROBLEMS
//   problems/statistics.js     → STATISTICS_PROBLEMS
//   problems/word-problems.js  → WORD_PROBLEMS

const MATH_QUESTIONS = [
  ...ALGEBRA_PROBLEMS,
  ...GEOMETRY_PROBLEMS,
  ...TRIGONOMETRY_PROBLEMS,
  ...PRECALCULUS_PROBLEMS,
  ...CALCULUS_PROBLEMS,
  ...STATISTICS_PROBLEMS,
  ...WORD_PROBLEMS,
];

// ── TOPIC DEFINITIONS ──
const TOPICS = {};
MATH_QUESTIONS.forEach(q => {
  if (!TOPICS[q.topic]) TOPICS[q.topic] = { topic: q.topic, count: 0 };
  TOPICS[q.topic].count++;
});

// ── HELPER FUNCTIONS ──
function getTopics() {
  return Object.values(TOPICS).sort((a, b) => {
    const order = ['Algebra', 'Geometry', 'Trigonometry', 'Pre-Calculus', 'Calculus', 'Statistics', 'Word Problems'];
    return order.indexOf(a.topic) - order.indexOf(b.topic);
  });
}

function getQuestionsForTopic(topic) {
  return MATH_QUESTIONS.filter(q => q.topic === topic);
}

function getAllQuestions() {
  return [...MATH_QUESTIONS];
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
