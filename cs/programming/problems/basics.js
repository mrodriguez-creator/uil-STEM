// UIL CS Programming – Basics (Learning Tier)
// These teach fundamental Java concepts step-by-step for students who have never programmed.
// Each problem teaches ONE concept with detailed explanations in the description.

const BASICS_PROBLEMS = [

  // ==================== B1: Variables ====================
  {
    id: "b1",
    name: "Variables",
    difficulty: "Basics",
    description:
      "<b>🎓 Learn: Variables</b><br><br>" +
      "A <b>variable</b> is a named box that holds a value. In Java, you must say what <i>type</i> of value it holds:<br><br>" +
      "<table style='border-collapse:collapse; margin:10px 0;'>" +
      "<tr><td style='padding:4px 12px; border:1px solid #4a5568;'><code>int</code></td><td style='padding:4px 12px; border:1px solid #4a5568;'>Whole numbers: <code>int age = 17;</code></td></tr>" +
      "<tr><td style='padding:4px 12px; border:1px solid #4a5568;'><code>double</code></td><td style='padding:4px 12px; border:1px solid #4a5568;'>Decimals: <code>double gpa = 3.95;</code></td></tr>" +
      "<tr><td style='padding:4px 12px; border:1px solid #4a5568;'><code>String</code></td><td style='padding:4px 12px; border:1px solid #4a5568;'>Text: <code>String name = \"Alice\";</code></td></tr>" +
      "</table><br>" +
      "<b>Your task:</b> Read a person's name (one word) and their age (integer). Print:<br>" +
      "<code>[name] is [age] years old.</code><br><br>" +
      "<b>Example code to learn from:</b><br>" +
      "<pre>String color = sc.next();       // reads one word\nint count = sc.nextInt();       // reads a whole number\nSystem.out.println(color + \" appears \" + count + \" times\");</pre>" +
      "The <code>+</code> operator joins strings together. This is called <b>concatenation</b>.",
    inputFormat:
      "The first line contains <b>T</b>.<br>Each of the next <b>T</b> lines contains a name (one word) followed by a space and an integer age.",
    outputFormat:
      "For each test case, print <code>[name] is [age] years old.</code>",
    constraints: "1 ≤ T ≤ 100",
    sampleInput: "3\nAlice 17\nBob 15\nCarla 16",
    sampleOutput: "Alice is 17 years old.\nBob is 15 years old.\nCarla is 16 years old.",
    testCases: [
      { input: "3\nAlice 17\nBob 15\nCarla 16", expected: "Alice is 17 years old.\nBob is 15 years old.\nCarla is 16 years old.\n" },
      { input: "1\nZara 18", expected: "Zara is 18 years old.\n" },
      { input: "2\nMax 14\nLeo 99", expected: "Max is 14 years old.\nLeo is 99 years old.\n" }
    ],
    starterCode: `import java.util.*;

public class Variables {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t = 0; t < T; t++) {
            // Step 1: Read a String (the name)
            // String name = sc.next();

            // Step 2: Read an int (the age)
            // int age = sc.nextInt();

            // Step 3: Print them together using + to join
            // System.out.println(name + " is " + age + " years old.");
        }
    }
}`,
    hint: "Uncomment the three lines! <code>sc.next()</code> reads one word, <code>sc.nextInt()</code> reads a number, and <code>+</code> joins strings together.",
    concepts: ["variables", "int", "String", "concatenation"],
    dataFile: "variables.dat"
  },

  // ==================== B2: If/Else ====================
  {
    id: "b2",
    name: "If/Else",
    difficulty: "Basics",
    description:
      "<b>🎓 Learn: If/Else Statements</b><br><br>" +
      "An <code>if</code> statement lets your program make decisions:<br>" +
      "<pre>if (condition) {\n    // runs when condition is true\n} else {\n    // runs when condition is false\n}</pre>" +
      "You can chain multiple conditions with <code>else if</code>:<br>" +
      "<pre>if (x > 0) {\n    System.out.println(\"POSITIVE\");\n} else if (x < 0) {\n    System.out.println(\"NEGATIVE\");\n} else {\n    System.out.println(\"ZERO\");\n}</pre>" +
      "<b>Comparison operators:</b><br>" +
      "<code>==</code> equal &nbsp; <code>!=</code> not equal &nbsp; <code>&lt;</code> less than &nbsp; <code>&gt;</code> greater than &nbsp; <code>&lt;=</code> &nbsp; <code>&gt;=</code><br><br>" +
      "<b>Your task:</b> Read an integer. Print <code>POSITIVE</code>, <code>NEGATIVE</code>, or <code>ZERO</code>.",
    inputFormat:
      "The first line contains <b>T</b>.<br>Each of the next <b>T</b> lines contains a single integer <b>N</b>.",
    outputFormat:
      "For each test case, print <code>POSITIVE</code>, <code>NEGATIVE</code>, or <code>ZERO</code>.",
    constraints: "1 ≤ T ≤ 100<br>-10000 ≤ N ≤ 10000",
    sampleInput: "4\n5\n-3\n0\n100",
    sampleOutput: "POSITIVE\nNEGATIVE\nZERO\nPOSITIVE",
    testCases: [
      { input: "4\n5\n-3\n0\n100", expected: "POSITIVE\nNEGATIVE\nZERO\nPOSITIVE\n" },
      { input: "3\n-1\n1\n-10000", expected: "NEGATIVE\nPOSITIVE\nNEGATIVE\n" },
      { input: "2\n0\n0", expected: "ZERO\nZERO\n" }
    ],
    starterCode: `import java.util.*;

public class If_Else {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t = 0; t < T; t++) {
            int N = sc.nextInt();

            // Use if/else if/else to check:
            // if N > 0 → print "POSITIVE"
            // else if N < 0 → print "NEGATIVE"
            // else → print "ZERO"

        }
    }
}`,
    hint: "Write:<br><code>if (N > 0) {</code><br>&nbsp;&nbsp;<code>System.out.println(\"POSITIVE\");</code><br><code>} else if (N < 0) {</code><br>&nbsp;&nbsp;<code>System.out.println(\"NEGATIVE\");</code><br><code>} else {</code><br>&nbsp;&nbsp;<code>System.out.println(\"ZERO\");</code><br><code>}</code>",
    concepts: ["if/else", "comparison operators", "conditionals"],
    dataFile: "ifelse.dat"
  },

  // ==================== B3: For Loops ====================
  {
    id: "b3",
    name: "For Loops",
    difficulty: "Basics",
    description:
      "<b>🎓 Learn: For Loops</b><br><br>" +
      "A <code>for</code> loop repeats code a specific number of times:<br>" +
      "<pre>for (int i = 1; i <= 5; i++) {\n    System.out.println(i);\n}\n// Prints: 1  2  3  4  5</pre>" +
      "The three parts:<br>" +
      "<ul>" +
      "<li><code>int i = 1</code> — start at 1</li>" +
      "<li><code>i <= 5</code> — keep going while i is ≤ 5</li>" +
      "<li><code>i++</code> — add 1 to i each time (same as <code>i = i + 1</code>)</li>" +
      "</ul><br>" +
      "<b>Your task:</b> Given a number <b>N</b>, print the numbers from 1 to N, all on one line separated by spaces.<br><br>" +
      "<b>Tip for printing on one line:</b> Use <code>System.out.print()</code> (no \"ln\") to print without a newline. Add <code>System.out.println()</code> at the end to finish the line.",
    inputFormat:
      "The first line contains <b>T</b>.<br>Each of the next <b>T</b> lines contains a single positive integer <b>N</b>.",
    outputFormat:
      "For each test case, print the numbers 1 through N separated by spaces on one line.",
    constraints: "1 ≤ T ≤ 50<br>1 ≤ N ≤ 20",
    sampleInput: "3\n5\n3\n1",
    sampleOutput: "1 2 3 4 5\n1 2 3\n1",
    testCases: [
      { input: "3\n5\n3\n1", expected: "1 2 3 4 5\n1 2 3\n1\n" },
      { input: "2\n10\n2", expected: "1 2 3 4 5 6 7 8 9 10\n1 2\n" },
      { input: "1\n1", expected: "1\n" }
    ],
    starterCode: `import java.util.*;

public class For_Loops {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t = 0; t < T; t++) {
            int N = sc.nextInt();

            // Use a for loop from 1 to N
            // Print each number with a space after it (except the last one)
            //
            // Hint: for (int i = 1; i <= N; i++) {
            //     if (i > 1) System.out.print(" ");
            //     System.out.print(i);
            // }
            // System.out.println();  // end the line

        }
    }
}`,
    hint: "To avoid a trailing space, print a space <i>before</i> each number except the first:<br><code>for (int i = 1; i <= N; i++) {</code><br>&nbsp;&nbsp;<code>if (i > 1) System.out.print(\" \");</code><br>&nbsp;&nbsp;<code>System.out.print(i);</code><br><code>}</code><br><code>System.out.println();</code>",
    concepts: ["for loop", "print vs println", "counting"],
    dataFile: "forloops.dat"
  },

  // ==================== B4: Adding Up ====================
  {
    id: "b4",
    name: "Adding Up",
    difficulty: "Basics",
    description:
      "<b>🎓 Learn: Accumulator Pattern</b><br><br>" +
      "A very common pattern in programming is keeping a running total. You create a variable (called an <b>accumulator</b>), start it at 0, and add to it in a loop:<br>" +
      "<pre>int sum = 0;              // start at 0\nfor (int i = 0; i < 3; i++) {\n    int x = sc.nextInt();  // read a number\n    sum = sum + x;         // add it to the total\n}\nSystem.out.println(sum);   // print the total</pre>" +
      "<code>sum = sum + x</code> can also be written as <code>sum += x</code> (shorthand).<br><br>" +
      "<b>Your task:</b> Read <b>N</b> numbers and print their sum.",
    inputFormat:
      "The first line contains <b>T</b>.<br>For each test case: the first line has an integer <b>N</b>, followed by <b>N</b> integers on the next line (space-separated).",
    outputFormat:
      "For each test case, print the sum of the N numbers.",
    constraints: "1 ≤ T ≤ 50<br>1 ≤ N ≤ 100<br>-1000 ≤ each number ≤ 1000",
    sampleInput: "3\n3\n10 20 30\n4\n1 -1 2 -2\n1\n42",
    sampleOutput: "60\n0\n42",
    testCases: [
      { input: "3\n3\n10 20 30\n4\n1 -1 2 -2\n1\n42", expected: "60\n0\n42\n" },
      { input: "2\n5\n1 2 3 4 5\n3\n-100 0 100", expected: "15\n0\n" },
      { input: "1\n6\n10 10 10 10 10 10", expected: "60\n" }
    ],
    starterCode: `import java.util.*;

public class Adding_Up {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t = 0; t < T; t++) {
            int N = sc.nextInt();

            // Step 1: Create a sum variable starting at 0
            // int sum = 0;

            // Step 2: Loop N times, reading a number and adding it to sum
            // for (int i = 0; i < N; i++) {
            //     int x = sc.nextInt();
            //     sum += x;
            // }

            // Step 3: Print the sum
            // System.out.println(sum);
        }
    }
}`,
    hint: "Uncomment the three sections! The key idea: create <code>int sum = 0</code> before the loop, then inside the loop do <code>sum += sc.nextInt()</code>.",
    concepts: ["accumulator pattern", "sum", "+=", "loops"],
    dataFile: "addingup.dat"
  },

  // ==================== B5: Math Operations ====================
  {
    id: "b5",
    name: "Math Ops",
    difficulty: "Basics",
    description:
      "<b>🎓 Learn: Math Operations</b><br><br>" +
      "Java supports these math operators:<br>" +
      "<table style='border-collapse:collapse; margin:10px 0;'>" +
      "<tr><td style='padding:4px 12px; border:1px solid #4a5568;'><code>+</code></td><td style='padding:4px 12px; border:1px solid #4a5568;'>Addition: <code>5 + 3</code> → 8</td></tr>" +
      "<tr><td style='padding:4px 12px; border:1px solid #4a5568;'><code>-</code></td><td style='padding:4px 12px; border:1px solid #4a5568;'>Subtraction: <code>5 - 3</code> → 2</td></tr>" +
      "<tr><td style='padding:4px 12px; border:1px solid #4a5568;'><code>*</code></td><td style='padding:4px 12px; border:1px solid #4a5568;'>Multiplication: <code>5 * 3</code> → 15</td></tr>" +
      "<tr><td style='padding:4px 12px; border:1px solid #4a5568;'><code>/</code></td><td style='padding:4px 12px; border:1px solid #4a5568;'>Division: <code>7 / 2</code> → 3 (integer division!)</td></tr>" +
      "<tr><td style='padding:4px 12px; border:1px solid #4a5568;'><code>%</code></td><td style='padding:4px 12px; border:1px solid #4a5568;'>Remainder: <code>7 % 2</code> → 1</td></tr>" +
      "</table>" +
      "⚠️ <b>Watch out:</b> <code>7 / 2</code> gives <code>3</code>, not <code>3.5</code>! Integer division drops the decimal. To get <code>3.5</code>, use <code>7.0 / 2</code> or cast to double.<br><br>" +
      "<b>Your task:</b> Given length <b>L</b> and width <b>W</b> of a rectangle, print the area (<code>L * W</code>) and perimeter (<code>2 * (L + W)</code>) on the same line separated by a space.",
    inputFormat:
      "The first line contains <b>T</b>.<br>Each of the next <b>T</b> lines contains two integers <b>L</b> and <b>W</b>.",
    outputFormat:
      "For each test case, print <code>[area] [perimeter]</code> on one line.",
    constraints: "1 ≤ T ≤ 100<br>1 ≤ L, W ≤ 1000",
    sampleInput: "3\n5 3\n10 10\n1 1",
    sampleOutput: "15 16\n100 40\n1 4",
    testCases: [
      { input: "3\n5 3\n10 10\n1 1", expected: "15 16\n100 40\n1 4\n" },
      { input: "2\n100 200\n7 1", expected: "20000 600\n7 16\n" },
      { input: "4\n2 2\n3 4\n1000 1000\n6 8", expected: "4 8\n12 14\n1000000 4000\n48 28\n" }
    ],
    starterCode: `import java.util.*;

public class Math_Ops {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t = 0; t < T; t++) {
            int L = sc.nextInt();
            int W = sc.nextInt();

            // Calculate area and perimeter
            // int area = L * W;
            // int perimeter = 2 * (L + W);

            // Print both on one line with a space between
            // System.out.println(area + " " + perimeter);
        }
    }
}`,
    hint: "Area = <code>L * W</code>, Perimeter = <code>2 * (L + W)</code>. Use parentheses to make sure addition happens before multiplication!",
    concepts: ["arithmetic operators", "* / % + -", "order of operations"],
    dataFile: "mathops.dat"
  },

  // ==================== B6: String Length ====================
  {
    id: "b6",
    name: "String Length",
    difficulty: "Basics",
    description:
      "<b>🎓 Learn: String Methods</b><br><br>" +
      "A <code>String</code> is text. Java gives you useful methods to work with strings:<br>" +
      "<table style='border-collapse:collapse; margin:10px 0;'>" +
      "<tr><td style='padding:4px 12px; border:1px solid #4a5568;'><code>.length()</code></td><td style='padding:4px 12px; border:1px solid #4a5568;'>Number of characters: <code>\"hello\".length()</code> → 5</td></tr>" +
      "<tr><td style='padding:4px 12px; border:1px solid #4a5568;'><code>.toUpperCase()</code></td><td style='padding:4px 12px; border:1px solid #4a5568;'><code>\"hello\".toUpperCase()</code> → \"HELLO\"</td></tr>" +
      "<tr><td style='padding:4px 12px; border:1px solid #4a5568;'><code>.toLowerCase()</code></td><td style='padding:4px 12px; border:1px solid #4a5568;'><code>\"HELLO\".toLowerCase()</code> → \"hello\"</td></tr>" +
      "<tr><td style='padding:4px 12px; border:1px solid #4a5568;'><code>.charAt(i)</code></td><td style='padding:4px 12px; border:1px solid #4a5568;'>Character at position i: <code>\"hello\".charAt(0)</code> → 'h'</td></tr>" +
      "</table>" +
      "⚠️ Positions start at <b>0</b>, not 1! The first character is <code>charAt(0)</code>.<br><br>" +
      "<b>Your task:</b> Read a word and print its length.",
    inputFormat:
      "The first line contains <b>T</b>.<br>Each of the next <b>T</b> lines contains a single word (no spaces).",
    outputFormat:
      "For each test case, print the length of the word.",
    constraints: "1 ≤ T ≤ 100<br>Each word has 1 to 100 characters.",
    sampleInput: "3\nhello\nJava\nUIL",
    sampleOutput: "5\n4\n3",
    testCases: [
      { input: "3\nhello\nJava\nUIL", expected: "5\n4\n3\n" },
      { input: "4\na\nab\nabc\nabcdefghij", expected: "1\n2\n3\n10\n" },
      { input: "2\nProgramming\nX", expected: "11\n1\n" }
    ],
    starterCode: `import java.util.*;

public class String_Length {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t = 0; t < T; t++) {
            // Read a word
            String word = sc.next();

            // Print its length using .length()
            // System.out.println(word.length());
        }
    }
}`,
    hint: "Call <code>word.length()</code> — it returns the number of characters. Note: <code>.length()</code> has parentheses because it's a <i>method</i> (a function on the String).",
    concepts: ["String", ".length()", "method calls"],
    dataFile: "strlen.dat"
  },

  // ==================== B7: First and Last ====================
  {
    id: "b7",
    name: "First and Last",
    difficulty: "Basics",
    description:
      "<b>🎓 Learn: charAt() — Accessing Characters</b><br><br>" +
      "Each character in a String has a position number (called an <b>index</b>), starting at <b>0</b>:<br>" +
      "<pre>String s = \"JAVA\";\n// Index:    0123\n// s.charAt(0) → 'J'\n// s.charAt(1) → 'A'\n// s.charAt(2) → 'V'\n// s.charAt(3) → 'A'</pre>" +
      "The last character is at index <code>s.length() - 1</code>:<br>" +
      "<pre>char first = s.charAt(0);                  // 'J'\nchar last  = s.charAt(s.length() - 1);     // 'A'</pre>" +
      "<b>Your task:</b> Read a word and print its first and last characters separated by a space.",
    inputFormat:
      "The first line contains <b>T</b>.<br>Each of the next <b>T</b> lines contains a single word (at least 1 character, no spaces).",
    outputFormat:
      "For each test case, print the first and last characters separated by a space.",
    constraints: "1 ≤ T ≤ 100",
    sampleInput: "3\nhello\nA\nJava",
    sampleOutput: "h o\nA A\nJ a",
    testCases: [
      { input: "3\nhello\nA\nJava", expected: "h o\nA A\nJ a\n" },
      { input: "4\nXYZ\nab\nProgramming\nQ", expected: "X Z\na b\nP g\nQ Q\n" },
      { input: "2\nUIL\nContest", expected: "U L\nC t\n" }
    ],
    starterCode: `import java.util.*;

public class First_and_Last {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t = 0; t < T; t++) {
            String word = sc.next();

            // Get the first character: word.charAt(0)
            // Get the last character: word.charAt(word.length() - 1)
            // Print them with a space between

        }
    }
}`,
    hint: "The first character is <code>word.charAt(0)</code>. The last is <code>word.charAt(word.length() - 1)</code>. When the word has only 1 character, both are the same — and that's fine!",
    concepts: ["charAt()", "string indexing", "length() - 1"],
    dataFile: "firstlast.dat"
  },

  // ==================== B8: Grade Calculator ====================
  {
    id: "b8",
    name: "Grades",
    difficulty: "Basics",
    description:
      "<b>🎓 Learn: If/Else If Chains</b><br><br>" +
      "When you have multiple conditions to check, use an <b>if/else if/else</b> chain. Java checks each condition from top to bottom and runs the <i>first</i> one that's true:<br>" +
      "<pre>if (score >= 90) {\n    System.out.println(\"A\");\n} else if (score >= 80) {\n    System.out.println(\"B\");\n} else if (score >= 70) {\n    System.out.println(\"C\");\n} else if (score >= 60) {\n    System.out.println(\"D\");\n} else {\n    System.out.println(\"F\");\n}</pre>" +
      "Notice: we don't need <code>score >= 80 && score < 90</code> for a B, because if we reached the second <code>else if</code>, we already know the score is less than 90!<br><br>" +
      "<b>Your task:</b> Read a score (0-100) and print the letter grade: A (90-100), B (80-89), C (70-79), D (60-69), F (below 60).",
    inputFormat:
      "The first line contains <b>T</b>.<br>Each of the next <b>T</b> lines contains a single integer score.",
    outputFormat:
      "For each test case, print the letter grade.",
    constraints: "1 ≤ T ≤ 100<br>0 ≤ score ≤ 100",
    sampleInput: "5\n95\n85\n72\n60\n45",
    sampleOutput: "A\nB\nC\nD\nF",
    testCases: [
      { input: "5\n95\n85\n72\n60\n45", expected: "A\nB\nC\nD\nF\n" },
      { input: "5\n100\n90\n80\n70\n0", expected: "A\nA\nB\nC\nF\n" },
      { input: "4\n89\n79\n69\n59", expected: "B\nC\nD\nF\n" }
    ],
    starterCode: `import java.util.*;

public class Grades {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t = 0; t < T; t++) {
            int score = sc.nextInt();

            // Use if/else if/else chain:
            // >= 90 → "A"
            // >= 80 → "B"
            // >= 70 → "C"
            // >= 60 → "D"
            // else  → "F"

        }
    }
}`,
    hint: "Start checking from the highest grade down. The <code>else if</code> chain means each condition only runs if the previous ones were false. So <code>else if (score >= 80)</code> already implies the score is less than 90.",
    concepts: ["if/else if/else", "comparison operators", "grade boundaries"],
    dataFile: "grades.dat"
  },

  // ==================== B9: Loop and Count ====================
  {
    id: "b9",
    name: "Loop and Count",
    difficulty: "Basics",
    description:
      "<b>🎓 Learn: Counting with Loops</b><br><br>" +
      "A common pattern: loop through data and <b>count</b> how many items meet a condition:<br>" +
      "<pre>int count = 0;                // start counter at 0\nfor (int i = 0; i < N; i++) {\n    int x = sc.nextInt();\n    if (x > 0) {              // check condition\n        count++;              // count++ is short for count = count + 1\n    }\n}\nSystem.out.println(count);</pre>" +
      "This is like the accumulator pattern, but instead of adding values, we're counting how many pass a test.<br><br>" +
      "<b>Your task:</b> Given <b>N</b> numbers, count how many are positive (greater than 0).",
    inputFormat:
      "The first line contains <b>T</b>.<br>For each test case: the first line has <b>N</b>, followed by <b>N</b> integers on the next line.",
    outputFormat:
      "For each test case, print the count of positive numbers.",
    constraints: "1 ≤ T ≤ 50<br>1 ≤ N ≤ 100<br>-1000 ≤ each number ≤ 1000",
    sampleInput: "3\n5\n3 -1 4 0 -2\n3\n1 2 3\n4\n-5 -3 -1 0",
    sampleOutput: "2\n3\n0",
    testCases: [
      { input: "3\n5\n3 -1 4 0 -2\n3\n1 2 3\n4\n-5 -3 -1 0", expected: "2\n3\n0\n" },
      { input: "2\n1\n0\n6\n1 -1 2 -2 3 -3", expected: "0\n3\n" },
      { input: "1\n5\n100 200 300 400 500", expected: "5\n" }
    ],
    starterCode: `import java.util.*;

public class Loop_and_Count {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t = 0; t < T; t++) {
            int N = sc.nextInt();

            // Step 1: Create a counter starting at 0
            // int count = 0;

            // Step 2: Loop N times
            // for (int i = 0; i < N; i++) {
            //     int x = sc.nextInt();
            //     if (x > 0) {
            //         count++;
            //     }
            // }

            // Step 3: Print the count
            // System.out.println(count);
        }
    }
}`,
    hint: "Create <code>int count = 0</code> before the loop. Inside the loop, read each number with <code>sc.nextInt()</code> and check <code>if (x > 0)</code>. If true, do <code>count++</code>.",
    concepts: ["counter pattern", "count++", "if inside loop"],
    dataFile: "loopcount.dat"
  },

  // ==================== B10: Min and Max ====================
  {
    id: "b10",
    name: "Min and Max",
    difficulty: "Basics",
    description:
      "<b>🎓 Learn: Finding Minimum and Maximum</b><br><br>" +
      "To find the largest (or smallest) value in a list, start with the first value and compare as you go:<br>" +
      "<pre>int first = sc.nextInt();\nint min = first;   // assume first is smallest\nint max = first;   // assume first is largest\n\nfor (int i = 1; i < N; i++) {  // start at 1 (already read first)\n    int x = sc.nextInt();\n    if (x < min) min = x;      // found a smaller one\n    if (x > max) max = x;      // found a bigger one\n}</pre>" +
      "You could also use <code>Math.min(a, b)</code> and <code>Math.max(a, b)</code>:<br>" +
      "<code>min = Math.min(min, x);</code><br><br>" +
      "<b>Your task:</b> Given <b>N</b> numbers, print the minimum and maximum separated by a space.",
    inputFormat:
      "The first line contains <b>T</b>.<br>For each test case: the first line has <b>N</b>, followed by <b>N</b> integers on the next line.",
    outputFormat:
      "For each test case, print <code>[min] [max]</code> on one line.",
    constraints: "1 ≤ T ≤ 50<br>1 ≤ N ≤ 100<br>-10000 ≤ each number ≤ 10000",
    sampleInput: "3\n5\n3 -1 4 1 -5\n3\n7 7 7\n1\n42",
    sampleOutput: "-5 4\n7 7\n42 42",
    testCases: [
      { input: "3\n5\n3 -1 4 1 -5\n3\n7 7 7\n1\n42", expected: "-5 4\n7 7\n42 42\n" },
      { input: "2\n4\n-100 0 100 50\n6\n1 2 3 4 5 6", expected: "-100 100\n1 6\n" },
      { input: "1\n3\n-5 -10 -1", expected: "-10 -1\n" }
    ],
    starterCode: `import java.util.*;

public class Min_and_Max {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t = 0; t < T; t++) {
            int N = sc.nextInt();

            // Read the first number — it starts as both min and max
            int first = sc.nextInt();
            int min = first;
            int max = first;

            // Loop through the remaining N-1 numbers
            // For each one, update min and max if needed
            for (int i = 1; i < N; i++) {
                int x = sc.nextInt();
                // if (x < min) min = x;
                // if (x > max) max = x;
            }

            // Print min and max
            System.out.println(min + " " + max);
        }
    }
}`,
    hint: "Uncomment the two lines inside the loop! <code>if (x < min) min = x;</code> updates the minimum when we find something smaller. Same idea for max.",
    concepts: ["min/max pattern", "Math.min", "Math.max", "loop comparison"],
    dataFile: "minmax.dat"
  },
];
