var aspects;

function loadAspects() {
	aspects = {};
	
	aspects["Aer"] = { name: "Aer", type: "primal", desc: "Air", mod: "thaumcraft" };
	aspects["Terra"] = { name: "Terra", type: "primal", desc: "Earth", mod: "thaumcraft" };
	aspects["Ignis"] = { name: "Ignis", type: "primal", desc: "Fire", mod: "thaumcraft" };
	aspects["Aqua"] = { name: "Aqua", type: "primal", desc: "Water", mod: "thaumcraft" };
	aspects["Ordo"] = { name: "Ordo", type: "primal", desc: "Order, Regularity, Purity", mod: "thaumcraft" };
	aspects["Perditio"] = { name: "Perditio", type: "primal", desc: "Entropy, Chaos, Destruction", mod: "thaumcraft" };
	aspects["Vacuos"] = { name: "Vacuos", type: "compound", component1: "Aer", component2: "Perditio", desc: "Void", mod: "thaumcraft" };
	aspects["Lux"] = { name: "Lux", type: "compound", component1: "Aer", component2: "Ignis", desc: "Light", mod: "thaumcraft" };
	aspects["Potentia"] = { name: "Potentia", type: "compound", component1: "Ordo", component2: "Ignis", desc: "Energy", mod: "thaumcraft" };
	aspects["Motus"] = { name: "Motus", type: "compound", component1: "Aer", component2: "Ordo", desc: "Motion, Animation", mod: "thaumcraft" };
	aspects["Saxum"] = { name: "Saxum", type: "compound", component1: "Terra", component2: "Terra", desc: "Stone", mod: "thaumcraft" };
	aspects["Victus"] = { name: "Victus", type: "compound", component1: "Aqua", component2: "Terra", desc: "Life", mod: "thaumcraft" };
	aspects["Tempestas"] = { name: "Tempestas", type: "compound", component1: "Aer", component2: "Aqua", desc: "Weather", mod: "thaumcraft" };
	aspects["Gelum"] = { name: "Gelum", type: "compound", component1: "Aqua", component2: "Ordo", desc: "Ice, Frost, Cold", mod: "thaumcraft" };
	aspects["Vitreus"] = { name: "Vitreus", type: "compound", component1: "Saxum", component2: "Aqua", desc: "Crystal, Glass, Clear", mod: "thaumcraft" };
	aspects["Mortuus"] = { name: "Mortuus", type: "compound", component1: "Victus", component2: "Perditio", desc: "Death", mod: "thaumcraft" };
	aspects["Volatus"] = { name: "Volatus", type: "compound", component1: "Aer", component2: "Motus", desc: "Flight", mod: "thaumcraft" };
	aspects["Tenebrae"] = { name: "Tenebrae", type: "compound", component1: "Vacuos", component2: "Lux", desc: "Darkness", mod: "thaumcraft" };
	aspects["Spiritus"] = { name: "Spiritus", type: "compound", component1: "Victus", component2: "Mortuus", desc: "Soul", mod: "thaumcraft" };
	aspects["Sano"] = { name: "Sano", type: "compound", component1: "Victus", component2: "Victus", desc: "Heal, Cure", mod: "thaumcraft" };
	aspects["Iter"] = { name: "Iter", type: "compound", component1: "Motus", component2: "Terra", desc: "Travel, Journey", mod: "thaumcraft" };
	aspects["Venenum"] = { name: "Venenum", type: "compound", component1: "Aqua", component2: "Mortuus", desc: "Poison", mod: "thaumcraft" };
	aspects["Alienis"] = { name: "Alienis", type: "compound", component1: "Vacuos", component2: "Tenebrae", desc: "Alien, Strange, The Eldritch", mod: "thaumcraft" };
	aspects["Praecantatio"] = { name: "Praecantatio", type: "compound", component1: "Vacuos", component2: "Potentia", desc: "Magic", mod: "thaumcraft" };
	aspects["Auram"] = { name: "Auram", type: "compound", component1: "Praecantatio", component2: "Aer", desc: "Aura", mod: "thaumcraft" };
	aspects["Vitium"] = { name: "Vitium", type: "compound", component1: "Praecantatio", component2: "Perditio", desc: "Taint", mod: "thaumcraft" };
	aspects["Granum"] = { name: "Granum", type: "compound", component1: "Victus", component2: "Terra", desc: "Seed, Young", mod: "thaumcraft" };
	aspects["Limus"] = { name: "Limus", type: "compound", component1: "Victus", component2: "Aqua", desc: "Slime, Sticky", mod: "thaumcraft" };
	aspects["Herba"] = { name: "Herba", type: "compound", component1: "Granum", component2: "Terra", desc: "Plant", mod: "thaumcraft" };
	aspects["Arbor"] = { name: "Arbor", type: "compound", component1: "Terra", component2: "Herba", desc: "Tree, Wood", mod: "thaumcraft" };
	aspects["Bestia"] = { name: "Bestia", type: "compound", component1: "Motus", component2: "Victus", desc: "Beast", mod: "thaumcraft" };
	aspects["Corpus"] = { name: "Corpus", type: "compound", component1: "Mortuus", component2: "Bestia", desc: "Flesh", mod: "thaumcraft" };
	aspects["Exanimis"] = { name: "Exanimis", type: "compound", component1: "Motus", component2: "Mortuus", desc: "Undead", mod: "thaumcraft" };
	aspects["Cognitio"] = { name: "Cognitio", type: "compound", component1: "Terra", component2: "Spiritus", desc: "Mind, Memory, Cognition", mod: "thaumcraft" };
	aspects["Sensus"] = { name: "Sensus", type: "compound", component1: "Aer", component2: "Spiritus", desc: "Senses", mod: "thaumcraft" };
	aspects["Humanus"] = { name: "Humanus", type: "compound", component1: "Bestia", component2: "Cognitio", desc: "Man", mod: "thaumcraft" };
	aspects["Messis"] = { name: "Messis", type: "compound", component1: "Granum", component2: "Humanus", desc: "Crop", mod: "thaumcraft" };
	aspects["Meto"] = { name: "Meto", type: "compound", component1: "Messis", component2: "Humanus", desc: "Harvest", mod: "thaumcraft" };
	aspects["Metallum"] = { name: "Metallum", type: "compound", component1: "Saxum", component2: "Ordo", desc: "Metal", mod: "thaumcraft" };
	aspects["Perfodio"] = { name: "Perfodio", type: "compound", component1: "Humanus", component2: "Saxum", desc: "Mine", mod: "thaumcraft" };
	aspects["Instrumentum"] = { name: "Instrumentum", type: "compound", component1: "Humanus", component2: "Metallum", desc: "Tool, Instrument", mod: "thaumcraft" };
	aspects["Telum"] = { name: "Telum", type: "compound", component1: "Instrumentum", component2: "Perditio", desc: "Weapon, Attack, Harm", mod: "thaumcraft" };
	aspects["Tutamen"] = { name: "Tutamen", type: "compound", component1: "Instrumentum", component2: "Terra", desc: "Armor, Protection", mod: "thaumcraft" };
	aspects["Fames"] = { name: "Fames", type: "compound", component1: "Victus", component2: "Vacuos", desc: "Hunger", mod: "thaumcraft" };
	aspects["Lucrum"] = { name: "Lucrum", type: "compound", component1: "Humanus", component2: "Fames", desc: "Greed, Avarice", mod: "thaumcraft" };
	aspects["Fabrico"] = { name: "Fabrico", type: "compound", component1: "Humanus", component2: "Instrumentum", desc: "Craft", mod: "thaumcraft" };
	aspects["Pannus"] = { name: "Pannus", type: "compound", component1: "Instrumentum", component2: "Bestia", desc: "Cloth, Material, Covering", mod: "thaumcraft" };
	aspects["Machina"] = { name: "Machina", type: "compound", component1: "Motus", component2: "Instrumentum", desc: "Mechanism, Machine", mod: "thaumcraft" };
	aspects["Vinculum"] = { name: "Vinculum", type: "compound", component1: "Motus", component2: "Perditio", desc: "Trap, Imprison", mod: "thaumcraft" };
	aspects["Permutatio"] = { name: "Permutatio", type: "compound", component1: "Motus", component2: "Aqua", desc: "Exchange, Barter", mod: "thaumcraft" };
	
	// Magic Bees
	aspects["Tempus"] = { name: "Tempus", type: "compound", component1: "Vacuos", component2: "Ordo", desc: "Time", mod: "magic_bees" };
	
	// Infernal Magic
	aspects["Infernus"] = { name: "Infernus", type: "compound", component1: "Ignis", component2: "Praecantatio", desc: "The Nether, Demons, Hellfire", mod: "forbidden_magic" };
	aspects["Ira"] = { name: "Ira", type: "compound", component1: "Telum", component2: "Ignis", desc: "Wrath, Anger", mod: "forbidden_magic" };
	aspects["Invidia"] = { name: "Invidia", type: "compound", component1: "Sensus", component2: "Fames", desc: "Envy, Jealousy, Insecurity", mod: "forbidden_magic" };
	aspects["Gula"] = { name: "Gula", type: "compound", component1: "Fames", component2: "Fames", desc: "Gluttony, Consumption, Indulgence", mod: "forbidden_magic" };
	aspects["Superbia"] = { name: "Superbia", type: "compound", component1: "Volatus", component2: "Vacuos", desc: "Pride, Arrogance, Disdain", mod: "forbidden_magic" };
	aspects["Desidia"] = { name: "Desidia", type: "compound", component1: "Vinculum", component2: "Spiritus", desc: "Sloth, Laziness, Procrastination", mod: "forbidden_magic" };
	aspects["Luxuria"] = { name: "Luxuria", type: "compound", component1: "Corpus", component2: "Fames", desc: "Lust, Desire, Excess", mod: "forbidden_magic" };
}