import { setTextContentOnElement } from "../../utils";

/**
 * Oppgave 3.1
 */
interface Person {}
//No touchy
const idYourSelf = ({ firstName, lastName, age, country }: Person) => {
	setTextContentOnElement("#person-name", `${firstName} ${lastName}`);
	setTextContentOnElement("#person-age", `${age}`);
	setTextContentOnElement("#person-country", `${country}`);
};
const personToId = {
	// TODO
};

//No touchy
document.getElementById("task31-btn")?.addEventListener("click", () => {
	idYourSelf(personToId);
});

/**
 * Oppgave 3.2
 */
type Student = {
	// TODO
};

const provideStudentId = ({
	firstName,
	lastName,
	studentNumber,
	preferredLanguage,
}: Student) => {
	setTextContentOnElement("#student-name", `${firstName} ${lastName}`);
	setTextContentOnElement("#student-id", `${studentNumber}`);
	setTextContentOnElement(
		"#student-lang",
		`Utvekslingsstudent, ${getSupportedLanguage(preferredLanguage)}`
	);
};
const getSupportedLanguage = (language): string => {
	return language === "nn" || language === "nb"
		? "Norsk"
		: language === "en"
		? "Engelsk"
		: "Language not supported";
};

document.getElementById("task32-btn")?.addEventListener("click", () => {
	provideStudentId();
});

/**
 * Oppgave 3.3
 */
interface Faculty {}

interface NTNUStudent {}

const provideNTNUStudentId = ({
	lastName,
	faculty,
	studentNumber,
}: NTNUStudent) => {
	setTextContentOnElement("#ntnu-name", `${lastName}`);
	setTextContentOnElement("#ntnu-id", `${studentNumber}`);
	setTextContentOnElement("#ntnu-faculty", `${faculty.name}`);
	setTextContentOnElement(
		"#ntnu-leader",
		`${faculty.leader.firstName} ${faculty.leader.lastName}`
	);
};

document.getElementById("task33-btn")?.addEventListener("click", () => {
	provideNTNUStudentId();
});
