
const MAX = 100;
let firstNumber = Math.floor(Math.random() + Math.floor(MAX));
let secondNumber = Math.floor(Math.random() + Math.floor(MAX));
document.getElementById('firstNumber').innerHTML = firstNumber;
document.getElementById('secondNumber').innerHTML = secondNumber;

function checkAnswer() {
	//Input
	let firstNumber = parseInt(document.getElementById('firstNumber').innerHTML);
	let secondNumber = parseInt(document.getElementById('secondNumber').innerHTML);
	
	// Processing
	let answerkey = firstNumber + secondNumber;
	let message = "";
	if () {
			message = "Correct! Good job."
			}
  
	else {
		message = "Sorry. That is incorrect."
	}
	//Output
	document.getElementById('result').innerHTML = message;
  
}