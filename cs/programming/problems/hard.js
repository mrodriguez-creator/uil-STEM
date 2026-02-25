const HARD_PROBLEMS = [
  // ==================== H1: Wendy ====================
  {
    id: "h1",
    name: "Wendy",
    difficulty: "Hard",
    description:
      "Wendy is studying Gray codes! A Gray code sequence is a sequence of binary numbers where consecutive values differ by exactly one bit. Given a width <b>W</b>, generate all Gray codes from 0 to 2<sup>W</sup> - 1 in order. The Gray code for a value <b>i</b> is computed as <code>i XOR (i &gt;&gt; 1)</code>. Print all values (as base-10 integers) space-separated on one line per test case.",
    inputFormat:
      "The first line contains a single integer <b>T</b>, the number of test cases.<br>Each of the next <b>T</b> lines contains a single integer <b>W</b>, the bit width.",
    outputFormat:
      "For each test case, print all 2<sup>W</sup> Gray code values (as integers) on one line, separated by spaces.",
    constraints: "1 &le; T &le; 20<br>1 &le; W &le; 8",
    sampleInput: "2\n2\n3",
    sampleOutput: "0 1 3 2\n0 1 3 2 6 7 5 4",
    testCases: [
      {
        input: "2\n2\n3",
        expected: "0 1 3 2\n0 1 3 2 6 7 5 4\n"
      },
      {
        input: "3\n1\n4\n2",
        expected: "0 1\n0 1 3 2 6 7 5 4 12 13 15 14 10 11 9 8\n0 1 3 2\n"
      },
      {
        input: "1\n5",
        expected: "0 1 3 2 6 7 5 4 12 13 15 14 10 11 9 8 24 25 27 26 30 31 29 28 20 21 23 22 18 19 17 16\n"
      }
    ],
    starterCode: `import java.util.*;

public class Wendy {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t = 0; t < T; t++) {
            // Your code here
        }
    }
}`,
    hint: "The Gray code for index <code>i</code> is <code>i ^ (i >> 1)</code>. Loop from 0 to 2<sup>W</sup> - 1 and compute each value. Use <code>1 << W</code> to compute 2<sup>W</sup>. Use a <code>StringBuilder</code> to build the space-separated output efficiently.",
    concepts: ["bit manipulation", "XOR", "Gray codes", "bitwise shift"],
    dataFile: "wendy.dat"
  },

  // ==================== H2: Xavier ====================
  {
    id: "h2",
    name: "Xavier",
    difficulty: "Hard",
    description:
      "Xavier is fascinated by digits and squares! Given integers <b>A</b> and <b>B</b>, find all numbers in the range [A, B] (inclusive) where the sum of the squares of the digits is itself a perfect square. Print these numbers space-separated. If no such number exists, print <code>NONE</code>.",
    inputFormat:
      "The first line contains a single integer <b>T</b>, the number of test cases.<br>Each of the next <b>T</b> lines contains two space-separated integers <b>A</b> and <b>B</b>.",
    outputFormat:
      "For each test case, print the qualifying numbers space-separated on one line. If none exist, print <code>NONE</code>.",
    constraints: "1 &le; T &le; 20<br>1 &le; A &le; B &le; 10000",
    sampleInput: "2\n1 10\n11 19",
    sampleOutput: "1 2 3 4 5 6 7 8 9 10\nNONE",
    testCases: [
      {
        input: "2\n1 10\n11 19",
        expected: "1 2 3 4 5 6 7 8 9 10\nNONE\n"
      },
      {
        input: "3\n30 50\n100 105\n99 99",
        expected: "30 34 40 43 50\n100\nNONE\n"
      },
      {
        input: "2\n1 1\n200 210",
        expected: "1\n200 203 210\n"
      }
    ],
    starterCode: `import java.util.*;

public class Xavier {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t = 0; t < T; t++) {
            // Your code here
        }
    }
}`,
    hint: "For each number, extract its digits and compute the sum of their squares. Then check if that sum is a perfect square by taking <code>(int)Math.sqrt(sum)</code> and verifying <code>sq * sq == sum</code>. Build a list of qualifying numbers and print them, or print <code>NONE</code> if the list is empty.",
    concepts: ["digit extraction", "perfect squares", "Math.sqrt", "modular arithmetic"],
    dataFile: "xavier.dat"
  },

  // ==================== H3: Yara ====================
  {
    id: "h3",
    name: "Yara",
    difficulty: "Hard",
    description:
      "Yara loves spirals! Given an <b>N &times; N</b> matrix of integers, print all elements in clockwise spiral order starting from the top-left corner.",
    inputFormat:
      "The first line contains a single integer <b>T</b>, the number of test cases.<br>For each test case, the first line contains an integer <b>N</b>. The next <b>N</b> lines each contain <b>N</b> space-separated integers.",
    outputFormat:
      "For each test case, print all matrix elements in spiral order, space-separated on one line.",
    constraints: "1 &le; T &le; 10<br>1 &le; N &le; 20",
    sampleInput: "1\n3\n1 2 3\n4 5 6\n7 8 9",
    sampleOutput: "1 2 3 6 9 8 7 4 5",
    testCases: [
      {
        input: "1\n3\n1 2 3\n4 5 6\n7 8 9",
        expected: "1 2 3 6 9 8 7 4 5\n"
      },
      {
        input: "2\n4\n1 2 3 4\n5 6 7 8\n9 10 11 12\n13 14 15 16\n1\n42",
        expected: "1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10\n42\n"
      },
      {
        input: "2\n2\n1 2\n3 4\n5\n1 2 3 4 5\n6 7 8 9 10\n11 12 13 14 15\n16 17 18 19 20\n21 22 23 24 25",
        expected: "1 2 4 3\n1 2 3 4 5 10 15 20 25 24 23 22 21 16 11 6 7 8 9 14 19 18 17 12 13\n"
      }
    ],
    starterCode: `import java.util.*;

public class Yara {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t = 0; t < T; t++) {
            // Your code here
        }
    }
}`,
    hint: "Use four boundary variables: <code>top</code>, <code>bottom</code>, <code>left</code>, <code>right</code>. Traverse right across the top row, then down the right column, then left across the bottom row, then up the left column. Shrink the boundaries after each traversal and repeat until all elements are visited.",
    concepts: ["2D arrays", "spiral traversal", "boundary tracking", "matrix manipulation"],
    dataFile: "yara.dat"
  },

  // ==================== H4: Zane ====================
  {
    id: "h4",
    name: "Zane",
    difficulty: "Hard",
    description:
      "Zane is implementing fast exponentiation! Given a base <b>B</b> and exponent <b>E</b>, compute B<sup>E</sup> using recursive fast exponentiation. By convention, 0<sup>0</sup> = 1. The result is guaranteed to fit in a Java <code>long</code>.",
    inputFormat:
      "The first line contains a single integer <b>T</b>, the number of test cases.<br>Each of the next <b>T</b> lines contains two space-separated integers <b>B</b> and <b>E</b>.",
    outputFormat:
      "For each test case, print B<sup>E</sup> on its own line.",
    constraints: "1 &le; T &le; 100<br>-100 &le; B &le; 100<br>0 &le; E &le; 30<br>The result fits in a 64-bit signed integer.",
    sampleInput: "3\n2 10\n3 0\n-2 3",
    sampleOutput: "1024\n1\n-8",
    testCases: [
      {
        input: "3\n2 10\n3 0\n-2 3",
        expected: "1024\n1\n-8\n"
      },
      {
        input: "5\n0 0\n0 5\n5 1\n1 30\n-3 4",
        expected: "1\n0\n5\n1\n81\n"
      },
      {
        input: "4\n2 20\n-1 7\n10 9\n7 7",
        expected: "1048576\n-1\n1000000000\n823543\n"
      }
    ],
    starterCode: `import java.util.*;

public class Zane {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t = 0; t < T; t++) {
            // Your code here
        }
    }
}`,
    hint: "Write a recursive method: if <code>E == 0</code> return 1. If <code>E</code> is even, compute <code>half = power(B, E/2)</code> and return <code>half * half</code>. If odd, return <code>B * power(B, E-1)</code>. Use <code>long</code> for intermediate results to avoid overflow.",
    concepts: ["recursion", "fast exponentiation", "divide and conquer", "long arithmetic"],
    dataFile: "zane.dat"
  },

  // ==================== H5: Amber ====================
  {
    id: "h5",
    name: "Amber",
    difficulty: "Hard",
    description:
      "Amber is building a code validator! Given a string containing parentheses <code>()</code>, square brackets <code>[]</code>, and curly braces <code>{}</code> (and possibly other characters), determine if all the brackets are properly balanced and nested. Print <code>VALID</code> if they are, or <code>INVALID</code> otherwise. Non-bracket characters should be ignored.",
    inputFormat:
      "The first line contains a single integer <b>T</b>, the number of test cases.<br>Each of the next <b>T</b> lines contains a string to validate.",
    outputFormat:
      "For each test case, print <code>VALID</code> or <code>INVALID</code> on its own line.",
    constraints: "1 &le; T &le; 50<br>0 &le; string length &le; 1000",
    sampleInput: "3\n([]{})\n([)]\n{[()]}",
    sampleOutput: "VALID\nINVALID\nVALID",
    testCases: [
      {
        input: "3\n([]{})\n([)]\n{[()]}",
        expected: "VALID\nINVALID\nVALID\n"
      },
      {
        input: "5\n\n((()))\n{\n}{]\nhello(world)[test]{done}",
        expected: "VALID\nVALID\nINVALID\nINVALID\nVALID\n"
      },
      {
        input: "4\n))))\n((((\n{a+b*(c-d)/[e%f]}\n[({})]",
        expected: "INVALID\nINVALID\nVALID\nVALID\n"
      }
    ],
    starterCode: `import java.util.*;

public class Amber {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = Integer.parseInt(sc.nextLine());
        for (int t = 0; t < T; t++) {
            // Your code here
        }
    }
}`,
    hint: "Use a <code>Stack&lt;Character&gt;</code>. For each character: if it is an opening bracket, push it. If it is a closing bracket, check that the stack is not empty and the top matches. At the end, the string is valid only if the stack is empty. Use <code>sc.nextLine()</code> to handle possibly empty lines.",
    concepts: ["stacks", "bracket matching", "string parsing", "data structures"],
    dataFile: "amber.dat"
  },

  // ==================== H6: Blake ====================
  {
    id: "h6",
    name: "Blake",
    difficulty: "Hard",
    description:
      "Blake is compressing data! Given a string, encode it using run-length encoding. Each group of consecutive identical characters is replaced by the character followed by its count. For example, <code>aaabbc</code> becomes <code>a3b2c1</code>. Every character gets a count, even if it appears only once.",
    inputFormat:
      "The first line contains a single integer <b>T</b>, the number of test cases.<br>Each of the next <b>T</b> lines contains a non-empty string of printable ASCII characters (no spaces).",
    outputFormat:
      "For each test case, print the run-length encoded string on its own line.",
    constraints: "1 &le; T &le; 50<br>1 &le; string length &le; 1000",
    sampleInput: "3\naaabbc\nabcd\naaa",
    sampleOutput: "a3b2c1\na1b1c1d1\na3",
    testCases: [
      {
        input: "3\naaabbc\nabcd\naaa",
        expected: "a3b2c1\na1b1c1d1\na3\n"
      },
      {
        input: "4\nz\nAAAABBBCCD\nxxyyzzzz\naabbccddee",
        expected: "z1\nA4B3C2D1\nx2y2z4\na2b2c2d2e2\n"
      },
      {
        input: "3\naaaaaaaaaa\nabababab\nXXXyyyZZ",
        expected: "a10\na1b1a1b1a1b1a1b1\nX3y3Z2\n"
      }
    ],
    starterCode: `import java.util.*;

public class Blake {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t = 0; t < T; t++) {
            // Your code here
        }
    }
}`,
    hint: "Iterate through the string, tracking the current character and a count. When the next character differs (or you reach the end), append the character and its count to a <code>StringBuilder</code>. Reset the count for the new character.",
    concepts: ["string processing", "run-length encoding", "StringBuilder", "compression"],
    dataFile: "blake.dat"
  },

  // ==================== H7: Celeste ====================
  {
    id: "h7",
    name: "Celeste",
    difficulty: "Hard",
    description:
      "Celeste is mapping islands! Given a grid of 0s and 1s, count the number of islands. An island is a connected group of 1s using 4-directional adjacency (up, down, left, right). Diagonal connections do not count.",
    inputFormat:
      "The first line contains a single integer <b>T</b>, the number of test cases.<br>For each test case, the first line contains two integers <b>R</b> and <b>C</b> (rows and columns). The next <b>R</b> lines each contain <b>C</b> space-separated values (0 or 1).",
    outputFormat:
      "For each test case, print the number of islands on its own line.",
    constraints: "1 &le; T &le; 10<br>1 &le; R, C &le; 50",
    sampleInput: "1\n3 4\n1 1 0 0\n1 0 0 1\n0 0 1 1",
    sampleOutput: "2",
    testCases: [
      {
        input: "1\n3 4\n1 1 0 0\n1 0 0 1\n0 0 1 1",
        expected: "2\n"
      },
      {
        input: "3\n1 1\n0\n1 1\n1\n3 3\n1 0 1\n0 1 0\n1 0 1",
        expected: "0\n1\n5\n"
      },
      {
        input: "2\n4 5\n1 1 1 1 1\n1 0 0 0 1\n1 0 1 0 1\n1 1 1 1 1\n2 2\n1 1\n1 1",
        expected: "2\n1\n"
      }
    ],
    starterCode: `import java.util.*;

public class Celeste {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t = 0; t < T; t++) {
            // Your code here
        }
    }
}`,
    hint: "Use a BFS or DFS approach. Iterate over every cell. When you find a 1 that has not been visited, increment your island count and flood-fill (mark all connected 1s as visited). You can mark visited cells by setting them to 0.",
    concepts: ["BFS", "DFS", "flood fill", "2D arrays", "graph traversal"],
    dataFile: "celeste.dat"
  },

  // ==================== H8: Dante ====================
  {
    id: "h8",
    name: "Dante",
    difficulty: "Hard",
    description:
      "Dante is studying subsequences! Given a sequence of <b>N</b> integers, find the length of the longest strictly increasing subsequence (LIS). A subsequence is formed by deleting zero or more elements from the sequence without changing the order of the remaining elements.",
    inputFormat:
      "The first line contains a single integer <b>T</b>, the number of test cases.<br>For each test case, the first line contains an integer <b>N</b>. The second line contains <b>N</b> space-separated integers.",
    outputFormat:
      "For each test case, print the LIS length on its own line.",
    constraints: "1 &le; T &le; 10<br>1 &le; N &le; 1000<br>-10000 &le; each element &le; 10000",
    sampleInput: "2\n8\n10 9 2 5 3 7 101 18\n6\n0 1 0 3 2 3",
    sampleOutput: "4\n4",
    testCases: [
      {
        input: "2\n8\n10 9 2 5 3 7 101 18\n6\n0 1 0 3 2 3",
        expected: "4\n4\n"
      },
      {
        input: "3\n4\n7 7 7 7\n1\n42\n5\n1 2 3 4 5",
        expected: "1\n1\n5\n"
      },
      {
        input: "2\n5\n5 4 3 2 1\n10\n3 1 4 1 5 9 2 6 5 3",
        expected: "1\n4\n"
      }
    ],
    starterCode: `import java.util.*;

public class Dante {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t = 0; t < T; t++) {
            // Your code here
        }
    }
}`,
    hint: "Use dynamic programming. Create an array <code>dp[]</code> where <code>dp[i]</code> is the length of the longest increasing subsequence ending at index <code>i</code>. For each <code>i</code>, check all <code>j &lt; i</code>: if <code>arr[j] &lt; arr[i]</code>, then <code>dp[i] = Math.max(dp[i], dp[j] + 1)</code>. The answer is the maximum value in <code>dp[]</code>.",
    concepts: ["dynamic programming", "longest increasing subsequence", "O(n^2) DP", "arrays"],
    dataFile: "dante.dat"
  },

  // ==================== H9: Elena ====================
  {
    id: "h9",
    name: "Elena",
    difficulty: "Hard",
    description:
      "Elena is translating between Roman and Arabic numerals! Given either a Roman numeral string or an integer (1&ndash;3999), convert between the two representations. If the input starts with a digit, convert from integer to Roman. If it starts with a letter, convert from Roman to integer.",
    inputFormat:
      "The first line contains a single integer <b>T</b>, the number of test cases.<br>Each of the next <b>T</b> lines contains either a Roman numeral string or an integer.",
    outputFormat:
      "For each test case, print the converted value on its own line.",
    constraints: "1 &le; T &le; 50<br>1 &le; value &le; 3999<br>Roman numerals use only: I, V, X, L, C, D, M",
    sampleInput: "4\n1994\nMCMXCIV\n58\nIX",
    sampleOutput: "MCMXCIV\n1994\nLVIII\n9",
    testCases: [
      {
        input: "4\n1994\nMCMXCIV\n58\nIX",
        expected: "MCMXCIV\n1994\nLVIII\n9\n"
      },
      {
        input: "6\n1\n3999\nI\nMMMCMXCIX\n404\nCDIV",
        expected: "I\nMMMCMXCIX\n1\n3999\nCDIV\n404\n"
      },
      {
        input: "5\n14\nXIV\n2024\nMMXXIV\n500",
        expected: "XIV\n14\nMMXXIV\n2024\nD\n"
      }
    ],
    starterCode: `import java.util.*;

public class Elena {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = Integer.parseInt(sc.nextLine());
        for (int t = 0; t < T; t++) {
            // Your code here
        }
    }
}`,
    hint: "For integer to Roman: use parallel arrays of values <code>[1000,900,500,400,100,90,50,40,10,9,5,4,1]</code> and symbols <code>[\"M\",\"CM\",\"D\",\"CD\",\"C\",\"XC\",\"L\",\"XL\",\"X\",\"IX\",\"V\",\"IV\",\"I\"]</code>. Greedily subtract. For Roman to integer: map each char to a value. If the current value is less than the next value, subtract it; otherwise add it.",
    concepts: ["Roman numerals", "greedy algorithms", "string parsing", "HashMap"],
    dataFile: "elena.dat"
  },

  // ==================== H10: Felix ====================
  {
    id: "h10",
    name: "Felix",
    difficulty: "Hard",
    description:
      "Felix is painting grids! Perform a flood fill on a grid of characters. Starting from position (<b>startRow</b>, <b>startCol</b>), replace the original character at that position with <b>newChar</b>, spreading to all 4-directionally adjacent cells that have the same original character. Print the resulting grid. Print a blank line between test cases (but not after the last one).",
    inputFormat:
      "The first line contains a single integer <b>T</b>, the number of test cases.<br>For each test case:<br>- The first line contains two integers <b>R</b> and <b>C</b> (rows and columns).<br>- The next <b>R</b> lines each contain <b>C</b> space-separated characters.<br>- The last line contains two integers <b>startRow</b>, <b>startCol</b> (0-indexed) and one character <b>newChar</b>.",
    outputFormat:
      "For each test case, print the <b>R</b> rows of the resulting grid, each row as characters separated by spaces. Print a blank line between test cases.",
    constraints: "1 &le; T &le; 10<br>1 &le; R, C &le; 30<br>0 &le; startRow &lt; R<br>0 &le; startCol &lt; C<br>Characters are printable ASCII letters.",
    sampleInput: "1\n3 3\na a a\na b a\na a a\n1 1 x",
    sampleOutput: "a a a\na x a\na a a",
    testCases: [
      {
        input: "1\n3 3\na a a\na b a\na a a\n1 1 x",
        expected: "a a a\na x a\na a a\n"
      },
      {
        input: "2\n3 3\na a a\na a a\na a a\n0 0 b\n3 4\nx x y y\nx x y y\nx y y x\n0 0 o",
        expected: "b b b\nb b b\nb b b\n\no o y y\no o y y\no y y x\n"
      },
      {
        input: "3\n1 1\nz\n0 0 q\n2 3\na b a\nb a b\n0 0 c\n4 4\na b b a\nb a a b\nb a a b\na b b a\n1 1 x",
        expected: "q\n\nc b a\nb a b\n\na b b a\nb x x b\nb x x b\na b b a\n"
      }
    ],
    starterCode: `import java.util.*;

public class Felix {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t = 0; t < T; t++) {
            // Your code here
        }
    }
}`,
    hint: "Use BFS or DFS starting from (startRow, startCol). Record the original character, then replace it (and all 4-directionally connected cells with the same character) with the new character. If the original character already equals newChar, do nothing to avoid infinite loops. Print each row with spaces between characters.",
    concepts: ["flood fill", "BFS", "DFS", "2D arrays", "graph traversal"],
    dataFile: "felix.dat"
  },
];
