// UIL Computer Science – Java Basics (Expressions, Output, Data Types, Operators)
// Uses out.print / out.println / out.printf (UIL static import convention)
const JAVA_BASICS_PROBLEMS = [

  // ── ARITHMETIC EXPRESSIONS & OPERATOR PRECEDENCE ──
  // Precedence: (), then * / % (left to right), then + - (left to right)

  // jb1: 4%2=0, 0*3=0, then 3+0+5+6=14
  { id: "jb1", topic: "Java Basics", question: "What is output by the code to the right?<pre><code>out.println(3 + 4 % 2 * 3 + 5 + 6);</code></pre>", choices: ["14", "17", "20", "11", "There is no output due to a compile error."], answer: 0, hint: "% and * have higher precedence than +. Evaluate 4%2 first, then multiply by 3.", explanation: "4%2=0, 0*3=0. Then 3+0+5+6=14." },

  // jb2: 15%4=3, 3*3=9, 9+2=11
  { id: "jb2", topic: "Java Basics", question: "What is output by the code to the right?<pre><code>out.println(15 % 4 * 3 + 2);</code></pre>", choices: ["5", "9", "11", "14", "There is no output due to a compile error."], answer: 2, hint: "% and * have equal precedence and associate left to right.", explanation: "15%4=3. 3*3=9. 9+2=11." },

  // jb3: 3*4=12, 12%5=2, then 2+2-1=3
  { id: "jb3", topic: "Java Basics", question: "What is output by the code to the right?<pre><code>out.println(2 + 3 * 4 % 5 - 1);</code></pre>", choices: ["1", "2", "3", "4", "There is no output due to a compile error."], answer: 2, hint: "* and % are evaluated left to right before + and -.", explanation: "3*4=12. 12%5=2. Then 2+2-1=3." },

  // jb4: 4*3=12, 8/2=4, 4%3=1, then 20-12+1=9
  { id: "jb4", topic: "Java Basics", question: "What is output by the code to the right?<pre><code>out.println(20 - 4 * 3 + 8 / 2 % 3);</code></pre>", choices: ["7", "9", "8", "10", "There is no output due to a compile error."], answer: 1, hint: "Evaluate *, /, % left to right first, then + and -.", explanation: "4*3=12. 8/2=4. 4%3=1. Then 20-12+1=9." },

  // jb5: 10/3=3, 3*2=6, 4%3=1, then 5+6-1=10
  { id: "jb5", topic: "Java Basics", question: "What is output by the code to the right?<pre><code>out.println(5 + 10 / 3 * 2 - 4 % 3);</code></pre>", choices: ["8", "9", "10", "11", "There is no output due to a compile error."], answer: 2, hint: "/, *, and % are same-precedence and evaluated left to right.", explanation: "10/3=3 (integer division). 3*2=6. 4%3=1. Then 5+6-1=10." },

  // ── INTEGER DIVISION, MODULO, CASTING ──

  // jb6: 7/2=3, (double)3=3.0, 3.0+0.5=3.5
  { id: "jb6", topic: "Java Basics", question: "What is output by the code to the right?<pre><code>out.println((double)(7 / 2) + 0.5);</code></pre>", choices: ["3.5", "4.0", "4.5", "3.0", "There is no output due to a compile error."], answer: 0, hint: "Integer division happens first inside the parentheses, then the cast to double.", explanation: "7/2=3 (integer division). (double)3=3.0. 3.0+0.5=3.5." },

  // jb7: (double)7=7.0, 7.0/2=3.5
  { id: "jb7", topic: "Java Basics", question: "What is output by the code to the right?<pre><code>out.println((double)7 / 2);</code></pre>", choices: ["3", "3.0", "3.5", "4.0", "There is no output due to a compile error."], answer: 2, hint: "The cast applies to 7 first, making it 7.0, then double division occurs.", explanation: "(double)7=7.0. 7.0/2=3.5." },

  // jb8: (int)9.7=9, (int)0.8=0, 9+0=9
  { id: "jb8", topic: "Java Basics", question: "What is output by the code to the right?<pre><code>out.println((int)9.7 + (int)0.8);</code></pre>", choices: ["9", "10", "11", "9.5", "There is no output due to a compile error."], answer: 0, hint: "Casting a double to int truncates toward zero (does not round).", explanation: "(int)9.7=9, (int)0.8=0. 9+0=9." },

  // jb9: -13%5 = -3 in Java (sign follows dividend)
  { id: "jb9", topic: "Java Basics", question: "What is output by the code to the right?<pre><code>out.println(-13 % 5);</code></pre>", choices: ["-3", "-2", "2", "3", "There is no output due to a compile error."], answer: 0, hint: "In Java, the result of % has the same sign as the dividend (left operand).", explanation: "-13 = (-2)*5 + (-3). In Java, -13%5 = -3." },

  // ── INCREMENT / DECREMENT (PRE & POST) ──

  // jb10: x++ yields 5 (x becomes 6), ++x makes x=7 yields 7. 5+7=12
  { id: "jb10", topic: "Java Basics", question: "What is output by the code to the right?<pre><code>int x = 5;\nout.println(x++ + ++x);</code></pre>", choices: ["10", "11", "12", "13", "There is no output due to a compile error."], answer: 2, hint: "x++ uses 5 then increments x to 6; ++x increments x to 7 then uses 7.", explanation: "x++ evaluates to 5 (x becomes 6). ++x increments x to 7 and evaluates to 7. 5+7=12." },

  // jb11: a-- yields 10 (a becomes 9), --a makes a=8 yields 8. 10-8=2
  { id: "jb11", topic: "Java Basics", question: "What is output by the code to the right?<pre><code>int a = 10;\nint b = a-- - --a;\nout.println(b);</code></pre>", choices: ["0", "1", "2", "3", "There is no output due to a compile error."], answer: 2, hint: "a-- uses 10 (a becomes 9), then --a makes a=8 and uses 8.", explanation: "a-- evaluates to 10 (a becomes 9). --a makes a=8, evaluates to 8. b=10-8=2." },

  // jb12: n += n++*2 => n = 3 + (3*2) = 9 (n++ yields 3 before incrementing, but assignment overwrites)
  { id: "jb12", topic: "Java Basics", question: "What is output by the code to the right?<pre><code>int n = 3;\nn += n++ * 2;\nout.println(n);</code></pre>", choices: ["9", "10", "11", "12", "There is no output due to a compile error."], answer: 0, hint: "n += expr expands to n = n + expr. The left-hand n is evaluated before n++ executes.", explanation: "n += n++*2 becomes n = 3 + (3*2) = 3+6 = 9. The n++ yields 3, then increments, but the final assignment overwrites n to 9." },

  // ── STRING CONCATENATION ──

  // jb13: 2+3=5 (int), 5+"hello"="5hello", +"4"="5hello4", +"5"="5hello45"
  { id: "jb13", topic: "Java Basics", question: "What is output by the code to the right?<pre><code>out.println(2 + 3 + \"hello\" + 4 + 5);</code></pre>", choices: ["23hello45", "5hello45", "5hello9", "14hello", "There is no output due to a compile error."], answer: 1, hint: "Left to right: 2+3 is integer addition, then concatenation starts at the String.", explanation: "2+3=5 (int). 5+\"hello\"=\"5hello\". +4=\"5hello4\". +5=\"5hello45\"." },

  // jb14: "A"+"B"="AB", +"3"="AB3", +"4"="AB34"
  { id: "jb14", topic: "Java Basics", question: "What is output by the code to the right?<pre><code>out.println(\"A\" + \"B\" + 3 + 4);</code></pre>", choices: ["AB34", "AB7", "AB 34", "A B 3 4", "There is no output due to a compile error."], answer: 0, hint: "Once a String is involved, all subsequent + operations become concatenation.", explanation: "\"A\"+\"B\"=\"AB\". \"AB\"+3=\"AB3\". \"AB3\"+4=\"AB34\"." },

  // jb15: 1+2=3, 3+""="3", "3"+3="33", "33"+4="334"
  { id: "jb15", topic: "Java Basics", question: "What is output by the code to the right?<pre><code>out.println(1 + 2 + \"\" + 3 + 4);</code></pre>", choices: ["1234", "334", "37", "10", "There is no output due to a compile error."], answer: 1, hint: "1+2=3 (int), then the empty String triggers concatenation for the rest.", explanation: "1+2=3 (int). 3+\"\"=\"3\". \"3\"+3=\"33\". \"33\"+4=\"334\"." },

  // ── PRINTF FORMATTING ──

  // jb16: %.3f rounds to 3 decimal places. 4th decimal of 2.34567 is 6, so rounds up
  { id: "jb16", topic: "Java Basics", question: "What is output by the code to the right?<pre><code>out.printf(\"%.3f\", 2.34567);</code></pre>", choices: ["2.345", "2.346", "2.34567", "2.35", "There is no output due to a compile error."], answer: 1, hint: "%.3f rounds to 3 decimal places using standard rounding rules.", explanation: "%.3f formats to 3 decimal places. The 4th decimal digit is 6 (>=5), so it rounds up: 2.346." },

  // jb17: %d substitutes integers, %s substitutes strings
  { id: "jb17", topic: "Java Basics", question: "What is output by the code to the right?<pre><code>out.printf(\"%d and %d is %d\", 3, 7, 3 + 7);</code></pre>", choices: ["3 and 7 is 10", "%d and %d is %d", "3and7is10", "3 and 7 is 37", "There is no output due to a compile error."], answer: 0, hint: "%d substitutes each integer argument in order.", explanation: "First %d gets 3, second %d gets 7, third %d gets 3+7=10. Output: 3 and 7 is 10." },

  // jb18: %5d right-justifies in a field of width 5. "42" is 2 chars, so 3 leading spaces.
  { id: "jb18", topic: "Java Basics", question: "What is output by the code to the right?<pre><code>out.printf(\"%5d\", 42);</code></pre>", choices: ["42", "   42", "42   ", "00042", "There is no output due to a compile error."], answer: 1, hint: "%5d right-justifies the integer in a field 5 characters wide.", explanation: "%5d pads with spaces on the left to fill a 5-character field. 42 is 2 chars, so 3 leading spaces: \"   42\"." },

  // ── ASSIGNMENT OPERATORS ──

  // jb19: x=10-3=7, x=7*2=14
  { id: "jb19", topic: "Java Basics", question: "What is output by the code to the right?<pre><code>int x = 10;\nx -= 3;\nx *= 2;\nout.println(x);</code></pre>", choices: ["4", "7", "14", "17", "There is no output due to a compile error."], answer: 2, hint: "x -= 3 means x = x - 3. Then x *= 2 means x = x * 2.", explanation: "x=10-3=7. Then x=7*2=14." },

  // jb20: a=20/3=6, a=6%4=2
  { id: "jb20", topic: "Java Basics", question: "What is output by the code to the right?<pre><code>int a = 20;\na /= 3;\na %= 4;\nout.println(a);</code></pre>", choices: ["0", "1", "2", "3", "There is no output due to a compile error."], answer: 2, hint: "20/3=6 (integer division), then 6%4=2.", explanation: "a=20/3=6 (integer division). a=6%4=2." },

  // ── CHAR ARITHMETIC ──

  // jb21: 'A'=65, 65+3=68, (char)68='D'
  { id: "jb21", topic: "Java Basics", question: "What is output by the code to the right?<pre><code>char c = 'A';\nout.println((char)(c + 3));</code></pre>", choices: ["A", "C", "D", "68", "There is no output due to a compile error."], answer: 2, hint: "'A' has ASCII value 65. Adding 3 gives 68, which is 'D'.", explanation: "'A'=65. 65+3=68. (char)68='D'." },

  // jb22: 'A'=65, c+1=66, (char)66='B', then c-32=33, (char)33='!'
  { id: "jb22", topic: "Java Basics", question: "What is output by the code to the right?<pre><code>char c = 'A';\nout.print((char)(c + 1));\nout.print((char)(c + 32));</code></pre>", choices: ["Ba", "Bb", "AB", "B!", "There is no output due to a compile error."], answer: 0, hint: "'A' is 65. c+1=66 is 'B'. c+32=97 is 'a' (lowercase).", explanation: "c='A'=65. (char)(65+1)=(char)66='B'. (char)(65+32)=(char)97='a'. Output: Ba." },

  // ── TERNARY OPERATOR ──

  // jb23: -5 > 0 is false, so prints "neg"
  { id: "jb23", topic: "Java Basics", question: "What is output by the code to the right?<pre><code>int x = -5;\nout.print(x > 0 ? \"pos\" : \"neg\");</code></pre>", choices: ["pos", "neg", "-5", "true", "There is no output due to a compile error."], answer: 1, hint: "The ternary checks if x > 0. Since x is -5, the condition is false.", explanation: "-5 > 0 is false, so the ternary evaluates to \"neg\"." },

  // jb24: 8>12 false, so b-a=12-8=4
  { id: "jb24", topic: "Java Basics", question: "What is output by the code to the right?<pre><code>int a = 8, b = 12;\nout.println(a > b ? a - b : b - a);</code></pre>", choices: ["-4", "4", "8", "12", "There is no output due to a compile error."], answer: 1, hint: "8 > 12 is false, so the false branch b - a executes.", explanation: "a>b is 8>12 which is false. So b-a=12-8=4." },

  // ── ESCAPE SEQUENCES ──

  // jb25: \" prints a literal double-quote
  { id: "jb25", topic: "Java Basics", question: "What is output by the code to the right?<pre><code>out.println(\"She said \\\"Hi\\\"\");</code></pre>", choices: ["She said \\\"Hi\\\"", "She said \"Hi\"", "She said Hi", "She said ''Hi''", "There is no output due to a compile error."], answer: 1, hint: "\\\" is the escape sequence for a literal double-quote character.", explanation: "\\\" prints a literal double-quote. Output: She said \"Hi\"." },
];
