function runProgram(input){
    let str = input.split("");
    console.log(str);
    let tom = {};
    let flag = 0;
    for(let i=0;i<str.length;i++){
        if(tom[str[i]]){
            flag = 1;
            break;
        }
        else{
            tom[str[i]] = 1;
        }
    }
    if(flag){
        console.log("No");
    }
    else{
        console.log("Unique");
    }
}


runProgram(`masi`);