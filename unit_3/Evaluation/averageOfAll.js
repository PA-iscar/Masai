function avg(arr,n){
    if(n==0){
        return 0;
    }
    return arr[0] + avg(arr.slice(1),n-1)
}

function runProgram(input){
    input = input.split("\n");
    let n = Number(input[0]);
    let arr = input[1].split(" ").map(Number);
    // console.log(n,arr);
    // avg(arr,n);
    console.log(Math.ceil(avg(arr,n)/n));
}

runProgram(`4
2 5 0 9`);