import { setTextContentOnElement, hasEqualKeys } from "../../utils";

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
	endDate?: Date;
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

setTextContentOnElement(
	"#get-value-by-key-output-1",
	`penguin[${aKeyOfPenguin}]: ${getValueByKey(penguin, aKeyOfPenguin)}`
);

const otherObject = { color: "red" };
setTextContentOnElement(
	"#get-value-by-key-output-2",
	`otherObject["color"]: ${getValueByKey(otherObject, "color")}`
);

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

const bouvetPenguin: BouvetPenguin = {
	name: "Oscar",
	age: 30,
	weight: 80,
	height: 186,
	isTheFinestOfPenguins: true,
	numberOfDaysAtBouvetIsland: Math.round(3.5 * 365),
	numberOfFriendsAtBouvetIsland: 30,
	annualSalary: 50,
	profession: "developer",
	project: {
		name: "SG",
		clientName: "Service Grossistene",
		startDate: new Date("2022-08-01"),
	},
};

type CleverBouvetPenguin = {
	// TODO
};

const cleverBouvetPenguin: CleverBouvetPenguin = {
	name: "Christian",
	age: 27,
	isTheFinestOfPenguins: true,
	weight: 80,
	height: 186,
};

if (hasEqualKeys(bouvetPenguin, cleverBouvetPenguin)) {
	document.getElementById("dance-8-3")?.classList.remove("hidden");
}

/**
 * Oppgave 8.4
 */
interface VolatilePenguin
	extends Omit<Penguin, "name" | "age" | "weight" | "height"> {
	name?: string;
	age?: number;
	weight?: number;
	height?: number;
}

const volatilePenguin: VolatilePenguin = {
	name: "Vigdis",
	age: 29,
	isTheFinestOfPenguins: true,
};

type VolatileButCleverPenguin = {
	// TODO
};

const volatileButCleverPenguin: VolatileButCleverPenguin = {
	isTheFinestOfPenguins: true,
};

if (hasEqualKeys(volatilePenguin, volatileButCleverPenguin)) {
	document.getElementById("dance-8-4")?.classList.remove("hidden");
}
