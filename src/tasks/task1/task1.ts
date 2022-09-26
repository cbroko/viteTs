import { setTextContentOnElement } from "../../utils";

/**
 * Oppgave 1.1
 */
const numberInput = document.getElementById(
	"number2-input"
) as HTMLInputElement;

const number1 = 2;

document.getElementById("calc-form")?.addEventListener("submit", (event) => {
	event.preventDefault();
	const number2 = numberInput?.value;
	let sum = number1 + number2;
	setTextContentOnElement("#number2", number2);
	setTextContentOnElement("#sum", sum);
	numberInput.value = "";
});

/**
 * Oppgave 1.2
 */
const sayHi = (name: string) => `Hei ${name}!`;
document.getElementById("name-form")?.addEventListener("submit", (event) => {
	event.preventDefault();
	const input = document.getElementById("name-input") as HTMLInputElement;
	const name = input?.value;
	const greeting = sayHi();
	setTextContentOnElement("#greet", greeting);
	input.value = "";
});

/**
 * Oppgave 1.3
 */
const giveMeAStraightAnswer = (question) =>
	question.length % 2 ? "ja!" : "nei!";

document
	.getElementById("question-form")
	?.addEventListener("submit", (event) => {
		event.preventDefault();
		const input = document.getElementById("question-input") as HTMLInputElement;
		const question = input?.value;
		const answer = giveMeAStraightAnswer();
		setTextContentOnElement("#answer", answer);
		input.value = "";
	});
