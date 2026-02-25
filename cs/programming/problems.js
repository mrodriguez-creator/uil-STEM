// UIL CS Programming Trainer – Problem Loader
// Merges all difficulty-level problem files into a single PROBLEMS array

const PROBLEMS = [
  ...EASY_PROBLEMS,
  ...MEDIUM_PROBLEMS,
  ...HARD_PROBLEMS,
  ...ADVANCED_PROBLEMS,
];

// Validate on load
console.log(`[UIL Programming] Loaded ${PROBLEMS.length} problems:`);
console.log(`  Easy: ${EASY_PROBLEMS.length}`);
console.log(`  Medium: ${MEDIUM_PROBLEMS.length}`);
console.log(`  Hard: ${HARD_PROBLEMS.length}`);
console.log(`  Advanced: ${ADVANCED_PROBLEMS.length}`);

// Check for duplicate IDs
const ids = PROBLEMS.map(p => p.id);
const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
if (dupes.length > 0) {
  console.warn(`[UIL Programming] Duplicate problem IDs found: ${dupes.join(', ')}`);
}
