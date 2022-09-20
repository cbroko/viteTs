import "../../style.scss";

/**
 * Oppgave 1.1
 */
const number1 = 0;
let number2 = number1 + 2;
number2 += "2";
console.log(`Oppgave 1.1: ${number2}`);

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
