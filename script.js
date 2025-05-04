const questions = [
  {
    question: "What does \"Chemical Thermodynamics\" study?",
    answers: [
      { text: "General laws of mutual energy conversions from one form to another", correct: true },
      { text: "Energy changes during chemical transformations.", correct: false },
      { text: "The rate of chemical reactions", correct: false },
      { text: "Chemical processes that cause electrons to move", correct: false },
      { text: "Energy changes during physical processes.", correct: false },
    ],
  },
  {
    question: "What process is called isothermal?",
    answers: [
      { text: "The process taking place at a constant temperature", correct: true },
      { text: "The process taking place at a constant volume", correct: false },
      { text: "The process taking place at constant heat capacity", correct: false },
      { text: "The process taking place at a constant pressure", correct: false },
      { text: "The process takes place at a changing temperature", correct: false },
    ],
  },
  {
    question: "Who formulated the Law of Mass Action ?",
    answers: [
      { text: "Guldberg and Waage", correct: true },
      { text: "Bodenstein", correct: false },
      { text: "Berthelot", correct: false },
      { text: "Graham", correct: false },
      { text: "Hess", correct: false },
    ],
  },
  {
    question: "How can you name a system consisting of three different phases?",
    answers: [
      { text: "Heterogeneous system", correct: true },
      { text: "Homogeneous system", correct: false },
      { text: "Isolated system", correct: false },
      { text: "Open system", correct: false },
      { text: "Closed system", correct: false },
    ],
  },
  {
    question: "How do we know if a reaction is spontaneous?",
    answers: [
      { text: "The sign of ΔG∘", correct: true },
      { text: "The sign of ΔH", correct: false },
      { text: "The value of k (the rate constant) tells us", correct: false },
      { text: "The first law of thermodynamics", correct: false },
      { text: "The second law of thermodynamics", correct: false },
    ],
  },
  {
    question: "Which of the following techniques will not increase the rate of a reaction?",
    answers: [
      { text: "Reduce the amount of product", correct: true },
      { text: "Introducing a catalyst to lower the activation energy of the reaction", correct: false },
      { text: "Heating the reactants in order to reach the activation energy", correct: false },
      { text: "Increasing the surface area between reactants", correct: false },
      { text: "Increasing the amount of reactants", correct: false },
    ],
  },
  {
    question: "Which of the following true for a spontaneous endothermic process?",
    answers: [
      { text: "∆G<0", correct: true },
      { text: "∆H<0", correct: false },
      { text: "∆S<0", correct: false },
      { text: "∆G>0", correct: false },
      { text: "∆G=0", correct: false },
    ],
  },
  {
    question: "Which of the following reactions are monomolecular?",
    answers: [
      { text: "NH4Cl→NH3+HCl", correct: true },
      { text: "2NO+Cl2→2NOCl", correct: false },
      { text: "2NO+O2→2NO2", correct: false },
      { text: "CH4+Cl2→CH3Cl+HCl", correct: false },
      { text: "NH3+HCl→NH4Cl", correct: false },
    ],
  },
  {
    question: "Calculate the standard enthalpy of reaction for the combustion of methane: CH₄(g) + 2O₂(g) → CO₂(g)+2H₂O(g), if ΔHf°(CH₄(g)) = −75 kJ/mol; ΔHf°(CO₂ (g)) = −394 kJ/mol;ΔHf°(H₂O(g)) = −284 kJ/mol; ΔHf°(O₂ (g)) = 0 kJ/mol",
    answers: [
      { text: "ΔHf°rxn = - 887 kJ/mol", correct: true },
      { text: "ΔHf°rxn = - 603 kJ/mol", correct: false },
      { text: "ΔHf°rxn = 603 kJ/mol", correct: false },
      { text: "ΔHf°rxn = 887 kJ/mol", correct: false },
      { text: "ΔHf°rxn = 1037 kJ/mol", correct: false },
    ],
  },
  {
    question: "What is the mass fraction?",
    answers: [
      { text: "the ratio of the mass of the solute in the mass solution:", correct: true },
      { text: "the number of moles solute contained in 1 kg of solvent.", correct: false },
      { text: "the equivalent amount of a substance contained in 1 liter of solution.", correct: false },
      { text: "the mass of substance in 1 liter of solution.", correct: false },
      { text: "the mass of solute contained in 1ml of solvent", correct: false },
    ],
  },
  {
    question: "What is the molar concentration?",
    answers: [
      { text: "the mass of substance in 1 liter of solution", correct: true },
      { text: "the ratio of the mass of the solute in the mass solution", correct: false },
      { text: "the equivalent amount of a substance contained in 1 liter of solution", correct: false },
      { text: "the mass of solute contained in 1 kg of solvent", correct: false },
      { text: "the mass of solute contained in 1ml of solvent", correct: false },
    ],
  },
  {
    question: "What is the pH solution of the salt formed by a weak acid and weak base?",
    answers: [
      { text: "pH ~7", correct: true },
      { text: "pH<7", correct: false },
      { text: "pH > 7", correct: false },
      { text: "pH = 7", correct: false },
      { text: "pH ≤ 7", correct: false },
    ],
  },
  {
    question: "Which of the following factors does not affect the solubility of solids in liquids?",
    answers: [
      { text: "Stirring", correct: true },
      { text: "Temperature", correct: false },
      { text: "The nature of the solute", correct: false },
      { text: "The nature of the solvent", correct: false },
      { text: "Liquid density", correct: false },
    ],
  },
  {
    question: "What is the name of a solution having an osmotic pressure higher than that of blood plasma?",
    answers: [
      { text: "Hypertonic", correct: true },
      { text: "Hypotonic", correct: false },
      { text: "Saturated", correct: false },
      { text: "Isotonic", correct: false },
      { text: "Isoosmotic", correct: false },
    ],
  },
  {
    question: "Which of the following is a buffer solution?",
    answers: [
      { text: "NH4OH + NH4Cl", correct: true },
      { text: "NaOH + CH3COONa", correct: false },
      { text: "NaOH + Na2SO4", correct: false },
      { text: "K2SO4 + H2SO4", correct: false },
      { text: "CH3COONa", correct: false },
    ],
  },
  {
    question: "Which of the following is an unknown solution if an addition of a methyleorange indicator into an unknown solution changes its color into red?",
    answers: [
      { text: "HCl", correct: true },
      { text: "NaOH", correct: false },
      { text: "NaCl", correct: false },
      { text: "NaHCO₃", correct: false },
      { text: "NH₃", correct: false },
    ],
  },
  {
    question: "Determine the mass of 0.16 mol H2SO4",
    answers: [
      { text: "15.68 g", correct: true },
      { text: "11.68 g", correct: false },
      { text: "13.68 g", correct: false },
      { text: "17.68 g", correct: false },
      { text: "19.68 g", correct: false },
    ],
  },
  {
    question: "Which of the following has the lowest boiling point?",
    answers: [
      { text: "HCl", correct: true },
      { text: "HF", correct: false },
      { text: "HBr", correct: false },
      { text: "HI", correct: false },
      { text: "H2O", correct: false },
    ],
  },
  {
    question: "Find equivalent mass of sulphuric acid",
    answers: [
      { text: "49", correct: true },
      { text: "2", correct: false },
      { text: "18", correct: false },
      { text: "32", correct: false },
      { text: "98", correct: false },
    ],
  },
  {
    question: "Calculate the mass fraction of sodium in the sodium carbonate Na2CO3.",
    answers: [
      { text: "0.43", correct: true },
      { text: "0.23", correct: false },
      { text: "0.33", correct: false },
      { text: "0.53", correct: false },
      { text: "0.63", correct: false },
    ],
  },
  {
    question: "In which red-ox reaction different atoms of same substance change oxidation numbers?",
    answers: [
      { text: "intramolecular", correct: true },
      { text: "intermolecular", correct: false },
      { text: "counter disproportion", correct: false },
      { text: "disproportion", correct: false },
      { text: "double exchange", correct: false },
    ],
  },
  {
    question: "What is the name of the electrode from which the electrons enter the solution, as well as the chemical change that occurs on this electrode?",
    answers: [
      { text: "cathode, reduction", correct: true },
      { text: "anode, oxidation", correct: false },
      { text: "anode, reduction", correct: false },
      { text: "cathode, oxidation", correct: false },
      { text: "can't say for sure.", correct: false },
    ],
  },
  {
    question: "What does the double vertical line \"||\" mean in the standard designation of the voltaic cell?",
    answers: [
      { text: "a salt bridge", correct: true },
      { text: "a phase boundary", correct: false },
      { text: "gas electrode", correct: false },
      { text: "a wire (metal) connection", correct: false },
      { text: "a standard hydrogen electrode", correct: false },
    ],
  },
  {
    question: "What is the name of the element lossing of electrons in the redox reaction?",
    answers: [
      { text: "Reactant", correct: true },
      { text: "Product", correct: false },
      { text: "Oxidant", correct: false },
      { text: "Reductant", correct: false },
      { text: "Donor", correct: false },
    ],
  },
  {
    question: "When one end of a metal plate is heated, why does the other end heat up too?",
    answers: [
      { text: "energised electrons moving to the other end", correct: true },
      { text: "due to the resistance of the metal", correct: false },
      { text: "due to the mobility of atoms in the metal", correct: false },
      { text: "due to a minor perturbation in the energy of the atoms.", correct: false },
      { text: "due to a change in the density of the metal", correct: false },
    ],
  },
  {
    question: "Oxygen has a +2 oxidation state in",
    answers: [
      { text: "F2O", correct: true },
      { text: "H2O", correct: false },
      { text: "H2O2", correct: false },
      { text: "SO2", correct: false },
      { text: "Na2O", correct: false },
    ],
  },
  {
    question: "Which of the following is the strongest reducing agent?",
    answers: [
      { text: "Li", correct: true },
      { text: "Na", correct: false },
      { text: "Mg", correct: false },
      { text: "Ca", correct: false },
      { text: "Zn", correct: false },
    ],
  },
  {
    question: "When the following equation is balanced using the smallest whole number coefficients, what is the coefficient of H2O? NH3 + O2 → NO + H2O",
    answers: [
      { text: "6", correct: true },
      { text: "2", correct: false },
      { text: "3", correct: false },
      { text: "4", correct: false },
      { text: "5", correct: false },
    ],
  },
  {
    question: "What is the composition consist of a coordination compound?",
    answers: [
      { text: "a metal ion and ligands", correct: true },
      { text: "a complex ion and metal", correct: false },
      { text: "a metal ion and complex ion", correct: false },
      { text: "a complex ion and counterions", correct: false },
      { text: "a metal ion and counterions", correct: false },
    ],
  },
  {
    question: "How many percent microelements content in the organism?",
    answers: [
      { text: "10-3– 10-5 %", correct: true },
      { text: "10-1– 10-3 %", correct: false },
      { text: "10-5– 10-7 %", correct: false },
      { text: "10-7– 10-9 %", correct: false },
      { text: "10-9– 10-11 %", correct: false },
    ],
  },
  {
    question: "Which of the following biogenic element is microelement?",
    answers: [
      { text: "Zn", correct: true },
      { text: "S", correct: false },
      { text: "N", correct: false },
      { text: "O", correct: false },
      { text: "C", correct: false },
    ],
  },
  {
    question: "Which among the following is a polydentate ligand?",
    answers: [
      { text: "oxalate", correct: true },
      { text: "aqua", correct: false },
      { text: "carbonyl", correct: false },
      { text: "nitro", correct: false },
      { text: "acetate", correct: false },
    ],
  },
  {
    question: "Which is an example a ligand «en»?",
    answers: [
      { text: "bidentate ligand", correct: true },
      { text: "monodentate ligand", correct: false },
      { text: "tridentate ligand", correct: false },
      { text: "pentadentate ligand", correct: false },
      { text: "hexadentate ligand", correct: false },
    ],
  },
  {
    question: "What is the coordination number of the central atom of  the following complex? [Cr(NH3)4Cl2]Cl",
    answers: [
      { text: "6", correct: true },
      { text: "4", correct: false },
      { text: "2", correct: false },
      { text: "8", correct: false },
      { text: "10", correct: false },
    ],
  },
  {
    question: "Which of the following are bidentate ligands? (1) oxalate (2) ammonia (3) chloride (4) hydroxide (5) nitrite (6) en",
    answers: [
      { text: "1, 6", correct: true },
      { text: "1, 3", correct: false },
      { text: "1, 4", correct: false },
      { text: "1, 5", correct: false },
      { text: "1, 2", correct: false },
    ],
  },
  {
    question: "A complex ion contains a Cr3+ bound to four H2O molecules and two Cl– ions. Write its formula.",
    answers: [
      { text: "[Cr(H2O)4Cl2]+", correct: true },
      { text: "[Cr(H2O)Cl2]+", correct: false },
      { text: "[CrCl(H2O)4]+2", correct: false },
      { text: "[CrCl(H2O)4 NH3]+2", correct: false },
      { text: "[Cr(H2O)4]+3", correct: false },
    ],
  },
  {
    question: "What are the geometry of the following complex: [Ag(NH3)2]+ ?",
    answers: [
      { text: "linear", correct: true },
      { text: "tetrahedral", correct: false },
      { text: "trigonal", correct: false },
      { text: "hexahedral", correct: false },
      { text: "octahedral", correct: false },
    ],
  },
  {
    question: "A molecule that cannot be superimposed on its mirror image is said to exhibit which of the following?",
    answers: [
      { text: "optical isomerism", correct: true },
      { text: "geometrical isomerism", correct: false },
      { text: "linkage isomerism", correct: false },
      { text: "reactive isomerism", correct: false },
      { text: "coordination isomerism", correct: false },
    ],
  },
  {
    question: "What is the oxidation number of cobalt in K[Co(CO)2Cl4]?",
    answers: [
      { text: "3", correct: true },
      { text: "1", correct: false },
      { text: "5", correct: false },
      { text: "7", correct: false },
      { text: "9", correct: false },
    ],
  },
  {
    question: "Which one of the following systems has the smallest sized domains in its dispersed phase?",
    answers: [
      { text: "Nanoemulsion", correct: true },
      { text: "Microemulsion", correct: false },
      { text: "Flocculation", correct: false },
      { text: "Suspension", correct: false },
      { text: "Emulsion", correct: false },
    ],
  },
  {
    question: "Which of the following substances that belongs to colloid system?",
    answers: [
      { text: "Milk", correct: true },
      { text: "Water", correct: false },
      { text: "Vinegar", correct: false },
      { text: "Wine", correct: false },
      { text: "Beer", correct: false },
    ],
  },
  {
    question: "What is the dispersed phase and dispersing medium of smoke?",
    answers: [
      { text: "Solid in gas", correct: true },
      { text: "Liquid in solid", correct: false },
      { text: "Solid in liquid", correct: false },
      { text: "Gas in solid", correct: false },
      { text: "Solid in solid", correct: false },
    ],
  },
  {
    question: "Which of the following will show Tyndall effect?",
    answers: [
      { text: "Aqueous solution of soap above critical micelle concentration", correct: true },
      { text: "Aqueous solution of soap below critical micelle concentration", correct: false },
      { text: "Aqueous solution of sugar above critical micelle concentration", correct: false },
      { text: "Aqueous solution of sugar above critical micelle concentration", correct: false },
      { text: "Aqueous solution of salt above critical micelle concentration", correct: false },
    ],
  },
  {
    question: "Which of the following methods is used for the destruction of sol?",
    answers: [
      { text: "addition of an electrolyte", correct: true },
      { text: "dialysis of an electrolyte", correct: false },
      { text: "diffusion of an electrolyte", correct: false },
      { text: "mechanical shaking", correct: false },
      { text: "condensation of an electrolyte", correct: false },
    ],
  },
  {
    question: "What type of dispersed systems are tobacco smoke, dust, fog, clouds related to?",
    answers: [
      { text: "aerosols", correct: true },
      { text: "emulsion", correct: false },
      { text: "suspensions", correct: false },
      { text: "hydrosols", correct: false },
      { text: "organosols", correct: false },
    ],
  },
  {
    question: "What type of dispersed systems are cast iron, steel, precious stones, alloys?",
    answers: [
      { text: "solid colloids", correct: true },
      { text: "suspensions", correct: false },
      { text: "emulsions", correct: false },
      { text: "capillary systems", correct: false },
      { text: "solid emulsions", correct: false },
    ],
  },
  {
    question: "Which property stabilizes colloids in blood?",
    answers: [
      { text: "Electrostatic repulsion", correct: true },
      { text: "Osmosis", correct: false },
      { text: "Diffusion", correct: false },
      { text: "Surface tension", correct: false },
      { text: "Chemical bonding", correct: false },
    ],
  },
  {
    question: "In which of the following media the sodium oleate micelle is formed?",
    answers: [
      { text: "Н2О", correct: true },
      { text: "С6Н6", correct: false },
      { text: "СН4", correct: false },
      { text: "С4Н9ОН", correct: false },
      { text: "СНCl3", correct: false },
    ],
  },
  {
    question: "Which colloid is used in plasma volume expander?",
    answers: [
      { text: "Dextran sol", correct: true },
      { text: "Iodine sol", correct: false },
      { text: "Arsenic sol", correct: false },
      { text: "Starch sol", correct: false },
      { text: "Rubber sol", correct: false },
    ],
  },
  {
    question: "The Ca3(PO4)2 sol was obtained as a result of an exchange reaction between CaCl2 and H3PO4, with H3PO4 taken in excess. Indicate the correct sol micelle formula.",
    answers: [
      { text: "{m[(Ca3(PO4)2]nH+(n - x)PO43-}+xPO43-", correct: true },
      { text: "{m[(Ca3(PO4)2]nCl-2(n - x)Ca2+}2xCl-", correct: false },
      { text: "{m[(Ca3(PO4)2]nCa2+ 2(n - x)Cl-}2xCl-", correct: false },
      { text: "{m[(Ca3(PO4)2]nH+(n - x)PO43-}xPO44-", correct: false },
      { text: "{m[(Ca3(PO4)2]nH +(n - x)PO43-}xPO43", correct: false },
    ],
  },
  {
    question: "What is the role of colloids in antivenom?",
    answers: [
      { text: "Adsorb toxins", correct: true },
      { text: "Speed up poison", correct: false },
      { text: "Block immunity", correct: false },
      { text: "Slow down blood", correct: false },
      { text: "Increase fever", correct: false },
    ],
  },
  {
    question: "Which of these ions Be2+, Mg2+, Ca2+, Ba2+ and Sr2+ have the lowest coagulation critical concentration?",
    answers: [
      { text: "Ba2+", correct: true },
      { text: "Ca2+", correct: false },
      { text: "Be2+", correct: false },
      { text: "Sr2+", correct: false },
      { text: "Mg2+", correct: false },
    ],
  },
  {
    question: "Which element is present in all organic compounds?",
    answers: [
      { text: "carbon", correct: true },
      { text: "nitrogen", correct: false },
      { text: "oxygen", correct: false },
      { text: "phosphorous", correct: false },
      { text: "sulfur", correct: false },
    ],
  },
  {
    question: "Which property is generally characteristic of an organic compound?",
    answers: [
      { text: "low melting point", correct: true },
      { text: "soluble in nonpolar solvents", correct: false },
      { text: "soluble in polar solvents", correct: false },
      { text: "high melting point", correct: false },
      { text: "insoluble in nonpolar solvents", correct: false },
    ],
  },
  {
    question: "Which compounds are isomers?",
    answers: [
      { text: "1-propanol and 2-propanol", correct: true },
      { text: "methanol and methanal", correct: false },
      { text: "methanoic acid and ethanoic acid", correct: false },
      { text: "ethane and ethanol", correct: false },
      { text: "ethanal and ethanol", correct: false },
    ],
  },
  {
    question: "Which class of organic compounds can be represented as R –C (=O) - R?",
    answers: [
      { text: "ketone", correct: true },
      { text: "alcohols", correct: false },
      { text: "esters", correct: false },
      { text: "ethers", correct: false },
      { text: "acids", correct: false },
    ],
  },
  {
    question: "Which of the following organic compound is a product of a saponification reaction?",
    answers: [
      { text: "soap", correct: true },
      { text: "water", correct: false },
      { text: "ether", correct: false },
      { text: "aldehyde", correct: false },
      { text: "carbon dioxide", correct: false },
    ],
  },
  {
    question: "Identify the one which does not come under the organic addition reaction?",
    answers: [
      { text: "Dehydration", correct: true },
      { text: "Hydration", correct: false },
      { text: "Halogenation", correct: false },
      { text: "Hydrohalogenation", correct: false },
      { text: "Polymerization", correct: false },
    ],
  },
  {
    question: "Which of the following organic compound is a product of a fermentation reaction?",
    answers: [
      { text: "C2H5OH", correct: true },
      { text: "C2H2", correct: false },
      { text: "CCl2F2", correct: false },
      { text: "C2H5OC2H5", correct: false },
      { text: "C2H5OOC2H5", correct: false },
    ],
  },
  {
    question: "How many structural isomers are possible for C4H9Br?",
    answers: [
      { text: "4", correct: true },
      { text: "2", correct: false },
      { text: "3", correct: false },
      { text: "1", correct: false },
      { text: "5", correct: false },
    ],
  },
  {
    question: "What type of organic reactions are involved in this following reaction? CH3CH=CH2 + HCl → _______",
    answers: [
      { text: "an addition reaction", correct: true },
      { text: "a saponification reaction", correct: false },
      { text: "a substitution reaction", correct: false },
      { text: "an esterification reaction", correct: false },
      { text: "a hydrolysis reaction", correct: false },
    ],
  },
  {
    question: "Which of the following is produced by oxidation of an aldehyde?",
    answers: [
      { text: "Carboxylic acid", correct: true },
      { text: "Secondary alcohol", correct: false },
      { text: "Primary alcohol", correct: false },
      { text: "Aldehyde", correct: false },
      { text: "Ketone", correct: false },
    ],
  },
  {
    question: "Which functional group contains a carbonyl group and a hydroxyl group bonded to the same carbon atom?",
    answers: [
      { text: "Carboxylic acid", correct: true },
      { text: "Ketone", correct: false },
      { text: "Amide", correct: false },
      { text: "Ester", correct: false },
      { text: "Amino acid", correct: false },
    ],
  },
  {
    question: "What is the product of oxidation of butanal?",
    answers: [
      { text: "Butanoic acid", correct: true },
      { text: "Butanoate", correct: false },
      { text: "2-butanol", correct: false },
      { text: "1-butanol", correct: false },
      { text: "Butane", correct: false },
    ],
  },
  {
    question: "Which of the following is produced by reduction of an aldehyde?",
    answers: [
      { text: "Primary alcohol", correct: true },
      { text: "Secondary alcohol", correct: false },
      { text: "Carboxylic acid", correct: false },
      { text: "Ester", correct: false },
      { text: "Ether", correct: false },
    ],
  },
  {
    question: "How this reaction can be classified CH2=CH2 + H2O ==> C2H5OH?",
    answers: [
      { text: "Hydration", correct: true },
      { text: "Oxidation", correct: false },
      { text: "Chlorination", correct: false },
      { text: "Elimination", correct: false },
      { text: "Polymerization", correct: false },
    ],
  },
  {
    question: "What is the reaction between an alcohol and carboxylic acid called?",
    answers: [
      { text: "Esterification", correct: true },
      { text: "Hydration", correct: false },
      { text: "Hydrolysis", correct: false },
      { text: "Polymerization", correct: false },
      { text: "Dehydration", correct: false },
    ],
  },
  {
    question: "Which of the following option describes hydrolysis the best?",
    answers: [
      { text: "Breaking of a long-chain compound into subunits by adding water", correct: true },
      { text: "Heating of a compound in order to drive off excess water and concentrate its volume", correct: false },
      { text: "Linking of two or more molecules by the removal of one or more water molecules", correct: false },
      { text: "Constant removal of hydrogen atoms from the surface of a carbohydrate", correct: false },
      { text: "Addition of hydrogen atoms to an unsaturated compounds", correct: false },
    ],
  },
  {
    question: "Which of the following compound is obtained by the reaction of ethene with diborane followed by hydrolysis with alkaline H2O2?",
    answers: [
      { text: "ethanol", correct: true },
      { text: "propanol", correct: false },
      { text: "triethyl bromide", correct: false },
      { text: "pentanol", correct: false },
      { text: "butanol", correct: false },
    ],
  },
  {
    question: "Which of the following compounds will give butanone on oxidation with alkaline KMnO4 solution?",
    answers: [
      { text: "Butan-2-ol", correct: true },
      { text: "Butan-1-ol", correct: false },
      { text: "Butan-3-ol", correct: false },
      { text: "Butan-4-ol", correct: false },
      { text: "Butan-5-ol", correct: false },
    ],
  },
  {
    question: "Which is not a heterocyclic aromatic compound?",
    answers: [
      { text: "Naphthalene", correct: true },
      { text: "Pyrrole", correct: false },
      { text: "Thiophene", correct: false },
      { text: "Furan", correct: false },
      { text: "Imidazole", correct: false },
    ],
  },
  {
    question: "What is the molecular formula of pyrrole?",
    answers: [
      { text: "C4H5N", correct: true },
      { text: "C4H4N", correct: false },
      { text: "C5H5N", correct: false },
      { text: "C6H6N", correct: false },
      { text: "C6H6S", correct: false },
    ],
  },
  {
    question: "Which of the following compounds are heterofunctional compounds?",
    answers: [
      { text: "Lactic acid", correct: true },
      { text: "Oxalic acid", correct: false },
      { text: "Glucose", correct: false },
      { text: "Sorbitol", correct: false },
      { text: "Acetic acid", correct: false },
    ],
  },
  {
    question: "What are the salts and derivatives of citric acid called?",
    answers: [
      { text: "citrate", correct: true },
      { text: "lactate", correct: false },
      { text: "pyruvate", correct: false },
      { text: "malate", correct: false },
      { text: "oxaloacetate", correct: false },
    ],
  },
  {
    question: "What form of lactic acid is involved in the metabolism of animals?",
    answers: [
      { text: "L-lactic acid", correct: true },
      { text: "D-lactic acid", correct: false },
      { text: "lactic acid ester", correct: false },
      { text: "lactic acid ethyl ester", correct: false },
      { text: "lactic acid methyl ester", correct: false },
    ],
  },
  {
    question: "What are the salts and derivatives of malic acid called?",
    answers: [
      { text: "malate", correct: true },
      { text: "lactate", correct: false },
      { text: "acetate", correct: false },
      { text: "tartrates", correct: false },
      { text: "pyruvates", correct: false },
    ],
  },
  {
    question: "Which compound is an example of a heterocyclic amine?",
    answers: [
      { text: "Pyrimidine", correct: true },
      { text: "Ethanol", correct: false },
      { text: "Acetic acid", correct: false },
      { text: "Benzene", correct: false },
      { text: "Phenol", correct: false },
    ],
  },
  {
    question: "What type of compound is thymine, a component of DNA?",
    answers: [
      { text: "Heterocyclic", correct: true },
      { text: "Carbohydrate", correct: false },
      { text: "Ketone", correct: false },
      { text: "Aromatic hydrocarbon", correct: false },
      { text: "Carboxylic acid", correct: false },
    ],
  },
  {
    question: "What specific reaction occurs when hydroxycarboxylic acids are heated?",
    answers: [
      { text: "lactide formation", correct: true },
      { text: "lactone formation", correct: false },
      { text: "lactam formation", correct: false },
      { text: "formation of diketopiperazine", correct: false },
      { text: "formation of an ester", correct: false },
    ],
  },
  {
    question: "Which of the following compounds are derivatives of para-aminobenzoic acid?",
    answers: [
      { text: "novocaine", correct: true },
      { text: "citric acid", correct: false },
      { text: "salicylic acid", correct: false },
      { text: "streptocide", correct: false },
      { text: "aspirin", correct: false },
    ],
  },
  {
    question: "Which of the following product is possible of the interaction of acetic and salicylic acids?",
    answers: [
      { text: "aspirin", correct: true },
      { text: "phenyl salicylate", correct: false },
      { text: "methyl salicylate", correct: false },
      { text: "phenolphthalein", correct: false },
      { text: "phenylacetate", correct: false },
    ],
  },
  {
    question: "Which of the following is not a monosaccharide?",
    answers: [
      { text: "Sucrose", correct: true },
      { text: "Fructose", correct: false },
      { text: "Ribose", correct: false },
      { text: "Glucose", correct: false },
      { text: "Tetrose", correct: false },
    ],
  },
  {
    question: "Which of the following is a monomeric link of protein?",
    answers: [
      { text: "Amine acid rest", correct: true },
      { text: "Isoprene", correct: false },
      { text: "Pyrrole", correct: false },
      { text: "Sugar rest", correct: false },
      { text: "Ethylene", correct: false },
    ],
  },
  {
    question: "Which of the following is an imino acid?",
    answers: [
      { text: "Proline", correct: true },
      { text: "Glycine", correct: false },
      { text: "Alanine", correct: false },
      { text: "Serine", correct: false },
      { text: "Aspartate", correct: false },
    ],
  },
  {
    question: "Which of the following is a bond a double helical structure of DNA is held together by?",
    answers: [
      { text: "Hydrogen bonding", correct: true },
      { text: "Peptide bonding", correct: false },
      { text: "Sulphur-sulphur linkages", correct: false },
      { text: "Glycosidic bonds", correct: false },
      { text: "Ionic bonds", correct: false },
    ],
  },
  {
    question: "Which of the followings is a simple sugar or monosaccharide?",
    answers: [
      { text: "Galactose", correct: true },
      { text: "Celluliose", correct: false },
      { text: "Lactose", correct: false },
      { text: "Maltose", correct: false },
      { text: "Sucrose", correct: false },
    ],
  },
  {
    question: "Which of the following Vitamin is also called as Pyridoxine?",
    answers: [
      { text: "Vitamin B6", correct: true },
      { text: "Vitamin B2", correct: false },
      { text: "Vitamin B3", correct: false },
      { text: "Vitamin B5", correct: false },
      { text: "Vitamin B1", correct: false },
    ],
  },
  {
    question: "Which of the following lipids provide insulation against cold and hot weather to exoskeleton of insects?",
    answers: [
      { text: "Waxes", correct: true },
      { text: "Fat", correct: false },
      { text: "Cholesterol", correct: false },
      { text: "Oil", correct: false },
      { text: "Steroids", correct: false },
    ],
  },
  {
    question: "Which of the following is not found in DNA?",
    answers: [
      { text: "Uracil", correct: true },
      { text: "Cytosine", correct: false },
      { text: "Guanine", correct: false },
      { text: "Thymine", correct: false },
      { text: "Adenine", correct: false },
    ],
  },
  {
    question: "Which of the following process descires synthesis of RNA from DNA",
    answers: [
      { text: "Transcription", correct: true },
      { text: "Replication", correct: false },
      { text: "Translation", correct: false },
      { text: "Duplication", correct: false },
      { text: "Transgenic", correct: false },
    ],
  },
  {
    question: "Which of the following molecules contain an anticodon?",
    answers: [
      { text: "Messenger RNA", correct: true },
      { text: "Ribosomal RNA", correct: false },
      { text: "Transfer RNA", correct: false },
      { text: "Small nuclear RNA", correct: false },
      { text: "DNA", correct: false },
    ],
  },
  {
    question: "Which of the following reagents is used to distinguish fructose and glucose?",
    answers: [
      { text: "Seliwanoff's reagent", correct: true },
      { text: "Benedict's reagent", correct: false },
      { text: "Fehling's reagent", correct: false },
      { text: "Barfoed's reagent", correct: false },
      { text: "Molish's reagent", correct: false },
    ],
  },
  {
    question: "Which polysaccharide is formed by β1→4 Glycosidic linkages?",
    answers: [
      { text: "Cellulose", correct: true },
      { text: "Dextrin", correct: false },
      { text: "Starch", correct: false },
      { text: "Glycogen", correct: false },
      { text: "Glucose", correct: false },
    ],
  },
  {
    question: "Where will be the bond form between sugar rest and pyrimidine N-base in nucleoside atoms?",
    answers: [
      { text: "C1 and N1", correct: true },
      { text: "C1 and N9", correct: false },
      { text: "C3 and N9", correct: false },
      { text: "C5 and N1", correct: false },
      { text: "C3 and N1", correct: false },
    ],
  },
  {
    question: "Which of the following takes place when denaturation of protein leads to loss of its biological activity?",
    answers: [
      { text: "disruption of both secondary and tertiary structures only", correct: true },
      { text: "disruption of primary structure", correct: false },
      { text: "disruption of both primary and secondary structure", correct: false },
      { text: "formation of amino acids", correct: false },
      { text: "disruption of both secondary", correct: false },
    ],
  },
  {
    question: "Which of the amino acids below is the uncharged derivative of an acidic amino acid?",
    answers: [
      { text: "Glutamine", correct: true },
      { text: "Cysteine", correct: false },
      { text: "Arginine", correct: false },
      { text: "Serine", correct: false },
      { text: "Tyrosine", correct: false },
    ],
  },
  {
    question: "Which of the following is known as the pH at which the amino acid shows no tendency to migrate when placed in an electric field?",
    answers: [
      { text: "Isoelectric point", correct: true },
      { text: "Dipole moment", correct: false },
      { text: "Optical activity", correct: false },
      { text: "Resonance", correct: false },
      { text: "Delocalization", correct: false },
    ],
  },
  {
    question: "Which of the following test may turn yellow a protein solution on warming with concentrated HNO3?",
    answers: [
      { text: "Xanthoproteic test", correct: true },
      { text: "Biuret test", correct: false },
      { text: "Ninhydrin test", correct: false },
      { text: "Tollens test", correct: false },
      { text: "Millions test", correct: false },
    ],
  },
  {
    question: "Which of the following statement is incorrect?",
    answers: [
      { text: "Vitamins contain amino acids", correct: true },
      { text: "Excess vitamin intake is harmful", correct: false },
      { text: "Vitamins can be produced by plants", correct: false },
      { text: "Vitamin deficiency causes diseases", correct: false },
      { text: "Vitamins is a type of protein", correct: false },
    ],
  },
  {
    question: "Which of the following is true about vitamin K deficiency?",
    answers: [
      { text: "Causes delayed blood clotting", correct: true },
      { text: "Causes Wernicke-Korsakoff syndrome", correct: false },
      { text: "Causes Keratinization of the cornea", correct: false },
      { text: "Causes failure to grow", correct: false },
      { text: "Causes heart disease and cancer", correct: false },
    ],
  },
  {
    question: "What is the mathematical expression of the first law of thermodynamics?",
    answers: [
      { text: "Q=∆U+W", correct: true },
      { text: "H=U+pV", correct: false },
      { text: "∆U = U(f) – U(i)", correct: false },
      { text: "S = KlnW", correct: false },
      { text: "∆H = H(f) – H(i)", correct: false },
    ],
  },
  {
    question: "Who had opened the first law of thermodynamics?",
    answers: [
      { text: "Julius Robert von Mayer", correct: true },
      { text: "Rudolf Clausius", correct: false },
      { text: "Vant Hoff", correct: false },
      { text: "Gibbs", correct: false },
      { text: "Bodenstein", correct: false },
    ],
  },
  {
    question: "How can you name a system consisting of one phases?",
    answers: [
      { text: "Homogeneous system", correct: true },
      { text: "Heterogeneous system", correct: false },
      { text: "Isolated system", correct: false },
      { text: "Open system", correct: false },
      { text: "Closed system", correct: false },
    ],
  },
  {
    question: "In what units is the reaction rate measured?",
    answers: [
      { text: "mole per liter per second", correct: true },
      { text: "meter per second", correct: false },
      { text: "centimeter per hour", correct: false },
      { text: "decimeter per minute", correct: false },
      { text: "liter per minute", correct: false },
    ],
  },
  {
    question: "What happens when two fluorine atoms combine to form a fluorine molecule?",
    answers: [
      { text: "When energy is released, a bond is formed", correct: true },
      { text: "The enthalpy of the system increases.", correct: false },
      { text: "As energy is absorbed , a bond is formed", correct: false },
      { text: "The bond breaks as energy is absorbed.", correct: false },
      { text: "The connection is broken as the energy is released", correct: false },
    ],
  },
  {
    question: "Which characteristic is best suited for the following process: Pumping water uphill",
    answers: [
      { text: "Not a spontaneous process", correct: true },
      { text: "Spontaneous process", correct: false },
      { text: "Irreversible process", correct: false },
      { text: "Reversible process", correct: false },
      { text: "The equilibrium process", correct: false },
    ],
  },
  {
    question: "Which of the following statements is incorrect about the collison theory of chemical reaction?",
    answers: [
      { text: "It considers reacting molecules or atoms to be hard spheres and ignores their structural features.", correct: true },
      { text: "Collision of atoms or molecules possessing sufficient threshold energy results into the product formation.", correct: false },
      { text: "Number of effective collisions determines the rate of reaction.", correct: false },
      { text: "Molecules should collide with sufficient threshold energy and proper energy", correct: false },
      { text: "Тhe condition for effective collisions is the presence of sufficient threshold energy of molecules", correct: false },
    ],
  },
  {
    question: "What is the unit of reaction rate measurement for a second-order reaction?",
    answers: [
      { text: "mol-l L c - 1", correct: true },
      { text: "s-1", correct: false },
      { text: "mole L s", correct: false },
      { text: "mol-2 L2 s-1", correct: false },
      { text: "mol - 2 L 2", correct: false },
    ],
  },
  {
    question: "A breakfast cereal contains 5 g of protein, 24 g of carbohydrates, and 8 g of fat. What is the Calorie content of a serving of this cereal if the average number of Calories for fat is 9.4 Calories/g, for carbohydrates is 4.1 Calories/g, and for protein is 4.1 Calories/g?",
    answers: [
      { text: "194 Calories", correct: true },
      { text: "70 Calories", correct: false },
      { text: "114 Calories", correct: false },
      { text: "162 Calories", correct: false },
      { text: "225 Calories", correct: false },
    ],
  },
  {
    question: "What is the molar concentration of equivalent?",
    answers: [
      { text: "the equivalent amount of a substance contained in 1 liter of solution", correct: true },
      { text: "the number of moles solute contained in 1 kg of solvent", correct: false },
      { text: "the mass of substance in 1 liter of solution", correct: false },
      { text: "the ratio of the mass of the solute in the mass solution", correct: false },
      { text: "the mass of solute contained in 1ml of solvent", correct: false },
    ],
  },
  {
    question: "What is the molal concentration?",
    answers: [
      { text: "the number of moles solute contained in 1 kg of solvent", correct: true },
      { text: "the ratio of the mass of the solute in the mass solution", correct: false },
      { text: "the mass of substance in 1 liter of solution", correct: false },
      { text: "the equivalent amount of a substance contained in 1 liter of solution", correct: false },
      { text: "the mass of solute contained in 1ml of solvent", correct: false },
    ],
  },
  {
    question: "What is the pH solution of the salt formed by a strong base and weak acid?",
    answers: [
      { text: "pH > 7", correct: true },
      { text: "pH <7", correct: false },
      { text: "pH ~7", correct: false },
      { text: "pH = 7", correct: false },
      { text: "pH ≤ 7", correct: false },
    ],
  },
  {
    question: "Which of the following is not a colligative property?",
    answers: [
      { text: "Freezing point", correct: true },
      { text: "Lowering of vapour pressure", correct: false },
      { text: "Osmotic pressure", correct: false },
      { text: "Elevation of bolling point", correct: false },
      { text: "Vapor pressure redaction", correct: false },
    ],
  },
  {
    question: "What is the name of a solution having an osmotic pressure lower than that of blood plasma?",
    answers: [
      { text: "Hypotonic", correct: true },
      { text: "Isoosmotic", correct: false },
      { text: "Saturated", correct: false },
      { text: "Hypertonic", correct: false },
      { text: "Isotonic", correct: false },
    ],
  },
  {
    question: "Find equivalent mass of phosphoric acid",
    answers: [
      { text: "32.7", correct: true },
      { text: "0.5", correct: false },
      { text: "1", correct: false },
      { text: "2", correct: false },
      { text: "65", correct: false },
    ],
  },
  {
    question: "Which of the following solutions has the minimum freezing point?",
    answers: [
      { text: "One molal CaCI2 solution", correct: true },
      { text: "One Molal NaCI solution", correct: false },
      { text: "One molal KCI solution", correct: false },
      { text: "One molal urea solution", correct: false },
      { text: "One molal LiCl solution", correct: false },
    ],
  },
  {
    question: "What is the nature of the sodium sulfite solution?",
    answers: [
      { text: "alkaline", correct: true },
      { text: "acidic", correct: false },
      { text: "slightly acidic", correct: false },
      { text: "neutral", correct: false },
      { text: "insufficient data", correct: false },
    ],
  },
  {
    question: "Which of the following is not a property of solution?",
    answers: [
      { text: "It consists of one substance.", correct: true },
      { text: "It has a definite composition", correct: false },
      { text: "It has a homogeneous composition", correct: false },
      { text: "Can be solid, liquid, gaseous", correct: false },
      { text: "It consists of several phases", correct: false },
    ],
  },
  {
    question: "Which of the following salts undergoes hydrolysis?",
    answers: [
      { text: "FeSO4", correct: true },
      { text: "NaCl", correct: false },
      { text: "Ca(NO3)2", correct: false },
      { text: "KBr", correct: false },
      { text: "NaClO4", correct: false },
    ],
  },
  {
    question: "Determine the mass of 0.16 mol H2SO4",
    answers: [
      { text: "15.68 g", correct: true },
      { text: "11.68 g", correct: false },
      { text: "13.68 g", correct: false },
      { text: "17.68 g", correct: false },
      { text: "19.68 g", correct: false },
    ],
  },
  {
    question: "In which red-ox reaction atoms of different substances change oxidation numbers?",
    answers: [
      { text: "intermolecular", correct: true },
      { text: "intramolecular", correct: false },
      { text: "counter disproportion", correct: false },
      { text: "disproportion", correct: false },
      { text: "double exchange", correct: false },
    ],
  },
  {
    question: "How can the oxidation process in the redox reaction be characterized?",
    answers: [
      { text: "the process of lossing of electrons", correct: true },
      { text: "the process of increasing the degree of oxidation", correct: false },
      { text: "the process of gaining of electrons", correct: false },
      { text: "the process of equalizing the number of electrons", correct: false },
      { text: "the decrease in the valence of the electropositive component", correct: false },
    ],
  },
  {
    question: "What can the oxidation process be called?",
    answers: [
      { text: "addition of oxygen", correct: true },
      { text: "addition of hydrogen", correct: false },
      { text: "removal of oxygen", correct: false },
      { text: "removal of nitrogen", correct: false },
      { text: "addition of water", correct: false },
    ],
  },
  {
    question: "Who invented the galvanic cell?",
    answers: [
      { text: "Galvani and Volta", correct: true },
      { text: "Joseph Priestley", correct: false },
      { text: "Henry Cavendish", correct: false },
      { text: "Antoine Lavoisier", correct: false },
      { text: "Hermann Hess", correct: false },
    ],
  },
  {
    question: "What is the oxidation number of Cr in K2Cr2O7?",
    answers: [
      { text: "6", correct: true },
      { text: "-6", correct: false },
      { text: "-2", correct: false },
      { text: "2", correct: false },
      { text: "3", correct: false },
    ],
  },
  {
    question: "Consider the following reaction:Zn + Cu2+ → Zn2+ + Cu With reference to the above, which one of the following is the correct statement?",
    answers: [
      { text: " Zn is oxidised to Zn2+ ions.", correct: true },
      { text: "Zn is reduced to Zn2+ ions.", correct: false },
      { text: "Zn2+ ions are oxidised to Zn.", correct: false },
      { text: "Cu2+ ions are oxidized to Cu.", correct: false },
      { text: "Cu is oxidized to Cu2+ ions", correct: false },
    ],
  },
  {
    question: "Which of the above will not conduct electricity in an aqueous solution?",
    answers: [
      { text: "Sugar", correct: true },
      { text: "Copper sulfate", correct: false },
      { text: "Table salt", correct: false },
      { text: "Sodium hydroxide", correct: false },
      { text: "Nitric acid", correct: false },
    ],
  },
  {
    question: "When the following equation is balanced using the smallest whole number coefficients, what is the coefficient of NH3?NH3 + O2 → NO + H2O",
    answers: [
      { text: "4", correct: true },
      { text: "2", correct: false },
      { text: "3", correct: false },
      { text: "5", correct: false },
      { text: "6", correct: false },
    ],
  },
  {
    question: "Which of the following option correct for the donor of electrons in coordination compound?",
    answers: [
      { text: "ligands", correct: true },
      { text: "central ion", correct: false },
      { text: "outer sphere ions", correct: false },
      { text: "ligands and outer sphere ion", correct: false },
      { text: "central ion and ligands", correct: false },
    ],
  },
  {
    question: "What will be in the sequence of d-p-s-elements of complex forming ability?",
    answers: [
      { text: "decreases", correct: true },
      { text: "increases", correct: false },
      { text: "doesn’t change", correct: false },
      { text: "absorb", correct: false },
      { text: "release", correct: false },
    ],
  },
  {
    question: "What is the dentatness of EDTA?",
    answers: [
      { text: "6", correct: true },
      { text: "3", correct: false },
      { text: "4", correct: false },
      { text: "5", correct: false },
      { text: "2", correct: false },
    ],
  },
  {
    question: "What is the coordination number of the central atom in the following complex? [Cu(NH3)4]SO4",
    answers: [
      { text: "4", correct: true },
      { text: "2", correct: false },
      { text: "3", correct: false },
      { text: "1", correct: false },
      { text: "5", correct: false },
    ],
  },
  {
    question: "What is the explanation for the formation of complexes on the basis of valent bonds theory?",
    answers: [
      { text: "donor-acceptor interaction", correct: true },
      { text: "electron number", correct: false },
      { text: "electrostatic model", correct: false },
      { text: "protons number", correct: false },
      { text: "rate of reaction", correct: false },
    ],
  },
  {
    question: "Which of the following has a coordination number as a feature?",
    answers: [
      { text: "Central atom", correct: true },
      { text: "Ligand", correct: false },
      { text: "Coordination entity", correct: false },
      { text: "Coordination compound", correct: false },
      { text: "complex compound", correct: false },
    ],
  },
  {
    question: "Which of the following complexes is cationic?",
    answers: [
      { text: "[Co(NH3)5Cl]Cl2", correct: true },
      { text: "K2[Cu(NH3)4]", correct: false },
      { text: "[Pt(NH3)2Cl2] ", correct: false },
      { text: "[Zn(NH3)2Cl2] ", correct: false },
      { text: "[Cu(CN)2]", correct: false },
    ],
  },
  {
    question: "What type of bond exists between the ligand and the central atom?",
    answers: [
      { text: "Donor-acceptor", correct: true },
      { text: "Nonpolar covalent", correct: false },
      { text: "Ionic", correct: false },
      { text: "Metallic", correct: false },
      { text: "Hydrogen", correct: false },
    ],
  },
  {
    question: "Identify the correct naming for K2[PdCl4].",
    answers: [
      { text: "Potassium tetrachloropalladate(II)", correct: true },
      { text: "Potassium tetrachlorinepalladate(II)", correct: false },
      { text: "Potassium tetrachloridopalladium(II)", correct: false },
      { text: "Potassium tetrachlorinepalladium(II)", correct: false },
      { text: "Potassium tetrachloridopalladate(IV)", correct: false },
    ],
  },
  {
    question: "Which of the following compounds has tetrahedral geometry?",
    answers: [
      { text: "Na2[NiCl4]", correct: true },
      { text: "K3[Fe(CN)6] ", correct: false },
      { text: "K4[Fe(CN)6] ", correct: false },
      { text: "Na[Au(CN)2] ", correct: false },
      { text: "[Ag(NH3)2]Cl ", correct: false },
    ],
  },
  {
    question: "What is the name of following coordination compound? K4[Fe(CN)6]",
    answers: [
      { text: "potassium hexacyanoferrate(II)", correct: true },
      { text: "potassium cyanoferrate(II)", correct: false },
      { text: "potassium hexacyanoferrate(III)", correct: false },
      { text: "tetrapotassiumhexacyanoferrate(II)", correct: false },
      { text: "hexacyanoferrate(II) potassium", correct: false },
    ],
  },
  {
    question: "Which of the following is not a mechanism for the separation of a physically unstable suspension of magnesium hydroxide in water?",
    answers: [
      { text: "Hydrolysis", correct: true },
      { text: "Aggregation", correct: false },
      { text: "Filtration", correct: false },
      { text: "Separation", correct: false },
      { text: "Flocculation", correct: false },
    ],
  },
  {
    question: "Which of the following is a colloid?",
    answers: [
      { text: "starch solution", correct: true },
      { text: "urea solution", correct: false },
      { text: "sugar solution", correct: false },
      { text: "salt solution", correct: false },
      { text: "water solution", correct: false },
    ],
  },
  {
    question: "Which of the following is a homogeneous system?",
    answers: [
      { text: "sugar in water", correct: true },
      { text: "bread in water", correct: false },
      { text: "concrete in water", correct: false },
      { text: "muddy water", correct: false },
      { text: "starch in water", correct: false },
    ],
  },
  {
    question: "Which property of colloidal suspension is used to determine the nature of charge on the particles?",
    answers: [
      { text: "electrophoresis", correct: true },
      { text: "centrifugation", correct: false },
      { text: "sedimentation", correct: false },
      { text: "ultrafiltration", correct: false },
      { text: "titration", correct: false },
    ],
  },
  {
    question: "Which one of the following is not suitable for sols?",
    answers: [
      { text: "paramagnetism", correct: true },
      { text: "absorption", correct: false },
      { text: "tyndall effect", correct: false },
      { text: "flocculation", correct: false },
      { text: "coagulation", correct: false },
    ],
  },
  {
    question: "What components can form an emulsion?",
    answers: [
      { text: "liquid medium - liquid particles", correct: true },
      { text: "liquid medium - solid particles", correct: false },
      { text: "solid medium - gaseous particles", correct: false },
      { text: "gaseous medium - liquid particles", correct: false },
      { text: "solid medium - solid particles", correct: false },
    ],
  },
  {
    question: "Which of the following is a colloidal system?",
    answers: [
      { text: "Milk", correct: true },
      { text: "Salt in water", correct: false },
      { text: "Sugar in water", correct: false },
      { text: "Oxygen in air", correct: false },
      { text: "Alcohol in water", correct: false },
    ],
  },
  {
    question: "Which effect shows the scattering of light in colloids?",
    answers: [
      { text: "Tyndall effect", correct: true },
      { text: "Brownian motion", correct: false },
      { text: "Sedimentation", correct: false },
      { text: "Reflection", correct: false },
      { text: "Refraction", correct: false },
    ],
  },
  {
    question: "Which one is used as a protective colloid?",
    answers: [
      { text: "Gelatin", correct: true },
      { text: "Sodium chloride", correct: false },
      { text: "Glucose", correct: false },
      { text: "Urea", correct: false },
      { text: "Ethanol", correct: false },
    ],
  },
  {
    question: "What is the charge on a gold sol particle?",
    answers: [
      { text: "Positive", correct: true },
      { text: "Negative", correct: false },
      { text: "Neutral", correct: false },
      { text: "Mixed", correct: false },
      { text: "Unknown", correct: false },
    ],
  },
  {
    question: "Which method is used to prepare colloids?",
    answers: [
      { text: "Peptization", correct: true },
      { text: "Crystallization", correct: false },
      { text: "Sublimation", correct: false },
      { text: "Condensation", correct: false },
      { text: "Neutralization", correct: false },
    ],
  },
  {
    question: "How the influence of the radius of monovalent ions on their coagulating ability is expressed by the lyotropic series?",
    answers: [
      { text: "Li+<Na+<K+<Rb+<Cs+", correct: true },
      { text: "Li+<Na+<Rb+<Cs+<K+", correct: false },
      { text: "Cs+<K+< Na+<Rb+<Li+", correct: false },
      { text: "Cs+<Rb+<K+< Na+< Li+", correct: false },
      { text: "Li+<Cs+<Rb+< Na+<K+", correct: false },
    ],
  },
  {
    question: "Indicate the formula of the micelle of AgI sol obtained in excess of KI:",
    answers: [
      { text: "{[m(AgI)]nI-(n-x)K+}-xx K+", correct: true },
      { text: "{[m(AgI)]n NO3-(n-x)NO3-}x Ag+", correct: false },
      { text: "{[m(AgI)]nAg+(n-x)NO3-}x NO3-", correct: false },
      { text: "{[m(AgI)]nK+(n-x)I-}x I", correct: false },
      { text: "{[m(AgI)]nI-(n-x)K+}x K+", correct: false },
    ],
  },
  {
    question: "Which statement explains why the element carbon forms so many compounds?",
    answers: [
      { text: "Carbon readily forms covalent bonds with other carbon atoms.", correct: true },
      { text: "Carbon atoms have very high electronegativity.", correct: false },
      { text: "Carbon atoms have very low electronegativity.", correct: false },
      { text: "Carbon readily forms ionic bonds with other carbon atoms.", correct: false },
      { text: "Carbon atoms combine readily with oxygen.", correct: false },
    ],
  },
  {
    question: "Which polymers occur naturally?",
    answers: [
      { text: "starch and cellulose", correct: true },
      { text: "starch and nylon", correct: false },
      { text: "protein and nylon", correct: false },
      { text: "protein and plastic", correct: false },
      { text: "plastic and nylon", correct: false },
    ],
  },
  {
    question: "Which class of organic compounds can be represented as R - OH?",
    answers: [
      { text: "alcohols", correct: true },
      { text: "acids", correct: false },
      { text: "esters", correct: false },
      { text: "ethers", correct: false },
      { text: "aldehydes", correct: false },
    ],
  },
  {
    question: "Which alcohol contains three hydroxyl groups per molecule?",
    answers: [
      { text: "glycerol", correct: true },
      { text: "propanol", correct: false },
      { text: "butanol", correct: false },
      { text: "pentanol", correct: false },
      { text: "hexanol", correct: false },
    ],
  },
  {
    question: "Which of the following is one of the products obtained by a reaction of an acid and alcohol?",
    answers: [
      { text: "Ester", correct: true },
      { text: "carbon dioxide", correct: false },
      { text: "glycerol", correct: false },
      { text: "ethanol.", correct: false },
      { text: "ether", correct: false },
    ],
  },
  {
    question: "Which hydrocarbon has more than one possible structural formula?",
    answers: [
      { text: "C4H10", correct: true },
      { text: "C2H4", correct: false },
      { text: "C2H6", correct: false },
      { text: "C3H8", correct: false },
      { text: "CH4", correct: false },
    ],
  },
  {
    question: "Choose the correct one which will react faster in the SN2 nucleophilic substitution reaction?",
    answers: [
      { text: "CH2 = CH – CH2 – Br", correct: true },
      { text: "CH2 = CH - (CH2)3-CH2 - Br", correct: false },
      { text: "CH2 = CH – CH2 - Cl", correct: false },
      { text: "CH2 = CH– CH2 –CH2- Br", correct: false },
      { text: "CH2 = CH – (CH2)2-CH2 – Br", correct: false },
    ],
  },
  {
    question: "What will be the reactivity of chlorobenzene in an electrophilic substitution reaction with benzene?",
    answers: [
      { text: "Reacts very slowly than benzene", correct: true },
      { text: "Reacts in the same way as benzene", correct: false },
      { text: "Reacts faster than benzene", correct: false },
      { text: "Does not react with benzene", correct: false },
      { text: "Reacts very faster than benzene", correct: false },
    ],
  },
  {
    question: "What type of organic reactions are involved in this following reaction? CH3CH2CH2CH2Br + H2O → _______________ + HBr",
    answers: [
      { text: "a substitution reaction", correct: true },
      { text: "a saponification reaction", correct: false },
      { text: "an addition reaction", correct: false },
      { text: "an esterification reaction", correct: false },
      { text: "a hydrolysis reaction", correct: false },
    ],
  },
  {
    question: "What group of organic molecule have general formula of ROH?",
    answers: [
      { text: "Alcohol", correct: true },
      { text: "Carboxylic acids", correct: false },
      { text: "Esters", correct: false },
      { text: "Ethers", correct: false },
      { text: "Ketones", correct: false },
    ],
  },
  {
    question: "Which of the following compound gives a characteristic odor and taste of fruit such as bananas, oranges, and pineapples?",
    answers: [
      { text: "Esters", correct: true },
      { text: "Carboxylic acids", correct: false },
      { text: "Aldehydes", correct: false },
      { text: "Ethers", correct: false },
      { text: "Ketones", correct: false },
    ],
  },
  {
    question: "What is the use of Tollens' reagent?",
    answers: [
      { text: "Distinguish aldehydes from ketones", correct: true },
      { text: "Distinguish alcohols from aldehydes", correct: false },
      { text: "Reduce aldehydes", correct: false },
      { text: "Reduce ketones", correct: false },
      { text: "Reduce carboxylic acids", correct: false },
    ],
  },
  {
    question: "Which of the following is a product of reduction of a ketone?",
    answers: [
      { text: "A secondary alcohol", correct: true },
      { text: "A primary alcohol", correct: false },
      { text: "A carboxylic acid", correct: false },
      { text: "A ketone", correct: false },
      { text: "A tertiary acohol", correct: false },
    ],
  },
  {
    question: "What are the products of the reaction between methanol and ethanoic acid?",
    answers: [
      { text: "Methyl ethanoate and water", correct: true },
      { text: "CH3COOCH3 and hydrogen", correct: false },
      { text: "Ethyl methanoate and water", correct: false },
      { text: "CH3COOC2H5 and water", correct: false },
      { text: "Ethyle ethanoate and water", correct: false },
    ],
  },
  {
    question: "Which compound will give a positive Tollen's test?",
    answers: [
      { text: "Pentanal", correct: true },
      { text: "3-pentanone", correct: false },
      { text: "Pentanoic acid", correct: false },
      { text: "Pentanol", correct: false },
      { text: "Ethyle propanoate", correct: false },
    ],
  },
  {
    question: "What is the product of reduction of 2- butanone?",
    answers: [
      { text: "2-butanol", correct: true },
      { text: "Butane", correct: false },
      { text: "Butanoic acid", correct: false },
      { text: "2-pentanone", correct: false },
      { text: "1-butanol", correct: false },
    ],
  },
  {
    question: "Which of the following is used for production of alcohol by fermentation method?",
    answers: [
      { text: "Yeast", correct: true },
      { text: "O2", correct: false },
      { text: "Invertase", correct: false },
      { text: "CO2", correct: false },
      { text: "H2O", correct: false },
    ],
  },
  {
    question: "Which of the following is formed on hydrolysis of CH2 = CH2?",
    answers: [
      { text: "Ethyl alcohol", correct: true },
      { text: "Acetaldehyde", correct: false },
      { text: "Ethylene oxide", correct: false },
      { text: "Ethylene glycol", correct: false },
      { text: "Ethyl", correct: false },
    ],
  },
  {
    question: "A para of mirror isomers of which compound is the standard for assigning optical isomers to the D or L-form?:",
    answers: [
      { text: "glyceraldehyde", correct: true },
      { text: "malic acid", correct: false },
      { text: "ethyl alcohol", correct: false },
      { text: "alanine", correct: false },
      { text: "glucose", correct: false },
    ],
  },
  {
    question: "Which of the following compounds is not a five-membered heterocyclic aromatic compound. ",
    answers: [
      { text: " indole ", correct: true },
      { text: "Pyrrole ", correct: false },
      { text: "Thiophene", correct: false },
      { text: "Furan ", correct: false },
      { text: "thiazole", correct: false },
    ],
  },
  {
    question: "Which of the following statements is not correct for mononucleotides?",
    answers: [
      { text: "heterocycle is linked with pentose by O-glycosidic bond", correct: true },
      { text: "mononucleotides consist of three constitutional parts", correct: false },
      { text: "hydroxyl groups are present in carbohydrates", correct: false },
      { text: "ribose exist in its furanose form", correct: false },
      { text: "the anomer carbon of pentose has β - configuration", correct: false },
    ],
  },
  {
    question: "Between which atoms furanose rings are formed?",
    answers: [
      { text: "C-1 and C- 4", correct: true },
      { text: "C-1 and C- 5", correct: false },
      { text: "C-2 and C- 5", correct: false },
      { text: "C-2 and C- 6", correct: false },
      { text: "C-3 and C-5", correct: false },
    ],
  },
  {
    question: "Which of these compounds belong to heterofunctional compounds?",
    answers: [
      { text: "lactic acid", correct: true },
      { text: "oxalic acid", correct: false },
      { text: "acetic acid", correct: false },
      { text: "butyric acid", correct: false },
      { text: "benzoic acid", correct: false },
    ],
  },
  {
    question: "Which of the following acids are oxycarboxylic acids?",
    answers: [
      { text: "pyruvic acid", correct: true },
      { text: "benzoic acid", correct: false },
      { text: "oxalic acid", correct: false },
      { text: "Acetic acid", correct: false },
      { text: "Butyric acid", correct: false },
    ],
  },
  {
    question: "In which of the following examples name of compound doesn’t match given structure?",
    answers: [
      { text: "HOCH2CH2COOH glycolic acid", correct: true },
      { text: "H2NCH2CH2CH2COOH GABA-γ-aminobutyric acid", correct: false },
      { text: "CH3CH(OH)COOH lactic acid", correct: false },
      { text: "HOCH2CH2CH2COOH GOBA-γ-hydroxybutyric acid", correct: false },
      { text: "H2NCH2CH2COOH β-alanine", correct: false },
    ],
  },
  {
    question: "Which of the following is a heterocyclic aromatic amine?",
    answers: [
      { text: "Adenine", correct: true },
      { text: "Ethylamine", correct: false },
      { text: "Glycine", correct: false },
      { text: "Alanine", correct: false },
      { text: "Oxalic acid", correct: false },
    ],
  },
  {
    question: "Which is a heterocyclic aromatic compound found in DNA?",
    answers: [
      { text: "Guanine", correct: true },
      { text: "Glucose", correct: false },
      { text: "Benzene", correct: false },
      { text: "Phenol", correct: false },
      { text: "Lactic acid", correct: false },
    ],
  },
  {
    question: "What substance is formed in the reaction of chlorination of pyrrol by the mechanism of electrophilic substitution?",
    answers: [
      { text: "1-chloropyrrol", correct: true },
      { text: "3-chloropyrrol", correct: false },
      { text: "2-chloropyrrol", correct: false },
      { text: "2-chloropyrrolidine", correct: false },
      { text: "2,2- dichloropyrrol", correct: false },
    ],
  },
  {
    question: "What is formed when toluene reacts with chlorine in the presence of light?",
    answers: [
      { text: "Benzyl chloride", correct: true },
      { text: "Ortho chlorotoluene", correct: false },
      { text: "Para chloro toluene", correct: false },
      { text: "Benzoyl chloride", correct: false },
      { text: "Ethylene bromide", correct: false },
    ],
  },
  {
    question: "Which of the following is not a monosaccharide?",
    answers: [
      { text: "Sucrose", correct: true },
      { text: "Fructose", correct: false },
      { text: "Ribose", correct: false },
      { text: "Glucose", correct: false },
      { text: "Tetrose", correct: false },
    ],
  },
  {
    question: "Which of the followinf is type of α-amine acid – valine?",
    answers: [
      { text: "Neutral", correct: true },
      { text: "Acidic", correct: false },
      { text: "Basic", correct: false },
      { text: "Slightly Polar", correct: false },
      { text: "Ionic", correct: false },
    ],
  },
  {
    question: "What is the difference of fats from waxes?",
    answers: [
      { text: "A glycerol backbone", correct: true },
      { text: "Higher melting points", correct: false },
      { text: "Longer fatty acids", correct: false },
      { text: "An ether", correct: false },
      { text: "More unsaturation", correct: false },
    ],
  },
  {
    question: "Which of the following compounds form under hydrolysis of simple lipids?",
    answers: [
      { text: "Alcohols, carboxylic acids", correct: true },
      { text: "Carboxylic acids", correct: false },
      { text: "Esters", correct: false },
      { text: "Alcohols", correct: false },
      { text: "Alcohols, carboxylic acids, carbohydrates etc", correct: false },
    ],
  },
  {
    question: "Which sugar forms major component of nucleic acids?",
    answers: [
      { text: "Ribose", correct: true },
      { text: "Galactose", correct: false },
      { text: "Mannose", correct: false },
      { text: "Maltose", correct: false },
      { text: "Xylulose", correct: false },
    ],
  },
  {
    question: "Which of the following is due to Vitamin C deficiency?",
    answers: [
      { text: "Scurvy", correct: true },
      { text: "Cancer", correct: false },
      { text: "BeriBeri", correct: false },
      { text: "Rickets", correct: false },
      { text: "Anemia", correct: false },
    ],
  },
  {
    question: "Which of the following is not a function of Vitamin A in the body?",
    answers: [
      { text: "Blood clotting", correct: true },
      { text: "Immune defenses, maintenance of body linings and skin", correct: false },
      { text: "Normal cell development and reproduction", correct: false },
      { text: "Vision", correct: false },
      { text: "Bone and body growth", correct: false },
    ],
  },
  {
    question: "What compound sugars are converted into in the liver?",
    answers: [
      { text: "Glycogen", correct: true },
      { text: "Vitamin", correct: false },
      { text: "Starch", correct: false },
      { text: "Chitin", correct: false },
      { text: "Cellulose", correct: false },
    ],
  },
  {
    question: "What is the end product of hydrolysis of a Starch by amylase?",
    answers: [
      { text: "Glucose", correct: true },
      { text: "Soluble starch", correct: false },
      { text: "Dextrins", correct: false },
      { text: "Glycogen", correct: false },
      { text: "Cellulose", correct: false },
    ],
  },
  {
    question: "Bond between sugar rest and pyrimidine N-base in nucleoside is formed between which atoms?",
    answers: [
      { text: "C1 and N1", correct: true },
      { text: "C1 and N9", correct: false },
      { text: "C3 and N9", correct: false },
      { text: "C3 and N1", correct: false },
      { text: "C5 and N1", correct: false },
    ],
  },
  {
    question: "How the double helical structure of DNA is held together?",
    answers: [
      { text: "Hydrogen bonding", correct: true },
      { text: "Peptide bonding", correct: false },
      { text: "Sulphur-sulphur linkages", correct: false },
      { text: "Glycosidic bonds", correct: false },
      { text: "Ester linkages", correct: false },
    ],
  },
  {
    question: "Which of the following statements is false about glucose?",
    answers: [
      { text: "It is a disaccharide", correct: true },
      { text: "It is a reducing sugar", correct: false },
      { text: "It has a pyranose form", correct: false },
      { text: "It is a polyalcohol", correct: false },
      { text: "It is aldose sugar", correct: false },
    ],
  },
  {
    question: "Which of the following vitamin functions as both, hormone and visual pigment?",
    answers: [
      { text: "Retinal", correct: true },
      { text: "Thiamine", correct: false },
      { text: "Biotin", correct: false },
      { text: "Niacin", correct: false },
      { text: "Cobalamin", correct: false },
    ],
  },
  {
    question: "Which of the following sugar yields only glucose on hydrolysis?",
    answers: [
      { text: "Maltose", correct: true },
      { text: "Sucrose", correct: false },
      { text: "Lactose", correct: false },
      { text: "Fructose", correct: false },
      { text: "Inulin", correct: false },
    ],
  },
  {
    question: "Which of the following vitamin works together with Folate to produce new red blood cells?",
    answers: [
      { text: "Vitamin B-12", correct: true },
      { text: "Vitamin D", correct: false },
      { text: "Vitamin A", correct: false },
      { text: "Niacin", correct: false },
      { text: "Vitamin B-1", correct: false },
    ],
  },
  {
    question: "What is the form of converted sugars in the liver?",
    answers: [
      { text: "Glycogen", correct: true },
      { text: "Cellulose", correct: false },
      { text: "Inulin", correct: false },
      { text: "Starch", correct: false },
      { text: "Chitin", correct: false },
    ],
  },
  {
    question: "Which of the following compound forms upon hydrolysis of proteins?",
    answers: [
      { text: "Amino acids", correct: true },
      { text: "Amines", correct: false },
      { text: "Hydroxyl acids", correct: false },
      { text: "Fatty acids", correct: false },
      { text: "Alcohols", correct: false },
    ],
  },
  {
    question: "Dinucleotide is obtained by joining two nucleotides together by phosphodiester linkage. Between which carbon atoms of pentose sugars of nucleotides are these linkages present?",
    answers: [
      { text: "5′ and 3′", correct: true },
      { text: "1′ and 5′", correct: false },
      { text: "5′ and 5′", correct: false },
      { text: "3′ and 3′", correct: false },
      { text: "3′ and 1′", correct: false },
    ],
  },
  {
    question: "Amino acids generally exist in the form of Zwitter ions, which means they contain?",
    answers: [
      { text: "The basic – NH3+ group and acidic – COO– group", correct: true },
      { text: "Basic – COO– group and acidic – NH3+ group", correct: false },
      { text: "Basic -NH2 and acidic – H+ group", correct: false },
      { text: "Basic – NH2 group and acidic – COOH group", correct: false },
      { text: " Basic – COOH group and acidic – NH group", correct: false },
    ],
  },
]


const questionElement = document.getElementById('question'); 
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const backButton = document.getElementById('back-btn');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = 'Next';
  backButton.innerHTML = 'Back';
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  const questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

  const shuffledAnswers = [...currentQuestion.answers];
  for (let i = shuffledAnswers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledAnswers[i], shuffledAnswers[j]] = [shuffledAnswers[j], shuffledAnswers[i]];
  }

  shuffledAnswers.forEach((answer) => {
    const button = document.createElement('button');
    button.innerHTML = answer.text;
    button.classList.add('btn');

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener('click', selectAnswer);
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = 'none';
  backButton.style.display = 'none';

  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === 'true';
  if (isCorrect) {
    selectedBtn.classList.add('correct');
    score++;
  } else {
    selectedBtn.classList.add('incorrect');
  }

  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === 'true') {
      button.classList.add('correct');
    }
    button.disabled = true;
  });

  nextButton.style.display = 'inline';
  backButton.style.display = 'inline';
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = 'Solve Again';
  nextButton.style.display = 'inline';
  backButton.style.display = 'inline';
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener('click', () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

function handleBackButton() {
  currentQuestionIndex--;
  if (currentQuestionIndex >= 0) {
    showQuestion();
  }
}

backButton.addEventListener('click', () => {
  if (currentQuestionIndex > 0) {
    handleBackButton();
  }
});

searchButton.addEventListener('click', () => {
  const questionNumber = parseInt(searchInput.value, 10);
  if (questionNumber > 0 && questionNumber <= questions.length) {
    currentQuestionIndex = questionNumber - 1;
    showQuestion();
  } else {
    alert('Please enter a valid question number between 1 and ' + questions.length);
  }
});

startQuiz();
