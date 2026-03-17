// UIL CS Programming Trainer - Medium Difficulty Problems
// These problems require string parsing, math, ArrayLists, HashMaps, and formatted output.

const MEDIUM_PROBLEMS = [
  // ─── M1: Kayla ── Odds vs Evens ───────────────────────────────────────────
  {
    id: "m1",
    name: "Kayla",
    difficulty: "Medium",
    description:
      "Given a line of space-separated integers, count how many are even and how many are odd. " +
      "Then determine which group wins (has more members) and by how much.",
    inputFormat:
      "The first line contains <strong>T</strong>, the number of test cases.<br>" +
      "Each test case is a single line of space-separated integers.",
    outputFormat:
      'For each test case, print one of:<br>' +
      '<code>Evens win by X point(s)</code><br>' +
      '<code>Odds win by X point(s)</code><br>' +
      '<code>It\'s a tie!</code>',
    constraints: "1 &le; T &le; 10. Each line has 1 to 20 integers. Each integer is between -1000 and 1000.",
    sampleInput: "3\n1 2 3 4 5\n2 4 6\n1 2",
    sampleOutput: "Odds win by 1 point(s)\nEvens win by 3 point(s)\nIt's a tie!",
    testCases: [
      {
        input: "3\n1 2 3 4 5\n2 4 6\n1 2",
        expected: "Odds win by 1 point(s)\nEvens win by 3 point(s)\nIt's a tie!"
      },
      {
        input: "5\n0\n7\n-2 -3 4\n10 20 30 40 50 1\n1 3 5 7 9 11",
        expected: "Evens win by 1 point(s)\nOdds win by 1 point(s)\nEvens win by 1 point(s)\nEvens win by 4 point(s)\nOdds win by 6 point(s)"
      },
      {
        input: "2\n0 0 0 0\n-1 -2 -3 -4 -5",
        expected: "Evens win by 4 point(s)\nOdds win by 1 point(s)"
      }
    ],
    starterCode:
`import java.util.*;

public class Kayla {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = Integer.parseInt(sc.nextLine().trim());
        for (int t = 0; t < T; t++) {
            String line = sc.nextLine().trim();
            // Your code here
        }
    }
}`,
    hint: "Zero is even. Use split(\" \") to parse the line, then count evens and odds separately.",
    concepts: ["string splitting", "arrays", "even/odd", "conditionals"],
    dataFile: "kayla.dat"
  },

  // ─── M2: Leo ── GCD & Fraction Simplification ────────────────────────────
  {
    id: "m2",
    name: "Leo",
    difficulty: "Medium",
    description:
      "Given two integers D and N, compute GCD(D, N) to simplify the fraction N/D. " +
      "Then subtract 1 from the simplified fraction and output the resulting numerator and denominator.",
    inputFormat:
      "The first line contains <strong>T</strong>, the number of test cases.<br>" +
      "Each test case is a single line with two positive integers <strong>D</strong> and <strong>N</strong>.",
    outputFormat:
      "For each test case, print the numerator and denominator of (N/D - 1) after simplifying N/D, " +
      "separated by a space. The final result should also be in lowest terms.",
    constraints: "1 &le; T &le; 10. 1 &le; D, N &le; 10000. N &ge; D (the fraction is at least 1).",
    sampleInput: "3\n4 8\n3 9\n5 5",
    sampleOutput: "1 1\n2 1\n0 1",
    testCases: [
      {
        input: "3\n4 8\n3 9\n5 5",
        expected: "1 1\n2 1\n0 1"
      },
      {
        input: "4\n6 18\n7 21\n10 15\n12 60",
        expected: "2 1\n2 1\n1 2\n4 1"
      },
      {
        input: "2\n1 1\n8 24",
        expected: "0 1\n2 1"
      }
    ],
    starterCode:
`import java.util.*;

public class Leo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t = 0; t < T; t++) {
            int D = sc.nextInt();
            int N = sc.nextInt();
            // Your code here
        }
    }
}`,
    hint: "Use the Euclidean algorithm for GCD. After simplifying N/D, subtract 1 by computing (N - D) / D in simplified form. Then reduce the result again with GCD.",
    concepts: ["GCD", "Euclidean algorithm", "fractions", "math"],
    dataFile: "leo.dat"
  },

  // ─── M3: Mia ── Compound Interest ────────────────────────────────────────
  {
    id: "m3",
    name: "Mia",
    difficulty: "Medium",
    description:
      "Calculate the future value of an investment using compound interest.<br>" +
      "FV = PV * (1 + APR / PPY / 100)<sup>N</sup><br>" +
      "Interest earned = FV - PV",
    inputFormat:
      "The first line contains <strong>T</strong>, the number of test cases.<br>" +
      "Each test case is a single line with four values: <strong>PV</strong> (present value as a double), " +
      "<strong>APR</strong> (annual percentage rate as a double), <strong>PPY</strong> (periods per year as an integer), " +
      "and <strong>N</strong> (number of periods as an integer).",
    outputFormat:
      'For each test case, print <code>$FV $Interest</code> where FV and Interest are formatted to exactly 2 decimal places.',
    constraints: "1 &le; T &le; 10. 0 &lt; PV &le; 1000000. 0 &lt; APR &le; 30. 1 &le; PPY &le; 365. 1 &le; N &le; 1000.",
    sampleInput: "2\n1000.00 5.0 12 12\n5000.00 8.0 4 8",
    sampleOutput: "$1051.16 $51.16\n$5858.30 $858.30",
    testCases: [
      {
        input: "2\n1000.00 5.0 12 12\n5000.00 8.0 4 8",
        expected: "$1051.16 $51.16\n$5858.30 $858.30"
      },
      {
        input: "3\n10000.00 10.0 1 5\n100.00 12.0 12 24\n2500.00 6.0 12 12",
        expected: "$16105.10 $6105.10\n$126.97 $26.97\n$2654.19 $154.19"
      },
      {
        input: "1\n1.00 100.0 1 1",
        expected: "$2.00 $1.00"
      }
    ],
    starterCode:
`import java.util.*;

public class Mia {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t = 0; t < T; t++) {
            double PV = sc.nextDouble();
            double APR = sc.nextDouble();
            int PPY = sc.nextInt();
            int N = sc.nextInt();
            // Your code here
        }
    }
}`,
    hint: "Use Math.pow for exponentiation. Use String.format(\"$%.2f $%.2f\", fv, interest) for output.",
    concepts: ["compound interest", "Math.pow", "formatted output", "floating point"],
    dataFile: "mia.dat"
  },

  // ─── M4: Noah ── Word Counter ─────────────────────────────────────────────
  {
    id: "m4",
    name: "Noah",
    difficulty: "Medium",
    description:
      "Given a line of text, count the number of words (separated by spaces) and the total number " +
      "of characters excluding spaces.",
    inputFormat:
      "The first line contains <strong>T</strong>, the number of test cases.<br>" +
      "Each test case is a single line of text.",
    outputFormat:
      'For each test case, print <code>W words, C chars</code> where W is the word count and C is the character count (no spaces).',
    constraints: "1 &le; T &le; 10. Each line is 1 to 200 characters and contains at least one non-space character.",
    sampleInput: "3\nHello World\nUIL Computer Science\nJava",
    sampleOutput: "2 words, 10 chars\n3 words, 18 chars\n1 words, 4 chars",
    testCases: [
      {
        input: "3\nHello World\nUIL Computer Science\nJava",
        expected: "2 words, 10 chars\n3 words, 18 chars\n1 words, 4 chars"
      },
      {
        input: "4\nA B C D E\nProgramming is fun\n42 is the answer\nSupercalifragilisticexpialidocious",
        expected: "5 words, 5 chars\n3 words, 16 chars\n4 words, 13 chars\n1 words, 34 chars"
      },
      {
        input: "2\na\nHello World from UIL CS Contest 2024",
        expected: "1 words, 1 chars\n6 words, 31 chars"
      }
    ],
    starterCode:
`import java.util.*;

public class Noah {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = Integer.parseInt(sc.nextLine().trim());
        for (int t = 0; t < T; t++) {
            String line = sc.nextLine();
            // Your code here
        }
    }
}`,
    hint: "Use split(\" \") for word count (trim first). For character count, use replaceAll(\" \", \"\").length() or loop through and skip spaces.",
    concepts: ["string splitting", "string methods", "character counting", "formatted output"],
    dataFile: "noah.dat"
  },

  // ─── M5: Olive ── Palindrome Check ────────────────────────────────────────
  {
    id: "m5",
    name: "Olive",
    difficulty: "Medium",
    description:
      "Determine if a given string is a palindrome. The check should be case insensitive and should " +
      "ignore spaces. Only consider the remaining characters after removing spaces.",
    inputFormat:
      "The first line contains <strong>T</strong>, the number of test cases.<br>" +
      "Each test case is a single line containing a string.",
    outputFormat:
      'For each test case, print <code>PALINDROME</code> or <code>NOT PALINDROME</code>.',
    constraints: "1 &le; T &le; 10. Each string is 1 to 100 characters long.",
    sampleInput: "3\nracecar\nHello\nA Santa at NASA",
    sampleOutput: "PALINDROME\nNOT PALINDROME\nPALINDROME",
    testCases: [
      {
        input: "3\nracecar\nHello\nA Santa at NASA",
        expected: "PALINDROME\nNOT PALINDROME\nPALINDROME"
      },
      {
        input: "5\nMadam\nWas It A Car Or A Cat I Saw\nabcba\nabcda\nA",
        expected: "PALINDROME\nPALINDROME\nPALINDROME\nNOT PALINDROME\nPALINDROME"
      },
      {
        input: "3\nNo lemon no melon\nNot a palindrome\naa",
        expected: "PALINDROME\nNOT PALINDROME\nPALINDROME"
      }
    ],
    starterCode:
`import java.util.*;

public class Olive {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = Integer.parseInt(sc.nextLine().trim());
        for (int t = 0; t < T; t++) {
            String line = sc.nextLine();
            // Your code here
        }
    }
}`,
    hint: "Convert to lowercase, remove all spaces with replaceAll, then compare the string to its reverse. You can reverse using StringBuilder.reverse().",
    concepts: ["strings", "palindrome", "StringBuilder", "case conversion"],
    dataFile: "olive.dat"
  },

  // ─── M6: Parker ── Caesar Cipher ──────────────────────────────────────────
  {
    id: "m6",
    name: "Parker",
    difficulty: "Medium",
    description:
      "Apply a Caesar cipher to a string. Shift each letter by K positions in the alphabet. " +
      "Uppercase letters stay uppercase, lowercase stay lowercase. Non-letter characters are unchanged. " +
      "The shift wraps around (e.g., shifting Z by 1 gives A).",
    inputFormat:
      "The first line contains <strong>T</strong>, the number of test cases.<br>" +
      "Each test case has two lines: the first line is an integer <strong>K</strong> (the shift), " +
      "and the second line is the string to encrypt.",
    outputFormat:
      "For each test case, print the encrypted string.",
    constraints: "1 &le; T &le; 10. 0 &le; K &le; 25. The string is 1 to 200 characters.",
    sampleInput: "2\n3\nHello, World!\n1\nABC xyz",
    sampleOutput: "Khoor, Zruog!\nBCD yza",
    testCases: [
      {
        input: "2\n3\nHello, World!\n1\nABC xyz",
        expected: "Khoor, Zruog!\nBCD yza"
      },
      {
        input: "4\n0\nNo Change\n13\nABCDEFGHIJKLMNOPQRSTUVWXYZ\n25\nBaa\n10\nUIL 2024!",
        expected: "No Change\nNOPQRSTUVWXYZABCDEFGHIJKLM\nAzz\nESV 2024!"
      },
      {
        input: "2\n7\nattack at dawn\n20\nThe Quick Brown Fox",
        expected: "haahjr ha khdu\nNby Kocwe Vliqh Zir"
      }
    ],
    starterCode:
`import java.util.*;

public class Parker {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = Integer.parseInt(sc.nextLine().trim());
        for (int t = 0; t < T; t++) {
            int K = Integer.parseInt(sc.nextLine().trim());
            String line = sc.nextLine();
            // Your code here
        }
    }
}`,
    hint: "For each character, check if it's a letter. If uppercase, shift with ((ch - 'A' + K) % 26 + 'A'). Similarly for lowercase with 'a'.",
    concepts: ["Caesar cipher", "character manipulation", "modular arithmetic", "ASCII"],
    dataFile: "parker.dat"
  },

  // ─── M7: Quinn ── Perfect Numbers ─────────────────────────────────────────
  {
    id: "m7",
    name: "Quinn",
    difficulty: "Medium",
    description:
      "A <strong>perfect number</strong> is a positive integer that equals the sum of its proper divisors " +
      "(all divisors except itself). If the sum is less than the number, it is <strong>deficient</strong>. " +
      "If the sum is greater, it is <strong>abundant</strong>.",
    inputFormat:
      "The first line contains <strong>T</strong>, the number of test cases.<br>" +
      "Each test case is a single line with one positive integer <strong>N</strong>.",
    outputFormat:
      'For each test case, print <code>PERFECT</code>, <code>DEFICIENT</code>, or <code>ABUNDANT</code>.',
    constraints: "1 &le; T &le; 10. 2 &le; N &le; 100000.",
    sampleInput: "3\n6\n8\n12",
    sampleOutput: "PERFECT\nDEFICIENT\nABUNDANT",
    testCases: [
      {
        input: "3\n6\n8\n12",
        expected: "PERFECT\nDEFICIENT\nABUNDANT"
      },
      {
        input: "6\n28\n2\n496\n10\n24\n8128",
        expected: "PERFECT\nDEFICIENT\nPERFECT\nDEFICIENT\nABUNDANT\nPERFECT"
      },
      {
        input: "4\n3\n18\n100\n15",
        expected: "DEFICIENT\nABUNDANT\nDEFICIENT\nDEFICIENT"
      }
    ],
    starterCode:
`import java.util.*;

public class Quinn {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t = 0; t < T; t++) {
            int N = sc.nextInt();
            // Your code here
        }
    }
}`,
    hint: "Sum all divisors of N from 1 to N/2 (or use the sqrt optimization: for each i from 2 to sqrt(N), if i divides N, add both i and N/i). Start sum at 1 since 1 is always a proper divisor.",
    concepts: ["divisors", "perfect numbers", "loops", "number theory"],
    dataFile: "quinn.dat"
  },

  // ─── M8: Rosa ── Time Converter ───────────────────────────────────────────
  {
    id: "m8",
    name: "Rosa",
    difficulty: "Medium",
    description:
      "Convert a total number of seconds into hours, minutes, and seconds format.",
    inputFormat:
      "The first line contains <strong>T</strong>, the number of test cases.<br>" +
      "Each test case is a single line with one non-negative integer <strong>S</strong> (total seconds).",
    outputFormat:
      'For each test case, print <code>H:MM:SS</code> where H has no leading zeros, and MM and SS are zero-padded to 2 digits.',
    constraints: "1 &le; T &le; 10. 0 &le; S &le; 359999.",
    sampleInput: "3\n3661\n60\n0",
    sampleOutput: "1:01:01\n0:01:00\n0:00:00",
    testCases: [
      {
        input: "3\n3661\n60\n0",
        expected: "1:01:01\n0:01:00\n0:00:00"
      },
      {
        input: "5\n3600\n86399\n1\n59\n7384",
        expected: "1:00:00\n23:59:59\n0:00:01\n0:00:59\n2:03:04"
      },
      {
        input: "3\n45296\n90061\n5",
        expected: "12:34:56\n25:01:01\n0:00:05"
      }
    ],
    starterCode:
`import java.util.*;

public class Rosa {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t = 0; t < T; t++) {
            int S = sc.nextInt();
            // Your code here
        }
    }
}`,
    hint: "Hours = S / 3600, remaining = S % 3600, minutes = remaining / 60, seconds = remaining % 60. Use String.format(\"%d:%02d:%02d\", h, m, s).",
    concepts: ["integer division", "modular arithmetic", "formatted output"],
    dataFile: "rosa.dat"
  },

  // ─── M9: Sam ── Array Statistics ──────────────────────────────────────────
  {
    id: "m9",
    name: "Sam",
    difficulty: "Medium",
    description:
      "Given an array of integers, compute and print the minimum, maximum, mean (to 1 decimal place), " +
      "and range (max - min).",
    inputFormat:
      "The first line contains <strong>T</strong>, the number of test cases.<br>" +
      "Each test case starts with an integer <strong>N</strong>, followed by <strong>N</strong> integers on the same line.",
    outputFormat:
      'For each test case, print <code>min=X max=Y mean=Z.Z range=R</code> where Z.Z has exactly 1 decimal place.',
    constraints: "1 &le; T &le; 10. 1 &le; N &le; 100. -10000 &le; each integer &le; 10000.",
    sampleInput: "2\n5 10 20 30 40 50\n3 -5 0 5",
    sampleOutput: "min=10 max=50 mean=30.0 range=40\nmin=-5 max=5 mean=0.0 range=10",
    testCases: [
      {
        input: "2\n5 10 20 30 40 50\n3 -5 0 5",
        expected: "min=10 max=50 mean=30.0 range=40\nmin=-5 max=5 mean=0.0 range=10"
      },
      {
        input: "4\n1 42\n4 1 2 3 4\n3 -100 0 100\n6 5 5 5 5 5 5",
        expected: "min=42 max=42 mean=42.0 range=0\nmin=1 max=4 mean=2.5 range=3\nmin=-100 max=100 mean=0.0 range=200\nmin=5 max=5 mean=5.0 range=0"
      },
      {
        input: "2\n5 1 3 5 7 9\n3 -10000 10000 0",
        expected: "min=1 max=9 mean=5.0 range=8\nmin=-10000 max=10000 mean=0.0 range=20000"
      }
    ],
    starterCode:
`import java.util.*;

public class Sam {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t = 0; t < T; t++) {
            int N = sc.nextInt();
            int[] arr = new int[N];
            for (int i = 0; i < N; i++) {
                arr[i] = sc.nextInt();
            }
            // Your code here
        }
    }
}`,
    hint: "Track min and max while summing. Mean = (double) sum / N. Use String.format for the 1 decimal place: %.1f.",
    concepts: ["arrays", "min/max", "mean", "formatted output"],
    dataFile: "sam.dat"
  },

  // ─── M10: Tara ── Digit Sum Loop ──────────────────────────────────────────
  {
    id: "m10",
    name: "Tara",
    difficulty: "Medium",
    description:
      "Given a positive integer, repeatedly sum its digits until you arrive at a single digit. " +
      "Report the final single digit and the number of steps it took.",
    inputFormat:
      "The first line contains <strong>T</strong>, the number of test cases.<br>" +
      "Each test case is a single line with one positive integer <strong>N</strong>.",
    outputFormat:
      'For each test case, print <code>result steps</code> where result is the single digit and steps is how many summations were performed.',
    constraints: "1 &le; T &le; 10. 1 &le; N &le; 10<sup>18</sup>.",
    sampleInput: "3\n9\n38\n9999",
    sampleOutput: "9 0\n2 1\n9 2",
    testCases: [
      {
        input: "3\n9\n38\n9999",
        expected: "9 0\n2 1\n9 2"
      },
      {
        input: "5\n1\n10\n199\n999999999999999999\n12345",
        expected: "1 0\n1 1\n1 2\n9 2\n6 2"
      },
      {
        input: "3\n99\n123456789\n5",
        expected: "9 2\n9 2\n5 0"
      }
    ],
    starterCode:
`import java.util.*;

public class Tara {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t = 0; t < T; t++) {
            long N = sc.nextLong();
            // Your code here
        }
    }
}`,
    hint: "Use a while loop: while the number has more than one digit, sum its digits and increment a step counter. To sum digits, use modulo 10 and integer division. Use long to handle large inputs.",
    concepts: ["digit manipulation", "while loops", "modular arithmetic", "long type"],
    dataFile: "tara.dat"
  },

  // ─── M11: Uma ── Matrix Diagonal Sum ──────────────────────────────────────
  {
    id: "m11",
    name: "Uma",
    difficulty: "Medium",
    description:
      "Given an N&times;N matrix of integers, compute the sum of the primary diagonal " +
      "(top-left to bottom-right) and the sum of the secondary diagonal (top-right to bottom-left).",
    inputFormat:
      "The first line contains <strong>T</strong>, the number of test cases.<br>" +
      "Each test case starts with an integer <strong>N</strong>, followed by <strong>N</strong> rows " +
      "of <strong>N</strong> space-separated integers.",
    outputFormat:
      'For each test case, print <code>primary secondary</code> (the two diagonal sums separated by a space).',
    constraints: "1 &le; T &le; 5. 1 &le; N &le; 20. -1000 &le; each element &le; 1000.",
    sampleInput: "2\n3\n1 2 3\n4 5 6\n7 8 9\n2\n10 20\n30 40",
    sampleOutput: "15 15\n50 50",
    testCases: [
      {
        input: "2\n3\n1 2 3\n4 5 6\n7 8 9\n2\n10 20\n30 40",
        expected: "15 15\n50 50"
      },
      {
        input: "3\n1\n5\n4\n1 0 0 0\n0 2 0 0\n0 0 3 0\n0 0 0 4\n3\n-1 0 1\n0 5 0\n2 0 -3",
        expected: "5 5\n10 10\n1 6"
      },
      {
        input: "2\n3\n100 0 -100\n0 50 0\n200 0 -200\n4\n1 2 3 4\n5 6 7 8\n9 10 11 12\n13 14 15 16",
        expected: "-50 -50\n34 34"
      }
    ],
    starterCode:
`import java.util.*;

public class Uma {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t = 0; t < T; t++) {
            int N = sc.nextInt();
            int[][] matrix = new int[N][N];
            for (int i = 0; i < N; i++)
                for (int j = 0; j < N; j++)
                    matrix[i][j] = sc.nextInt();
            // Your code here
        }
    }
}`,
    hint: "Primary diagonal: matrix[i][i] for i = 0 to N-1. Secondary diagonal: matrix[i][N-1-i] for i = 0 to N-1.",
    concepts: ["2D arrays", "matrix", "diagonals", "loops"],
    dataFile: "uma.dat"
  },

  // ─── M12: Vince ── Character Frequency ────────────────────────────────────
  {
    id: "m12",
    name: "Vince",
    difficulty: "Medium",
    description:
      "Given a string, find the most frequent letter (case insensitive, letters only). " +
      "If there is a tie, choose the letter that comes first alphabetically. " +
      "Output the letter (lowercase) and its count.",
    inputFormat:
      "The first line contains <strong>T</strong>, the number of test cases.<br>" +
      "Each test case is a single line containing a string with at least one letter.",
    outputFormat:
      'For each test case, print <code>c count</code> where c is the lowercase letter and count is its frequency.',
    constraints: "1 &le; T &le; 10. Each string is 1 to 200 characters. Each string contains at least one letter.",
    sampleInput: "3\nHello World\naabbcc\nProgramming",
    sampleOutput: "l 3\na 2\ng 2",
    testCases: [
      {
        input: "3\nHello World\naabbcc\nProgramming",
        expected: "l 3\na 2\ng 2"
      },
      {
        input: "4\nAAAAA\nAaBbCcDd\n123 abc 456 abc\nThe quick brown fox jumps over the lazy dog",
        expected: "a 5\na 2\na 2\no 4"
      },
      {
        input: "3\nMississippi\nzZzZzZ!!!\nA B C A B C A",
        expected: "s 4\nz 6\na 3"
      }
    ],
    starterCode:
`import java.util.*;

public class Vince {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = Integer.parseInt(sc.nextLine().trim());
        for (int t = 0; t < T; t++) {
            String line = sc.nextLine();
            // Your code here
        }
    }
}`,
    hint: "Use an int array of size 26 to count letter frequencies. Convert each character to lowercase. Track the max count and the corresponding letter (prefer earlier alphabet on ties).",
    concepts: ["character frequency", "arrays", "case conversion", "HashMap alternative"],
    dataFile: "vince.dat"
  },

  // ─── M13: Wade ── Investment Goal (Becker-style) ─────────────────────────
  {
    id: "m13",
    name: "Wade",
    difficulty: "Medium",
    description:
      "Wade wants to know the <b>minimum initial investment</b> (principal) needed to reach a goal amount using compound interest.<br><br>" +
      "The compound interest formula is:<br>" +
      "<code>A = P × (1 + r/n)<sup>n×t</sup></code><br><br>" +
      "Where:<br>" +
      "<ul>" +
      "<li><b>A</b> = Amount goal</li>" +
      "<li><b>P</b> = Principal (what you're solving for)</li>" +
      "<li><b>r</b> = annual interest rate <i>as a decimal</i> (input is a percent!)</li>" +
      "<li><b>n</b> = times compounded per year</li>" +
      "<li><b>t</b> = years</li>" +
      "</ul><br>" +
      "Rearranging: <code>P = A / (1 + r/n)<sup>n×t</sup></code><br><br>" +
      "⚠️ <b>Two common traps:</b><br>" +
      "1. The rate is given as a <b>percent</b> (like 5), not a decimal (0.05). You must divide by <code>100.0</code> — not <code>100</code>! Integer division <code>5/100 = 0</code>.<br>" +
      "2. Round <b>up</b> to the nearest whole dollar using <code>Math.ceil()</code> — you need <i>at least</i> enough to reach the goal.",
    inputFormat:
      "The first line contains <b>T</b>.<br>Each of the next <b>T</b> lines contains four integers: <b>A</b> (goal), <b>r</b> (rate as percent), <b>n</b> (compounds per year), <b>t</b> (years).",
    outputFormat:
      "For each test case, print the minimum whole-dollar principal needed.",
    constraints: "1 ≤ T ≤ 10<br>1 ≤ A ≤ 10<sup>12</sup><br>1 ≤ r ≤ 100<br>1 ≤ n ≤ 52<br>1 ≤ t ≤ 100",
    sampleInput: "2\n1000 4 12 1\n766777 10 12 30",
    sampleOutput: "961\n38654",
    testCases: [
      { input: "2\n1000 4 12 1\n766777 10 12 30", expected: "961\n38654\n" },
      { input: "3\n10000 5 4 10\n1000000 8 12 20\n500 100 1 1", expected: "6085\n202972\n250\n" },
      { input: "2\n100 1 1 1\n50000 12 12 5", expected: "100\n27523\n" }
    ],
    starterCode:
`import java.util.*;

public class Wade {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t = 0; t < T; t++) {
            long A = sc.nextLong();
            // CAREFUL: r is a percent! Divide by 100.0, NOT 100
            double r = sc.nextInt() / 100.0;
            int n = sc.nextInt();
            int years = sc.nextInt();

            // Calculate (1 + r/n)^(n*years) using Math.pow
            // Then P = A / that value
            // Round UP with Math.ceil() and cast to long

        }
    }
}`,
    hint: "The key line is:<br><code>double dem = Math.pow(1 + r / n, n * years);</code><br><code>long P = (long) Math.ceil(A / dem);</code><br>Make sure <code>r</code> is a <code>double</code> from <code>sc.nextInt() / 100.0</code>.",
    concepts: ["compound interest", "Math.pow", "Math.ceil", "integer division pitfall"],
    dataFile: "wade.dat"
  },

  // ─── M14: Xena ── Rounding Methods ──────────────────────────────────────
  {
    id: "m14",
    name: "Xena",
    difficulty: "Medium",
    description:
      "Xena is learning about Java's three rounding methods. Given a decimal number, print the result of all three:<br><br>" +
      "<table style='border-collapse:collapse; margin:10px 0;'>" +
      "<tr><td style='padding:4px 12px; border:1px solid #4a5568;'><code>Math.floor(x)</code></td><td style='padding:4px 12px; border:1px solid #4a5568;'>Round <b>down</b> (toward negative infinity)</td></tr>" +
      "<tr><td style='padding:4px 12px; border:1px solid #4a5568;'><code>Math.ceil(x)</code></td><td style='padding:4px 12px; border:1px solid #4a5568;'>Round <b>up</b> (toward positive infinity)</td></tr>" +
      "<tr><td style='padding:4px 12px; border:1px solid #4a5568;'><code>Math.round(x)</code></td><td style='padding:4px 12px; border:1px solid #4a5568;'>Round to <b>nearest</b> (0.5 rounds up)</td></tr>" +
      "</table>" +
      "⚠️ Be careful with <b>negative</b> numbers! <code>Math.floor(-2.3)</code> is <code>-3</code>, not <code>-2</code>.",
    inputFormat:
      "The first line contains <b>T</b>.<br>Each of the next <b>T</b> lines contains a decimal number <b>X</b>.",
    outputFormat:
      "For each test case, print <code>floor ceil round</code> separated by spaces.",
    constraints: "1 ≤ T ≤ 100<br>-10000.0 ≤ X ≤ 10000.0",
    sampleInput: "4\n3.7\n3.2\n-2.3\n4.5",
    sampleOutput: "3 4 4\n3 4 3\n-3 -2 -2\n4 5 5",
    testCases: [
      { input: "4\n3.7\n3.2\n-2.3\n4.5", expected: "3 4 4\n3 4 3\n-3 -2 -2\n4 5 5\n" },
      { input: "5\n0.0\n1.0\n-1.0\n0.5\n-0.5", expected: "0 0 0\n1 1 1\n-1 -1 -1\n0 1 1\n-1 0 0\n" },
      { input: "3\n99.99\n-99.99\n0.1", expected: "99 100 100\n-100 -99 -100\n0 1 0\n" }
    ],
    starterCode:
`import java.util.*;

public class Xena {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t = 0; t < T; t++) {
            double X = sc.nextDouble();

            // Use Math.floor(), Math.ceil(), Math.round()
            // Cast floor and ceil to long (they return double)
            // Math.round() already returns long

        }
    }
}`,
    hint: "<code>Math.floor()</code> and <code>Math.ceil()</code> return <code>double</code>, so cast to <code>long</code>:<br><code>long f = (long) Math.floor(X);</code><br><code>long c = (long) Math.ceil(X);</code><br><code>long r = Math.round(X);</code>",
    concepts: ["Math.floor", "Math.ceil", "Math.round", "rounding", "negative numbers"],
    dataFile: "xena.dat"
  },

  // ─── M15: Yuri ── Percent to Decimal ────────────────────────────────────
  {
    id: "m15",
    name: "Yuri",
    difficulty: "Medium",
    description:
      "Yuri is computing sale prices. Given an item's original price (integer) and a discount percent (integer), calculate the sale price.<br><br>" +
      "Formula: <code>salePrice = price × (1 - discount / 100.0)</code><br><br>" +
      "⚠️ <b>The #1 bug students hit:</b> <code>discount / 100</code> does integer division and gives <b>0</b> for any discount less than 100! You must write <code>discount / 100.0</code> to get a decimal.<br><br>" +
      "Print the result rounded to the nearest cent (2 decimal places) using <code>printf</code>.",
    inputFormat:
      "The first line contains <b>T</b>.<br>Each of the next <b>T</b> lines contains two integers: <b>price</b> and <b>discount</b> (percent off).",
    outputFormat:
      "For each test case, print the sale price formatted to exactly 2 decimal places.",
    constraints: "1 ≤ T ≤ 100<br>1 ≤ price ≤ 100000<br>0 ≤ discount ≤ 100",
    sampleInput: "3\n100 25\n50 10\n200 0",
    sampleOutput: "75.00\n45.00\n200.00",
    testCases: [
      { input: "3\n100 25\n50 10\n200 0", expected: "75.00\n45.00\n200.00\n" },
      { input: "4\n99 50\n1 99\n100000 100\n77 33", expected: "49.50\n0.01\n0.00\n51.59\n" },
      { input: "3\n10 1\n500 15\n1234 7", expected: "9.90\n425.00\n1147.62\n" }
    ],
    starterCode:
`import java.util.*;

public class Yuri {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t = 0; t < T; t++) {
            int price = sc.nextInt();
            int discount = sc.nextInt();

            // WRONG: discount / 100  → integer division = 0!
            // RIGHT: discount / 100.0 → gives decimal like 0.25

            // Calculate sale price
            // double sale = price * (1 - discount / 100.0);

            // Print with 2 decimal places
            // System.out.printf("%.2f\\n", sale);
        }
    }
}`,
    hint: "The key is <code>discount / 100.0</code> — the <code>.0</code> forces decimal division. Then use <code>printf(\"%.2f\\n\", sale)</code> for 2 decimal places.",
    concepts: ["integer division pitfall", "percent to decimal", "printf", "%.2f"],
    dataFile: "yuri.dat"
  }
];
