function digitSum(arr,n){
    for(var i=0;i<n;i++){
        arr[i] = add(arr[i]);
    }
    return arr;
}
function add(num){
    var sum = 0;
    while(num){
        sum += num%10;
        num=Math.floor(num/10);
    }
    return sum;
}

function runProgram(input){
    var input = input.split("\n");
    var t = Number(input[0]);
    var index = 1;
    while(t--){
        var n = Number(input[index++]);
        var arr = input[index++].split(" ").map(Number);
        arr = digitSum(arr,n);
        arr = arr.join(" ");
        console.log(arr);
    }
}

runProgram(`2
5
12 14 16 17 29
6
1 2 3 4 5 51`);