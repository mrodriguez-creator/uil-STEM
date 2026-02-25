// UIL CS Programming – Starter Skills
// These teach the fundamental Scanner + .dat file pattern used in EVERY UIL problem.
// Students write the boilerplate from scratch so it becomes muscle memory.

const STARTER_PROBLEMS = [
  // ==================== S1: Scanner Setup ====================
  {
    id: "s1",
    name: "Scanner Setup",
    difficulty: "Starter",
    description:
      "Every UIL programming problem reads input from a data file. The very first thing you need to do is create a <code>Scanner</code> and read the first integer <b>T</b> — the number of test cases.<br><br>" +
      "<b>Your task:</b> Create a Scanner, read the integer <b>T</b> from the first line, then print <code>T</code> on its own line. That's it!<br><br>" +
      "<b>On contest day</b>, you'd write:<br>" +
      "<code>Scanner sc = new Scanner(new File(\"scanner.dat\"));</code><br><br>" +
      "<b>For practice here</b>, we use:<br>" +
      "<code>Scanner sc = new Scanner(System.in);</code><br>" +
      "(Both work the same way — <code>System.in</code> receives the test data automatically.)",
    inputFormat:
      "A single integer <b>T</b> on the first line.",
    outputFormat:
      "Print the value of <b>T</b> on a single line.",
    constraints: "1 &le; T &le; 1000",
    sampleInput: "5",
    sampleOutput: "5",
    testCases: [
      { input: "5", expected: "5\n" },
      { input: "1", expected: "1\n" },
      { input: "100", expected: "100\n" }
    ],
    starterCode: `import java.util.*;

public class Scanner_Setup {
    public static void main(String[] args) {
        // Step 1: Create a Scanner to read input
        // Write: Scanner sc = new Scanner(System.in);

        // Step 2: Read the first integer T
        // Write: int T = sc.nextInt();

        // Step 3: Print T
        // Write: System.out.println(T);
    }
}`,
    hint: "You need exactly 3 lines of code:<br><code>Scanner sc = new Scanner(System.in);</code><br><code>int T = sc.nextInt();</code><br><code>System.out.println(T);</code>",
    concepts: ["Scanner", "nextInt()", "System.in"],
    dataFile: "scanner.dat"
  },

  // ==================== S2: The T Loop ====================
  {
    id: "s2",
    name: "The T Loop",
    difficulty: "Starter",
    description:
      "Every UIL problem has <b>T</b> test cases. After reading T, you loop T times and process each case.<br><br>" +
      "<b>Your task:</b> Read <b>T</b>, then read <b>T</b> integers one per line. Print each integer back out.<br><br>" +
      "This is the skeleton of every UIL solution:<br>" +
      "<pre>Scanner sc = new Scanner(System.in);\nint T = sc.nextInt();\nfor (int t = 0; t &lt; T; t++) {\n    // read and process one test case\n}</pre>",
    inputFormat:
      "The first line contains <b>T</b>.<br>Each of the next <b>T</b> lines contains a single integer <b>N</b>.",
    outputFormat:
      "For each test case, print <b>N</b> on its own line.",
    constraints: "1 &le; T &le; 100<br>-1000 &le; N &le; 1000",
    sampleInput: "3\n42\n-7\n100",
    sampleOutput: "42\n-7\n100",
    testCases: [
      { input: "3\n42\n-7\n100", expected: "42\n-7\n100\n" },
      { input: "1\n0", expected: "0\n" },
      { input: "5\n10\n20\n30\n40\n50", expected: "10\n20\n30\n40\n50\n" }
    ],
    starterCode: `import java.util.*;

public class The_T_Loop {
    public static void main(String[] args) {
        // Step 1: Create Scanner and read T

        // Step 2: Loop T times

            // Step 3: Inside the loop, read one integer and print it

    }
}`,
    hint: "The pattern is:<br><code>Scanner sc = new Scanner(System.in);</code><br><code>int T = sc.nextInt();</code><br><code>for (int t = 0; t &lt; T; t++) {</code><br>&nbsp;&nbsp;<code>int N = sc.nextInt();</code><br>&nbsp;&nbsp;<code>System.out.println(N);</code><br><code>}</code>",
    concepts: ["for loop", "nextInt()", "test case pattern"],
    dataFile: "tloop.dat"
  },

  // ==================== S3: Reading Strings ====================
  {
    id: "s3",
    name: "Reading Strings",
    difficulty: "Starter",
    description:
      "Many UIL problems require reading strings. There's a gotcha: after <code>sc.nextInt()</code>, there's a leftover newline character. You must call <code>sc.nextLine()</code> once to consume it before reading strings.<br><br>" +
      "<b>Your task:</b> Read <b>T</b>, then read <b>T</b> strings (one per line) and print each one back.<br><br>" +
      "<b>The pattern:</b><br>" +
      "<pre>int T = sc.nextInt();\nsc.nextLine();  // &lt;-- consume leftover newline!\nfor (int t = 0; t &lt; T; t++) {\n    String s = sc.nextLine();\n    System.out.println(s);\n}</pre>" +
      "<b>Without that extra <code>sc.nextLine()</code></b>, your first string read will be empty!",
    inputFormat:
      "The first line contains <b>T</b>.<br>Each of the next <b>T</b> lines contains a string.",
    outputFormat:
      "For each test case, print the string on its own line.",
    constraints: "1 &le; T &le; 100",
    sampleInput: "3\nHello World\nUIL Rocks\nJava 17",
    sampleOutput: "Hello World\nUIL Rocks\nJava 17",
    testCases: [
      { input: "3\nHello World\nUIL Rocks\nJava 17", expected: "Hello World\nUIL Rocks\nJava 17\n" },
      { input: "1\nSingle Line Test", expected: "Single Line Test\n" },
      { input: "2\n   spaces   \nABCDEF", expected: "   spaces   \nABCDEF\n" }
    ],
    starterCode: `import java.util.*;

public class Reading_Strings {
    public static void main(String[] args) {
        // Step 1: Create Scanner and read T

        // Step 2: IMPORTANT — consume the leftover newline after nextInt()
        // Write: sc.nextLine();

        // Step 3: Loop T times, read a full line, and print it

    }
}`,
    hint: "The key line is <code>sc.nextLine();</code> right after <code>int T = sc.nextInt();</code>. This consumes the newline character left behind by nextInt(). Without it, your first <code>sc.nextLine()</code> in the loop reads an empty string.",
    concepts: ["nextLine()", "nextInt() newline gotcha", "string input"],
    dataFile: "strings.dat"
  },

  // ==================== S4: Reading Two Values ====================
  {
    id: "s4",
    name: "Two Values Per Line",
    difficulty: "Starter",
    description:
      "Many UIL problems give you multiple values on the same line. You just call <code>sc.nextInt()</code> multiple times — Scanner automatically skips spaces and newlines between integers.<br><br>" +
      "<b>Your task:</b> Read <b>T</b>, then for each test case read two integers <b>A</b> and <b>B</b> on the same line and print their sum.",
    inputFormat:
      "The first line contains <b>T</b>.<br>Each of the next <b>T</b> lines contains two space-separated integers <b>A</b> and <b>B</b>.",
    outputFormat:
      "For each test case, print the sum of A and B on its own line.",
    constraints: "1 &le; T &le; 100<br>-10000 &le; A, B &le; 10000",
    sampleInput: "3\n1 2\n10 -3\n0 0",
    sampleOutput: "3\n7\n0",
    testCases: [
      { input: "3\n1 2\n10 -3\n0 0", expected: "3\n7\n0\n" },
      { input: "1\n-5 5", expected: "0\n" },
      { input: "4\n100 200\n-1 -1\n999 1\n0 12345", expected: "300\n-2\n1000\n12345\n" }
    ],
    starterCode: `import java.util.*;

public class Two_Values_Per_Line {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t = 0; t < T; t++) {
            // Read two integers from the same line
            // int A = sc.nextInt();
            // int B = sc.nextInt();

            // Print their sum
        }
    }
}`,
    hint: "Call <code>sc.nextInt()</code> twice to read A and B. Scanner handles the space between them automatically. Then print <code>A + B</code>.",
    concepts: ["multiple nextInt()", "arithmetic", "same-line input"],
    dataFile: "twoval.dat"
  },

  // ==================== S5: The .dat File Pattern ====================
  {
    id: "s5",
    name: "The .dat File Pattern",
    difficulty: "Starter",
    description:
      "Let's put it all together. This is the <b>exact pattern</b> you'll write on contest day:<br><br>" +
      "<pre>import java.util.*;\nimport java.io.*;  // needed for File\n\npublic class ProblemName {\n    public static void main(String[] args) throws Exception {\n        Scanner sc = new Scanner(new File(\"problemname.dat\"));\n        int T = sc.nextInt();\n        for (int t = 0; t &lt; T; t++) {\n            // solve one test case\n        }\n    }\n}</pre>" +
      "<b>Key differences from practice:</b><ul>" +
      "<li><code>import java.io.*;</code> — needed for <code>File</code></li>" +
      "<li><code>new File(\"name.dat\")</code> instead of <code>System.in</code></li>" +
      "<li><code>throws Exception</code> on main — handles the file-not-found check</li></ul><br>" +
      "<b>Your task:</b> Read <b>T</b>, then for each test case read an integer <b>N</b> and print <b>N * N</b> (N squared). Here we use <code>System.in</code> for practice, but the starter code shows both versions so you can see the contest pattern.",
    inputFormat:
      "The first line contains <b>T</b>.<br>Each of the next <b>T</b> lines contains a single integer <b>N</b>.",
    outputFormat:
      "For each test case, print <b>N * N</b> on its own line.",
    constraints: "1 &le; T &le; 100<br>-1000 &le; N &le; 1000",
    sampleInput: "3\n5\n-3\n0",
    sampleOutput: "25\n9\n0",
    testCases: [
      { input: "3\n5\n-3\n0", expected: "25\n9\n0\n" },
      { input: "1\n1000", expected: "1000000\n" },
      { input: "4\n1\n-1\n10\n-10", expected: "1\n1\n100\n100\n" }
    ],
    starterCode: `import java.util.*;
// On contest day, also add: import java.io.*;

public class The_dat_File_Pattern {
    // On contest day: public static void main(String[] args) throws Exception {
    public static void main(String[] args) {
        // PRACTICE version (used here):
        Scanner sc = new Scanner(System.in);

        // CONTEST DAY version (use this at the competition):
        // Scanner sc = new Scanner(new File("dat_file.dat"));

        int T = sc.nextInt();
        for (int t = 0; t < T; t++) {
            // Read N and print N squared

        }
    }
}`,
    hint: "Read <code>int N = sc.nextInt();</code> then print <code>System.out.println(N * N);</code>. Remember: a negative number squared is positive!",
    concepts: ["File I/O pattern", "throws Exception", "contest template"],
    dataFile: "dat_file.dat"
  },
];
