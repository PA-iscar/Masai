//* assignment_3_1    week 2 day 5

//? Calculate simple interest 

var principal_amt=100;  // Principal amount or amount deposited 
var rateOfInterest=3;   // Annual Interest percentage or Interest rate 
var time=5;             // Time of completion
var amt;                // Amount after interest

/**
 * * rateOfInterest is in percentage it has to be divided by 100 to get the rate of interest
 * * amt = principal_amt(1 + rateOfInterest X time) 
 */

amt = principal_amt*(1 + ((rateOfInterest/100) * time) )

console.log(amt);


//? NAME-A-THON

var avgAge = 19;
var num_students = 17;
var max_marks = 100;
var f_name = "shunti";
var num_students_in_class_12 = 14;


//? OPERATORS

//any variable a
var a=10;
a+=2;   //** a = a+2;
a-=3;   //** a = a-3;
a/=6;   //** a = a/6;
a*=11;  //** a = a*11;
a%=7;   //** a = a%7;
console.log(a);

//? The game of lies -1

//! Result : false 
true && false && !(true) || false

//! Result : true
true || !(false) && (true || false)

//! Result : true
false || (true && false) || true

//! Result : true
true || (false && true || true)