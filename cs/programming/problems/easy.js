const EASY_PROBLEMS = [
  // ==================== E1: Ada ====================
  {
    id: "e1",
    name: "Ada",
    difficulty: "Easy",
    description:
      "Ada loves greeting people! Given a person's name, print a friendly greeting in the format <code>Hello, [name]!</code>.",
    inputFormat:
      "The first line contains a single integer <b>T</b>, the number of test cases.<br>Each of the next <b>T</b> lines contains a single string representing a person's name.",
    outputFormat:
      "For each test case, print <code>Hello, [name]!</code> on its own line.",
    constraints: "1 &le; T &le; 100<br>Each name consists of alphabetic characters only and has length between 1 and 50.",
    sampleInput: "3\nAlice\nBob\nCharlie",
    sampleOutput: "Hello, Alice!\nHello, Bob!\nHello, Charlie!",
    testCases: [
      {
        input: "3\nAlice\nBob\nCharlie",
        expected: "Hello, Alice!\nHello, Bob!\nHello, Charlie!\n"
      },
      {
        input: "5\nZara\nMax\nLi\nAlexander\nJo",
        expected: "Hello, Zara!\nHello, Max!\nHello, Li!\nHello, Alexander!\nHello, Jo!\n"
      },
      {
        input: "1\nX",
        expected: "Hello, X!\n"
      }
    ],
    starterCode: `import java.util.*;

public class Ada {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t = 0; t < T; t++) {
            // Your code here
        }
    }
}`,
    hint: "Use <code>sc.next()</code> to read a single word, then use string concatenation with <code>+</code> to build the output.",
    concepts: ["string concatenation", "Scanner input", "print statements"],
    dataFile: "ada.dat"
  },

  // ==================== E2: Ben ====================
  {
    id: "e2",
    name: "Ben",
    difficulty: "Easy",
    description:
      "Ben is learning addition. Given two integers, compute and print their sum.",
    inputFormat:
      "The first line contains a single integer <b>T</b>, the number of test cases.<br>Each of the next <b>T</b> lines contains two space-separated integers <b>A</b> and <b>B</b>.",
    outputFormat:
      "For each test case, print the sum of <b>A</b> and <b>B</b> on its own line.",
    constraints: "1 &le; T &le; 100<br>-10,000 &le; A, B &le; 10,000",
    sampleInput: "3\n2 3\n-1 5\n0 0",
    sampleOutput: "5\n4\n0",
    testCases: [
      {
        input: "3\n2 3\n-1 5\n0 0",
        expected: "5\n4\n0\n"
      },
      {
        input: "5\n100 200\n-50 -30\n9999 1\n-10000 10000\n7 -7",
        expected: "300\n-80\n10000\n0\n0\n"
      },
      {
        input: "2\n1 1\n-1 -1",
        expected: "2\n-2\n"
      }
    ],
    starterCode: `import java.util.*;

public class Ben {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t = 0; t < T; t++) {
            // Your code here
        }
    }
}`,
    hint: "Use <code>sc.nextInt()</code> twice to read both integers, then print their sum with <code>System.out.println(a + b)</code>.",
    concepts: ["integer input", "arithmetic", "addition"],
    dataFile: "ben.dat"
  },

  // ==================== E3: Cora ====================
  {
    id: "e3",
    name: "Cora",
    difficulty: "Easy",
    description:
      "Cora is studying temperature conversions. Given a temperature in Fahrenheit, convert it to Celsius using the formula <code>C = (F - 32) &times; 5 / 9</code> and print the result formatted to exactly 1 decimal place.",
    inputFormat:
      "The first line contains a single integer <b>T</b>, the number of test cases.<br>Each of the next <b>T</b> lines contains a single number <b>F</b> (the temperature in Fahrenheit). It may be an integer or a decimal.",
    outputFormat:
      "For each test case, print the Celsius temperature formatted to exactly 1 decimal place.",
    constraints: "1 &le; T &le; 100<br>-459.67 &le; F &le; 10,000",
    sampleInput: "3\n212\n32\n98.6",
    sampleOutput: "100.0\n0.0\n37.0",
    testCases: [
      {
        input: "3\n212\n32\n98.6",
        expected: "100.0\n0.0\n37.0\n"
      },
      {
        input: "5\n-40\n0\n72\n451\n-459.67",
        expected: "-40.0\n-17.8\n22.2\n232.8\n-273.2\n"
      },
      {
        input: "2\n100\n50",
        expected: "37.8\n10.0\n"
      }
    ],
    starterCode: `import java.util.*;

public class Cora {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t = 0; t < T; t++) {
            // Your code here
        }
    }
}`,
    hint: "Read the Fahrenheit value with <code>sc.nextDouble()</code>. Compute Celsius as <code>(f - 32) * 5.0 / 9.0</code>. Use <code>System.out.printf(\"%.1f\\n\", celsius)</code> to format to 1 decimal place.",
    concepts: ["floating-point arithmetic", "printf formatting", "type conversion"],
    dataFile: "cora.dat"
  },

  // ==================== E4: Drew ====================
  {
    id: "e4",
    name: "Drew",
    difficulty: "Easy",
    description:
      "Drew wants to find the largest of three numbers. Given three integers, determine and print the maximum value.",
    inputFormat:
      "The first line contains a single integer <b>T</b>, the number of test cases.<br>Each of the next <b>T</b> lines contains three space-separated integers <b>A</b>, <b>B</b>, and <b>C</b>.",
    outputFormat:
      "For each test case, print the largest of the three integers on its own line.",
    constraints: "1 &le; T &le; 100<br>-10,000 &le; A, B, C &le; 10,000",
    sampleInput: "3\n1 2 3\n5 5 3\n-1 -2 -3",
    sampleOutput: "3\n5\n-1",
    testCases: [
      {
        input: "3\n1 2 3\n5 5 3\n-1 -2 -3",
        expected: "3\n5\n-1\n"
      },
      {
        input: "5\n0 0 0\n10000 -10000 0\n7 7 7\n-5 -5 -4\n100 99 101",
        expected: "0\n10000\n7\n-4\n101\n"
      },
      {
        input: "2\n3 1 2\n-100 -200 -50",
        expected: "3\n-50\n"
      }
    ],
    starterCode: `import java.util.*;

public class Drew {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t = 0; t < T; t++) {
            // Your code here
        }
    }
}`,
    hint: "Read three integers, then use <code>Math.max(a, Math.max(b, c))</code> to find the largest, or use a series of <code>if/else</code> comparisons.",
    concepts: ["Math.max", "comparison", "conditionals"],
    dataFile: "drew.dat"
  },

  // ==================== E5: Eva ====================
  {
    id: "e5",
    name: "Eva",
    difficulty: "Easy",
    description:
      "Eva is exploring the properties of numbers. Given an integer, determine whether it is even or odd.",
    inputFormat:
      "The first line contains a single integer <b>T</b>, the number of test cases.<br>Each of the next <b>T</b> lines contains a single integer <b>N</b>.",
    outputFormat:
      "For each test case, print <code>EVEN</code> if the number is even, or <code>ODD</code> if it is odd.",
    constraints: "1 &le; T &le; 100<br>-10,000 &le; N &le; 10,000",
    sampleInput: "4\n2\n7\n0\n-3",
    sampleOutput: "EVEN\nODD\nEVEN\nODD",
    testCases: [
      {
        input: "4\n2\n7\n0\n-3",
        expected: "EVEN\nODD\nEVEN\nODD\n"
      },
      {
        input: "6\n1\n-2\n999\n-1000\n10000\n-9999",
        expected: "ODD\nEVEN\nODD\nEVEN\nEVEN\nODD\n"
      },
      {
        input: "2\n-1\n0",
        expected: "ODD\nEVEN\n"
      }
    ],
    starterCode: `import java.util.*;

public class Eva {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t = 0; t < T; t++) {
            // Your code here
        }
    }
}`,
    hint: "Use the modulo operator <code>%</code>. If <code>n % 2 == 0</code>, the number is even; otherwise it is odd. This works for negative numbers too in Java.",
    concepts: ["modulo operator", "conditionals", "even/odd"],
    dataFile: "eva.dat"
  },

  // ==================== E6: Finn ====================
  {
    id: "e6",
    name: "Finn",
    difficulty: "Easy",
    description:
      "Finn likes palindromes and wants to start by learning how to reverse strings. Given a string, print it in reverse order.",
    inputFormat:
      "The first line contains a single integer <b>T</b>, the number of test cases.<br>Each of the next <b>T</b> lines contains a single string (no spaces).",
    outputFormat:
      "For each test case, print the reversed string on its own line.",
    constraints: "1 &le; T &le; 100<br>Each string has length between 1 and 100 and consists of printable ASCII characters (no spaces).",
    sampleInput: "3\nhello\nracecar\nJava",
    sampleOutput: "olleh\nracecar\navaJ",
    testCases: [
      {
        input: "3\nhello\nracecar\nJava",
        expected: "olleh\nracecar\navaJ\n"
      },
      {
        input: "5\na\nab\nabc\n12345\nAbCdEf",
        expected: "a\nba\ncba\n54321\nfEdCbA\n"
      },
      {
        input: "2\nUIL\nxyz",
        expected: "LIU\nzyx\n"
      }
    ],
    starterCode: `import java.util.*;

public class Finn {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t = 0; t < T; t++) {
            // Your code here
        }
    }
}`,
    hint: "You can use <code>new StringBuilder(str).reverse().toString()</code>, or build the reversed string manually with a loop that iterates from the last character to the first.",
    concepts: ["string reversal", "StringBuilder", "loops"],
    dataFile: "finn.dat"
  },

  // ==================== E7: Grace ====================
  {
    id: "e7",
    name: "Grace",
    difficulty: "Easy",
    description:
      "Grace is studying arithmetic series. Given a positive integer <b>N</b>, compute the sum of all integers from 1 to <b>N</b> (inclusive).",
    inputFormat:
      "The first line contains a single integer <b>T</b>, the number of test cases.<br>Each of the next <b>T</b> lines contains a single positive integer <b>N</b>.",
    outputFormat:
      "For each test case, print the sum of integers from 1 to <b>N</b> on its own line.",
    constraints: "1 &le; T &le; 100<br>1 &le; N &le; 100,000",
    sampleInput: "3\n5\n10\n1",
    sampleOutput: "15\n55\n1",
    testCases: [
      {
        input: "3\n5\n10\n1",
        expected: "15\n55\n1\n"
      },
      {
        input: "5\n100\n1000\n2\n50\n100000",
        expected: "5050\n500500\n3\n1275\n5000050000\n"
      },
      {
        input: "2\n3\n99999",
        expected: "6\n4999950000\n"
      }
    ],
    starterCode: `import java.util.*;

public class Grace {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t = 0; t < T; t++) {
            // Your code here
        }
    }
}`,
    hint: "You can use a loop to add up 1 + 2 + ... + N, but the formula <code>N * (N + 1) / 2</code> is much faster. Be careful with large values of N &mdash; use <code>long</code> instead of <code>int</code> to avoid overflow.",
    concepts: ["summation", "arithmetic series", "long type", "overflow"],
    dataFile: "grace.dat"
  },

  // ==================== E8: Hugo ====================
  {
    id: "e8",
    name: "Hugo",
    difficulty: "Easy",
    description:
      "Hugo is analyzing text. Given a string, count the number of vowels it contains. Vowels are <code>a</code>, <code>e</code>, <code>i</code>, <code>o</code>, <code>u</code> (case insensitive).",
    inputFormat:
      "The first line contains a single integer <b>T</b>, the number of test cases.<br>Each of the next <b>T</b> lines contains a single string (no spaces).",
    outputFormat:
      "For each test case, print the number of vowels in the string on its own line.",
    constraints: "1 &le; T &le; 100<br>Each string has length between 1 and 200 and consists of alphabetic characters only.",
    sampleInput: "3\nhello\nUIL\naeiou",
    sampleOutput: "2\n2\n5",
    testCases: [
      {
        input: "3\nhello\nUIL\naeiou",
        expected: "2\n2\n5\n"
      },
      {
        input: "6\nBCDFG\nAEIOU\nProgramming\nJava\nxyz\nEaGlE",
        expected: "0\n5\n3\n2\n0\n3\n"
      },
      {
        input: "3\na\nZ\nOoOoO",
        expected: "1\n0\n5\n"
      }
    ],
    starterCode: `import java.util.*;

public class Hugo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t = 0; t < T; t++) {
            // Your code here
        }
    }
}`,
    hint: "Convert the string to lowercase with <code>.toLowerCase()</code>, then loop through each character and check if it is <code>'a'</code>, <code>'e'</code>, <code>'i'</code>, <code>'o'</code>, or <code>'u'</code>. You can also use <code>\"aeiou\".indexOf(ch) != -1</code>.",
    concepts: ["string traversal", "character comparison", "counting", "case conversion"],
    dataFile: "hugo.dat"
  },

  // ==================== E9: Ivy ====================
  {
    id: "e9",
    name: "Ivy",
    difficulty: "Easy",
    description:
      "Ivy is classifying triangles. Given three side lengths, determine whether the triangle is equilateral (all sides equal), isosceles (exactly two sides equal), or scalene (all sides different). You may assume the three values always form a valid triangle.",
    inputFormat:
      "The first line contains a single integer <b>T</b>, the number of test cases.<br>Each of the next <b>T</b> lines contains three space-separated positive integers <b>A</b>, <b>B</b>, and <b>C</b> representing side lengths.",
    outputFormat:
      "For each test case, print <code>EQUILATERAL</code>, <code>ISOSCELES</code>, or <code>SCALENE</code> on its own line.",
    constraints: "1 &le; T &le; 100<br>1 &le; A, B, C &le; 10,000<br>The three sides always form a valid triangle.",
    sampleInput: "3\n5 5 5\n3 3 4\n3 4 5",
    sampleOutput: "EQUILATERAL\nISOSCELES\nSCALENE",
    testCases: [
      {
        input: "3\n5 5 5\n3 3 4\n3 4 5",
        expected: "EQUILATERAL\nISOSCELES\nSCALENE\n"
      },
      {
        input: "6\n1 1 1\n7 7 10\n10 7 7\n7 10 7\n6 8 10\n100 100 100",
        expected: "EQUILATERAL\nISOSCELES\nISOSCELES\nISOSCELES\nSCALENE\nEQUILATERAL\n"
      },
      {
        input: "3\n2 3 4\n5 5 8\n1000 1000 1000",
        expected: "SCALENE\nISOSCELES\nEQUILATERAL\n"
      }
    ],
    starterCode: `import java.util.*;

public class Ivy {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t = 0; t < T; t++) {
            // Your code here
        }
    }
}`,
    hint: "Check the conditions in order: if all three sides are equal, it is equilateral. Otherwise, if any two sides are equal (<code>a == b || b == c || a == c</code>), it is isosceles. Otherwise, it is scalene.",
    concepts: ["conditionals", "if/else chains", "equality comparison"],
    dataFile: "ivy.dat"
  },

  // ==================== E10: Jake ====================
  {
    id: "e10",
    name: "Jake",
    difficulty: "Easy",
    description:
      "Jake is experimenting with digits. Given a positive integer, print its digits in reverse order, separated by spaces. For example, 1234 becomes <code>4 3 2 1</code>.",
    inputFormat:
      "The first line contains a single integer <b>T</b>, the number of test cases.<br>Each of the next <b>T</b> lines contains a single positive integer <b>N</b>.",
    outputFormat:
      "For each test case, print the digits of <b>N</b> in reverse order, separated by single spaces, on its own line.",
    constraints: "1 &le; T &le; 100<br>1 &le; N &le; 1,000,000,000",
    sampleInput: "3\n1234\n5\n9087",
    sampleOutput: "4 3 2 1\n5\n7 8 0 9",
    testCases: [
      {
        input: "3\n1234\n5\n9087",
        expected: "4 3 2 1\n5\n7 8 0 9\n"
      },
      {
        input: "5\n1000000000\n10\n100\n99\n12345",
        expected: "0 0 0 0 0 0 0 0 1\n0 1\n0 0 1\n9 9\n5 4 3 2 1\n"
      },
      {
        input: "3\n1\n11\n123456789",
        expected: "1\n1 1\n9 8 7 6 5 4 3 2 1\n"
      }
    ],
    starterCode: `import java.util.*;

public class Jake {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t = 0; t < T; t++) {
            // Your code here
        }
    }
}`,
    hint: "Convert the number to a String, then loop through the characters from last to first. Print each character separated by spaces. Alternatively, use the modulo operator <code>% 10</code> to extract the last digit and <code>/ 10</code> to remove it, repeating until the number becomes 0.",
    concepts: ["digit extraction", "modulo operator", "string traversal", "formatted output"],
    dataFile: "jake.dat"
  }
];
