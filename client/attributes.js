var character = {
	name: "Ori",
	race: "Dwarf",
	class: "Monk",
	level: "1",
	background: "Noble",
	alignment: "Lawful Good",
};

var coreStats = {
	str: 14,
	dex: 8,
	con: 10,
	int: 12,
	wis: 15,
	cha: 13,
};

function abilityMod(score) {
	return Math.floor((score - 10) / 2);
};

var skills = {
	acrobatics: 0,
	animalHandling: 0,
	arcana: 0,
	athletics: 0,
	deception: 0,
	history: 0,
	insight: 0,
	intimidation: 0,
	investigation: 0,
	medicine: 0,
	nature: 0,
	perception: 0,
	performance: 0,
	persuasion: 0,
	religion: 0,
	sleightOfHand: 0,
	stealth: 0,
	survival: 0
};

function applyStats() {
	skills.acrobatics = abilityMod(coreStats.dex);
	skills.animalHandling = abilityMod(coreStats.wis);
	skills.arcana = abilityMod(coreStats.int);
	skills.athletics = abilityMod(coreStats.str);
	skills.deception = abilityMod(coreStats.cha);
	skills.history = abilityMod(coreStats.int);
	skills.insight = abilityMod(coreStats.wis);
	skills.intimidation = abilityMod(coreStats.cha);
	skills.investigation = abilityMod(coreStats.int);
	skills.medicine = abilityMod(coreStats.wis);
	skills.nature = abilityMod(coreStats.int);
	skills.perception = abilityMod(coreStats.wis);
	skills.performance = abilityMod(coreStats.cha);
	skills.religion = abilityMod(coreStats.int);
	skills.sleightOfHand = abilityMod(coreStats.dex);
	skills.stealth = abilityMod(coreStats.dex);
	skills.survival = abilityMod(coreStats.wis);
};

var profBonus = 4;

var profs = [
	"Heavy Armor",
	"Longsword",
	"Shields"
];

var languages = [
	"Dwarven",
	"Common",
	"Orc",
	"Giant"
];

//ORDER OF CALCULATIONS
//1. Check Ability Scores
//2. Check Levels (each class / total)
//	a. Proficiency bonus
//	b. 





















