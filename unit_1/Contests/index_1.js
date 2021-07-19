
var a=3 , b=2;
var sum, diff, prod, div, rem, expo_a, expo_b, expo_diff;

sum=a+b;
diff=a-b;
prod=a*b;
div=a/b;
rem=a%b;
expo_a=a**b;
expo_b=b**a;
expo_diff=expo_a-expo_b;

console.log("Sum =",sum);
console.log("Difference =",diff);
console.log("Product =",prod);
console.log("Division =",div);
console.log("Remainder =",rem);
console.log("Increment of a =",++a);
console.log("Decrement of b =",--b);
console.log("Difference between variable a raise to the power b and b raise to the power a",expo_diff);