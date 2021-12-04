function permute(arr,res,cur){
    if(res.length!=0){
        console.log(res.join(" "))
    }
    if(cur == arr.length){
        return;
    }
    for(let i = cur;i<arr.length;i++){
        res.push(arr[i])
        permute(arr,res,i+1);
        res.pop();
    }
    return;
}

function runProgram(input){
    let n = Number(input);
    let arr = [];
    for(let i=0;i<n;i++){
        arr.push(i+1);
    }
    console.log(" ")
    permute(arr,[],0);
}

runProgram(`3`);