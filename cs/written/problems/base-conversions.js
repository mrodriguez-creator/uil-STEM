// UIL CS Written Test – Base Conversions & Number Systems
const BASE_CONVERSION_PROBLEMS = [

  // ── BINARY TO DECIMAL ──
  { id: "bc1", topic: "Base Conversions", difficulty: 1, question: "What is the decimal value of <code>0b1011</code>?", choices: ["9", "10", "11", "12", "13"], answer: 2, hint: "Evaluate each bit: 1×8 + 0×4 + 1×2 + 1×1", explanation: "1×8 + 0×4 + 1×2 + 1×1 = 8 + 2 + 1 = 11." },
  { id: "bc2", topic: "Base Conversions", difficulty: 1, question: "What is <code>0b11001</code> in decimal?", choices: ["21", "23", "25", "27", "29"], answer: 2, hint: "1×16 + 1×8 + 0×4 + 0×2 + 1×1", explanation: "16 + 8 + 0 + 0 + 1 = 25." },
  { id: "bc3", topic: "Base Conversions", difficulty: 2, question: "What is the decimal value of <code>0b10110101</code>?", choices: ["171", "177", "181", "185", "191"], answer: 2, hint: "128 + 0 + 32 + 16 + 0 + 4 + 0 + 1", explanation: "128 + 32 + 16 + 4 + 1 = 181." },

  // ── DECIMAL TO BINARY ──
  { id: "bc4", topic: "Base Conversions", difficulty: 1, question: "What is 13 in binary?", choices: ["<code>1011</code>", "<code>1100</code>", "<code>1101</code>", "<code>1110</code>", "<code>1111</code>"], answer: 2, hint: "13 = 8 + 4 + 1", explanation: "13 = 8 + 4 + 1 = 1101 in binary." },
  { id: "bc5", topic: "Base Conversions", difficulty: 2, question: "What is 200 in binary?", choices: ["<code>11000100</code>", "<code>11001000</code>", "<code>11010000</code>", "<code>11001100</code>", "<code>11000000</code>"], answer: 1, hint: "200 = 128 + 64 + 8", explanation: "200 = 128 + 64 + 8 = 11001000 in binary." },

  // ── HEXADECIMAL TO DECIMAL ──
  { id: "bc6", topic: "Base Conversions", difficulty: 1, question: "What is <code>0x1F</code> in decimal?", choices: ["15", "25", "31", "33", "47"], answer: 2, hint: "1×16 + F×1, where F = 15", explanation: "1×16 + 15×1 = 16 + 15 = 31." },
  { id: "bc7", topic: "Base Conversions", difficulty: 2, question: "What is <code>0xAB</code> in decimal?", choices: ["161", "167", "171", "175", "181"], answer: 2, hint: "A = 10, B = 11; compute 10×16 + 11×1", explanation: "10×16 + 11 = 160 + 11 = 171." },
  { id: "bc8", topic: "Base Conversions", difficulty: 2, question: "What is <code>0xFF</code> in decimal?", choices: ["240", "245", "250", "255", "256"], answer: 3, hint: "F = 15; compute 15×16 + 15", explanation: "15×16 + 15 = 240 + 15 = 255." },

  // ── DECIMAL TO HEXADECIMAL ──
  { id: "bc9", topic: "Base Conversions", difficulty: 2, question: "What is 254 in hexadecimal?", choices: ["<code>0xEF</code>", "<code>0xFE</code>", "<code>0xEE</code>", "<code>0xDF</code>", "<code>0xFC</code>"], answer: 1, hint: "254 ÷ 16 = 15 remainder 14; F = 15, E = 14", explanation: "254 = 15×16 + 14 = FE in hex." },
  { id: "bc10", topic: "Base Conversions", difficulty: 2, question: "What is 75 in hexadecimal?", choices: ["<code>0x47</code>", "<code>0x4A</code>", "<code>0x4B</code>", "<code>0x4C</code>", "<code>0x4D</code>"], answer: 2, hint: "75 ÷ 16 = 4 remainder 11; B = 11", explanation: "75 = 4×16 + 11 = 4B in hex." },

  // ── BINARY TO HEXADECIMAL ──
  { id: "bc11", topic: "Base Conversions", difficulty: 2, question: "Convert <code>0b11010110</code> to hexadecimal.", choices: ["<code>0xB6</code>", "<code>0xD6</code>", "<code>0xD8</code>", "<code>0xE6</code>", "<code>0x6D</code>"], answer: 1, hint: "Group into nibbles from the right: 1101 0110", explanation: "1101 = D, 0110 = 6. Result: 0xD6." },
  { id: "bc12", topic: "Base Conversions", difficulty: 2, question: "Convert <code>0b10101111</code> to hexadecimal.", choices: ["<code>0xAE</code>", "<code>0xAF</code>", "<code>0xBF</code>", "<code>0xFA</code>", "<code>0x9F</code>"], answer: 1, hint: "Group: 1010 1111", explanation: "1010 = A, 1111 = F. Result: 0xAF." },

  // ── HEXADECIMAL TO BINARY ──
  { id: "bc13", topic: "Base Conversions", difficulty: 2, question: "Convert <code>0x3C</code> to binary.", choices: ["<code>00110100</code>", "<code>00111100</code>", "<code>01001100</code>", "<code>00111000</code>", "<code>01011100</code>"], answer: 1, hint: "3 = 0011, C = 1100", explanation: "3 = 0011, C = 1100. Result: 00111100." },

  // ── OCTAL CONVERSIONS ──
  { id: "bc14", topic: "Base Conversions", difficulty: 2, question: "What is octal <code>075</code> in decimal?", choices: ["57", "59", "61", "63", "75"], answer: 2, hint: "7×8 + 5×1", explanation: "7×8 + 5 = 56 + 5 = 61." },
  { id: "bc15", topic: "Base Conversions", difficulty: 2, question: "What is 100 in octal?", choices: ["<code>140</code>", "<code>142</code>", "<code>144</code>", "<code>146</code>", "<code>150</code>"], answer: 2, hint: "100 ÷ 8 = 12 remainder 4; 12 ÷ 8 = 1 remainder 4", explanation: "100 = 1×64 + 4×8 + 4 = 144 in octal." },

  // ── BINARY ARITHMETIC ──
  { id: "bc16", topic: "Base Conversions", difficulty: 2, question: "What is <code>0b1011 + 0b0110</code> in binary?", choices: ["<code>10000</code>", "<code>10001</code>", "<code>10010</code>", "<code>10011</code>", "<code>10100</code>"], answer: 1, hint: "11 + 6 = 17 in decimal", explanation: "1011 + 0110 = 10001 (11 + 6 = 17 = 10001₂)." },
  { id: "bc17", topic: "Base Conversions", difficulty: 3, question: "What is <code>0b11011 + 0b10110</code> in binary?", choices: ["<code>101111</code>", "<code>110000</code>", "<code>110001</code>", "<code>110010</code>", "<code>110011</code>"], answer: 2, hint: "27 + 22 = 49 in decimal", explanation: "11011 + 10110 = 110001 (27 + 22 = 49 = 110001₂)." },

  // ── TWO'S COMPLEMENT ──
  { id: "bc18", topic: "Base Conversions", difficulty: 3, question: "In 8-bit two's complement, what decimal value does <code>11111110</code> represent?", choices: ["&minus;1", "&minus;2", "&minus;126", "254", "126"], answer: 1, hint: "Flip the bits and add 1 to find the magnitude", explanation: "Flip: 00000001, add 1: 00000010 = 2. Since the sign bit is 1, the value is −2." },
  { id: "bc19", topic: "Base Conversions", difficulty: 3, question: "What is the 8-bit two's complement representation of &minus;5?", choices: ["<code>11111010</code>", "<code>11111011</code>", "<code>11111100</code>", "<code>10000101</code>", "<code>11111001</code>"], answer: 1, hint: "Start with +5 = 00000101, flip bits, add 1", explanation: "5 = 00000101. Flip: 11111010. Add 1: 11111011." },
  { id: "bc20", topic: "Base Conversions", difficulty: 3, question: "What is the range of values for an 8-bit two's complement integer?", choices: ["&minus;127 to 127", "&minus;128 to 127", "&minus;128 to 128", "&minus;256 to 255", "0 to 255"], answer: 1, hint: "The range is −2^(n−1) to 2^(n−1) − 1", explanation: "For 8 bits: −2⁷ to 2⁷ − 1 = −128 to 127." },
  { id: "bc21", topic: "Base Conversions", difficulty: 4, question: "In 8-bit two's complement, what is <code>10000000</code> in decimal?", choices: ["&minus;0", "&minus;1", "&minus;127", "&minus;128", "128"], answer: 3, hint: "This is the most negative value representable in 8-bit two's complement", explanation: "10000000 = −128. This is −2⁷, the minimum value for 8-bit two's complement." },

  // ── MIXED BASE CONVERSIONS ──
  { id: "bc22", topic: "Base Conversions", difficulty: 3, question: "Which of the following is NOT equivalent to decimal 42?", choices: ["<code>0b101010</code>", "<code>0x2A</code>", "<code>052</code> (octal)", "<code>0b101100</code>", "All are equivalent"], answer: 3, hint: "Convert each to decimal and check which doesn't equal 42", explanation: "0b101010 = 42, 0x2A = 42, 052 = 42. But 0b101100 = 44, not 42." },
  { id: "bc23", topic: "Base Conversions", difficulty: 1, question: "In Java, which prefix indicates a hexadecimal literal?", choices: ["<code>0b</code>", "<code>0x</code>", "<code>0o</code>", "<code>0h</code>", "<code>#</code>"], answer: 1, hint: "Think about how you write hex constants in Java source code", explanation: "Java uses 0x (or 0X) for hexadecimal literals." },
  { id: "bc24", topic: "Base Conversions", difficulty: 1, question: "In Java, which prefix indicates a binary literal?", choices: ["<code>0b</code>", "<code>0x</code>", "<code>0o</code>", "<code>0d</code>", "<code>%</code>"], answer: 0, hint: "Java added this prefix in Java 7", explanation: "Java uses 0b (or 0B) for binary literals." },
  { id: "bc25", topic: "Base Conversions", difficulty: 3, question: "What is <code>0x1A + 0x2F</code> in hexadecimal?", choices: ["<code>0x39</code>", "<code>0x3F</code>", "<code>0x45</code>", "<code>0x49</code>", "<code>0x4F</code>"], answer: 3, hint: "Convert to decimal: 26 + 47, then back to hex", explanation: "0x1A = 26, 0x2F = 47. Sum = 73 = 0x49. A + F = 25 = 19₁₆ → write 9 carry 1. 1 + 2 + 1 = 4. Result: 0x49." },
];
