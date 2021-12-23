function runProgram(input){
    input = input.split("\n");
    let str1 = input[0].split("");
    let str2 = input[1].split("");

    let n = str1.length;
    let t = str1.length;
    let flag = 0;
    while(t--){
        if(str1.join("") == str2.join("")){
            flag = 1;
            break;
        }
        let val = str1.pop();
        str1.unshift(...val);
    }
    if(flag){
        console.log("Yes")
    }
    else{
        console.log("No")
    }
}

runProgram(`carbon
boncar`);