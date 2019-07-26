/*Input: Create one or more arrays manually or dynamically.
Processing: Returns the value of the middle element in an array. If the array has an even number of elements, then this function must return the average of the two middle elements.
Output: The value of the middle element  
*/

function getMiddle(list) {
  list= [69,30,1,100,35,29];
  let middleNumber= 0;
  numLength =list.length;
  if(numLength%2===0){
    middleNumber=(list[numLength/2-1]+list[numLength/2])/2;
  } else{ 
  answer =list[(numLength-1)/2];
  }
  document.getElementById("arrayA").innerHTML= middleNumber; 
  return middleNumber; 
}