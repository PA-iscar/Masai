function runProgram(input){
    input = input.split("\n");
    let str1 = input[0]
    let str2 = input[1]

    let tom = {};
    for(let i=0;i<str1.length;i++){
        tom[str1[i]]?tom[str1[i]]++:tom[str1[i]] = 1;
    }
    let jerry = {};
    for(let i=0;i<str1.length;i++){
        jerry[str2[i]]?jerry[str2[i]]++:jerry[str2[i]] = 1;
    }
    let res = "Yes";
    for(var key in tom){
        if(tom[key] == jerry[key]){

        }
        else{
            res = "No";
            break;
        }
    }
    console.log(res);
}

runProgram(`amit
mtia`);