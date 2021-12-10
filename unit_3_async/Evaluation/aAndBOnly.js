function find(str) {
    str = str.split("");
    for (let i = 0; i < str.length; i++) {
        if(str[i] == '?'){
            if(str[i-1] != 'a' && str[i+1] != 'a'){
                str[i] = 'a';
            }
            else{
                str[i] = 'b';
            }
        }
    }
    return str.join("");
}

function runProgram(input) {
    let str = input;
    console.log(find(str))
}

runProgram(`?ba??b`);