/* Defining Table: 
Input: determines if you can sleep in or not.
Processing: On all weekdays (Monday through Friday) that are not holidays, your program should output “Get up!” On all other days (weekends and holidays), your program should output “Sleep in.” */

//Input:
let today = new Date();
let day = today.getDay();
let month = today.getMonth();
let date = today.getDate();
document.getElementById('whatDays').innerHTML = today;

//Processing:
if (( month == 0 && date == 1) || ( month == 6 && date == 4) || ( month == 11 && date == 25) || day == 6 || day == 0) {
  message = "SLEEP IN!";
}
else {
  message = "PLEASE GET UP!";
}
//Output:
 
  document.getElementById('output').innerHTML= message;
  