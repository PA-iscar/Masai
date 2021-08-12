function runProgram(input){
    input.trim();
    var input = input.split("\n");
    var n = Number(input[0]);
    var arr = input[1].split(" ").map(Number);
    arr.sort();
    arr.reverse();
    var sum = 0;
    for(var i=0;i<n;i++){
        sum+= arr[i];
    }
    console.log(sum);
}

runProgram(`2
1 3 1 2`);