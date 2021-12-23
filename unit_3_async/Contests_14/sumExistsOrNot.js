let flag = false;

function sumOrNot(arr,k,sum,curr){
    if(sum == k){
        flag = true;
    }
    if(curr == arr.length){
        return;
    }
    for(let i=curr;i<arr.length;i++){
        sumOrNot(arr,k,sum,i+1);
        sumOrNot(arr,k,sum+arr[i],i+1);
    }
}

function runProgram(input){
    input = input.split("\n");
    let n = Number(input[0]);
    let arr = input[1].split(" ").map(Number);
    let k = Number(input[2]);

    sumOrNot(arr,k,0,0)
    if(flag){
        console.log("yes")
    }
    else{
        console.log("no");
    }
}

runProgram(`9
1 2 3 4 5 6 7 8 9
5`);