function sum(arr,n){
    if(n==0){
        return 0;
    }
    return arr[0]+sum(arr.slice(1),n-1);
}

function runProgram(input){
    var input = input.split("\n");
    var t = Number(input[0]);
    var index = 1;
    while(t--){
        var n = Number(input[index++]);
        var arr = input[index++].split(" ").map(Number);
        console.log(sum(arr,n));
    }
}


runProgram(`3
5
6 3 8 2 -4
5
-10 -7 10 2 -2
5
-4 -5 6 -3 9`);