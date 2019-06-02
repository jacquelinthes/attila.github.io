// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

function foottowear() {
	//Input: Select the day's weather
	let text = document.getElementById('pet-select').value;
	//Proceesing: Choose the correct foot wear for the day.

	//Output: The correct foot wear regarding to the day's weather.
	document.getElementById('labelButton').innerHTML = text;
}