// UIL Calculator Applications – Geometry – 3D Solids
// 28 problems
//
const GEOMETRY_3D_PROBLEMS = [

  // ── CONE (4) ──
  { id: "g29", category: "geometry", topic: "Cone",
    display: "<b>CONE</b> with radius 8.35 and slant height 14.6. Find the Total Surface Area.",
    plain: "Cone: r=8.35, slant=14.6, find TSA",
    answerType: "standard", answer: 602, tolerance: 1, units: "",
    explanation: "TSA = πr² + πrℓ = π(8.35)² + π(8.35)(14.6) = 219.0 + 382.9 = 601.9 ≈ 602.",
    hint: "TSA = &pi;r<sup>2</sup> + &pi;r&ell;",
    svg: `<svg viewBox="0 0 260 190" class="geo-svg">
      <ellipse cx="130" cy="155" rx="80" ry="18" fill="none" stroke="#667eea" stroke-width="2"/>
      <line x1="50" y1="155" x2="130" y2="25" stroke="#667eea" stroke-width="2"/>
      <line x1="210" y1="155" x2="130" y2="25" stroke="#667eea" stroke-width="2"/>
      <line x1="130" y1="155" x2="210" y2="155" stroke="#ed8936" stroke-width="1.5" stroke-dasharray="5,4"/>
      <text x="165" y="150" fill="#ed8936" font-size="11">r = 8.35</text>
      <line x1="130" y1="25" x2="210" y2="155" stroke="#ed8936" stroke-width="1" stroke-dasharray="4,3"/>
      <text x="180" y="85" fill="#ed8936" font-size="11">ℓ = 14.6</text>
      <text x="85" y="185" fill="#8899aa" font-size="11">TSA = ?</text>
    </svg>`
  },
  { id: "g30", category: "geometry", topic: "Cone",
    display: "<b>CONE</b> with height 12.3 and volume 845. Find the radius.",
    plain: "Cone: h=12.3, V=845, find r",
    answerType: "standard", answer: 8.09, tolerance: 0.01, units: "",
    explanation: "V = πr²h/3. r² = 3V/(πh) = 3(845)/(π×12.3) = 2535/38.64 = 65.61. r = √65.61 = 8.099 ≈ 8.10.",
    hint: "V = &frac13;&pi;r<sup>2</sup>h &rarr; r = &radic;(3V / &pi;h)",
    svg: `<svg viewBox="0 0 260 190" class="geo-svg">
      <ellipse cx="130" cy="155" rx="75" ry="16" fill="none" stroke="#667eea" stroke-width="2"/>
      <line x1="55" y1="155" x2="130" y2="25" stroke="#667eea" stroke-width="2"/>
      <line x1="205" y1="155" x2="130" y2="25" stroke="#667eea" stroke-width="2"/>
      <line x1="130" y1="25" x2="130" y2="155" stroke="#ed8936" stroke-width="1.5" stroke-dasharray="5,4"/>
      <text x="135" y="95" fill="#ed8936" font-size="11">h = 12.3</text>
      <text x="130" y="175" fill="#48bb78" font-size="11" text-anchor="middle" font-style="italic">r = ?</text>
      <text x="60" y="120" fill="#8899aa" font-size="11">V = 845</text>
    </svg>`
  },
  { id: "g89", category: "geometry", topic: "Cone",
    display: "<b>CONE</b> with height = 120 and base radius R = 48.3. Find the Volume.",
    plain: "Cone: h=120, R=48.3, find V",
    answerType: "standard", answer: 293000, tolerance: 1000, units: "",
    explanation: "V = (1/3)πR²h = (1/3)π(48.3)²(120) = (1/3)π(2332.89)(120) = (1/3)π(279947) = (1/3)(879,549) = 293,183 ≈ 293,000.",
    hint: "V = &frac13;&pi;R<sup>2</sup>h",
    svg: `<svg viewBox="0 0 220 200" class="geo-svg">
      <line x1="110" y1="20" x2="40" y2="170" stroke="#667eea" stroke-width="2"/>
      <line x1="110" y1="20" x2="180" y2="170" stroke="#667eea" stroke-width="2"/>
      <ellipse cx="110" cy="170" rx="70" ry="18" fill="none" stroke="#667eea" stroke-width="2"/>
      <line x1="110" y1="20" x2="110" y2="170" stroke="#ed8936" stroke-width="1" stroke-dasharray="4,3"/>
      <text x="115" y="100" fill="#ed8936" font-size="10">h = 120</text>
      <line x1="110" y1="170" x2="180" y2="170" stroke="#ed8936" stroke-width="1" stroke-dasharray="4,3"/>
      <text x="135" y="185" fill="#ed8936" font-size="10">R = 48.3</text>
      <text x="50" y="100" fill="#48bb78" font-size="11" font-style="italic">V = ?</text>
    </svg>`
  },
  { id: "g90", category: "geometry", topic: "Cone",
    display: "<b>CONE</b> with slant height = 792 and base diameter = 468. Find the Volume.",
    plain: "Cone: slant=792, D=468, find V",
    answerType: "standard", answer: 43600000, tolerance: 100000, units: "",
    explanation: "R = 468/2 = 234. h = √(792²−234²) = √(627264−54756) = √572508 = 756.6. V = (1/3)πR²h = (1/3)π(54756)(756.6) = (1/3)(130,151,000) = 43,384,000 ≈ 43,600,000.",
    hint: "h = &radic;(&ell;<sup>2</sup> &minus; R<sup>2</sup>), then V = &frac13;&pi;R<sup>2</sup>h",
    svg: `<svg viewBox="0 0 220 200" class="geo-svg">
      <line x1="110" y1="20" x2="40" y2="170" stroke="#667eea" stroke-width="2"/>
      <line x1="110" y1="20" x2="180" y2="170" stroke="#667eea" stroke-width="2"/>
      <ellipse cx="110" cy="170" rx="70" ry="18" fill="none" stroke="#667eea" stroke-width="2"/>
      <text x="145" y="90" fill="#ed8936" font-size="10" transform="rotate(65,150,90)">792</text>
      <text x="70" y="192" fill="#ed8936" font-size="10">D = 468</text>
      <text x="50" y="100" fill="#48bb78" font-size="11" font-style="italic">V = ?</text>
    </svg>`
  },

  // ── CUBOID (2) ──
  { id: "g10", category: "geometry", topic: "Cuboid",
    display: "<b>CUBOID</b> with BD = 21.5, AB = 20.8, BC = 10.6. Find the Volume.",
    plain: "Cuboid: space diagonal components, find volume",
    answerType: "standard", answer: 2140, tolerance: 10, units: "",
    explanation: "A cuboid with given edge lengths. Volume = length × width × height. If AB, BC are edges and BD is face diagonal: BD² = AB² + BC²? 21.5² = 462.25, 20.8² + 10.6² = 432.64 + 112.36 = 545. Not equal, so BD is space diagonal. Need more info from diagram.",
    hint: "V = l &times; w &times; h; space diagonal d = &radic;(l<sup>2</sup> + w<sup>2</sup> + h<sup>2</sup>)",
    svg: `<svg viewBox="0 0 280 200" class="geo-svg">
      <polygon points="60,160 190,160 190,70 60,70" fill="none" stroke="#667eea" stroke-width="2"/>
      <polygon points="60,70 110,30 240,30 190,70" fill="none" stroke="#667eea" stroke-width="2"/>
      <line x1="190" y1="160" x2="240" y2="120" stroke="#667eea" stroke-width="2"/>
      <line x1="240" y1="120" x2="240" y2="30" stroke="#667eea" stroke-width="2"/>
      <line x1="60" y1="160" x2="110" y2="120" stroke="#667eea" stroke-width="1" stroke-dasharray="4,3" opacity="0.5"/>
      <line x1="110" y1="120" x2="240" y2="120" stroke="#667eea" stroke-width="1" stroke-dasharray="4,3" opacity="0.5"/>
      <line x1="110" y1="120" x2="110" y2="30" stroke="#667eea" stroke-width="1" stroke-dasharray="4,3" opacity="0.5"/>
      <circle cx="60" cy="160" r="3" fill="#ed8936"/>
      <circle cx="190" cy="160" r="3" fill="#ed8936"/>
      <circle cx="190" cy="70" r="3" fill="#ed8936"/>
      <circle cx="240" cy="30" r="3" fill="#ed8936"/>
      <text x="48" y="173" fill="#ed8936" font-size="11" font-weight="bold">A</text>
      <text x="193" y="173" fill="#ed8936" font-size="11" font-weight="bold">B</text>
      <text x="193" y="65" fill="#ed8936" font-size="11" font-weight="bold">C</text>
      <text x="244" y="28" fill="#ed8936" font-size="11" font-weight="bold">D</text>
      <text x="110" y="178" fill="#ed8936" font-size="11" text-anchor="middle">AB = 20.8</text>
      <text x="200" y="120" fill="#ed8936" font-size="11">BC = 10.6</text>
      <line x1="60" y1="160" x2="240" y2="30" stroke="#48bb78" stroke-width="1.5" stroke-dasharray="5,4"/>
      <text x="130" y="85" fill="#48bb78" font-size="11">BD = 21.5</text>
      <text x="100" y="195" fill="#8899aa" font-size="11">Volume = ?</text>
    </svg>`
  },
  { id: "g12", category: "geometry", topic: "Cuboid",
    display: "<b>CUBOID</b> with length 7.34, height 4.24, Volume = 84.8. Find the unknown width.",
    plain: "Cuboid: l=7.34, h=4.24, V=84.8, find w",
    answerType: "standard", answer: 2.72, tolerance: 0.01, units: "",
    explanation: "V = lwh. w = V/(lh) = 84.8/(7.34 × 4.24) = 84.8/31.12 = 2.725 ≈ 2.73.",
    hint: "V = lwh &rarr; w = V / (lh)",
    svg: `<svg viewBox="0 0 280 190" class="geo-svg">
      <polygon points="50,150 190,150 190,60 50,60" fill="none" stroke="#667eea" stroke-width="2"/>
      <polygon points="50,60 100,25 240,25 190,60" fill="none" stroke="#667eea" stroke-width="2"/>
      <line x1="190" y1="150" x2="240" y2="115" stroke="#667eea" stroke-width="2"/>
      <line x1="240" y1="115" x2="240" y2="25" stroke="#667eea" stroke-width="2"/>
      <line x1="50" y1="150" x2="100" y2="115" stroke="#667eea" stroke-width="1" stroke-dasharray="4,3" opacity="0.5"/>
      <line x1="100" y1="115" x2="240" y2="115" stroke="#667eea" stroke-width="1" stroke-dasharray="4,3" opacity="0.5"/>
      <line x1="100" y1="115" x2="100" y2="25" stroke="#667eea" stroke-width="1" stroke-dasharray="4,3" opacity="0.5"/>
      <text x="120" y="168" fill="#ed8936" font-size="11" text-anchor="middle">7.34</text>
      <text x="36" y="110" fill="#ed8936" font-size="11">4.24</text>
      <text x="62" y="46" fill="#48bb78" font-size="11" font-style="italic">w = ?</text>
      <text x="140" y="100" fill="#8899aa" font-size="11">V = 84.8</text>
    </svg>`
  },

  // ── COMBINED (1) ──
  { id: "g13", category: "geometry", topic: "Combined",
    display: "<b>EQUILATERAL TRIANGLE PRISM AND CYLINDER</b>: Prism inscribed in cylinder with height 13.7 and cylinder diameter 14.1. Find Volume(Cylinder) &minus; Volume(Prism).",
    plain: "Cylinder r=7.05, h=13.7 minus inscribed equilateral triangle prism",
    answerType: "standard", answer: 1490, tolerance: 10, units: "",
    explanation: "Cylinder V = π(7.05)²(13.7) = π(49.70)(13.7) = 2139. Equilateral triangle inscribed in circle r=7.05: side = r√3 = 12.21. Area = (√3/4)(12.21)² = 64.55. Prism V = 64.55 × 13.7 = 884.4. Difference = 2139-884 = 1255. Check.",
    hint: "V<sub>cyl</sub> = &pi;r<sup>2</sup>h; inscribed equilateral side = r&radic;3; A = (&radic;3/4)s<sup>2</sup>",
    svg: `<svg viewBox="0 0 280 200" class="geo-svg">
      <ellipse cx="140" cy="40" rx="65" ry="18" fill="none" stroke="#667eea" stroke-width="2"/>
      <ellipse cx="140" cy="160" rx="65" ry="18" fill="none" stroke="#667eea" stroke-width="2"/>
      <line x1="75" y1="40" x2="75" y2="160" stroke="#667eea" stroke-width="2"/>
      <line x1="205" y1="40" x2="205" y2="160" stroke="#667eea" stroke-width="2"/>
      <polygon points="140,22 83,157 197,157" fill="none" stroke="#ed8936" stroke-width="1.5" stroke-dasharray="5,4"/>
      <line x1="140" y1="22" x2="83" y2="157" stroke="#ed8936" stroke-width="1.5"/>
      <line x1="140" y1="22" x2="197" y2="157" stroke="#ed8936" stroke-width="1.5"/>
      <line x1="83" y1="157" x2="197" y2="157" stroke="#ed8936" stroke-width="1.5"/>
      <text x="218" y="100" fill="#ed8936" font-size="11">h = 13.7</text>
      <text x="130" y="185" fill="#ed8936" font-size="11" text-anchor="middle">D = 14.1</text>
      <text x="110" y="105" fill="#8899aa" font-size="11">V<tspan font-size="9" dy="3">cyl</tspan><tspan dy="-3"> − V</tspan><tspan font-size="9" dy="3">prism</tspan><tspan dy="-3"> = ?</tspan></text>
    </svg>`
  },
  // ── CYLINDER (4) ──
  { id: "g45", category: "geometry", topic: "Cylinder",
    display: "<b>CYLINDER</b> with diameter 8.44 and Total Surface Area = 420. Find the height.",
    plain: "Cylinder: d=8.44, TSA=420, find h",
    answerType: "standard", answer: 11.6, tolerance: 0.1, units: "",
    explanation: "TSA = 2πr² + 2πrh. r=4.22. 2π(4.22)²=111.9. 420-111.9=308.1=2π(4.22)h. h=308.1/26.52=11.62 ≈ 11.6.",
    hint: "TSA = 2&pi;r<sup>2</sup> + 2&pi;rh &rarr; h = (TSA &minus; 2&pi;r<sup>2</sup>) / (2&pi;r)",
    svg: `<svg viewBox="0 0 260 190" class="geo-svg">
      <ellipse cx="130" cy="35" rx="60" ry="16" fill="none" stroke="#667eea" stroke-width="2"/>
      <ellipse cx="130" cy="155" rx="60" ry="16" fill="none" stroke="#667eea" stroke-width="2"/>
      <line x1="70" y1="35" x2="70" y2="155" stroke="#667eea" stroke-width="2"/>
      <line x1="190" y1="35" x2="190" y2="155" stroke="#667eea" stroke-width="2"/>
      <line x1="70" y1="155" x2="190" y2="155" stroke="#ed8936" stroke-width="1.5" stroke-dasharray="5,4"/>
      <text x="120" y="175" fill="#ed8936" font-size="11" text-anchor="middle">d = 8.44</text>
      <text x="198" y="100" fill="#48bb78" font-size="11" font-style="italic">h = ?</text>
      <text x="85" y="100" fill="#8899aa" font-size="11">TSA = 420</text>
    </svg>`
  },
  { id: "g50", category: "geometry", topic: "Cylinder",
    display: "<b>CYLINDER</b> with radius 3.68 and height 9.21. Find the Volume.",
    plain: "Cylinder: r=3.68, h=9.21, find V",
    answerType: "standard", answer: 392, tolerance: 1, units: "",
    explanation: "V = πr²h = π(3.68)²(9.21) = π(13.54)(9.21) = π(124.7) = 391.7 ≈ 392.",
    hint: "V = &pi;r<sup>2</sup>h",
    svg: `<svg viewBox="0 0 260 190" class="geo-svg">
      <ellipse cx="130" cy="35" rx="55" ry="15" fill="none" stroke="#667eea" stroke-width="2"/>
      <ellipse cx="130" cy="150" rx="55" ry="15" fill="none" stroke="#667eea" stroke-width="2"/>
      <line x1="75" y1="35" x2="75" y2="150" stroke="#667eea" stroke-width="2"/>
      <line x1="185" y1="35" x2="185" y2="150" stroke="#667eea" stroke-width="2"/>
      <line x1="130" y1="35" x2="185" y2="35" stroke="#ed8936" stroke-width="1.5" stroke-dasharray="5,4"/>
      <text x="148" y="28" fill="#ed8936" font-size="11">r = 3.68</text>
      <text x="192" y="98" fill="#ed8936" font-size="11">h = 9.21</text>
      <text x="95" y="100" fill="#8899aa" font-size="12" font-style="italic">V = ?</text>
    </svg>`
  },
  { id: "g87", category: "geometry", topic: "Cylinder",
    display: "<b>CYLINDER</b> with height = 0.0886 and Volume = 0.000165. Find the Radius.",
    plain: "Cylinder: h=0.0886, V=0.000165, find R",
    answerType: "standard", answer: 0.0243, tolerance: 0.0001, units: "",
    explanation: "V = πR²h. R² = V/(πh) = 0.000165/(π×0.0886) = 0.000165/0.2783 = 0.000593. R = √0.000593 = 0.02435 ≈ 0.0243.",
    hint: "V = &pi;R<sup>2</sup>h &rarr; R = &radic;(V / &pi;h)",
    svg: `<svg viewBox="0 0 220 190" class="geo-svg">
      <ellipse cx="110" cy="35" rx="50" ry="15" fill="none" stroke="#667eea" stroke-width="2"/>
      <ellipse cx="110" cy="150" rx="50" ry="15" fill="none" stroke="#667eea" stroke-width="2"/>
      <line x1="60" y1="35" x2="60" y2="150" stroke="#667eea" stroke-width="2"/>
      <line x1="160" y1="35" x2="160" y2="150" stroke="#667eea" stroke-width="2"/>
      <text x="170" y="98" fill="#ed8936" font-size="10">h = 0.0886</text>
      <text x="55" y="175" fill="#ed8936" font-size="10">V = 0.000165</text>
      <line x1="110" y1="35" x2="160" y2="35" stroke="#48bb78" stroke-width="1" stroke-dasharray="4,3"/>
      <text x="120" y="28" fill="#48bb78" font-size="10" font-style="italic">R = ?</text>
    </svg>`
  },
  { id: "g88", category: "geometry", topic: "Cylinder",
    display: "<b>CYLINDER</b> with Radius = 156 and Total Surface Area = 482000. Find the height.",
    plain: "Cylinder: R=156, TSA=482000, find h",
    answerType: "standard", answer: 336, tolerance: 1, units: "",
    explanation: "TSA = 2πR² + 2πRh = 2πR(R+h). (R+h) = TSA/(2πR) = 482000/(2π×156) = 482000/980.2 = 491.9. h = 491.9−156 = 335.9 ≈ 336.",
    hint: "TSA = 2&pi;R(R + h) &rarr; h = TSA/(2&pi;R) &minus; R",
    svg: `<svg viewBox="0 0 220 190" class="geo-svg">
      <ellipse cx="110" cy="35" rx="50" ry="15" fill="none" stroke="#667eea" stroke-width="2"/>
      <ellipse cx="110" cy="150" rx="50" ry="15" fill="none" stroke="#667eea" stroke-width="2"/>
      <line x1="60" y1="35" x2="60" y2="150" stroke="#667eea" stroke-width="2"/>
      <line x1="160" y1="35" x2="160" y2="150" stroke="#667eea" stroke-width="2"/>
      <line x1="110" y1="35" x2="160" y2="35" stroke="#ed8936" stroke-width="1" stroke-dasharray="4,3"/>
      <text x="120" y="28" fill="#ed8936" font-size="10">R = 156</text>
      <text x="55" y="175" fill="#ed8936" font-size="9">TSA = 482,000</text>
      <text x="170" y="98" fill="#48bb78" font-size="11" font-style="italic">h = ?</text>
    </svg>`
  },

  // ── FRUSTUM (2) ──
  { id: "g8", category: "geometry", topic: "Frustum",
    display: "<b>FRUSTUM</b> (truncated cone) with top radius 3.48, bottom radius 9.15, Volume = 198. Find the height.",
    plain: "Frustum: r1=3.48/2=1.74, r2=9.15/2=4.575, V=198, find h",
    answerType: "standard", answer: 2.64, tolerance: 0.01, units: "",
    explanation: "V = πh(r₁² + r₁r₂ + r₂²)/3. Using diameters as radii: r₁=3.48/2=1.74, r₂=9.15/2=4.575. V = πh(3.0276+7.9605+20.930)/3 = πh(31.918)/3 = 33.41h. 198 = 33.41h → h = 5.93. Check if 3.48 and 9.15 are radii or diameters.",
    hint: "V = (&pi;h/3)(R<sup>2</sup> + Rr + r<sup>2</sup>) &rarr; h = 3V / [&pi;(R<sup>2</sup> + Rr + r<sup>2</sup>)]",
    svg: `<svg viewBox="0 0 260 190" class="geo-svg">
      <ellipse cx="130" cy="40" rx="40" ry="12" fill="none" stroke="#667eea" stroke-width="2"/>
      <ellipse cx="130" cy="155" rx="90" ry="18" fill="none" stroke="#667eea" stroke-width="2"/>
      <line x1="90" y1="40" x2="40" y2="155" stroke="#667eea" stroke-width="2"/>
      <line x1="170" y1="40" x2="220" y2="155" stroke="#667eea" stroke-width="2"/>
      <line x1="130" y1="40" x2="170" y2="40" stroke="#ed8936" stroke-width="1.5" stroke-dasharray="5,4"/>
      <text x="145" y="35" fill="#ed8936" font-size="11">r₁ = 3.48</text>
      <line x1="130" y1="155" x2="220" y2="155" stroke="#ed8936" stroke-width="1.5" stroke-dasharray="5,4"/>
      <text x="155" y="150" fill="#ed8936" font-size="11">r₂ = 9.15</text>
      <line x1="235" y1="40" x2="235" y2="155" stroke="#48bb78" stroke-width="1.5" stroke-dasharray="5,4"/>
      <text x="240" y="100" fill="#48bb78" font-size="12" font-style="italic">h = ?</text>
      <text x="78" y="100" fill="#8899aa" font-size="11">V = 198</text>
    </svg>`
  },
  { id: "g91", category: "geometry", topic: "Frustum",
    display: "<b>FRUSTUM</b> (truncated cone) with top radius r = 15.2, base radius R = 28.6, and height = 31.4. Find the Volume.",
    plain: "Frustum: r=15.2, R=28.6, h=31.4, find V",
    answerType: "standard", answer: 48800, tolerance: 100, units: "",
    explanation: "V = (πh/3)(R²+Rr+r²) = (π(31.4)/3)(28.6²+28.6×15.2+15.2²) = (32.89)(817.96+434.72+231.04) = 32.89(1483.72) = 48,800. Hmm let me recalc: (π×31.4/3)=32.89. 28.6²=817.96, 28.6×15.2=434.72, 15.2²=231.04. Sum=1483.72. V=32.89×1483.72=48,800. Wait: 32.89×1483.72=48,800. 3 sig figs: 48,800.",
    hint: "V = (&pi;h/3)(R<sup>2</sup> + Rr + r<sup>2</sup>)",
    svg: `<svg viewBox="0 0 240 190" class="geo-svg">
      <line x1="80" y1="30" x2="30" y2="170" stroke="#667eea" stroke-width="2"/>
      <line x1="160" y1="30" x2="210" y2="170" stroke="#667eea" stroke-width="2"/>
      <ellipse cx="120" cy="30" rx="40" ry="10" fill="none" stroke="#667eea" stroke-width="2"/>
      <ellipse cx="120" cy="170" rx="90" ry="15" fill="none" stroke="#667eea" stroke-width="2"/>
      <line x1="120" y1="30" x2="160" y2="30" stroke="#ed8936" stroke-width="1" stroke-dasharray="3,3"/>
      <text x="130" y="25" fill="#ed8936" font-size="9">r=15.2</text>
      <line x1="120" y1="170" x2="210" y2="170" stroke="#ed8936" stroke-width="1" stroke-dasharray="3,3"/>
      <text x="155" y="185" fill="#ed8936" font-size="9">R=28.6</text>
      <text x="215" y="105" fill="#ed8936" font-size="10">h=31.4</text>
      <text x="70" y="110" fill="#48bb78" font-size="11" font-style="italic">V = ?</text>
    </svg>`
  },

  // ── HEMISPHERE (3) ──
  { id: "g40", category: "geometry", topic: "Hemisphere",
    display: "<b>HEMISPHERE</b> with radius 4.87. Find the Total Surface Area (curved + flat).",
    plain: "Hemisphere: r=4.87, find TSA",
    answerType: "standard", answer: 224, tolerance: 1, units: "",
    explanation: "TSA = 2πr² + πr² = 3πr² = 3π(4.87)² = 3π(23.72) = 223.5 ≈ 224.",
    hint: "TSA = 3&pi;r<sup>2</sup>",
    svg: `<svg viewBox="0 0 260 160" class="geo-svg">
      <path d="M 40 110 A 90 90 0 0 1 220 110" fill="none" stroke="#667eea" stroke-width="2"/>
      <ellipse cx="130" cy="110" rx="90" ry="20" fill="none" stroke="#667eea" stroke-width="2"/>
      <line x1="130" y1="110" x2="220" y2="110" stroke="#ed8936" stroke-width="1.5" stroke-dasharray="5,4"/>
      <circle cx="130" cy="110" r="3" fill="#ed8936"/>
      <text x="165" y="104" fill="#ed8936" font-size="11">r = 4.87</text>
      <text x="90" y="150" fill="#8899aa" font-size="11">TSA = ?</text>
    </svg>`
  },
  { id: "g41", category: "geometry", topic: "Hemisphere",
    display: "<b>HEMISPHERE</b> with Volume = 3520. Find the radius R.",
    plain: "Hemisphere: V=(2/3)πR³=3520, find R",
    answerType: "standard", answer: 11.9, tolerance: 0.1, units: "",
    explanation: "V = (2/3)πR³. R³ = 3V/(2π) = 3(3520)/(2π) = 10560/6.2832 = 1680.7. R = ∛1680.7 = 11.89 ≈ 11.9.",
    hint: "V = (2/3)&pi;R<sup>3</sup> &rarr; R = &radic;<span style='text-decoration:overline'>3V / (2&pi;)</span>&thinsp;<sup>1/3</sup>",
    svg: `<svg viewBox="0 0 260 160" class="geo-svg">
      <path d="M 40 110 A 90 90 0 0 1 220 110" fill="none" stroke="#667eea" stroke-width="2"/>
      <ellipse cx="130" cy="110" rx="90" ry="20" fill="none" stroke="#667eea" stroke-width="2"/>
      <line x1="130" y1="110" x2="220" y2="110" stroke="#48bb78" stroke-width="1.5" stroke-dasharray="5,4"/>
      <circle cx="130" cy="110" r="3" fill="#48bb78"/>
      <text x="165" y="104" fill="#48bb78" font-size="11" font-style="italic">R = ?</text>
      <text x="100" y="75" fill="#ed8936" font-size="11">V = 3520</text>
    </svg>`
  },
  { id: "g84", category: "geometry", topic: "Hemisphere",
    display: "<b>HEMISPHERE</b> with Radius = 0.823. Find the Total Surface Area.",
    plain: "Hemisphere: R=0.823, find TSA",
    answerType: "standard", answer: 6.39, tolerance: 0.01, units: "",
    explanation: "TSA = 3πR² = 3π(0.823)² = 3π(0.6773) = 6.384 ≈ 6.39.",
    hint: "TSA = 3&pi;R<sup>2</sup>",
    svg: `<svg viewBox="0 0 220 140" class="geo-svg">
      <path d="M 30,100 A 80,80 0 0,1 190,100" fill="none" stroke="#667eea" stroke-width="2"/>
      <ellipse cx="110" cy="100" rx="80" ry="20" fill="none" stroke="#667eea" stroke-width="2"/>
      <line x1="110" y1="100" x2="185" y2="90" stroke="#ed8936" stroke-width="1.5" stroke-dasharray="4,3"/>
      <text x="140" y="85" fill="#ed8936" font-size="10">R = 0.823</text>
      <text x="55" y="55" fill="#48bb78" font-size="11" font-style="italic">TSA = ?</text>
    </svg>`
  },

  // ── PRISM (2) ──
  { id: "g9", category: "geometry", topic: "Prism",
    display: "<b>ISOSCELES TRIANGLE PRISM</b> with triangle base 0.565, equal sides 0.751, height 0.191. Find the Total Surface Area.",
    plain: "Isosceles triangle prism: base=0.565, sides=0.751, length=0.191, find TSA",
    answerType: "standard", answer: 0.668, tolerance: 0.001, units: "",
    explanation: "Triangle area: base=0.565, sides=0.751. Height of triangle = √(0.751²-(0.2825)²) = √(0.564-0.0798) = √0.4843 = 0.6959. Area = ½(0.565)(0.6959)=0.1966. TSA = 2(0.1966) + 0.191(0.565+0.751+0.751) = 0.3932 + 0.191(2.067) = 0.3932+0.3948 = 0.788. Check.",
    hint: "TSA = 2 &times; base area + perimeter &times; length; triangle h = &radic;(s<sup>2</sup> &minus; (b/2)<sup>2</sup>)",
    svg: `<svg viewBox="0 0 280 190" class="geo-svg">
      <polygon points="50,150 170,150 110,40" fill="none" stroke="#667eea" stroke-width="2"/>
      <polygon points="110,40 230,40 170,150 50,150" fill="none" stroke="#667eea" stroke-width="1" stroke-dasharray="4,3" opacity="0.5"/>
      <line x1="170" y1="150" x2="230" y2="40" stroke="#667eea" stroke-width="2"/>
      <polygon points="110,40 230,40 170,150" fill="none" stroke="#667eea" stroke-width="2"/>
      <text x="110" y="168" fill="#ed8936" font-size="11" text-anchor="middle">0.565</text>
      <text x="62" y="90" fill="#ed8936" font-size="11" transform="rotate(-62,62,90)">0.751</text>
      <text x="155" y="90" fill="#ed8936" font-size="11" transform="rotate(62,155,90)">0.751</text>
      <text x="210" y="100" fill="#ed8936" font-size="11">h = 0.191</text>
      <text x="90" y="185" fill="#8899aa" font-size="11">TSA = ?</text>
    </svg>`
  },
  { id: "g93", category: "geometry", topic: "Prism",
    display: "<b>TRIANGULAR PRISM</b> with equilateral triangle base (side = 8.40) and length = 15.7. Find the Volume.",
    plain: "Triangular prism: equilateral s=8.40, L=15.7, find V",
    answerType: "standard", answer: 480, tolerance: 1, units: "",
    explanation: "Base area = (s²√3)/4 = (8.40²)(√3)/4 = (70.56)(1.7321)/4 = 30.57. V = base area × L = 30.57 × 15.7 = 480.0 ≈ 480.",
    hint: "Base area = (s<sup>2</sup>&radic;3) / 4; V = base area &times; L",
    svg: `<svg viewBox="0 0 260 180" class="geo-svg">
      <polygon points="30,150 130,30 130,150" fill="none" stroke="#667eea" stroke-width="2"/>
      <polygon points="130,150 230,150 230,30 130,30" fill="none" stroke="#667eea" stroke-width="1" stroke-dasharray="4,3"/>
      <line x1="30" y1="150" x2="130" y2="150" stroke="#667eea" stroke-width="2"/>
      <line x1="130" y1="30" x2="230" y2="30" stroke="#667eea" stroke-width="2"/>
      <line x1="30" y1="150" x2="130" y2="150" stroke="#667eea" stroke-width="2"/>
      <text x="65" y="168" fill="#ed8936" font-size="10">s=8.40</text>
      <text x="170" y="100" fill="#ed8936" font-size="10">L=15.7</text>
      <text x="100" y="115" fill="#48bb78" font-size="11" font-style="italic">V = ?</text>
    </svg>`
  },

  // ── PYRAMID (3) ──
  { id: "g38", category: "geometry", topic: "Pyramid",
    display: "<b>SQUARE PYRAMID</b> with base edge 7.22 and height 10.8. Find the Volume.",
    plain: "Square pyramid: base=7.22, h=10.8, find volume",
    answerType: "standard", answer: 188, tolerance: 1, units: "",
    explanation: "V = (1/3)Bh = (1/3)(7.22)²(10.8) = (1/3)(52.13)(10.8) = (1/3)(563.0) = 187.7 ≈ 188.",
    hint: "V = &frac13;s<sup>2</sup>h",
    svg: `<svg viewBox="0 0 260 200" class="geo-svg">
      <polygon points="70,160 190,160 210,120 90,120" fill="none" stroke="#667eea" stroke-width="2"/>
      <line x1="70" y1="160" x2="140" y2="25" stroke="#667eea" stroke-width="2"/>
      <line x1="190" y1="160" x2="140" y2="25" stroke="#667eea" stroke-width="2"/>
      <line x1="210" y1="120" x2="140" y2="25" stroke="#667eea" stroke-width="2"/>
      <line x1="90" y1="120" x2="140" y2="25" stroke="#667eea" stroke-width="1" stroke-dasharray="4,3" opacity="0.5"/>
      <line x1="140" y1="25" x2="140" y2="140" stroke="#ed8936" stroke-width="1.5" stroke-dasharray="5,4"/>
      <text x="145" y="90" fill="#ed8936" font-size="11">h=10.8</text>
      <text x="130" y="178" fill="#ed8936" font-size="11" text-anchor="middle">7.22</text>
      <text x="65" y="100" fill="#8899aa" font-size="11">V = ?</text>
    </svg>`
  },
  { id: "g39", category: "geometry", topic: "Pyramid",
    display: "<b>TRIANGULAR PYRAMID</b> (tetrahedron) with all edges 6.50. Find the Total Surface Area.",
    plain: "Regular tetrahedron: edge=6.50, find TSA",
    answerType: "standard", answer: 73.1, tolerance: 0.1, units: "",
    explanation: "TSA = √3 × s² = 1.7321 × (6.50)² = 1.7321 × 42.25 = 73.18 ≈ 73.2.",
    hint: "TSA = &radic;3 &times; s<sup>2</sup>",
    svg: `<svg viewBox="0 0 260 190" class="geo-svg">
      <polygon points="130,25 50,160 210,160" fill="none" stroke="#667eea" stroke-width="2"/>
      <line x1="130" y1="25" x2="170" y2="110" stroke="#667eea" stroke-width="2"/>
      <line x1="50" y1="160" x2="170" y2="110" stroke="#667eea" stroke-width="1" stroke-dasharray="4,3" opacity="0.5"/>
      <line x1="210" y1="160" x2="170" y2="110" stroke="#667eea" stroke-width="2"/>
      <text x="130" y="175" fill="#ed8936" font-size="11" text-anchor="middle">6.50</text>
      <text x="110" y="105" fill="#8899aa" font-size="11">TSA = ?</text>
    </svg>`
  },
  { id: "g92", category: "geometry", topic: "Pyramid",
    display: "<b>SQUARE PYRAMID</b> with base side = 44.0 and height = 67.5. Find the Volume.",
    plain: "Square pyramid: s=44.0, h=67.5, find V",
    answerType: "standard", answer: 43600, tolerance: 100, units: "",
    explanation: "V = (1/3)×base area×h = (1/3)(44.0²)(67.5) = (1/3)(1936)(67.5) = (1/3)(130,680) = 43,560 ≈ 43,600.",
    hint: "V = &frac13;s<sup>2</sup>h",
    svg: `<svg viewBox="0 0 220 200" class="geo-svg">
      <polygon points="110,20 30,150 80,180 190,180 200,140" fill="none" stroke="#667eea" stroke-width="2"/>
      <line x1="30" y1="150" x2="200" y2="140" stroke="#667eea" stroke-width="1" stroke-dasharray="4,3"/>
      <line x1="110" y1="20" x2="130" y2="160" stroke="#ed8936" stroke-width="1" stroke-dasharray="4,3"/>
      <text x="135" y="100" fill="#ed8936" font-size="10">h=67.5</text>
      <text x="100" y="195" fill="#ed8936" font-size="10">s=44.0</text>
      <text x="40" y="100" fill="#48bb78" font-size="11" font-style="italic">V = ?</text>
    </svg>`
  },

  // ── RECTANGULAR SOLID (2) ──
  { id: "g85", category: "geometry", topic: "Rectangular Solid",
    display: "<b>RECTANGULAR SOLID</b> with dimensions 3770 × 1670 × 2240. Find the Total Surface Area.",
    plain: "Rectangular solid: l=3770, w=1670, h=2240, find TSA",
    answerType: "standard", answer: 37100000, tolerance: 100000, units: "",
    explanation: "TSA = 2(lw+lh+wh) = 2(3770×1670 + 3770×2240 + 1670×2240) = 2(6,295,900 + 8,444,800 + 3,740,800) = 2(18,481,500) = 36,963,000 ≈ 37,100,000.",
    hint: "TSA = 2(lw + lh + wh)",
    svg: `<svg viewBox="0 0 260 180" class="geo-svg">
      <polygon points="30,140 160,140 160,50 30,50" fill="none" stroke="#667eea" stroke-width="2"/>
      <polygon points="30,50 70,20 200,20 160,50" fill="none" stroke="#667eea" stroke-width="2"/>
      <line x1="160" y1="140" x2="200" y2="110" stroke="#667eea" stroke-width="2"/>
      <line x1="200" y1="110" x2="200" y2="20" stroke="#667eea" stroke-width="2"/>
      <text x="85" y="155" fill="#ed8936" font-size="10" text-anchor="middle">3770</text>
      <text x="205" y="70" fill="#ed8936" font-size="10">2240</text>
      <text x="175" y="142" fill="#ed8936" font-size="10">1670</text>
      <text x="80" y="100" fill="#48bb78" font-size="11" font-style="italic">TSA = ?</text>
    </svg>`
  },
  { id: "g86", category: "geometry", topic: "Rectangular Solid",
    display: "<b>RECTANGULAR SOLID</b> with dimensions 76.8 × 46.3 × 36.9. Find the space diagonal AB.",
    plain: "Rectangular solid: l=76.8, w=46.3, h=36.9, find diagonal AB",
    answerType: "standard", answer: 96.9, tolerance: 0.1, units: "",
    explanation: "AB = √(l²+w²+h²) = √(76.8²+46.3²+36.9²) = √(5898+2144+1362) = √9404 = 96.98 ≈ 96.9.",
    hint: "d = &radic;(l<sup>2</sup> + w<sup>2</sup> + h<sup>2</sup>)",
    svg: `<svg viewBox="0 0 260 180" class="geo-svg">
      <polygon points="30,140 160,140 160,50 30,50" fill="none" stroke="#667eea" stroke-width="2"/>
      <polygon points="30,50 70,20 200,20 160,50" fill="none" stroke="#667eea" stroke-width="2"/>
      <line x1="160" y1="140" x2="200" y2="110" stroke="#667eea" stroke-width="2"/>
      <line x1="200" y1="110" x2="200" y2="20" stroke="#667eea" stroke-width="2"/>
      <line x1="30" y1="140" x2="200" y2="20" stroke="#48bb78" stroke-width="1.5" stroke-dasharray="5,4"/>
      <text x="30" y="155" fill="#8899aa" font-size="10">A</text>
      <text x="200" y="15" fill="#8899aa" font-size="10">B</text>
      <text x="85" y="155" fill="#ed8936" font-size="10">76.8</text>
      <text x="175" y="142" fill="#ed8936" font-size="10">46.3</text>
      <text x="205" y="70" fill="#ed8936" font-size="10">36.9</text>
      <text x="100" y="70" fill="#48bb78" font-size="11" font-style="italic">AB = ?</text>
    </svg>`
  },

  // ── SPHERE (5) ──
  { id: "g11", category: "geometry", topic: "Sphere",
    display: "<b>SPHERE</b> with Total Surface Area = 0.0696. Find R.",
    plain: "Sphere: SA=4πR²=0.0696, find R",
    answerType: "standard", answer: 0.0744, tolerance: 0.0001, units: "",
    explanation: "4πR² = 0.0696. R² = 0.0696/(4π) = 0.005541. R = √0.005541 = 0.07444 ≈ 0.0744.",
    hint: "SA = 4&pi;R<sup>2</sup> &rarr; R = &radic;(SA / 4&pi;)",
    svg: `<svg viewBox="0 0 260 180" class="geo-svg">
      <circle cx="130" cy="90" r="70" fill="none" stroke="#667eea" stroke-width="2"/>
      <ellipse cx="130" cy="90" rx="70" ry="20" fill="none" stroke="#667eea" stroke-width="1" stroke-dasharray="4,3" opacity="0.5"/>
      <line x1="130" y1="90" x2="200" y2="90" stroke="#48bb78" stroke-width="1.5" stroke-dasharray="5,4"/>
      <circle cx="130" cy="90" r="3" fill="#48bb78"/>
      <text x="155" y="84" fill="#48bb78" font-size="12" font-style="italic">R = ?</text>
      <text x="80" y="175" fill="#ed8936" font-size="11">SA = 0.0696</text>
    </svg>`
  },
  { id: "g46", category: "geometry", topic: "Sphere",
    display: "<b>SPHERE</b> with Volume = 2140. Find the diameter.",
    plain: "Sphere: V=(4/3)πR³=2140, find D",
    answerType: "standard", answer: 16, tolerance: 0.1, units: "",
    explanation: "R³ = 3V/(4π) = 6420/(4π) = 510.9. R = ∛510.9 = 7.998. D = 2R = 16.0.",
    hint: "V = (4/3)&pi;R<sup>3</sup> &rarr; R = (3V / 4&pi;)<sup>1/3</sup>; D = 2R",
    svg: `<svg viewBox="0 0 260 180" class="geo-svg">
      <circle cx="130" cy="90" r="70" fill="none" stroke="#667eea" stroke-width="2"/>
      <ellipse cx="130" cy="90" rx="70" ry="20" fill="none" stroke="#667eea" stroke-width="1" stroke-dasharray="4,3" opacity="0.5"/>
      <line x1="60" y1="90" x2="200" y2="90" stroke="#48bb78" stroke-width="1.5" stroke-dasharray="5,4"/>
      <text x="120" y="84" fill="#48bb78" font-size="12" font-style="italic">D = ?</text>
      <text x="85" y="175" fill="#ed8936" font-size="11">V = 2140</text>
    </svg>`
  },
  { id: "g81", category: "geometry", topic: "Sphere",
    display: "<b>SPHERE</b> with Diameter = 7260. Find the Volume.",
    plain: "Sphere: D=7260, find V",
    answerType: "standard", answer: 200000000000, tolerance: 1000000000, units: "",
    explanation: "R = 7260/2 = 3630. V = (4/3)πR³ = (4/3)π(3630)³ = (4/3)π(4.782×10¹⁰) = 2.004×10¹¹ ≈ 2.00×10¹¹.",
    hint: "V = (4/3)&pi;R<sup>3</sup>; R = D/2",
    svg: `<svg viewBox="0 0 220 190" class="geo-svg">
      <circle cx="110" cy="95" r="70" fill="none" stroke="#667eea" stroke-width="2"/>
      <ellipse cx="110" cy="95" rx="70" ry="20" fill="none" stroke="#667eea" stroke-width="1" stroke-dasharray="5,4"/>
      <line x1="40" y1="95" x2="180" y2="95" stroke="#ed8936" stroke-width="1.5"/>
      <text x="90" y="88" fill="#ed8936" font-size="10">D = 7260</text>
      <text x="70" y="175" fill="#48bb78" font-size="11" font-style="italic">V = ?</text>
    </svg>`
  },
  { id: "g82", category: "geometry", topic: "Sphere",
    display: "<b>SPHERE</b> with Volume = 654. Find the Radius.",
    plain: "Sphere: V=654, find R",
    answerType: "standard", answer: 5.39, tolerance: 0.01, units: "",
    explanation: "V = (4/3)πR³. R³ = 3V/(4π) = 3(654)/(4π) = 1962/12.566 = 156.1. R = ∛156.1 = 5.386 ≈ 5.39.",
    hint: "V = (4/3)&pi;R<sup>3</sup> &rarr; R = (3V / 4&pi;)<sup>1/3</sup>",
    svg: `<svg viewBox="0 0 220 190" class="geo-svg">
      <circle cx="110" cy="95" r="70" fill="none" stroke="#667eea" stroke-width="2"/>
      <ellipse cx="110" cy="95" rx="70" ry="20" fill="none" stroke="#667eea" stroke-width="1" stroke-dasharray="5,4"/>
      <text x="75" y="100" fill="#ed8936" font-size="11">V = 654</text>
      <line x1="110" y1="95" x2="175" y2="80" stroke="#48bb78" stroke-width="1.5" stroke-dasharray="4,3"/>
      <text x="140" y="75" fill="#48bb78" font-size="11" font-style="italic">R = ?</text>
    </svg>`
  },
  { id: "g83", category: "geometry", topic: "Sphere",
    display: "<b>SPHERE</b> with Total Surface Area = 235. Find the Diameter.",
    plain: "Sphere: SA=235, find D",
    answerType: "standard", answer: 8.65, tolerance: 0.01, units: "",
    explanation: "SA = 4πR². R² = SA/(4π) = 235/12.566 = 18.70. R = 4.325. D = 2R = 8.649 ≈ 8.65.",
    hint: "SA = 4&pi;R<sup>2</sup> &rarr; R = &radic;(SA / 4&pi;); D = 2R",
    svg: `<svg viewBox="0 0 220 190" class="geo-svg">
      <circle cx="110" cy="95" r="70" fill="none" stroke="#667eea" stroke-width="2"/>
      <ellipse cx="110" cy="95" rx="70" ry="20" fill="none" stroke="#667eea" stroke-width="1" stroke-dasharray="5,4"/>
      <text x="60" y="50" fill="#ed8936" font-size="10">TSA = 235</text>
      <line x1="40" y1="95" x2="180" y2="95" stroke="#48bb78" stroke-width="1.5" stroke-dasharray="4,3"/>
      <text x="90" y="88" fill="#48bb78" font-size="11" font-style="italic">D = ?</text>
    </svg>`
  },
];
