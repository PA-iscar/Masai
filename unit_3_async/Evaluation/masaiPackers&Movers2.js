var count = 0;
var pass = -1;
var passArr = [];
function now(arr,k){
    pass++;
    if(k<0){
        return 0;
    }
    if(k==0){
        return 1;
    }
    var sum = 0;
    for(let i=0;i<arr.length;i++){
        let val = now(arr,k-arr[i]);
        if(val){
            count = pass;
            if(count)
            passArr.push(count);
        }
        pass = 0;
        sum += val;
    }
    return sum
}

function runProgram(input){
    input = input.split("\n");
    let dim = input[0].split(" ").map(Number);
    let arr = input[1].split(" ").map(Number);
    let k = dim[0];
    let n = dim[1];

    // console.log(now(arr,k));
    if(now(arr,k) == 0){
        console.log(-1);
    }else{
        var min = passArr[0];
        var max = passArr[0];
        for(let i=0;i<passArr.length;i++){
            if(passArr[i]<min){
                min = passArr[i];
            }
            if(passArr[i]>max){
                max = passArr[i];
            }
        }
        console.log(min,max);
    }
}

runProgram(`3 3
1 2 3`);