/**
 * Oppgave 2.1
 */
document.getElementById("btn")?.addEventListener("click", () => {
	const outputElement = document.getElementById("btn-msg");
	/* if (!outputElement) return;
	outputElement.textContent = "Du klikket, veldig bra! 🥳"; */
	setTextOnElement(outputElement, "Sweet, du har nesten løst oppgave 2.2")
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
/* type moodType = {
	cool: string,
	notOk: string,
	passiveAggressive: string,
	happy: string,
	monday: string,
} */

/**
 * Oppgave 2.3
 * @param mood
 * @returns En smiley basert på parameteren `mood`
 */
const getEmojiFromMood = (mood: moodType): string => {
	return emojis[mood];
};

document.getElementById("mood-input")?.addEventListener("input", (event) => {
	const outputElement = document.getElementById("mood-output");
	const { value } = event.target as HTMLInputElement;
	const emoji = value in emojis ? getEmojiFromMood(value as moodType) : "😶";
	setTextOnElement(outputElement, emoji);
});
