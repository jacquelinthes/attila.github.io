// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

/*
INPUT: any positive integer from 1 to 10 inclusive.
PROCESSING: Create a multiplication table with the user input.
OUTPUT: The times table from 1 to 12.
*/

//INPUT: any positive integer from 1 to 10 inclusive.

function brad() {
    let a = parseInt(document.getElementById("a").value);
    let mult = ""
    //PROCESSING: Create a multiplication table with the user input.
    if (a > 10 || !a) {
        let output = "Please choose correct interger";
        document.getElementById("output").innerHTML = output;
      } else {
      for (let i = 1; i <= 12; i++) {
        mult += a + " X " + i + " = " + (a*i) + "<br>";
        
    //OUTPUT: The times table from 1 to 12.
        let output = mult;
    document.getElementById("output").innerHTML = output;
  }
      }
  }
  
  