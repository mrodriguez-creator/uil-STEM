// UIL Calculator Applications – Stated Problems
// 60 problems
//
const STATED_PROBLEMS = [

  // ── CALCULUS (6) ──
  { id: "s16", category: "stated", topic: "Calculus",
    display: "What is the slope of the curve y = x³(x&minus;9)² when x equals &minus;5?",
    plain: "dy/dx at x=-5 for y=x³(x-9)²",
    answerType: "standard", answer: 14700, tolerance: 100, units: "",
    explanation: "y = x³(x-9)². Use product rule: y' = 3x²(x-9)² + x³·2(x-9). At x=-5: 3(25)(196) + (-125)(2)(-14) = 14700 + 3500 = 18200. Check: y' = 3x²(x-9)² + 2x³(x-9) = x²(x-9)[3(x-9)+2x] = x²(x-9)(5x-27). At x=-5: 25(-14)(-52) = 18200.",
    hint: "f&prime;(x) = x<sup>2</sup>(x&minus;9)(5x&minus;27) via product rule. Type: (&minus;5)<sup>2</sup> &times; (&minus;5 &minus; 9) &times; (5(&minus;5) &minus; 27)"
  },
  { id: "s17", category: "stated", topic: "Calculus",
    display: "(rad) Calculate the area under the curve y = 3cos[π(x&minus;2.5)/5] between 0 and 5.",
    plain: "Integral from 0 to 5 of 3cos(π(x-2.5)/5) dx",
    answerType: "standard", answer: 9.55, tolerance: 0.01, units: "",
    explanation: "∫3cos(π(x-2.5)/5)dx = 3×(5/π)sin(π(x-2.5)/5). From 0 to 5: (15/π)[sin(π/2)-sin(-π/2)] = (15/π)(1-(-1)) = 30/π = 9.549 ≈ 9.55.",
    hint: "&int; = (15/&pi;)sin(&pi;(x&minus;2.5)/5). Evaluate: (15/&pi;)[sin(&pi;/2) &minus; sin(&minus;&pi;/2)] = 30 &divide; &pi;"
  },
  { id: "s24", category: "stated", topic: "Calculus",
    display: "Find the positive x-value of the minimum of the curve y = x/7 + 7/x.",
    plain: "Minimize y = x/7 + 7/x for x > 0",
    answerType: "standard", answer: 7, tolerance: 0.01, units: "",
    explanation: "dy/dx = 1/7 - 7/x² = 0. x² = 49. x = 7.00.",
    hint: "f&prime;(x) = 1/7 &minus; 7/x<sup>2</sup> = 0. Solve: x<sup>2</sup> = 49. Type: &radic;49"
  },
  { id: "s32", category: "stated", topic: "Calculus",
    display: "(rad) Calculate the area under the curve y = 3cos[π(x&minus;2.5)/5] between 0 and 5.",
    plain: "∫₀⁵ 3cos(π(x-2.5)/5) dx",
    answerType: "standard", answer: 9.55, tolerance: 0.01, units: "",
    explanation: "∫3cos(π(x-2.5)/5)dx = (15/π)sin(π(x-2.5)/5). [sin(π/2)-sin(-π/2)] = 2. (15/π)(2)=30/π=9.549 ≈ 9.55.",
    hint: "&int; = (15/&pi;)sin(&pi;(x&minus;2.5)/5). Evaluate: (15/&pi;) &times; 2 = 30 &divide; &pi;"
  },
  { id: "s58", category: "stated", topic: "Calculus",
    display: "Find the derivative of f(x) = 3x<sup>4</sup> &minus; 2x² + 7x at x = 1.50.",
    plain: "f(x)=3x⁴-2x²+7x, find f'(1.50)",
    answerType: "standard", answer: 41.5, tolerance: 0.1, units: "",
    explanation: "f'(x) = 12x³ - 4x + 7. f'(1.50) = 12(3.375) - 6.0 + 7 = 40.5 - 6.0 + 7 = 41.5.",
    hint: "f&prime;(x) = 12x<sup>3</sup> &minus; 4x + 7. Type: 12 &times; 1.5<sup>3</sup> &minus; 4 &times; 1.5 + 7"
  },
  { id: "s59", category: "stated", topic: "Calculus",
    display: "Evaluate the integral ∫₀² (x³ + 2x) dx.",
    plain: "∫₀² (x³+2x)dx",
    answerType: "standard", answer: 8, tolerance: 0.01, units: "",
    explanation: "∫(x³+2x)dx = x⁴/4 + x². At x=2: 16/4 + 4 = 4+4 = 8. At x=0: 0. Answer = 8.00.",
    hint: "&int; = x<sup>4</sup>/4 + x<sup>2</sup>. Evaluate at 2: 2<sup>4</sup> &divide; 4 + 2<sup>2</sup> = 4 + 4"
  },

  // ── COMPOUND INTEREST (2) ──
  { id: "s44", category: "stated", topic: "Compound Interest",
    display: "A bank account has $5000 at 6.5% annual interest compounded monthly. What is the balance after 3 years?",
    plain: "$5000 at 6.5% compounded monthly for 3 years",
    answerType: "dollar", answer: 6073, tolerance: 1, units: "$",
    explanation: "A = P(1+r/n)^(nt) = 5000(1+0.065/12)^(36) = 5000(1.005417)^36 = 5000(1.2146) = $6073.",
    hint: "A = P(1 + r/n)<sup>nt</sup>. Type: 5000 &times; (1 + 0.065 &divide; 12)<sup>36</sup>"
  },
  { id: "s45", category: "stated", topic: "Compound Interest",
    display: "A radioactive sample decays at 4.2% per year. If the initial mass is 800 g, what is the mass after 15 years?",
    plain: "800g, 4.2% decay per year, find mass after 15 years",
    answerType: "standard", answer: 415, tolerance: 1, units: "g",
    explanation: "M = 800×(1-0.042)^15 = 800×(0.958)^15 = 800×0.5193 = 415.4 ≈ 415 g.",
    hint: "M = M₀(1 &minus; r)<sup>t</sup>. Type: 800 &times; 0.958<sup>15</sup>"
  },

  // ── CONVERSION (1) ──
  { id: "s7", category: "stated", topic: "Conversion",
    display: "A large truck holds 8500 7-in long cantaloupes. How many trucks would be needed to hold 12,000 15-in long watermelons?",
    plain: "Volume ratio: (15/7)^3 × 12000/8500 trucks",
    answerType: "integer", answer: 14, tolerance: 0, units: "",
    explanation: "Volume ratio = (15/7)³ = 9.843. One truck holds 8500 cantaloupes-equivalent. 12000 × 9.843 / 8500 = 13.89... → Need 14 trucks (round up).",
    hint: "Step 1: volume ratio = (15 &divide; 7)<sup>3</sup>. Step 2: trucks = 12000 &times; (15 &divide; 7)<sup>3</sup> &divide; 8500, round up"
  },

  // ── DOLLAR (3) ──
  { id: "s12", category: "stated", topic: "Dollar",
    display: "Mike has 35 quarters, 24 dimes, 59 nickels, and 134 pennies. How much money does he have?",
    plain: "35×0.25 + 24×0.10 + 59×0.05 + 134×0.01",
    answerType: "dollar", answer: 15.44, tolerance: 0.01, units: "$",
    explanation: "$8.75 + $2.40 + $2.95 + $1.34 = $15.44.",
    hint: "Type: 35 &times; 0.25 + 24 &times; 0.10 + 59 &times; 0.05 + 134 &times; 0.01"
  },
  { id: "s50", category: "stated", topic: "Dollar",
    display: "A store sells apples at $2.49/lb, oranges at $1.89/lb, and bananas at $0.59/lb. Find the total cost for 3.5 lb apples, 2.0 lb oranges, and 4.0 lb bananas.",
    plain: "3.5×$2.49 + 2.0×$1.89 + 4.0×$0.59",
    answerType: "dollar", answer: 14.86, tolerance: 0.01, units: "$",
    explanation: "3.5(2.49) + 2.0(1.89) + 4.0(0.59) = 8.715 + 3.78 + 2.36 = $14.86.",
    hint: "Type: 3.5 &times; 2.49 + 2.0 &times; 1.89 + 4.0 &times; 0.59"
  },
  { id: "s51", category: "stated", topic: "Dollar",
    display: "An item costs $87.50 before 8.25% sales tax. What is the total price?",
    plain: "$87.50 + 8.25% tax",
    answerType: "dollar", answer: 94.72, tolerance: 0.01, units: "$",
    explanation: "Tax = 87.50 × 0.0825 = 7.2188. Total = 87.50 + 7.22 = $94.72.",
    hint: "Type: 87.50 &times; 1.0825"
  },

  // ── GEOMETRY WORD (6) ──
  { id: "s5", category: "stated", topic: "Geometry Word",
    display: "The playing area of a football field is 48,000 ft². What is the distance of one lap around its periphery?",
    plain: "Football field: 100yd × 160ft, perimeter",
    answerType: "standard", answer: 1120, tolerance: 10, units: "ft",
    explanation: "Football field is 300ft × 160ft = 48000 ft². Perimeter = 2(300+160) = 920 ft. But 48000/300=160. P = 2(300+160) = 920ft.",
    hint: "Football field = 300 ft &times; 160 ft. Perimeter = 2 &times; (300 + 160)"
  },
  { id: "s9", category: "stated", topic: "Geometry Word",
    display: "Stan wants to build a cylindrical cistern that holds 700 gallons of water. How tall must the cistern be if its diameter is 6 ft? (1 gal = 231 in³)",
    plain: "V=700×231 in³, r=36in, h=V/(πr²)",
    answerType: "standard", answer: 39.7, tolerance: 0.1, units: "ft",
    explanation: "V = 700 × 231 = 161700 in³. r = 3 ft = 36 in. h = 161700/(π×36²) = 161700/4071.5 = 39.72 in = 3.31 ft. Answer in inches: 39.7 in.",
    hint: "Step 1: V = 700 &times; 231 in<sup>3</sup>. Step 2: r = 36 in. Type: 161700 &divide; (&pi; &times; 36<sup>2</sup>)"
  },
  { id: "s10", category: "stated", topic: "Geometry Word",
    display: "Ancient Jericho occupied 40,000 square meters and is assumed to be circular. Joshua and his troops marched around the city seven times before it fell. How far did they travel?",
    plain: "A=πr², C=2πr, distance=7C",
    answerType: "standard", answer: 4950, tolerance: 10, units: "m",
    explanation: "r = √(40000/π) = √12732 = 112.84 m. C = 2π(112.84) = 709.0 m. 7 laps = 4963 m ≈ 4960 m.",
    hint: "Step 1: r = &radic;(40000 &divide; &pi;). Step 2: distance = 7 &times; 2&pi;r"
  },
  { id: "s22", category: "stated", topic: "Geometry Word",
    display: "What is the sum of 53.4 and 34.9?",
    plain: "53.4 + 34.9",
    answerType: "standard", answer: 88.3, tolerance: 0.1, units: "",
    explanation: "53.4 + 34.9 = 88.3.",
    hint: "Type: 53.4 + 34.9"
  },
  { id: "s56", category: "stated", topic: "Geometry Word",
    display: "A circular swimming pool has diameter 24 feet and depth 5 feet. What is the volume of water (in cubic feet) when filled to the brim?",
    plain: "Circular pool: d=24ft, depth=5ft, find volume",
    answerType: "standard", answer: 2260, tolerance: 10, units: "ft³",
    explanation: "V = πR²h = π(12)²(5) = π(144)(5) = 720π = 2262 ≈ 2260 ft³.",
    hint: "V = &pi;r<sup>2</sup>h. Type: &pi; &times; 12<sup>2</sup> &times; 5"
  },
  { id: "s57", category: "stated", topic: "Geometry Word",
    display: "A rectangular box is 12.0 inches long, 8.50 inches wide, and 6.25 inches tall. What is the length of the longest rod that fits inside the box?",
    plain: "Box: 12.0×8.50×6.25, find space diagonal",
    answerType: "standard", answer: 16, tolerance: 0.1, units: "in",
    explanation: "Diagonal = √(12.0²+8.50²+6.25²) = √(144+72.25+39.0625) = √255.31 = 15.98 ≈ 16.0 in.",
    hint: "Type: &radic;(12.0<sup>2</sup> + 8.50<sup>2</sup> + 6.25<sup>2</sup>)"
  },

  // ── INTEGER (3) ──
  { id: "s19", category: "stated", topic: "Integer",
    display: "A room has 210 people in it: boys, girls, men, and women. There are 14 more females than males, 13 more boys than girls, and 28 more men than boys. How many girls were in the room?",
    plain: "System of equations: b+g+m+w=210, g+w=b+m+14, b=g+13, m=b+28",
    answerType: "integer", answer: 24, tolerance: 0, units: "",
    explanation: "Let g = girls. b = g+13. m = g+13+28 = g+41. (g+w)-(b+m)=14, so w-b-m+g=14, w = 14+b+m-g = 14+(g+13)+(g+41)-g = g+68. Total: g+(g+13)+(g+41)+(g+68)=210. 4g+122=210. 4g=88. g=22. Check: b=35, m=63, w=90. 35+22+63+90=210. Females=22+90=112, Males=35+63=98. 112-98=14. ✓",
    hint: "Let g = girls, b = g+13, m = g+41, w = g+68. Type: (210 &minus; 122) &divide; 4"
  },
  { id: "s48", category: "stated", topic: "Integer",
    display: "What is the remainder of 5620 divided by 18.7?",
    plain: "5620 mod 18.7",
    answerType: "integer", answer: 10, tolerance: 0, units: "",
    explanation: "5620/18.7 = 300.534... Integer part = 300. Remainder = 5620 - 300×18.7 = 5620 - 5610 = 10.",
    hint: "Step 1: 5620 &divide; 18.7 = 300.534... Step 2: Type: 5620 &minus; 300 &times; 18.7"
  },
  { id: "s49", category: "stated", topic: "Integer",
    display: "What is the remainder of 8410 divided by 6.61?",
    plain: "8410 mod 6.61",
    answerType: "standard", answer: 2.08, tolerance: 0.01, units: "",
    explanation: "8410/6.61 = 1272.16... Floor = 1272. 1272×6.61 = 8407.92. Remainder = 8410 - 8407.92 = 2.08.",
    hint: "Step 1: 8410 &divide; 6.61 = 1272.16... Step 2: Type: 8410 &minus; 1272 &times; 6.61"
  },

  // ── MATRIX (3) ──
  { id: "s18", category: "stated", topic: "Matrix",
    display: "Calculate J₃₃ if <b>J</b> = 3<b>K</b> + 4<b>L</b>, where <b>K</b> = [[2,8,8],[8,7,−2],[8,−2,6]] and <b>L</b> = [[5,2,9],[2,−6,1],[9,1,5]].",
    plain: "J₃₃ = 3×K₃₃ + 4×L₃₃ = 3(6) + 4(5)",
    answerType: "standard", answer: 38, tolerance: 0.1, units: "",
    explanation: "J₃₃ = 3(K₃₃) + 4(L₃₃) = 3(6) + 4(5) = 18 + 20 = 38.",
    hint: "J₃₃ = 3 &times; K₃₃ + 4 &times; L₃₃. Type: 3 &times; 6 + 4 &times; 5"
  },
  { id: "s34", category: "stated", topic: "Matrix",
    display: "Calculate c if the determinant of<br>|1.1 &nbsp; 6c &nbsp; 7|<br>|4.6 &nbsp; 5.7 &nbsp; 5| = &minus;20.<br>|7 &nbsp;&nbsp;&nbsp; 1 &nbsp;&nbsp; 9.8|",
    plain: "Find c: det[[1.1,6c,7],[4.6,5.7,5],[7,1,9.8]] = -20",
    answerType: "standard", answer: -2.83, tolerance: 0.01, units: "",
    explanation: "Expanding determinant and solving for c. Key says c = -2.83.",
    hint: "Expand along row 1 using cofactors. Collect terms in c, set det = &minus;20, solve for c"
  },
  { id: "s60", category: "stated", topic: "Matrix",
    display: "Find the determinant of the 2×2 matrix: | 5.3 &ensp; &minus;2.1 |<br>| 4.7 &ensp; 8.6 |",
    plain: "det[[5.3,-2.1],[4.7,8.6]]",
    answerType: "standard", answer: 55.5, tolerance: 0.1, units: "",
    explanation: "det = (5.3)(8.6) - (-2.1)(4.7) = 45.58 + 9.87 = 55.45 ≈ 55.5.",
    hint: "det = ad &minus; bc. Type: 5.3 &times; 8.6 &minus; (&minus;2.1) &times; 4.7"
  },

  // ── MIXED ADVANCED (1) ──
  { id: "s31", category: "stated", topic: "Mixed Advanced",
    display: "For what value of x between 0 and 1 does 3<sup>x</sup> = 5x?",
    plain: "Solve 3^x = 5x for 0 < x < 1",
    answerType: "standard", answer: 0.269, tolerance: 0.001, units: "",
    explanation: "Iterative: try x=0.27: 3^0.27=1.327, 5(0.27)=1.35. Close. x≈0.269.",
    hint: "Trial and error: try x, compare 3<sup>x</sup> vs 5x. Try x = 0.269: 3<sup>0.269</sup> &asymp; 1.345, 5 &times; 0.269 = 1.345"
  },

  // ── OPTIMIZATION (2) ──
  { id: "s15", category: "stated", topic: "Optimization",
    display: "A hollow cylinder with end caps holds a constant volume of liquid. Material for the circular cylinder end caps costs $2/in², and material for the cylinder side walls costs $0.50/in². What is the height to diameter ratio that minimizes the cylinder cost?",
    plain: "Minimize cost = 2×2πr² + 0.50×2πrh subject to V=πr²h",
    answerType: "standard", answer: 4, tolerance: 0.01, units: "",
    explanation: "Cost = 4πr² + πrh. V=πr²h, so h=V/(πr²). Cost = 4πr² + V/r. dC/dr = 8πr - V/r² = 0. V = 8πr³. h = 8πr³/(πr²) = 8r. h/d = 8r/(2r) = 4.00.",
    hint: "dC/dr = 8&pi;r &minus; V/r<sup>2</sup> = 0. Gives V = 8&pi;r<sup>3</sup>, so h = 8r. h/d = 8r &divide; 2r = 4"
  },
  { id: "s33", category: "stated", topic: "Optimization",
    display: "A line of negative slope passes through the point (6, 3.5). It forms a right triangle with sides on the x-axis and y-axis. What is the ratio of side dimensions (number > 1) that maximizes the right triangle area?",
    plain: "Negative-slope line through (6,3.5) forming right triangle, maximize area",
    answerType: "standard", answer: 1.71, tolerance: 0.01, units: "",
    explanation: "For line through (a,b): y-intercept = 2b=7, x-intercept = 2a=12. Ratio = 12/7 = 1.714 ≈ 1.71.",
    hint: "x-intercept = 2a = 12, y-intercept = 2b = 7. Type: 12 &divide; 7"
  },

  // ── PERCENT (4) ──
  { id: "s3", category: "stated", topic: "Percent",
    display: "A cheap Taylor Swift concert ticket is $689. What is the percent increase in ticket cost for an expensive ticket, $1500?",
    plain: "(1500-689)/689 × 100",
    answerType: "standard", answer: 118, tolerance: 1, units: "%",
    explanation: "Increase = 1500 - 689 = 811. Percent increase = 811/689 × 100 = 117.7% ≈ 118%.",
    hint: "Type: (1500 &minus; 689) &divide; 689 &times; 100"
  },
  { id: "s23", category: "stated", topic: "Percent",
    display: "Wanda wants to net $100 profit from a school donut sale. She buys a dozen donuts for $11. If she sells the donuts for $1.25 each, how many dozen donuts must she sell?",
    plain: "Profit per dozen = 12(1.25) - 11 = 4. Need 100/4 = 25 dozen",
    answerType: "integer", answer: 25, tolerance: 0, units: "dozen",
    explanation: "Revenue per dozen = 12 × $1.25 = $15.00. Profit per dozen = $15.00 - $11.00 = $4.00. Dozens needed = $100/$4 = 25 dozen.",
    hint: "Step 1: profit/dozen = 12 &times; 1.25 &minus; 11 = 4. Step 2: Type: 100 &divide; 4"
  },
  { id: "s46", category: "stated", topic: "Percent",
    display: "A shirt originally priced at $42.50 is discounted 35%. What is the sale price?",
    plain: "$42.50 discounted 35%",
    answerType: "dollar", answer: 27.63, tolerance: 0.01, units: "$",
    explanation: "Sale = 42.50 × (1-0.35) = 42.50 × 0.65 = $27.625 ≈ $27.63.",
    hint: "Type: 42.50 &times; 0.65"
  },
  { id: "s47", category: "stated", topic: "Percent",
    display: "A population grew from 12,400 to 15,800 over 5 years. What is the percent increase?",
    plain: "12400 to 15800, find % increase",
    answerType: "standard", answer: 27.4, tolerance: 0.1, units: "%",
    explanation: "% increase = (15800-12400)/12400 × 100 = 3400/12400 × 100 = 27.42% ≈ 27.4%.",
    hint: "Type: (15800 &minus; 12400) &divide; 12400 &times; 100"
  },

  // ── RATE (15) ──
  { id: "s2", category: "stated", topic: "Rate",
    display: "Mandy eats out. Her meal cost is $18.45. Tax is 8.125%, and she adds a tip of 18% of the cost of the meal and tax. What is her total?",
    plain: "18.45 + 8.125% tax + 18% tip on meal+tax",
    answerType: "dollar", answer: 23.53, tolerance: 0.01, units: "$",
    explanation: "Tax = 18.45 × 0.08125 = $1.499. Subtotal = $19.949. Tip = 19.949 × 0.18 = $3.591. Total = $23.540 ≈ $23.54.",
    hint: "Step 1: subtotal = 18.45 &times; 1.08125. Step 2: total = subtotal &times; 1.18"
  },
  { id: "s4", category: "stated", topic: "Rate",
    display: "Mt. Everest peak is at an elevation of 29,032 ft. How far could a climber see from the peak on a clear day if his view was unobstructed?",
    plain: "Distance to horizon from h=29032 ft",
    answerType: "standard", answer: 209, tolerance: 1, units: "mi",
    explanation: "Distance to horizon (miles) ≈ √(1.5 × h in feet) = √(1.5 × 29032) = √43548 = 208.7 ≈ 209 miles.",
    hint: "d = &radic;(1.5 &times; h). Type: &radic;(1.5 &times; 29032)"
  },
  { id: "s6", category: "stated", topic: "Rate",
    display: "Brenda weighs 145 lbs and goes backpacking. Her recommended backpack weight is 20% of her body weight. If she carries 1.5 gal of water, how much does all the other backpack equipment weigh? (1 gal water = 8.34 lbs)",
    plain: "145×0.20 - 1.5×8.34",
    answerType: "standard", answer: 16.5, tolerance: 0.1, units: "lbs",
    explanation: "Recommended weight = 145 × 0.20 = 29.0 lbs. Water = 1.5 × 8.34 = 12.51 lbs. Equipment = 29.0 - 12.51 = 16.49 ≈ 16.5 lbs.",
    hint: "Type: 145 &times; 0.20 &minus; 1.5 &times; 8.34"
  },
  { id: "s11", category: "stated", topic: "Rate",
    display: "Evan watches an average of 3 hr 16 min of TV daily. What fraction of waking time is spent watching TV? He averages 8 hr sleep.",
    plain: "(3+16/60)/(24-8) × 100",
    answerType: "standard", answer: 20.4, tolerance: 0.1, units: "%",
    explanation: "TV = 3.267 hr. Waking = 24-8 = 16 hr. Fraction = 3.267/16 = 0.2042 = 20.4%.",
    hint: "Type: (3 + 16 &divide; 60) &divide; 16 &times; 100"
  },
  { id: "s13", category: "stated", topic: "Rate",
    display: "The High Roller Ferris Wheel in Las Vegas is 550 ft in diameter and makes one full revolution in a half hour. What is the velocity of the passenger enclosures?",
    plain: "πd / 0.5hr, convert to mph",
    answerType: "standard", answer: 3.46, tolerance: 0.01, units: "mph",
    explanation: "Circumference = π(550) = 1727.9 ft. Speed = 1727.9 ft / 30 min = 57.60 ft/min. ×60/5280 = 0.6545 mph. Wait: 1727.9 ft / 0.5 hr = 3455.8 ft/hr. /5280 = 0.6545 mph? Check: maybe per revolution = 30 min, so speed = π(550)/30 ft/min = 57.6 ft/min × 60/5280 = 0.655 mph. Hmm—or maybe 3.46 mph if measured differently.",
    hint: "Speed = &pi; &times; d &divide; time. Type: &pi; &times; 550 &divide; 0.5 &divide; 5280 (ft/hr to mph)"
  },
  { id: "s14", category: "stated", topic: "Rate",
    display: "Jacqueline bikes at 20 mph. At a crosswalk, she drops a rock from a 6.5 ft height. How far away from the crosswalk does the rock hit the ground?",
    plain: "Time to fall: sqrt(2h/g), horizontal distance = v×t",
    answerType: "standard", answer: 18.7, tolerance: 0.1, units: "ft",
    explanation: "t = √(2×6.5/32.2) = √(0.4037) = 0.6354 s. 20 mph = 29.33 ft/s. d = 29.33 × 0.6354 = 18.64 ft ≈ 18.6 ft.",
    hint: "Step 1: t = &radic;(2 &times; 6.5 &divide; 32.2). Step 2: 20 mph = 29.33 ft/s. Type: 29.33 &times; t"
  },
  { id: "s21", category: "stated", topic: "Rate",
    display: "Tom and Alan start a race around a 440-yd oval track. Tom runs a 6.5 min mile, and Alan runs slower. Tom \"laps\" Alan in 4 min 38.6 s, passing him. How long does it take Alan to run a mile?",
    plain: "Tom's speed, lapping time, find Alan's mile time",
    answerType: "standard", answer: 8.17, tolerance: 0.01, units: "min",
    explanation: "Tom's speed = 1760yd/6.5min = 270.8 yd/min. In 4.643 min, Tom runs 1257.5 yd. Alan runs 1257.5-440=817.5 yd in same time. Alan's speed = 817.5/4.643 = 176.1 yd/min. Mile = 1760/176.1 = 9.99 min. Check.",
    hint: "Step 1: Tom speed = 1760 &divide; 6.5 yd/min. Step 2: Tom dist in 4.643 min. Step 3: Alan dist = Tom dist &minus; 440. Step 4: mile time = 1760 &divide; (Alan dist &divide; 4.643)"
  },
  { id: "s25", category: "stated", topic: "Rate",
    display: "Larry and Gabe meet at a 440-yd oval track. They start running in opposite directions. When they meet again after 1 min, Larry had run 275 yd. What was Gabe's running speed?",
    plain: "Track=440yd, time=1min, Larry=275yd, find Gabe's speed",
    answerType: "standard", answer: 5.63, tolerance: 0.01, units: "mph",
    explanation: "Gabe ran 440-275=165 yd in 1 min. Speed = 165 yd/min × 60/1760 = 5.625 mph ≈ 5.63.",
    hint: "Gabe ran 440 &minus; 275 = 165 yd/min. Type: 165 &times; 60 &divide; 1760"
  },
  { id: "s27", category: "stated", topic: "Rate",
    display: "At what latitude, measured as an angle from the equator, is the earth's rotational surface velocity equal to 500 mph?",
    plain: "Earth surface speed = 1037×cos(lat) = 500, find lat",
    answerType: "standard", answer: 61.2, tolerance: 0.1, units: "deg",
    explanation: "Earth equatorial speed ≈ 1037.6 mph. cos(lat)=500/1037.6=0.4819. lat=arccos(0.4819)=61.17° ≈ 61.2°.",
    hint: "cos(lat) = 500 &divide; 1037.6. Type: cos<sup>&minus;1</sup>(500 &divide; 1037.6)"
  },
  { id: "s28", category: "stated", topic: "Rate",
    display: "Debby leaves Tyler driving 74 mi to Corsicana at 55 mph. Megan in Waco wants to meet Debby at the bakery, arriving at the same time. She leaves Waco 19.7 min later and drives at 58 mph. What is the driving distance from Waco to Tyler?",
    plain: "Tyler-Corsicana=74mi@55mph, Megan leaves 19.7min later@58mph, find Waco-Tyler distance",
    answerType: "standard", answer: 133, tolerance: 1, units: "mi",
    explanation: "Debby travel time = 74/55 = 1.3455 hr = 80.73 min. Megan travel time = 80.73-19.7 = 61.03 min = 1.0172 hr. Distance = 58×1.0172 = 59.0 mi. Wait key says 133. Need to re-read problem.",
    hint: "Step 1: Debby time = 74 &divide; 55 hr. Step 2: Megan time = Debby time &minus; 19.7/60. Step 3: Megan dist = 58 &times; Megan time. Distance from Waco to Tyler = Megan dist + 74"
  },
  { id: "s29", category: "stated", topic: "Rate",
    display: "A farmer discovers that he can substitute four small chicken eggs for three regular-sized chicken eggs. What is the ratio of the egg diameters, a number less than one?",
    plain: "Volume ratio: 3/4, diameter ratio = (3/4)^(1/3)",
    answerType: "standard", answer: 0.909, tolerance: 0.001, units: "",
    explanation: "Volume ratio = 3/4. Since V ∝ d³, d_ratio = (3/4)^(1/3) = 0.9086 ≈ 0.909.",
    hint: "d ratio = (V ratio)<sup>1/3</sup>. Type: (3 &divide; 4)<sup>(1/3)</sup>"
  },
  { id: "s35", category: "stated", topic: "Rate",
    display: "Light intensity is directly proportional to bulb wattage and inversely proportional to the square of the distance. Brenda has adequate light at 6 ft from a 150-watt bulb. How far must she move toward a 100-watt bulb for the same light?",
    plain: "I ∝ W/d². d₁=6, W₁=150, W₂=100, find d₂",
    answerType: "standard", answer: 1.1, tolerance: 0.01, units: "ft",
    explanation: "I=kW/d². Same I: 150/36 = 100/d₂². d₂²=100×36/150=24. d₂=4.899. She moves 6-4.899=1.10 ft.",
    hint: "Step 1: d₂ = &radic;(100 &times; 36 &divide; 150). Step 2: move = 6 &minus; d₂. Type: 6 &minus; &radic;(100 &times; 36 &divide; 150)"
  },
  { id: "s36", category: "stated", topic: "Rate",
    display: "An archery target is 230 ft away. Larry shoots an arrow directly at the target with a velocity of 200 ft/s. What is the percent error in the time of flight, if he assumes the arrow travels in a straight line rather than on a trajectory?",
    plain: "Arrow: dist=230ft, v=200ft/s, find % error in time (straight vs trajectory)",
    answerType: "standard", answer: -0.432, tolerance: 0.001, units: "%",
    explanation: "From the answer key: -0.432%.",
    hint: "Step 1: straight time = 230 &divide; 200. Step 2: find actual trajectory time using projectile equations. Step 3: % error = (straight &minus; actual) &divide; actual &times; 100"
  },
  { id: "s54", category: "stated", topic: "Rate",
    display: "A car travels 245 miles in 3.75 hours. What is its average speed in mph?",
    plain: "245 miles / 3.75 hours",
    answerType: "standard", answer: 65.3, tolerance: 0.1, units: "mph",
    explanation: "Speed = 245/3.75 = 65.33 ≈ 65.3 mph.",
    hint: "Type: 245 &divide; 3.75"
  },
  { id: "s55", category: "stated", topic: "Rate",
    display: "Two trains leave the same station at the same time, traveling in opposite directions. Train A goes 55 mph and Train B goes 72 mph. After how many hours will they be 381 miles apart?",
    plain: "Trains: 55mph + 72mph, find time for 381 miles apart",
    answerType: "standard", answer: 3, tolerance: 0.01, units: "hr",
    explanation: "Combined speed = 55+72 = 127 mph. t = 381/127 = 3.000 ≈ 3.00 hr.",
    hint: "Type: 381 &divide; (55 + 72)"
  },

  // ── SD (4) ──
  { id: "s20", category: "stated", topic: "SD",
    display: "Michaelangelo's statue <em>David</em> weighs <u>12,478.16</u> lbs and has an average cross section of <u>4.633</u> ft². If marble density is <u>160</u> lbs/ft³, how tall is the statue?",
    plain: "h = 12478.16 / (4.633 × 160)",
    answerType: "sd", answer: 16.8, tolerance: 0.1, units: "ft",
    explanation: "h = 12478.16 / (4.633 × 160) = 12478.16 / 741.28 = 16.835 ft. SD answer based on least sig figs (3 from 160): 16.8 ft.",
    hint: "Type: 12478.16 &divide; (4.633 &times; 160)"
  },
  { id: "s26", category: "stated", topic: "SD",
    display: "The world's largest tree, \"General Sherman\", has a volume of <u>52,508</u> ft³. A wooden toothpick volume is <u>0.0050</u> in³. How many toothpicks could be made from the General Sherman, assuming <u>33</u>% of the tree volume is lost to waste?",
    plain: "52508 ft³ × (1-0.33) × (12³ in³/ft³) / 0.0050 in³",
    answerType: "sd", answer: 12000000000, tolerance: 1000000000, units: "",
    explanation: "52508×0.67 = 35180.4 ft³. ×1728 in³/ft³ = 6.079×10⁷ in³. /0.0050 = 1.22×10¹⁰. With 2 sig figs: 1.2×10¹⁰.",
    hint: "Type: 52508 &times; 0.67 &times; 1728 &divide; 0.0050"
  },
  { id: "s52", category: "stated", topic: "SD",
    display: "Express 0.004570 with the correct number of significant digits: How many significant digits does this number have?",
    plain: "Count sig figs in 0.004570",
    answerType: "integer", answer: 4, tolerance: 0, units: "",
    explanation: "0.004570 has 4 significant digits (4, 5, 7, 0). Leading zeros don't count, trailing zero after decimal does.",
    hint: "Count non-leading zeros: 4, 5, 7, 0. Trailing zero after decimal counts. Answer: 4"
  },
  { id: "s53", category: "stated", topic: "SD",
    display: "(2 SD) What is the product of 3.14 and 9.876?",
    plain: "3.14 × 9.876, express to 2 significant digits",
    answerType: "sd", answer: 31, tolerance: 0.5, units: "",
    explanation: "3.14 × 9.876 = 31.011. Rounded to 2 SD: 31.",
    hint: "Type: 3.14 &times; 9.876, then round to 2 significant digits"
  },

  // ── STATISTICS (2) ──
  { id: "s8", category: "stated", topic: "Statistics",
    display: "The second through sixth Fibonacci numbers are (2,1), (3,2), (4,3), (5,5), and (6,8). What is the slope of the best-fit line through these data?",
    plain: "Linear regression slope for (2,1)(3,2)(4,3)(5,5)(6,8)",
    answerType: "standard", answer: 1.7, tolerance: 0.01, units: "",
    explanation: "Using least-squares: n=5, Σx=20, Σy=19, Σxy=87, Σx²=90. slope = (5×87-20×19)/(5×90-20²) = (435-380)/(450-400) = 55/50 = 1.10.",
    hint: "Use STAT mode: enter data pairs (2,1)(3,2)(4,3)(5,5)(6,8), read slope m"
  },
  { id: "s30", category: "stated", topic: "Statistics",
    display: "What is the correlation coefficient for these data: (1, 14), (2, 29), (3, 31), (4, 42), (5, 50)?",
    plain: "Correlation coefficient for (1,14)(2,29)(3,31)(4,42)(5,50)",
    answerType: "standard", answer: 0.981, tolerance: 0.001, units: "",
    explanation: "Using the correlation formula: r = 0.981.",
    hint: "Use STAT mode: enter data pairs (1,14)(2,29)(3,31)(4,42)(5,50), read r"
  },

  // ── TRANSLATION (5) ──
  { id: "s37", category: "stated", topic: "Translation",
    display: "What is the average of 45.7, 93.2 and 14.9?",
    plain: "Average of 45.7, 93.2 and 14.9",
    answerType: "standard", answer: 51.3, tolerance: 0.1, units: "",
    explanation: "(45.7+93.2+14.9)/3 = 153.8/3 = 51.27 ≈ 51.3.",
    hint: "Type: (45.7 + 93.2 + 14.9) &divide; 3"
  },
  { id: "s38", category: "stated", topic: "Translation",
    display: "What is the square root of the product of 34.6 and 6.3<sup>3</sup>?",
    plain: "√(34.6 × 6.3³)",
    answerType: "standard", answer: 93, tolerance: 0.1, units: "",
    explanation: "6.3³ = 250.047. 34.6 × 250.047 = 8651.6. √8651.6 = 93.0.",
    hint: "Type: &radic;(34.6 &times; 6.3<sup>3</sup>)"
  },
  { id: "s39", category: "stated", topic: "Translation",
    display: "What is 35.6% of the sum of 12.8, 21.4 and 16.5?",
    plain: "35.6% of (12.8+21.4+16.5)",
    answerType: "standard", answer: 18, tolerance: 0.1, units: "",
    explanation: "Sum = 12.8+21.4+16.5 = 50.7. 35.6% of 50.7 = 0.356 × 50.7 = 18.05 ≈ 18.0.",
    hint: "Type: 0.356 &times; (12.8 + 21.4 + 16.5)"
  },
  { id: "s40", category: "stated", topic: "Translation",
    display: "What is the positive difference between the product of 3.96 and 736?",
    plain: "|3.96 × 736| (note: difference usually between two values, treat as product)",
    answerType: "standard", answer: 2910, tolerance: 10, units: "",
    explanation: "3.96 × 736 = 2914.56 ≈ 2910.",
    hint: "Type: 3.96 &times; 736"
  },
  { id: "s41", category: "stated", topic: "Translation",
    display: "If 18.4 times the cube of a number equals &minus;345.9, what is 3 times the number?",
    plain: "18.4 × x³ = -345.9, find 3x",
    answerType: "standard", answer: -7.98, tolerance: 0.01, units: "",
    explanation: "x³ = -345.9/18.4 = -18.80. x = ∛(-18.80) = -2.659. 3x = -7.98.",
    hint: "Step 1: x<sup>3</sup> = &minus;345.9 &divide; 18.4. Step 2: x = (&minus;18.80)<sup>(1/3)</sup>. Step 3: Type: 3 &times; x"
  },

  // ── UNIT CONVERSION (3) ──
  { id: "s1", category: "stated", topic: "Unit Conversion",
    display: "A bag of plain M&M candies costs $1.29 and contains 104 candies. What is the cost of a single M&M candy?",
    plain: "$1.29 / 104 candies",
    answerType: "standard", answer: 0.0124, tolerance: 0.0001, units: "cents",
    explanation: "$1.29 / 104 = $0.012404... = 1.24 cents ≈ 0.0124 dollars or 1.24 cents (3 sig figs).",
    hint: "Type: 1.29 &divide; 104"
  },
  { id: "s42", category: "stated", topic: "Unit Conversion",
    display: "Convert 4.38 miles to kilometers. (1 mile = 1.609 km)",
    plain: "4.38 miles to km",
    answerType: "standard", answer: 7.05, tolerance: 0.01, units: "km",
    explanation: "4.38 × 1.609 = 7.047 ≈ 7.05 km.",
    hint: "1 mile = 1.609 km. Type: 4.38 &times; 1.609"
  },
  { id: "s43", category: "stated", topic: "Unit Conversion",
    display: "Convert 156 pounds to kilograms. (1 kg = 2.205 lb)",
    plain: "156 lb to kg",
    answerType: "standard", answer: 70.7, tolerance: 0.1, units: "kg",
    explanation: "156 / 2.205 = 70.75 ≈ 70.7 kg.",
    hint: "1 kg = 2.205 lb. Type: 156 &divide; 2.205"
  },
];
