var lis = [];

function hot(arr,n){
    if(n==1){
        if(arr[0]<arr[n]){
            lis[n] = 1+lis[0];
        }
        return;
    }
    hot(arr,n-1);
    for(let i=n-1;i>=0;i--){
        if(arr[i] < arr[n]){
            if(1+lis[i] > lis[n]){
                lis[n] = 1+lis[i];
            }
        }
    }
    return;
}

function runProgram(input){
    input = input.split("\n");
    let n = Number(input[0]);
    let arr = input[1].split(" ").map(Number);
    lis = new Array(n);
    for(let i=0;i<n;i++){
        lis[i] = 1;
    }
    hot(arr,n-1);
    console.log(lis.sort((a,b) => a-b)[n-1])
}


runProgram(`9
10 22 9 33 21 50 41 60 80`);