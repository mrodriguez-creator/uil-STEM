// UIL CS Written Test – Java Data Types & Operators
const DATA_TYPES_PROBLEMS = [

  // ── PRIMITIVE TYPES ──
  { id: "dt1", topic: "Data Types & Operators", difficulty: 1, question: "How many bits does a Java <code>int</code> use?", choices: ["8", "16", "32", "64", "Depends on the platform"], answer: 2, hint: "int is one of the standard 32-bit types", explanation: "A Java int is always 32 bits (4 bytes)." },
  { id: "dt2", topic: "Data Types & Operators", difficulty: 1, question: "How many bits does a Java <code>byte</code> use?", choices: ["4", "8", "16", "32", "64"], answer: 1, hint: "A byte is the smallest integer primitive", explanation: "A Java byte is 8 bits." },
  { id: "dt3", topic: "Data Types & Operators", difficulty: 2, question: "What is the size of a Java <code>long</code>?", choices: ["16 bits", "32 bits", "64 bits", "128 bits", "Platform dependent"], answer: 2, hint: "long is twice the size of int", explanation: "A Java long is 64 bits (8 bytes)." },
  { id: "dt4", topic: "Data Types & Operators", difficulty: 2, question: "Which of the following is NOT a Java primitive type?", choices: ["<code>int</code>", "<code>char</code>", "<code>String</code>", "<code>boolean</code>", "<code>double</code>"], answer: 2, hint: "One of these is a class, not a primitive", explanation: "String is a class (reference type), not a primitive. The 8 primitives are: byte, short, int, long, float, double, char, boolean." },
  { id: "dt5", topic: "Data Types & Operators", difficulty: 2, question: "What is the range of a Java <code>byte</code>?", choices: ["0 to 255", "&minus;127 to 127", "&minus;128 to 127", "&minus;128 to 128", "0 to 127"], answer: 2, hint: "8-bit two's complement: −2⁷ to 2⁷ − 1", explanation: "A byte ranges from −128 to 127 (8-bit two's complement)." },

  // ── CASTING ──
  { id: "dt6", topic: "Data Types & Operators", difficulty: 2, question: "What is the value of <code>(int) 3.9</code>?", choices: ["3", "3.0", "4", "4.0", "Compile error"], answer: 0, hint: "Casting a double to int truncates toward zero", explanation: "Casting to int truncates the decimal part. (int) 3.9 = 3." },
  { id: "dt7", topic: "Data Types & Operators", difficulty: 2, question: "What is the value of <code>(int) -2.7</code>?", choices: ["&minus;3", "&minus;2", "&minus;2.0", "2", "Compile error"], answer: 1, hint: "Truncation toward zero, not rounding", explanation: "Casting to int truncates toward zero. (int) -2.7 = -2." },
  { id: "dt8", topic: "Data Types & Operators", difficulty: 3, question: "What is the value of <code>(char) 65</code>?", choices: ["<code>'6'</code>", "<code>'5'</code>", "<code>'A'</code>", "<code>'a'</code>", "Compile error"], answer: 2, hint: "65 is the ASCII value for a capital letter", explanation: "ASCII 65 = 'A'. Casting int 65 to char produces 'A'." },
  { id: "dt9", topic: "Data Types & Operators", difficulty: 3, question: "What is the value of <code>(int) 'B'</code>?", choices: ["1", "2", "65", "66", "98"], answer: 3, hint: "'A' is 65 in ASCII, so 'B' is...", explanation: "'B' has ASCII value 66." },

  // ── INTEGER DIVISION & MODULUS ──
  { id: "dt10", topic: "Data Types & Operators", difficulty: 1, question: "What is the result of <code>7 / 2</code> in Java (both are <code>int</code>)?", choices: ["3", "3.5", "4", "3.0", "Compile error"], answer: 0, hint: "Integer division truncates the decimal", explanation: "7 / 2 = 3 (integer division truncates)." },
  { id: "dt11", topic: "Data Types & Operators", difficulty: 1, question: "What is the result of <code>7 % 3</code>?", choices: ["0", "1", "2", "3", "2.33"], answer: 1, hint: "% gives the remainder after division", explanation: "7 ÷ 3 = 2 remainder 1. So 7 % 3 = 1." },
  { id: "dt12", topic: "Data Types & Operators", difficulty: 2, question: "What is the result of <code>-7 % 3</code> in Java?", choices: ["&minus;2", "&minus;1", "0", "1", "2"], answer: 1, hint: "In Java, the sign of the result matches the dividend", explanation: "In Java, -7 % 3 = -1. The sign of the result matches the left operand." },

  // ── INCREMENT / DECREMENT ──
  { id: "dt13", topic: "Data Types & Operators", difficulty: 2, question: "If <code>int x = 5;</code>, what does <code>x++</code> evaluate to?", choices: ["4", "5", "6", "Compile error", "Undefined"], answer: 1, hint: "Post-increment returns the value BEFORE incrementing", explanation: "x++ returns 5 (the current value), then increments x to 6." },
  { id: "dt14", topic: "Data Types & Operators", difficulty: 2, question: "If <code>int x = 5;</code>, what does <code>++x</code> evaluate to?", choices: ["4", "5", "6", "Compile error", "Undefined"], answer: 2, hint: "Pre-increment increments BEFORE returning the value", explanation: "++x increments x to 6 first, then returns 6." },
  { id: "dt15", topic: "Data Types & Operators", difficulty: 3, question: "If <code>int a = 3;</code>, what is the value of <code>a++ + ++a</code>?", choices: ["7", "8", "9", "10", "Undefined"], answer: 1, hint: "a++ returns 3 (then a becomes 4); ++a increments to 5 then returns 5", explanation: "a++ returns 3 (a becomes 4). ++a makes a = 5, returns 5. Total: 3 + 5 = 8." },

  // ── OPERATOR PRECEDENCE ──
  { id: "dt16", topic: "Data Types & Operators", difficulty: 2, question: "What is the result of <code>3 + 4 % 5 * 2</code>?", choices: ["2", "5", "11", "14", "6"], answer: 2, hint: "% and * have higher precedence than +, and are evaluated left to right", explanation: "4 % 5 = 4. 4 * 2 = 8. 3 + 8 = 11." },
  { id: "dt17", topic: "Data Types & Operators", difficulty: 3, question: "What is the result of <code>2 + 3 * 4 - 8 / 2</code>?", choices: ["6", "10", "14", "16", "18"], answer: 1, hint: "* and / before + and -", explanation: "3 * 4 = 12. 8 / 2 = 4. 2 + 12 - 4 = 10." },
  { id: "dt18", topic: "Data Types & Operators", difficulty: 3, question: "Which operator has the highest precedence?", choices: ["<code>&&</code>", "<code>||</code>", "<code>!</code>", "<code>==</code>", "<code>+</code>"], answer: 2, hint: "Unary operators have higher precedence than binary operators", explanation: "! (logical NOT) is a unary operator with higher precedence than all the binary operators listed." },

  // ── EDGE CASES & OVERFLOW ──
  { id: "dt19", topic: "Data Types & Operators", difficulty: 3, question: "What does <code>Integer.MAX_VALUE + 1</code> evaluate to in Java?", choices: ["2147483648", "&minus;2147483648", "0", "Compile error", "Runtime error"], answer: 1, hint: "Integer overflow wraps around in two's complement", explanation: "Integer.MAX_VALUE = 2147483647. Adding 1 causes overflow, wrapping to Integer.MIN_VALUE = −2147483648." },
  { id: "dt20", topic: "Data Types & Operators", difficulty: 2, question: "What is the value of <code>Integer.SIZE</code>?", choices: ["4", "8", "16", "32", "64"], answer: 3, hint: "This constant gives the number of bits", explanation: "Integer.SIZE = 32 (the number of bits in an int)." },
];
