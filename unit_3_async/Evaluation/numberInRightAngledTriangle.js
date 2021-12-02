function runProgram(input){
    let n = Number(input);
    for(let i=1;i<=n;i++){
        var res = "";
        for(let j=1;j<=i;j++){
            res += j + " "
        }
        console.log(res.trim());
    }
}


runProgram(`4`);