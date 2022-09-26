/**
 * Oppgave 2.1
 */
document.getElementById("btn")?.addEventListener(() => {
	const outputElement = document.getElementById("btn-msg");
	if (!outputElement) return;
	outputElement.textContent = "Du klikket, veldig bra! 🥳";
});

/**
 * Oppgave 2.2
 * @param element - Et node element, kan være null
 * @param text - Teksten som skal settes på elementet
 */
function setTextOnElement(element, text) {
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

document.getElementById("mood-input")?.addEventListener("input", (event) => {
	const outputElement = document.getElementById("mood-output");
	const { value } = event.target as HTMLInputElement;
	// TODO
	const emoji = value in emojis ? getEmojiFromMood(value) : "😶";
	setTextOnElement(outputElement, emoji);
});
