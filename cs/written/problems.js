// UIL Computer Science – Problem Bank Loader
// Merges all topic-specific problem files into CS_QUESTIONS
//
// Individual problem files (loaded before this via <script> tags):
//   problems/base-conversions.js   → BASE_CONVERSION_PROBLEMS
//   problems/java-basics.js        → JAVA_BASICS_PROBLEMS
//   problems/strings-math.js       → STRINGS_MATH_PROBLEMS
//   problems/boolean-logic.js      → BOOLEAN_LOGIC_PROBLEMS
//   problems/control-flow.js       → CONTROL_FLOW_PROBLEMS
//   problems/arrays-collections.js → ARRAYS_COLLECTIONS_PROBLEMS
//   problems/oop.js                → OOP_PROBLEMS
//   problems/data-structures.js    → DATA_STRUCTURES_PROBLEMS
//   problems/code-tracing.js       → CODE_TRACING_PROBLEMS

const CS_QUESTIONS = [
  ...BASE_CONVERSION_PROBLEMS,
  ...JAVA_BASICS_PROBLEMS,
  ...STRINGS_MATH_PROBLEMS,
  ...BOOLEAN_LOGIC_PROBLEMS,
  ...CONTROL_FLOW_PROBLEMS,
  ...ARRAYS_COLLECTIONS_PROBLEMS,
  ...OOP_PROBLEMS,
  ...DATA_STRUCTURES_PROBLEMS,
  ...CODE_TRACING_PROBLEMS,
];

// ── TOPIC DEFINITIONS ──
const TOPICS = {};
CS_QUESTIONS.forEach(q => {
  if (!TOPICS[q.topic]) TOPICS[q.topic] = { topic: q.topic, count: 0 };
  TOPICS[q.topic].count++;
});

// ── HELPER FUNCTIONS ──
function getTopics() {
  const order = [
    'Base Conversions', 'Java Basics', 'Strings & Math', 'Boolean Logic',
    'Control Flow', 'Arrays & Collections', 'OOP', 'Data Structures & Algorithms',
    'Code Tracing'
  ];
  return Object.values(TOPICS).sort((a, b) => order.indexOf(a.topic) - order.indexOf(b.topic));
}

function getQuestionsForTopic(topic) {
  return CS_QUESTIONS.filter(q => q.topic === topic);
}

function getAllQuestions() {
  return [...CS_QUESTIONS];
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
