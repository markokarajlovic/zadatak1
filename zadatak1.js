// inicijalizacija selektovanog textbox-a
let activeElement;

// proveravamo koji textbox je selektovan
function updateFocus(input) {
	activeElement = input;
	console.log("Aktivan element je: " + activeElement.name);
}

// dodavanje broja u selektovan textbox pritiskom na broj
function numClick(number) {

	if (activeElement == null) {

		alert("Selektujte jedno od polja");
		return;
	}

	console.log("Kliknuto na broj =" + number);

	let tempText = activeElement.value;
	tempText += number;
	activeElement.value = tempText;

}

// brisanje svih vrednosti na kalkulatoru
function clearIt() {
	document.getElementById('operacija').innerHTML = "";
	document.getElementById('num1').value = "";
	document.getElementById('num2').value = "";
	document.getElementById('rezultat').innerHTML = "0";

	console.log("Sve cisto");
}

// ispisivanje racunarske operacije
function operationClick(operation) {

	document.getElementById('operacija').innerHTML = operation;

	console.log("Operacija je: " + operation);
}

// racunanje
function calculate() {

	let num1 = parseFloat(document.getElementById('num1').value);
	let num2 = parseFloat(document.getElementById('num2').value);


	let result = 0;
	let o = document.getElementById('operacija').innerHTML;

	switch (o) {

		case "+":
			result = (num1*10 + num2*10)/10;
			break;

		case "-":
			result = num1 - num2;
			break;

		case "*":
			result = num1 * num2;
			break;

		case "/":
			if (num2 == 0) {
				alert("Ne moze da se deli sa 0!");
			}
			else {
				result = num1 / num2;
			}
			break;

		default:
			alert("Unesite racunsku operaciju!");

	}
	if (isNaN(result)) {
		alert("Unesite brojeve u polja!");
		clearIt();
	} else {
		document.getElementById('rezultat').innerHTML = result;
	}
	console.log("Izracunato " + result);
}