function runProgram(input){
    var input = input.split("\n");
    var n = Number(input[0]);
    var arr = input[1].split(" ").map(Number);
    arr.sort(function(a, b) {
        return a - b;
    });
    var sum = 0;
    for(var i=0;i<arr.length;i+=2){
        sum+= arr[i];
    }
    console.log(sum);
}

runProgram(`2
1 3 1 2`);