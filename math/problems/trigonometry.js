// UIL Mathematics – Trigonometry Problems
const TRIGONOMETRY_PROBLEMS = [

  // ── BASIC TRIG VALUES ──
  { id: "t1", topic: "Trigonometry", question: "sin 30&deg; + cos 60&deg; = ______.", choices: ["0", "1/2", "1", "&radic;3/2", "&radic;3"], answer: 2, explanation: "sin 30&deg; = 1/2, cos 60&deg; = 1/2. Sum = 1." },
  { id: "t2", topic: "Trigonometry", question: "tan 45&deg; + tan 135&deg; = ______.", choices: ["&minus;2", "&minus;1", "0", "1", "2"], answer: 2, explanation: "tan 45&deg; = 1, tan 135&deg; = &minus;1. Sum = 0." },
  { id: "t3", topic: "Trigonometry", question: "cos 120&deg; = ______.", choices: ["&minus;1", "&minus;&radic;3/2", "&minus;1/2", "1/2", "&radic;3/2"], answer: 2, explanation: "cos 120&deg; = &minus;cos 60&deg; = &minus;1/2." },
  { id: "t4", topic: "Trigonometry", question: "sin 210&deg; = ______.", choices: ["&minus;1", "&minus;&radic;3/2", "&minus;1/2", "1/2", "&radic;3/2"], answer: 2, explanation: "210&deg; is in Q3. sin 210&deg; = &minus;sin 30&deg; = &minus;1/2." },
  { id: "t5", topic: "Trigonometry", question: "sec 60&deg; = ______.", choices: ["1/2", "1", "&radic;2", "2", "2&radic;3/3"], answer: 3, explanation: "sec 60&deg; = 1/cos 60&deg; = 1/(1/2) = 2." },
  { id: "t6", topic: "Trigonometry", question: "cot 30&deg; = ______.", choices: ["1/&radic;3", "1", "&radic;3", "2", "2&radic;3"], answer: 2, explanation: "cot 30&deg; = cos 30&deg;/sin 30&deg; = (&radic;3/2)/(1/2) = &radic;3." },

  // ── TRIG IDENTITIES ──
  { id: "t7", topic: "Trigonometry", question: "If sin &theta; = 3/5 and &theta; is in Q1, then cos &theta; = ______.", choices: ["1/5", "2/5", "3/5", "4/5", "&radic;2/2"], answer: 3, explanation: "cos &theta; = &radic;(1 &minus; 9/25) = &radic;(16/25) = 4/5." },
  { id: "t8", topic: "Trigonometry", question: "If tan &theta; = 5/12 and &theta; is in Q1, then sin &theta; = ______.", choices: ["5/12", "5/13", "12/13", "5/17", "12/17"], answer: 1, explanation: "Hypotenuse = &radic;(25 + 144) = 13. sin &theta; = 5/13." },
  { id: "t9", topic: "Trigonometry", question: "sin&sup2; 40&deg; + cos&sup2; 40&deg; = ______.", choices: ["0", "sin 80&deg;", "cos 80&deg;", "1", "2"], answer: 3, explanation: "Pythagorean identity: sin&sup2;&theta; + cos&sup2;&theta; = 1 for all &theta;." },
  { id: "t10", topic: "Trigonometry", question: "If sin &alpha; = 4/5 and cos &beta; = 5/13 (both in Q1), then sin(&alpha; + &beta;) = ______.", choices: ["33/65", "56/65", "63/65", "16/65", "48/65"], answer: 1, explanation: "cos &alpha; = 3/5, sin &beta; = 12/13. sin(&alpha;+&beta;) = (4/5)(5/13) + (3/5)(12/13) = 20/65 + 36/65 = 56/65." },
  { id: "t11", topic: "Trigonometry", question: "If sin &alpha; = 4/5 and cos &beta; = 5/13 (both in Q1), then cos(&alpha; + &beta;) = ______.", choices: ["&minus;33/65", "&minus;16/65", "16/65", "33/65", "56/65"], answer: 0, explanation: "cos &alpha; = 3/5, sin &beta; = 12/13. cos(&alpha;+&beta;) = cos&alpha; cos&beta; &minus; sin&alpha; sin&beta; = (3/5)(5/13) &minus; (4/5)(12/13) = 15/65 &minus; 48/65 = &minus;33/65." },
  { id: "t12", topic: "Trigonometry", question: "2 sin 15&deg; cos 15&deg; = ______.", choices: ["1/4", "1/2", "&radic;2/2", "&radic;3/2", "1"], answer: 1, explanation: "By double-angle: 2 sin &theta; cos &theta; = sin 2&theta;. So 2 sin 15&deg; cos 15&deg; = sin 30&deg; = 1/2." },
  { id: "t13", topic: "Trigonometry", question: "cos&sup2; 75&deg; &minus; sin&sup2; 75&deg; = ______.", choices: ["&minus;&radic;3/2", "&minus;1/2", "0", "1/2", "&radic;3/2"], answer: 0, explanation: "cos&sup2;&theta; &minus; sin&sup2;&theta; = cos 2&theta;. cos 150&deg; = &minus;&radic;3/2." },

  // ── LAW OF SINES / LAW OF COSINES ──
  { id: "t14", topic: "Trigonometry", question: "In &triangle;ABC, a = 8, B = 30&deg;, C = 45&deg;. Then A = ______.", choices: ["95&deg;", "100&deg;", "105&deg;", "110&deg;", "115&deg;"], answer: 2, explanation: "A = 180&deg; &minus; 30&deg; &minus; 45&deg; = 105&deg;." },
  { id: "t15", topic: "Trigonometry", question: "In &triangle;ABC, a = 7, b = 8, C = 60&deg;. Find c&sup2;.", choices: ["49", "57", "64", "89", "113"], answer: 1, explanation: "c&sup2; = a&sup2; + b&sup2; &minus; 2ab cos C = 49 + 64 &minus; 2(7)(8)(1/2) = 113 &minus; 56 = 57." },
  { id: "t16", topic: "Trigonometry", question: "In &triangle;ABC, a = 10, b = 10, C = 120&deg;. Find c.", choices: ["10", "10&radic;2", "10&radic;3", "15", "20"], answer: 2, explanation: "c&sup2; = 100 + 100 &minus; 2(100)cos 120&deg; = 200 &minus; 200(&minus;1/2) = 300. c = 10&radic;3." },
  { id: "t17", topic: "Trigonometry", question: "In &triangle;ABC, a = 6, A = 30&deg;, B = 45&deg;. By the Law of Sines, b = ______.", choices: ["3&radic;2", "6&radic;2", "6&radic;3", "6", "3&radic;6"], answer: 1, explanation: "a/sin A = b/sin B. 6/sin 30&deg; = b/sin 45&deg;. 12 = b/(&radic;2/2). b = 6&radic;2." },
  { id: "t18", topic: "Trigonometry", question: "In &triangle;ABC, a = 5, b = 7, c = 8. Find cos C.", choices: ["&minus;1/7", "0", "1/7", "1/5", "2/7"], answer: 2, explanation: "cos C = (a&sup2; + b&sup2; &minus; c&sup2;)/(2ab) = (25 + 49 &minus; 64)/70 = 10/70 = 1/7." },

  // ── INVERSE TRIG ──
  { id: "t19", topic: "Trigonometry", question: "arctan 1 = ______ (in degrees).", choices: ["30&deg;", "45&deg;", "60&deg;", "90&deg;", "135&deg;"], answer: 1, explanation: "tan 45&deg; = 1, so arctan 1 = 45&deg;." },
  { id: "t20", topic: "Trigonometry", question: "arcsin(&minus;1/2) = ______ (in degrees).", choices: ["&minus;60&deg;", "&minus;30&deg;", "30&deg;", "150&deg;", "210&deg;"], answer: 1, explanation: "sin(&minus;30&deg;) = &minus;1/2, and &minus;30&deg; is in [&minus;90&deg;, 90&deg;]. So arcsin(&minus;1/2) = &minus;30&deg;." },
  { id: "t21", topic: "Trigonometry", question: "cos(arctan 3/4) = ______.", choices: ["3/4", "3/5", "4/5", "5/4", "5/3"], answer: 2, explanation: "If tan &theta; = 3/4, the hypotenuse = 5. cos &theta; = 4/5." },

  // ── UNIT CIRCLE & RADIANS ──
  { id: "t22", topic: "Trigonometry", question: "Convert 5&pi;/6 radians to degrees.", choices: ["120&deg;", "135&deg;", "150&deg;", "160&deg;", "170&deg;"], answer: 2, explanation: "5&pi;/6 &times; 180/&pi; = 150&deg;." },
  { id: "t23", topic: "Trigonometry", question: "Convert 225&deg; to radians.", choices: ["3&pi;/4", "&pi;", "5&pi;/4", "3&pi;/2", "7&pi;/4"], answer: 2, explanation: "225 &times; &pi;/180 = 5&pi;/4." },
  { id: "t24", topic: "Trigonometry", question: "sin(3&pi;/4) = ______.", choices: ["&minus;&radic;2/2", "&minus;1/2", "1/2", "&radic;2/2", "&radic;3/2"], answer: 3, explanation: "3&pi;/4 = 135&deg; is in Q2. sin 135&deg; = sin 45&deg; = &radic;2/2." },
  { id: "t25", topic: "Trigonometry", question: "tan(5&pi;/3) = ______.", choices: ["&minus;&radic;3", "&minus;1", "0", "1", "&radic;3"], answer: 0, explanation: "5&pi;/3 = 300&deg; is in Q4. Reference angle = 60&deg;. tan 300&deg; = &minus;tan 60&deg; = &minus;&radic;3." },

  // ── TRIG EQUATIONS ──
  { id: "t26", topic: "Trigonometry", question: "How many solutions does 2 sin x = 1 have on [0&deg;, 360&deg;)?", choices: ["0", "1", "2", "3", "4"], answer: 2, explanation: "sin x = 1/2. x = 30&deg; or 150&deg;. Two solutions." },
  { id: "t27", topic: "Trigonometry", question: "The general solution of cos x = 0 is x = ______ (n an integer).", choices: ["n&pi;", "2n&pi;", "&pi;/2 + n&pi;", "&pi;/2 + 2n&pi;", "&pi;/4 + n&pi;/2"], answer: 2, explanation: "cos x = 0 at x = 90&deg;, 270&deg;, &hellip; which is &pi;/2 + n&pi;." },
  { id: "t28", topic: "Trigonometry", question: "How many solutions does sin&sup2; x &minus; sin x = 0 have on [0, 2&pi;)?", choices: ["1", "2", "3", "4", "5"], answer: 2, explanation: "sin x(sin x &minus; 1) = 0. sin x = 0: x = 0, &pi;. sin x = 1: x = &pi;/2. Three solutions." },
  { id: "t29", topic: "Trigonometry", question: "On [0&deg;, 360&deg;), how many solutions does 2 cos&sup2; x &minus; 3 cos x + 1 = 0 have?", choices: ["1", "2", "3", "4", "5"], answer: 2, explanation: "Factor: (2 cos x &minus; 1)(cos x &minus; 1) = 0. cos x = 1/2: x = 60&deg;, 300&deg;. cos x = 1: x = 0&deg;. Three solutions." },

  // ── GRAPHS & AMPLITUDE/PERIOD ──
  { id: "t30", topic: "Trigonometry", question: "The function y = 3 sin(2x) has amplitude ______ and period ______.", choices: ["3, &pi;", "3, 2&pi;", "2, &pi;", "6, &pi;", "3, 4&pi;"], answer: 0, explanation: "Amplitude = |3| = 3. Period = 2&pi;/2 = &pi;." },
  { id: "t31", topic: "Trigonometry", question: "The period of y = tan(x/3) is ______.", choices: ["&pi;/3", "&pi;", "3&pi;", "6&pi;", "2&pi;/3"], answer: 2, explanation: "Period of tan(bx) = &pi;/|b|. Here b = 1/3, so period = 3&pi;." },
  { id: "t32", topic: "Trigonometry", question: "The phase shift of y = 2 cos(3x &minus; &pi;) is ______.", choices: ["&minus;&pi;", "&minus;&pi;/3", "&pi;/3", "&pi;", "3&pi;"], answer: 2, explanation: "y = 2 cos(3(x &minus; &pi;/3)). Phase shift = &pi;/3 to the right." },
  { id: "t33", topic: "Trigonometry", question: "The range of y = 4 sin x + 1 is ______.", choices: ["[&minus;4, 4]", "[&minus;3, 5]", "[&minus;5, 3]", "[0, 5]", "[1, 5]"], answer: 1, explanation: "sin x ranges [&minus;1, 1]. So 4 sin x + 1 ranges [&minus;3, 5]." },

  // ── AREA WITH TRIG ──
  { id: "t34", topic: "Trigonometry", question: "The area of &triangle;ABC with b = 10, c = 12, and A = 30&deg; is ______.", choices: ["20", "25", "30", "40", "60"], answer: 2, explanation: "Area = (1/2)(b)(c) sin A = (1/2)(10)(12)(1/2) = 30." },
  { id: "t35", topic: "Trigonometry", question: "In &triangle;ABC with all three sides known: a = 13, b = 14, c = 15, the area is ______.", choices: ["72", "78", "84", "90", "96"], answer: 2, explanation: "s = 21. Area = &radic;(21 &times; 8 &times; 7 &times; 6) = &radic;7056 = 84." },

  // ── ADDITIONAL ──
  { id: "t36", topic: "Trigonometry", question: "sin(&pi;/6) + cos(&pi;/3) + tan(&pi;/4) = ______.", choices: ["1", "3/2", "2", "5/2", "3"], answer: 2, explanation: "sin 30&deg; + cos 60&deg; + tan 45&deg; = 1/2 + 1/2 + 1 = 2." },
  { id: "t37", topic: "Trigonometry", question: "If sin &theta; = &minus;3/5 and &theta; is in Q3, then tan &theta; = ______.", choices: ["&minus;3/4", "&minus;4/3", "3/4", "4/3", "3/5"], answer: 2, explanation: "In Q3: sin &lt; 0, cos &lt; 0. cos &theta; = &minus;4/5. tan &theta; = (&minus;3/5)/(&minus;4/5) = 3/4." },
  { id: "t38", topic: "Trigonometry", question: "The exact value of sin 75&deg; is ______.", choices: ["(&radic;6 + &radic;2)/4", "(&radic;6 &minus; &radic;2)/4", "(&radic;3 + 1)/4", "(1 + &radic;3)/2", "&radic;3/2"], answer: 0, explanation: "sin 75&deg; = sin(45&deg; + 30&deg;) = sin 45 cos 30 + cos 45 sin 30 = (&radic;2/2)(&radic;3/2) + (&radic;2/2)(1/2) = (&radic;6 + &radic;2)/4." },
  { id: "t39", topic: "Trigonometry", question: "If csc &theta; = 13/5, then cos &theta; = ______ (Q1).", choices: ["5/13", "8/13", "12/13", "5/12", "12/5"], answer: 2, explanation: "sin &theta; = 5/13. cos &theta; = &radic;(1 &minus; 25/169) = &radic;(144/169) = 12/13." },
  { id: "t40", topic: "Trigonometry", question: "sin 0&deg; + sin 90&deg; + sin 180&deg; + sin 270&deg; = ______.", choices: ["&minus;2", "&minus;1", "0", "1", "2"], answer: 2, explanation: "0 + 1 + 0 + (&minus;1) = 0." },
];
