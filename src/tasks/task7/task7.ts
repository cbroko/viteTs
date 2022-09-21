import "../../style.scss";
import { debounce, setTextContentOnElement } from "../../utils";

/**
 * Oppgave 7.1
 * Skriv om funksjonen lastValueOf
 * slik at den bruker en generisk parameter istedenfor `any`
 */
const lastValueOf = (array: any[]) => array.at(-1);

const cursedNumbers = [4, 8, 15, 16, 23, 42];
const lastElement = lastValueOf(cursedNumbers);

const seriesElement = document.querySelector("#series");
if (seriesElement)
	seriesElement.textContent = `[ ${cursedNumbers.join(", ")} ]`;

const lastValue = document.querySelector("#last-value");
if (lastValue) lastValue.textContent = lastElement;

/**
 * Oppgave 7.2
 */
interface Nameable {
	fullName: string;
}

const invite = <T>({ fullName }: T) => `🐧 ${fullName} er invitert til festen!`;

const inputElement = document.querySelector(
	"#full-name-input"
) as null | HTMLInputElement;
document.querySelector("#add-person-btn")?.addEventListener("click", () => {
	if (!inputElement || !inputElement.value.length) return;
	const penguin = {
		fullName: inputElement.value,
		age: Math.floor(Math.random() * (100 - 18 + 1) + 18),
	};
	setTextContentOnElement("#invite-status", invite(penguin));
	const list = document.querySelector("#list-of-people");
	const newItem = document.createElement("li");
	const { fullName, age } = penguin;
	newItem.textContent = `${fullName}, ${age} år`;
	list?.appendChild(newItem);

	inputElement.value = "";
});

document.querySelector("#name-form")?.addEventListener("submit", (event) => {
	event.preventDefault();
});
