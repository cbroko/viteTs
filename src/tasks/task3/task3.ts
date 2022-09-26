import { setTextContentOnElement } from "../../utils";

/**
 * Oppgave 3.1
 */
interface Person {
	firstName: string,
	lastName: string,
	age: number,
	country: string
}
//No touchy
const idYourSelf = ({ firstName, lastName, age, country }: Person) => {
	setTextContentOnElement("#person-name", `${firstName} ${lastName}`);
	setTextContentOnElement("#person-age", `${age}`);
	setTextContentOnElement("#person-country", `${country}`);
};
const personToId = {
	firstName: "Kari",
	lastName: "Normann",
	age: 23,
	country: "Norway"
};

//No touchy
document.querySelector("#task31-btn")?.addEventListener("click", () => {
	idYourSelf(personToId);
});

/**
 * Oppgave 3.2
 */
type Student = Person & {
	studentNumber: number,
	preferredLanguage: string
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
const getSupportedLanguage = (language: string): string => {
	return language === "nn" || language === "nb"
		? "Norsk"
		: language === "en"
		? "Engelsk"
		: "Language not supported";
};

const studentToId: Student = {
	...(personToId),
	studentNumber: 4552,
	preferredLanguage: "nb"
};

document.querySelector("#task32-btn")?.addEventListener("click", () => {
	provideStudentId(studentToId);
});

/**
 * Oppgave 3.2
 */
interface Faculty {
	name: string,
	leader: Person
}

interface NTNUStudent extends Student {
	faculty: Faculty
}

const NTNUStudentId: NTNUStudent = {
	...(studentToId),
	faculty: {
		name: "Fakultet 1",
		leader: {
			firstName: "Per",
			lastName: "Fakultetleder",
			age: 42,
			country: "Norway"
		}
	}
};

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

document.querySelector("#task33-btn")?.addEventListener("click", () => {
	provideNTNUStudentId(NTNUStudentId);
});
