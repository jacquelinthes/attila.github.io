// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

/*
Input: Get input from the user for Amount invested. The rate per year. how many years and how many period per year.
Process: Calculate the future value base on user input 
Output: The future value
*/
//Input
function doFV() {
	let principal = document.getElementById('principal').value; 
	let rate = document.getElementById('annualRate').value; 
	let years = document.getElementById('years').value; 
	let periods = document.getElementById('periodsPerYear').value; 
	
	let output = computeFutureValue(principal, rate, years, periods);
	document.getElementById("output").innerHTML = "$" + output.toFixed(2);
}
//Processing
function computeFutureValue(principal, annualRate, years, periodsPerYear) {
	let futureValue = annualRate / years;
	let time = years * periodsPerYear;
  //Output
	let output = principal * Math.pow((1 +futureValue), time);
		return output; 
	}