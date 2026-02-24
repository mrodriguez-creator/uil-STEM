// UIL Computer Science – Base Conversions & Number Systems
// Matches real UIL Q1 format + code-based conversion traces
const BASE_CONVERSION_PROBLEMS = [

  // ── Q1-STYLE: cross-base equivalence (real UIL always has this as Q1) ──

  { id: "bc1", topic: "Base Conversions", question: "Which of the following is equivalent to the expression <code>437₈ + 1A₁₆</code>?", choices: ["100111001₂", "471₈", "139₁₆", "313₁₀", "All are equivalent"], answer: 4, hint: "Convert both to decimal: 437₈ = 4×64+3×8+7 = 287. 1A₁₆ = 16+10 = 26. Sum = 313", explanation: "437₈ = 287. 1A₁₆ = 26. Sum = 313₁₀. Checking: 100111001₂ = 313, 471₈ = 313, 139₁₆ = 313, 313₁₀ = 313. All are equivalent." },

  { id: "bc2", topic: "Base Conversions", question: "Which of the following is <em>not</em> equivalent to the expression <code>2B3₁₆ + 145₈</code>?", choices: ["792₁₀", "1100011000₂", "1434₈", "318₁₆", "All are equivalent"], answer: 2, hint: "2B3₁₆ = 691. 145₈ = 101. Sum = 792. Check each choice", explanation: "2B3₁₆ = 691. 145₈ = 101. Sum = 792₁₀. Check: 1100011000₂ = 792 ✓. 1434₈ = 1×512+4×64+3×8+4 = 796 ✗. 318₁₆ = 792 ✓. C) 1434₈ is not equivalent." },

  { id: "bc3", topic: "Base Conversions", question: "Which of the following is equivalent to the expression <code>1234₅ × 2₁₀</code>?", choices: ["604₈", "110000100₂", "184₁₆", "388₁₀", "All are equivalent"], answer: 4, hint: "1234₅ = 1×125+2×25+3×5+4 = 194. ×2 = 388. Check each", explanation: "1234₅ = 194. ×2 = 388₁₀. Check: 604₈ = 6×64+4 = 388 ✓. 110000100₂ = 256+128+4 = 388 ✓. 184₁₆ = 256+128+4 = 388 ✓. All are equivalent." },

  // ── CODE-BASED CONVERSION TRACES ──

  { id: "bc4", topic: "Base Conversions", question: "What is output by the code to the right?<pre><code>out.println(Integer.toBinaryString(42));</code></pre>", choices: ["101010", "110010", "42", "0b101010", "There is no output due to a compile error."], answer: 0, hint: "42 in binary: 32+8+2 = 101010", explanation: "42 = 32+8+2 = 101010₂. toBinaryString returns the binary string without prefix." },

  { id: "bc5", topic: "Base Conversions", question: "What is output by the code to the right?<pre><code>out.println(Integer.parseInt(\"1010\", 2));</code></pre>", choices: ["5", "8", "10", "1010", "There is no output due to a runtime error."], answer: 2, hint: "parseInt with radix 2 parses the string as binary", explanation: "\"1010\" in base 2 = 1×8+0×4+1×2+0 = 10." },

  { id: "bc6", topic: "Base Conversions", question: "What is output by the code to the right?<pre><code>out.println(Integer.toHexString(255));</code></pre>", choices: ["ff", "FF", "0xff", "255", "There is no output due to a compile error."], answer: 0, hint: "toHexString returns lowercase hex without any prefix", explanation: "255 = 15×16+15 = ff. Java's toHexString returns lowercase." },

  { id: "bc7", topic: "Base Conversions", question: "What is output by the code to the right?<pre><code>int x = 0b11001010;\nout.println(x);</code></pre>", choices: ["11001010", "CA", "202", "312", "There is no output due to a compile error."], answer: 2, hint: "0b prefix means binary literal. Convert 11001010₂ to decimal", explanation: "11001010₂ = 128+64+8+2 = 202. Printing an int displays its decimal value." },

  { id: "bc8", topic: "Base Conversions", question: "What is output by the code to the right?<pre><code>int a = 0x1F;\nint b = 037;\nout.println(a + \" \" + b);</code></pre>", choices: ["1F 37", "31 31", "31 37", "1F 037", "There is no output due to a compile error."], answer: 1, hint: "0x prefix = hex literal, leading 0 prefix = octal literal", explanation: "0x1F = 1×16+15 = 31. 037 (octal) = 3×8+7 = 31. Output: \"31 31\"." },

  // ── SHIFT OPERATIONS ──

  { id: "bc9", topic: "Base Conversions", question: "What is output by the code to the right?<pre><code>out.println(1 << 10);</code></pre>", choices: ["10", "20", "512", "1024", "2048"], answer: 3, hint: "Left shift by n is equivalent to multiplying by 2ⁿ", explanation: "1 << 10 = 2¹⁰ = 1024." },

  { id: "bc10", topic: "Base Conversions", question: "Given that <code>2²³ = 8388608</code>, what is the value of <code>8388608 &gt;&gt; 10</code>?", choices: ["1024", "2048", "4096", "8192", "None of the above"], answer: 3, hint: "Right shifting 2²³ by 10 gives 2¹³", explanation: "8388608 = 2²³. 2²³ >> 10 = 2¹³ = 8192." },

  // ── TWO'S COMPLEMENT / BYTE OVERFLOW ──

  { id: "bc11", topic: "Base Conversions", question: "What is output by the code to the right?<pre><code>byte b = (byte) 130;\nout.println(b);</code></pre>", choices: ["130", "-126", "-128", "2", "There is no output due to a compile error."], answer: 1, hint: "byte range is -128 to 127. 130 overflows: 130 - 256 = -126", explanation: "130 exceeds byte range (-128 to 127). Wraps: 130 - 256 = -126." },

  { id: "bc12", topic: "Base Conversions", question: "What is output by the code to the right?<pre><code>int[] sizes = new int[] {\n    Double.BYTES, Float.BYTES,\n    Long.BYTES, Integer.BYTES,\n    Short.BYTES, Byte.BYTES\n};\nArrays.sort(sizes);\nout.print(sizes[0] + sizes[2]);</code></pre>", choices: ["3", "5", "6", "8", "There is no output due to a compile error."], answer: 1, hint: "BYTES: Double=8, Float=4, Long=8, Integer=4, Short=2, Byte=1. Sort ascending", explanation: "Sorted: [1, 2, 4, 4, 8, 8]. sizes[0]=1, sizes[2]=4. 1+4 = 5." },
];
