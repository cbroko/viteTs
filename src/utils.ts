export function setTextContentOnElement(selector: string, text: string) {
	const element = document.querySelector(selector);
	if (!element) return;
	element.textContent = text;
}
