let found = 0;

function subSeq(arr,res,cur){
    if(res.length != 0){
        let chk = res.trim().split(" ").map(Number);

        if(isOdd(chk[0]) && isOdd(chk[chk.length])){
            found = 1;
        }
    }
    if(cur == arr.length){
        return 
    }
    for(let i=cur;i<arr.length;i++){
        res += arr[i] + " ";
        subSeq(arr,res,i+1);
        res = res.slice(0,res.length-2);
    }
    return
}

function isOdd(num){
    return num%2 != 0
}

function runProgram(input){
    input = input.split("\n")
    let t = Number(input[0])
    let ind = 1
    while(t--){
        found = 0;
        let n = Number(input[ind++])
        let arr = input[ind++].split(" ").map(Number);
        subSeq(arr,"",0)
        console.log(found?"yes":"no")
    }
}


runProgram(`2
4
4 3 2 1
2
2 4`);