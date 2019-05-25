function addressbuilder(){
	// INPUT
	let x = document.getElementById('city').value;
    let y = document.getElementById('state').value;
    let z = document.getElementById('zipcode').value);
    // PROCESSING
	let sum = y + ", " + x + ", " + z;
    // OUTPUT
	document.getElementById("output").innerHTML = sum;
}