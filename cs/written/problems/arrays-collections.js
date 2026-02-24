// UIL Computer Science – Arrays & Collections (ArrayList, Stack, Queue, HashMap, HashSet)
// All questions in UIL "What is output by the code to the right?" format using out.print/out.println
const ARRAYS_COLLECTIONS_PROBLEMS = [

  // ══════════════════════════════════════════
  //  1D ARRAY MANIPULATION
  // ══════════════════════════════════════════

  { id: "ac1", topic: "Arrays & Collections", question: "What is output by the code to the right?<pre><code>int[] a = {3, 7, 2, 8, 5};\nint sum = 0;\nfor (int i = 0; i &lt; a.length; i += 2)\n    sum += a[i];\nout.println(sum);</code></pre>", choices: ["10", "12", "15", "18", "There is no output due to a runtime error."], answer: 0, hint: "i steps by 2: indices 0, 2, 4. Sum those elements", explanation: "i=0: a[0]=3. i=2: a[2]=2. i=4: a[4]=5. sum = 3+2+5 = 10." },

  { id: "ac2", topic: "Arrays & Collections", question: "What is output by the code to the right?<pre><code>int[] a = {4, 1, 7, 3, 9, 2};\nfor (int i = 0; i &lt; a.length - 1; i++) {\n    if (a[i] &gt; a[i + 1]) {\n        int t = a[i];\n        a[i] = a[i + 1];\n        a[i + 1] = t;\n    }\n}\nout.println(a[a.length - 1]);</code></pre>", choices: ["2", "3", "7", "9", "There is no output due to a runtime error."], answer: 3, hint: "This is one pass of bubble sort. The largest element bubbles to the end", explanation: "Pass: [4,1,7,3,9,2] -> swap(4,1) [1,4,7,3,9,2] -> no swap(4,7) -> swap(7,3) [1,4,3,7,9,2] -> no swap(7,9) -> swap(9,2) [1,4,3,7,2,9]. a[5] = 9." },

  { id: "ac3", topic: "Arrays & Collections", question: "What is output by the code to the right?<pre><code>int[] a = {5, 12, 8, 3, 17, 6};\nint min = a[0], idx = 0;\nfor (int i = 1; i &lt; a.length; i++)\n    if (a[i] &lt; min) { min = a[i]; idx = i; }\nout.println(idx + \" \" + min);</code></pre>", choices: ["0 5", "3 3", "2 8", "5 6", "There is no output due to a compile error."], answer: 1, hint: "Finds the index and value of the minimum element", explanation: "Min element is 3 at index 3. Output: 3 3." },

  { id: "ac4", topic: "Arrays & Collections", question: "What is output by the code to the right?<pre><code>int[] a = {2, 4, 6, 8, 10};\nint temp = a[0];\nfor (int i = 0; i &lt; a.length - 1; i++)\n    a[i] = a[i + 1];\na[a.length - 1] = temp;\nout.println(Arrays.toString(a));</code></pre>", choices: ["[4, 6, 8, 10, 2]", "[10, 2, 4, 6, 8]", "[2, 4, 6, 8, 10]", "[2, 2, 4, 6, 8]", "There is no output due to a compile error."], answer: 0, hint: "Saves first element, shifts everything left by one, places saved element at end", explanation: "temp=2. Shift left: a becomes [4,6,8,10,10]. Set a[4]=2. Result: [4, 6, 8, 10, 2]." },

  // ══════════════════════════════════════════
  //  ARRAYS.SORT & ARRAYS.TOSTRING
  // ══════════════════════════════════════════

  { id: "ac5", topic: "Arrays & Collections", question: "What is output by the code to the right?<pre><code>int[] a = {9, 3, 7, 1, 5};\nArrays.sort(a);\nout.println(a[1] + a[3]);</code></pre>", choices: ["4", "8", "10", "12", "There is no output due to a compile error."], answer: 2, hint: "After sorting: {1, 3, 5, 7, 9}. Add elements at indices 1 and 3", explanation: "Sorted: [1, 3, 5, 7, 9]. a[1]=3, a[3]=7. 3+7 = 10." },

  { id: "ac6", topic: "Arrays & Collections", question: "What is output by the code to the right?<pre><code>String[] s = {\"Bat\", \"Apple\", \"Cat\"};\nArrays.sort(s);\nout.println(Arrays.toString(s));</code></pre>", choices: ["[Apple, Bat, Cat]", "[Bat, Apple, Cat]", "[Cat, Bat, Apple]", "[apple, bat, cat]", "There is no output due to a compile error."], answer: 0, hint: "Arrays.sort on Strings uses lexicographic (alphabetical) order", explanation: "Alphabetical sort: Apple < Bat < Cat. Result: [Apple, Bat, Cat]." },

  // ══════════════════════════════════════════
  //  2D ARRAY TRACES
  // ══════════════════════════════════════════

  { id: "ac7", topic: "Arrays & Collections", question: "What is output by the code to the right?<pre><code>int[][] m = {{1, 3, 4},\n             {2, 5, 6},\n             {9, 7, 8}};\nint sum = 0;\nfor (int r = 0; r &lt; 3; r++)\n    sum += m[r][2 - r];\nout.println(sum);</code></pre>", choices: ["12", "14", "15", "18", "There is no output due to a runtime error."], answer: 3, hint: "This traces the anti-diagonal: m[0][2], m[1][1], m[2][0]", explanation: "m[0][2]=4, m[1][1]=5, m[2][0]=9. sum = 4+5+9 = 18." },

  { id: "ac8", topic: "Arrays & Collections", question: "What is output by the code to the right?<pre><code>int[][] m = {{1, 2, 3},\n             {4, 5, 6},\n             {7, 8, 9}};\nint sum = 0;\nfor (int c = 0; c &lt; 3; c++)\n    sum += m[c][c];\nout.println(sum);</code></pre>", choices: ["6", "12", "15", "18", "There is no output due to a runtime error."], answer: 2, hint: "m[c][c] traces the main diagonal", explanation: "Main diagonal: m[0][0]=1, m[1][1]=5, m[2][2]=9. sum = 1+5+9 = 15." },

  { id: "ac9", topic: "Arrays & Collections", question: "What is output by the code to the right?<pre><code>int[][] g = {{1, 2}, {3, 4}, {5, 6}};\nint s = 0;\nfor (int r = 0; r &lt; g.length; r++)\n    s += g[r][0];\nout.println(s);</code></pre>", choices: ["3", "6", "9", "12", "There is no output due to a runtime error."], answer: 2, hint: "Sums the first column: g[0][0], g[1][0], g[2][0]", explanation: "First column: g[0][0]=1, g[1][0]=3, g[2][0]=5. s = 1+3+5 = 9." },

  // ══════════════════════════════════════════
  //  ARRAYLIST BASICS & PRINTING
  // ══════════════════════════════════════════

  { id: "ac10", topic: "Arrays & Collections", question: "What is output by the code to the right?<pre><code>ArrayList&lt;Integer&gt; a = new ArrayList&lt;&gt;();\na.add(10); a.add(20); a.add(30);\na.add(1, 15);\na.set(3, 25);\nout.println(a);</code></pre>", choices: ["[10, 15, 20, 25]", "[10, 15, 20, 30]", "[10, 15, 25, 30]", "[15, 10, 20, 25]", "There is no output due to a runtime error."], answer: 0, hint: "add(1,15) inserts 15 at index 1. set(3,25) replaces index 3", explanation: "Start: [10,20,30]. add(1,15): [10,15,20,30]. set(3,25): replaces index 3 (30) with 25: [10, 15, 20, 25]." },

  { id: "ac11", topic: "Arrays & Collections", question: "What is output by the code to the right?<pre><code>ArrayList&lt;String&gt; a = new ArrayList&lt;&gt;();\na.add(\"X\"); a.add(\"Y\"); a.add(\"Z\");\na.remove(0);\na.add(0, \"W\");\nout.println(a.indexOf(\"Y\"));</code></pre>", choices: ["0", "1", "2", "-1", "There is no output due to a runtime error."], answer: 1, hint: "After remove(0) and add(0,\"W\"), figure out where \"Y\" ends up", explanation: "Start: [X,Y,Z]. remove(0): [Y,Z]. add(0,\"W\"): [W,Y,Z]. indexOf(\"Y\") = 1." },

  // ══════════════════════════════════════════
  //  COLLECTIONS.ROTATE
  // ══════════════════════════════════════════

  { id: "ac12", topic: "Arrays & Collections", question: "What is output by the code to the right?<pre><code>ArrayList&lt;Integer&gt; a;\na = new ArrayList&lt;&gt;();\nfor (int y = 1; y &lt;= 5; y++)\n    a.add(y * 10);\nCollections.rotate(a, 2);\nout.println(a);</code></pre>", choices: ["[10, 20, 30, 40, 50]", "[30, 40, 50, 10, 20]", "[40, 50, 10, 20, 30]", "[20, 30, 40, 50, 10]", "There is no output due to a compile error."], answer: 2, hint: "rotate(list, 2) shifts elements to the right by 2 positions (wrapping around)", explanation: "List: [10,20,30,40,50]. rotate(a,2) shifts right by 2: last 2 elements (40,50) move to front. Result: [40, 50, 10, 20, 30]." },

  { id: "ac13", topic: "Arrays & Collections", question: "What is output by the code to the right?<pre><code>ArrayList&lt;Integer&gt; a;\na = new ArrayList&lt;&gt;();\nfor (int y = 1; y &lt; 30; y += 4)\n    a.add(y);\nCollections.rotate(a, -2);\nout.println(a);</code></pre>", choices: ["[1, 5, 9, 13, 17, 21, 25, 29]", "[9, 13, 17, 21, 25, 29, 1, 5]", "[25, 29, 1, 5, 9, 13, 17, 21]", "[5, 9, 13, 17, 21, 25, 29, 1]", "There is no output due to a compile error."], answer: 1, hint: "Build list with y=1,5,9,13,17,21,25,29. rotate(-2) shifts left by 2", explanation: "List: [1,5,9,13,17,21,25,29]. rotate(a,-2) shifts left by 2: first 2 elements move to end. Result: [9, 13, 17, 21, 25, 29, 1, 5]." },

  // ══════════════════════════════════════════
  //  ARRAYLIST REMOVEIF (LAMBDA)
  // ══════════════════════════════════════════

  { id: "ac14", topic: "Arrays & Collections", question: "What is output by the code to the right?<pre><code>ArrayList&lt;Integer&gt; a = new ArrayList&lt;&gt;();\nfor (int i = 1; i &lt;= 8; i++)\n    a.add(i);\na.removeIf(n -&gt; n % 3 == 0);\nout.println(a);</code></pre>", choices: ["[3, 6]", "[1, 2, 4, 5, 7, 8]", "[1, 2, 3, 4, 5, 7, 8]", "[1, 2, 4, 5, 6, 7, 8]", "There is no output due to a compile error."], answer: 1, hint: "removeIf removes elements where the condition is true. Which are divisible by 3?", explanation: "List: [1,2,3,4,5,6,7,8]. removeIf(n -> n%3==0) removes 3 and 6. Result: [1, 2, 4, 5, 7, 8]." },

  { id: "ac15", topic: "Arrays & Collections", question: "What is output by the code to the right?<pre><code>ArrayList&lt;String&gt; a = new ArrayList&lt;&gt;();\na.add(\"ant\"); a.add(\"bee\");\na.add(\"cat\"); a.add(\"dog\");\na.removeIf(s -&gt; s.length() &gt; 3);\nout.println(a);</code></pre>", choices: ["[ant, bee, cat, dog]", "[ant, bee, cat]", "[]", "[dog]", "There is no output due to a compile error."], answer: 0, hint: "All four strings have exactly 3 characters. Is length > 3 ever true?", explanation: "\"ant\"(3), \"bee\"(3), \"cat\"(3), \"dog\"(3). None have length > 3, so nothing is removed. Result: [ant, bee, cat, dog]." },

  // ══════════════════════════════════════════
  //  AUTOBOXING TRICK: remove(int) vs remove(Integer)
  // ══════════════════════════════════════════

  { id: "ac16", topic: "Arrays & Collections", question: "What is output by the code to the right?<pre><code>ArrayList&lt;Integer&gt; a = new ArrayList&lt;&gt;();\na.add(10); a.add(20); a.add(30);\na.remove(1);\nout.println(a);</code></pre>", choices: ["[10, 30]", "[20, 30]", "[10, 20]", "[10, 20, 30]", "There is no output due to a runtime error."], answer: 0, hint: "remove(1) removes the element at index 1 (not the value 1)", explanation: "a = [10,20,30]. remove(1) removes index 1 (value 20). Result: [10, 30]." },

  { id: "ac17", topic: "Arrays & Collections", question: "What is output by the code to the right?<pre><code>ArrayList&lt;Integer&gt; a = new ArrayList&lt;&gt;();\na.add(10); a.add(20); a.add(30);\na.remove(Integer.valueOf(20));\nout.println(a);</code></pre>", choices: ["[10, 30]", "[20, 30]", "[10, 20]", "[10, 20, 30]", "There is no output due to a runtime error."], answer: 0, hint: "remove(Integer.valueOf(20)) removes the object equal to 20, not index 20", explanation: "remove(Integer.valueOf(20)) removes by value (the Integer object 20). Removes 20 from list. Result: [10, 30]." },

  // ══════════════════════════════════════════
  //  ENHANCED FOR LOOP OVER ARRAYLIST
  // ══════════════════════════════════════════

  { id: "ac18", topic: "Arrays & Collections", question: "What is output by the code to the right?<pre><code>ArrayList&lt;Integer&gt; a = new ArrayList&lt;&gt;();\na.add(3); a.add(7); a.add(2); a.add(5);\nint sum = 0;\nfor (int x : a)\n    if (x % 2 == 1) sum += x;\nout.println(sum);</code></pre>", choices: ["2", "5", "10", "15", "There is no output due to a compile error."], answer: 3, hint: "Sum the odd elements: 3, 7, 5", explanation: "Odd elements: 3, 7, 5. sum = 3+7+5 = 15." },

  // ══════════════════════════════════════════
  //  STACK OPERATIONS
  // ══════════════════════════════════════════

  { id: "ac19", topic: "Arrays & Collections", question: "What is output by the code to the right?<pre><code>Stack&lt;String&gt; s = new Stack&lt;&gt;();\ns.push(\"A\"); s.push(\"B\"); s.push(\"C\");\ns.pop();\ns.push(\"D\");\nout.println(s.peek());</code></pre>", choices: ["A", "B", "C", "D", "There is no output due to a runtime error."], answer: 3, hint: "Stack is LIFO. After push A,B,C and pop (removes C), push D. What is on top?", explanation: "Stack after push A,B,C: [A,B,C]. pop() removes C: [A,B]. push D: [A,B,D]. peek() = D." },

  { id: "ac20", topic: "Arrays & Collections", question: "What is output by the code to the right?<pre><code>Stack&lt;Integer&gt; s = new Stack&lt;&gt;();\nfor (int i = 1; i &lt;= 5; i++)\n    s.push(i * 2);\nint sum = 0;\nsum += s.pop();\nsum += s.pop();\nout.println(sum + \" \" + s.peek());</code></pre>", choices: ["18 6", "6 8", "14 4", "10 8", "There is no output due to a runtime error."], answer: 0, hint: "Stack after pushes: [2,4,6,8,10]. Pop twice from the top (10 then 8)", explanation: "Stack: [2,4,6,8,10] (10 on top). pop()=10, pop()=8. sum=18. peek()=6. Output: 18 6." },

  // ══════════════════════════════════════════
  //  HASHMAP & HASHSET
  // ══════════════════════════════════════════

  { id: "ac21", topic: "Arrays & Collections", question: "What is output by the code to the right?<pre><code>HashMap&lt;String, Integer&gt; m = new HashMap&lt;&gt;();\nm.put(\"a\", 5);\nm.put(\"b\", 10);\nm.put(\"a\", 15);\nm.put(\"c\", 20);\nout.println(m.get(\"a\") + m.get(\"b\"));</code></pre>", choices: ["15", "20", "25", "30", "There is no output due to a compile error."], answer: 2, hint: "Putting key \"a\" again overwrites its old value (5) with 15", explanation: "m.put(\"a\",15) overwrites the previous value 5. m.get(\"a\")=15, m.get(\"b\")=10. 15+10 = 25." },

  { id: "ac22", topic: "Arrays & Collections", question: "What is output by the code to the right?<pre><code>HashSet&lt;String&gt; s = new HashSet&lt;&gt;();\ns.add(\"cat\"); s.add(\"dog\");\ns.add(\"cat\"); s.add(\"bird\");\nout.println(s.size() + \" \" + s.contains(\"fish\"));</code></pre>", choices: ["4 false", "3 false", "3 true", "4 true", "There is no output due to a compile error."], answer: 1, hint: "Sets ignore duplicate additions. \"cat\" is added twice but stored once", explanation: "Set contains {cat, dog, bird} (duplicate cat ignored). size()=3. contains(\"fish\")=false. Output: 3 false." },

];
