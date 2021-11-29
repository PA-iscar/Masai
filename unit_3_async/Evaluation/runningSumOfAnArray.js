function Rsum(arr,n){
    let res = [];
    let sum = 0;
    for(let i=0;i<n;i++){
        sum += arr[i];
        res.push(sum);
    }
    console.log(res.join(" "))
}

function runProgram(input){
    input = input.split("\n");
    let t = Number(input[0]);
    let index = 1;
    while(t--){
        let n = Number(input[index++]);
        let arr = input[index++].split(" ").map(Number);
        Rsum(arr,n);
        // console.log(Rsum(arr,n))
    }
}


runProgram(`1
5
1 2 3 4 5`);