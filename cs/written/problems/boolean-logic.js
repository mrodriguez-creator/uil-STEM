// UIL CS Written Test – Boolean Logic & Digital Electronics
const BOOLEAN_LOGIC_PROBLEMS = [

  // ── BASIC BOOLEAN EVALUATION ──
  { id: "bl1", topic: "Boolean Logic", difficulty: 1, question: "What is the result of <code>true && false</code>?", choices: ["<code>true</code>", "<code>false</code>", "Compile error", "Runtime error", "Undefined"], answer: 1, hint: "AND requires both operands to be true", explanation: "true AND false = false. Both must be true for AND to return true." },
  { id: "bl2", topic: "Boolean Logic", difficulty: 1, question: "What is the result of <code>true || false</code>?", choices: ["<code>true</code>", "<code>false</code>", "Compile error", "Runtime error", "Undefined"], answer: 0, hint: "OR requires at least one operand to be true", explanation: "true OR false = true. At least one is true." },
  { id: "bl3", topic: "Boolean Logic", difficulty: 1, question: "What is the result of <code>!true</code>?", choices: ["<code>true</code>", "<code>false</code>", "<code>0</code>", "<code>1</code>", "Compile error"], answer: 1, hint: "NOT inverts the boolean value", explanation: "NOT true = false." },
  { id: "bl4", topic: "Boolean Logic", difficulty: 2, question: "What is the result of <code>!(true && false) || true</code>?", choices: ["<code>true</code>", "<code>false</code>", "Compile error", "Depends on evaluation order", "None of the above"], answer: 0, hint: "Evaluate inner AND first, then NOT, then OR", explanation: "true && false = false. !false = true. true || true = true." },

  // ── BOOLEAN ALGEBRA / DE MORGAN'S ──
  { id: "bl5", topic: "Boolean Logic", difficulty: 2, question: "By De Morgan's Law, <code>!(A && B)</code> is equivalent to:", choices: ["<code>!A && !B</code>", "<code>!A || !B</code>", "<code>A || B</code>", "<code>!(A || B)</code>", "<code>A && B</code>"], answer: 1, hint: "NOT of AND becomes OR of NOTs", explanation: "De Morgan's Law: !(A && B) = !A || !B." },
  { id: "bl6", topic: "Boolean Logic", difficulty: 2, question: "By De Morgan's Law, <code>!(A || B)</code> is equivalent to:", choices: ["<code>!A && !B</code>", "<code>!A || !B</code>", "<code>A && B</code>", "<code>!(A && B)</code>", "<code>A || B</code>"], answer: 0, hint: "NOT of OR becomes AND of NOTs", explanation: "De Morgan's Law: !(A || B) = !A && !B." },
  { id: "bl7", topic: "Boolean Logic", difficulty: 3, question: "Which expression is equivalent to <code>!(A || !B)</code>?", choices: ["<code>!A && B</code>", "<code>!A || B</code>", "<code>A && !B</code>", "<code>A || B</code>", "<code>!A && !B</code>"], answer: 0, hint: "Apply De Morgan's, then simplify double negation", explanation: "!(A || !B) = !A && !!B = !A && B (De Morgan's + double negation)." },
  { id: "bl8", topic: "Boolean Logic", difficulty: 3, question: "Which Boolean identity is correct?", choices: ["A AND 0 = A", "A OR 1 = A", "A XOR A = A", "A AND 1 = A", "A OR A = 0"], answer: 3, hint: "AND with 1 (true) preserves the value", explanation: "A AND 1 = A (identity law). A AND 0 = 0, A OR 1 = 1, A XOR A = 0." },

  // ── XOR ──
  { id: "bl9", topic: "Boolean Logic", difficulty: 2, question: "What is the result of <code>true ^ true</code> in Java?", choices: ["<code>true</code>", "<code>false</code>", "Compile error", "<code>0</code>", "<code>1</code>"], answer: 1, hint: "XOR returns true only when the operands differ", explanation: "true XOR true = false. XOR is true when exactly one operand is true." },
  { id: "bl10", topic: "Boolean Logic", difficulty: 2, question: "What is <code>true ^ false ^ true</code>?", choices: ["<code>true</code>", "<code>false</code>", "Compile error", "Depends on grouping", "Runtime error"], answer: 1, hint: "XOR is associative — evaluate left to right", explanation: "true ^ false = true. true ^ true = false." },

  // ── TRUTH TABLES ──
  { id: "bl11", topic: "Boolean Logic", difficulty: 2, question: "How many rows are in a truth table for an expression with 3 Boolean variables?", choices: ["3", "4", "6", "8", "16"], answer: 3, hint: "Each variable has 2 possible values", explanation: "2³ = 8 rows for 3 variables." },
  { id: "bl12", topic: "Boolean Logic", difficulty: 3, question: "For the expression A AND (B OR C), how many input combinations produce <code>true</code>?", choices: ["1", "2", "3", "4", "5"], answer: 2, hint: "A must be true, and at least one of B or C must be true", explanation: "A=1: (B OR C) is true for BC = 01, 10, 11. So 3 combinations: (1,0,1), (1,1,0), (1,1,1)." },

  // ── LOGIC GATES ──
  { id: "bl13", topic: "Boolean Logic", difficulty: 2, question: "Which logic gate outputs <code>true</code> only when both inputs are <code>true</code>?", choices: ["OR", "AND", "XOR", "NAND", "NOR"], answer: 1, hint: "This is the most restrictive gate", explanation: "AND outputs true only when all inputs are true." },
  { id: "bl14", topic: "Boolean Logic", difficulty: 2, question: "Which logic gate outputs <code>false</code> only when both inputs are <code>true</code>?", choices: ["OR", "AND", "XOR", "NAND", "NOR"], answer: 3, hint: "This gate is the complement of AND", explanation: "NAND = NOT AND. It outputs false only when both inputs are true." },
  { id: "bl15", topic: "Boolean Logic", difficulty: 2, question: "A NOR gate is equivalent to:", choices: ["NOT(A AND B)", "NOT(A OR B)", "NOT A AND NOT B", "Both B and C", "NOT(A XOR B)"], answer: 3, hint: "NOR is NOT OR, and by De Morgan's law...", explanation: "NOR = NOT(A OR B) = !A AND !B (De Morgan's). Both B and C are correct." },
  { id: "bl16", topic: "Boolean Logic", difficulty: 3, question: "An XNOR gate outputs <code>true</code> when:", choices: ["Both inputs are true", "Both inputs are false", "Inputs are the same", "Inputs are different", "At least one input is true"], answer: 2, hint: "XNOR is the complement of XOR", explanation: "XNOR = NOT XOR. It outputs true when both inputs are the same (both true or both false)." },

  // ── SHORT-CIRCUIT EVALUATION ──
  { id: "bl17", topic: "Boolean Logic", difficulty: 2, question: "In <code>false && (x++ > 0)</code>, is <code>x</code> incremented?", choices: ["Yes, always", "No, due to short-circuit evaluation", "Only if x > 0", "Compile error", "Runtime error"], answer: 1, hint: "Java's && operator short-circuits when the left side is false", explanation: "Since the left side is false, Java skips the right side entirely. x is not incremented." },
  { id: "bl18", topic: "Boolean Logic", difficulty: 2, question: "In <code>true || (x++ > 0)</code>, is <code>x</code> incremented?", choices: ["Yes, always", "No, due to short-circuit evaluation", "Only if x > 0", "Compile error", "Runtime error"], answer: 1, hint: "Java's || operator short-circuits when the left side is true", explanation: "Since the left side is true, Java skips the right side. x is not incremented." },

  // ── BITWISE OPERATIONS ──
  { id: "bl19", topic: "Boolean Logic", difficulty: 3, question: "What is <code>5 & 3</code> in Java?", choices: ["0", "1", "3", "5", "7"], answer: 1, hint: "5 = 101, 3 = 011 in binary; AND each bit", explanation: "101 & 011 = 001 = 1." },
  { id: "bl20", topic: "Boolean Logic", difficulty: 3, question: "What is <code>5 | 3</code> in Java?", choices: ["0", "1", "3", "5", "7"], answer: 4, hint: "5 = 101, 3 = 011 in binary; OR each bit", explanation: "101 | 011 = 111 = 7." },
];
