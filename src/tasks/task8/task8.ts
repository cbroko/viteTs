interface Penguin {
	name: string;
	age: number;
	isTheFinestOfPenguins?: true;
	numberOfDaysAtBouvetIsland?: number;
}

/**
 * Oppgave 8.1
 */
const aKeyOfPenguin: penguinKey = "name";

/**
 * Oppgave 8.2
 */
const getPenguinValueFromKey = (obj, key) => obj[key];
const penguinName = getPenguinValueFromKey(
	{ name: "Sverre", age: 67 },
	aKeyOfPenguin
);

/**
 * Oppgave 8.3
 */
type BouvetPenguin = Penguin & {
	numberOfDaysAtBouvetIsland: number;
	isTheFinestOfPenguins: true;
	bouvetIslandNetwork: BouvetPenguin[];
};

// TODO
type CelverBouvetPenguin = {
	[key in keyof Penguin]-?: Penguin[key];
};

const cleverBouvetPenguin: CelverBouvetPenguin = {
	name: "Christian",
	age: 27,
	isTheFinestOfPenguins: true,
	numberOfDaysAtBouvetIsland: 738,
};

type VolotilePenguin = Penguin & {
	name?: string;
	age?: number;
};

type VolotileButCleverPenguin = {
	[key in keyof Penguin]?: Penguin[key];
};

const volotileButCleverPenguin: VolotileButCleverPenguin = {};
