// UIL CS Programming – Intermediate (Learning Tier)
// These teach concepts needed for Medium problems: arrays, split, while, printf, char, ArrayList, casting.

const INTERMEDIATE_PROBLEMS = [

  // ==================== I1: Arrays ====================
  {
    id: "i1",
    name: "Arrays",
    difficulty: "Intermediate",
    description:
      "<b>\uD83C\uDF93 Learn: Arrays</b><br><br>" +
      "An <b>array</b> stores a fixed-size list of values of the same type. Unlike single variables, arrays let you hold many values at once:<br>" +
      "<pre>int[] nums = new int[5];  // create array of 5 ints (all start at 0)\nnums[0] = 10;             // set the first element\nnums[1] = 20;             // set the second element\nSystem.out.println(nums[0]);  // prints 10</pre>" +
      "Arrays are <b>zero-indexed</b> \u2014 the first element is at index 0, the last is at index <code>length - 1</code>.<br><br>" +
      "<b>Common pattern \u2014 fill an array from input:</b><br>" +
      "<pre>int N = sc.nextInt();\nint[] arr = new int[N];\nfor (int i = 0; i &lt; N; i++) {\n    arr[i] = sc.nextInt();\n}</pre>" +
      "<b>Loop backwards through an array:</b><br>" +
      "<pre>for (int i = N - 1; i &gt;= 0; i--) {\n    System.out.print(arr[i]);\n}</pre>" +
      "<b>Your task:</b> Read <b>N</b> numbers into an array, then print them in <b>reverse order</b> on one line separated by spaces.",
    inputFormat:
      "The first line contains <b>T</b>, the number of test cases.<br>" +
      "For each test case: the first line contains <b>N</b>, the number of elements. The next line contains <b>N</b> space-separated integers.",
    outputFormat:
      "For each test case, print the numbers in reverse order, separated by spaces, on one line.",
    constraints: "1 &le; T &le; 50<br>1 &le; N &le; 100<br>-10000 &le; each number &le; 10000",
    sampleInput: "3\n5\n10 20 30 40 50\n3\n5 10 15\n1\n99",
    sampleOutput: "50 40 30 20 10\n15 10 5\n99",
    testCases: [
      { input: "3\n5\n10 20 30 40 50\n3\n5 10 15\n1\n99", expected: "50 40 30 20 10\n15 10 5\n99\n" },
      { input: "2\n4\n1 2 3 4\n6\n-5 0 5 10 -10 100", expected: "4 3 2 1\n100 -10 10 5 0 -5\n" },
      { input: "1\n2\n7 7", expected: "7 7\n" }
    ],
    starterCode: `import java.util.*;

public class Arrays {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t = 0; t < T; t++) {
            int N = sc.nextInt();

            // Step 1: Create an array of size N
            // int[] arr = new int[N];

            // Step 2: Fill the array by reading N numbers
            // for (int i = 0; i < N; i++) {
            //     arr[i] = sc.nextInt();
            // }

            // Step 3: Print the array in reverse order
            // Loop from the last index (N-1) down to 0
            // for (int i = N - 1; i >= 0; i--) {
            //     if (i < N - 1) System.out.print(" ");
            //     System.out.print(arr[i]);
            // }
            // System.out.println();
        }
    }
}`,
    hint: "Create <code>int[] arr = new int[N]</code>, fill it with a forward loop using <code>arr[i] = sc.nextInt()</code>, then print with a backward loop from <code>i = N - 1</code> down to <code>i = 0</code>. Use <code>System.out.print()</code> to keep everything on one line.",
    concepts: ["arrays", "array indexing", "reverse traversal", "for loop"],
    dataFile: "arrays.dat"
  },

  // ==================== I2: String Split ====================
  {
    id: "i2",
    name: "String Split",
    difficulty: "Intermediate",
    description:
      "<b>\uD83C\uDF93 Learn: String.split()</b><br><br>" +
      "The <code>split()</code> method breaks a String into an array of substrings based on a separator:<br>" +
      "<pre>String line = \"UIL Computer Science Contest\";\nString[] words = line.split(\" \");\n// words[0] = \"UIL\"\n// words[1] = \"Computer\"\n// words[2] = \"Science\"\n// words[3] = \"Contest\"\n// words.length = 4</pre>" +
      "This is essential for UIL problems where an entire line of data must be parsed.<br><br>" +
      "<b>Important pattern \u2014 reading T then full lines:</b><br>" +
      "When you need to read full lines after reading an integer, use <code>Integer.parseInt()</code> instead of <code>nextInt()</code> to avoid the newline gotcha:<br>" +
      "<pre>int T = Integer.parseInt(sc.nextLine().trim());\nfor (int t = 0; t &lt; T; t++) {\n    String line = sc.nextLine();\n    String[] parts = line.split(\" \");\n    // process parts...\n}</pre>" +
      "<b>Your task:</b> Read a line of words. Print the <b>first</b> and <b>last</b> word on the same line separated by a space. If there is only one word, print it twice.",
    inputFormat:
      "The first line contains <b>T</b>.<br>" +
      "Each of the next <b>T</b> lines contains one or more space-separated words.",
    outputFormat:
      "For each test case, print the first word and the last word separated by a space.",
    constraints: "1 &le; T &le; 50<br>Each line has at least 1 word.",
    sampleInput: "3\nHello World\nUIL Computer Science Contest\nJava",
    sampleOutput: "Hello World\nUIL Contest\nJava Java",
    testCases: [
      { input: "3\nHello World\nUIL Computer Science Contest\nJava", expected: "Hello World\nUIL Contest\nJava Java\n" },
      { input: "4\nOne\nA B C D E\nfirst middle last\nX Y", expected: "One One\nA E\nfirst last\nX Y\n" },
      { input: "2\nThe quick brown fox\nalpha beta", expected: "The fox\nalpha beta\n" }
    ],
    starterCode: `import java.util.*;

public class String_Split {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // Use Integer.parseInt(sc.nextLine().trim()) to read T
        // This avoids the nextInt() + nextLine() newline problem
        int T = Integer.parseInt(sc.nextLine().trim());

        for (int t = 0; t < T; t++) {
            // Step 1: Read the entire line
            // String line = sc.nextLine();

            // Step 2: Split the line into words
            // String[] words = line.split(" ");

            // Step 3: Get the first word: words[0]
            // Get the last word: words[words.length - 1]
            // String first = words[0];
            // String last = words[words.length - 1];

            // Step 4: Print first and last separated by a space
            // System.out.println(first + " " + last);
        }
    }
}`,
    hint: "Use <code>line.split(\" \")</code> to get a <code>String[]</code>. The first word is <code>words[0]</code> and the last is <code>words[words.length - 1]</code>. When there's only one word, both are the same \u2014 and that's correct!",
    concepts: ["String.split()", "string arrays", "Integer.parseInt()", "sc.nextLine()"],
    dataFile: "stringsplit.dat"
  },

  // ==================== I3: While Loops ====================
  {
    id: "i3",
    name: "While Loops",
    difficulty: "Intermediate",
    description:
      "<b>\uD83C\uDF93 Learn: While Loops</b><br><br>" +
      "A <code>while</code> loop repeats as long as its condition is true. Unlike a <code>for</code> loop (which runs a known number of times), a <code>while</code> loop is ideal when you <b>don't know in advance</b> how many iterations you need:<br>" +
      "<pre>int x = 100;\nwhile (x > 0) {\n    System.out.println(x);\n    x = x / 2;   // integer division\n}\n// Prints: 100, 50, 25, 12, 6, 3, 1</pre>" +
      "<b>Integer division</b> drops the decimal: <code>7 / 2 = 3</code>, <code>3 / 2 = 1</code>, <code>1 / 2 = 0</code>.<br><br>" +
      "<b>When to use while vs for:</b><br>" +
      "<ul>" +
      "<li><code>for</code> \u2014 when you know how many times to loop (e.g., loop N times)</li>" +
      "<li><code>while</code> \u2014 when you loop until a condition changes (e.g., until N reaches 0)</li>" +
      "</ul><br>" +
      "<b>Your task:</b> Given <b>N</b>, keep dividing by 2 (integer division) until it reaches 0. Print each value <i>before</i> dividing, all on one line separated by spaces.",
    inputFormat:
      "The first line contains <b>T</b>.<br>" +
      "Each of the next <b>T</b> lines contains a single positive integer <b>N</b>.",
    outputFormat:
      "For each test case, print the sequence of values from N down to 1 (dividing by 2 each step), separated by spaces.",
    constraints: "1 &le; T &le; 50<br>1 &le; N &le; 1,000,000",
    sampleInput: "3\n16\n7\n1",
    sampleOutput: "16 8 4 2 1\n7 3 1\n1",
    testCases: [
      { input: "3\n16\n7\n1", expected: "16 8 4 2 1\n7 3 1\n1\n" },
      { input: "4\n100\n10\n2\n3", expected: "100 50 25 12 6 3 1\n10 5 2 1\n2 1\n3 1\n" },
      { input: "2\n1000000\n32", expected: "1000000 500000 250000 125000 62500 31250 15625 7812 3906 1953 976 488 244 122 61 30 15 7 3 1\n32 16 8 4 2 1\n" }
    ],
    starterCode: `import java.util.*;

public class While_Loops {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t = 0; t < T; t++) {
            int N = sc.nextInt();

            // Step 1: Print N first (before any division)
            // System.out.print(N);

            // Step 2: Use a while loop: keep dividing N by 2
            // while (N > 1) {         // stop when N reaches 1
            //     N = N / 2;          // integer division
            //     System.out.print(" " + N);
            // }

            // Step 3: End the line
            // System.out.println();
        }
    }
}`,
    hint: "Print N first, then enter a <code>while (N > 1)</code> loop. Inside, do <code>N = N / 2</code> and print. Print a space before each subsequent number. Don't forget <code>System.out.println()</code> at the end to finish the line.",
    concepts: ["while loop", "integer division", "loop termination", "while vs for"],
    dataFile: "whileloops.dat"
  },

  // ==================== I4: Printf Formatting ====================
  {
    id: "i4",
    name: "Printf Formatting",
    difficulty: "Intermediate",
    description:
      "<b>\uD83C\uDF93 Learn: System.out.printf and String.format</b><br><br>" +
      "<code>printf</code> lets you control exactly how values are printed using <b>format specifiers</b>:<br>" +
      "<table style='border-collapse:collapse; margin:10px 0;'>" +
      "<tr><td style='padding:4px 12px; border:1px solid #4a5568;'><code>%d</code></td><td style='padding:4px 12px; border:1px solid #4a5568;'>Integer: <code>printf(\"%d\", 42)</code> \u2192 <code>42</code></td></tr>" +
      "<tr><td style='padding:4px 12px; border:1px solid #4a5568;'><code>%f</code></td><td style='padding:4px 12px; border:1px solid #4a5568;'>Decimal: <code>printf(\"%f\", 3.14)</code> \u2192 <code>3.140000</code></td></tr>" +
      "<tr><td style='padding:4px 12px; border:1px solid #4a5568;'><code>%.2f</code></td><td style='padding:4px 12px; border:1px solid #4a5568;'>2 decimal places: <code>printf(\"%.2f\", 3.1)</code> \u2192 <code>3.10</code></td></tr>" +
      "<tr><td style='padding:4px 12px; border:1px solid #4a5568;'><code>%s</code></td><td style='padding:4px 12px; border:1px solid #4a5568;'>String: <code>printf(\"%s\", \"hi\")</code> \u2192 <code>hi</code></td></tr>" +
      "</table>" +
      "You can combine them: <code>printf(\"%s: %.2f\\n\", name, gpa)</code><br><br>" +
      "\u26A0\uFE0F <b>printf does NOT add a newline automatically</b> \u2014 you must include <code>\\n</code> in your format string!<br><br>" +
      "<code>String.format()</code> works the same way but returns a String instead of printing:<br>" +
      "<pre>String result = String.format(\"%.2f\", 3.1);  // result = \"3.10\"</pre>" +
      "<b>Your task:</b> Read a name and a decimal GPA on each line. Print the output formatted as <code>[name]: [gpa]</code> where the GPA is formatted to exactly <b>2 decimal places</b>.",
    inputFormat:
      "The first line contains <b>T</b>.<br>" +
      "Each of the next <b>T</b> lines contains a name (one word) and a decimal GPA separated by a space.",
    outputFormat:
      "For each test case, print <code>[name]: [gpa]</code> with the GPA formatted to exactly 2 decimal places.",
    constraints: "1 &le; T &le; 50<br>0.00 &le; GPA &le; 4.00",
    sampleInput: "3\nAlice 3.95\nBob 2.5\nCarla 4.0",
    sampleOutput: "Alice: 3.95\nBob: 2.50\nCarla: 4.00",
    testCases: [
      { input: "3\nAlice 3.95\nBob 2.5\nCarla 4.0", expected: "Alice: 3.95\nBob: 2.50\nCarla: 4.00\n" },
      { input: "4\nDan 3.0\nEva 3.999\nFinn 0.0\nGrace 2.12345", expected: "Dan: 3.00\nEva: 4.00\nFinn: 0.00\nGrace: 2.12\n" },
      { input: "2\nZara 1.1\nMax 4.0", expected: "Zara: 1.10\nMax: 4.00\n" }
    ],
    starterCode: `import java.util.*;

public class Printf_Formatting {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t = 0; t < T; t++) {
            // Step 1: Read the name (one word) and the GPA (a decimal)
            // String name = sc.next();
            // double gpa = sc.nextDouble();

            // Step 2: Use printf to format the output
            // %s = string, %.2f = decimal with 2 places, \\n = newline
            // System.out.printf("%s: %.2f\\n", name, gpa);

            // Alternative: use String.format + println
            // System.out.println(String.format("%s: %.2f", name, gpa));
        }
    }
}`,
    hint: "Read with <code>sc.next()</code> and <code>sc.nextDouble()</code>. Print with <code>System.out.printf(\"%s: %.2f\\n\", name, gpa)</code>. The <code>%.2f</code> specifier rounds and formats to exactly 2 decimal places.",
    concepts: ["printf", "format specifiers", "%.2f", "String.format"],
    dataFile: "printf.dat"
  },

  // ==================== I5: Char Type ====================
  {
    id: "i5",
    name: "Char Type",
    difficulty: "Intermediate",
    description:
      "<b>\uD83C\uDF93 Learn: The char Type and ASCII</b><br><br>" +
      "A <code>char</code> is a single character. In Java, every character has a numeric <b>ASCII value</b>:<br>" +
      "<table style='border-collapse:collapse; margin:10px 0;'>" +
      "<tr><td style='padding:4px 12px; border:1px solid #4a5568;'><code>'A'</code> to <code>'Z'</code></td><td style='padding:4px 12px; border:1px solid #4a5568;'>65 to 90</td></tr>" +
      "<tr><td style='padding:4px 12px; border:1px solid #4a5568;'><code>'a'</code> to <code>'z'</code></td><td style='padding:4px 12px; border:1px solid #4a5568;'>97 to 122</td></tr>" +
      "<tr><td style='padding:4px 12px; border:1px solid #4a5568;'><code>'0'</code> to <code>'9'</code></td><td style='padding:4px 12px; border:1px solid #4a5568;'>48 to 57</td></tr>" +
      "</table>" +
      "You can <b>cast</b> between char and int:<br>" +
      "<pre>char ch = 'A';\nint ascii = (int) ch;    // ascii = 65\nchar back = (char) 66;   // back = 'B'</pre>" +
      "<b>Character classification methods:</b><br>" +
      "<pre>Character.isUpperCase('A')   // true\nCharacter.isLowerCase('a')   // true\nCharacter.isDigit('5')       // true</pre>" +
      "You can also check manually: <code>ch >= 'A' && ch <= 'Z'</code> checks for uppercase.<br><br>" +
      "<b>Your task:</b> Read a single character. Print the character, its ASCII value, and whether it is <code>UPPERCASE</code>, <code>LOWERCASE</code>, <code>DIGIT</code>, or <code>OTHER</code>, all separated by spaces.",
    inputFormat:
      "The first line contains <b>T</b>.<br>" +
      "Each of the next <b>T</b> lines contains a single character.",
    outputFormat:
      "For each test case, print: <code>[char] [ASCII value] [category]</code> where category is <code>UPPERCASE</code>, <code>LOWERCASE</code>, <code>DIGIT</code>, or <code>OTHER</code>.",
    constraints: "1 &le; T &le; 50<br>Each character is a printable ASCII character.",
    sampleInput: "5\nA\nz\n5\n!\nM",
    sampleOutput: "A 65 UPPERCASE\nz 122 LOWERCASE\n5 53 DIGIT\n! 33 OTHER\nM 77 UPPERCASE",
    testCases: [
      { input: "5\nA\nz\n5\n!\nM", expected: "A 65 UPPERCASE\nz 122 LOWERCASE\n5 53 DIGIT\n! 33 OTHER\nM 77 UPPERCASE\n" },
      { input: "4\n0\n9\na\nZ", expected: "0 48 DIGIT\n9 57 DIGIT\na 97 LOWERCASE\nZ 90 UPPERCASE\n" },
      { input: "3\n@\nm\n3", expected: "@ 64 OTHER\nm 109 LOWERCASE\n3 51 DIGIT\n" }
    ],
    starterCode: `import java.util.*;

public class Char_Type {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = Integer.parseInt(sc.nextLine().trim());
        for (int t = 0; t < T; t++) {
            // Step 1: Read a line and get the first character
            // char ch = sc.nextLine().charAt(0);

            // Step 2: Get the ASCII value by casting to int
            // int ascii = (int) ch;

            // Step 3: Determine the category
            // String category;
            // if (ch >= 'A' && ch <= 'Z') {
            //     category = "UPPERCASE";
            // } else if (ch >= 'a' && ch <= 'z') {
            //     category = "LOWERCASE";
            // } else if (ch >= '0' && ch <= '9') {
            //     category = "DIGIT";
            // } else {
            //     category = "OTHER";
            // }

            // Step 4: Print the result
            // System.out.println(ch + " " + ascii + " " + category);
        }
    }
}`,
    hint: "Read the character with <code>sc.nextLine().charAt(0)</code>. Cast to int with <code>(int) ch</code> to get the ASCII value. Use range checks like <code>ch >= 'A' && ch <= 'Z'</code> or <code>Character.isUpperCase(ch)</code>.",
    concepts: ["char type", "ASCII values", "type casting", "Character methods"],
    dataFile: "chartype.dat"
  },

  // ==================== I6: ArrayList ====================
  {
    id: "i6",
    name: "ArrayList",
    difficulty: "Intermediate",
    description:
      "<b>\uD83C\uDF93 Learn: ArrayList</b><br><br>" +
      "An <code>ArrayList</code> is like an array, but it can <b>grow and shrink</b>. You can add and remove elements freely:<br>" +
      "<pre>ArrayList&lt;Integer&gt; list = new ArrayList&lt;&gt;();\nlist.add(10);       // [10]\nlist.add(20);       // [10, 20]\nlist.add(30);       // [10, 20, 30]\nlist.get(0);        // returns 10\nlist.size();        // returns 3\nlist.remove(1);     // removes index 1 \u2192 [10, 30]</pre>" +
      "\u26A0\uFE0F <b>Careful when removing!</b> When you remove an element, all elements after it shift left. If you remove while looping forward, you'll skip elements. Loop <b>backward</b> to avoid this:<br>" +
      "<pre>for (int i = list.size() - 1; i &gt;= 0; i--) {\n    if (list.get(i) &lt; 0) {\n        list.remove(i);  // safe \u2014 removing from end doesn't shift what's ahead\n    }\n}</pre>" +
      "<b>Note:</b> Use <code>ArrayList&lt;Integer&gt;</code> not <code>ArrayList&lt;int&gt;</code> \u2014 generics require wrapper types.<br><br>" +
      "<b>Your task:</b> Read <b>N</b> numbers into an ArrayList. Remove all <b>negative</b> numbers. Print the remaining numbers separated by spaces, or <code>EMPTY</code> if none remain.",
    inputFormat:
      "The first line contains <b>T</b>.<br>" +
      "For each test case: the first line contains <b>N</b>. The next line contains <b>N</b> space-separated integers.",
    outputFormat:
      "For each test case, print the remaining non-negative numbers separated by spaces, or <code>EMPTY</code> if all were removed.",
    constraints: "1 &le; T &le; 50<br>1 &le; N &le; 100<br>-10000 &le; each number &le; 10000",
    sampleInput: "3\n5\n3 -1 4 -5 2\n3\n-1 -2 -3\n4\n10 20 30 40",
    sampleOutput: "3 4 2\nEMPTY\n10 20 30 40",
    testCases: [
      { input: "3\n5\n3 -1 4 -5 2\n3\n-1 -2 -3\n4\n10 20 30 40", expected: "3 4 2\nEMPTY\n10 20 30 40\n" },
      { input: "3\n6\n-1 0 -2 0 -3 0\n1\n5\n1\n-5", expected: "0 0 0\n5\nEMPTY\n" },
      { input: "2\n5\n-10 -20 -30 -40 -50\n4\n1 -1 2 -2", expected: "EMPTY\n1 2\n" }
    ],
    starterCode: `import java.util.*;

public class ArrayList_Problem {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t = 0; t < T; t++) {
            int N = sc.nextInt();

            // Step 1: Create an ArrayList and fill it with N numbers
            // ArrayList<Integer> list = new ArrayList<>();
            // for (int i = 0; i < N; i++) {
            //     list.add(sc.nextInt());
            // }

            // Step 2: Remove all negative numbers (loop BACKWARD!)
            // for (int i = list.size() - 1; i >= 0; i--) {
            //     if (list.get(i) < 0) {
            //         list.remove(i);
            //     }
            // }

            // Step 3: Print the result
            // if (list.size() == 0) {
            //     System.out.println("EMPTY");
            // } else {
            //     StringBuilder sb = new StringBuilder();
            //     for (int i = 0; i < list.size(); i++) {
            //         if (i > 0) sb.append(" ");
            //         sb.append(list.get(i));
            //     }
            //     System.out.println(sb.toString());
            // }
        }
    }
}`,
    hint: "Fill the ArrayList with a forward loop, then remove negatives with a <b>backward</b> loop to avoid index-shifting bugs. Check <code>list.size() == 0</code> for the EMPTY case. Remember: 0 is <i>not</i> negative!",
    concepts: ["ArrayList", "add()", "get()", "remove()", "backward loop removal"],
    dataFile: "arraylist.dat"
  },

  // ==================== I7: Type Casting ====================
  {
    id: "i7",
    name: "Type Casting",
    difficulty: "Intermediate",
    description:
      "<b>\uD83C\uDF93 Learn: Type Casting</b><br><br>" +
      "<b>Type casting</b> converts a value from one type to another. Java has two kinds:<br><br>" +
      "<b>1. Widening (automatic)</b> \u2014 smaller type to larger type (no data loss):<br>" +
      "<pre>int x = 7;\ndouble d = x;    // d = 7.0 (automatic, safe)</pre>" +
      "<b>2. Narrowing (manual)</b> \u2014 larger type to smaller type (may lose data):<br>" +
      "<pre>double d = 7.9;\nint x = (int) d;   // x = 7 (decimal part is DROPPED, not rounded!)</pre>" +
      "\u26A0\uFE0F <b>The most common UIL gotcha: integer division!</b><br>" +
      "<pre>int a = 7, b = 2;\nSystem.out.println(a / b);         // prints 3 (integer division!)\nSystem.out.println((double) a / b); // prints 3.5 (cast BEFORE dividing)</pre>" +
      "You must cast <b>before</b> the division happens. Casting after is too late:<br>" +
      "<pre>(double)(a / b)  // WRONG: 7/2=3, then (double)3 = 3.0\n(double) a / b   // RIGHT: 7.0/2 = 3.5</pre>" +
      "<b>Your task:</b> Read two integers <b>A</b> and <b>B</b>. Print their average to exactly <b>1 decimal place</b>.",
    inputFormat:
      "The first line contains <b>T</b>.<br>" +
      "Each of the next <b>T</b> lines contains two space-separated integers <b>A</b> and <b>B</b>.",
    outputFormat:
      "For each test case, print the average of A and B formatted to exactly 1 decimal place.",
    constraints: "1 &le; T &le; 50<br>-10000 &le; A, B &le; 10000",
    sampleInput: "3\n7 3\n10 3\n4 4",
    sampleOutput: "5.0\n6.5\n4.0",
    testCases: [
      { input: "3\n7 3\n10 3\n4 4", expected: "5.0\n6.5\n4.0\n" },
      { input: "4\n1 2\n0 0\n-5 5\n100 1", expected: "1.5\n0.0\n0.0\n50.5\n" },
      { input: "3\n3 3\n7 4\n-10 -3", expected: "3.0\n5.5\n-6.5\n" }
    ],
    starterCode: `import java.util.*;

public class Type_Casting {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t = 0; t < T; t++) {
            // Step 1: Read two integers
            // int A = sc.nextInt();
            // int B = sc.nextInt();

            // Step 2: Compute the average using a cast to double
            // WRONG: (A + B) / 2      → integer division, loses decimal
            // WRONG: (double)((A + B) / 2) → cast too late!
            // RIGHT: (double)(A + B) / 2   → cast sum to double FIRST
            // double avg = (double)(A + B) / 2;

            // Step 3: Print with exactly 1 decimal place
            // System.out.printf("%.1f\\n", avg);
        }
    }
}`,
    hint: "Cast to double <b>before</b> dividing: <code>double avg = (double)(A + B) / 2;</code>. Then use <code>System.out.printf(\"%.1f\\n\", avg)</code> to format to 1 decimal place.",
    concepts: ["type casting", "int to double", "integer division pitfall", "printf"],
    dataFile: "typecasting.dat"
  },

  // ==================== I8: Putting It Together ====================
  {
    id: "i8",
    name: "Putting It Together",
    difficulty: "Intermediate",
    description:
      "<b>\uD83C\uDF93 Learn: Combining Arrays, Loops, and Formatting</b><br><br>" +
      "Real UIL problems combine multiple concepts. Let's practice using <b>arrays</b>, <b>loops</b>, <b>accumulators</b>, <b>type casting</b>, and <b>formatted output</b> all in one problem.<br><br>" +
      "<b>Strategy for multi-step problems:</b><br>" +
      "<ol>" +
      "<li>Read data into an array</li>" +
      "<li>Process: compute a result (e.g., average)</li>" +
      "<li>Analyze: use that result for further computation (e.g., count how many are above it)</li>" +
      "<li>Output: format and print the answer</li>" +
      "</ol><br>" +
      "<b>Example workflow:</b><br>" +
      "<pre>// Step 1: Read scores into array\nint[] scores = new int[N];\nfor (int i = 0; i &lt; N; i++) scores[i] = sc.nextInt();\n\n// Step 2: Compute sum\nint sum = 0;\nfor (int i = 0; i &lt; N; i++) sum += scores[i];\n\n// Step 3: Compute average (cast to double!)\ndouble avg = (double) sum / N;\n\n// Step 4: Count how many are above average\nint count = 0;\nfor (int i = 0; i &lt; N; i++) {\n    if (scores[i] &gt; avg) count++;\n}</pre>" +
      "<b>Your task:</b> Read <b>N</b> student scores. Compute the class <b>average</b> (formatted to 1 decimal place). Count how many students scored <b>strictly above</b> the average. Print both values separated by a space.",
    inputFormat:
      "The first line contains <b>T</b>.<br>" +
      "For each test case: the first line contains <b>N</b>. The next line contains <b>N</b> space-separated integer scores.",
    outputFormat:
      "For each test case, print the average (1 decimal place) and the count of students above average, separated by a space.",
    constraints: "1 &le; T &le; 50<br>1 &le; N &le; 100<br>0 &le; each score &le; 100",
    sampleInput: "3\n5\n90 80 70 60 50\n3\n100 100 100\n4\n85 90 78 95",
    sampleOutput: "70.0 2\n100.0 0\n87.0 2",
    testCases: [
      { input: "3\n5\n90 80 70 60 50\n3\n100 100 100\n4\n85 90 78 95", expected: "70.0 2\n100.0 0\n87.0 2\n" },
      { input: "3\n1\n50\n2\n0 100\n6\n70 70 70 70 70 70", expected: "50.0 0\n50.0 1\n70.0 0\n" },
      { input: "2\n4\n100 0 100 0\n3\n60 70 80", expected: "50.0 2\n70.0 1\n" }
    ],
    starterCode: `import java.util.*;

public class Putting_It_Together {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t = 0; t < T; t++) {
            int N = sc.nextInt();

            // Step 1: Read N scores into an array
            // int[] scores = new int[N];
            // for (int i = 0; i < N; i++) {
            //     scores[i] = sc.nextInt();
            // }

            // Step 2: Compute the sum of all scores
            // int sum = 0;
            // for (int i = 0; i < N; i++) {
            //     sum += scores[i];
            // }

            // Step 3: Compute the average (cast to double!)
            // double avg = (double) sum / N;

            // Step 4: Count how many scores are strictly above the average
            // int above = 0;
            // for (int i = 0; i < N; i++) {
            //     if (scores[i] > avg) {
            //         above++;
            //     }
            // }

            // Step 5: Print the average (1 decimal place) and the count
            // System.out.printf("%.1f %d\\n", avg, above);
        }
    }
}`,
    hint: "Use an array to store all scores (you need them twice \u2014 once for the sum, once to count above average). Cast to double before dividing for the average. Use <code>printf(\"%.1f %d\\n\", avg, above)</code> for the output.",
    concepts: ["arrays", "accumulator", "type casting", "printf", "multi-step problem"],
    dataFile: "together.dat"
  },

  // ==================== I9: Array Search ====================
  {
    id: "i9",
    name: "Array Search",
    difficulty: "Intermediate",
    description:
      "Given an array of integers and a target value, find the <b>index</b> of the first occurrence of the target. If not found, print <code>-1</code>.<br><br>" +
      "This is called a <b>linear search</b> — you check each element one by one.",
    inputFormat:
      "The first line contains <b>T</b>.<br>" +
      "For each test case: the first line contains <b>N</b> and <b>target</b>. The next line contains <b>N</b> integers.",
    outputFormat:
      "For each test case, print the 0-based index of the first occurrence of target, or <code>-1</code> if not found.",
    constraints: "1 &le; T &le; 50<br>1 &le; N &le; 100",
    sampleInput: "3\n5 30\n10 20 30 40 50\n4 99\n1 2 3 4\n6 5\n5 5 5 5 5 5",
    sampleOutput: "2\n-1\n0",
    testCases: [
      { input: "3\n5 30\n10 20 30 40 50\n4 99\n1 2 3 4\n6 5\n5 5 5 5 5 5", expected: "2\n-1\n0\n" },
      { input: "3\n3 3\n1 2 3\n1 1\n1\n5 7\n8 6 4 2 0", expected: "2\n0\n-1\n" },
      { input: "2\n4 -5\n-5 0 5 -5\n3 0\n1 2 3", expected: "0\n-1\n" }
    ],
    starterCode: `import java.util.*;

public class Array_Search {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t = 0; t < T; t++) {
            int N = sc.nextInt();
            int target = sc.nextInt();
            int[] arr = new int[N];
            for (int i = 0; i < N; i++) {
                arr[i] = sc.nextInt();
            }

            // Find the index of the first occurrence of target
            // Hint: loop through the array, check if arr[i] == target
            // If found, print i and break. If not found, print -1.

        }
    }
}`,
    hint: "Use a variable <code>int index = -1;</code> before the loop. Inside the loop, if <code>arr[i] == target</code>, set <code>index = i;</code> and <code>break;</code>. After the loop, print <code>index</code>.",
    concepts: ["linear search", "arrays", "break", "sentinel value"],
    dataFile: "arraysearch.dat"
  },

  // ==================== I10: Circle Math ====================
  {
    id: "i10",
    name: "Circle Math",
    difficulty: "Intermediate",
    description:
      "Given the radius of a circle, compute its <b>area</b> and <b>circumference</b>.<br><br>" +
      "Formulas:<br>" +
      "<code>area = π × r²</code><br>" +
      "<code>circumference = 2 × π × r</code><br><br>" +
      "In Java, use <code>Math.PI</code> for π and <code>Math.pow(r, 2)</code> or <code>r * r</code> for r².<br>" +
      "Print both values formatted to <b>2 decimal places</b>.",
    inputFormat:
      "The first line contains <b>T</b>.<br>Each of the next <b>T</b> lines contains a decimal number <b>r</b> (the radius).",
    outputFormat:
      "For each test case, print <code>[area] [circumference]</code> with both formatted to 2 decimal places.",
    constraints: "1 &le; T &le; 50<br>0.01 &le; r &le; 1000.0",
    sampleInput: "3\n1.0\n5.0\n2.5",
    sampleOutput: "3.14 6.28\n78.54 31.42\n19.63 15.71",
    testCases: [
      { input: "3\n1.0\n5.0\n2.5", expected: "3.14 6.28\n78.54 31.42\n19.63 15.71\n" },
      { input: "3\n10.0\n0.5\n100.0", expected: "314.16 62.83\n0.79 3.14\n31415.93 628.32\n" },
      { input: "2\n3.0\n7.5", expected: "28.27 18.85\n176.71 47.12\n" }
    ],
    starterCode: `import java.util.*;

public class Circle_Math {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t = 0; t < T; t++) {
            double r = sc.nextDouble();

            // Calculate area and circumference using Math.PI
            // double area = Math.PI * r * r;
            // double circ = 2 * Math.PI * r;

            // Print both to 2 decimal places
            // System.out.printf("%.2f %.2f\\n", area, circ);
        }
    }
}`,
    hint: "Use <code>Math.PI * r * r</code> for area and <code>2 * Math.PI * r</code> for circumference. Format with <code>printf(\"%.2f %.2f\\n\", area, circ)</code>.",
    concepts: ["Math.PI", "Math.pow", "printf", "formulas"],
    dataFile: "circlemath.dat"
  },

  // ==================== I11: Word Uppercase ====================
  {
    id: "i11",
    name: "Word Uppercase",
    difficulty: "Intermediate",
    description:
      "Given a sentence, capitalize the <b>first letter</b> of every word and make all other letters lowercase.<br><br>" +
      "<b>Useful methods:</b><br>" +
      "<code>Character.toUpperCase('a')</code> → <code>'A'</code><br>" +
      "<code>Character.toLowerCase('B')</code> → <code>'b'</code><br>" +
      "<code>str.substring(0, 1)</code> → first character as a String<br>" +
      "<code>str.substring(1)</code> → everything after the first character",
    inputFormat:
      "The first line contains <b>T</b>.<br>Each of the next <b>T</b> lines contains a sentence of words separated by spaces.",
    outputFormat:
      "For each test case, print the sentence with each word capitalized (first letter uppercase, rest lowercase).",
    constraints: "1 &le; T &le; 50<br>Each line has at least 1 word.",
    sampleInput: "3\nhello world\nUIL COMPUTER SCIENCE\njava programming",
    sampleOutput: "Hello World\nUil Computer Science\nJava Programming",
    testCases: [
      { input: "3\nhello world\nUIL COMPUTER SCIENCE\njava programming", expected: "Hello World\nUil Computer Science\nJava Programming\n" },
      { input: "3\na b c\nALREADY Good\nONE", expected: "A B C\nAlready Good\nOne\n" },
      { input: "2\nthe quick brown fox\nmIxEd CaSe WoRdS", expected: "The Quick Brown Fox\nMixed Case Words\n" }
    ],
    starterCode: `import java.util.*;

public class Word_Uppercase {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = Integer.parseInt(sc.nextLine().trim());
        for (int t = 0; t < T; t++) {
            String line = sc.nextLine();
            String[] words = line.split(" ");

            // For each word:
            //   - Make the first letter uppercase
            //   - Make the rest lowercase
            //   - Join them back with spaces

        }
    }
}`,
    hint: "For each word: <code>word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase()</code>. Join words with spaces using a StringBuilder or by printing with <code>System.out.print()</code>.",
    concepts: ["String.split()", "substring()", "toUpperCase()", "toLowerCase()"],
    dataFile: "wordupper.dat"
  },

  // ==================== I12: Frequency Count ====================
  {
    id: "i12",
    name: "Frequency Count",
    difficulty: "Intermediate",
    description:
      "Given <b>N</b> integers (each between 1 and 10), count how many times each number appears and print the counts.<br><br>" +
      "<b>Technique: use an array as a frequency counter.</b><br>" +
      "<pre>int[] freq = new int[11]; // indices 0-10, all start at 0\nfor (int i = 0; i &lt; N; i++) {\n    int x = sc.nextInt();\n    freq[x]++;  // increment the counter for value x\n}\n// Now freq[3] = how many times 3 appeared</pre>" +
      "This technique is used in many UIL problems (character frequency, histogram, etc.).",
    inputFormat:
      "The first line contains <b>T</b>.<br>For each test case: the first line contains <b>N</b>. The next line has <b>N</b> integers (each 1-10).",
    outputFormat:
      "For each test case, print only the values that appeared at least once, in the format <code>[value]:[count]</code> separated by spaces, in order from 1 to 10.",
    constraints: "1 &le; T &le; 50<br>1 &le; N &le; 100<br>Each value is between 1 and 10.",
    sampleInput: "3\n5\n3 1 3 2 1\n3\n5 5 5\n10\n1 2 3 4 5 6 7 8 9 10",
    sampleOutput: "1:2 2:1 3:2\n5:3\n1:1 2:1 3:1 4:1 5:1 6:1 7:1 8:1 9:1 10:1",
    testCases: [
      { input: "3\n5\n3 1 3 2 1\n3\n5 5 5\n10\n1 2 3 4 5 6 7 8 9 10", expected: "1:2 2:1 3:2\n5:3\n1:1 2:1 3:1 4:1 5:1 6:1 7:1 8:1 9:1 10:1\n" },
      { input: "2\n6\n1 1 1 1 1 1\n4\n10 10 1 1", expected: "1:6\n1:2 10:2\n" },
      { input: "1\n8\n7 7 3 3 7 3 7 3", expected: "3:4 7:4\n" }
    ],
    starterCode: `import java.util.*;

public class Frequency_Count {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t = 0; t < T; t++) {
            int N = sc.nextInt();

            // Step 1: Create a frequency array of size 11 (for values 1-10)
            int[] freq = new int[11];

            // Step 2: Read N numbers and count them
            for (int i = 0; i < N; i++) {
                int x = sc.nextInt();
                freq[x]++;
            }

            // Step 3: Print values that appeared at least once
            // Loop from 1 to 10, skip values with freq[i] == 0

        }
    }
}`,
    hint: "After counting, loop from 1 to 10. For each <code>i</code> where <code>freq[i] > 0</code>, print <code>i + \":\" + freq[i]</code>. Use a StringBuilder or track whether to print a leading space.",
    concepts: ["frequency array", "counting", "array as map", "histogram"],
    dataFile: "freqcount.dat"
  },

  // ==================== I13: Number Swap ====================
  {
    id: "i13",
    name: "Swap Sort",
    difficulty: "Intermediate",
    description:
      "Given 3 integers, print them in <b>ascending order</b> (smallest to largest).<br><br>" +
      "<b>Technique: sorting with swaps.</b> You can sort 3 numbers by comparing pairs and swapping when out of order:<br>" +
      "<pre>if (a > b) { int temp = a; a = b; b = temp; }  // swap a,b\nif (a > c) { int temp = a; a = c; c = temp; }  // swap a,c\nif (b > c) { int temp = b; b = c; c = temp; }  // swap b,c\n// Now a <= b <= c</pre>" +
      "Or use <code>Arrays.sort()</code>:<br>" +
      "<pre>int[] nums = {a, b, c};\nArrays.sort(nums);  // sorts in ascending order</pre>",
    inputFormat:
      "The first line contains <b>T</b>.<br>Each of the next <b>T</b> lines contains three space-separated integers.",
    outputFormat:
      "For each test case, print the three numbers in ascending order separated by spaces.",
    constraints: "1 &le; T &le; 50<br>-10000 &le; each number &le; 10000",
    sampleInput: "3\n3 1 2\n5 5 5\n-1 0 1",
    sampleOutput: "1 2 3\n5 5 5\n-1 0 1",
    testCases: [
      { input: "3\n3 1 2\n5 5 5\n-1 0 1", expected: "1 2 3\n5 5 5\n-1 0 1\n" },
      { input: "4\n100 -100 0\n9 8 7\n1 1 2\n-5 -10 -1", expected: "-100 0 100\n7 8 9\n1 1 2\n-10 -5 -1\n" },
      { input: "2\n42 42 41\n0 0 0", expected: "41 42 42\n0 0 0\n" }
    ],
    starterCode: `import java.util.*;

public class Swap_Sort {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t = 0; t < T; t++) {
            int a = sc.nextInt();
            int b = sc.nextInt();
            int c = sc.nextInt();

            // Option 1: Manual swaps
            // if (a > b) { int temp = a; a = b; b = temp; }
            // if (a > c) { int temp = a; a = c; c = temp; }
            // if (b > c) { int temp = b; b = c; c = temp; }

            // Option 2: Arrays.sort
            // int[] nums = {a, b, c};
            // Arrays.sort(nums);
            // a = nums[0]; b = nums[1]; c = nums[2];

            // System.out.println(a + " " + b + " " + c);
        }
    }
}`,
    hint: "Either do 3 comparisons with swaps (if a>b swap, if a>c swap, if b>c swap), or put them in an array and use <code>Arrays.sort()</code>.",
    concepts: ["sorting", "swap pattern", "Arrays.sort()", "comparison"],
    dataFile: "swapsort.dat"
  },

  // ==================== I14: Double Input ====================
  {
    id: "i14",
    name: "Mixed Input",
    difficulty: "Intermediate",
    description:
      "Practice reading <b>mixed types</b> on the same line: integers, doubles, and strings.<br><br>" +
      "A store item has a name (one word), a quantity (integer), and a price (decimal). Compute the <b>total cost</b> for each item and format it as currency (2 decimal places).<br><br>" +
      "<b>Reading mixed types:</b><br>" +
      "<pre>String name = sc.next();       // reads one word\nint qty = sc.nextInt();         // reads integer\ndouble price = sc.nextDouble(); // reads decimal</pre>" +
      "Scanner automatically skips whitespace between values, so these all work even when on the same line.",
    inputFormat:
      "The first line contains <b>T</b>.<br>Each of the next <b>T</b> lines contains a name (one word), a quantity (integer), and a unit price (decimal).",
    outputFormat:
      "For each test case, print <code>[name]: $[total]</code> where total is quantity × price formatted to 2 decimal places.",
    constraints: "1 &le; T &le; 50<br>1 &le; quantity &le; 1000<br>0.01 &le; price &le; 10000.00",
    sampleInput: "3\nPencil 12 0.50\nNotebook 3 4.99\nCalculator 1 115.00",
    sampleOutput: "Pencil: $6.00\nNotebook: $14.97\nCalculator: $115.00",
    testCases: [
      { input: "3\nPencil 12 0.50\nNotebook 3 4.99\nCalculator 1 115.00", expected: "Pencil: $6.00\nNotebook: $14.97\nCalculator: $115.00\n" },
      { input: "2\nApple 100 1.25\nWater 1 0.01", expected: "Apple: $125.00\nWater: $0.01\n" },
      { input: "4\nA 1 1.00\nB 2 2.50\nC 10 0.99\nD 5 3.33", expected: "A: $1.00\nB: $5.00\nC: $9.90\nD: $16.65\n" }
    ],
    starterCode: `import java.util.*;

public class Mixed_Input {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t = 0; t < T; t++) {
            // Read a String, int, and double from the same line
            String name = sc.next();
            int qty = sc.nextInt();
            double price = sc.nextDouble();

            // Compute total and print formatted
            // double total = qty * price;
            // System.out.printf("%s: $%.2f\\n", name, total);
        }
    }
}`,
    hint: "Multiply <code>qty * price</code> (Java auto-casts qty to double). Use <code>printf(\"%s: $%.2f\\n\", name, total)</code> for the output.",
    concepts: ["mixed type input", "sc.next()", "sc.nextDouble()", "printf"],
    dataFile: "mixedinput.dat"
  }
];
