// UIL CS Programming – Pre-Hard (Learning Tier)
// These teach concepts needed for Hard problems: helper methods, recursion, 2D arrays, StringBuilder, Stack, BFS, bitwise ops.

const PREHARD_PROBLEMS = [
  // ==================== PH1: Helper Methods ====================
  {
    id: "ph1",
    name: "Prime Checker",
    difficulty: "Pre-Hard",
    description:
      "<b>\ud83c\udf93 Learn: Helper Methods</b><br><br>" +
      "In Java, you can write <b>static methods outside of main</b> to organize your code and avoid repetition. " +
      "A helper method is defined inside the class but outside <code>main</code>:<br><br>" +
      "<pre>public class MyClass {\n" +
      "    // Helper method — lives OUTSIDE main\n" +
      "    public static boolean isPrime(int n) {\n" +
      "        // return true if n is prime\n" +
      "    }\n\n" +
      "    public static void main(String[] args) {\n" +
      "        // Call it FROM main:\n" +
      "        boolean result = isPrime(7);\n" +
      "    }\n" +
      "}</pre><br>" +
      "<b>Key rules for helper methods:</b>" +
      "<ul>" +
      "<li>They must be <code>static</code> (because <code>main</code> is static)</li>" +
      "<li>They are defined inside the class but outside any other method</li>" +
      "<li>They can accept parameters and return values</li>" +
      "</ul><br>" +
      "<b>Your task:</b> Write a helper method <code>isPrime(int n)</code> that returns <code>true</code> if <code>n</code> is prime. " +
      "For each test case, read a line of space-separated integers and print <code>PRIME</code> or <code>NOT PRIME</code> for each, space-separated.<br><br>" +
      "<b>Prime check logic:</b> A number is prime if it is &ge; 2 and has no divisors from 2 to &radic;n. " +
      "The numbers 0 and 1 are NOT prime.",
    inputFormat:
      "The first line contains <b>T</b>, the number of test cases.<br>" +
      "Each test case is a single line of space-separated integers.",
    outputFormat:
      "For each test case, print <code>PRIME</code> or <code>NOT PRIME</code> for each integer, space-separated on one line.",
    constraints: "1 &le; T &le; 10. Each line has 1 to 10 integers. Each integer is between 0 and 10000.",
    sampleInput: "2\n7 4 13 1 2\n100 97 101",
    sampleOutput: "PRIME NOT PRIME PRIME NOT PRIME PRIME\nNOT PRIME PRIME PRIME",
    testCases: [
      {
        input: "3\n7 4 13 1 2\n100 97 101\n2",
        expected: "PRIME NOT PRIME PRIME NOT PRIME PRIME\nNOT PRIME PRIME PRIME\nPRIME\n"
      },
      {
        input: "4\n0 1 2 3\n17 19 23 25\n49 50 51 53\n9973",
        expected: "NOT PRIME NOT PRIME PRIME PRIME\nPRIME PRIME PRIME NOT PRIME\nNOT PRIME NOT PRIME NOT PRIME PRIME\nPRIME\n"
      },
      {
        input: "2\n11 12 13 14 15\n997 998 999 1000",
        expected: "PRIME NOT PRIME PRIME NOT PRIME NOT PRIME\nPRIME NOT PRIME NOT PRIME NOT PRIME\n"
      }
    ],
    starterCode:
`import java.util.*;

public class Prime_Checker {

    // ★ HELPER METHOD — defined OUTSIDE main, INSIDE the class
    // This method takes an int and returns true if it's prime.
    public static boolean isPrime(int n) {
        // Step 1: Numbers less than 2 are not prime
        // if (n < 2) return false;

        // Step 2: Check for divisors from 2 up to sqrt(n)
        // for (int i = 2; i * i <= n; i++) {
        //     if (n % i == 0) return false;
        // }

        // Step 3: If no divisors found, it's prime
        // return true;

        return false; // placeholder — replace with your logic
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = Integer.parseInt(sc.nextLine().trim());
        for (int t = 0; t < T; t++) {
            String[] parts = sc.nextLine().trim().split(" ");

            // Step 4: For each number, call isPrime() and build the output
            // StringBuilder sb = new StringBuilder();
            // for (int i = 0; i < parts.length; i++) {
            //     int num = Integer.parseInt(parts[i]);
            //     if (i > 0) sb.append(" ");
            //     sb.append(isPrime(num) ? "PRIME" : "NOT PRIME");
            // }
            // System.out.println(sb.toString());
        }
    }
}`,
    hint: "Write isPrime outside main. Check if n < 2 first (not prime). Then loop from 2 to sqrt(n) checking divisibility. Call isPrime from inside main for each number.",
    concepts: ["static methods", "helper methods", "prime checking", "method calls"],
    dataFile: "primechecker.dat"
  },

  // ==================== PH2: Recursion Basics ====================
  {
    id: "ph2",
    name: "Factorial",
    difficulty: "Pre-Hard",
    description:
      "<b>\ud83c\udf93 Learn: Recursion</b><br><br>" +
      "<b>Recursion</b> is when a method calls itself. Every recursive method needs two things:<br>" +
      "<ul>" +
      "<li><b>Base case:</b> When to stop (prevents infinite recursion)</li>" +
      "<li><b>Recursive case:</b> The method calls itself with a smaller problem</li>" +
      "</ul><br>" +
      "<b>Example — Factorial:</b><br>" +
      "<pre>// 5! = 5 × 4 × 3 × 2 × 1 = 120\n" +
      "// Base case:  0! = 1,  1! = 1\n" +
      "// Recursive:  n! = n × (n-1)!\n\n" +
      "public static long factorial(int n) {\n" +
      "    if (n <= 1) return 1;        // base case\n" +
      "    return n * factorial(n - 1);  // recursive case\n" +
      "}</pre><br>" +
      "<b>How it works for factorial(4):</b><br>" +
      "<code>factorial(4) → 4 × factorial(3)</code><br>" +
      "<code>factorial(3) → 3 × factorial(2)</code><br>" +
      "<code>factorial(2) → 2 × factorial(1)</code><br>" +
      "<code>factorial(1) → 1</code> (base case hit!)<br>" +
      "Then it unwinds: 2×1=2, 3×2=6, 4×6=24<br><br>" +
      "<b>Your task:</b> Write a recursive <code>factorial(int n)</code> method. Read T numbers and print n! for each.<br><br>" +
      "<b>Important:</b> Use <code>long</code> instead of <code>int</code> because factorials get very large (12! = 479,001,600).",
    inputFormat:
      "The first line contains <b>T</b>, the number of test cases.<br>" +
      "Each of the next <b>T</b> lines contains a single non-negative integer <b>N</b>.",
    outputFormat:
      "For each test case, print <b>N!</b> on its own line.",
    constraints: "1 &le; T &le; 20. 0 &le; N &le; 20.",
    sampleInput: "3\n5\n0\n10",
    sampleOutput: "120\n1\n3628800",
    testCases: [
      {
        input: "5\n5\n0\n1\n10\n12",
        expected: "120\n1\n1\n3628800\n479001600\n"
      },
      {
        input: "4\n2\n3\n4\n6",
        expected: "2\n6\n24\n720\n"
      },
      {
        input: "3\n15\n20\n7",
        expected: "1307674368000\n2432902008176640000\n5040\n"
      }
    ],
    starterCode:
`import java.util.*;

public class Factorial {

    // ★ RECURSIVE METHOD — calls itself!
    // Base case: if n <= 1, return 1
    // Recursive case: return n * factorial(n - 1)
    public static long factorial(int n) {
        // Step 1: Base case — when should we stop?
        // if (n <= 1) return 1;

        // Step 2: Recursive case — n! = n * (n-1)!
        // return (long) n * factorial(n - 1);

        return 0; // placeholder — replace with your logic
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t = 0; t < T; t++) {
            int n = sc.nextInt();

            // Step 3: Call the recursive method and print the result
            // System.out.println(factorial(n));
        }
    }
}`,
    hint: "The base case is n <= 1 → return 1. The recursive case is return n * factorial(n-1). Use long to handle large values. Cast n to long in the multiplication to avoid overflow.",
    concepts: ["recursion", "base case", "recursive case", "factorial", "long type"],
    dataFile: "factorial.dat"
  },

  // ==================== PH3: 2D Arrays ====================
  {
    id: "ph3",
    name: "Row Sums",
    difficulty: "Pre-Hard",
    description:
      "<b>\ud83c\udf93 Learn: 2D Arrays</b><br><br>" +
      "A <b>2D array</b> is an array of arrays — think of it as a grid with rows and columns:<br><br>" +
      "<pre>// Create a 2D array with R rows and C columns:\n" +
      "int[][] grid = new int[R][C];\n\n" +
      "// Fill it by reading values:\n" +
      "for (int r = 0; r < R; r++) {\n" +
      "    for (int c = 0; c < C; c++) {\n" +
      "        grid[r][c] = sc.nextInt();\n" +
      "    }\n" +
      "}\n\n" +
      "// Access element at row 1, col 2:\n" +
      "int val = grid[1][2];</pre><br>" +
      "<b>Traversal patterns:</b><br>" +
      "<table border='1' cellpadding='5'>" +
      "<tr><td><b>Row-by-row</b></td><td>Outer loop = rows, inner = cols</td></tr>" +
      "<tr><td><b>Column-by-column</b></td><td>Outer loop = cols, inner = rows</td></tr>" +
      "<tr><td><b>Sum a row</b></td><td>Fix the row, loop over columns</td></tr>" +
      "</table><br>" +
      "<b>Your task:</b> Read <b>T</b> test cases. Each has dimensions <b>R</b> and <b>C</b>, followed by R rows of C integers. " +
      "Print the sum of each row on its own line.",
    inputFormat:
      "The first line contains <b>T</b>, the number of test cases.<br>" +
      "Each test case starts with a line containing <b>R</b> and <b>C</b>.<br>" +
      "Then <b>R</b> lines follow, each with <b>C</b> space-separated integers.",
    outputFormat:
      "For each test case, print <b>R</b> lines, each containing the sum of that row.",
    constraints: "1 &le; T &le; 10. 1 &le; R, C &le; 50. Values are between -1000 and 1000.",
    sampleInput: "1\n3 4\n1 2 3 4\n5 6 7 8\n9 10 11 12",
    sampleOutput: "10\n26\n42",
    testCases: [
      {
        input: "2\n3 4\n1 2 3 4\n5 6 7 8\n9 10 11 12\n2 2\n-1 1\n1 -1",
        expected: "10\n26\n42\n0\n0\n"
      },
      {
        input: "3\n1 5\n10 20 30 40 50\n2 3\n1 1 1\n2 2 2\n3 1\n100\n-100\n0",
        expected: "150\n3\n6\n100\n-100\n0\n"
      },
      {
        input: "1\n4 4\n1 0 0 0\n0 1 0 0\n0 0 1 0\n0 0 0 1",
        expected: "1\n1\n1\n1\n"
      }
    ],
    starterCode:
`import java.util.*;

public class Row_Sums {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t = 0; t < T; t++) {
            int R = sc.nextInt(); // number of rows
            int C = sc.nextInt(); // number of columns

            // Step 1: Create the 2D array
            // int[][] grid = new int[R][C];

            // Step 2: Read values into the grid (nested loop)
            // for (int r = 0; r < R; r++) {
            //     for (int c = 0; c < C; c++) {
            //         grid[r][c] = sc.nextInt();
            //     }
            // }

            // Step 3: For each row, compute the sum and print it
            // for (int r = 0; r < R; r++) {
            //     int sum = 0;
            //     for (int c = 0; c < C; c++) {
            //         sum += grid[r][c];
            //     }
            //     System.out.println(sum);
            // }
        }
    }
}`,
    hint: "Create int[][] grid = new int[R][C]. Use nested loops to read values. Then for each row, sum all columns and print. Remember: grid[row][col].",
    concepts: ["2D arrays", "nested loops", "row traversal", "int[][]"],
    dataFile: "rowsums.dat"
  },

  // ==================== PH4: StringBuilder ====================
  {
    id: "ph4",
    name: "String Repeater",
    difficulty: "Pre-Hard",
    description:
      "<b>\ud83c\udf93 Learn: StringBuilder</b><br><br>" +
      "In Java, strings are <b>immutable</b> — every time you do <code>s += \"text\"</code>, Java creates a brand-new String object. " +
      "For building strings in a loop, this is very slow.<br><br>" +
      "<b>StringBuilder</b> is a mutable, efficient alternative:<br>" +
      "<pre>StringBuilder sb = new StringBuilder();\n" +
      "sb.append(\"Hello\");    // add text\n" +
      "sb.append(\" \");\n" +
      "sb.append(\"World\");\n" +
      "String result = sb.toString(); // \"Hello World\"</pre><br>" +
      "<b>Common methods:</b><br>" +
      "<table border='1' cellpadding='5'>" +
      "<tr><td><code>sb.append(x)</code></td><td>Add text/numbers to the end</td></tr>" +
      "<tr><td><code>sb.toString()</code></td><td>Convert to a regular String</td></tr>" +
      "<tr><td><code>sb.length()</code></td><td>Current length</td></tr>" +
      "<tr><td><code>sb.insert(i, x)</code></td><td>Insert at position i</td></tr>" +
      "</table><br>" +
      "<b>Your task:</b> Read a string <b>S</b> and an integer <b>N</b>. Using StringBuilder, repeat S exactly N times, " +
      "separated by dashes. For example, <code>Hello 3</code> → <code>Hello-Hello-Hello</code>.",
    inputFormat:
      "The first line contains <b>T</b>, the number of test cases.<br>" +
      "Each test case is a line with a string <b>S</b> and an integer <b>N</b>, space-separated.",
    outputFormat:
      "For each test case, print <b>S</b> repeated <b>N</b> times, joined by dashes.",
    constraints: "1 &le; T &le; 10. S contains no spaces. 1 &le; N &le; 100.",
    sampleInput: "2\nHello 3\nA 5",
    sampleOutput: "Hello-Hello-Hello\nA-A-A-A-A",
    testCases: [
      {
        input: "3\nHello 3\nA 5\nUIL 1",
        expected: "Hello-Hello-Hello\nA-A-A-A-A\nUIL\n"
      },
      {
        input: "4\nX 2\nJava 4\nCS 6\nWin 1",
        expected: "X-X\nJava-Java-Java-Java\nCS-CS-CS-CS-CS-CS\nWin\n"
      },
      {
        input: "2\nab 10\nZ 3",
        expected: "ab-ab-ab-ab-ab-ab-ab-ab-ab-ab\nZ-Z-Z\n"
      }
    ],
    starterCode:
`import java.util.*;

public class String_Repeater {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = Integer.parseInt(sc.nextLine().trim());
        for (int t = 0; t < T; t++) {
            String line = sc.nextLine().trim();
            String[] parts = line.split(" ");
            String S = parts[0];
            int N = Integer.parseInt(parts[1]);

            // Step 1: Create a StringBuilder
            // StringBuilder sb = new StringBuilder();

            // Step 2: Loop N times, appending S each time
            //         Add a dash "-" BEFORE each S (except the first one)
            // for (int i = 0; i < N; i++) {
            //     if (i > 0) sb.append("-"); // dash separator
            //     sb.append(S);
            // }

            // Step 3: Convert to String and print
            // System.out.println(sb.toString());
        }
    }
}`,
    hint: "Create a StringBuilder. Loop N times: on the first iteration just append S. On every subsequent iteration, append '-' then S. Finally print sb.toString().",
    concepts: ["StringBuilder", "append", "toString", "string building", "efficiency"],
    dataFile: "stringrepeater.dat"
  },

  // ==================== PH5: Stack ====================
  {
    id: "ph5",
    name: "Stack Reverse",
    difficulty: "Pre-Hard",
    description:
      "<b>\ud83c\udf93 Learn: Stack Data Structure</b><br><br>" +
      "A <b>Stack</b> is a Last-In-First-Out (LIFO) data structure — like a stack of plates. " +
      "The last item you put on top is the first one you take off.<br><br>" +
      "<pre>import java.util.Stack;\n\n" +
      "Stack&lt;Character&gt; stack = new Stack&lt;&gt;();\n" +
      "stack.push('A');     // Stack: [A]\n" +
      "stack.push('B');     // Stack: [A, B]\n" +
      "stack.push('C');     // Stack: [A, B, C]\n" +
      "char top = stack.pop();  // Returns 'C', Stack: [A, B]\n" +
      "char peek = stack.peek(); // Returns 'B' (doesn't remove)</pre><br>" +
      "<b>Key methods:</b><br>" +
      "<table border='1' cellpadding='5'>" +
      "<tr><td><code>push(item)</code></td><td>Add to top of stack</td></tr>" +
      "<tr><td><code>pop()</code></td><td>Remove and return top item</td></tr>" +
      "<tr><td><code>peek()</code></td><td>Look at top item without removing</td></tr>" +
      "<tr><td><code>isEmpty()</code></td><td>Returns true if stack is empty</td></tr>" +
      "</table><br>" +
      "<b>Your task:</b> Read a string and reverse it using a Stack. Push each character onto the stack, " +
      "then pop them all off — they come out in reverse order!",
    inputFormat:
      "The first line contains <b>T</b>, the number of test cases.<br>" +
      "Each of the next <b>T</b> lines contains a single string (no spaces).",
    outputFormat:
      "For each test case, print the reversed string.",
    constraints: "1 &le; T &le; 20. Each string has length 1 to 1000.",
    sampleInput: "2\nhello\nUIL",
    sampleOutput: "olleh\nLIU",
    testCases: [
      {
        input: "3\nhello\nUIL\nabcdef",
        expected: "olleh\nLIU\nfedcba\n"
      },
      {
        input: "4\na\nAB\nracecar\n12345",
        expected: "a\nBA\nracecar\n54321\n"
      },
      {
        input: "2\nStack\nJava2024",
        expected: "kcatS\n4202avaJ\n"
      }
    ],
    starterCode:
`import java.util.*;

public class Stack_Reverse {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = Integer.parseInt(sc.nextLine().trim());
        for (int t = 0; t < T; t++) {
            String s = sc.nextLine().trim();

            // Step 1: Create a Stack of Characters
            // Stack<Character> stack = new Stack<>();

            // Step 2: Push each character onto the stack
            // for (int i = 0; i < s.length(); i++) {
            //     stack.push(s.charAt(i));
            // }

            // Step 3: Pop all characters off — they come out reversed!
            // StringBuilder sb = new StringBuilder();
            // while (!stack.isEmpty()) {
            //     sb.append(stack.pop());
            // }

            // Step 4: Print the reversed string
            // System.out.println(sb.toString());
        }
    }
}`,
    hint: "Push each character of the string onto the stack. Then pop all characters into a StringBuilder — since a stack is LIFO, they come out in reverse order.",
    concepts: ["Stack", "push", "pop", "isEmpty", "LIFO", "string reversal"],
    dataFile: "stackreverse.dat"
  },

  // ==================== PH6: Recursion + Backtracking ====================
  {
    id: "ph6",
    name: "Binary Strings",
    difficulty: "Pre-Hard",
    description:
      "<b>\ud83c\udf93 Learn: Recursion + Backtracking</b><br><br>" +
      "Recursion can <b>generate all possibilities</b> by exploring choices at each step. " +
      "This pattern is called <b>backtracking</b>:<br><br>" +
      "<pre>// Generate all binary strings of length N\n" +
      "public static void generate(String current, int n) {\n" +
      "    if (current.length() == n) {\n" +
      "        System.out.println(current);  // base case: we're done!\n" +
      "        return;\n" +
      "    }\n" +
      "    generate(current + \"0\", n);  // choice 1: append 0\n" +
      "    generate(current + \"1\", n);  // choice 2: append 1\n" +
      "}</pre><br>" +
      "<b>How it works for N=2:</b><br>" +
      "<code>generate(\"\", 2)</code><br>" +
      "&nbsp;&nbsp;→ <code>generate(\"0\", 2)</code><br>" +
      "&nbsp;&nbsp;&nbsp;&nbsp;→ <code>generate(\"00\", 2)</code> → prints <code>00</code><br>" +
      "&nbsp;&nbsp;&nbsp;&nbsp;→ <code>generate(\"01\", 2)</code> → prints <code>01</code><br>" +
      "&nbsp;&nbsp;→ <code>generate(\"1\", 2)</code><br>" +
      "&nbsp;&nbsp;&nbsp;&nbsp;→ <code>generate(\"10\", 2)</code> → prints <code>10</code><br>" +
      "&nbsp;&nbsp;&nbsp;&nbsp;→ <code>generate(\"11\", 2)</code> → prints <code>11</code><br><br>" +
      "<b>Your task:</b> For each test case, read an integer <b>N</b> and print all binary strings of length N, one per line, in ascending order.",
    inputFormat:
      "The first line contains <b>T</b>, the number of test cases.<br>" +
      "Each of the next <b>T</b> lines contains a single integer <b>N</b>.",
    outputFormat:
      "For each test case, print all 2<sup>N</sup> binary strings of length N, each on its own line.",
    constraints: "1 &le; T &le; 5. 1 &le; N &le; 8.",
    sampleInput: "2\n1\n2",
    sampleOutput: "0\n1\n00\n01\n10\n11",
    testCases: [
      {
        input: "3\n1\n2\n3",
        expected: "0\n1\n00\n01\n10\n11\n000\n001\n010\n011\n100\n101\n110\n111\n"
      },
      {
        input: "1\n4",
        expected: "0000\n0001\n0010\n0011\n0100\n0101\n0110\n0111\n1000\n1001\n1010\n1011\n1100\n1101\n1110\n1111\n"
      },
      {
        input: "2\n1\n1",
        expected: "0\n1\n0\n1\n"
      }
    ],
    starterCode:
`import java.util.*;

public class Binary_Strings {

    // ★ RECURSIVE METHOD — generates all binary strings of length n
    // current: the string built so far
    // n: the target length
    public static void generate(String current, int n) {
        // Step 1: Base case — if current string is long enough, print it
        // if (current.length() == n) {
        //     System.out.println(current);
        //     return;
        // }

        // Step 2: Recursive case — try appending '0', then '1'
        // generate(current + "0", n);   // explore the "0" branch
        // generate(current + "1", n);   // explore the "1" branch
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t = 0; t < T; t++) {
            int N = sc.nextInt();

            // Step 3: Start the recursion with an empty string
            // generate("", N);
        }
    }
}`,
    hint: "The base case is when current.length() == n — print the string. Otherwise, recurse twice: once appending '0' and once appending '1'. Start the recursion with generate(\"\", N).",
    concepts: ["recursion", "backtracking", "binary strings", "generate all combinations"],
    dataFile: "binarystrings.dat"
  },

  // ==================== PH7: BFS Intro ====================
  {
    id: "ph7",
    name: "Island Counter",
    difficulty: "Pre-Hard",
    description:
      "<b>\ud83c\udf93 Learn: BFS (Breadth-First Search)</b><br><br>" +
      "<b>BFS</b> explores a graph level by level using a <b>Queue</b>. It's perfect for finding all reachable cells in a grid.<br><br>" +
      "<b>BFS Algorithm:</b><br>" +
      "<pre>// 1. Create a Queue and add the starting position\n" +
      "Queue&lt;int[]&gt; queue = new LinkedList&lt;&gt;();\n" +
      "queue.add(new int[]{startRow, startCol});\n" +
      "boolean[][] visited = new boolean[R][C];\n" +
      "visited[startRow][startCol] = true;\n\n" +
      "// 2. Process until queue is empty\n" +
      "while (!queue.isEmpty()) {\n" +
      "    int[] cell = queue.poll();  // remove front\n" +
      "    int r = cell[0], c = cell[1];\n" +
      "    // 3. Check all 4 neighbors (up/down/left/right)\n" +
      "    //    If valid, unvisited, and is a 1 → add to queue\n" +
      "}</pre><br>" +
      "<b>Direction arrays</b> make checking neighbors easy:<br>" +
      "<pre>int[] dr = {-1, 1, 0, 0}; // up, down, left, right\n" +
      "int[] dc = {0, 0, -1, 1};\n" +
      "for (int d = 0; d < 4; d++) {\n" +
      "    int nr = r + dr[d];\n" +
      "    int nc = c + dc[d];\n" +
      "    // check bounds and visited\n" +
      "}</pre><br>" +
      "<b>Your task:</b> Given an R&times;C grid of 0s and 1s and a starting position (row, col), " +
      "use BFS to count how many 1-cells are reachable from the start (including the start itself). " +
      "Movement is 4-directional and you can only step on 1s. The starting cell is always 1.",
    inputFormat:
      "The first line contains <b>T</b>, the number of test cases.<br>" +
      "Each test case starts with <b>R C</b> on one line.<br>" +
      "Then <b>R</b> lines of <b>C</b> space-separated values (0 or 1).<br>" +
      "Then one line with <b>startRow startCol</b> (0-indexed).",
    outputFormat:
      "For each test case, print the count of reachable 1-cells from the starting position.",
    constraints: "1 &le; T &le; 10. 1 &le; R, C &le; 50. Start cell is always 1.",
    sampleInput: "1\n3 3\n1 1 0\n1 1 0\n0 0 1\n0 0",
    sampleOutput: "4",
    testCases: [
      {
        input: "2\n3 3\n1 1 0\n1 1 0\n0 0 1\n0 0\n3 3\n1 0 1\n0 0 0\n1 0 1\n0 0",
        expected: "4\n1\n"
      },
      {
        input: "3\n1 1\n1\n0 0\n2 5\n1 1 1 0 1\n1 0 1 0 1\n0 0\n4 4\n1 1 1 1\n1 1 1 1\n1 1 1 1\n1 1 1 1\n2 2",
        expected: "1\n5\n16\n"
      },
      {
        input: "2\n3 4\n1 0 0 1\n0 0 0 0\n1 0 0 1\n0 0\n5 5\n1 1 0 0 0\n1 1 0 0 0\n0 0 0 0 0\n0 0 0 1 1\n0 0 0 1 1\n3 3",
        expected: "1\n4\n"
      }
    ],
    starterCode:
`import java.util.*;

public class Island_Counter {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t = 0; t < T; t++) {
            int R = sc.nextInt();
            int C = sc.nextInt();

            // Step 1: Read the grid into a 2D array
            int[][] grid = new int[R][C];
            for (int r = 0; r < R; r++)
                for (int c = 0; c < C; c++)
                    grid[r][c] = sc.nextInt();

            int startRow = sc.nextInt();
            int startCol = sc.nextInt();

            // Step 2: Set up BFS
            // boolean[][] visited = new boolean[R][C];
            // Queue<int[]> queue = new LinkedList<>();
            // queue.add(new int[]{startRow, startCol});
            // visited[startRow][startCol] = true;
            // int count = 0;

            // Step 3: Direction arrays for up, down, left, right
            // int[] dr = {-1, 1, 0, 0};
            // int[] dc = {0, 0, -1, 1};

            // Step 4: BFS loop
            // while (!queue.isEmpty()) {
            //     int[] cell = queue.poll();
            //     int r = cell[0], c = cell[1];
            //     count++;  // this cell is reachable
            //
            //     // Check all 4 neighbors
            //     for (int d = 0; d < 4; d++) {
            //         int nr = r + dr[d];
            //         int nc = c + dc[d];
            //         // Check bounds, not visited, and is a 1
            //         if (nr >= 0 && nr < R && nc >= 0 && nc < C
            //             && !visited[nr][nc] && grid[nr][nc] == 1) {
            //             visited[nr][nc] = true;
            //             queue.add(new int[]{nr, nc});
            //         }
            //     }
            // }

            // Step 5: Print the count
            // System.out.println(count);
        }
    }
}`,
    hint: "Use a Queue (LinkedList) for BFS. Start by adding the start cell. In each iteration, poll the front cell, count it, then check all 4 neighbors. Add valid unvisited 1-cells to the queue. Use a visited[][] array to avoid revisiting cells.",
    concepts: ["BFS", "Queue", "LinkedList", "2D grid traversal", "visited array", "direction arrays"],
    dataFile: "islandcounter.dat"
  },

  // ==================== PH8: Bitwise Operations ====================
  {
    id: "ph8",
    name: "Bit Operator",
    difficulty: "Pre-Hard",
    description:
      "<b>\ud83c\udf93 Learn: Bitwise Operations</b><br><br>" +
      "Bitwise operators work on individual <b>bits</b> (binary digits) of integers:<br><br>" +
      "<table border='1' cellpadding='5'>" +
      "<tr><th>Operator</th><th>Name</th><th>Example (5=101, 3=011)</th><th>Result</th></tr>" +
      "<tr><td><code>&amp;</code></td><td>AND</td><td><code>5 &amp; 3</code> → 101 &amp; 011</td><td>001 = <b>1</b></td></tr>" +
      "<tr><td><code>|</code></td><td>OR</td><td><code>5 | 3</code> → 101 | 011</td><td>111 = <b>7</b></td></tr>" +
      "<tr><td><code>^</code></td><td>XOR</td><td><code>5 ^ 3</code> → 101 ^ 011</td><td>110 = <b>6</b></td></tr>" +
      "<tr><td><code>&lt;&lt;</code></td><td>Left Shift</td><td><code>5 &lt;&lt; 1</code> → 101 &lt;&lt; 1</td><td>1010 = <b>10</b></td></tr>" +
      "<tr><td><code>&gt;&gt;</code></td><td>Right Shift</td><td><code>5 &gt;&gt; 1</code> → 101 &gt;&gt; 1</td><td>10 = <b>2</b></td></tr>" +
      "<tr><td><code>~</code></td><td>NOT</td><td><code>~5</code> → flips all bits</td><td>-6 (two's complement)</td></tr>" +
      "</table><br>" +
      "<b>Bit-by-bit rules:</b><br>" +
      "<ul>" +
      "<li><b>AND (&amp;):</b> 1 only if both bits are 1</li>" +
      "<li><b>OR (|):</b> 1 if either bit is 1</li>" +
      "<li><b>XOR (^):</b> 1 if bits are different</li>" +
      "<li><b>Left shift (&lt;&lt; n):</b> Multiply by 2<sup>n</sup></li>" +
      "</ul><br>" +
      "<b>Your task:</b> Given two integers <b>A</b> and <b>B</b>, print four values separated by spaces: " +
      "<code>A&amp;B</code>, <code>A|B</code>, <code>A^B</code>, and <code>A&lt;&lt;1</code>.",
    inputFormat:
      "The first line contains <b>T</b>, the number of test cases.<br>" +
      "Each of the next <b>T</b> lines contains two integers <b>A</b> and <b>B</b>.",
    outputFormat:
      "For each test case, print <code>A&amp;B A|B A^B A&lt;&lt;1</code> on one line, space-separated.",
    constraints: "1 &le; T &le; 20. 0 &le; A, B &le; 100000.",
    sampleInput: "2\n5 3\n12 10",
    sampleOutput: "1 7 6 10\n8 14 6 24",
    testCases: [
      {
        input: "3\n5 3\n12 10\n255 0",
        expected: "1 7 6 10\n8 14 6 24\n0 255 255 510\n"
      },
      {
        input: "4\n0 0\n1 1\n7 7\n15 9",
        expected: "0 0 0 0\n1 1 0 2\n7 7 0 14\n9 15 6 30\n"
      },
      {
        input: "3\n100 200\n1023 512\n65535 1",
        expected: "64 236 172 200\n512 1023 511 2046\n1 65535 65534 131070\n"
      }
    ],
    starterCode:
`import java.util.*;

public class Bit_Operator {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t = 0; t < T; t++) {
            int A = sc.nextInt();
            int B = sc.nextInt();

            // Step 1: Compute AND → A & B
            // int and = A & B;

            // Step 2: Compute OR → A | B
            // int or = A | B;

            // Step 3: Compute XOR → A ^ B
            // int xor = A ^ B;

            // Step 4: Compute Left Shift → A << 1 (doubles A)
            // int shift = A << 1;

            // Step 5: Print all four values space-separated
            // System.out.println(and + " " + or + " " + xor + " " + shift);
        }
    }
}`,
    hint: "Just use the operators directly: A & B for AND, A | B for OR, A ^ B for XOR, A << 1 for left shift. Print them separated by spaces.",
    concepts: ["bitwise AND", "bitwise OR", "bitwise XOR", "left shift", "bit manipulation"],
    dataFile: "bitoperator.dat"
  },
];
