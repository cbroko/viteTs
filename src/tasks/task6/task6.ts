import { getRandomNumberBetween } from "../../utils";
import { topping } from "../../types";

// No touchy
interface Pizza {
	toppings: topping[];
}

/**
 * Oppgave 6.1
 */
const pizzas = [];

/**
 * Oppgave 6.1
 */
(
	["Torsk", "Arktisk sølvfisk", "Arktisk drakfisk", "Sjøgress"] as topping[]
).forEach((extraTopping) => {
	const li = document.createElement("li");
	const otherCatches = ["Plastikk", "Bildør", "Småelektronikk"];
	const toppings = [
		"Rød algesaus",
		"Hvalost",
		otherCatches[getRandomNumberBetween(0, otherCatches.length - 1)],
		extraTopping,
	];
	li.textContent = toppings.join(", ");
	document.querySelector("#pizza-menu")?.appendChild(li);
	pizzas.push({
		toppings, // TODO
	});
});

/**
 * Oppgave 6.2
 */
const serveSverreHisPizza = (toppingSverreWants: topping) =>
	pizzas.find((pizza) => pizza);

document.querySelector("#serve-btn")?.addEventListener("click", () => {
	const dancingSverre = document.querySelector("#dancing-sverre");
	const sadSverre = document.querySelector("#sad-sverre");
	dancingSverre?.classList.add("hidden");
	sadSverre?.classList.add("hidden");

	const toppingSverreWants = "Arktisk sølvfisk";
	//TODO
	if (
		serveSverreHisPizza(toppingSverreWants)?.toppings.includes(
			toppingSverreWants
		)
	) {
		dancingSverre?.classList.remove("hidden");
	} else {
		sadSverre?.classList.remove("hidden");
	}
});
