//* assignment_3_2    week 2 day 5

//? Calculate simple interest 

var principal_amt=100;  // Principal amount or amount deposited 
var rateOfInterest=3;   // Annual Interest percentage or Interest rate 
var time=5;             // Time of completion
var amt;                // Amount after interest

/**
 * * rateOfInterest is in percentage it has to be divided by 100 to get the rate of interest
 * * amt = principal_amt((1 + rateOfInterest) ^ time) 
 */

amt = (principal_amt*((1 + (rateOfInterest/100)) ** time))

console.log(amt);


//?The game of lies -2

//! Result : true
true && !(false) && !(true) || true || false

//! Result : true
false && true || !(false) && (!true || !false)

//! Result : false
true && false && (!false || !false) && true

//! Result : true
!(false && !false || (false && !true || !true))