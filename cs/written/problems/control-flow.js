// UIL Computer Science – Control Flow (Conditionals, Loops, Accumulation)
// Uses out.print / out.println / out.printf (UIL static import convention)
const CONTROL_FLOW_PROBLEMS = [

  // ══════════════════════════════════════════
  //  IF / ELSE with post-increment tricks
  // ══════════════════════════════════════════

  // cf1: i++=10 (i->11), 10==11 false. i++=11 (i->12), 11==11 true -> prints 2. Then prints i=12. "212"
  { id: "cf1", topic: "Control Flow", question: "What is output by the code to the right?<pre><code>int i = 10;\nif(i++ == 11)\n    out.print(1);\nelse if(i++ == 11)\n    out.print(2);\nout.println(i);</code></pre>", choices: ["212", "112", "211", "1212", "There is no output due to a compile error."], answer: 0, hint: "i++ uses current value then increments. First if: 10==11 false (i becomes 11). Second if: 11==11 true (i becomes 12).", explanation: "First if: i++ yields 10 (i becomes 11), 10==11 false. Second if: i++ yields 11 (i becomes 12), 11==11 true, prints 2. Then out.println(i) prints 12 with newline. Output: 212." },

  // cf2: x=5, x++==5 true (x->6), prints "A". The else is skipped. Then prints x=6. "A6"
  { id: "cf2", topic: "Control Flow", question: "What is output by the code to the right?<pre><code>int x = 5;\nif(x++ == 5)\n    out.print(\"A\");\nelse if(x++ == 6)\n    out.print(\"B\");\nout.println(x);</code></pre>", choices: ["A6", "B7", "A5", "B6", "There is no output due to a compile error."], answer: 0, hint: "x++ uses the current value (5) then increments. Since the first if is true, the else-if is never evaluated.", explanation: "x++ yields 5 (x becomes 6), 5==5 true, prints \"A\". else-if is skipped (no second increment). out.println(x) prints 6. Output: A6." },

  // cf3: dangling else — the else matches nearest if. a>3 true, b<8 false, prints "Y"
  { id: "cf3", topic: "Control Flow", question: "What is output by the code to the right?<pre><code>int a = 5, b = 10;\nif(a > 3)\n    if(b < 8)\n        out.print(\"X\");\n    else\n        out.print(\"Y\");\nelse\n    out.print(\"Z\");</code></pre>", choices: ["X", "Y", "Z", "XY", "There is no output due to a compile error."], answer: 1, hint: "The else binds to the nearest if (dangling-else rule). a>3 is true, then b<8 is false.", explanation: "a>3 is true, so we enter. b<8 is false (10<8 false), so the inner else prints \"Y\"." },

  // ══════════════════════════════════════════
  //  SWITCH with fall-through (no breaks)
  // ══════════════════════════════════════════

  // cf4: n=2 matches case 2. No breaks, falls through case 2,3,default. Prints "BCD"
  { id: "cf4", topic: "Control Flow", question: "What is output by the code to the right?<pre><code>int n = 2;\nswitch(n) {\n    case 1: out.print(\"A\");\n    case 2: out.print(\"B\");\n    case 3: out.print(\"C\");\n    default: out.print(\"D\");\n}</code></pre>", choices: ["B", "BC", "BCD", "ABCD", "There is no output due to a compile error."], answer: 2, hint: "No break statements means execution falls through from case 2 through default.", explanation: "n=2 matches case 2. No breaks, so fall-through prints \"B\", \"C\", \"D\". Output: BCD." },

  // cf5: n=5 matches no case, enters default. No break on default, but default is last -> prints "X"
  { id: "cf5", topic: "Control Flow", question: "What is output by the code to the right?<pre><code>int n = 5;\nswitch(n) {\n    case 1: out.print(\"A\"); break;\n    case 2: out.print(\"B\"); break;\n    case 3: out.print(\"C\");\n    default: out.print(\"X\");\n}</code></pre>", choices: ["A", "CX", "X", "AX", "There is no output due to a compile error."], answer: 2, hint: "n=5 matches no case, so execution jumps to default.", explanation: "n=5 doesn't match any case. default executes, prints \"X\"." },

  // cf6: switch on char 'B'. Falls through case 'B' and 'C' (no breaks), then break at 'D' would stop if reached but it's not a case here. Prints "23"
  { id: "cf6", topic: "Control Flow", question: "What is output by the code to the right?<pre><code>char ch = 'B';\nswitch(ch) {\n    case 'A': out.print(1); break;\n    case 'B': out.print(2);\n    case 'C': out.print(3); break;\n    case 'D': out.print(4);\n}</code></pre>", choices: ["2", "23", "234", "24", "There is no output due to a compile error."], answer: 1, hint: "ch='B' matches case 'B'. No break there, so falls through to case 'C' which has a break.", explanation: "ch='B' matches case 'B', prints 2. No break, falls through to case 'C', prints 3. break stops. Output: 23." },

  // cf7: switch on a double => compile error. switch only works on int, char, String, byte, short, enum.
  { id: "cf7", topic: "Control Flow", question: "What is output by the code to the right?<pre><code>double d = 2.0;\nswitch(d) {\n    case 1.0: out.print(\"A\"); break;\n    case 2.0: out.print(\"B\"); break;\n    default:  out.print(\"C\");\n}</code></pre>", choices: ["A", "B", "C", "BC", "There is no output due to a compile error."], answer: 4, hint: "Think about which data types are allowed in a switch statement.", explanation: "switch does not accept double (or float). Only int, byte, short, char, String, and enum are allowed. This causes a compile error." },

  // ══════════════════════════════════════════
  //  TERNARY EXPRESSIONS
  // ══════════════════════════════════════════

  // cf8: nested ternary. x=15. x>20 false -> inner ternary: x>10 true -> "medium"
  { id: "cf8", topic: "Control Flow", question: "What is output by the code to the right?<pre><code>int x = 15;\nout.println(x > 20 ? \"high\" :\n           x > 10 ? \"medium\" : \"low\");</code></pre>", choices: ["high", "medium", "low", "highmedium", "There is no output due to a compile error."], answer: 1, hint: "The outer ternary's false branch is itself another ternary expression.", explanation: "x>20 is false (15>20 false). Inner ternary: x>10 is true (15>10). Result: \"medium\"." },

  // cf9: ternary in concatenation. 7%2=1!=0 so "odd". prints "7 is odd"
  { id: "cf9", topic: "Control Flow", question: "What is output by the code to the right?<pre><code>int n = 7;\nout.println(n + \" is \" + (n % 2 == 0 ? \"even\" : \"odd\"));</code></pre>", choices: ["7 is even", "7 is odd", "7 is 1", "7is odd", "There is no output due to a compile error."], answer: 1, hint: "n%2 gives 1 when n is 7, so the condition n%2==0 is false.", explanation: "7%2=1, 1==0 is false, ternary yields \"odd\". Output: 7 is odd." },

  // ══════════════════════════════════════════
  //  FOR LOOPS – accumulation & complex update
  // ══════════════════════════════════════════

  // cf10: sum of squares 1+4+9+16+25=55
  { id: "cf10", topic: "Control Flow", question: "What is output by the code to the right?<pre><code>int sum = 0;\nfor(int i = 1; i <= 5; i++)\n    sum += i * i;\nout.println(sum);</code></pre>", choices: ["15", "25", "30", "55", "There is no output due to a compile error."], answer: 3, hint: "This computes 1*1 + 2*2 + 3*3 + 4*4 + 5*5.", explanation: "1+4+9+16+25=55." },

  // cf11: complex update expression. i: 2, 5, 11, 23. Only 2,5,11 are <20. Prints "2 5 11 "
  { id: "cf11", topic: "Control Flow", question: "What is output by the code to the right?<pre><code>for(int i = 2; i < 20; i = i * 2 + 1)\n    out.print(i + \" \");</code></pre>", choices: ["2 5 11 23 ", "2 5 11 ", "2 4 8 16 ", "2 5 11 23", "There is no output due to a compile error."], answer: 1, hint: "Trace the update expression i = i*2+1 carefully: 2, 5, 11, 23.", explanation: "i=2 (print, <20). i=2*2+1=5 (print, <20). i=5*2+1=11 (print, <20). i=11*2+1=23 (23<20 false, stop). Output: 2 5 11 ." },

  // cf12: for loop counting down with pre-decrement in update. i: 10,8,6,4,2. When i becomes 0, 0>0 is false.
  { id: "cf12", topic: "Control Flow", question: "What is output by the code to the right?<pre><code>int s = 0;\nfor(int i = 10; i > 0; i -= 2)\n    s += i;\nout.println(s);</code></pre>", choices: ["20", "25", "30", "35", "There is no output due to a compile error."], answer: 2, hint: "Sum the even numbers from 10 down to 2: 10+8+6+4+2.", explanation: "i goes 10,8,6,4,2. Sum = 10+8+6+4+2 = 30." },

  // ══════════════════════════════════════════
  //  WHILE LOOPS with state changes
  // ══════════════════════════════════════════

  // cf13: x halves via integer division: 100->50->25->12->6->3->1->0. That's 7 halvings.
  { id: "cf13", topic: "Control Flow", question: "What is output by the code to the right?<pre><code>int x = 100, count = 0;\nwhile(x > 0) {\n    x /= 2;\n    count++;\n}\nout.println(count);</code></pre>", choices: ["5", "6", "7", "8", "There is no output due to a compile error."], answer: 2, hint: "Trace x being halved by integer division: 100, 50, 25, 12, 6, 3, 1, 0.", explanation: "x: 100->50->25->12->6->3->1->0. That's 7 halvings. count=7." },

  // cf14: two variables converging. x=0,y=20. x+=4,y-=3 each iteration.
  // x=0,y=20: 0<20 true -> x=4,y=17. 4<17 -> x=8,y=14. 8<14 -> x=12,y=11. 12<11 false. Prints "12 11"
  { id: "cf14", topic: "Control Flow", question: "What is output by the code to the right?<pre><code>int x = 0, y = 20;\nwhile(x < y) {\n    x += 4;\n    y -= 3;\n}\nout.println(x + \" \" + y);</code></pre>", choices: ["12 11", "16 8", "8 14", "12 8", "There is no output due to a compile error."], answer: 0, hint: "Trace each iteration: x increases by 4, y decreases by 3, until x >= y.", explanation: "x=0,y=20 -> x=4,y=17 -> x=8,y=14 -> x=12,y=11. Now 12<11 is false. Output: 12 11." },

  // ══════════════════════════════════════════
  //  DO-WHILE LOOP
  // ══════════════════════════════════════════

  // cf15: do-while always executes at least once. n=1. Body: print 1, n*=2 -> n=2. 2<=5 true. print 2, n=4. 4<=5. print 4, n=8. 8<=5 false. Output: "1 2 4 "
  { id: "cf15", topic: "Control Flow", question: "What is output by the code to the right?<pre><code>int n = 1;\ndo {\n    out.print(n + \" \");\n    n *= 2;\n} while(n <= 5);</code></pre>", choices: ["1 2 4 ", "1 2 4 8 ", "2 4 ", "1 2 ", "There is no output due to a compile error."], answer: 0, hint: "do-while executes the body first, then checks the condition. n doubles each iteration.", explanation: "Print 1, n=2. 2<=5 true. Print 2, n=4. 4<=5 true. Print 4, n=8. 8<=5 false. Output: 1 2 4 ." },

  // ══════════════════════════════════════════
  //  BREAK & CONTINUE in loops
  // ══════════════════════════════════════════

  // cf16: continue skips even, break at i==7. Prints odd numbers < 7: "1 3 5 "
  { id: "cf16", topic: "Control Flow", question: "What is output by the code to the right?<pre><code>for(int i = 0; i < 10; i++) {\n    if(i % 2 == 0) continue;\n    if(i == 7) break;\n    out.print(i + \" \");\n}</code></pre>", choices: ["1 3 5 7 9 ", "1 3 5 ", "1 3 5 7 ", "0 2 4 6 8 ", "There is no output due to a compile error."], answer: 1, hint: "continue skips even values. break exits the loop entirely when i reaches 7.", explanation: "i=0 even skip. i=1 odd, not 7, print 1. i=2 skip. i=3 print. i=4 skip. i=5 print. i=6 skip. i=7 odd, i==7 break. Output: 1 3 5 ." },

  // cf17: break in while loop. sum=1,3,6,10. Breaks when sum>=10 at i=4. Prints "4 10"
  { id: "cf17", topic: "Control Flow", question: "What is output by the code to the right?<pre><code>int sum = 0, i = 0;\nwhile(i < 100) {\n    i++;\n    sum += i;\n    if(sum >= 10) break;\n}\nout.println(i + \" \" + sum);</code></pre>", choices: ["3 6", "4 10", "5 15", "10 10", "There is no output due to a compile error."], answer: 1, hint: "Track both i and sum each iteration until sum first reaches or exceeds 10.", explanation: "i=1,sum=1. i=2,sum=3. i=3,sum=6. i=4,sum=10. 10>=10, break. Output: 4 10." },

  // ══════════════════════════════════════════
  //  NESTED LOOPS
  // ══════════════════════════════════════════

  // cf18: left-aligned triangle pattern. i=1: "*", i=2: "**", i=3: "***", i=4: "****"
  { id: "cf18", topic: "Control Flow", question: "What is output by the code to the right?<pre><code>for(int i = 1; i <= 4; i++) {\n    for(int j = 1; j <= i; j++)\n        out.print(\"*\");\n    out.println();\n}</code></pre>", choices: ["*\n**\n***\n****", "****\n***\n**\n*", "****\n****\n****\n****", "* * * *\n* * *\n* *\n*", "There is no output due to a compile error."], answer: 0, hint: "Inner loop prints j from 1 to i stars, then a newline. i goes 1 to 4.", explanation: "i=1: 1 star. i=2: 2 stars. i=3: 3 stars. i=4: 4 stars. Each row on a new line. A left-aligned triangle." },

  // cf19: nested loop counting. Outer 1-3, inner 1-4. When i==j, print. i=1,j=1 print. i=2,j=2 print. i=3,j=3 print. Output: "1 2 3 "
  { id: "cf19", topic: "Control Flow", question: "What is output by the code to the right?<pre><code>for(int i = 1; i <= 3; i++)\n    for(int j = 1; j <= 4; j++)\n        if(i == j)\n            out.print(i + \" \");</code></pre>", choices: ["1 2 3 4 ", "1 2 3 ", "1 1 1 2 2 2 3 3 3 ", "1 2 3 4 5 6 ", "There is no output due to a compile error."], answer: 1, hint: "The print only executes when i equals j. Since i only goes up to 3, only i=j=1, 2, 3 are possible.", explanation: "Only when i==j: (1,1) prints 1, (2,2) prints 2, (3,3) prints 3. Output: 1 2 3 ." },

  // cf20: sum of all i*j products for i=1..3, j=1..3. (1+2+3)*(1+2+3) = 36
  { id: "cf20", topic: "Control Flow", question: "What is output by the code to the right?<pre><code>int total = 0;\nfor(int i = 1; i <= 3; i++)\n    for(int j = 1; j <= 3; j++)\n        total += i * j;\nout.println(total);</code></pre>", choices: ["18", "27", "36", "45", "There is no output due to a compile error."], answer: 2, hint: "Sum all products i*j for i=1..3 and j=1..3. This is (1+2+3)*(1+2+3).", explanation: "Sum = (1+2+3)*(1+2+3) = 6*6 = 36. Alternatively: 1+2+3+2+4+6+3+6+9 = 36." },

  // ══════════════════════════════════════════
  //  COMPLEX TRACES – combining multiple concepts
  // ══════════════════════════════════════════

  // cf21: sum 1..10 skipping multiples of 3. 55 - (3+6+9) = 55 - 18 = 37
  { id: "cf21", topic: "Control Flow", question: "What is output by the code to the right?<pre><code>int sum = 0;\nfor(int i = 1; i <= 10; i++) {\n    if(i % 3 == 0) continue;\n    sum += i;\n}\nout.println(sum);</code></pre>", choices: ["18", "37", "40", "55", "There is no output due to a compile error."], answer: 1, hint: "Skip multiples of 3 (3, 6, 9). Sum the rest: 1+2+4+5+7+8+10.", explanation: "Skips 3,6,9. Sum = 1+2+4+5+7+8+10 = 37. (Total 1-10 is 55, minus 3+6+9=18, gives 37.)" },

  // cf22: digit reversal with while loop. r: 0->4->43->432->4321
  { id: "cf22", topic: "Control Flow", question: "What is output by the code to the right?<pre><code>int n = 1234, r = 0;\nwhile(n > 0) {\n    r = r * 10 + n % 10;\n    n /= 10;\n}\nout.println(r);</code></pre>", choices: ["1234", "4321", "4312", "3412", "There is no output due to a compile error."], answer: 1, hint: "Each iteration extracts the last digit of n and appends it to r.", explanation: "r: 0->4->43->432->4321. This reverses the digits. Output: 4321." },

];
