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
