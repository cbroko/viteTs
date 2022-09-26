import { setTextContentOnElement } from "../../utils";

interface Penguin {
	name: string;
	age: number;
	weight: number;
	height: number;
	isTheFinestOfPenguins?: true;
	numberOfDaysAtBouvetIsland?: number;
	numberOfFriendsAtBouvetIsland?: number;
	project?: Project;
	annualSalary?: fish;
	profession?:
		| "developer"
		| "designer"
		| "project manager"
		| "manager"
		| "other";
}

interface Project {
	name: string;
	clientName: string;
	startDate: Date;
	endDate: Date;
}

type fish = number;

/**
 * Oppgave 8.1
 */
const aKeyOfPenguin: penguinKey = "name";

const penguin = {
	name: "Sverre",
	age: 67,
};

setTextContentOnElement("#penguin-name", penguin[aKeyOfPenguin]);

/**
 * Oppgave 8.2
 */
const getValueByKey = <T>(obj: T, key) => obj[key];
const penguinName = getValueByKey(penguin, aKeyOfPenguin);

/**
 * Oppgave 8.3
 */
type BouvetPenguin = Penguin & {
	numberOfDaysAtBouvetIsland: number;
	isTheFinestOfPenguins: true;
	numberOfFriendsAtBouvetIsland: number;
	project: Project;
	annualSalary: fish;
	profession:
		| "developer"
		| "designer"
		| "project manager"
		| "manager"
		| "other";
};

// TODO
type CleverBouvetPenguin = {};

const cleverBouvetPenguin: CleverBouvetPenguin = {
	name: "Christian",
	age: 27,
	isTheFinestOfPenguins: true,
	numberOfDaysAtBouvetIsland: 738,
};

/**
 * Oppgave 8.4
 */
type VolatilePenguin = Penguin & {
	name?: string;
	age?: number;
	weight?: number;
	height?: number;
};

type VolatileButCleverPenguin = {};

const volotileButCleverPenguin: VolatileButCleverPenguin = { age: 30 };
