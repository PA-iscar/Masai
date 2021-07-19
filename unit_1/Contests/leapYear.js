//* assignment_7_2    week 3 day 4
//? Q4 LEAP YEAR

var year = 1999;

if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
    console.log(year + ' is a leap year');
} else {
    console.log(year + ' is not a leap year');
}