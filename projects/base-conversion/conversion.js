import { Signed, Unsigned } from "/assets/js/base-conversions/index.js";

const bitMax = {
	"8": [-128, 127],
	"12": [-2048, 2047],
	"16": [-32768, 32767],
	"24": [-8388608, 8388607],
	"32": [-2147483648, 2147483647]
};
Object.freeze(bitMax);


// Inputs
/** @type {HTMLSelectElement} */
const fromBaseSelect = document.getElementById("fromBase");
/** @type {HTMLInputElement[]} */
const signedInputs = Array.from(document.getElementsByName("signed"));
/** @type {HTMLSelectElement} */
const totalBitsSelect = document.getElementById("totalBits");
/** @type {HTMLInputElement} */
const inputField = document.getElementById("input-field");

// Hide or show these elements based on the inputs
/** @type {HTMLDivElement} */
const binaryDiv = document.getElementById("binary");
/** @type {HTMLDivElement} */
const octalDiv = document.getElementById("octal");
/** @type {HTMLDivElement} */
const decimalDiv = document.getElementById("decimal");
/** @type {HTMLDivElement} */
const hexadecimalDiv = document.getElementById("hexadecimal");
/** @type {HTMLDivElement} */
const numBitsDiv = document.getElementById("num-bits");
/** @type {HTMLDivElement} */
const errorDiv = document.getElementById("error");

// These get updated when the user clicks convert
/** @type {HTMLDivElement} */
const binaryConversionCode = document.getElementById("binary-conversion");
/** @type {HTMLDivElement} */
const octalConversionCode = document.getElementById("octal-conversion");
/** @type {HTMLDivElement} */
const decimalConversionCode = document.getElementById("decimal-conversion");
/** @type {HTMLDivElement} */
const hexadecimalConversionCode = document.getElementById("hexadecimal-conversion");

// Function to easily show or hide elements
function showElement(element, toShow) {
	if(element.classList.contains("hidden") && toShow) return element.classList.remove("hidden");
	if(!element.classList.contains("hidden") && !toShow) return element.classList.add("hidden");
}

// Check if the number is signed or unsigned
function isSigned() {
	const checkedInput = signedInputs.filter(input => input.checked)[0];
	return (checkedInput.value === "true");
}


function checkInput(numberToConvert, currentBase) {
	// Check if the number is valid
	if(!numberToConvert) return errorDiv.innerText = "Please enter a number to convert";

	// Check if the number is valid for the respective base
	if(currentBase === 2 && !/^[01]+$/.test(numberToConvert)){
		showElement(errorDiv, true);
		errorDiv.innerText = "Please enter a valid binary number";
		return true;
	}
	if(currentBase === 8 && !/^[0-7]+$/.test(numberToConvert)){
		showElement(errorDiv, true);
		errorDiv.innerText = "Please enter a valid octal number";
		return true;
	}
	if(currentBase === 10 && !/^[0-9]+$/.test(numberToConvert)){
		showElement(errorDiv, true);
		errorDiv.innerText = "Please enter a valid decimal number";
		return true;
	}
	if(currentBase === 16 && !/^[0-9A-Fa-f]+$/.test(numberToConvert)){
		showElement(errorDiv, true);
		errorDiv.innerText = "Please enter a valid hexadecimal number";
		return true;
	}

	showElement(errorDiv, false);
	return false;
}


export function submit() {
	const currentBase = parseInt(fromBaseSelect.value);
	const numberToConvert = inputField.value;
	const numBits = parseInt(totalBitsSelect.value);

	const invalidInput = checkInput(numberToConvert, currentBase);
	if(invalidInput) return;

	const conversions = (isSigned()) ? new Signed(currentBase, numberToConvert) : new Unsigned(currentBase, numberToConvert);

	document.querySelectorAll(".base-conversion").forEach(element => element.classList.add("trans-text"));

	setTimeout(() => {
		binaryConversionCode.innerText = conversions.asBinary(numBits).conversion;
		octalConversionCode.innerText = conversions.asOctal(numBits).conversion;
		decimalConversionCode.innerText = conversions.asDecimal(numBits).conversion;
		hexadecimalConversionCode.innerText = conversions.asHex(numBits).conversion;

		document.querySelectorAll(".base-conversion").forEach(element => element.classList.remove("trans-text"));
	}, 1050);

}


export function updateInputField(_event, clearField = false) {
	const fromBase = parseInt(fromBaseSelect.value);
	const signed = isSigned();
	const totalBits = parseInt(totalBitsSelect.value);

	showElement(numBitsDiv, (fromBase !== 2 && signed));

	if(fromBase === 10){ // Base 10 is somewhat special
		inputField.removeAttribute("pattern");
		inputField.type = "number";

		if(signed){
			inputField.min = bitMax[totalBits][0];
			inputField.max = bitMax[totalBits][1];
			if(clearField) inputField.value = "";
			return;
		}

		inputField.removeAttribute("min");
		inputField.removeAttribute("max");

		if(clearField) inputField.value = "";
		return;
	}

	// min, max won't be needed
	inputField.removeAttribute("min");
	inputField.removeAttribute("max");

	inputField.type = "text";
	if(clearField) inputField.value = "";

	switch(fromBase){
		case 2:
			inputField.pattern = "[01]+";
			break;

		case 8:
			inputField.pattern = "[0-7]+";
			break;

		case 16:
			inputField.pattern = "[0-9A-Fa-f]+";
	}
}

export function changeBase(_event) {
	updateInputField(null, true);
	const value = this.value;

	const baseIDS = [
		{ base: "2", id: binaryDiv },
		{ base: "8", id: octalDiv },
		{ base: "10", id: decimalDiv },
		{ base: "16", id: hexadecimalDiv }
	];

	for(const item of baseIDS){
		const bool = !(item.base === value);
		showElement(item.id, bool);
	}
}