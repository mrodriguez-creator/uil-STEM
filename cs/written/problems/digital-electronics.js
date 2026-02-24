// UIL Computer Science – Digital Electronics & Logic Gate Circuits
// Text-based circuit descriptions and boolean expressions matching UIL conventions
const DIGITAL_ELECTRONICS_PROBLEMS = [

  // ── A) LOGIC GATE TRUTH TABLES (de1–de5) ──

  { id: "de1", topic: "Digital Electronics", question: "A digital circuit has two inputs, A and B. They feed into an AND gate, producing output X. What is the value of X when A=1 and B=0?", choices: ["0", "1", "Undefined", "Both 0 and 1 are possible", "None of the above"], answer: 0, hint: "AND gate outputs 1 only when ALL inputs are 1", explanation: "AND gate: X = A AND B = 1 AND 0 = 0. An AND gate requires both inputs to be 1 to produce a 1 output." },

  { id: "de2", topic: "Digital Electronics", question: "A circuit has two inputs, A and B. They feed into an OR gate, producing output Y. For how many of the four possible input combinations does Y equal 1?", choices: ["1", "2", "3", "4", "0"], answer: 2, hint: "OR outputs 1 whenever at least one input is 1", explanation: "OR truth table: 0|0=0, 0|1=1, 1|0=1, 1|1=1. Three of the four combinations produce output 1." },

  { id: "de3", topic: "Digital Electronics", question: "A circuit has inputs A, B, and C. A and B pass into an AND gate, producing signal X. Then X and C pass into an OR gate, producing the final output. What is the output when A=1, B=0, C=1?", choices: ["0", "1", "Depends on gate propagation delay", "Undefined", "None of the above"], answer: 1, hint: "First compute the AND gate output, then feed it into the OR gate with C", explanation: "X = A AND B = 1 AND 0 = 0. Output = X OR C = 0 OR 1 = 1." },

  { id: "de4", topic: "Digital Electronics", question: "A circuit has inputs A, B, and C. A and B pass into a NAND gate, producing signal X. Then X and C pass into an AND gate, producing the final output. For how many of the eight possible input combinations does the final output equal 1?", choices: ["2", "3", "4", "5", "6"], answer: 1, hint: "NAND outputs 0 only when both inputs are 1. The AND gate then requires both X and C to be 1", explanation: "X = NOT(A AND B). Output = X AND C = NOT(A AND B) AND C. Enumerating: A=0,B=0,C=0: X=1, out=0. A=0,B=0,C=1: X=1, out=1. A=0,B=1,C=0: X=1, out=0. A=0,B=1,C=1: X=1, out=1. A=1,B=0,C=0: X=1, out=0. A=1,B=0,C=1: X=1, out=1. A=1,B=1,C=0: X=0, out=0. A=1,B=1,C=1: X=0, out=0. Three combinations produce 1." },

  { id: "de5", topic: "Digital Electronics", question: "A circuit has two inputs, A and B. They feed into an XOR gate, producing output Z. For which input combinations does Z equal 0?<pre><code>I.   A=0, B=0\nII.  A=0, B=1\nIII. A=1, B=0\nIV.  A=1, B=1</code></pre>", choices: ["I only", "IV only", "I and IV only", "II and III only", "I, II, III, and IV"], answer: 2, hint: "XOR outputs 1 when the inputs differ, 0 when they are the same", explanation: "XOR truth table: 0 XOR 0 = 0, 0 XOR 1 = 1, 1 XOR 0 = 1, 1 XOR 1 = 0. Z=0 when inputs are equal: cases I and IV." },

  // ── B) BOOLEAN EXPRESSION FROM CIRCUIT (de6–de10) ──

  { id: "de6", topic: "Digital Electronics", question: "Input A passes through a NOT gate, producing signal X. Then X and input B feed into an AND gate, producing the final output. Which boolean expression represents the circuit's output?", choices: ["A \u00b7 B", "A' \u00b7 B", "A + B", "A' + B", "A' \u00b7 A'"], answer: 1, hint: "NOT A is written as A' (A-prime), and AND is written as \u00b7 (dot)", explanation: "A passes through NOT to become A'. Then A' AND B = A' \u00b7 B." },

  { id: "de7", topic: "Digital Electronics", question: "Inputs A and B each pass through separate NOT gates, producing A' and B' respectively. These two signals then feed into an OR gate, producing the final output. Which expression represents the output?", choices: ["A' \u00b7 B'", "A' + B'", "A \u00b7 B", "A + B", "(A + B)'"], answer: 1, hint: "Each input is inverted, then the results are ORed together", explanation: "NOT(A) = A', NOT(B) = B'. OR gate output: A' + B'." },

  { id: "de8", topic: "Digital Electronics", question: "Inputs A and B feed into an OR gate, producing signal X. Then X passes through a NOT gate, producing the final output. Which expression represents the output?", choices: ["A \u00b7 B", "A' + B'", "(A + B)'", "(A \u00b7 B)'", "A + B"], answer: 2, hint: "The circuit is an OR gate followed by a NOT gate \u2014 this combination is a NOR gate", explanation: "X = A OR B = A + B. Output = NOT(X) = (A + B)'. This is equivalent to a NOR gate." },

  { id: "de9", topic: "Digital Electronics", question: "Inputs A and B feed into an AND gate, producing signal X. Separately, inputs C and D feed into an OR gate, producing signal Y. Then X and Y feed into an XOR gate, producing the final output. Which expression represents the output?", choices: ["(A \u00b7 B) \u2295 (C + D)", "(A + B) \u2295 (C \u00b7 D)", "(A \u00b7 B) \u00b7 (C + D)", "(A \u00b7 B) + (C + D)", "((A \u00b7 B) \u00b7 (C + D))'"], answer: 0, hint: "Translate each gate directly: AND \u2192 \u00b7, OR \u2192 +, and the final gate is XOR (\u2295)", explanation: "X = A AND B = A \u00b7 B. Y = C OR D = C + D. Output = X XOR Y = (A \u00b7 B) \u2295 (C + D)." },

  { id: "de10", topic: "Digital Electronics", question: "Input A passes through a NOT gate, producing signal X. Inputs B and C feed into a NOR gate, producing signal Y. Then X and Y feed into an AND gate, producing the final output. Which expression represents the output?", choices: ["A' \u00b7 (B + C)'", "A \u00b7 (B + C)'", "A' + (B \u00b7 C)'", "A' \u00b7 (B + C)", "A' \u00b7 (B \u00b7 C)'"], answer: 0, hint: "NOR is NOT(OR). So NOR(B, C) = (B + C)'. Then AND the result with A' (NOT A)", explanation: "X = NOT(A) = A'. Y = NOR(B, C) = (B + C)'. Output = X AND Y = A' \u00b7 (B + C)'." },

  // ── C) CIRCUIT OUTPUT COMPUTATION (de11–de15) ──

  { id: "de11", topic: "Digital Electronics", question: "Given A=1, B=1, C=0. A and B feed into an XOR gate (output X). X and C feed into an OR gate (final output). What is the final output?", choices: ["0", "1", "Depends on the gate model", "Undefined", "None of the above"], answer: 0, hint: "XOR of two identical values is 0. Then 0 OR 0 = ?", explanation: "X = A XOR B = 1 XOR 1 = 0. Output = X OR C = 0 OR 0 = 0." },

  { id: "de12", topic: "Digital Electronics", question: "Given A=1, B=0, C=1. A passes through a NOT gate (output X). X and B feed into an OR gate (output Y). Y and C feed into an AND gate (final output). What is the final output?", choices: ["0", "1", "Depends on gate propagation delay", "Undefined", "None of the above"], answer: 0, hint: "NOT(1) = 0. Then 0 OR 0 = 0. Then 0 AND 1 = ?", explanation: "X = NOT(A) = NOT(1) = 0. Y = X OR B = 0 OR 0 = 0. Output = Y AND C = 0 AND 1 = 0." },

  { id: "de13", topic: "Digital Electronics", question: "Given A=0, B=1, C=1. A and B feed into a NAND gate (output X). B and C feed into a NOR gate (output Y). X and Y feed into an OR gate (final output). What is the final output?", choices: ["0", "1", "Depends on the inputs", "Undefined", "None of the above"], answer: 1, hint: "NAND(0,1) = NOT(0 AND 1) = NOT(0) = 1. NOR(1,1) = NOT(1 OR 1) = 0. Then 1 OR 0 = ?", explanation: "X = NAND(0,1) = NOT(0 AND 1) = NOT(0) = 1. Y = NOR(1,1) = NOT(1 OR 1) = NOT(1) = 0. Output = X OR Y = 1 OR 0 = 1." },

  { id: "de14", topic: "Digital Electronics", question: "Given A=0, B=1, C=1, D=0. A and B feed into an OR gate (output X). C and D feed into an AND gate (output Y). X and Y feed into an XOR gate (final output). What is the final output?", choices: ["0", "1", "Depends on the gate technology", "Undefined", "None of the above"], answer: 1, hint: "OR(0,1) = 1. AND(1,0) = 0. XOR(1,0) = ?", explanation: "X = A OR B = 0 OR 1 = 1. Y = C AND D = 1 AND 0 = 0. Output = X XOR Y = 1 XOR 0 = 1." },

  { id: "de15", topic: "Digital Electronics", question: "Given A=1, B=0, C=1. A and B feed into an AND gate (output W). A and C feed into an AND gate (output X). W and X feed into an OR gate (output Y). B passes through a NOT gate (output Z). Y and Z feed into an AND gate (final output). What is the final output?", choices: ["0", "1", "Depends on wire ordering", "Undefined", "None of the above"], answer: 1, hint: "Compute each gate layer by layer: W = A AND B, X = A AND C, Y = W OR X, Z = NOT(B), final = Y AND Z", explanation: "W = 1 AND 0 = 0. X = 1 AND 1 = 1. Y = 0 OR 1 = 1. Z = NOT(0) = 1. Output = Y AND Z = 1 AND 1 = 1." },

  // ── D) BOOLEAN ALGEBRA / SIMPLIFICATION (de16–de18) ──

  { id: "de16", topic: "Digital Electronics", question: "By De Morgan's Law, which expression is equivalent to (A \u00b7 B)' ?", choices: ["A' \u00b7 B'", "A' + B'", "A + B", "(A + B)'", "(A' + B')'"], answer: 1, hint: "De Morgan's Law: NOT(A AND B) = NOT(A) OR NOT(B)", explanation: "De Morgan's Law states (A \u00b7 B)' = A' + B'. The complement distributes and the operator changes: AND becomes OR." },

  { id: "de17", topic: "Digital Electronics", question: "Which expression is a simplified form of A \u00b7 B + A \u00b7 B' ?", choices: ["A", "B", "A + B", "A \u00b7 (B + B')", "0"], answer: 0, hint: "Factor out A: A \u00b7 (B + B'). What does B + B' (B OR NOT B) simplify to?", explanation: "A \u00b7 B + A \u00b7 B' = A \u00b7 (B + B') by factoring. B + B' = 1 (complement law: any variable ORed with its complement is 1). So A \u00b7 1 = A." },

  { id: "de18", topic: "Digital Electronics", question: "Which expression is equivalent to (A' + B')' ?", choices: ["A' + B'", "A' \u00b7 B'", "A \u00b7 B", "A + B", "(A \u00b7 B)'"], answer: 2, hint: "Apply De Morgan's Law: NOT(X + Y) = NOT(X) \u00b7 NOT(Y). Then simplify double negation", explanation: "By De Morgan's Law: (A' + B')' = (A')' \u00b7 (B')' = A \u00b7 B. Double negation cancels: NOT(NOT(A)) = A." },

  // ── E) NUMBER OF GATES / CIRCUIT ANALYSIS (de19–de20) ──

  { id: "de19", topic: "Digital Electronics", question: "What is the minimum number of 2-input logic gates needed to implement the expression (A AND B) OR (A AND C)?", choices: ["2", "3", "4", "5", "1"], answer: 0, hint: "Can you factor the expression to reduce the number of operations?", explanation: "Direct form uses 3 gates: AND, AND, OR. But by the distributive law, (A \u00b7 B) + (A \u00b7 C) = A \u00b7 (B + C). The factored form needs only 2 gates: Gate 1: B OR C. Gate 2: A AND (result of Gate 1). Minimum is 2." },

  { id: "de20", topic: "Digital Electronics", question: "Which logic gate produces an output of 1 only when its two inputs are different?", choices: ["AND", "OR", "NAND", "XOR", "NOR"], answer: 3, hint: "This gate's truth table is: 0,0\u21920; 0,1\u21921; 1,0\u21921; 1,1\u21920", explanation: "XOR (exclusive OR) outputs 1 when exactly one input is 1 (i.e., when inputs differ). Truth table: 0 XOR 0 = 0, 0 XOR 1 = 1, 1 XOR 0 = 1, 1 XOR 1 = 0." },
];
