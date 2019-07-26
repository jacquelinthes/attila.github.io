/*Input: An array of any size.
Processing:  multiply each element in an array by some value
Output: return an array with these values: 51, 24, 27, 15, 60  
*/

function multiply(list, multiplier) {
	let products = "";
	for (i=0; i < list.length; i++) {
		let answer = list[i] * multiplier; 
		products+= answer + ", "; 
		}
	return products;
}

function doIt () {
let list = [17, 8, 9, 5, 20];
let factor = 3 ; 

document.getElementById("output").innerHTML = multiply(list, factor);
}