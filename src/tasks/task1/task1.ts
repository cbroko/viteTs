import { setTextContentOnElement } from "../../utils";

/**
 * Oppgave 1.1
 */
const numberInput = document.querySelector(
	"#number2-input"
) as HTMLInputElement;

const number1 = 2;

document.querySelector("#calc-form")?.addEventListener("submit", (event) => {
	event.preventDefault();
	const number2 = numberInput?.value;
	let sum = number1 + number2;
	setTextContentOnElement("#sum", sum);
});

/**
 * Oppgave 1.2
 */
const sayHi = (name: string) => {
	console.log("Oppgave 1.2: ", `Hei ${name}`);
};
sayHi();

/**
 * Oppgave 1.3
 */
const giveMeAStraightAnswer = (answer: "yes" | "no") => {
	console.log("Oppgave 1.3: ", answer);
};
giveMeAStraightAnswer();
