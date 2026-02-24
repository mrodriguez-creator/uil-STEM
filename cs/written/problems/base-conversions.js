// UIL Computer Science – Base Conversions & Number Systems
const BASE_CONVERSION_PROBLEMS = [

  // ── BINARY ↔ DECIMAL ──
  { id: "bc1", topic: "Base Conversions", question: "Convert the binary number <code>10110101</code> to decimal.", choices: ["171", "173", "181", "185", "191"], answer: 2, hint: "Multiply each bit by its power of 2 from right to left: 128+32+16+4+1", explanation: "1(128) + 0(64) + 1(32) + 1(16) + 0(8) + 1(4) + 0(2) + 1(1) = 128+32+16+4+1 = 181." },
  { id: "bc2", topic: "Base Conversions", question: "Convert the decimal number <code>217</code> to binary.", choices: ["11010001", "11011001", "11011011", "11101001", "11011101"], answer: 1, hint: "Repeatedly divide by 2 and read remainders from bottom to top", explanation: "217 = 128+64+16+8+1 = 11011001 in binary." },
  { id: "bc3", topic: "Base Conversions", question: "What is <code>11111111</code> in base 2 equal to in decimal?", choices: ["127", "254", "255", "256", "511"], answer: 2, hint: "This is 2&sup8; &minus; 1", explanation: "11111111₂ = 2⁸ − 1 = 256 − 1 = 255." },
  { id: "bc4", topic: "Base Conversions", question: "Convert the decimal number <code>100</code> to binary.", choices: ["1100010", "1100100", "1100110", "1101000", "1110100"], answer: 1, hint: "100 = 64 + 32 + 4", explanation: "100 = 64+32+4 = 1100100 in binary." },

  // ── HEX ↔ DECIMAL ──
  { id: "bc5", topic: "Base Conversions", question: "Convert the hexadecimal number <code>3F</code> to decimal.", choices: ["47", "55", "63", "79", "95"], answer: 2, hint: "3×16 + F(15)×1", explanation: "3×16 + 15×1 = 48 + 15 = 63." },
  { id: "bc6", topic: "Base Conversions", question: "Convert the decimal number <code>255</code> to hexadecimal.", choices: ["EF", "F0", "FA", "FE", "FF"], answer: 4, hint: "255 ÷ 16 = 15 remainder 15", explanation: "255 = 15×16 + 15 = FF in hex." },
  { id: "bc7", topic: "Base Conversions", question: "What is <code>0xA3</code> in decimal?", choices: ["153", "160", "163", "173", "193"], answer: 2, hint: "A = 10, so compute 10×16 + 3", explanation: "A(10)×16 + 3 = 160 + 3 = 163." },
  { id: "bc8", topic: "Base Conversions", question: "Convert <code>0x1C8</code> to decimal.", choices: ["392", "424", "456", "488", "520"], answer: 2, hint: "1×256 + C(12)×16 + 8×1", explanation: "1×256 + 12×16 + 8 = 256 + 192 + 8 = 456." },

  // ── HEX ↔ BINARY ──
  { id: "bc9", topic: "Base Conversions", question: "Convert <code>0xB7</code> to binary.", choices: ["10110111", "10111011", "10111101", "10110011", "11010111"], answer: 0, hint: "Convert each hex digit to 4 binary digits: B=1011, 7=0111", explanation: "B = 1011, 7 = 0111. So 0xB7 = 10110111₂." },
  { id: "bc10", topic: "Base Conversions", question: "Convert the binary number <code>11001010</code> to hexadecimal.", choices: ["C8", "CA", "CB", "D2", "DA"], answer: 1, hint: "Group into nibbles from right: 1100 1010", explanation: "1100 = C, 1010 = A. So 11001010₂ = 0xCA." },

  // ── OCTAL ──
  { id: "bc11", topic: "Base Conversions", question: "Convert octal <code>375</code> to decimal.", choices: ["245", "249", "253", "255", "261"], answer: 2, hint: "3×64 + 7×8 + 5×1", explanation: "3×64 + 7×8 + 5 = 192 + 56 + 5 = 253." },
  { id: "bc12", topic: "Base Conversions", question: "Convert decimal <code>200</code> to octal.", choices: ["300", "304", "306", "310", "314"], answer: 3, hint: "200 ÷ 8 = 25 r0, 25 ÷ 8 = 3 r1, 3 ÷ 8 = 0 r3", explanation: "200 = 3×64 + 1×8 + 0 = 310 in octal." },

  // ── BASE ARITHMETIC ──
  { id: "bc13", topic: "Base Conversions", question: "What is <code>1011</code> + <code>1101</code> in binary?", choices: ["10100", "10110", "11000", "11010", "11100"], answer: 2, hint: "Add column by column from right, carrying as needed", explanation: "1011(11) + 1101(13) = 24 = 11000 in binary." },
  { id: "bc14", topic: "Base Conversions", question: "What is <code>0xFF &minus; 0xA3</code> in hexadecimal?", choices: ["52", "56", "5A", "5C", "5E"], answer: 3, hint: "255 &minus; 163 = 92. Convert 92 to hex.", explanation: "0xFF = 255, 0xA3 = 163. 255 − 163 = 92. 92 = 5×16 + 12 = 0x5C." },
  { id: "bc15", topic: "Base Conversions", question: "What is <code>1010</code> × <code>11</code> in binary?", choices: ["11010", "11100", "11110", "100010", "100110"], answer: 2, hint: "10 × 3 = 30 in decimal, convert to binary", explanation: "1010₂ = 10, 11₂ = 3. 10×3 = 30 = 11110 in binary." },

  // ── TWO'S COMPLEMENT ──
  { id: "bc16", topic: "Base Conversions", question: "What is the 8-bit two's complement representation of <code>&minus;42</code>?", choices: ["10101010", "11010110", "11010101", "10101011", "11010100"], answer: 1, hint: "Write 42 in binary (00101010), flip all bits, add 1", explanation: "42 = 00101010. Flip: 11010101. Add 1: 11010110." },
  { id: "bc17", topic: "Base Conversions", question: "The 8-bit two's complement binary <code>11100011</code> represents what decimal value?", choices: ["&minus;29", "&minus;30", "&minus;31", "&minus;27", "&minus;33"], answer: 0, hint: "Leading 1 means negative. Flip bits, add 1, negate result", explanation: "Flip: 00011100 = 28. Add 1: 29. Result: −29." },
  { id: "bc18", topic: "Base Conversions", question: "In 8-bit two's complement, what is the range of representable integers?", choices: ["&minus;127 to 127", "&minus;128 to 128", "&minus;128 to 127", "&minus;127 to 128", "&minus;256 to 255"], answer: 2, hint: "With n bits: &minus;2<sup>n&minus;1</sup> to 2<sup>n&minus;1</sup> &minus; 1", explanation: "8-bit two's complement range: −2⁷ to 2⁷−1 = −128 to 127." },
  { id: "bc19", topic: "Base Conversions", question: "What happens when you add <code>01111111</code> and <code>00000001</code> in 8-bit two's complement?", choices: ["00000000", "10000000", "01111110", "11111111", "overflow error"], answer: 1, hint: "127 + 1 causes signed overflow in 8 bits", explanation: "01111111(127) + 00000001(1) = 10000000, which is −128 in two's complement. This is integer overflow." },
  { id: "bc20", topic: "Base Conversions", question: "What is the two's complement of <code>10000000</code> (8-bit)?", choices: ["01111111", "10000001", "10000000", "01111110", "11111111"], answer: 2, hint: "Flip bits and add 1. What is 01111111 + 1?", explanation: "Flip: 01111111. Add 1: 10000000. The two's complement of −128 is −128 itself (special case at the boundary)." },

  // ── MIXED BASE PROBLEMS ──
  { id: "bc21", topic: "Base Conversions", question: "If a number is <code>132</code> in base 5, what is it in decimal?", choices: ["37", "39", "42", "47", "52"], answer: 2, hint: "1×25 + 3×5 + 2×1", explanation: "1×25 + 3×5 + 2×1 = 25 + 15 + 2 = 42." },
  { id: "bc22", topic: "Base Conversions", question: "Convert decimal <code>83</code> to base 3.", choices: ["2212", "10002", "2222", "10012", "2202"], answer: 1, hint: "Repeatedly divide by 3: 83÷3=27r2, 27÷3=9r0, 9÷3=3r0, 3÷3=1r0, 1÷3=0r1", explanation: "83 = 1×81 + 0×27 + 0×9 + 0×3 + 2×1 = 10002 in base 3." },
  { id: "bc23", topic: "Base Conversions", question: "How many 1-bits are in the binary representation of <code>0xAC</code>?", choices: ["3", "4", "5", "6", "7"], answer: 1, hint: "Convert A(1010) and C(1100) to binary and count the 1s", explanation: "0xAC = 10101100. Count of 1-bits: 1+0+1+0+1+1+0+0 = 4." },
  { id: "bc24", topic: "Base Conversions", question: "The largest 4-digit number in base 7 is ______ in decimal.", choices: ["2000", "2400", "2401", "2399", "2058"], answer: 1, hint: "The largest 4-digit base-7 number is 6666₇ = 7⁴ &minus; 1", explanation: "6666₇ = 6×343 + 6×49 + 6×7 + 6 = 2058 + 294 + 42 + 6 = 2400." },
];
