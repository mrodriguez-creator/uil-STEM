// UIL Computer Science – Boolean Logic, Bitwise Operators, Operator Precedence
// All code-output format matching UIL conventions
const BOOLEAN_LOGIC_PROBLEMS = [

  // ── BOOLEAN EXPRESSION TRACES ──

  { id: "bl1", topic: "Boolean Logic", question: "What is output by the code to the right?<pre><code>boolean a = true;\nboolean b = true;\na = a & !a || a ^ !b;\nout.println(a);</code></pre>", choices: ["true", "false", "1", "0", "There is no output due to a compile error."], answer: 0, hint: "Precedence: ! first, then &, then ^, then ||", explanation: "!a=false, !b=false. a & !a = true & false = false. a ^ !b = true ^ false = true. false || true = true." },

  { id: "bl2", topic: "Boolean Logic", question: "What is output by the code to the right?<pre><code>boolean a = true ^ true;\nout.println(a);</code></pre>", choices: ["true", "false", "1", "0", "There is no output due to a compile error."], answer: 1, hint: "XOR returns true only when the operands differ", explanation: "true ^ true = false. XOR: same values → false." },

  { id: "bl3", topic: "Boolean Logic", question: "What is output by the code to the right?<pre><code>boolean a = false;\nboolean b = true;\na |= !b & a ^ b | !a;\nout.println(a);</code></pre>", choices: ["true", "false", "1", "0", "There is no output due to a compile error."], answer: 0, hint: "Precedence: ! then & then ^ then |. Evaluate step by step", explanation: "!b=false, !a=true. !b & a = false & false = false. false ^ b = false ^ true = true. true | !a = true | true = true. a |= true → a = false | true = true." },

  { id: "bl4", topic: "Boolean Logic", question: "What is output by the code to the right?<pre><code>boolean a = true, b = false;\nout.print(!(a && b) == (!a || !b));\nout.print(\" \");\nout.print(!(a || b) == (!a && !b));</code></pre>", choices: ["true true", "true false", "false true", "false false", "There is no output due to a compile error."], answer: 0, hint: "These are De Morgan's Laws: !(A&&B) ≡ !A||!B and !(A||B) ≡ !A&&!B", explanation: "Both De Morgan's identities hold for all boolean values. Output: true true." },

  // ── SHORT-CIRCUIT EVALUATION ──

  { id: "bl5", topic: "Boolean Logic", question: "What is output by the code to the right?<pre><code>int x = 5;\nif (x > 10 && ++x > 5)\n    out.print(x);\nout.print(x);</code></pre>", choices: ["5", "6", "56", "65", "There is no output due to a compile error."], answer: 0, hint: "Short-circuit &&: if the left side is false, the right side is never evaluated", explanation: "x > 10 is false. Due to short-circuit &&, ++x is never executed. x stays 5. Only the second print runs. Output: 5." },

  { id: "bl6", topic: "Boolean Logic", question: "What is output by the code to the right?<pre><code>int a = 3;\nif (a > 1 || ++a > 5)\n    out.print(a);\nout.print(a);</code></pre>", choices: ["3", "33", "34", "43", "There is no output due to a compile error."], answer: 1, hint: "Short-circuit ||: if the left side is true, the right side is skipped", explanation: "a > 1 is true. Short-circuit || skips ++a. a stays 3. Both prints execute: 3 and 3. Output: 33." },

  { id: "bl7", topic: "Boolean Logic", question: "What is output by the code to the right?<pre><code>int x = 5;\nboolean b = (x > 3) | (++x > 5);\nout.println(x);</code></pre>", choices: ["5", "6", "true", "false", "There is no output due to a compile error."], answer: 1, hint: "| (single pipe) is non-short-circuit OR — it always evaluates BOTH sides", explanation: "| (not ||) does NOT short-circuit. Both sides evaluated. ++x runs, making x=6. Output: 6." },

  // ── BITWISE OPERATORS ──

  { id: "bl8", topic: "Boolean Logic", question: "What is output by the code to the right?<pre><code>out.println(12 & 10);</code></pre>", choices: ["2", "6", "8", "10", "14"], answer: 2, hint: "12 = 1100, 10 = 1010. AND bit by bit", explanation: "12=1100, 10=1010. 1100 & 1010 = 1000 = 8." },

  { id: "bl9", topic: "Boolean Logic", question: "What is output by the code to the right?<pre><code>out.println(12 | 10);</code></pre>", choices: ["2", "6", "8", "10", "14"], answer: 4, hint: "12 = 1100, 10 = 1010. OR bit by bit", explanation: "12=1100, 10=1010. 1100 | 1010 = 1110 = 14." },

  { id: "bl10", topic: "Boolean Logic", question: "What is output by the code to the right?<pre><code>out.println(12 ^ 10);</code></pre>", choices: ["2", "6", "8", "10", "14"], answer: 1, hint: "12 = 1100, 10 = 1010. XOR bit by bit", explanation: "12=1100, 10=1010. 1100 ^ 1010 = 0110 = 6." },

  { id: "bl11", topic: "Boolean Logic", question: "What is output by the code to the right?<pre><code>out.println(~5);</code></pre>", choices: ["-5", "-6", "4", "5", "-4"], answer: 1, hint: "Bitwise NOT: ~n = -(n+1)", explanation: "~5 = -(5+1) = -6." },

  { id: "bl12", topic: "Boolean Logic", question: "What is output by the code to the right?<pre><code>int a = 5, b = 6;\nout.println((a & b) + \" \" +\n    (a | b) + \" \" + (a ^ b));</code></pre>", choices: ["4 7 3", "5 6 3", "4 7 1", "1 7 6", "There is no output due to a compile error."], answer: 0, hint: "5=101, 6=110. Compute AND, OR, XOR bit by bit", explanation: "5=101, 6=110. AND=100=4. OR=111=7. XOR=011=3. Output: \"4 7 3\"." },

  { id: "bl13", topic: "Boolean Logic", question: "What is output by the code to the right?<pre><code>out.println((-17 % 3) | (11 << 3));</code></pre>", choices: ["-2", "86", "88", "90", "There is no output due to a compile error."], answer: 0, hint: "-17 % 3 = -2 (sign follows dividend). 11 << 3 = 88. Then -2 | 88 — think about two's complement", explanation: "-17%3 = -2. 11<<3 = 88. In two's complement, -2 = ...11111110. 88 = ...01011000. OR = ...11111110 = -2. The negative number's high bits dominate." },

  // ── OPERATOR PRECEDENCE ORDERING (UIL Q13 format) ──

  { id: "bl14", topic: "Boolean Logic", question: "What is the order of precedence for the operators to the right?<pre><code>I.  == \nII. +=\nIII. <=\nIV. ?: (ternary)</code></pre>", choices: ["III, I, IV, II", "I, III, IV, II", "III, I, II, IV", "I, III, II, IV", "IV, III, I, II"], answer: 0, hint: "Relational (<= >=) before equality (== !=) before ternary (?:) before assignment (+=)", explanation: "Precedence highest→lowest: III. <= (relational) → I. == (equality) → IV. ?: (ternary) → II. += (assignment)." },

  { id: "bl15", topic: "Boolean Logic", question: "What is the order of precedence for the operators to the right?<pre><code>I.  || (logical)\nII. ++ (post)\nIII. & (bitwise)\nIV. -- (pre)</code></pre>", choices: ["II, IV, III, I", "IV, II, I, III", "III, II, I, IV", "II, IV, I, III", "II, III, I, IV"], answer: 0, hint: "Unary (++ --) highest, then bitwise &, then logical ||", explanation: "Precedence: II. ++ (post, highest unary) → IV. -- (pre, unary) → III. & (bitwise) → I. || (logical). Order: II, IV, III, I." },

  { id: "bl16", topic: "Boolean Logic", question: "What is the order of precedence for the operators to the right?<pre><code>I.  ?: (ternary)\nII. + (additive)\nIII. %\nIV. || (logical)</code></pre>", choices: ["III, II, IV, I", "III, II, I, IV", "II, III, IV, I", "II, III, I, IV", "III, IV, II, I"], answer: 0, hint: "Multiplicative (% * /) > additive (+ -) > logical || > ternary ?:", explanation: "Precedence: III. % (multiplicative) → II. + (additive) → IV. || (logical) → I. ?: (ternary)." },

  { id: "bl17", topic: "Boolean Logic", question: "What is the order of precedence for the operators to the right?<pre><code>I.  | (bitwise)\nII. ++ (pre)\nIII. * \nIV. || (logical)</code></pre>", choices: ["II, III, I, IV", "III, II, IV, I", "II, III, IV, I", "III, II, I, IV", "II, I, III, IV"], answer: 0, hint: "Unary first, then multiplicative, then bitwise |, then logical ||", explanation: "Precedence: II. ++ (pre, unary) → III. * (multiplicative) → I. | (bitwise) → IV. || (logical)." },

  // ── TRUTH TABLE MATCHING (UIL Q29 style) ──

  { id: "bl18", topic: "Boolean Logic", question: "Which of the following boolean expressions, when evaluated over all permutations of <code>true</code> and <code>false</code>, is equivalent to the truth table to the right?<pre><code> A | B | Output\n F | F |   T\n F | T |   T\n T | F |   F\n T | T |   T</code></pre>", choices: ["!A || B", "A || !B", "A && B", "!(A && !B)", "More than one of the above"], answer: 4, hint: "Check A) and D) against the truth table — they may be equivalent", explanation: "!A||B: FF→T,FT→T,TF→F,TT→T ✓. !(A&&!B): !(F&&T)=T,!(F&&F)=T,!(T&&T)=F,!(T&&F)=T ✓. Both match — they are logically equivalent (material implication). E) More than one." },

  { id: "bl19", topic: "Boolean Logic", question: "Which of the following boolean expressions, when evaluated over all permutations of <code>true</code> and <code>false</code>, is equivalent to the truth table to the right?<pre><code> A | B | Output\n F | F |   F\n F | T |   T\n T | F |   T\n T | T |   F</code></pre>", choices: ["A && B", "A || B", "A ^ B", "!(A || B)", "A && !B"], answer: 2, hint: "Output is true when exactly one of A, B is true — this is XOR", explanation: "XOR: FF→F, FT→T, TF→T, TT→F. Exactly matches. Answer: A ^ B." },

  // ── COMPILE ERROR TRAPS ──

  { id: "bl20", topic: "Boolean Logic", question: "What is output by the code to the right?<pre><code>int num1 = 5, num2 = 6;\nint num3 = (num1 & num2) >> 2;\nboolean a = (boolean) num3;\nout.println(a);</code></pre>", choices: ["true", "false", "1", "0", "There is no output due to a compile error."], answer: 4, hint: "Can you cast an int to boolean in Java?", explanation: "Java does not allow casting int to boolean. (boolean) num3 is a compile error." },

  // ── 3-VARIABLE TRUTH TABLES (UIL Q29 style with 3 vars) ──

  { id: "bl21", topic: "Boolean Logic", question: "Which of the following boolean expressions, when evaluated over all permutations of <code>true</code> and <code>false</code>, is equivalent to the truth table to the right?<pre><code> A | B | C | Output\n F | F | F |   F\n F | F | T |   T\n F | T | F |   F\n F | T | T |   T\n T | F | F |   F\n T | F | T |   T\n T | T | F |   T\n T | T | T |   T</code></pre>", choices: ["(A && B) || C", "A || B || C", "A && (B || C)", "(A && B) || (C && !A)", "(!A && C) || (A && B) || (A && C)"], answer: 0, hint: "Check row by row. Output is T when: C is true (rows 2,4,6,8) OR when A and B are both true (row 7). This is (A && B) || C", explanation: "Checking (A&&B)||C: FFF→F✓, FFT→T✓, FTF→F✓, FTT→T✓, TFF→F✓, TFT→T✓, TTF→T✓, TTT→T✓. All 8 rows match." },

  { id: "bl22", topic: "Boolean Logic", question: "Which of the following boolean expressions, when evaluated over all permutations of <code>true</code> and <code>false</code>, is equivalent to the truth table to the right?<pre><code> A | B | C | Output\n F | F | F |   F\n F | F | T |   F\n F | T | F |   F\n F | T | T |   F\n T | F | F |   F\n T | F | T |   T\n T | T | F |   F\n T | T | T |   T</code></pre>", choices: ["A || C", "A && C", "A && B && C", "B && C", "(A || B) && C"], answer: 1, hint: "Output is true only when both A and C are true (rows 6 and 8)", explanation: "A&&C: FFF→F, FFT→F, FTF→F, FTT→F, TFF→F, TFT→T, TTF→F, TTT→T. All 8 rows match. Output is true exactly when A=T and C=T." },

  { id: "bl23", topic: "Boolean Logic", question: "Which of the following boolean expressions, when evaluated over all permutations of <code>true</code> and <code>false</code>, is equivalent to the truth table to the right?<pre><code> A | B | C | Output\n F | F | F |   F\n F | F | T |   T\n F | T | F |   T\n F | T | T |   F\n T | F | F |   T\n T | F | T |   F\n T | T | F |   F\n T | T | T |   T</code></pre>", choices: ["A ^ B ^ C", "A && B && C", "(A || B) && C", "!(A && B) || C", "A ^ (B || C)"], answer: 0, hint: "Output is true when an ODD number of inputs are true. This is 3-way XOR", explanation: "A^B^C is true when an odd number of variables are true. FFF(0)→F, FFT(1)→T, FTF(1)→T, FTT(2)→F, TFF(1)→T, TFT(2)→F, TTF(2)→F, TTT(3)→T. All match." },

  // ── BOOLEAN ALGEBRAIC NOTATION (UIL D25 Q22 style) ──

  { id: "bl24", topic: "Boolean Logic", question: "Using boolean algebra notation where · means AND, + means OR, and a bar over a variable means NOT, which of the following is equivalent to the expression:<pre><code>A̅ · B + A · B̅</code></pre>", choices: ["A ^ B (XOR)", "A && B (AND)", "A || B (OR)", "!(A && B) (NAND)", "!(A || B) (NOR)"], answer: 0, hint: "A̅·B means (NOT A) AND B. A·B̅ means A AND (NOT B). When is this OR expression true?", explanation: "A̅·B + A·B̅ = (!A && B) || (A && !B). This is true exactly when A and B differ — the definition of XOR." },

  { id: "bl25", topic: "Boolean Logic", question: "Using De Morgan's Law, which of the following is equivalent to:<pre><code>!(A || B || C)</code></pre>", choices: ["!A || !B || !C", "!A && !B && !C", "!(A && B && C)", "!A || !B && !C", "A && B && C"], answer: 1, hint: "De Morgan's: negate the OR, flip to AND, negate each variable", explanation: "De Morgan's Law: !(A || B || C) = !A && !B && !C. Negate the operation (OR→AND) and negate each operand." },

  { id: "bl26", topic: "Boolean Logic", question: "Using De Morgan's Law, which of the following is equivalent to:<pre><code>!(A && B) || C</code></pre>", choices: ["!A || !B || C", "(!A && !B) || C", "!(A || B || C)", "!A || !B && C", "A && B && !C"], answer: 0, hint: "Apply De Morgan's only to !(A && B): this becomes !A || !B. Then OR with C", explanation: "!(A && B) = !A || !B (De Morgan's). Then: !A || !B || C." },

  // ── UNSIGNED RIGHT SHIFT (>>>) ──

  { id: "bl27", topic: "Boolean Logic", question: "What is output by the code to the right?<pre><code>out.println(-16 >>> 28);</code></pre>", choices: ["15", "-1", "16", "0", "There is no output due to a compile error."], answer: 0, hint: ">>> is unsigned right shift. -16 in 32-bit binary has leading 1s. Shifting right 28 positions fills with 0s from the left", explanation: "-16 in 32 bits = 11111111111111111111111111110000. >>> 28 shifts right 28 and fills with 0s: 00000000000000000000000000001111 = 15." },
];
