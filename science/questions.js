// UIL Science Trainer – Starter Question Bank
// Format: { id, subject, topic, question, choices: [A,B,C,D], answer (0-3), explanation }

const SCIENCE_QUESTIONS = [

  // ═══════════════════════════════════════════
  //  BIOLOGY
  // ═══════════════════════════════════════════

  // Cell Biology
  { id: "b1", subject: "biology", topic: "Cell Biology", question: "Which organelle is responsible for producing ATP through cellular respiration?", choices: ["Ribosome", "Mitochondria", "Golgi apparatus", "Endoplasmic reticulum"], answer: 1, explanation: "Mitochondria are the 'powerhouses' of the cell, converting glucose and oxygen into ATP through oxidative phosphorylation." },
  { id: "b2", subject: "biology", topic: "Cell Biology", question: "What is the primary function of the rough endoplasmic reticulum?", choices: ["Lipid synthesis", "Protein synthesis and transport", "Cell division", "Energy production"], answer: 1, explanation: "The rough ER is studded with ribosomes and is responsible for synthesizing and transporting proteins." },
  { id: "b3", subject: "biology", topic: "Cell Biology", question: "During which phase of mitosis do chromosomes line up along the cell's equator?", choices: ["Prophase", "Metaphase", "Anaphase", "Telophase"], answer: 1, explanation: "During metaphase, chromosomes align along the metaphase plate (cell equator) before being separated." },
  { id: "b4", subject: "biology", topic: "Cell Biology", question: "Which type of transport requires energy to move molecules against their concentration gradient?", choices: ["Osmosis", "Facilitated diffusion", "Active transport", "Simple diffusion"], answer: 2, explanation: "Active transport uses ATP to move molecules from low to high concentration, against the gradient." },

  // Genetics
  { id: "b5", subject: "biology", topic: "Genetics", question: "If a heterozygous tall plant (Tt) is crossed with a homozygous short plant (tt), what percentage of offspring are expected to be short?", choices: ["0%", "25%", "50%", "75%"], answer: 2, explanation: "Tt × tt produces Tt and tt in a 1:1 ratio, so 50% of offspring will be short (tt)." },
  { id: "b6", subject: "biology", topic: "Genetics", question: "Which type of RNA carries amino acids to the ribosome during translation?", choices: ["mRNA", "tRNA", "rRNA", "snRNA"], answer: 1, explanation: "Transfer RNA (tRNA) carries specific amino acids to the ribosome, matching its anticodon to the mRNA codon." },
  { id: "b7", subject: "biology", topic: "Genetics", question: "A point mutation that changes a codon to a stop codon is called a:", choices: ["Missense mutation", "Silent mutation", "Nonsense mutation", "Frameshift mutation"], answer: 2, explanation: "A nonsense mutation creates a premature stop codon, resulting in a truncated (shortened) protein." },
  { id: "b8", subject: "biology", topic: "Genetics", question: "In DNA replication, which enzyme unwinds the double helix?", choices: ["DNA polymerase", "Helicase", "Ligase", "Primase"], answer: 1, explanation: "Helicase breaks the hydrogen bonds between base pairs, unwinding and separating the two DNA strands." },

  // Ecology
  { id: "b9", subject: "biology", topic: "Ecology", question: "Which trophic level has the most energy available in an ecosystem?", choices: ["Primary consumers", "Secondary consumers", "Tertiary consumers", "Producers"], answer: 3, explanation: "Producers (autotrophs) have the most energy. Only about 10% of energy transfers to each successive trophic level." },
  { id: "b10", subject: "biology", topic: "Ecology", question: "What type of relationship exists when one organism benefits while the other is neither helped nor harmed?", choices: ["Mutualism", "Parasitism", "Commensalism", "Competition"], answer: 2, explanation: "Commensalism is a symbiotic relationship where one organism benefits and the other is unaffected." },
  { id: "b11", subject: "biology", topic: "Ecology", question: "The process by which nitrogen gas (N₂) is converted to ammonia (NH₃) by bacteria is called:", choices: ["Denitrification", "Nitrogen fixation", "Ammonification", "Nitrification"], answer: 1, explanation: "Nitrogen fixation converts atmospheric N₂ into ammonia, primarily by Rhizobium bacteria in root nodules of legumes." },

  // Evolution
  { id: "b12", subject: "biology", topic: "Evolution", question: "Structures that are similar in different species due to common ancestry are called:", choices: ["Analogous structures", "Homologous structures", "Vestigial structures", "Convergent structures"], answer: 1, explanation: "Homologous structures share a common evolutionary origin but may have different functions (e.g., human arm, whale flipper, bat wing)." },
  { id: "b13", subject: "biology", topic: "Evolution", question: "Which mechanism of evolution involves random changes in allele frequencies, especially in small populations?", choices: ["Natural selection", "Gene flow", "Genetic drift", "Mutation"], answer: 2, explanation: "Genetic drift is the random fluctuation of allele frequencies, having the greatest effect in small populations (bottleneck and founder effects)." },

  // Body Systems
  { id: "b14", subject: "biology", topic: "Body Systems", question: "Which part of the nephron is primarily responsible for water reabsorption?", choices: ["Bowman's capsule", "Loop of Henle", "Distal tubule", "Collecting duct"], answer: 1, explanation: "The Loop of Henle creates a concentration gradient in the kidney medulla, enabling water reabsorption from the filtrate." },
  { id: "b15", subject: "biology", topic: "Body Systems", question: "The sinoatrial (SA) node is often called the 'pacemaker' because it:", choices: ["Pumps blood to the lungs", "Initiates the heartbeat electrical signal", "Separates oxygenated and deoxygenated blood", "Controls blood pressure"], answer: 1, explanation: "The SA node generates electrical impulses that set the rhythm for the heart's contractions." },
  { id: "b16", subject: "biology", topic: "Body Systems", question: "Which type of white blood cell produces antibodies?", choices: ["Neutrophils", "B lymphocytes (plasma cells)", "Macrophages", "Eosinophils"], answer: 1, explanation: "B lymphocytes differentiate into plasma cells that produce antibodies specific to antigens." },

  // Taxonomy
  { id: "b17", subject: "biology", topic: "Taxonomy", question: "Which domain includes all multicellular organisms with membrane-bound organelles?", choices: ["Bacteria", "Archaea", "Eukarya", "Protista"], answer: 2, explanation: "Eukarya includes all organisms with eukaryotic cells — protists, fungi, plants, and animals." },
  { id: "b18", subject: "biology", topic: "Taxonomy", question: "In binomial nomenclature, which taxonomic levels make up an organism's scientific name?", choices: ["Kingdom and Phylum", "Family and Order", "Genus and Species", "Class and Order"], answer: 2, explanation: "Binomial nomenclature uses the genus and species names (e.g., Homo sapiens)." },

  // Photosynthesis & Respiration
  { id: "b19", subject: "biology", topic: "Photosynthesis", question: "In which stage of photosynthesis is oxygen produced?", choices: ["Calvin cycle", "Light-dependent reactions", "Glycolysis", "Krebs cycle"], answer: 1, explanation: "Oxygen is a byproduct of the light-dependent reactions when water molecules are split (photolysis) in Photosystem II." },
  { id: "b20", subject: "biology", topic: "Photosynthesis", question: "The Calvin cycle occurs in which part of the chloroplast?", choices: ["Thylakoid membrane", "Stroma", "Outer membrane", "Intermembrane space"], answer: 1, explanation: "The Calvin cycle (light-independent reactions) occurs in the stroma, using CO₂ and ATP/NADPH from the light reactions to produce G3P." },

  // ═══════════════════════════════════════════
  //  CHEMISTRY
  // ═══════════════════════════════════════════

  // Atomic Structure
  { id: "c1", subject: "chemistry", topic: "Atomic Structure", question: "How many electrons can the third energy level (n=3) hold?", choices: ["2", "8", "18", "32"], answer: 2, explanation: "The maximum number of electrons in an energy level is 2n². For n=3: 2(3²) = 2(9) = 18 electrons." },
  { id: "c2", subject: "chemistry", topic: "Atomic Structure", question: "Which quantum number describes the shape of an orbital?", choices: ["Principal (n)", "Angular momentum (ℓ)", "Magnetic (mℓ)", "Spin (ms)"], answer: 1, explanation: "The angular momentum quantum number (ℓ) determines the shape: ℓ=0 is s (sphere), ℓ=1 is p (dumbbell), ℓ=2 is d, ℓ=3 is f." },
  { id: "c3", subject: "chemistry", topic: "Atomic Structure", question: "Isotopes of an element differ in their number of:", choices: ["Protons", "Electrons", "Neutrons", "Valence electrons"], answer: 2, explanation: "Isotopes have the same number of protons but different numbers of neutrons, giving them different mass numbers." },

  // Periodic Table
  { id: "c4", subject: "chemistry", topic: "Periodic Table", question: "As you move from left to right across a period, atomic radius generally:", choices: ["Increases", "Decreases", "Remains the same", "Fluctuates randomly"], answer: 1, explanation: "Across a period, increasing nuclear charge pulls electrons closer, decreasing the atomic radius despite adding electrons to the same shell." },
  { id: "c5", subject: "chemistry", topic: "Periodic Table", question: "Which group of elements has a full valence shell and is generally unreactive?", choices: ["Alkali metals", "Halogens", "Noble gases", "Transition metals"], answer: 2, explanation: "Noble gases (Group 18) have full valence electron shells, making them very stable and generally unreactive." },
  { id: "c6", subject: "chemistry", topic: "Periodic Table", question: "Electronegativity generally increases in which direction on the periodic table?", choices: ["Down and to the left", "Up and to the right", "Down and to the right", "Up and to the left"], answer: 1, explanation: "Electronegativity increases going up (smaller atoms hold electrons more tightly) and to the right (more protons, stronger pull). Fluorine has the highest electronegativity." },

  // Chemical Bonding
  { id: "c7", subject: "chemistry", topic: "Chemical Bonding", question: "A bond formed by the sharing of electrons between two nonmetal atoms is called a:", choices: ["Ionic bond", "Covalent bond", "Metallic bond", "Hydrogen bond"], answer: 1, explanation: "Covalent bonds form when two nonmetal atoms share electron pairs to achieve stable electron configurations." },
  { id: "c8", subject: "chemistry", topic: "Chemical Bonding", question: "According to VSEPR theory, a molecule with four bonding pairs and no lone pairs has what geometry?", choices: ["Linear", "Trigonal planar", "Tetrahedral", "Trigonal bipyramidal"], answer: 2, explanation: "Four electron groups with no lone pairs arrange in a tetrahedral geometry with bond angles of approximately 109.5°." },
  { id: "c9", subject: "chemistry", topic: "Chemical Bonding", question: "Which intermolecular force is the strongest?", choices: ["London dispersion forces", "Dipole-dipole interactions", "Hydrogen bonding", "Ion-dipole forces"], answer: 3, explanation: "Ion-dipole forces (between an ion and a polar molecule) are the strongest intermolecular forces, followed by hydrogen bonding." },

  // Reactions & Stoichiometry
  { id: "c10", subject: "chemistry", topic: "Reactions", question: "In the reaction 2H₂ + O₂ → 2H₂O, how many moles of water are produced from 4 moles of H₂?", choices: ["2 moles", "4 moles", "6 moles", "8 moles"], answer: 1, explanation: "The ratio is 2 mol H₂ : 2 mol H₂O (or 1:1). So 4 mol H₂ produces 4 mol H₂O." },
  { id: "c11", subject: "chemistry", topic: "Reactions", question: "A reaction that absorbs heat from its surroundings is classified as:", choices: ["Exothermic", "Endothermic", "Isothermal", "Adiabatic"], answer: 1, explanation: "Endothermic reactions absorb heat (positive ΔH). The products have more energy than the reactants." },
  { id: "c12", subject: "chemistry", topic: "Reactions", question: "What is the oxidation state of sulfur in H₂SO₄?", choices: ["+2", "+4", "+6", "-2"], answer: 2, explanation: "In H₂SO₄: H is +1 (×2 = +2), O is -2 (×4 = -8). For the compound to be neutral: +2 + S + (-8) = 0, so S = +6." },

  // Acids & Bases
  { id: "c13", subject: "chemistry", topic: "Acids & Bases", question: "A solution with a pH of 3 has what hydrogen ion concentration?", choices: ["1 × 10⁻¹ M", "1 × 10⁻³ M", "1 × 10⁻⁷ M", "1 × 10⁻¹⁴ M"], answer: 1, explanation: "pH = -log[H⁺]. A pH of 3 means [H⁺] = 10⁻³ = 1 × 10⁻³ M." },
  { id: "c14", subject: "chemistry", topic: "Acids & Bases", question: "Which of the following is a strong acid?", choices: ["Acetic acid (CH₃COOH)", "Hydrochloric acid (HCl)", "Carbonic acid (H₂CO₃)", "Phosphoric acid (H₃PO₄)"], answer: 1, explanation: "HCl is one of the seven strong acids that completely dissociate in water. The others listed are weak acids." },
  { id: "c15", subject: "chemistry", topic: "Acids & Bases", question: "A buffer solution resists changes in pH because it contains:", choices: ["A strong acid and a strong base", "A weak acid and its conjugate base", "Two strong acids", "Pure water and a salt"], answer: 1, explanation: "Buffers contain a weak acid/base pair. The weak acid neutralizes added base, and the conjugate base neutralizes added acid." },

  // Gas Laws
  { id: "c16", subject: "chemistry", topic: "Gas Laws", question: "At STP (standard temperature and pressure), one mole of an ideal gas occupies:", choices: ["11.2 L", "22.4 L", "44.8 L", "1.00 L"], answer: 1, explanation: "At STP (0°C, 1 atm), one mole of any ideal gas occupies 22.4 liters (molar volume)." },
  { id: "c17", subject: "chemistry", topic: "Gas Laws", question: "According to Boyle's Law, if pressure on a gas doubles (at constant temperature), the volume:", choices: ["Doubles", "Is halved", "Remains the same", "Quadruples"], answer: 1, explanation: "Boyle's Law: P₁V₁ = P₂V₂. At constant temperature, pressure and volume are inversely proportional. Double pressure → half volume." },

  // Solutions
  { id: "c18", subject: "chemistry", topic: "Solutions", question: "What is the molarity of a solution containing 2 moles of NaCl dissolved in 500 mL of solution?", choices: ["1 M", "2 M", "4 M", "0.5 M"], answer: 2, explanation: "Molarity = moles of solute / liters of solution = 2 mol / 0.5 L = 4 M." },
  { id: "c19", subject: "chemistry", topic: "Solutions", question: "Adding a solute to a solvent will cause the boiling point to:", choices: ["Decrease", "Increase", "Remain the same", "Become unpredictable"], answer: 1, explanation: "Boiling point elevation is a colligative property. Adding solute particles raises the boiling point because more energy is needed to vaporize the solvent." },
  { id: "c20", subject: "chemistry", topic: "Solutions", question: "Which factor does NOT affect the rate of dissolving a solid solute?", choices: ["Stirring", "Temperature", "Surface area of solute", "Color of solute"], answer: 3, explanation: "Color is a physical property that does not affect dissolving rate. Stirring, temperature, and surface area all increase dissolution rate." },

  // ═══════════════════════════════════════════
  //  PHYSICS
  // ═══════════════════════════════════════════

  // Mechanics
  { id: "p1", subject: "physics", topic: "Mechanics", question: "A car accelerates from rest at 3 m/s². What is its velocity after 5 seconds?", choices: ["8 m/s", "15 m/s", "25 m/s", "30 m/s"], answer: 1, explanation: "v = v₀ + at = 0 + (3)(5) = 15 m/s." },
  { id: "p2", subject: "physics", topic: "Mechanics", question: "An object is in free fall near Earth's surface. Ignoring air resistance, its acceleration is approximately:", choices: ["5.0 m/s²", "9.8 m/s²", "15.0 m/s²", "32.2 m/s²"], answer: 1, explanation: "The acceleration due to gravity near Earth's surface is approximately 9.8 m/s² (or ~10 m/s² for estimation). 32.2 ft/s² is the value in imperial units." },
  { id: "p3", subject: "physics", topic: "Mechanics", question: "According to Newton's Third Law, when you push on a wall, the wall:", choices: ["Does not push back", "Pushes back with less force", "Pushes back with equal and opposite force", "Pushes back with greater force"], answer: 2, explanation: "Newton's Third Law: For every action, there is an equal and opposite reaction. The wall pushes back on you with the same magnitude of force." },
  { id: "p4", subject: "physics", topic: "Mechanics", question: "What is the net force on a 5 kg object accelerating at 4 m/s²?", choices: ["1.25 N", "9 N", "20 N", "80 N"], answer: 2, explanation: "Newton's Second Law: F = ma = (5 kg)(4 m/s²) = 20 N." },

  // Energy & Work
  { id: "p5", subject: "physics", topic: "Energy", question: "A 2 kg ball is held 10 m above the ground. What is its gravitational potential energy? (g = 10 m/s²)", choices: ["20 J", "100 J", "200 J", "2000 J"], answer: 2, explanation: "PE = mgh = (2 kg)(10 m/s²)(10 m) = 200 J." },
  { id: "p6", subject: "physics", topic: "Energy", question: "If a force of 50 N moves an object 4 m in the direction of the force, how much work is done?", choices: ["12.5 J", "46 J", "54 J", "200 J"], answer: 3, explanation: "Work = Force × distance × cos(θ). When force and displacement are in the same direction: W = (50 N)(4 m) = 200 J." },
  { id: "p7", subject: "physics", topic: "Energy", question: "The kinetic energy of an object depends on its:", choices: ["Mass only", "Velocity only", "Mass and velocity", "Mass and height"], answer: 2, explanation: "KE = ½mv². Kinetic energy depends on both mass and the square of velocity." },

  // Waves & Sound
  { id: "p8", subject: "physics", topic: "Waves", question: "If a wave has a frequency of 500 Hz and a wavelength of 0.68 m, what is its speed?", choices: ["170 m/s", "340 m/s", "500 m/s", "735 m/s"], answer: 1, explanation: "Wave speed = frequency × wavelength = (500 Hz)(0.68 m) = 340 m/s (approximately the speed of sound in air)." },
  { id: "p9", subject: "physics", topic: "Waves", question: "Which type of wave requires a medium to travel through?", choices: ["Electromagnetic waves", "Mechanical waves", "Light waves", "Radio waves"], answer: 1, explanation: "Mechanical waves (sound, water waves, seismic waves) require a medium. Electromagnetic waves can travel through a vacuum." },
  { id: "p10", subject: "physics", topic: "Waves", question: "The Doppler effect explains why:", choices: ["Light bends around objects", "Sound seems louder at night", "A siren sounds higher-pitched as it approaches", "Echoes occur in mountains"], answer: 2, explanation: "The Doppler effect describes the change in frequency/pitch of a wave as the source moves toward (higher pitch) or away from (lower pitch) an observer." },

  // Electricity
  { id: "p11", subject: "physics", topic: "Electricity", question: "According to Ohm's Law, if the voltage across a resistor is 12 V and the current is 3 A, the resistance is:", choices: ["0.25 Ω", "4 Ω", "15 Ω", "36 Ω"], answer: 1, explanation: "Ohm's Law: V = IR, so R = V/I = 12 V / 3 A = 4 Ω." },
  { id: "p12", subject: "physics", topic: "Electricity", question: "In a series circuit with three resistors (2 Ω, 3 Ω, 5 Ω), the total resistance is:", choices: ["1.03 Ω", "3.33 Ω", "10 Ω", "30 Ω"], answer: 2, explanation: "In a series circuit, total resistance is the sum: R_total = 2 + 3 + 5 = 10 Ω." },
  { id: "p13", subject: "physics", topic: "Electricity", question: "Electric power is calculated by:", choices: ["P = V/I", "P = IR", "P = VI", "P = V²/I"], answer: 2, explanation: "Electric power P = VI (voltage × current). It can also be written as P = I²R or P = V²/R." },

  // Light & Optics
  { id: "p14", subject: "physics", topic: "Optics", question: "When light passes from air into glass, it bends toward the normal because glass has a:", choices: ["Lower index of refraction", "Higher index of refraction", "Lower density", "Higher wavelength"], answer: 1, explanation: "Glass has a higher index of refraction than air. Light slows down in denser media and bends toward the normal (Snell's Law)." },
  { id: "p15", subject: "physics", topic: "Optics", question: "A converging (convex) lens can produce which type of image when the object is beyond the focal point?", choices: ["Only virtual and upright", "Only real and inverted", "Only virtual and inverted", "Real and inverted, or virtual and upright"], answer: 1, explanation: "When the object is beyond the focal point of a converging lens, a real, inverted image is produced on the other side." },

  // Thermodynamics
  { id: "p16", subject: "physics", topic: "Thermodynamics", question: "Heat always flows spontaneously from:", choices: ["Cold to hot objects", "Hot to cold objects", "Low pressure to high pressure", "High density to low density"], answer: 1, explanation: "The Second Law of Thermodynamics states that heat spontaneously flows from hot to cold objects until thermal equilibrium is reached." },
  { id: "p17", subject: "physics", topic: "Thermodynamics", question: "How much heat is needed to raise the temperature of 200 g of water by 5°C? (Specific heat of water = 4.18 J/g°C)", choices: ["836 J", "1045 J", "4180 J", "20900 J"], answer: 2, explanation: "Q = mcΔT = (200 g)(4.18 J/g°C)(5°C) = 4180 J." },

  // Momentum
  { id: "p18", subject: "physics", topic: "Momentum", question: "What is the momentum of a 3 kg object moving at 8 m/s?", choices: ["2.67 kg·m/s", "11 kg·m/s", "24 kg·m/s", "192 kg·m/s"], answer: 2, explanation: "Momentum = mass × velocity = (3 kg)(8 m/s) = 24 kg·m/s." },
  { id: "p19", subject: "physics", topic: "Momentum", question: "In a perfectly inelastic collision, the two objects:", choices: ["Bounce off each other", "Stick together", "Both stop moving", "Exchange velocities"], answer: 1, explanation: "In a perfectly inelastic collision, the objects stick together after colliding and move as one combined mass. Kinetic energy is not conserved, but momentum is." },
  { id: "p20", subject: "physics", topic: "Momentum", question: "The impulse experienced by an object equals:", choices: ["Force × distance", "Mass × velocity", "Force × time", "Mass × acceleration × distance"], answer: 2, explanation: "Impulse = Force × time (J = FΔt). By the impulse-momentum theorem, impulse equals the change in momentum." },

  // ═══════════════════════════════════════════
  //  BOOK: Radioactivity – A History of a Mysterious Science
  //  by Marjorie C. Malley (2025–2026 UIL Assigned Text)
  // ═══════════════════════════════════════════

  // The Beginnings (Ch. 1)
  { id: "bk1", subject: "book", topic: "The Beginnings", question: "In what year did Henri Becquerel discover radioactivity?", choices: ["1886", "1895", "1896", "1903"], answer: 2, explanation: "Henri Becquerel discovered radioactivity in 1896 when he found that uranium minerals could darken a photographic plate without exposure to light." },
  { id: "bk2", subject: "book", topic: "The Beginnings", question: "Becquerel's discovery of radioactivity was closely connected to the recent discovery of:", choices: ["Electrons", "X-rays", "Protons", "Radio waves"], answer: 1, explanation: "Becquerel was investigating whether fluorescent minerals could emit X-rays (discovered by Wilhelm Röntgen in 1895) when he stumbled upon radioactivity." },
  { id: "bk3", subject: "book", topic: "The Beginnings", question: "What material did Becquerel use in his initial experiments that led to the discovery of radioactivity?", choices: ["Thorium salts", "Radium crystals", "Uranium minerals", "Plutonium samples"], answer: 2, explanation: "Becquerel was experimenting with uranium-containing minerals (potassium uranyl sulfate) when he discovered that they emitted penetrating rays without external energy." },
  { id: "bk4", subject: "book", topic: "The Beginnings", question: "Wilhelm Röntgen's discovery of X-rays, which set the stage for Becquerel's work, occurred in:", choices: ["1890", "1895", "1896", "1900"], answer: 1, explanation: "Röntgen discovered X-rays in 1895, which inspired Becquerel and others to investigate whether other materials could produce similar penetrating radiation." },

  // The Curies (Ch. 2)
  { id: "bk5", subject: "book", topic: "The Curies", question: "Marie Curie's birth name before marriage was:", choices: ["Marie Becquerel", "Maria Skłodowska", "Marie Joliot", "Maria Rutherford"], answer: 1, explanation: "Marie Curie was born Maria Skłodowska in Warsaw, Poland, before moving to Paris where she met and married Pierre Curie." },
  { id: "bk6", subject: "book", topic: "The Curies", question: "The Curies are credited with coining which term?", choices: ["Isotope", "Radio-activity", "Nuclear fission", "Half-life"], answer: 1, explanation: "Pierre and Marie Curie coined the term 'radio-activity' to describe the phenomenon of spontaneous radiation emission they were studying." },
  { id: "bk7", subject: "book", topic: "The Curies", question: "Which two new elements did Marie Curie discover?", choices: ["Radium and Uranium", "Polonium and Radium", "Thorium and Radium", "Polonium and Francium"], answer: 1, explanation: "Marie Curie discovered polonium (named after her native Poland) and radium through painstaking chemical separation of pitchblende ore." },
  { id: "bk8", subject: "book", topic: "The Curies", question: "Marie Curie processed approximately how much pitchblende ore by hand to isolate radium?", choices: ["1 kg", "10 kg", "100 kg", "1000 kg"], answer: 2, explanation: "Between 1899 and 1902, Marie Curie processed about 100 kg of pitchblende ore by hand in a Paris courtyard to isolate a tiny amount of radium." },
  { id: "bk9", subject: "book", topic: "The Curies", question: "Marie Curie won Nobel Prizes in which two fields?", choices: ["Chemistry and Medicine", "Physics and Chemistry", "Physics and Medicine", "Chemistry and Biology"], answer: 1, explanation: "Marie Curie won the Nobel Prize in Physics (1903, shared with Pierre and Becquerel) and in Chemistry (1911) for her discovery and isolation of radium and polonium." },

  // Rutherford, Soddy & Transmutation (Ch. 3)
  { id: "bk10", subject: "book", topic: "Rutherford & Soddy", question: "Ernest Rutherford and Frederick Soddy made their groundbreaking work on transmutation at which university?", choices: ["Cambridge University", "McGill University", "University of Manchester", "University of Vienna"], answer: 1, explanation: "Rutherford and Soddy collaborated at McGill University in Montreal, Canada, where they discovered that radioactive elements were transmuting into other elements." },
  { id: "bk11", subject: "book", topic: "Rutherford & Soddy", question: "Rutherford identified two types of radiation from uranium, which he named:", choices: ["X-rays and gamma rays", "Alpha and beta rays", "Proton and neutron rays", "Cathode and anode rays"], answer: 1, explanation: "Rutherford discovered that uranium emitted two distinct types of radiation: alpha rays (less penetrating, positively charged) and beta rays (more penetrating, negatively charged)." },
  { id: "bk12", subject: "book", topic: "Rutherford & Soddy", question: "The revolutionary idea of transmutation meant that:", choices: ["Elements could be created from nothing", "Chemical elements were not immutable — they could change into other elements", "Radiation could be stopped by lead", "Atoms were indivisible"], answer: 1, explanation: "Rutherford and Soddy proposed that radioactive atoms were spontaneously transforming (transmuting) into atoms of different elements, overturning the belief that elements were unchangeable." },
  { id: "bk13", subject: "book", topic: "Rutherford & Soddy", question: "Soddy discovered that 'emanations' from thorium were actually:", choices: ["A form of light", "An inert gas produced by transmutation", "Tiny particles of thorium", "A chemical reaction with air"], answer: 1, explanation: "Soddy realized that the 'emanation' given off by thorium was an inert (noble) gas — a product of thorium's transmutation into a different element." },
  { id: "bk14", subject: "book", topic: "Rutherford & Soddy", question: "Frederick Soddy coined the word 'isotope' in which year?", choices: ["1896", "1903", "1911", "1920"], answer: 2, explanation: "Soddy coined the term 'isotope' in 1911 when he recognized that atoms of the same element could have different atomic weights but identical chemical properties." },

  // The Radioactive Earth (Ch. 4)
  { id: "bk15", subject: "book", topic: "Radioactive Earth", question: "Radioactivity provided scientists with a new method for:", choices: ["Making gold from lead", "Dating the age of rocks and the Earth", "Creating new elements in the lab", "Measuring the speed of light"], answer: 1, explanation: "Radioactive decay rates provided a 'clock' that allowed scientists to date geological samples and estimate the age of the Earth far more accurately than previous methods." },
  { id: "bk16", subject: "book", topic: "Radioactive Earth", question: "One major question radioactivity helped resolve was:", choices: ["Whether the Earth orbits the Sun", "The source of the Sun's energy and Earth's internal heat", "The composition of the atmosphere", "The cause of earthquakes"], answer: 1, explanation: "Radioactivity explained how the Earth could maintain its internal heat over billions of years and suggested a mechanism for the Sun's energy output, resolving debates about the age of the Earth." },

  // Radioactivity & Chemistry (Ch. 6)
  { id: "bk17", subject: "book", topic: "Radiochemistry", question: "The concept of 'displacement laws' in radioactivity described:", choices: ["How elements move in the periodic table when they emit alpha or beta particles", "The physical movement of radioactive materials", "How radiation displaces electrons from atoms", "The distance radiation travels through matter"], answer: 0, explanation: "The displacement laws described how an element's position in the periodic table shifts when it undergoes radioactive decay: alpha emission moves it 2 places left, beta emission moves it 1 place right." },
  { id: "bk18", subject: "book", topic: "Radiochemistry", question: "A major puzzle in early radiochemistry was that some chemically identical radioactive substances had:", choices: ["Different colors", "Different atomic weights", "Different melting points", "Different states of matter"], answer: 1, explanation: "Researchers found 'inseparable radioelements' — substances that were chemically identical but had different radioactive properties and atomic weights. This led to the concept of isotopes." },

  // Inside the Atom (Ch. 7)
  { id: "bk19", subject: "book", topic: "Inside the Atom", question: "Rutherford's famous gold foil experiment led to the discovery of:", choices: ["The electron", "The atomic nucleus", "Radioactivity", "Isotopes"], answer: 1, explanation: "Rutherford's alpha-particle scattering experiments revealed that atoms have a tiny, dense, positively charged nucleus, overturning the 'plum pudding' model of the atom." },
  { id: "bk20", subject: "book", topic: "Inside the Atom", question: "The third type of radiation discovered (after alpha and beta) was:", choices: ["X-rays", "Neutron radiation", "Gamma rays", "Cosmic rays"], answer: 2, explanation: "Gamma rays were identified as a third type of radioactive emission — highly penetrating electromagnetic radiation with no charge, distinct from the particulate alpha and beta rays." },

  // Sequel – War & Nuclear Physics (Ch. 8)
  { id: "bk21", subject: "book", topic: "Sequel", question: "The book's narrative of radioactivity's scientific history ends with which major discovery in 1938?", choices: ["The neutron", "Nuclear fission", "The positron", "Artificial radioactivity"], answer: 1, explanation: "The book's scientific narrative spans from Becquerel's 1896 discovery to Otto Hahn, Fritz Strassmann, and Lise Meitner's discovery of nuclear fission in 1938." },
  { id: "bk22", subject: "book", topic: "Sequel", question: "Which scientists are credited with the discovery of nuclear fission in 1938?", choices: ["Rutherford and Soddy", "The Curies", "Hahn, Strassmann, and Meitner", "Bohr and Einstein"], answer: 2, explanation: "Otto Hahn and Fritz Strassmann performed the experiments, and Lise Meitner (with her nephew Otto Frisch) provided the theoretical explanation of nuclear fission." },

  // Medicine & Safety (Ch. 10)
  { id: "bk23", subject: "book", topic: "Medicine & Safety", question: "Early researchers suffered from radiation because:", choices: ["They deliberately exposed themselves", "The dangers of radiation were not yet understood", "They lacked proper equipment", "They worked with very large quantities"], answer: 1, explanation: "In the early years, the harmful effects of radiation were unknown. Researchers handled radioactive materials without protection, leading to burns, illness, and in some cases death." },
  { id: "bk24", subject: "book", topic: "Medicine & Safety", question: "Radium was initially promoted as a treatment for:", choices: ["Broken bones", "Cancer and various ailments", "Mental illness", "Infectious diseases"], answer: 1, explanation: "Radium was used in early cancer treatments and was also marketed (often dangerously) as a cure for various ailments, appearing in radium spas, tonics, and health products." },
  { id: "bk25", subject: "book", topic: "Medicine & Safety", question: "Stefan Meyer, a physicist mentioned in the book, suffered damage to his:", choices: ["Eyes from radiation exposure", "Fingers from handling radioactive materials", "Lungs from inhaling radon", "Hearing from laboratory explosions"], answer: 1, explanation: "Stefan Meyer's fingers suffered radiation damage from his work handling radioactive materials, a common injury among early radiation researchers before safety protocols existed." },

  // New Industries (Ch. 11)
  { id: "bk26", subject: "book", topic: "New Industries", question: "One of the most notorious industrial uses of radioactivity was:", choices: ["Nuclear power plants", "Radium-based luminous paint for watch dials", "Uranium-powered engines", "Radioactive food preservation"], answer: 1, explanation: "Radium-based paint was used to make watch dials and instrument panels glow in the dark. Workers (mostly young women known as 'Radium Girls') who painted the dials suffered severe radiation poisoning." },
  { id: "bk27", subject: "book", topic: "New Industries", question: "Decorative items made with uranium that were popular before the dangers were understood included:", choices: ["Uranium jewelry", "Uranium glassware", "Uranium-coated furniture", "Uranium-dyed clothing"], answer: 1, explanation: "Uranium was used to create distinctive fluorescent glassware (known as Vaseline glass) that glowed green under UV light, a popular decorative item before radiation hazards were fully appreciated." },

  // Key Figures & Themes (Ch. 12–14)
  { id: "bk28", subject: "book", topic: "Key Figures", question: "The book highlights that an unusually high number of what group entered the field of radioactivity research?", choices: ["Military personnel", "Women scientists", "Clergy members", "Industrial workers"], answer: 1, explanation: "The book notes that women entered the field of radioactivity research in unprecedented numbers, partly due to the Curies' example and the field's relative newness." },
  { id: "bk29", subject: "book", topic: "Key Figures", question: "The three main cities where radioactivity research was centered, as described in the book, were:", choices: ["London, Berlin, New York", "Paris, Manchester, Vienna", "Boston, Geneva, Tokyo", "Rome, Stockholm, Moscow"], answer: 1, explanation: "The narrative of radioactivity research primarily unfolds across Paris (the Curies), Manchester (Rutherford's later work), and Vienna (the Austrian research community)." },
  { id: "bk30", subject: "book", topic: "Key Figures", question: "The book describes radioactivity's development as spanning from France, Germany, the UK, and:", choices: ["Russia", "Canada", "Japan", "Italy"], answer: 1, explanation: "Canada played a key role because Rutherford and Soddy did their groundbreaking transmutation work at McGill University in Montreal." },
];

// Build topic/subject indices
const SUBJECTS = {
  biology: { name: "Biology", icon: "🧬", color: "#48bb78" },
  chemistry: { name: "Chemistry", icon: "⚗️", color: "#667eea" },
  physics: { name: "Physics", icon: "⚡", color: "#ed8936" },
  book: { name: "Book", icon: "📖", color: "#ecc94b" }
};

const TOPICS = {};
SCIENCE_QUESTIONS.forEach(q => {
  const key = q.subject + "|" + q.topic;
  if (!TOPICS[key]) {
    TOPICS[key] = { subject: q.subject, topic: q.topic, count: 0 };
  }
  TOPICS[key].count++;
});

function getTopicsForSubject(subject) {
  return Object.values(TOPICS).filter(t => t.subject === subject);
}

function getQuestionsForTopic(subject, topic) {
  return SCIENCE_QUESTIONS.filter(q => q.subject === subject && q.topic === topic);
}

function getQuestionsForSubject(subject) {
  return SCIENCE_QUESTIONS.filter(q => q.subject === subject);
}

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
