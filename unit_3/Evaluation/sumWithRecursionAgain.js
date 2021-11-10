function recu(arr,n){
    if(n==0 || n==1){
        return 0;
    }
    return Math.abs(arr[0]-arr[1]) + recu(arr.slice(1),n-1)
}

function runProgram(input){
    input = input.split("\n");
    let t = Number(input[0]);
    let index = 1;
    while(t--){
        let n = Number(input[index++]);
        let arr = input[index++].split(" ").map(Number);
        // recu(arr,n);
        console.log(recu(arr,n));
    }
}


runProgram(`2
3
1 5 2
5
3 5 6 1 8`);