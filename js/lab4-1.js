
/*Defining Table
INPUT : Get two numbers from to different input boxes label x and y
PROCESSING : Add the two numbers together store in sum
OUTPUT : Display sum on the document.
*/

functionaddNumbers() {
	// INPUT
	let x = parseFloat(document.getElementById('number1').value);
	let y = parseFloat(document.getElementById('number2').value);
    // PROCESSING
	let sum = x + y;
    // OUTPUT
	document.getElementById('output').innerHTML = "The sum of " + x + " and " + y + " equals " + sum + "!";
}