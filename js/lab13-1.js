/*Input: An array of any size.
Processing: counts and returns the number of even integers in an array.
Output: the number of even integers  
*/

function addEvens(list){
	numberOfEvens=0;
	for(let x=0; x<list.length; x++){
		if( list[x]%2 == 0){
			numberOfEvens++;
	}
}
	return numberOfEvens;
}

function doTest(){
	let Array = [78, 33, 10, 37, 10, 16 ];
	document.getElementById('output').innerHTML =addEvens(Array);
}
