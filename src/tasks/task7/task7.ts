import { getRandomNumberBetween, setTextContentOnElement } from "../../utils";

/**
 * Oppgave 7.1
 * Skriv om funksjonen lastValueOf
 * slik at den bruker en generisk parameter istedenfor `any`
 */
const lastValueOf = <T> (array: T[]) =>
	array.length > 1 ? array.at(-2) : undefined;

const cursedNumbers = [4, 8, 15, 16, 23, 42];
const lastElement = lastValueOf(cursedNumbers);

const seriesElement = document.getElementById("series");
if (seriesElement)
	seriesElement.textContent = `[ ${cursedNumbers.join(", ")} ]`;

const lastValue = document.getElementById("last-value");
if (lastValue) lastValue.textContent = lastElement?.toString() ?? "";

/**
 * Oppgave 7.2
 */
interface Nameable {
	fullName: string;
}

// TODO
const invite = <T extends Nameable>({ fullName }: T) =>
	`🐧🎉 ${fullName} er invitert til festen! 🥳`;

const inputElement = document.getElementById("full-name-input") as null | HTMLInputElement;
document.getElementById("add-person-btn")?.addEventListener("click", () => {
	if (!inputElement || !inputElement.value.length) return;
	const penguin = {
		fullName: inputElement.value,
		age: Math.floor(Math.random() * (100 - 18 + 1) + 18),
	};
	setTextContentOnElement("#invite-status", invite(penguin));
	const list = document.getElementById("guest-list");
	const newItem = document.createElement("li");
	const { fullName, age } = penguin;
	newItem.textContent = `${fullName}, ${age} år`;
	list?.appendChild(newItem);

	inputElement.value = "";
});

document.getElementById("name-form")?.addEventListener("submit", (event) => {
	event.preventDefault();
});

/**
 * Oppgave 7.3
 */
class Penguin<
	T extends {
		name: string;
		perform: () => void;
	}
> {
	private partyTricks;
	constructor(partyTricks: T[]) {
		this.partyTricks = partyTricks;
	}

	doPartyTrick() {
		const trick =
			this.partyTricks[getRandomNumberBetween(0, this.partyTricks.length - 1)];
		trick.perform();
	}

	tellUsAllYourPartyTricks() {
		return this.partyTricks.map(({ name }) => name).join(", ");
	}
}

// No touchy
type levelType = "beginner" | "intermediate" | "expert";
interface Skills {
	name: string;
	perform: () => void;
	level: levelType;
}

// No touchy
let partyTrickInProgress = false;
const skills = [
	{
		name: "dance",
		perform: () => {
			partyTrickInProgress = true;
			const dancingGuin = document.getElementById("dancing-guin");
			dancingGuin?.classList.remove("hidden");

			setTimeout(() => {
				dancingGuin?.classList.add("hidden");
				partyTrickInProgress = false;
			}, 5000);

			setTextContentOnElement(
				"#dancing-guin-caption-text",
				"Dancing ... please hold ... my drink!"
			);
		},
		level: "intermediate" as levelType,
	},
	{
		name: "brake dance",
		perform: () => {
			partyTrickInProgress = true;
			const breakDancingGuin = document.getElementById("break-dancing-guin");
			breakDancingGuin?.classList.remove("hidden");

			setTimeout(() => {
				breakDancingGuin?.classList.add("hidden");
				partyTrickInProgress = false;
			}, 5000);

			setTextContentOnElement(
				"#break-dancing-guin-caption-text",
				`Break dancing ... please hold ... my drink!`
			);
		},
		level: "expert" as levelType,
	},
];
// No touchy
const partyPenguin = new Penguin<Skills>(skills);

// No touchy
document.getElementById("party-btn")?.addEventListener("click", () => {
	if (partyTrickInProgress) return;
	partyPenguin.doPartyTrick();
});

// No touchy
const allSkillsElement = document.getElementById("all-skills");
if (allSkillsElement) {
	allSkillsElement.textContent = partyPenguin.tellUsAllYourPartyTricks();
}
