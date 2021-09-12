function gcd(a, b)
{
if (b == 0)
    return a;
return gcd(b, a % b);
}


function runProgram(input) {
    var input = input.split("\n");
    var n = Number(input[0]);
    var index = 1;
    while (n--) {
        var arr = input[index++].split(" ").map(Number);
        var a = arr[0];
        var b = arr[1];
        var s = gcd(a, b);
        console.log(s);
    }
}

runProgram(`2
6 9
2 25`);