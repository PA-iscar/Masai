
function runProgram(input) {
    input = input.split("\n");
    let dim = input[0].split(" ").map(Number);
    let n = dim[0];
    let k = dim[1];
    let arr = input[1].split(" ").map(Number);
    // let ans = slidingWindowSum(arr,k);
    // ans = ans.sort((a,b) => a - b);

    let sum = 0;
    for(let i=0;i<k;i++){
        sum += arr[i];
    }
    let ans = sum;
    for(let i=k;i<n;i++){
        sum += arr[i] - arr[i-k];
        if(sum > ans){
            ans = sum;
        }
    }
    console.log(ans);
}

runProgram(`10 3
-1 -1 -2 1 -2 4 1 9 3 9`);