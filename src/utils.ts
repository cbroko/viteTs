export function setTextContentOnElement(selector: string, text: string) {
	const element = document.querySelector(selector);
	if (!element) return;
	element.textContent = text;
}

export function debounce(callback: (args: unknown[]) => void, timeout = 200) {
	let timer = 0;
	return (...args: unknown[]) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			callback(args);
		}, timeout);
	};
}

export const getRandomNumberBetween = (min: number, max: number) =>
	Math.floor(Math.random() * (max - min + 1) + min);

export const pizzaToppings = [
	"Rød algesaus",
	"Hvalost",
	"Torsk",
	"Arktisk sølvfisk",
	"Arktisk drakfisk",
	"Sjøgress",
] as const;

export const hasEqualKeys = <O1 extends object, O2 extends O1>(
	obj1: O1,
	obj2: O2
) =>
	Object.keys(obj1).every(
		(key) =>
			key in obj2 &&
			typeof obj1[key as keyof O1] === typeof obj2[key as keyof O2]
	) &&
	Object.keys(obj2).every(
		(key) =>
			key in obj1 &&
			typeof obj1[key as keyof O1] === typeof obj2[key as keyof O2]
	);
