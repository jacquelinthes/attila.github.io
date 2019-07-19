// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

/*
Input: Get a temperature from the first text field and Get a wind speed from the second text field
Process: Calculate the wind chill factor regarding to the speed and the temperature 
Output: The wind chill factor in F
*/

function factorWind() {
	//input
	let tempe = parseFloat(document.getElementById("tempe").value);
	let speed = parseFloat(document.getElementById("speed").value);

	let output = windChill(tempe, speed);

	document.getElementById("output").innerHTML = output;
}

function windChill(t, s){
	let f = "";
	if (t <= 50 && s >= 3){
		f = (35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16)).toFixed(2);
	}
	else {
		f = "N/A";
	}
	return f;
}