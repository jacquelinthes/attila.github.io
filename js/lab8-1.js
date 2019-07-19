// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

//Input: Asks the user for an integer input
//Processing: Add all of the odd integers between 1 and the user input
//Output: Output the sum of all the odd integers between 1 and then integer that the user inputted

function sumOdds() {
    //Input
    let number = parseInt(document.getElementById('number').value);
    //Processing
    let sum = 0;
  
    for (let i = 1; i <= number; i += 2) {
          sum += i
      }
  //Output
      document.getElementById('output').innerHTML = sum;
  }
  
  