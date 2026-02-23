// UIL Mathematics – Word Problems
const WORD_PROBLEMS = [

  // ── RATE / DISTANCE / TIME ──
  { id: "w1", topic: "Word Problems", question: "A car travels 180 miles in 3 hours. Its average speed is ______ mph.", choices: ["45", "50", "55", "60", "65"], answer: 3, explanation: "Speed = 180/3 = 60 mph." },
  { id: "w2", topic: "Word Problems", question: "Two trains leave the same station traveling in opposite directions at 50 mph and 70 mph. After how many hours are they 360 miles apart?", choices: ["2", "2.5", "3", "3.5", "4"], answer: 2, explanation: "Combined rate = 120 mph. Time = 360/120 = 3 hours." },
  { id: "w3", topic: "Word Problems", question: "A cyclist rides 12 miles upstream (against a 2 mph current) at a still-water speed of 10 mph. The trip takes ______ hours.", choices: ["1", "1.2", "1.5", "2", "3"], answer: 2, explanation: "Effective speed = 10 &minus; 2 = 8 mph. Time = 12/8 = 1.5 hours." },
  { id: "w4", topic: "Word Problems", question: "Alice drives at 60 mph and Bob drives at 40 mph. Alice leaves 1 hour after Bob. After how many hours of Alice&rsquo;s driving does she catch Bob?", choices: ["1", "1.5", "2", "2.5", "3"], answer: 2, explanation: "Bob&rsquo;s head start = 40 miles. 60t = 40 + 40t. 20t = 40. t = 2." },

  // ── WORK PROBLEMS ──
  { id: "w5", topic: "Word Problems", question: "Machine A fills a tank in 6 hours; Machine B fills it in 3 hours. Together they fill it in ______ hours.", choices: ["1", "1.5", "2", "2.5", "3"], answer: 2, explanation: "Combined rate = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2. Time = 2 hours." },
  { id: "w6", topic: "Word Problems", question: "It takes Pat 4 hours and Chris 12 hours to paint a room. Working together, they finish in ______ hours.", choices: ["2", "3", "4", "8", "16"], answer: 1, explanation: "1/4 + 1/12 = 3/12 + 1/12 = 4/12 = 1/3. Time = 3 hours." },
  { id: "w7", topic: "Word Problems", question: "Pump A empties a pool in 8 hours. Pump B fills it in 12 hours. If both run, the pool empties in ______ hours.", choices: ["12", "16", "20", "24", "48"], answer: 3, explanation: "Net drain rate = 1/8 &minus; 1/12 = 3/24 &minus; 2/24 = 1/24. Time = 24 hours." },

  // ── MIXTURE PROBLEMS ──
  { id: "w8", topic: "Word Problems", question: "How many liters of a 40% solution must be mixed with 10 liters of a 10% solution to get a 25% solution?", choices: ["6", "8", "10", "12", "15"], answer: 2, explanation: "0.40x + 0.10(10) = 0.25(x + 10). 0.40x + 1 = 0.25x + 2.5. 0.15x = 1.5. x = 10." },
  { id: "w9", topic: "Word Problems", question: "A grocer mixes cashews at $8/lb with peanuts at $3/lb to make 20 lb of mix at $5/lb. How many lb of cashews?", choices: ["6", "8", "10", "12", "14"], answer: 1, explanation: "8c + 3(20 &minus; c) = 100. 8c + 60 &minus; 3c = 100. 5c = 40. c = 8." },
  { id: "w10", topic: "Word Problems", question: "A 50-gallon tank is 80% full of a 30% salt solution. How many gallons of pure water must be added to make it 20% salt?", choices: ["10", "15", "20", "25", "30"], answer: 2, explanation: "Salt = 0.30 &times; 40 = 12 gal. After adding w gallons of water: 12/(40 + w) = 0.20. 40 + w = 60. w = 20." },

  // ── AGE PROBLEMS ──
  { id: "w11", topic: "Word Problems", question: "Tom is 3 times as old as his son. In 12 years, Tom will be twice as old. Tom&rsquo;s current age is ______.", choices: ["24", "30", "36", "42", "48"], answer: 2, explanation: "Let son = s, Tom = 3s. In 12 years: 3s + 12 = 2(s + 12). 3s + 12 = 2s + 24. s = 12. Tom = 36." },
  { id: "w12", topic: "Word Problems", question: "Maria is 5 years older than twice Ana&rsquo;s age. If their ages sum to 35, Ana is ______ years old.", choices: ["8", "9", "10", "11", "12"], answer: 2, explanation: "Maria = 2a + 5. (2a + 5) + a = 35. 3a = 30. a = 10." },

  // ── NUMBER THEORY / DIGIT PROBLEMS ──
  { id: "w13", topic: "Word Problems", question: "The sum of two consecutive odd integers is 56. The larger integer is ______.", choices: ["27", "29", "31", "33", "35"], answer: 1, explanation: "n + (n + 2) = 56. 2n = 54. n = 27. Larger = 29." },
  { id: "w14", topic: "Word Problems", question: "The product of two consecutive positive integers is 132. Their sum is ______.", choices: ["21", "22", "23", "24", "25"], answer: 2, explanation: "n(n+1) = 132. n = 11 (since 11 &times; 12 = 132). Sum = 23." },
  { id: "w15", topic: "Word Problems", question: "A two-digit number has digits summing to 11. If the digits are reversed, the new number is 27 more. The original number is ______.", choices: ["47", "56", "65", "74", "83"], answer: 0, explanation: "10a + b, a + b = 11, 10b + a = 10a + b + 27. 9b &minus; 9a = 27. b &minus; a = 3. With a + b = 11: a = 4, b = 7. Number = 47." },
  { id: "w16", topic: "Word Problems", question: "The sum of three consecutive integers is 123. The middle integer is ______.", choices: ["39", "40", "41", "42", "43"], answer: 2, explanation: "n + (n+1) + (n+2) = 123. 3n + 3 = 123. n = 40. Middle = 41." },

  // ── PERCENT PROBLEMS ──
  { id: "w17", topic: "Word Problems", question: "A shirt originally costs $80 and is discounted 25%. The sale price is ______.", choices: ["$55", "$58", "$60", "$64", "$70"], answer: 2, explanation: "Discount = 0.25 &times; 80 = 20. Sale price = 80 &minus; 20 = $60." },
  { id: "w18", topic: "Word Problems", question: "After a 20% increase, a stock is worth $72. Its original price was ______.", choices: ["$54", "$57.60", "$60", "$64", "$66"], answer: 2, explanation: "1.20x = 72. x = 60." },
  { id: "w19", topic: "Word Problems", question: "A population grows from 5000 to 6050 in one year. The percent increase is ______.", choices: ["15%", "17.5%", "20%", "21%", "25%"], answer: 3, explanation: "Increase = 1050. Percent = 1050/5000 = 0.21 = 21%." },

  // ── GEOMETRY WORD PROBLEMS ──
  { id: "w20", topic: "Word Problems", question: "A rectangular garden is twice as long as it is wide. If the perimeter is 60 m, the area is ______.", choices: ["100 m&sup2;", "150 m&sup2;", "200 m&sup2;", "250 m&sup2;", "300 m&sup2;"], answer: 2, explanation: "w + 2w = 30 (half perimeter). w = 10, l = 20. Area = 200." },
  { id: "w21", topic: "Word Problems", question: "A circular fountain has circumference 31.4 m. Its radius is approximately ______.", choices: ["4 m", "5 m", "6 m", "7 m", "10 m"], answer: 1, explanation: "C = 2&pi;r. r = 31.4/(2&pi;) &asymp; 31.4/6.28 = 5 m." },
  { id: "w22", topic: "Word Problems", question: "The length of a rectangle is 3 more than its width. If the area is 70, the width is ______.", choices: ["5", "6", "7", "8", "10"], answer: 2, explanation: "w(w + 3) = 70. w&sup2; + 3w &minus; 70 = 0. (w + 10)(w &minus; 7) = 0. w = 7." },

  // ── INTEREST & MONEY PROBLEMS ──
  { id: "w23", topic: "Word Problems", question: "$5000 is invested at 6% simple interest for 3 years. The interest earned is ______.", choices: ["$600", "$800", "$900", "$1000", "$1200"], answer: 2, explanation: "I = Prt = 5000(0.06)(3) = $900." },
  { id: "w24", topic: "Word Problems", question: "$2000 is invested at 5% compounded annually. After 2 years the total is ______.", choices: ["$2100", "$2200", "$2205", "$2210", "$2250"], answer: 2, explanation: "A = 2000(1.05)&sup2; = 2000(1.1025) = $2205." },
  { id: "w25", topic: "Word Problems", question: "A person has $10,000 split between two accounts earning 4% and 7%. If total interest for the year is $520, how much is in the 7% account?", choices: ["$2000", "$3000", "$4000", "$5000", "$6000"], answer: 2, explanation: "0.04(10000 &minus; x) + 0.07x = 520. 400 &minus; 0.04x + 0.07x = 520. 0.03x = 120. x = 4000." },

  // ── SEQUENCES IN CONTEXT ──
  { id: "w26", topic: "Word Problems", question: "A ball is dropped from 80 ft and bounces to 3/4 of its previous height each time. The height after the 3rd bounce is ______.", choices: ["27.5 ft", "30 ft", "33.75 ft", "40 ft", "45 ft"], answer: 2, explanation: "After 1st: 60. After 2nd: 45. After 3rd: 33.75 ft." },
  { id: "w27", topic: "Word Problems", question: "A salary starts at $40,000 and increases by 5% each year. After 3 years, the salary is approximately ______.", choices: ["$42,000", "$44,100", "$46,305", "$48,000", "$50,000"], answer: 2, explanation: "40000(1.05)&sup3; = 40000(1.157625) &asymp; $46,305." },

  // ── PROBABILITY IN CONTEXT ──
  { id: "w28", topic: "Word Problems", question: "A bag has 4 red, 3 blue, and 5 green marbles. P(drawing a blue marble) = ______.", choices: ["1/6", "1/4", "3/12", "5/12", "7/12"], answer: 1, explanation: "3 blue out of 12 total = 3/12 = 1/4." },
  { id: "w29", topic: "Word Problems", question: "If it rains 30% of days and a student forgets an umbrella 50% of the time, the probability of being caught in rain without an umbrella is ______.", choices: ["10%", "15%", "20%", "30%", "80%"], answer: 1, explanation: "P = 0.30 &times; 0.50 = 0.15 = 15%." },

  // ── PROPORTIONS / VARIATION ──
  { id: "w30", topic: "Word Problems", question: "y varies directly as x. If y = 12 when x = 4, then y = ______ when x = 7.", choices: ["15", "18", "21", "24", "28"], answer: 2, explanation: "y = kx. 12 = 4k, k = 3. y = 3(7) = 21." },
  { id: "w31", topic: "Word Problems", question: "y varies inversely as x. If y = 6 when x = 5, then y = ______ when x = 10.", choices: ["1", "2", "3", "4", "12"], answer: 2, explanation: "y = k/x. 6 = k/5, k = 30. y = 30/10 = 3." },
  { id: "w32", topic: "Word Problems", question: "If 8 workers can finish a job in 6 days, how many days will it take 12 workers?", choices: ["3", "4", "5", "8", "9"], answer: 1, explanation: "Worker-days = 48. 12 workers: 48/12 = 4 days." },

  // ── EXPONENTIAL GROWTH / DECAY ──
  { id: "w33", topic: "Word Problems", question: "A population doubles every 5 years. Starting at 1000, it will be ______ after 15 years.", choices: ["3000", "4000", "6000", "8000", "16000"], answer: 3, explanation: "15 years = 3 doublings. 1000 &times; 2&sup3; = 8000." },
  { id: "w34", topic: "Word Problems", question: "A radioactive substance has a half-life of 10 years. Starting with 200 g, how much remains after 30 years?", choices: ["12.5 g", "25 g", "50 g", "100 g", "150 g"], answer: 1, explanation: "30 years = 3 half-lives. 200/2&sup3; = 200/8 = 25 g." },

  // ── SYSTEMS IN CONTEXT ──
  { id: "w35", topic: "Word Problems", question: "Tickets cost $5 for adults and $3 for children. 120 tickets were sold for $480. How many adult tickets?", choices: ["40", "50", "60", "70", "80"], answer: 2, explanation: "5a + 3(120 &minus; a) = 480. 5a + 360 &minus; 3a = 480. 2a = 120. a = 60." },
  { id: "w36", topic: "Word Problems", question: "The sum of two numbers is 50 and their difference is 14. The larger number is ______.", choices: ["28", "30", "32", "34", "36"], answer: 2, explanation: "x + y = 50, x &minus; y = 14. 2x = 64, x = 32." },

  // ── ADDITIONAL WORD PROBLEMS ──
  { id: "w37", topic: "Word Problems", question: "A ladder 25 ft long leans against a wall. The base is 7 ft from the wall. How high does it reach?", choices: ["18 ft", "20 ft", "22 ft", "24 ft", "26 ft"], answer: 3, explanation: "h = &radic;(625 &minus; 49) = &radic;576 = 24 ft." },
  { id: "w38", topic: "Word Problems", question: "A store marks up items 40% over cost. If the selling price is $84, the cost was ______.", choices: ["$50", "$55", "$58", "$60", "$64"], answer: 3, explanation: "1.40c = 84. c = 60." },
  { id: "w39", topic: "Word Problems", question: "A tank can be filled by Pipe A in 10 hours and emptied by Pipe B in 15 hours. Starting empty with both open, the tank fills in ______ hours.", choices: ["20", "25", "30", "35", "40"], answer: 2, explanation: "Net fill rate = 1/10 &minus; 1/15 = 3/30 &minus; 2/30 = 1/30. Time = 30 hours." },
  { id: "w40", topic: "Word Problems", question: "An airplane flies 600 miles with a tailwind of 50 mph in 2 hours. The plane&rsquo;s still-air speed is ______.", choices: ["200 mph", "250 mph", "275 mph", "300 mph", "350 mph"], answer: 1, explanation: "600/2 = 300 mph ground speed. Still-air = 300 &minus; 50 = 250 mph." },
];
