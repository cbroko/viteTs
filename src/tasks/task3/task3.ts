import "../../style.scss";
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
	// TODO
};

//No touchy
document.querySelector('#task31-btn')?.addEventListener("click", () => {
	idYourSelf(personToId);
}) 



/**
 * Oppgave 3.2
 */
type Student = {
	// TODO
};

const provideStudentId = ({firstName, lastName, studentNumber}: Student) => {
	setTextContentOnElement("#student-name", `${firstName} ${lastName}`);
	setTextContentOnElement("#student-id", `${studentNumber}`);
}
//No touchy
document.querySelector('#task33-btn')?.addEventListener("click", () => {
	provideStudentId()
}) 

/**
 * Oppgave 3.2
 */
interface Faculty {
	
}

 interface NTNUStudent  {

}


const provideNTNUStudentId = ({lastName, faculty, studentNumber}: NTNUStudent) => {
	setTextContentOnElement("#student-name", `${lastName}`);
	setTextContentOnElement("#student-id", `${studentNumber}`);
	setTextContentOnElement("#student-faculty", `${faculty.name}`);
	setTextContentOnElement("#student-leader", `${faculty.leader.firstName} ${faculty.leader.lastName}`);
}
//No touchy
document.querySelector('#task33-btn')?.addEventListener("click", () => {
	provideNTNUStudentId()
}) 
