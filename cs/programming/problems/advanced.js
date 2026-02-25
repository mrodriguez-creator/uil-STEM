const ADVANCED_PROBLEMS = [
  // ==================== A1: Giselle ====================
  {
    id: "a1",
    name: "Giselle",
    difficulty: "Advanced",
    description:
      "Giselle is designing a GPS navigation system. Given an undirected weighted graph, find the shortest path distance from a source vertex to a destination vertex using Dijkstra's algorithm. Vertices are 0-indexed.",
    inputFormat:
      "The first line contains a single integer <b>T</b>, the number of test cases.<br>Each test case starts with a line containing two integers <b>V</b> and <b>E</b> (number of vertices and edges).<br>The next <b>E</b> lines each contain three integers <b>u</b>, <b>v</b>, and <b>w</b> representing an undirected edge between vertex <b>u</b> and vertex <b>v</b> with weight <b>w</b>.<br>The last line of each test case contains two integers <b>S</b> and <b>D</b> (source and destination).",
    outputFormat:
      "For each test case, print the shortest path distance from <b>S</b> to <b>D</b>. If no path exists, print <code>NO PATH</code>.",
    constraints:
      "1 &le; T &le; 10<br>2 &le; V &le; 100<br>0 &le; E &le; V*(V-1)/2<br>0 &le; u, v &lt; V<br>1 &le; w &le; 10,000<br>0 &le; S, D &lt; V",
    sampleInput: "2\n5 6\n0 1 10\n0 3 5\n1 2 1\n1 3 2\n2 4 4\n3 1 3\n0 4\n3 1\n0 1 5\n0 2",
    sampleOutput: "13\nNO PATH",
    testCases: [
      {
        input: "2\n5 6\n0 1 10\n0 3 5\n1 2 1\n1 3 2\n2 4 4\n3 1 3\n0 4\n3 1\n0 1 5\n0 2",
        expected: "13\nNO PATH\n"
      },
      {
        input: "3\n4 5\n0 1 1\n1 2 2\n0 2 10\n2 3 3\n0 3 100\n0 3\n2 1\n0 1 7\n1 0\n6 7\n0 1 2\n0 2 4\n1 3 7\n2 3 1\n3 4 3\n4 5 1\n2 5 10\n0 5",
        expected: "6\n7\n8\n"
      }
    ],
    starterCode: `import java.util.*;

public class Giselle {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t = 0; t < T; t++) {
            // Your code here
        }
    }
}`,
    hint: "Use a priority queue (min-heap) storing <code>(distance, vertex)</code> pairs. Initialize all distances to Integer.MAX_VALUE except the source (0). Relax edges greedily. For the adjacency list, remember the graph is undirected so add edges in both directions.",
    concepts: ["Dijkstra's algorithm", "priority queue", "adjacency list", "shortest path", "greedy"],
    dataFile: "giselle.dat"
  },

  // ==================== A2: Hector ====================
  {
    id: "a2",
    name: "Hector",
    difficulty: "Advanced",
    description:
      "Hector is packing for a hiking trip but his backpack has a weight limit. Given a set of items, each with a weight and a value, determine the maximum total value he can carry without exceeding the weight capacity. Each item can be taken at most once (0/1 Knapsack).",
    inputFormat:
      "The first line contains a single integer <b>T</b>, the number of test cases.<br>Each test case starts with a line containing two integers <b>N</b> and <b>W</b> (number of items and maximum weight capacity).<br>The next <b>N</b> lines each contain two integers <b>weight</b> and <b>value</b> for that item.",
    outputFormat:
      "For each test case, print the maximum value achievable without exceeding weight <b>W</b>.",
    constraints:
      "1 &le; T &le; 10<br>1 &le; N &le; 100<br>1 &le; W &le; 1,000<br>1 &le; weight, value &le; 1,000",
    sampleInput: "2\n3 50\n10 60\n20 100\n30 120\n4 7\n1 1\n3 4\n4 5\n5 7",
    sampleOutput: "220\n9",
    testCases: [
      {
        input: "2\n3 50\n10 60\n20 100\n30 120\n4 7\n1 1\n3 4\n4 5\n5 7",
        expected: "220\n9\n"
      },
      {
        input: "3\n1 5\n10 100\n2 10\n5 10\n5 12\n5 15\n10 60\n20 100\n30 120\n5 8\n60 10",
        expected: "0\n22\n280\n"
      }
    ],
    starterCode: `import java.util.*;

public class Hector {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t = 0; t < T; t++) {
            // Your code here
        }
    }
}`,
    hint: "Build a 2D DP table where <code>dp[i][w]</code> is the max value using the first <b>i</b> items with capacity <b>w</b>. For each item, decide to include it or not: <code>dp[i][w] = max(dp[i-1][w], dp[i-1][w-weight[i]] + value[i])</code>. You can optimize to a 1D array by iterating weights in reverse.",
    concepts: ["dynamic programming", "0/1 knapsack", "optimization", "2D DP table"],
    dataFile: "hector.dat"
  },

  // ==================== A3: Iris ====================
  {
    id: "a3",
    name: "Iris",
    difficulty: "Advanced",
    description:
      "Iris is designing a network of cables to connect buildings. She wants to connect all buildings using the minimum total cable length. Given an undirected weighted graph, find the total weight of the Minimum Spanning Tree (MST). If the graph is not connected, print <code>DISCONNECTED</code>. Vertices are 0-indexed.",
    inputFormat:
      "The first line contains a single integer <b>T</b>, the number of test cases.<br>Each test case starts with a line containing two integers <b>V</b> and <b>E</b> (number of vertices and edges).<br>The next <b>E</b> lines each contain three integers <b>u</b>, <b>v</b>, and <b>w</b> representing an undirected edge with weight <b>w</b>.",
    outputFormat:
      "For each test case, print the total weight of the MST, or <code>DISCONNECTED</code> if the graph is not connected.",
    constraints:
      "1 &le; T &le; 10<br>1 &le; V &le; 100<br>0 &le; E &le; V*(V-1)/2<br>0 &le; u, v &lt; V<br>1 &le; w &le; 10,000",
    sampleInput: "2\n4 5\n0 1 10\n0 2 6\n0 3 5\n1 3 15\n2 3 4\n3 1\n0 1 5",
    sampleOutput: "19\nDISCONNECTED",
    testCases: [
      {
        input: "2\n4 5\n0 1 10\n0 2 6\n0 3 5\n1 3 15\n2 3 4\n3 1\n0 1 5",
        expected: "19\nDISCONNECTED\n"
      },
      {
        input: "3\n5 7\n0 1 1\n0 2 3\n1 2 2\n1 3 5\n2 3 4\n2 4 6\n3 4 7\n2 1\n0 1 3\n1 0\n0 0",
        expected: "13\n3\nDISCONNECTED\n"
      }
    ],
    starterCode: `import java.util.*;

public class Iris {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t = 0; t < T; t++) {
            // Your code here
        }
    }
}`,
    hint: "Use Kruskal's algorithm: sort all edges by weight, then greedily add edges that connect different components. Use Union-Find (Disjoint Set Union) with path compression and union by rank for efficiency. After processing, check if exactly V-1 edges were added; if not, the graph is disconnected.",
    concepts: ["minimum spanning tree", "Kruskal's algorithm", "Union-Find", "disjoint set", "greedy"],
    dataFile: "iris.dat"
  },

  // ==================== A4: Jasper ====================
  {
    id: "a4",
    name: "Jasper",
    difficulty: "Advanced",
    description:
      "Jasper is comparing DNA sequences. Given two strings, find the length of their Longest Common Subsequence (LCS). A subsequence is a sequence that can be derived from another sequence by deleting zero or more elements without changing the order of the remaining elements.",
    inputFormat:
      "The first line contains a single integer <b>T</b>, the number of test cases.<br>Each test case consists of two lines, each containing a string.",
    outputFormat:
      "For each test case, print the length of the longest common subsequence.",
    constraints:
      "1 &le; T &le; 10<br>0 &le; |string| &le; 500<br>Strings consist of uppercase English letters only.",
    sampleInput: "2\nABCBDAB\nBDCAB\nAGGTAB\nGXTXAYB",
    sampleOutput: "4\n4",
    testCases: [
      {
        input: "2\nABCBDAB\nBDCAB\nAGGTAB\nGXTXAYB",
        expected: "4\n4\n"
      },
      {
        input: "4\nABC\nDEF\nHELLO\nHELLO\nABCDE\nACE\nX\nY",
        expected: "0\n5\n3\n0\n"
      }
    ],
    starterCode: `import java.util.*;

public class Jasper {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t = 0; t < T; t++) {
            // Your code here
        }
    }
}`,
    hint: "Build a 2D DP table where <code>dp[i][j]</code> is the LCS length of the first <b>i</b> characters of string 1 and the first <b>j</b> characters of string 2. If the characters match, <code>dp[i][j] = dp[i-1][j-1] + 1</code>. Otherwise, <code>dp[i][j] = max(dp[i-1][j], dp[i][j-1])</code>. Be careful reading the two strings after <code>nextInt()</code> &mdash; you may need <code>nextLine()</code> to consume the newline.",
    concepts: ["dynamic programming", "longest common subsequence", "2D DP table", "string comparison"],
    dataFile: "jasper.dat"
  },

  // ==================== A5: Kendra ====================
  {
    id: "a5",
    name: "Kendra",
    difficulty: "Advanced",
    description:
      "Kendra is scheduling college courses. Some courses have prerequisites, forming a directed graph. She needs to find a valid ordering of all courses such that every prerequisite is taken before the course that requires it. Use Kahn's algorithm (BFS-based topological sort): when multiple vertices have in-degree 0, choose the smallest numbered vertex first. If a cycle exists (no valid ordering), report it. Vertices are 0-indexed.",
    inputFormat:
      "The first line contains a single integer <b>T</b>, the number of test cases.<br>Each test case starts with a line containing two integers <b>V</b> and <b>E</b> (number of vertices and edges).<br>The next <b>E</b> lines each contain two integers <b>u</b> and <b>v</b> representing a directed edge from vertex <b>u</b> to vertex <b>v</b>.",
    outputFormat:
      "For each test case, print a valid topological ordering as space-separated vertex numbers, or <code>CYCLE DETECTED</code> if the graph contains a cycle.",
    constraints:
      "1 &le; T &le; 10<br>1 &le; V &le; 100<br>0 &le; E &le; V*(V-1)<br>0 &le; u, v &lt; V",
    sampleInput: "2\n6 6\n5 2\n5 0\n4 0\n4 1\n2 3\n3 1\n3 3\n0 1\n1 2\n2 0",
    sampleOutput: "4 5 0 2 3 1\nCYCLE DETECTED",
    testCases: [
      {
        input: "2\n6 6\n5 2\n5 0\n4 0\n4 1\n2 3\n3 1\n3 3\n0 1\n1 2\n2 0",
        expected: "4 5 0 2 3 1\nCYCLE DETECTED\n"
      },
      {
        input: "3\n4 4\n0 1\n0 2\n1 3\n2 3\n5 4\n1 0\n2 0\n3 4\n4 0\n1 0",
        expected: "0 1 2 3\n1 2 3 4 0\n0\n"
      }
    ],
    starterCode: `import java.util.*;

public class Kendra {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t = 0; t < T; t++) {
            // Your code here
        }
    }
}`,
    hint: "Compute in-degrees for all vertices. Add all vertices with in-degree 0 to a <code>PriorityQueue</code> (min-heap ensures smallest vertex first). Repeatedly remove the minimum, append to result, and decrement neighbors' in-degrees, adding newly zero-indegree vertices to the queue. If the result has fewer than V vertices, a cycle exists.",
    concepts: ["topological sort", "Kahn's algorithm", "BFS", "directed acyclic graph", "priority queue", "in-degree"],
    dataFile: "kendra.dat"
  },

  // ==================== A6: Landon ====================
  {
    id: "a6",
    name: "Landon",
    difficulty: "Advanced",
    description:
      "Landon is building a spell-checker. Given two strings, find the minimum edit distance (Levenshtein distance) between them. The allowed operations are: insert a character, delete a character, or substitute one character for another. Each operation costs 1.",
    inputFormat:
      "The first line contains a single integer <b>T</b>, the number of test cases.<br>Each test case consists of two lines, each containing a string. A string may be empty.",
    outputFormat:
      "For each test case, print the minimum edit distance.",
    constraints:
      "1 &le; T &le; 10<br>0 &le; |string| &le; 500<br>Strings consist of lowercase English letters only (or may be empty).",
    sampleInput: "2\nkitten\nsitting\nsaturday\nsunday",
    sampleOutput: "3\n3",
    testCases: [
      {
        input: "2\nkitten\nsitting\nsaturday\nsunday",
        expected: "3\n3\n"
      },
      {
        input: "4\n\nabc\nabc\nabc\nhorse\nros\nintention\nexecution",
        expected: "3\n0\n3\n5\n"
      }
    ],
    starterCode: `import java.util.*;

public class Landon {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = Integer.parseInt(sc.nextLine().trim());
        for (int t = 0; t < T; t++) {
            // Your code here
        }
    }
}`,
    hint: "Build a 2D DP table where <code>dp[i][j]</code> is the edit distance between the first <b>i</b> characters of string 1 and the first <b>j</b> characters of string 2. Base cases: <code>dp[i][0] = i</code> and <code>dp[0][j] = j</code>. If characters match, <code>dp[i][j] = dp[i-1][j-1]</code>. Otherwise, take the minimum of insert, delete, and substitute, plus 1. Use <code>sc.nextLine()</code> to read strings (handles empty lines).",
    concepts: ["dynamic programming", "edit distance", "Levenshtein distance", "string transformation", "2D DP table"],
    dataFile: "landon.dat"
  },

  // ==================== A7: Marina ====================
  {
    id: "a7",
    name: "Marina",
    difficulty: "Advanced",
    description:
      "Marina works at a vending machine company. Given a set of coin denominations and a target amount, find the minimum number of coins needed to make that exact amount. Each coin denomination can be used unlimited times.",
    inputFormat:
      "The first line contains a single integer <b>T</b>, the number of test cases.<br>Each test case starts with a line containing a single integer <b>N</b> (number of coin denominations).<br>The next line contains <b>N</b> space-separated integers representing the coin values.<br>The last line contains a single integer <b>A</b> (the target amount).",
    outputFormat:
      "For each test case, print the minimum number of coins needed. If it is impossible to make the exact amount, print <code>IMPOSSIBLE</code>.",
    constraints:
      "1 &le; T &le; 10<br>1 &le; N &le; 20<br>1 &le; coin value &le; 10,000<br>0 &le; A &le; 10,000",
    sampleInput: "2\n3\n1 5 10\n27\n2\n3 7\n11",
    sampleOutput: "5\nIMPOSSIBLE",
    testCases: [
      {
        input: "2\n3\n1 5 10\n27\n2\n3 7\n11",
        expected: "5\nIMPOSSIBLE\n"
      },
      {
        input: "4\n4\n1 5 10 25\n30\n1\n2\n3\n3\n2 5 7\n0\n3\n3 5 7\n14",
        expected: "2\nIMPOSSIBLE\n0\n2\n"
      }
    ],
    starterCode: `import java.util.*;

public class Marina {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t = 0; t < T; t++) {
            // Your code here
        }
    }
}`,
    hint: "Use a 1D DP array where <code>dp[i]</code> is the minimum coins to make amount <b>i</b>. Initialize <code>dp[0] = 0</code> and all others to a large value (like amount + 1). For each amount from 1 to A, try every coin: <code>dp[i] = min(dp[i], dp[i - coin] + 1)</code>. If <code>dp[A]</code> is still larger than A, it's impossible. Don't forget the edge case where A = 0 (answer is 0).",
    concepts: ["dynamic programming", "coin change", "unbounded knapsack", "1D DP array", "optimization"],
    dataFile: "marina.dat"
  },

  // ==================== A8: Nolan ====================
  {
    id: "a8",
    name: "Nolan",
    difficulty: "Advanced",
    description:
      "Nolan is analyzing a social network. He wants to find groups of users where every user in the group can reach every other user by following directed connections. Given a directed graph, count the number of Strongly Connected Components (SCCs). A strongly connected component is a maximal set of vertices such that there is a directed path from each vertex to every other vertex in the set. Vertices are 0-indexed.",
    inputFormat:
      "The first line contains a single integer <b>T</b>, the number of test cases.<br>Each test case starts with a line containing two integers <b>V</b> and <b>E</b> (number of vertices and directed edges).<br>The next <b>E</b> lines each contain two integers <b>u</b> and <b>v</b> representing a directed edge from <b>u</b> to <b>v</b>.",
    outputFormat:
      "For each test case, print the number of strongly connected components.",
    constraints:
      "1 &le; T &le; 10<br>1 &le; V &le; 100<br>0 &le; E &le; V*(V-1)<br>0 &le; u, v &lt; V",
    sampleInput: "2\n5 5\n1 0\n0 2\n2 1\n0 3\n3 4\n4 4\n0 1\n1 2\n2 3\n3 0",
    sampleOutput: "3\n1",
    testCases: [
      {
        input: "2\n5 5\n1 0\n0 2\n2 1\n0 3\n3 4\n4 4\n0 1\n1 2\n2 3\n3 0",
        expected: "3\n1\n"
      },
      {
        input: "3\n8 9\n0 1\n1 2\n2 0\n3 4\n4 5\n5 3\n6 7\n7 6\n2 3\n3 0\n1 0\n7 3\n0 1\n1 2\n2 3\n3 4\n4 5\n5 6\n6 0",
        expected: "3\n3\n1\n"
      }
    ],
    starterCode: `import java.util.*;

public class Nolan {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t = 0; t < T; t++) {
            // Your code here
        }
    }
}`,
    hint: "Use Kosaraju's algorithm: (1) Do a DFS on the original graph and push vertices onto a stack in order of finish time. (2) Build the transpose graph (reverse all edges). (3) Pop vertices from the stack and do DFS on the transpose &mdash; each DFS from an unvisited vertex discovers one SCC. Alternatively, use Tarjan's algorithm with a single DFS using low-link values.",
    concepts: ["strongly connected components", "Kosaraju's algorithm", "Tarjan's algorithm", "DFS", "transpose graph", "graph theory"],
    dataFile: "nolan.dat"
  }
];
