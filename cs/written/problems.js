// UIL CS Written Test – Problem Bank Loader
// Merges all topic arrays into one flat list and provides helpers.

const CS_QUESTIONS = [
  ...BASE_CONVERSION_PROBLEMS,
  ...BOOLEAN_LOGIC_PROBLEMS,
  ...DATA_TYPES_PROBLEMS,
  ...STRING_METHODS_PROBLEMS,
  ...MATH_CLASS_PROBLEMS,
  ...COLLECTIONS_PROBLEMS,
  ...BIG_O_PROBLEMS,
  ...SORTING_SEARCHING_PROBLEMS,
  ...DATA_STRUCTURES_PROBLEMS,
  ...POLISH_NOTATION_PROBLEMS,
];

// Build topic index
const TOPICS = {};
CS_QUESTIONS.forEach(q => {
  if (!TOPICS[q.topic]) TOPICS[q.topic] = { topic: q.topic, count: 0 };
  TOPICS[q.topic].count++;
});

// Canonical topic order
const TOPIC_ORDER = [
  'Base Conversions', 'Boolean Logic', 'Data Types & Operators',
  'String Methods', 'Math Class', 'Collections API',
  'Big-O Analysis', 'Sorting & Searching', 'Data Structures',
  'Polish Notation'
];

function getTopics() {
  return Object.values(TOPICS).sort((a, b) =>
    TOPIC_ORDER.indexOf(a.topic) - TOPIC_ORDER.indexOf(b.topic)
  );
}

function getQuestionsForTopic(topic) {
  return CS_QUESTIONS.filter(q => q.topic === topic);
}

function getAllQuestions() {
  return [...CS_QUESTIONS];
}

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
