import "../../style.scss";

document.querySelector("#btn")?.addEventListener(() => {
	const outputElement = document.querySelector("#btn-msg");
	if (!outputElement) return;
	outputElement.textContent = "You clicked the button, well done!";
});
