// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

/*Input: Guess a number, interger between 1 to 100
Procesing: if the guessing number is right or not
Output: the message */

function guessNum() {
    //Input:
      let message =
          "Thinking of a number between  1 to 100. Please guess it";
    //Processing:
      let answer = 79;
      let guess;
      let numberOfGuess = 0;
      do {
          guess = parseInt(prompt(message));
          if (guess < answer) {
              message = guess + " is too low. Please enter another integer.";
          } else if (guess > answer) {
              message = guess + " is too high. Please enter another integer.";
          }
          numberOfGuess++;
      } while (guess != answer);
      message = guess + " is correct!";
    //Output:
  
      document.getElementById("output").innerHTML =
          message + " You've guessed " + numberOfGuess + " times!";
  }