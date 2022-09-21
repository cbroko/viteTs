import "../../style.scss";
import { setTextContentOnElement } from "../../utils";

/**
 * Oppgave 3.1
 */
interface Person {
	// TODO
}

const idYourSelf = ({ firstName, lastName, age, country }: Person) => {
	setTextContentOnElement("#name", `${firstName} ${lastName}`);
};
const personToId = {
	// TODO
};
idYourSelf(personToId);

/**
 * Oppgave 3.2
 */
interface Student {
	// TODO
}

/**
 * Oppgave 3.3
 */
type NTNUStudent = {
	// TODO
};
