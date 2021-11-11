function oddSum(arr,n){
    if(n==0){
        return 0;
    }
    if(arr[0]%2!=0){
        return arr[0] + oddSum(arr.slice(1),n-1);
    }
    else
        return oddSum(arr.slice(1),n-1);
}
function evenSum(arr,n){
    if(n==0){
        return 0;
    }
    if(arr[0]%2==0){
        return arr[0] + evenSum(arr.slice(1),n-1);
    }
    else
        return evenSum(arr.slice(1),n-1);
}

function runProgram(input){
    input = input.split("\n");
    let n = Number(input[0]);
    let arr = input[1].split(" ").map(Number);
    let X = oddSum(arr,n);
    // console.log(X);
    let Y = evenSum(arr,n);
    // console.log(Y);

    let Z = 2*Y + 3*X;
    console.log(Z);
}


runProgram(`5
1 2 3 4 5`);