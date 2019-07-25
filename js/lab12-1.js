/*Input: A list of number
Processing: add the first number to the last a sum
Output: The sum  
*/
function addEnds(list) {
    list = [9, 153, 19, 3, 68];
    let a = list[0];
    let b = list[list.length - 1];
    let c = a + b;

  document.getElementById("output1").innerHTML = list;    document.getElementById("output").innerHTML = c;  
}