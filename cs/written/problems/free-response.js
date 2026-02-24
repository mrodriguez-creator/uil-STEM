// UIL Computer Science – Free Response (Q39–Q40 style)
// These are the hardest questions on a UIL written test. On real tests, Q39–Q40
// are free-response where students write a discrete answer. Here we simulate
// that with 5 plausible computed answers as choices.
// Uses out.print / out.println (UIL static import convention).
const FREE_RESPONSE_PROBLEMS = [

  // ══════════════════════════════════════════════════
  //  A) COMPLEX RECURSION TRACES (fr1 – fr4)
  // ══════════════════════════════════════════════════

  // fr1: Mutual recursion – two functions calling each other
  { id: "fr1", topic: "Free Response", question: "What is output by the code to the right?<pre><code>public static int f(int n) {\n  if (n <= 0) return 1;\n  return f(n - 1) + g(n - 1);\n}\npublic static int g(int n) {\n  if (n <= 0) return 2;\n  return f(n - 2) + g(n - 1);\n}\n//client code:\nout.println(f(3));</code></pre>", choices: ["8", "10", "12", "14", "16"], answer: 1, hint: "Build a call tree. f(3) = f(2)+g(2). Expand each branch fully. g's base case returns 2, not 1.", explanation: "f(3)=f(2)+g(2). f(2)=f(1)+g(1). f(1)=f(0)+g(0)=1+2=3. g(1)=f(-1)+g(0)=1+2=3. f(2)=3+3=6. g(2)=f(0)+g(1)=1+3=4. f(3)=6+4=10." },

  // fr2: Recursion with string manipulation – recursive divide-and-swap
  { id: "fr2", topic: "Free Response", question: "What is output by the code to the right?<pre><code>public static String r(String s) {\n  if (s.length() <= 1) return s;\n  int m = s.length() / 2;\n  return r(s.substring(m)) +\n         r(s.substring(0, m));\n}\n//client code:\nout.println(r(\"ABCDEF\"));</code></pre>", choices: ["FEDCBA", "BADCFE", "CBAFED", "DEFABC", "ABCDEF"], answer: 0, hint: "The function splits the string in half and recursively swaps the halves. Trace from the leaves up.", explanation: "r(\"ABCDEF\"): m=3, r(\"DEF\")+r(\"ABC\"). r(\"DEF\"): m=1, r(\"EF\")+r(\"D\"). r(\"EF\"): m=1, r(\"F\")+r(\"E\")=\"FE\". So r(\"DEF\")=\"FED\". r(\"ABC\"): m=1, r(\"BC\")+r(\"A\"). r(\"BC\"): m=1, r(\"C\")+r(\"B\")=\"CB\". So r(\"ABC\")=\"CBA\". Result: \"FED\"+\"CBA\"=\"FEDCBA\"." },

  // fr3: Recursion with array – divide-and-conquer sum of mid elements
  { id: "fr3", topic: "Free Response", question: "What is output by the code to the right?<pre><code>public static int f(\n    int[] a, int lo, int hi) {\n  if (lo >= hi) return 0;\n  int mid = (lo + hi) / 2;\n  return a[mid] +\n    f(a, lo, mid) + f(a, mid+1, hi);\n}\n//client code:\nint[] arr = {3,1,4,1,5,9,2,6};\nout.println(f(arr, 0,\n    arr.length - 1));</code></pre>", choices: ["25", "28", "31", "22", "19"], answer: 0, hint: "This recursion picks the midpoint value and recurses on left/right halves. Not every element gets added — base case is lo >= hi (returns 0).", explanation: "f(0,7): mid=3, a[3]=1, +f(0,3)+f(4,7). f(0,3): mid=1, a[1]=1, +f(0,1)+f(2,3). f(0,1): mid=0, a[0]=3, +f(0,0)+f(1,1)=3. f(2,3): mid=2, a[2]=4, +f(2,2)+f(3,3)=4. f(0,3)=1+3+4=8. f(4,7): mid=5, a[5]=9, +f(4,5)+f(6,7). f(4,5): mid=4, a[4]=5=5. f(6,7): mid=6, a[6]=2=2. f(4,7)=9+5+2=16. f(0,7)=1+8+16=25. (Index 7 is never a mid, so a[7]=6 is excluded.)" },

  // fr4: Russian peasant multiplication (recursion producing specific value)
  { id: "fr4", topic: "Free Response", question: "What is output by the code to the right?<pre><code>public static int h(int a, int b) {\n  if (b == 0) return 0;\n  if (b % 2 == 0)\n    return h(a + a, b / 2);\n  return a + h(a + a, b / 2);\n}\n//client code:\nout.println(h(7, 13));</code></pre>", choices: ["84", "91", "78", "98", "77"], answer: 1, hint: "When b is odd, add a to the result. When b is even, just double a and halve b. This algorithm multiplies a * b using only addition and bit shifts.", explanation: "h(7,13): 13 odd, 7+h(14,6). h(14,6): 6 even, h(28,3). h(28,3): 3 odd, 28+h(56,1). h(56,1): 1 odd, 56+h(112,0). h(112,0)=0. Unwinding: 56+0=56, 28+56=84, h(14,6)=84, 7+84=91. This computes 7*13=91." },

  // ══════════════════════════════════════════════════
  //  B) COMPLEX OOP TRACES (fr5 – fr8)
  // ══════════════════════════════════════════════════

  // fr5: Field hiding + virtual method dispatch during construction
  { id: "fr5", topic: "Free Response", question: "What is output by the code to the right?<pre><code>class A {\n  int x = 1;\n  A() { x += get(); }\n  int get() { return 10; }\n}\nclass B extends A {\n  int x = 2;\n  B() { x += get(); }\n  int get() { return 20; }\n}\n//client code:\nB b = new B();\nout.println(((A)b).x + \" \" + b.x);</code></pre>", choices: ["11 22", "21 22", "11 42", "21 42", "1 2"], answer: 1, hint: "Fields are hidden, not overridden. During A's constructor, get() dispatches to B's version (virtual). A.x and B.x are separate fields.", explanation: "new B(): 1) A's field init: A.x=1. 2) A() body: x += get(). get() dispatches to B.get()=20 (virtual). A.x = 1+20 = 21. 3) B's field init: B.x=2. 4) B() body: x += get(). B.get()=20. B.x = 2+20 = 22. ((A)b).x accesses A's hidden field = 21. b.x accesses B's field = 22. Output: \"21 22\"." },

  // fr6: Static vs instance method resolution
  { id: "fr6", topic: "Free Response", question: "What is output by the code to the right?<pre><code>class A {\n  static String x() { return \"A\"; }\n  String y() { return \"a\"; }\n  String z() { return x() + y(); }\n}\nclass B extends A {\n  static String x() { return \"B\"; }\n  String y() { return \"b\"; }\n}\n//client code:\nA obj = new B();\nout.println(obj.x() + obj.y()\n    + obj.z());</code></pre>", choices: ["AbAb", "BbBb", "AbBb", "BbAb", "AaAa"], answer: 0, hint: "Static methods are resolved by compile-time type. Instance methods are resolved by runtime type. z() is inherited from A — which x() does it call?", explanation: "obj.x(): static, resolved by A -> \"A\". obj.y(): instance, resolved by B -> \"b\". obj.z(): inherited from A, calls x() statically within A -> \"A\", calls y() virtually -> B.y() -> \"b\". z() returns \"Ab\". Concatenation: \"A\"+\"b\"+\"Ab\" = \"AbAb\"." },

  // fr7: Interface + abstract class – who overrides what
  { id: "fr7", topic: "Free Response", question: "What is output by the code to the right?<pre><code>interface I { int f(); }\nabstract class A implements I {\n  public int f() { return g() + 1; }\n  abstract int g();\n}\nclass B extends A {\n  int g() { return 5; }\n  public int f() {\n    return g() + 2;\n  }\n}\nclass C extends A {\n  int g() { return 10; }\n}\n//client code:\nI x = new B();\nI y = new C();\nout.println(x.f() + y.f());</code></pre>", choices: ["16", "17", "18", "19", "22"], answer: 2, hint: "B overrides f(), so x.f() uses B's version. C does NOT override f(), so y.f() uses A's version which calls g() + 1.", explanation: "x.f(): B overrides f(). B.f() = B.g()+2 = 5+2 = 7. y.f(): C inherits A.f(). A.f() = g()+1 = C.g()+1 = 10+1 = 11. Total: 7+11 = 18." },

  // fr8: Constructor chaining with this() and super()
  { id: "fr8", topic: "Free Response", question: "What is output by the code to the right?<pre><code>class X {\n  int v;\n  X(int v) { this.v = v; }\n  X() { this(5); v *= 2; }\n  int get() { return v; }\n}\nclass Y extends X {\n  Y() { super(); }\n  Y(int v) {\n    super(v); this.v += 3;\n  }\n  int get() { return v + 1; }\n}\n//client code:\nX a = new Y();\nX b = new Y(4);\nout.println(a.get()+\" \"+b.get());</code></pre>", choices: ["10 7", "11 8", "10 8", "11 7", "6 5"], answer: 1, hint: "Y() calls super() which is X(). X() calls this(5) then v*=2, so v=10. get() is overridden by Y, which returns v+1.", explanation: "new Y(): Y() -> super() -> X() -> this(5) -> v=5, then v*=2 -> v=10. a.get() uses Y.get() = 10+1 = 11. new Y(4): Y(int) -> super(4) -> X(int) -> v=4, then v+=3 -> v=7. b.get() uses Y.get() = 7+1 = 8. Output: \"11 8\"." },

  // ══════════════════════════════════════════════════
  //  C) ALGORITHM OUTPUT (fr9 – fr12)
  // ══════════════════════════════════════════════════

  // fr9: Bubble sort after exactly 3 passes
  { id: "fr9", topic: "Free Response", question: "What is output by the code to the right?<pre><code>int[] a = {8,3,7,1,5,2,6,4};\nfor (int i = 0; i < 3; i++)\n  for (int j = 0;\n       j < a.length - 1 - i; j++)\n    if (a[j] > a[j+1]) {\n      int t = a[j];\n      a[j] = a[j+1];\n      a[j+1] = t;\n    }\nout.println(\n  a[0]+\" \"+a[1]+\" \"+a[2]);</code></pre>", choices: ["1 2 3", "1 3 5", "3 1 5", "1 3 2", "1 2 5"], answer: 3, hint: "Trace 3 full passes of bubble sort. After pass 0 the largest element is in place, after pass 1 the second largest, etc.", explanation: "Initial: [8,3,7,1,5,2,6,4]. Pass 0 (j=0..6): [3,7,1,5,2,6,4,8]. Pass 1 (j=0..5): [3,1,5,2,6,4,7,8]. Pass 2 (j=0..4): [1,3,2,5,4,6,7,8]. a[0]=1, a[1]=3, a[2]=2. Output: \"1 3 2\"." },

  // fr10: Binary search – how many comparisons
  { id: "fr10", topic: "Free Response", question: "What is output by the code to the right?<pre><code>int[] a = {2,5,8,12,16,23,\n    38,42,55,67,72,84,91};\nint target = 23, count = 0;\nint lo = 0, hi = a.length - 1;\nwhile (lo <= hi) {\n  int mid = (lo + hi) / 2;\n  count++;\n  if (a[mid] == target) break;\n  else if (a[mid] < target)\n    lo = mid + 1;\n  else hi = mid - 1;\n}\nout.println(count);</code></pre>", choices: ["2", "3", "4", "5", "6"], answer: 2, hint: "13 elements (indices 0-12). First mid = 6 (value 38). Track lo and hi after each comparison.", explanation: "Iter 1: lo=0, hi=12, mid=6, a[6]=38>23, hi=5, count=1. Iter 2: lo=0, hi=5, mid=2, a[2]=8<23, lo=3, count=2. Iter 3: lo=3, hi=5, mid=4, a[4]=16<23, lo=5, count=3. Iter 4: lo=5, hi=5, mid=5, a[5]=23==23, break, count=4. Output: 4." },

  // fr11: Stack algorithm trace – sum of even squares
  { id: "fr11", topic: "Free Response", question: "What is output by the code to the right?<pre><code>Stack&lt;Integer&gt; s = new Stack&lt;&gt;();\nfor (int i = 1; i <= 6; i++)\n  s.push(i * i);\nint sum = 0;\nwhile (!s.isEmpty()) {\n  int v = s.pop();\n  if (v % 2 == 0) sum += v;\n}\nout.println(sum);</code></pre>", choices: ["36", "50", "56", "60", "91"], answer: 2, hint: "Push 1,4,9,16,25,36 onto the stack. Pop all, but only add even values to sum.", explanation: "Stack contents (bottom to top): 1,4,9,16,25,36. Pop order: 36(even,sum=36), 25(odd), 16(even,sum=52), 9(odd), 4(even,sum=56), 1(odd). Output: 56." },

  // fr12: HashMap-based computation – sum of squared frequencies
  { id: "fr12", topic: "Free Response", question: "What is output by the code to the right?<pre><code>HashMap&lt;String,Integer&gt; m\n    = new HashMap&lt;&gt;();\nString[] w = {\"the\",\"cat\",\"sat\",\n    \"on\",\"the\",\"mat\",\"the\",\"cat\"};\nfor (String s : w)\n  m.merge(s, 1, Integer::sum);\nint result = 0;\nfor (int v : m.values())\n  result += v * v;\nout.println(result);</code></pre>", choices: ["14", "16", "18", "20", "8"], answer: 1, hint: "merge with Integer::sum counts word frequencies. Then sum the squares of all frequency values.", explanation: "Frequencies: the=3, cat=2, sat=1, on=1, mat=1. Sum of squares: 9+4+1+1+1 = 16." },

  // ══════════════════════════════════════════════════
  //  D) MATHEMATICAL / LOGICAL COMPUTATION (fr13 – fr16)
  // ══════════════════════════════════════════════════

  // fr13: Nested loop counting – triple combinations
  { id: "fr13", topic: "Free Response", question: "What is output by the code to the right?<pre><code>int count = 0;\nfor (int i = 1; i <= 5; i++)\n  for (int j = i; j <= 5; j++)\n    for (int k = j; k <= 5; k++)\n      count++;\nout.println(count);</code></pre>", choices: ["30", "35", "45", "55", "125"], answer: 1, hint: "This counts ordered triples (i,j,k) where 1 <= i <= j <= k <= 5. Be systematic: for each i, count all valid (j,k) pairs.", explanation: "i=1: j runs 1-5, inner counts: 5+4+3+2+1=15. i=2: 4+3+2+1=10. i=3: 3+2+1=6. i=4: 2+1=3. i=5: 1. Total: 15+10+6+3+1=35." },

  // fr14: Bitwise manipulation
  { id: "fr14", topic: "Free Response", question: "What is output by the code to the right?<pre><code>int a = 0xAC;\nint b = a >> 2;\nint c = a & b;\nint d = c | 0x15;\nout.println(d);</code></pre>", choices: ["45", "53", "57", "61", "77"], answer: 3, hint: "0xAC = 172 = 10101100 in binary. >> is arithmetic right shift. Work in binary for &, |.", explanation: "a = 0xAC = 10101100 (172). b = a>>2 = 00101011 (43). c = a&b = 10101100 & 00101011 = 00101000 (40). d = c|0x15 = 00101000 | 00010101 = 00111101 (61)." },

  // fr15: Modular arithmetic chain
  { id: "fr15", topic: "Free Response", question: "What is output by the code to the right?<pre><code>int x = 1;\nfor (int i = 1; i <= 10; i++)\n  x = (x * 3) % 7;\nout.println(x);</code></pre>", choices: ["1", "2", "3", "4", "6"], answer: 3, hint: "Track x through all 10 iterations. The sequence of x values will cycle — find the period.", explanation: "x values: i=1:3, i=2:2, i=3:6, i=4:4, i=5:5, i=6:1, i=7:3, i=8:2, i=9:6, i=10:4. The cycle is {3,2,6,4,5,1} with period 6. At i=10 (10 mod 6 = 4), x=4." },

  // fr16: XOR swap trick + arithmetic
  { id: "fr16", topic: "Free Response", question: "What is output by the code to the right?<pre><code>int x = 25, y = 42;\nx ^= y;\ny ^= x;\nx ^= y;\nint z = x - y;\nout.println(x+\" \"+y+\" \"+z);</code></pre>", choices: ["25 42 -17", "42 25 17", "0 0 0", "25 25 0", "42 42 0"], answer: 1, hint: "The three XOR operations form the classic XOR swap trick — the values of x and y are exchanged.", explanation: "x ^= y: x = 25^42 = 51. y ^= x: y = 42^51 = 25. x ^= y: x = 51^25 = 42. After swap: x=42, y=25. z = 42-25 = 17. Output: \"42 25 17\"." },

  // ══════════════════════════════════════════════════
  //  E) STRING / ARRAY MANIPULATION (fr17 – fr20)
  // ══════════════════════════════════════════════════

  // fr17: Complex string building with charAt and stride
  { id: "fr17", topic: "Free Response", question: "What is output by the code to the right?<pre><code>String s = \"COMPUTATION\";\nString r = \"\";\nfor (int i = s.length() - 1;\n     i >= 0; i -= 3)\n  r += \"\" + s.charAt(i)\n     + s.charAt(i > 0 ? i-1 : 0);\nout.println(r);</code></pre>", choices: ["NOTAUPOC", "NOITATU", "NOACPMOT", "NOCOUPAT", "NTAUPC"], answer: 0, hint: "s = \"COMPUTATION\" (length 11). Loop: i=10,7,4,1. Each iteration appends s.charAt(i) and s.charAt(i-1).", explanation: "COMPUTATION has indices 0-10: C(0)O(1)M(2)P(3)U(4)T(5)A(6)T(7)I(8)O(9)N(10). i=10: charAt(10)='N', charAt(9)='O' -> \"NO\". i=7: charAt(7)='T', charAt(6)='A' -> \"NOTA\". i=4: charAt(4)='U', charAt(3)='P' -> \"NOTAUP\". i=1: charAt(1)='O', charAt(0)='C' -> \"NOTAUPOC\"." },

  // fr18: 2D array – anti-diagonal sum
  { id: "fr18", topic: "Free Response", question: "What is output by the code to the right?<pre><code>int[][] g = new int[4][4];\nfor (int r = 0; r < 4; r++)\n  for (int c = 0; c < 4; c++)\n    g[r][c] = r * 4 + c + 1;\nint sum = 0;\nfor (int i = 0; i < 4; i++)\n  sum += g[i][3 - i];\nout.println(sum);</code></pre>", choices: ["28", "30", "34", "40", "32"], answer: 2, hint: "The grid is filled 1-16 row by row. The second loop sums the anti-diagonal: g[0][3], g[1][2], g[2][1], g[3][0].", explanation: "Grid: row0=[1,2,3,4], row1=[5,6,7,8], row2=[9,10,11,12], row3=[13,14,15,16]. Anti-diagonal: g[0][3]=4, g[1][2]=7, g[2][1]=10, g[3][0]=13. Sum = 4+7+10+13 = 34." },

  // fr19: ArrayList manipulation chain
  { id: "fr19", topic: "Free Response", question: "What is output by the code to the right?<pre><code>ArrayList&lt;Integer&gt; a =\n  new ArrayList&lt;&gt;(\n    Arrays.asList(\n      10,20,30,40,50,60));\na.remove(2);\na.add(2, 35);\na.set(0, a.get(4));\na.remove(Integer.valueOf(50));\nint sum = 0;\nfor (int i = 0; i < a.size();\n     i += 2)\n  sum += a.get(i);\nout.println(sum);</code></pre>", choices: ["100", "110", "120", "130", "105"], answer: 2, hint: "Trace the list after each operation. remove(2) removes by index. remove(Integer.valueOf(50)) removes by value (first occurrence).", explanation: "Start: [10,20,30,40,50,60]. remove(2): [10,20,40,50,60]. add(2,35): [10,20,35,40,50,60]. set(0,a.get(4)): a.get(4)=50, [50,20,35,40,50,60]. remove(Integer.valueOf(50)): removes first 50, [20,35,40,50,60]. Sum at i=0,2,4: 20+40+60=120." },

  // fr20: Character code arithmetic – Caesar-like shift
  { id: "fr20", topic: "Free Response", question: "What is output by the code to the right?<pre><code>char[] c = {'H','E','L','L','O'};\nString result = \"\";\nfor (int i = 0; i < c.length; i++){\n  int v = c[i] - 'A';\n  result +=\n    (char)('A' + (v + i) % 26);\n}\nout.println(result);</code></pre>", choices: ["HELLO", "HFNOS", "IGPQT", "HFMOS", "IFNOS"], answer: 1, hint: "Each character is shifted forward by its index position. H(+0), E(+1), L(+2), L(+3), O(+4). Compute each shift modulo 26.", explanation: "c[0]='H': v=7, (7+0)%26=7, 'A'+7='H'. c[1]='E': v=4, (4+1)%26=5, 'A'+5='F'. c[2]='L': v=11, (11+2)%26=13, 'A'+13='N'. c[3]='L': v=11, (11+3)%26=14, 'A'+14='O'. c[4]='O': v=14, (14+4)%26=18, 'A'+18='S'. Output: \"HFNOS\"." },

];
