// Validation script for programming problem banks
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'problems');
const files = ['starter.js', 'easy.js', 'medium.js', 'hard.js', 'advanced.js'];
const constants = ['STARTER_PROBLEMS', 'EASY_PROBLEMS', 'MEDIUM_PROBLEMS', 'HARD_PROBLEMS', 'ADVANCED_PROBLEMS'];

let allProblems = [];
let errors = 0;

files.forEach((file, idx) => {
  const filePath = path.join(dir, file);
  if (!fs.existsSync(filePath)) {
    console.log(`MISSING: ${file}`);
    errors++;
    return;
  }

  const code = fs.readFileSync(filePath, 'utf8');
  try {
    const fn = new Function(code + `; return ${constants[idx]};`);
    const probs = fn();
    console.log(`${file}: ${probs.length} problems`);

    probs.forEach(p => {
      // Validate required fields
      const required = ['id', 'name', 'difficulty', 'description', 'sampleOutput', 'testCases', 'starterCode', 'concepts'];
      required.forEach(field => {
        if (!p[field]) {
          console.log(`  ERROR: ${p.id || '??'} missing field: ${field}`);
          errors++;
        }
      });

      if (!p.testCases || p.testCases.length < 1) {
        console.log(`  ERROR: ${p.id} has no test cases`);
        errors++;
      }

      p.testCases.forEach((tc, i) => {
        if (tc.expected === undefined || tc.expected === null) {
          console.log(`  ERROR: ${p.id} test case ${i} missing expected output`);
          errors++;
        }
      });

      console.log(`  ${p.id}: ${p.name} (${p.difficulty}) - ${p.testCases.length} test cases - [${p.concepts.join(', ')}]`);
      allProblems.push(p);
    });
  } catch (e) {
    console.log(`ERROR in ${file}: ${e.message}`);
    errors++;
  }
});

// Check for duplicate IDs
const ids = allProblems.map(p => p.id);
const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
if (dupes.length > 0) {
  console.log(`\nDUPLICATE IDs: ${dupes.join(', ')}`);
  errors++;
} else {
  console.log(`\nAll ${ids.length} IDs are unique`);
}

console.log(`\nTotal: ${allProblems.length} problems, ${errors} errors`);
process.exit(errors > 0 ? 1 : 0);
