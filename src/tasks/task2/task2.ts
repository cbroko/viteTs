/**
 * Oppgave 2.1
 */
document.getElementById("btn")?.addEventListener(() => {
	const outputElement = document.getElementById("btn-msg");
	if (!outputElement) return;
	outputElement.textContent = "Du klikket, veldig bra! ๐ฅณ";
});

/**
 * Oppgave 2.2
 * @param element - Et node element, kan vรฆre null
 * @param text - Teksten som skal settes pรฅ elementet
 */
function setTextOnElement(element, text) {
	if (!element) return;
	element.textContent = text;
}

const emojis = {
	cool: "๐",
	notOk: "๐",
	passiveAggressive: "๐",
	happy: "๐",
	monday: "๐ซ ",
};
type moodType = keyof typeof emojis;
/**
 * Oppgave 2.3
 * @param mood
 * @returns En smiley basert pรฅ parameteren `mood`
 */
const getEmojiFromMood = () => {
	// TODO
};

document.getElementById("mood-input")?.addEventListener("input", (event) => {
	const outputElement = document.getElementById("mood-output");
	const { value } = event.target as HTMLInputElement;
	// TODO
	const emoji = value in emojis ? getEmojiFromMood(value) : "๐ถ";
	setTextOnElement(outputElement, emoji);
});
