import "../../style.scss";

/**
 * Oppgave 3.1
 */
interface Terminator {

}

const basicTerminator: Terminator = {
	boot: () =>{
		console.log("First task Started")
	},
	getDefaultDirective: () =>{
		return "Come with me if you want to live."
	},
	checkTarget(name) {
		return (this.target === name) 
	},
	target: "Sarah Connor",
	weapon: "gun",
}

const performTasks = (terminator: Terminator): void => {
	try{
		terminator.boot()
		console.log(terminator.getDefaultDirective())
		if (terminator.target !== undefined) {
			terminator.checkTarget("Sarah Connor") ?
				console.log("This is my target") :
				console.log(`This is not ${terminator.target}`)
		}
		console.log(`${terminator.weapon} ready.`)
	} catch(error) {
		console.error("Beep boop. Error detected:", error)
	}
	
}
document.querySelector("#task41-btn")?.addEventListener("click", () => {
	performTasks()
})



/**
 * Oppgave 3.2
 */
type T800 = {

}

const terminator1 = (arnold: T800) => {
	try{
		arnold.boot()
		console.log(arnold.getDefaultDirective())
		if (arnold.target !== undefined) {
			arnold.checkTarget("Sarah Connor") ?
				console.log("This is my target") :
				console.log(`This is not ${arnold.target}`)
		}
		console.log(`${arnold.weapon} ready.`)
		console.log(`This ${arnold.accent} is pretty crazy!`)
	} catch(error) {
		console.error("I'll be back.", error)
	}
}

document.querySelector("#task42-btn")?.addEventListener("click", () => {
	terminator1()
})

/**
 * Oppgave 3.3
 */
type T1000 = {

};


const terminator2 = (liquidTerminator: T1000) => {
	try{
		liquidTerminator.boot()
		console.log(liquidTerminator.getDefaultDirective())
		if (liquidTerminator.target !== undefined) {
			liquidTerminator.checkTarget("Sarah Connor") ?
				console.log("This is my target") :
				console.log(`This is not ${liquidTerminator.target}`)
		}
		liquidTerminator.shapes.forEach(shape => console.log(`I can turn into a ${shape}`))
	} catch(error) {
		console.error("I'll be back.", error)
	}
}

document.querySelector("#task43-btn")?.addEventListener("click", () => {
	terminator2()
})


