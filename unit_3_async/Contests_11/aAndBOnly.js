function runProgram(input){
    let str = input.split("");
    let n = str.length;
    for(let i=0;i<n;i++){
        if(str[i] == '?'){
            if(str[i-1] != 'a' && str[i+1] != 'a'){
                str[i] = 'a';
            }else{
                str[i] = 'b';
            }
        }
    }
    console.log(str.join(""));
}

runProgram(`?ba??b`);