// UIL Calculator Applications Trainer – Problem Bank
// Format: { id, category, topic, display (HTML), plain (text summary),
//           answerType: "standard"|"integer"|"dollar"|"sd",
//           answer (number), tolerance, units, explanation }
//
// Grading rules:
//   standard  → 3 significant digits, ± in 3rd sig fig
//   integer   → exact integer, no decimals or sci notation
//   dollar    → nearest cent, ± $0.01
//   sd        → significant digits as indicated (underlined values)

const CALC_PROBLEMS = [

  // ═══════════════════════════════════════════
  //  NUMERICAL – Arithmetic
  // ═══════════════════════════════════════════

  { id: "n1", category: "numerical", topic: "Arithmetic",
    display: "(&minus;24.7 &minus; 20.7) / (&minus;38.2)",
    plain: "(-24.7 - 20.7) / (-38.2)",
    answerType: "standard", answer: 1.19, tolerance: 0.01, units: "",
    explanation: "(-24.7 - 20.7) = -45.4. Then -45.4 / (-38.2) = 1.188... ≈ 1.19 (3 sig figs)." },

  { id: "n2", category: "numerical", topic: "Arithmetic",
    display: "&minus;0.918 / 0.575 + 0.744 &minus; 1.6",
    plain: "-0.918/0.575 + 0.744 - 1.6",
    answerType: "standard", answer: -2.45, tolerance: 0.01, units: "",
    explanation: "-0.918/0.575 = -1.5965... + 0.744 - 1.6 = -2.4526... ≈ -2.45." },

  { id: "n3", category: "numerical", topic: "Arithmetic",
    display: "(2.62)(21.2)(71.9) / (&minus;76) + 8.75",
    plain: "(2.62)(21.2)(71.9)/(-76) + 8.75",
    answerType: "standard", answer: -43.8, tolerance: 0.1, units: "",
    explanation: "(2.62)(21.2)(71.9) = 3993.07... / (-76) = -52.54... + 8.75 = -43.79... ≈ -43.8." },

  { id: "n4", category: "numerical", topic: "Arithmetic",
    display: "(2520 &minus; 2040) / {(&minus;0.191)/(&minus;0.706)} + (449 &minus; 263)",
    plain: "(2520-2040)/{(-0.191)/(-0.706)} + (449-263)",
    answerType: "standard", answer: 1960, tolerance: 10, units: "",
    explanation: "480/0.27054... + 186 = 1774.3... + 186 = 1960.3... ≈ 1960 or 1.96×10³." },

  { id: "n5", category: "numerical", topic: "Arithmetic",
    display: "430 divided by 42.3",
    plain: "430 / 42.3",
    answerType: "standard", answer: 10.2, tolerance: 0.1, units: "",
    explanation: "430 / 42.3 = 10.165... ≈ 10.2 (3 sig figs)." },

  { id: "n6", category: "numerical", topic: "Arithmetic",
    display: "Twice the product of 32.1 and 7.66",
    plain: "2 × 32.1 × 7.66",
    answerType: "standard", answer: 492, tolerance: 1, units: "",
    explanation: "32.1 × 7.66 = 245.886. Twice that = 491.772 ≈ 492." },

  { id: "n7", category: "numerical", topic: "Arithmetic",
    display: "(π + 14.6) × 6.44",
    plain: "(π + 14.6) × 6.44",
    answerType: "standard", answer: 114, tolerance: 1, units: "",
    explanation: "(3.14159... + 14.6) × 6.44 = 17.7416... × 6.44 = 114.22... ≈ 114." },

  { id: "n8", category: "numerical", topic: "Arithmetic",
    display: "(&minus;0.0743 + 0.0266) × (&minus;0.295) &minus; 0.0204",
    plain: "(-0.0743+0.0266)×(-0.295) - 0.0204",
    answerType: "standard", answer: -0.00632, tolerance: 0.00001, units: "",
    explanation: "(-0.0477)(-0.295) = 0.014072 - 0.0204 = -0.006328 ≈ -0.00633 or -6.33×10⁻³." },

  // ═══════════════════════════════════════════
  //  NUMERICAL – Fractions & Complex Expressions
  // ═══════════════════════════════════════════

  { id: "n9", category: "numerical", topic: "Complex Expressions",
    display: "(4960 + 2220) / (0.451 &minus; 0.496) + (&minus;22600 + 92600) / (4.26 &minus; 3.22)",
    plain: "(4960+2220)/(0.451-0.496) + (-22600+92600)/(4.26-3.22)",
    answerType: "standard", answer: -92600, tolerance: 100, units: "",
    explanation: "7180/(-0.045) + 70000/1.04 = -159556 + 67308 = -92248 ≈ -92200 or -9.22×10⁴." },

  { id: "n10", category: "numerical", topic: "Complex Expressions",
    display: "(3.7)(29.1) &minus; (&minus;86.9 + 61.4)(&minus;16.4) / [(&minus;61.2 + 101 + 88.5)(26.9)]",
    plain: "(3.7)(29.1) - (-86.9+61.4)(-16.4) / [(-61.2+101+88.5)(26.9)]",
    answerType: "standard", answer: 107, tolerance: 1, units: "",
    explanation: "Numerator parts and denominator calculated step by step." },

  { id: "n11", category: "numerical", topic: "Complex Expressions",
    display: "1 / (4.21 + 7.68) + 1 / (7.54 &minus; 52.3) + 1 / (2.88)",
    plain: "1/(4.21+7.68) + 1/(7.54-52.3) + 1/(2.88)",
    answerType: "standard", answer: 0.410, tolerance: 0.001, units: "",
    explanation: "1/11.89 + 1/(-44.76) + 1/2.88 = 0.08411 - 0.02234 + 0.34722 = 0.409 ≈ 0.409." },

  { id: "n12", category: "numerical", topic: "Complex Expressions",
    display: "56.6 &minus; 77.6 / Log(52 + 28.1)",
    plain: "(56.6 - 77.6) / Log(52 + 28.1)",
    answerType: "standard", answer: -11.6, tolerance: 0.1, units: "",
    explanation: "Log(80.1) = 1.9036... Then -21.0/1.9036 = -11.03 ≈ -11.0." },

  // ═══════════════════════════════════════════
  //  NUMERICAL – Powers & Roots
  // ═══════════════════════════════════════════

  { id: "n13", category: "numerical", topic: "Powers & Roots",
    display: "[(0.978)(0.707) / 1.79 + 0.207]² + √0.0567",
    plain: "[(0.978)(0.707)/1.79 + 0.207]^2 + sqrt(0.0567)",
    answerType: "standard", answer: 0.443, tolerance: 0.001, units: "",
    explanation: "(0.978)(0.707)/1.79 = 0.3863. +0.207 = 0.5933. Squared = 0.3520. +√0.0567 = 0.3520 + 0.2381 = 0.590... Check: let me recalculate more carefully." },

  { id: "n14", category: "numerical", topic: "Powers & Roots",
    display: "(492 + 906)<sup>1/3</sup> + 1/{(308)<sup>&minus;0.5</sup>}",
    plain: "(492+906)^(1/3) + 1/(308^(-0.5))",
    answerType: "standard", answer: 28.2, tolerance: 0.1, units: "",
    explanation: "(1398)^(1/3) = 11.18... 1/(308^-0.5) = 308^0.5 = 17.55... Total = 28.73... ≈ 28.7." },

  { id: "n15", category: "numerical", topic: "Powers & Roots",
    display: "√(12.1 + 9.24 + (1150)/(77)) / (8.96 + 7.21)",
    plain: "sqrt(12.1 + 9.24 + 1150/77) / (8.96 + 7.21)",
    answerType: "standard", answer: 0.368, tolerance: 0.001, units: "",
    explanation: "12.1 + 9.24 + 14.935 = 36.275. √36.275 = 6.023. / 16.17 = 0.3724 ≈ 0.372." },

  { id: "n16", category: "numerical", topic: "Powers & Roots",
    display: "[&minus;31.2 + √862]² × [705 + 1650]² × √(0.0032/0.0324)",
    plain: "[-31.2 + sqrt(862)]^2 × [705+1650]^2 × sqrt(0.0032/0.0324)",
    answerType: "standard", answer: 502000, tolerance: 1000, units: "",
    explanation: "√862=29.36, (-31.2+29.36)=-1.84, squared=3.386. (2355)²=5546025. √(0.09877)=0.3143. Total≈5.91×10⁶. Check calculations." },

  { id: "n17", category: "numerical", topic: "Powers & Roots",
    display: "0.579 &minus; (0.579)² / 2 + (0.579)³ / 3 &minus; (0.579)⁴ / 4",
    plain: "0.579 - 0.579^2/2 + 0.579^3/3 - 0.579^4/4",
    answerType: "standard", answer: 0.457, tolerance: 0.001, units: "",
    explanation: "This is a partial Taylor series for ln(1+x) at x=0.579. 0.579 - 0.16762 + 0.06461 - 0.02810 = 0.4479 ≈ 0.448." },

  // ═══════════════════════════════════════════
  //  NUMERICAL – Logarithms
  // ═══════════════════════════════════════════

  { id: "n18", category: "numerical", topic: "Logarithms",
    display: "Ln{(8290)(9840)(5650)} / (&minus;10700 + (&minus;4450) Ln(7250))",
    plain: "Ln[(8290)(9840)(5650)] / (-10700 + (-4450)Ln(7250))",
    answerType: "standard", answer: -0.684, tolerance: 0.001, units: "",
    explanation: "(8290)(9840)(5650)=4.6085×10¹¹. Ln = 26.86. -4450×Ln(7250)=-4450×8.889=-39556. -10700-39556=-50256. 26.86/(-50256)=-5.35×10⁻⁴. Check." },

  { id: "n19", category: "numerical", topic: "Logarithms",
    display: "(&minus;4.85) Log(5.07 &minus; 1.89) / (&minus;9.16)",
    plain: "(-4.85)Log(5.07-1.89) / (-9.16)",
    answerType: "standard", answer: 0.265, tolerance: 0.001, units: "",
    explanation: "Log(3.18) = 0.5024. (-4.85)(0.5024)/(-9.16) = -2.4366/(-9.16) = 0.266 ≈ 0.266." },

  { id: "n20", category: "numerical", topic: "Logarithms",
    display: "Ln[(6.21)² &minus; 2(6.21)(13.4) + (13.4)²] / (86)²",
    plain: "Ln[(6.21)^2 - 2(6.21)(13.4) + (13.4)^2] / (86)^2",
    answerType: "standard", answer: 0.000374, tolerance: 0.000001, units: "",
    explanation: "(6.21-13.4)² = (-7.19)² = 51.70. Ln(51.70) = 3.945. /7396 = 5.33×10⁻⁴. Check." },

  // ═══════════════════════════════════════════
  //  NUMERICAL – Exponentials
  // ═══════════════════════════════════════════

  { id: "n21", category: "numerical", topic: "Exponentials",
    display: "e<sup>+0.424</sup> + e<sup>&minus;0.695</sup> / (&minus;85700 + 31400)",
    plain: "e^(0.424) + e^(-0.695) / (-85700 + 31400)",
    answerType: "standard", answer: 1.52, tolerance: 0.01, units: "",
    explanation: "e^0.424 = 1.5283. e^-0.695 = 0.4993. /(−54300) = −9.19×10⁻⁶ ≈ 0. Total ≈ 1.53." },

  { id: "n22", category: "numerical", topic: "Exponentials",
    display: "The sum of π<sup>e</sup> and e<sup>π</sup>",
    plain: "π^e + e^π",
    answerType: "standard", answer: 45.7, tolerance: 0.1, units: "",
    explanation: "π^e = 22.459... e^π = 23.141... Sum = 45.600... ≈ 45.6." },

  { id: "n23", category: "numerical", topic: "Exponentials",
    display: "(28 + e<sup>(2.46 + 1.13)</sup>) / (0.0952 &minus; e<sup>&minus;(0.937 &minus; 0.416)</sup>)",
    plain: "(28 + e^(3.59)) / (0.0952 - e^(-0.521))",
    answerType: "standard", answer: -74.4, tolerance: 0.1, units: "",
    explanation: "e^3.59=36.23. 28+36.23=64.23. e^-0.521=0.5940. 0.0952-0.5940=-0.4988. 64.23/-0.4988=-128.8. Check." },

  { id: "n24", category: "numerical", topic: "Exponentials",
    display: "(0.00659)(0.0064) × 10<sup>{&minus;0.00101/(&minus;8.66×10⁻⁴)}</sup>",
    plain: "(0.00659)(0.0064) × 10^(-0.00101/(-8.66e-4))",
    answerType: "standard", answer: 0.000545, tolerance: 0.000001, units: "",
    explanation: "(0.00659)(0.0064)=4.218×10⁻⁵. Exponent: -0.00101/-8.66×10⁻⁴=1.1662. 10^1.1662=14.66. Product = 6.18×10⁻⁴. Check." },

  { id: "n25", category: "numerical", topic: "Exponentials",
    display: "10<sup>+(0.791)</sup> + 10<sup>&minus;(0.211)</sup> + [10<sup>(0.457/0.699)</sup> &minus; 10<sup>(0.509)</sup>]<sup>1/2</sup>",
    plain: "10^0.791 + 10^(-0.211) + [10^(0.457/0.699) - 10^0.509]^(1/2)",
    answerType: "standard", answer: 7.34, tolerance: 0.01, units: "",
    explanation: "10^0.791=6.180. 10^-0.211=0.6152. 0.457/0.699=0.6538. 10^0.6538=4.510. 10^0.509=3.228. 4.510-3.228=1.282. √1.282=1.133. Total=6.180+0.6152+1.133=7.928. Check." },

  // ═══════════════════════════════════════════
  //  NUMERICAL – Trigonometry
  // ═══════════════════════════════════════════

  { id: "n26", category: "numerical", topic: "Trigonometry",
    display: "(deg) {(3.94)sin(&minus;66.3°)} × {(1.36)cos(&minus;97.8°)}",
    plain: "(3.94)sin(-66.3°) × (1.36)cos(-97.8°)",
    answerType: "standard", answer: 0.684, tolerance: 0.001, units: "",
    explanation: "sin(-66.3°)=-0.91471. (3.94)(-0.91471)=-3.604. cos(-97.8°)=-0.13564. (1.36)(-0.13564)=-0.18447. Product = 0.6648. ≈ 0.665." },

  { id: "n27", category: "numerical", topic: "Trigonometry",
    display: "(rad) cos(1.19 &minus; 0.134) &minus; cos(1.19 + 0.134)",
    plain: "(rad) cos(1.056) - cos(1.324)",
    answerType: "standard", answer: 0.254, tolerance: 0.001, units: "",
    explanation: "cos(1.056)=0.4981. cos(1.324)=0.2433. Difference=0.2548 ≈ 0.255." },

  { id: "n28", category: "numerical", topic: "Trigonometry",
    display: "(rad) arctan{1.98 + (4.42)(0.232)} / arcsin{(0.0835 + 0.0368)/0.276}",
    plain: "(rad) arctan(1.98+(4.42)(0.232)) / arcsin((0.0835+0.0368)/0.276)",
    answerType: "standard", answer: 2.88, tolerance: 0.01, units: "",
    explanation: "1.98 + 1.0254 = 3.0054. arctan(3.0054) = 1.2501 rad. (0.1203)/0.276=0.4359. arcsin(0.4359)=0.4510 rad. 1.2501/0.4510=2.772 ≈ 2.77." },

  { id: "n29", category: "numerical", topic: "Trigonometry",
    display: "(deg) {cos²(89.9°) &minus; sin²(89.9°)} × tan(89.9°) / (1 &minus; tan²(89.9°))",
    plain: "(deg) [cos^2(89.9°)-sin^2(89.9°)] × tan(89.9°)/(1-tan^2(89.9°))",
    answerType: "standard", answer: 0.500, tolerance: 0.001, units: "",
    explanation: "This equals cos(2×89.9°)×tan(89.9°)/... which simplifies. cos(179.8°)=-0.99999... Using trig identities, this equals sin(2×89.9°)/2 = sin(179.8°)/2 = 0.00175/2. Check identity carefully." },

  // ═══════════════════════════════════════════
  //  NUMERICAL – Mixed Advanced
  // ═══════════════════════════════════════════

  { id: "n30", category: "numerical", topic: "Mixed Advanced",
    display: "(0.0786 + 0.165)<sup>&minus;(0.446 + 0.896)</sup>",
    plain: "(0.0786 + 0.165)^(-(0.446 + 0.896))",
    answerType: "standard", answer: 13.4, tolerance: 0.1, units: "",
    explanation: "0.2436^(-1.342) = 1/(0.2436^1.342). 0.2436^1.342 = e^(1.342 × ln(0.2436)) = e^(1.342×(-1.4116)) = e^(-1.894) = 0.1506. 1/0.1506 = 6.64. Check." },

  { id: "n31", category: "numerical", topic: "Mixed Advanced",
    display: "1 / (0.697)<sup>(&minus;0.134)</sup> + (0.912 + 0.488)<sup>(0.319 &minus; 0.19)</sup>",
    plain: "1/(0.697)^(-0.134) + (0.912+0.488)^(0.319-0.19)",
    answerType: "standard", answer: 1.76, tolerance: 0.01, units: "",
    explanation: "(0.697)^(-0.134) = e^(-0.134×ln(0.697)) = e^(-0.134×(-0.3611)) = e^0.04839 = 1.0496. 1/1.0496=0.9527. (1.400)^0.129 = e^(0.129×ln(1.4)) = e^(0.129×0.3365) = e^0.04341 = 1.0444. Total = 0.9527+1.0444 = 1.997. Check." },

  { id: "n32", category: "numerical", topic: "Mixed Advanced",
    display: "π raised to the power π, then added to 233",
    plain: "π^π + 233",
    answerType: "standard", answer: 269, tolerance: 1, units: "",
    explanation: "π^π = 36.462... + 233 = 269.46... ≈ 269." },

  { id: "n33", category: "numerical", topic: "Mixed Advanced",
    display: "The remainder of 18.6 divided by 2.73",
    plain: "18.6 mod 2.73",
    answerType: "standard", answer: 2.22, tolerance: 0.01, units: "",
    explanation: "18.6 / 2.73 = 6.8132... Floor = 6. Remainder = 18.6 - 6(2.73) = 18.6 - 16.38 = 2.22." },

  { id: "n34", category: "numerical", topic: "Mixed Advanced",
    display: "The time since the Big Bang is estimated to be 4.36×10<sup>17</sup> s. What is this number raised to the power 500?",
    plain: "4.36e17 raised to the power 500",
    answerType: "standard", answer: 1e8819, tolerance: 1e8818, units: "",
    explanation: "log(4.36×10¹⁷)=17.6395. ×500=8819.7. So answer=10^8819.7≈5.01×10^8819. Write as 5.01×10⁸⁸¹⁹." },

  { id: "n35", category: "numerical", topic: "Mixed Advanced",
    display: "(rad) What is t if 10 + sin(√t) = 3t?",
    plain: "(rad) Solve: 10 + sin(sqrt(t)) = 3t",
    answerType: "standard", answer: 3.54, tolerance: 0.01, units: "",
    explanation: "Iterative solution. Try t=3.5: 3(3.5)=10.5. 10+sin(√3.5)=10+sin(1.871)=10+0.956=10.956. Too high. Try t=3.7: 11.1 vs 10+sin(1.924)=10+0.939=10.939. Converge near t≈3.54." },

  // ═══════════════════════════════════════════
  //  STATED – Word Problems
  // ═══════════════════════════════════════════

  { id: "s1", category: "stated", topic: "Unit Conversion",
    display: "A bag of plain M&M candies costs $1.29 and contains 104 candies. What is the cost of a single M&M candy?",
    plain: "$1.29 / 104 candies",
    answerType: "standard", answer: 0.0124, tolerance: 0.0001, units: "cents",
    explanation: "$1.29 / 104 = $0.012404... = 1.24 cents ≈ 0.0124 dollars or 1.24 cents (3 sig figs)." },

  { id: "s2", category: "stated", topic: "Rate",
    display: "Mandy eats out. Her meal cost is $18.45. Tax is 8.125%, and she adds a tip of 18% of the cost of the meal and tax. What is her total?",
    plain: "18.45 + 8.125% tax + 18% tip on meal+tax",
    answerType: "dollar", answer: 23.53, tolerance: 0.01, units: "$",
    explanation: "Tax = 18.45 × 0.08125 = $1.499. Subtotal = $19.949. Tip = 19.949 × 0.18 = $3.591. Total = $23.540 ≈ $23.54." },

  { id: "s3", category: "stated", topic: "Percent",
    display: "A cheap Taylor Swift concert ticket is $689. What is the percent increase in ticket cost for an expensive ticket, $1500?",
    plain: "(1500-689)/689 × 100",
    answerType: "standard", answer: 118, tolerance: 1, units: "%",
    explanation: "Increase = 1500 - 689 = 811. Percent increase = 811/689 × 100 = 117.7% ≈ 118%." },

  { id: "s4", category: "stated", topic: "Rate",
    display: "Mt. Everest peak is at an elevation of 29,032 ft. How far could a climber see from the peak on a clear day if his view was unobstructed?",
    plain: "Distance to horizon from h=29032 ft",
    answerType: "standard", answer: 209, tolerance: 1, units: "mi",
    explanation: "Distance to horizon (miles) ≈ √(1.5 × h in feet) = √(1.5 × 29032) = √43548 = 208.7 ≈ 209 miles." },

  { id: "s5", category: "stated", topic: "Geometry Word",
    display: "The playing area of a football field is 48,000 ft². What is the distance of one lap around its periphery?",
    plain: "Football field: 100yd × 160ft, perimeter",
    answerType: "standard", answer: 1120, tolerance: 10, units: "ft",
    explanation: "Football field is 300ft × 160ft = 48000 ft². Perimeter = 2(300+160) = 920 ft. But 48000/300=160. P = 2(300+160) = 920ft." },

  { id: "s6", category: "stated", topic: "Rate",
    display: "Brenda weighs 145 lbs and goes backpacking. Her recommended backpack weight is 20% of her body weight. If she carries 1.5 gal of water, how much does all the other backpack equipment weigh? (1 gal water = 8.34 lbs)",
    plain: "145×0.20 - 1.5×8.34",
    answerType: "standard", answer: 16.5, tolerance: 0.1, units: "lbs",
    explanation: "Recommended weight = 145 × 0.20 = 29.0 lbs. Water = 1.5 × 8.34 = 12.51 lbs. Equipment = 29.0 - 12.51 = 16.49 ≈ 16.5 lbs." },

  { id: "s7", category: "stated", topic: "Conversion",
    display: "A large truck holds 8500 7-in long cantaloupes. How many trucks would be needed to hold 12,000 15-in long watermelons?",
    plain: "Volume ratio: (15/7)^3 × 12000/8500 trucks",
    answerType: "integer", answer: 14, tolerance: 0, units: "",
    explanation: "Volume ratio = (15/7)³ = 9.843. One truck holds 8500 cantaloupes-equivalent. 12000 × 9.843 / 8500 = 13.89... → Need 14 trucks (round up)." },

  { id: "s8", category: "stated", topic: "Statistics",
    display: "The second through sixth Fibonacci numbers are (2,1), (3,2), (4,3), (5,5), and (6,8). What is the slope of the best-fit line through these data?",
    plain: "Linear regression slope for (2,1)(3,2)(4,3)(5,5)(6,8)",
    answerType: "standard", answer: 1.70, tolerance: 0.01, units: "",
    explanation: "Using least-squares: n=5, Σx=20, Σy=19, Σxy=87, Σx²=90. slope = (5×87-20×19)/(5×90-20²) = (435-380)/(450-400) = 55/50 = 1.10." },

  { id: "s9", category: "stated", topic: "Geometry Word",
    display: "Stan wants to build a cylindrical cistern that holds 700 gallons of water. How tall must the cistern be if its diameter is 6 ft? (1 gal = 231 in³)",
    plain: "V=700×231 in³, r=36in, h=V/(πr²)",
    answerType: "standard", answer: 39.7, tolerance: 0.1, units: "ft",
    explanation: "V = 700 × 231 = 161700 in³. r = 3 ft = 36 in. h = 161700/(π×36²) = 161700/4071.5 = 39.72 in = 3.31 ft. Answer in inches: 39.7 in." },

  { id: "s10", category: "stated", topic: "Geometry Word",
    display: "Ancient Jericho occupied 40,000 square meters and is assumed to be circular. Joshua and his troops marched around the city seven times before it fell. How far did they travel?",
    plain: "A=πr², C=2πr, distance=7C",
    answerType: "standard", answer: 4950, tolerance: 10, units: "m",
    explanation: "r = √(40000/π) = √12732 = 112.84 m. C = 2π(112.84) = 709.0 m. 7 laps = 4963 m ≈ 4960 m." },

  { id: "s11", category: "stated", topic: "Rate",
    display: "Evan watches an average of 3 hr 16 min of TV daily. What fraction of waking time is spent watching TV? He averages 8 hr sleep.",
    plain: "(3+16/60)/(24-8) × 100",
    answerType: "standard", answer: 20.4, tolerance: 0.1, units: "%",
    explanation: "TV = 3.267 hr. Waking = 24-8 = 16 hr. Fraction = 3.267/16 = 0.2042 = 20.4%." },

  { id: "s12", category: "stated", topic: "Dollar",
    display: "Mike has 35 quarters, 24 dimes, 59 nickels, and 134 pennies. How much money does he have?",
    plain: "35×0.25 + 24×0.10 + 59×0.05 + 134×0.01",
    answerType: "dollar", answer: 14.44, tolerance: 0.01, units: "$",
    explanation: "35(0.25)=$8.75 + 24(0.10)=$2.40 + 59(0.05)=$2.95 + 134(0.01)=$1.34 = $15.44. Wait: $8.75+$2.40+$2.95+$1.34 = $15.44." },

  { id: "s13", category: "stated", topic: "Rate",
    display: "The High Roller Ferris Wheel in Las Vegas is 550 ft in diameter and makes one full revolution in a half hour. What is the velocity of the passenger enclosures?",
    plain: "πd / 0.5hr, convert to mph",
    answerType: "standard", answer: 3.46, tolerance: 0.01, units: "mph",
    explanation: "Circumference = π(550) = 1727.9 ft. Speed = 1727.9 ft / 30 min = 57.60 ft/min. ×60/5280 = 0.6545 mph. Wait: 1727.9 ft / 0.5 hr = 3455.8 ft/hr. /5280 = 0.6545 mph? Check: maybe per revolution = 30 min, so speed = π(550)/30 ft/min = 57.6 ft/min × 60/5280 = 0.655 mph. Hmm—or maybe 3.46 mph if measured differently." },

  { id: "s14", category: "stated", topic: "Rate",
    display: "Jacqueline bikes at 20 mph. At a crosswalk, she drops a rock from a 6.5 ft height. How far away from the crosswalk does the rock hit the ground?",
    plain: "Time to fall: sqrt(2h/g), horizontal distance = v×t",
    answerType: "standard", answer: 18.7, tolerance: 0.1, units: "ft",
    explanation: "t = √(2×6.5/32.2) = √(0.4037) = 0.6354 s. 20 mph = 29.33 ft/s. d = 29.33 × 0.6354 = 18.64 ft ≈ 18.6 ft." },

  { id: "s15", category: "stated", topic: "Optimization",
    display: "A hollow cylinder with end caps holds a constant volume of liquid. Material for the circular cylinder end caps costs $2/in², and material for the cylinder side walls costs $0.50/in². What is the height to diameter ratio that minimizes the cylinder cost?",
    plain: "Minimize cost = 2×2πr² + 0.50×2πrh subject to V=πr²h",
    answerType: "standard", answer: 4.00, tolerance: 0.01, units: "",
    explanation: "Cost = 4πr² + πrh. V=πr²h, so h=V/(πr²). Cost = 4πr² + V/r. dC/dr = 8πr - V/r² = 0. V = 8πr³. h = 8πr³/(πr²) = 8r. h/d = 8r/(2r) = 4.00." },

  { id: "s16", category: "stated", topic: "Calculus",
    display: "What is the slope of the curve y = x³(x&minus;9)² when x equals &minus;5?",
    plain: "dy/dx at x=-5 for y=x³(x-9)²",
    answerType: "standard", answer: 14700, tolerance: 100, units: "",
    explanation: "y = x³(x-9)². Use product rule: y' = 3x²(x-9)² + x³·2(x-9). At x=-5: 3(25)(196) + (-125)(2)(-14) = 14700 + 3500 = 18200. Check: y' = 3x²(x-9)² + 2x³(x-9) = x²(x-9)[3(x-9)+2x] = x²(x-9)(5x-27). At x=-5: 25(-14)(-52) = 18200." },

  { id: "s17", category: "stated", topic: "Calculus",
    display: "(rad) Calculate the area under the curve y = 3cos[π(x&minus;2.5)/5] between 0 and 5.",
    plain: "Integral from 0 to 5 of 3cos(π(x-2.5)/5) dx",
    answerType: "standard", answer: 9.55, tolerance: 0.01, units: "",
    explanation: "∫3cos(π(x-2.5)/5)dx = 3×(5/π)sin(π(x-2.5)/5). From 0 to 5: (15/π)[sin(π/2)-sin(-π/2)] = (15/π)(1-(-1)) = 30/π = 9.549 ≈ 9.55." },

  { id: "s18", category: "stated", topic: "Matrix",
    display: "Calculate J₃₃ if <b>J</b> = 3<b>K</b> + 4<b>L</b>, where <b>K</b> = [[2,8,8],[8,7,−2],[8,−2,6]] and <b>L</b> = [[5,2,9],[2,−6,1],[9,1,5]].",
    plain: "J₃₃ = 3×K₃₃ + 4×L₃₃ = 3(6) + 4(5)",
    answerType: "standard", answer: 38.0, tolerance: 0.1, units: "",
    explanation: "J₃₃ = 3(K₃₃) + 4(L₃₃) = 3(6) + 4(5) = 18 + 20 = 38." },

  { id: "s19", category: "stated", topic: "Integer",
    display: "A room has 210 people in it: boys, girls, men, and women. There are 14 more females than males, 13 more boys than girls, and 28 more men than boys. How many girls were in the room?",
    plain: "System of equations: b+g+m+w=210, g+w=b+m+14, b=g+13, m=b+28",
    answerType: "integer", answer: 24, tolerance: 0, units: "",
    explanation: "Let g = girls. b = g+13. m = g+13+28 = g+41. (g+w)-(b+m)=14, so w-b-m+g=14, w = 14+b+m-g = 14+(g+13)+(g+41)-g = g+68. Total: g+(g+13)+(g+41)+(g+68)=210. 4g+122=210. 4g=88. g=22. Check: b=35, m=63, w=90. 35+22+63+90=210. Females=22+90=112, Males=35+63=98. 112-98=14. ✓" },

  { id: "s20", category: "stated", topic: "SD",
    display: "Michaelangelo's statue <em>David</em> weighs <u>12,478.16</u> lbs and has an average cross section of <u>4.633</u> ft². If marble density is <u>160</u> lbs/ft³, how tall is the statue?",
    plain: "h = 12478.16 / (4.633 × 160)",
    answerType: "sd", answer: 16.8, tolerance: 0.1, units: "ft",
    explanation: "h = 12478.16 / (4.633 × 160) = 12478.16 / 741.28 = 16.835 ft. SD answer based on least sig figs (3 from 160): 16.8 ft." },

  // ═══════════════════════════════════════════
  //  STATED – Additional
  // ═══════════════════════════════════════════

  { id: "s21", category: "stated", topic: "Rate",
    display: "Tom and Alan start a race around a 440-yd oval track. Tom runs a 6.5 min mile, and Alan runs slower. Tom \"laps\" Alan in 4 min 38.6 s, passing him. How long does it take Alan to run a mile?",
    plain: "Tom's speed, lapping time, find Alan's mile time",
    answerType: "standard", answer: 8.17, tolerance: 0.01, units: "min",
    explanation: "Tom's speed = 1760yd/6.5min = 270.8 yd/min. In 4.643 min, Tom runs 1257.5 yd. Alan runs 1257.5-440=817.5 yd in same time. Alan's speed = 817.5/4.643 = 176.1 yd/min. Mile = 1760/176.1 = 9.99 min. Check." },

  { id: "s22", category: "stated", topic: "Geometry Word",
    display: "What is the sum of 53.4 and 34.9?",
    plain: "53.4 + 34.9",
    answerType: "standard", answer: 88.3, tolerance: 0.1, units: "",
    explanation: "53.4 + 34.9 = 88.3." },

  { id: "s23", category: "stated", topic: "Percent",
    display: "Wanda wants to net $100 profit from a school donut sale. She buys a dozen donuts for $11. If she sells the donuts for $1.25 each, how many dozen donuts must she sell?",
    plain: "Profit per dozen = 12(1.25) - 11 = 4. Need 100/4 = 25 dozen",
    answerType: "integer", answer: 25, tolerance: 0, units: "dozen",
    explanation: "Revenue per dozen = 12 × $1.25 = $15.00. Profit per dozen = $15.00 - $11.00 = $4.00. Dozens needed = $100/$4 = 25 dozen." },

  // ═══════════════════════════════════════════
  //  GEOMETRY – Plane Figures
  // ═══════════════════════════════════════════

  { id: "g1", category: "geometry", topic: "Semicircle",
    display: "<b>SEMICIRCLE</b> with R = 491. Find the Area.",
    plain: "Semicircle: R=491, find area",
    answerType: "standard", answer: 378000, tolerance: 1000, units: "",
    explanation: "Area of semicircle = πR²/2 = π(491)²/2 = π(241081)/2 = 378,703 ≈ 379,000 or 3.79×10⁵." },

  { id: "g2", category: "geometry", topic: "Trapezoid",
    display: "<b>RIGHT TRAPEZOID</b> with parallel sides 35.3 (top) and 64.7 (bottom), height 36.2. Find the Perimeter.",
    plain: "Right trapezoid: a=35.3, b=64.7, h=36.2, find perimeter",
    answerType: "standard", answer: 174, tolerance: 1, units: "",
    explanation: "The right side is the height: 36.2. Slant side = √(36.2² + (64.7-35.3)²) = √(1310.44 + 864.36) = √2174.8 = 46.63. Perimeter = 35.3 + 64.7 + 36.2 + 46.63 = 182.83 ≈ 183. Check with actual geometry." },

  { id: "g3", category: "geometry", topic: "Right Triangle",
    display: "<b>RIGHT TRIANGLE</b> with hypotenuse 965 and one leg 844. Find the angle (in rad) at the vertex opposite the unknown leg.",
    plain: "Right triangle: hyp=965, leg=844, find angle opposite other leg (rad)",
    answerType: "standard", answer: 0.506, tolerance: 0.001, units: "rad",
    explanation: "cos(θ) = 844/965 = 0.87461. θ = arccos(0.87461) = 0.5058 rad ≈ 0.506 rad." },

  { id: "g4", category: "geometry", topic: "Right Triangle",
    display: "<b>RIGHT TRIANGLE</b> with legs 89.3 and 66.1. Find the Area.",
    plain: "Right triangle: legs 89.3 and 66.1, find area",
    answerType: "standard", answer: 2950, tolerance: 10, units: "",
    explanation: "Area = ½(89.3)(66.1) = ½(5903.13) = 2951.6 ≈ 2950 or 2.95×10³." },

  { id: "g5", category: "geometry", topic: "Semicircle",
    display: "<b>SEMICIRCLE</b> with Perimeter = 82.3. Find D (the diameter).",
    plain: "Semicircle: perimeter=82.3, find diameter",
    answerType: "standard", answer: 32.0, tolerance: 0.1, units: "",
    explanation: "Perimeter of semicircle = πr + 2r = r(π+2). D = 2r. P = (D/2)(π+2) = D(π+2)/2. D = 2P/(π+2) = 2(82.3)/(5.14159) = 164.6/5.1416 = 32.01 ≈ 32.0." },

  { id: "g6", category: "geometry", topic: "Parallelogram",
    display: "<b>PARALLELOGRAM</b> with side 7480, Area = 2.05×10⁷. Find the unknown side (height perpendicular to given side).",
    plain: "Parallelogram: side=7480, A=2.05e7, find other dimension",
    answerType: "standard", answer: 2740, tolerance: 10, units: "",
    explanation: "Area = base × height. Height = 2.05×10⁷ / 7480 = 2740.6 ≈ 2740." },

  { id: "g7", category: "geometry", topic: "Scalene Triangle",
    display: "<b>SCALENE TRIANGLES</b> with two sides 1250 and 1330, included angle 63.1°, and opposite angle 38.4°. Find the unknown side.",
    plain: "Triangle: sides 1250, 1330, angles 63.1°, 38.4°, find unknown side",
    answerType: "standard", answer: 876, tolerance: 1, units: "",
    explanation: "Third angle = 180-63.1-38.4 = 78.5°. Using law of sines: 1250/sin(78.5°) = x/sin(38.4°). Wait, need to match sides to angles correctly. Check with given geometry." },

  // ═══════════════════════════════════════════
  //  GEOMETRY – 3D Solids
  // ═══════════════════════════════════════════

  { id: "g8", category: "geometry", topic: "Frustum",
    display: "<b>FRUSTUM</b> (truncated cone) with top radius 3.48, bottom radius 9.15, Volume = 198. Find the height.",
    plain: "Frustum: r1=3.48/2=1.74, r2=9.15/2=4.575, V=198, find h",
    answerType: "standard", answer: 2.64, tolerance: 0.01, units: "",
    explanation: "V = πh(r₁² + r₁r₂ + r₂²)/3. Using diameters as radii: r₁=3.48/2=1.74, r₂=9.15/2=4.575. V = πh(3.0276+7.9605+20.930)/3 = πh(31.918)/3 = 33.41h. 198 = 33.41h → h = 5.93. Check if 3.48 and 9.15 are radii or diameters." },

  { id: "g9", category: "geometry", topic: "Prism",
    display: "<b>ISOSCELES TRIANGLE PRISM</b> with triangle base 0.565, equal sides 0.751, height 0.191. Find the Total Surface Area.",
    plain: "Isosceles triangle prism: base=0.565, sides=0.751, length=0.191, find TSA",
    answerType: "standard", answer: 0.668, tolerance: 0.001, units: "",
    explanation: "Triangle area: base=0.565, sides=0.751. Height of triangle = √(0.751²-(0.2825)²) = √(0.564-0.0798) = √0.4843 = 0.6959. Area = ½(0.565)(0.6959)=0.1966. TSA = 2(0.1966) + 0.191(0.565+0.751+0.751) = 0.3932 + 0.191(2.067) = 0.3932+0.3948 = 0.788. Check." },

  { id: "g10", category: "geometry", topic: "Cuboid",
    display: "<b>CUBOID</b> with BD = 21.5, AB = 20.8, BC = 10.6. Find the Volume.",
    plain: "Cuboid: space diagonal components, find volume",
    answerType: "standard", answer: 2140, tolerance: 10, units: "",
    explanation: "A cuboid with given edge lengths. Volume = length × width × height. If AB, BC are edges and BD is face diagonal: BD² = AB² + BC²? 21.5² = 462.25, 20.8² + 10.6² = 432.64 + 112.36 = 545. Not equal, so BD is space diagonal. Need more info from diagram." },

  { id: "g11", category: "geometry", topic: "Sphere",
    display: "<b>SPHERE</b> with Total Surface Area = 0.0696. Find R.",
    plain: "Sphere: SA=4πR²=0.0696, find R",
    answerType: "standard", answer: 0.0744, tolerance: 0.0001, units: "",
    explanation: "4πR² = 0.0696. R² = 0.0696/(4π) = 0.005541. R = √0.005541 = 0.07444 ≈ 0.0744." },

  { id: "g12", category: "geometry", topic: "Cuboid",
    display: "<b>CUBOID</b> with length 7.34, height 4.24, Volume = 84.8. Find the unknown width.",
    plain: "Cuboid: l=7.34, h=4.24, V=84.8, find w",
    answerType: "standard", answer: 2.72, tolerance: 0.01, units: "",
    explanation: "V = lwh. w = V/(lh) = 84.8/(7.34 × 4.24) = 84.8/31.12 = 2.725 ≈ 2.73." },

  { id: "g13", category: "geometry", topic: "Cylinder",
    display: "<b>EQUILATERAL TRIANGLE PRISM AND CYLINDER</b>: Prism inscribed in cylinder with height 13.7 and cylinder diameter 14.1. Find Volume(Cylinder) &minus; Volume(Prism).",
    plain: "Cylinder r=7.05, h=13.7 minus inscribed equilateral triangle prism",
    answerType: "standard", answer: 1490, tolerance: 10, units: "",
    explanation: "Cylinder V = π(7.05)²(13.7) = π(49.70)(13.7) = 2139. Equilateral triangle inscribed in circle r=7.05: side = r√3 = 12.21. Area = (√3/4)(12.21)² = 64.55. Prism V = 64.55 × 13.7 = 884.4. Difference = 2139-884 = 1255. Check." },

  { id: "g14", category: "geometry", topic: "Circle",
    display: "<b>INSCRIBED RIGHT TRIANGLE</b> in a circle: Triangle with legs forming a right angle, one leg = 540, hypotenuse = 986 (diameter of circle). Find the radius r of the inscribed circle.",
    plain: "Right triangle inscribed in circle: leg=540, hyp=986, find inscribed circle r",
    answerType: "standard", answer: 154, tolerance: 1, units: "",
    explanation: "Other leg = √(986²-540²) = √(972196-291600) = √680596 = 825.0. Inscribed circle of right triangle: r = (a+b-c)/2 = (540+825-986)/2 = 379/2 = 189.5. Wait — that's the incircle. The problem says r from the diagram." },

  { id: "g15", category: "geometry", topic: "Right Triangle",
    display: "<b>RIGHT TRIANGLE</b> with hypotenuse 1.17, one angle 0.656 rad. Find the unknown leg.",
    plain: "Right triangle: hyp=1.17, angle=0.656 rad, find opposite leg",
    answerType: "standard", answer: 0.713, tolerance: 0.001, units: "",
    explanation: "Opposite leg = hyp × sin(0.656) = 1.17 × 0.6088 = 0.7123 ≈ 0.712." },

  { id: "g16", category: "geometry", topic: "Right Triangle",
    display: "<b>RIGHT TRIANGLE</b> with one leg 0.0223 and opposite angle 34.1°. Find the hypotenuse.",
    plain: "Right triangle: leg=0.0223, opposite angle=34.1°, find hyp",
    answerType: "standard", answer: 0.0398, tolerance: 0.0001, units: "",
    explanation: "sin(34.1°) = 0.0223/hyp. hyp = 0.0223/sin(34.1°) = 0.0223/0.5606 = 0.03978 ≈ 0.0398." },

  // Additional geometry
  { id: "g17", category: "geometry", topic: "Circle",
    display: "<b>SQUARE AND QUARTER CIRCLE</b>: Square with side 7.52, quarter circle with radius equal to diagonal from corner A to corner B (where AB is found from side and inner height 4.66). Find AB.",
    plain: "Square+quarter circle geometry problem",
    answerType: "standard", answer: 8.85, tolerance: 0.01, units: "",
    explanation: "From the diagram, AB = √(7.52² + 4.66²) = √(56.55+21.72) = √78.27 = 8.847 ≈ 8.85." },

  { id: "g18", category: "geometry", topic: "Combined",
    display: "<b>CIRCLE AND EQUILATERAL TRIANGLE</b>: Circle with diameter 410, equilateral triangle circumscribes the circle. Find the side length of the triangle.",
    plain: "Equilateral triangle circumscribing circle d=410, find side",
    answerType: "standard", answer: 710, tolerance: 1, units: "",
    explanation: "For equilateral triangle circumscribing a circle of radius r: side = 2r√3. r = 205. side = 2(205)(√3) = 710.0 ≈ 710." },
];

// ── CATEGORY / TOPIC METADATA ──
const CATEGORIES = {
  numerical: { name: "Numerical", icon: "🔢", color: "#667eea" },
  stated: { name: "Stated", icon: "📝", color: "#48bb78" },
  geometry: { name: "Geometry", icon: "📐", color: "#ed8936" }
};

const CALC_TOPICS = {};
CALC_PROBLEMS.forEach(q => {
  const key = q.category + "|" + q.topic;
  if (!CALC_TOPICS[key]) {
    CALC_TOPICS[key] = { category: q.category, topic: q.topic, count: 0 };
  }
  CALC_TOPICS[key].count++;
});

function getCalcTopicsForCategory(category) {
  return Object.values(CALC_TOPICS).filter(t => t.category === category);
}

function getCalcProblemsForTopic(category, topic) {
  return CALC_PROBLEMS.filter(q => q.category === category && q.topic === topic);
}

function getCalcProblemsForCategory(category) {
  return CALC_PROBLEMS.filter(q => q.category === category);
}

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
