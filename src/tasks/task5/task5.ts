import { topping } from "../../types";
import { pizzaToppings, setTextContentOnElement } from "../../utils";

interface Eatable {
	eaten: boolean;
	eat: () => void;
}

/**
 * Oppgave 5.1
 * Food trenger ikke å tas i bruk før 5.2
 */
class Food {
	eat() {
		if (this.eaten) {
			setTextContentOnElement(
				"#food-msg",
				"🍽️ ... her var det ikke noe mat igjen!"
			);
		} else {
			setTextContentOnElement("#food-msg", "🍴 Nam! Det var godt det!");
			this.eaten = true;
		}
	}
}

/**
 * Oppgave 5.2
 */
class Pizza {
	toppings: topping[];
}

let pizza = new Pizza(["Rød algesaus", "Hvalost", "Sjøgress"]);
document.querySelector("#eat-pizza")?.addEventListener("click", () => {
	pizza.eat();
});

document.querySelector("#make-new-pizza")?.addEventListener("click", () => {
	pizza = new Pizza(["Rød algesaus", "Hvalost", "Sjøgress"]);
	setTextContentOnElement(
		"#food-msg",
		`Laget pizza med topping: ${pizza.toppings.join(", ")}`
	);
});

/**
 * Oppgave 5.3
 */
type CanOrderPizza = {
	orderedPizza: Pizza;
	orderNewPizza: (pizza: Pizza) => string;
};

class BouvetPenguin implements CanOrderPizza {}

const pizaMaker = document.querySelector("#pizza-maker");
const selectedToppings: topping[] = [];

pizzaToppings.forEach((topping) => {
	const input = document.createElement("input");
	input.setAttribute("type", "checkbox");
	input.addEventListener("change", (event) => {
		if ((event.target as HTMLInputElement).checked) {
			selectedToppings.push(topping);
		} else {
			selectedToppings.splice(selectedToppings.indexOf(topping), 1);
		}
	});

	const label = document.createElement("label");
	label.classList.add("checkbox-label");
	label.appendChild(input);
	label.append(topping);

	pizaMaker?.appendChild(label);
});

document.querySelector("#new-pizza-order")?.addEventListener("click", () => {
	const pizza = new Pizza(selectedToppings);
	const bouvetPenguin = new BouvetPenguin();
	const thankYouMessage = bouvetPenguin.orderNewPizza(pizza);
	setTextContentOnElement("#thank-you-msg", `${thankYouMessage} 🐧`);
});
