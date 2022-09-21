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
