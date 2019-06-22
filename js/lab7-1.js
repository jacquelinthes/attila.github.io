/* Defining Table: 
Input:  Get the customer's subtotal.
Processing: if the subtotal is greater than $50 and today is Tuesday or Wednesday, subtract 10% from the subtotal.
Output: output the total amount due by adding sales tax of 6% to the subtotal.*/

//Input:
function salesDiscount() {
    let dayOfWeek = new Date().getDay();
    let subTotal = (document.getElementById('subtt').value);
   //Processing:
    if ( (dayOfWeek == 2 || dayOfWeek == 3) && subTotal > 50) {
      total = (subTotal * .90) * 1.06;
    }
    else {
      total = subTotal * 1.06;
    }
   //Ouput:
    document.getElementById('output').innerHTML= total.toFixed(2);
    
  }