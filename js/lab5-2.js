// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

function employeesalary() {
	// INPUT : the number of regular hours that an employee worked and that employee’s wage
	let x = parseInt(document.getElementById('hours').value);
	let y = parseInt(document.getElementById('wage').value);
    // PROCESSING : Calculate the income after 15% tax
	let taxx1 = x * y;
  let taxx2 = taxx1 * 0.15;
  let taxx = taxx1 - taxx2;
    // OUTPUT : The Employee after tax pay.
	document.getElementById("output").innerHTML = taxx + "USD";
}