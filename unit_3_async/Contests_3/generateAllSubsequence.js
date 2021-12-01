function subSeq(str,res,cur){
    if(res.length != 0){
        console.log(res)
    }
    if(cur == str.length){
        return 
    }
    for(let i=cur;i<str.length;i++){
        res += str[i];
        subSeq(str,res,i+1);
        res = res.slice(0,res.length-1);
    }
    return
}

function runProgram(input){
    input = input .split("\n");
    let n = Number(input[0]);
    let str = input[1];
    subSeq(str,"",0);
}

runProgram(`4
abcd`);