// UIL Computer Science – Graph Algorithms
// Dijkstra's shortest path, MST, traversals, topological sort — UIL authentic format
// Graphs represented as text adjacency descriptions for paper-and-pencil work
const GRAPH_PROBLEMS = [

  // ══════════════════════════════════════════════════
  // A) GRAPH CLASSIFICATION (gp1–gp4)
  // ══════════════════════════════════════════════════

  { id: "gp1", topic: "Graph Algorithms", question: "Consider the graph described below.<pre><code>Vertices: 1, 2, 3, 4, 5\nEdges: 1-2, 2-3, 3-4, 4-5, 5-1, 2-4</code></pre>Which of the following is TRUE about this graph?", choices: ["The graph is directed and contains a cycle.", "The graph is undirected and acyclic.", "The graph is undirected and contains a cycle.", "The graph has exactly 5 edges.", "The graph is disconnected."], answer: 2, hint: "Count the edges and look for closed paths. Edge notation a-b (no arrow) means undirected", explanation: "The edges use a-b notation (undirected). There are 6 edges. The path 1-2-3-4-5-1 forms a cycle. The graph is connected (every vertex is reachable). Answer: undirected and contains a cycle." },

  { id: "gp2", topic: "Graph Algorithms", question: "Consider the directed graph described below.<pre><code>Vertices: A, B, C, D, E\nEdges: A→B, A→C, B→D, C→D, D→E</code></pre>What is the in-degree of vertex D?", choices: ["0", "1", "2", "3", "4"], answer: 2, hint: "In-degree counts edges coming INTO a vertex. Which edges have D as their destination?", explanation: "Edges into D: B→D and C→D. That is 2 incoming edges. In-degree of D = 2." },

  { id: "gp3", topic: "Graph Algorithms", question: "How many edges does a complete undirected graph on 8 vertices (K₈) have?", choices: ["16", "24", "28", "32", "56"], answer: 2, hint: "A complete graph on n vertices has n(n-1)/2 edges", explanation: "K₈ has 8(8-1)/2 = 8·7/2 = 28 edges." },

  { id: "gp4", topic: "Graph Algorithms", question: "Consider the graph described below.<pre><code>Vertices: P, Q, R, S, T, U\nEdges: P-Q, Q-R, S-T, T-U</code></pre>Which of the following is TRUE about this graph?", choices: ["The graph is connected.", "The graph contains a cycle.", "The graph is disconnected and acyclic.", "The graph has exactly 5 edges.", "Every vertex has degree 2."], answer: 2, hint: "Is there a path from P to S? Count connected components", explanation: "Vertices {P,Q,R} and {S,T,U} form two separate components with no edge between them — the graph is disconnected. No component contains a cycle (both are simple paths). There are 4 edges, not 5. P and U have degree 1. Answer: disconnected and acyclic." },

  // ══════════════════════════════════════════════════
  // B) DIJKSTRA'S SHORTEST PATH (gp5–gp10) — HIGH PRIORITY
  // ══════════════════════════════════════════════════

  // gp5: Dijkstra — 5 vertices, undirected
  // Graph: A-B:4, A-C:2, B-C:1, B-D:5, C-D:8, C-E:10, D-E:2
  // Dijkstra from A:
  //   Init: A=0, B=∞, C=∞, D=∞, E=∞
  //   Visit A(0): B=4, C=2
  //   Visit C(2): B=min(4,2+1)=3, D=min(∞,2+8)=10, E=min(∞,2+10)=12
  //   Visit B(3): D=min(10,3+5)=8, (no other improvement)
  //   Visit D(8): E=min(12,8+2)=10
  //   Visit E(10): done
  // Shortest A→E = 10, path: A→C→B→D→E
  { id: "gp5", topic: "Graph Algorithms", question: "Using Dijkstra's algorithm, find the shortest distance from vertex A to vertex E in the weighted undirected graph below.<pre><code>Vertices: A, B, C, D, E\nEdges (undirected, weighted):\n  A-B: 4    A-C: 2\n  B-C: 1    B-D: 5\n  C-D: 8    C-E: 10\n  D-E: 2</code></pre>", choices: ["8", "10", "12", "14", "9"], answer: 1, hint: "Run Dijkstra from A. After processing C(2), update B to 3 via A→C→B. Then process B(3), update D to 8. Then process D(8), update E to 10", explanation: "Dijkstra from A: A=0→C=2→B=3 (via C)→D=8 (via B)→E=10 (via D). Path: A→C→B→D→E, distance 10." },

  // gp6: Dijkstra — 6 vertices, undirected
  // Graph: A-B:7, A-C:3, B-C:2, B-D:4, C-D:6, C-E:5, D-F:1, E-F:8
  // Dijkstra from A:
  //   Init: A=0, rest ∞
  //   Visit A(0): B=7, C=3
  //   Visit C(3): B=min(7,3+2)=5, D=min(∞,3+6)=9, E=min(∞,3+5)=8
  //   Visit B(5): D=min(9,5+4)=9, (same)
  //   Visit E(8): F=min(∞,8+8)=16
  //   Visit D(9): F=min(16,9+1)=10
  //   Visit F(10): done
  // Shortest A→F = 10
  { id: "gp6", topic: "Graph Algorithms", question: "Using Dijkstra's algorithm, what is the shortest distance from vertex A to vertex F?<pre><code>Vertices: A, B, C, D, E, F\nEdges (undirected, weighted):\n  A-B: 7    A-C: 3\n  B-C: 2    B-D: 4\n  C-D: 6    C-E: 5\n  D-F: 1    E-F: 8</code></pre>", choices: ["10", "11", "12", "14", "16"], answer: 0, hint: "From A, the cheapest next vertex is C(3). From C, B becomes 5 and E becomes 8. After processing D(9), F updates to 10", explanation: "Dijkstra from A: A=0→C=3→B=5 (via C)→E=8 (via C)→D=9 (via C or B, both 9)→F=10 (via D). Shortest path A→C→B→D→F or A→C→D→F, distance 10." },

  // gp7: Dijkstra — ask for the PATH, not distance
  // Graph: A-B:3, A-C:6, B-C:2, B-D:1, C-E:4, D-E:7, D-C:3
  // Undirected edges: A-B:3, A-C:6, B-C:2, B-D:1, C-E:4, D-E:7, D-C:3
  // Dijkstra from A to E:
  //   Init: A=0
  //   Visit A(0): B=3, C=6
  //   Visit B(3): C=min(6,3+2)=5, D=min(∞,3+1)=4
  //   Visit D(4): C=min(5,4+3)=5(no change), E=min(∞,4+7)=11
  //   Visit C(5): E=min(11,5+4)=9
  //   Visit E(9): done
  // Path: A→B→C→E (3+2+4=9)
  { id: "gp7", topic: "Graph Algorithms", question: "Using Dijkstra's algorithm on the graph below, which path gives the shortest distance from A to E?<pre><code>Vertices: A, B, C, D, E\nEdges (undirected, weighted):\n  A-B: 3    A-C: 6\n  B-C: 2    B-D: 1\n  C-E: 4    D-E: 7\n  D-C: 3</code></pre>", choices: ["A→C→E (cost 10)", "A→B→C→E (cost 9)", "A→B→D→E (cost 11)", "A→B→D→C→E (cost 11)", "A→C→D→E (cost 16)"], answer: 1, hint: "Run Dijkstra from A. B=3, then D=4 and C=5 (via B). From C(5), E=9. Check: 3+2+4=9", explanation: "Dijkstra from A: A=0, B=3, D=4 (via B), C=5 (via B), E=9 (via C). The shortest path is A→B→C→E with cost 3+2+4 = 9." },

  // gp8: Dijkstra — 6 vertices, slightly larger
  // Graph: S-A:4, S-B:2, A-B:1, A-C:5, B-C:8, B-D:3, C-T:2, D-T:6, D-C:1
  // Undirected. Finding S to T.
  // Dijkstra from S:
  //   Init: S=0
  //   Visit S(0): A=4, B=2
  //   Visit B(2): A=min(4,2+1)=3, C=min(∞,2+8)=10, D=min(∞,2+3)=5
  //   Visit A(3): C=min(10,3+5)=8
  //   Visit D(5): T=min(∞,5+6)=11, C=min(8,5+1)=6
  //   Visit C(6): T=min(11,6+2)=8
  //   Visit T(8): done
  // Shortest S→T = 8, path: S→B→D→C→T (2+3+1+2=8)
  { id: "gp8", topic: "Graph Algorithms", question: "Using Dijkstra's algorithm, find the shortest distance from vertex S to vertex T.<pre><code>Vertices: S, A, B, C, D, T\nEdges (undirected, weighted):\n  S-A: 4    S-B: 2\n  A-B: 1    A-C: 5\n  B-C: 8    B-D: 3\n  C-T: 2    D-T: 6\n  D-C: 1</code></pre>", choices: ["7", "8", "9", "10", "11"], answer: 1, hint: "From S, go to B(2). From B, reach D(5). From D, reach C(6) via the D-C:1 edge. From C, reach T(8)", explanation: "Dijkstra from S: S=0→B=2→A=3 (via B)→D=5 (via B)→C=6 (via D)→T=8 (via C). Path: S→B→D→C→T, cost 2+3+1+2 = 8." },

  // gp9: Dijkstra on a DIRECTED graph
  // Directed edges: A→B:2, A→C:5, B→C:1, B→D:6, C→D:2, C→E:7, D→E:1
  // Dijkstra from A to E:
  //   Init: A=0
  //   Visit A(0): B=2, C=5
  //   Visit B(2): C=min(5,2+1)=3, D=min(∞,2+6)=8
  //   Visit C(3): D=min(8,3+2)=5, E=min(∞,3+7)=10
  //   Visit D(5): E=min(10,5+1)=6
  //   Visit E(6): done
  // Shortest A→E = 6, path: A→B→C→D→E (2+1+2+1=6)
  { id: "gp9", topic: "Graph Algorithms", question: "Using Dijkstra's algorithm, find the shortest distance from vertex A to vertex E in the <em>directed</em> graph below.<pre><code>Vertices: A, B, C, D, E\nEdges (directed, weighted):\n  A→B: 2    A→C: 5\n  B→C: 1    B→D: 6\n  C→D: 2    C→E: 7\n  D→E: 1</code></pre>", choices: ["5", "6", "7", "10", "12"], answer: 1, hint: "This is directed — you can only follow arrow directions. From A, B=2. From B, C=3. From C, D=5. From D, E=6", explanation: "Dijkstra (directed) from A: A=0, B=2, C=3 (via B), D=5 (via C), E=6 (via D). Path: A→B→C→D→E, cost 2+1+2+1 = 6." },

  // gp10: Dijkstra — 7 vertices, moderate complexity
  // Graph (undirected):
  // A-B:5, A-C:1, B-D:2, C-B:3, C-D:9, C-E:6, D-F:4, E-F:2, E-G:8, F-G:3
  // Dijkstra from A to G:
  //   Init: A=0
  //   Visit A(0): B=5, C=1
  //   Visit C(1): B=min(5,1+3)=4, D=min(∞,1+9)=10, E=min(∞,1+6)=7
  //   Visit B(4): D=min(10,4+2)=6
  //   Visit D(6): F=min(∞,6+4)=10
  //   Visit E(7): F=min(10,7+2)=9, G=min(∞,7+8)=15
  //   Visit F(9): G=min(15,9+3)=12
  //   Visit G(12): done
  // Shortest A→G = 12, path: A→C→E→F→G (1+6+2+3=12)
  { id: "gp10", topic: "Graph Algorithms", question: "Using Dijkstra's algorithm, find the shortest distance from vertex A to vertex G.<pre><code>Vertices: A, B, C, D, E, F, G\nEdges (undirected, weighted):\n  A-B: 5    A-C: 1\n  B-C: 3    B-D: 2\n  C-D: 9    C-E: 6\n  D-F: 4    E-F: 2\n  E-G: 8    F-G: 3</code></pre>", choices: ["11", "12", "13", "14", "15"], answer: 1, hint: "Start with C(1). Then B=4, E=7. Then D=6 (via B). Then F=9 (via E). Then G=12 (via F)", explanation: "Dijkstra from A: A=0→C=1→B=4 (via C)→D=6 (via B)→E=7 (via C)→F=9 (via E)→G=12 (via F). Path: A→C→E→F→G, cost 1+6+2+3 = 12." },

  // ══════════════════════════════════════════════════
  // C) MINIMUM SPANNING TREE (gp11–gp14)
  // ══════════════════════════════════════════════════

  // gp11: Kruskal's — 5 vertices
  // Edges sorted: B-C:1, A-C:2, D-E:2, A-B:4, B-D:5, C-D:8, C-E:10
  // Kruskal's: add B-C:1 ✓, add A-C:2 ✓, add D-E:2 ✓, A-B:4 skip (A-B-C cycle),
  //   add B-D:5 ✓ (connects {A,B,C} to {D,E})
  // MST weight = 1+2+2+5 = 10
  { id: "gp11", topic: "Graph Algorithms", question: "Using Kruskal's algorithm, what is the total weight of the minimum spanning tree for the graph below?<pre><code>Vertices: A, B, C, D, E\nEdges (undirected, weighted):\n  A-B: 4    A-C: 2\n  B-C: 1    B-D: 5\n  C-D: 8    C-E: 10\n  D-E: 2</code></pre>", choices: ["9", "10", "11", "12", "15"], answer: 1, hint: "Sort edges: B-C:1, A-C:2, D-E:2, A-B:4, B-D:5, C-D:8, C-E:10. Add edges avoiding cycles until all 5 vertices are connected", explanation: "Kruskal's sorted: B-C:1 (add), A-C:2 (add), D-E:2 (add), A-B:4 (skip, creates cycle A-B-C), B-D:5 (add, connects components). MST edges: B-C, A-C, D-E, B-D. Total = 1+2+2+5 = 10." },

  // gp12: Kruskal's — 6 vertices, ask which edge is added LAST
  // Graph: A-B:3, A-C:5, B-C:4, B-D:7, C-D:6, C-E:2, D-F:8, E-F:9, D-E:1
  // Sorted: D-E:1, C-E:2, A-B:3, B-C:4, A-C:5, C-D:6, B-D:7, D-F:8, E-F:9
  // Kruskal's:
  //   D-E:1 ✓ (components: {D,E}, {A}, {B}, {C}, {F})
  //   C-E:2 ✓ ({C,D,E}, {A}, {B}, {F})
  //   A-B:3 ✓ ({A,B}, {C,D,E}, {F})
  //   B-C:4 ✓ ({A,B,C,D,E}, {F})
  //   A-C:5 skip (cycle)
  //   C-D:6 skip (cycle)
  //   B-D:7 skip (cycle)
  //   D-F:8 ✓ ({A,B,C,D,E,F}) — all connected!
  // Last edge added: D-F
  // MST weight = 1+2+3+4+8 = 18
  { id: "gp12", topic: "Graph Algorithms", question: "When running Kruskal's algorithm on the graph below, which edge is added <em>last</em> to complete the minimum spanning tree?<pre><code>Vertices: A, B, C, D, E, F\nEdges (undirected, weighted):\n  A-B: 3    A-C: 5    B-C: 4\n  B-D: 7    C-D: 6    C-E: 2\n  D-E: 1    D-F: 8    E-F: 9</code></pre>", choices: ["B-C (weight 4)", "A-C (weight 5)", "C-D (weight 6)", "D-F (weight 8)", "E-F (weight 9)"], answer: 3, hint: "Sort all edges by weight and add them one by one, skipping any that would create a cycle. The last one added connects the final isolated vertex", explanation: "Kruskal's order: D-E:1 (add), C-E:2 (add), A-B:3 (add), B-C:4 (add, merges two components), A-C:5 (skip, cycle), C-D:6 (skip, cycle), B-D:7 (skip, cycle), D-F:8 (add — connects F). D-F is the last edge added." },

  // gp13: MST total weight — 7 vertices
  // Graph: A-B:2, A-C:4, B-C:3, B-D:7, C-E:5, D-E:1, D-F:6, E-F:8, E-G:3, F-G:4
  // Sorted: D-E:1, A-B:2, B-C:3, E-G:3, A-C:4, F-G:4, C-E:5, D-F:6, B-D:7, E-F:8
  // Kruskal's:
  //   D-E:1 ✓ ({D,E})
  //   A-B:2 ✓ ({A,B})
  //   B-C:3 ✓ ({A,B,C})
  //   E-G:3 ✓ ({D,E,G})
  //   A-C:4 skip (cycle in {A,B,C})
  //   F-G:4 ✓ ({D,E,F,G})
  //   C-E:5 ✓ ({A,B,C,D,E,F,G}) — all connected!
  // MST = 1+2+3+3+4+5 = 18
  { id: "gp13", topic: "Graph Algorithms", question: "What is the total weight of the minimum spanning tree for the graph below?<pre><code>Vertices: A, B, C, D, E, F, G\nEdges (undirected, weighted):\n  A-B: 2    A-C: 4    B-C: 3\n  B-D: 7    C-E: 5    D-E: 1\n  D-F: 6    E-F: 8    E-G: 3\n  F-G: 4</code></pre>", choices: ["16", "17", "18", "19", "20"], answer: 2, hint: "Sort edges: D-E:1, A-B:2, B-C:3, E-G:3, A-C:4, F-G:4, C-E:5, D-F:6, B-D:7, E-F:8. Add the six cheapest that don't create cycles", explanation: "Kruskal's: D-E:1 (add), A-B:2 (add), B-C:3 (add), E-G:3 (add), A-C:4 (skip, cycle), F-G:4 (add), C-E:5 (add, connects both components). Total = 1+2+3+3+4+5 = 18." },

  // gp14: MST — how many edges in any spanning tree of n vertices?
  { id: "gp14", topic: "Graph Algorithms", question: "A connected undirected graph has 10 vertices. How many edges will its minimum spanning tree contain?", choices: ["8", "9", "10", "11", "It depends on the graph."], answer: 1, hint: "Any spanning tree of a graph with n vertices has exactly n-1 edges", explanation: "A spanning tree of a connected graph with n vertices always has exactly n-1 edges. For 10 vertices: 10-1 = 9 edges." },

  // ══════════════════════════════════════════════════
  // D) DFS vs BFS TRAVERSAL (gp15–gp17)
  // ══════════════════════════════════════════════════

  // gp15: BFS traversal
  // Graph (undirected): A-B, A-C, A-D, B-E, C-E, C-F, D-F
  // BFS from A: Visit A, enqueue A's neighbors {B,C,D}.
  // All of A's neighbors are depth 1 — they must ALL appear before any depth-2 vertex.
  // Depth-2 vertices: E (neighbor of B and C), F (neighbor of C and D).
  //
  // Choice A: A, B, C, D, E, F — depth 1={B,C,D} then depth 2={E,F}. Valid.
  // Choice B: A, B, E, C, F, D — E appears before C and D (both depth 1). Invalid.
  // Choice C: A, D, C, B, F, E — depth 1={D,C,B} then depth 2={F,E}.
  //   Verify: Visit A, enqueue D,C,B. Visit D, enqueue F. Visit C, enqueue E.
  //   Visit B (nothing new). Visit F. Visit E. Order: A,D,C,B,F,E. Valid!
  // Choice E: A, C, E, B, D, F — E appears before B and D (depth 1). Invalid.
  // Both A and C are valid BFS orderings.
  { id: "gp15", topic: "Graph Algorithms", question: "Consider the undirected graph below. Starting from vertex A, which is a valid BFS (Breadth-First Search) traversal order?<pre><code>Vertices: A, B, C, D, E, F\nEdges:\n  A-B    A-C    A-D\n  B-E    C-E    C-F\n  D-F</code></pre>", choices: ["A, B, C, D, E, F", "A, B, E, C, F, D", "A, D, C, B, F, E", "Both A and C", "A, C, E, B, D, F"], answer: 3, hint: "BFS visits all of A's neighbors first (B, C, D in some order), then their unvisited neighbors. Multiple valid orderings exist", explanation: "BFS from A visits A, then all depth-1 neighbors {B,C,D} in some order, then depth-2 vertices {E,F}. Choice A: A,B,C,D,E,F — all depth-1 before depth-2. Valid. Choice C: A,D,C,B,F,E — all depth-1 (D,C,B) before depth-2 (F,E). Valid. Choice B and E place depth-2 vertices before all depth-1 neighbors are visited. Invalid. Both A and C are valid." },

  // gp16: DFS traversal
  // Graph (undirected): 1-2, 1-3, 2-4, 2-5, 3-5, 3-6, 5-6
  // Verifying each choice:
  //   A: 1,2,4,5,3,6 — 1→2(adj)→4(adj to 2)→dead end→back to 2→5(adj)→3(adj to 5)→6(adj to 3). Valid!
  //   B: 1,3,6,5,4,2 — 1→3→6→5→4? 4 is adj to 2 only, not to 5. Cannot go 5→4. Invalid.
  //   C: 1,2,3,4,5,6 — 1→2→3? 3 is not adj to 2. Invalid.
  //   D: 1,2,5,6,4,3 — 1→2→5→6→4? 4 is adj to 2 only, not to 6. Invalid.
  //   E: 1,3,5,2,4,6 — 1→3→5→2→4→back to 2→back to 5→6. Visit order: 1,3,5,2,4,6. Valid!
  // Both A and E are valid. Use "Both A and E" answer.
  { id: "gp16", topic: "Graph Algorithms", question: "Consider the undirected graph below. Starting from vertex 1, which is a valid DFS (Depth-First Search) traversal order?<pre><code>Vertices: 1, 2, 3, 4, 5, 6\nEdges:\n  1-2    1-3\n  2-4    2-5\n  3-5    3-6\n  5-6</code></pre>", choices: ["1, 2, 4, 5, 3, 6", "1, 3, 6, 5, 4, 2", "1, 2, 3, 4, 5, 6", "1, 3, 5, 2, 4, 6", "Both A and D"], answer: 4, hint: "DFS goes as deep as possible before backtracking. Check adjacency carefully — vertex 4 is only adjacent to vertex 2", explanation: "Choice A: 1→2→4 (dead end, backtrack to 2)→5→3→6. Valid DFS. Choice B: 5→4 is impossible (4 not adjacent to 5). Choice C: 2→3 is impossible (not adjacent). Choice D: 1→3→5→2→4 (backtrack to 2, to 5)→6. Valid DFS. Both A and D are valid." },

  // gp17: BFS — which data structure does it use?
  { id: "gp17", topic: "Graph Algorithms", question: "Which data structure does Breadth-First Search (BFS) use to determine the order in which vertices are visited?", choices: ["Stack", "Queue", "Priority Queue", "Linked List", "Binary Search Tree"], answer: 1, hint: "BFS visits vertices level by level — which data structure processes elements in FIFO order?", explanation: "BFS uses a Queue (FIFO). It processes all vertices at the current depth before moving to the next depth level. DFS uses a Stack (or recursion)." },

  // ══════════════════════════════════════════════════
  // E) TOPOLOGICAL SORT (gp18–gp19)
  // ══════════════════════════════════════════════════

  // gp18: Topological sort — prerequisite-style
  // DAG: CS101→CS201, CS101→CS202, CS201→CS301, CS202→CS301, CS202→CS303, CS301→CS401, CS303→CS401
  // In-degrees: CS101:0, CS201:1, CS202:1, CS301:2, CS303:1, CS401:2
  // Valid topological sorts: CS101 must be first. Then CS201,CS202 in either order.
  //   CS101, CS201, CS202, CS301, CS303, CS401 — valid
  //   CS101, CS202, CS201, CS301, CS303, CS401 — valid
  //   CS101, CS202, CS303, CS201, CS301, CS401 — valid
  //   CS101, CS201, CS202, CS303, CS301, CS401 — valid
  { id: "gp18", topic: "Graph Algorithms", question: "The directed acyclic graph below represents course prerequisites. Which of the following is a valid topological ordering?<pre><code>CS101 → CS201    CS101 → CS202\nCS201 → CS301    CS202 → CS301\nCS202 → CS303    CS301 → CS401\nCS303 → CS401</code></pre>", choices: ["CS101, CS201, CS202, CS301, CS303, CS401", "CS201, CS101, CS202, CS301, CS303, CS401", "CS101, CS301, CS201, CS202, CS303, CS401", "CS101, CS202, CS303, CS401, CS201, CS301", "CS303, CS202, CS101, CS201, CS301, CS401"], answer: 0, hint: "In a topological sort, every vertex appears before all vertices it points to. CS101 must come before CS201 and CS202", explanation: "Choice A: CS101 first (no prereqs — correct). CS201 after CS101 (prereq met). CS202 after CS101 (met). CS301 after CS201 and CS202 (both met). CS303 after CS202 (met). CS401 after CS301 and CS303 (both met). Valid! Choice B: CS201 before CS101 — violates CS101→CS201. Choice C: CS301 before CS201 — violates CS201→CS301." },

  // gp19: Topological sort — task scheduling
  // DAG: A→C, A→D, B→D, B→E, C→F, D→F, E→F
  // In-degrees: A:0, B:0, C:1, D:2, E:1, F:3
  // Valid: A,B,C,D,E,F or B,A,C,D,E,F or A,B,C,E,D,F or B,A,D,E,C,F (wait, need to check)
  //   B,A,D,E,C,F: D needs A and B done. A is done, B is done. OK. E needs B done. OK. C needs A done. OK. F needs C,D,E. OK. Valid!
  //   Actually B,A,E,C,D,F: E needs B(done). C needs A(done). D needs A(done) and B(done). F needs all. Valid!
  //   A,B,D,C,E,F: D needs A and B. Both done by position 3. C needs A (done). E needs B(done). Valid!
  // What's NOT valid: anything with F before C,D,E all appear, or D before both A and B.
  { id: "gp19", topic: "Graph Algorithms", question: "Given the directed acyclic graph below representing task dependencies, which is a valid topological sort?<pre><code>A → C    A → D\nB → D    B → E\nC → F    D → F\nE → F</code></pre>", choices: ["A, B, C, D, E, F", "B, A, D, C, E, F", "A, C, B, D, E, F", "A, B, C, E, D, F", "All of the above"], answer: 4, hint: "Check each ordering: does every vertex appear after all its prerequisites? A and B have no prerequisites, so either can go first", explanation: "All four orderings are valid. A: A,B first (no prereqs), then C(needs A), D(needs A,B), E(needs B), F(needs C,D,E) — valid. B: B,A,D(needs A,B — both done),C(needs A — done),E(needs B — done),F — valid. C: A,C(needs A),B,D(needs A,B),E(needs B),F — valid. D: A,B,C(needs A),E(needs B),D(needs A,B),F — valid." },

  // ══════════════════════════════════════════════════
  // F) GRAPH CONCEPTS (gp20)
  // ══════════════════════════════════════════════════

  // gp20: Euler path/circuit conditions
  // An Euler path exists if exactly 0 or 2 vertices have odd degree.
  // An Euler circuit exists if all vertices have even degree.
  // Graph: A-B, A-C, A-D, B-C, B-D, C-D
  // Degrees: A:3, B:3, C:3, D:3. All odd. 4 vertices with odd degree → no Euler path or circuit.
  // Graph 2: A-B, B-C, C-D, D-A, A-C
  // Degrees: A:3, B:2, C:3, D:2. Exactly 2 odd-degree vertices (A and C) → Euler path exists (A to C or C to A).
  { id: "gp20", topic: "Graph Algorithms", question: "An undirected graph has the following edges:<pre><code>Vertices: A, B, C, D\nEdges: A-B, B-C, C-D, D-A, A-C</code></pre>Which of the following is TRUE?", choices: ["The graph has an Euler circuit because all vertices have even degree.", "The graph has an Euler path but not an Euler circuit.", "The graph has neither an Euler path nor an Euler circuit.", "The graph has a Hamiltonian circuit but no Euler path.", "The graph has both an Euler circuit and a Hamiltonian circuit."], answer: 1, hint: "Compute each vertex's degree. An Euler path exists if exactly 2 vertices have odd degree; an Euler circuit exists if all vertices have even degree", explanation: "Degrees: A has edges to B,C,D → degree 3 (odd). B has edges to A,C → degree 2 (even). C has edges to A,B,D → degree 3 (odd). D has edges to A,C → degree 2 (even). Exactly 2 vertices (A and C) have odd degree, so an Euler path exists (starting at A or C) but not an Euler circuit." },

];
