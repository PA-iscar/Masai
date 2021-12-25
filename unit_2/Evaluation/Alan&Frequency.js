function runProgram(input){
    input = input.split("\n");
    let n = Number(input[0]);
    let str = input[1];
    let tom = {};
    let jerry = new Array(26);
    jerry.fill(0);

    for(let i=0;i<n;i++){
        (tom[str[i]]?tom[str[i]]++:tom[str[i]] = 1)
    }

    for(let key in tom){
        let val = key.charCodeAt(0)-97;
        jerry[val]+= tom[key];
    }
    for(let i=0;i<26;i++){
        if(jerry[i]){
            console.log(String.fromCharCode(i+97)+"-"+jerry[i])
        }
    }
}

runProgram(`5
caman`);