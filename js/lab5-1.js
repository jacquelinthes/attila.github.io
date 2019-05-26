// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

function cylindervolume() {
	// INPUT : the height and the radius of a cylinder
	let x = parseInt(document.getElementById('height').value);
	let y = parseInt(document.getElementById('radius').value);
    // PROCESSING : Calculate the V=πr2h
	let volu = 3.14 * y * y * x;
    // OUTPUT : The volume of the cylinder
	document.getElementById("output").innerHTML = volu;
}