/**
 * Oppgave 2.1
 */
document.querySelector("#btn")?.addEventListener(() => {
	const outputElement = document.querySelector("#btn-msg");
	if (!outputElement) return;
	outputElement.textContent = "Du klikket, veldig bra! 🥳";
});

/**
 * Oppgave 2.2
 * @param element - Et node element, kan være null
 * @param text - Teksten som skal settes på elementet
 */
function setTextOnElement(element: Element | null, text: string) {
	if (!element) return;
	element.textContent = text;
}

const emojis = {
	cool: "😎",
	notOk: "🙃",
	passiveAggressive: "🙂",
	happy: "😄",
	monday: "🫠",
};
type moodType = keyof typeof emojis;
/**
 * Oppgave 2.3
 * @param mood
 * @returns En smiley basert på parameteren `mood`
 */
const getEmojiFromMood = () => {
	// TODO
};

document.querySelector("#mood-input")?.addEventListener("input", (event) => {
	const outputElement = document.querySelector("#mood-output");
	if (!outputElement || !event.target) return;

	const { value } = event.target as HTMLInputElement;
	// TODO
	outputElement.textContent = value in emojis ? getEmojiFromMood(value) : "😶";
});
