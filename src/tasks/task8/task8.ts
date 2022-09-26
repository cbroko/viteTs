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
type penguinKey = keyof Penguin;

const aKeyOfPenguin: penguinKey = "name";

const penguin = {
	name: "Sverre",
	age: 67,
};

setTextContentOnElement("#penguin-name", penguin[aKeyOfPenguin]);

/**
 * Oppgave 8.2
 */
const getValueByKey = <T>(obj: T, key: keyof T) => obj[key];
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
type CleverBouvetPenguin = {
	[key in keyof Penguin]-?: Penguin[key]
};

const cleverBouvetPenguin: CleverBouvetPenguin = {
	name: "Christian",
	age: 27,
	isTheFinestOfPenguins: true,
	numberOfDaysAtBouvetIsland: 738,
};

type VolotilePenguin = Penguin & {
	name?: string;
	age?: number;
	weight?: number;
	height?: number;
};

type VolotileButCleverPenguin = {};

const volotileButCleverPenguin: VolotileButCleverPenguin = { age: 30 };
