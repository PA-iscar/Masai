function recu(n){
    if(n<0){
        return 0;
    }
    if(n==0){
        return 1;
    }
    return recu(n-4) + recu(n-8);
}

function runProgram(input){
    input = input.split("\n").map(Number);
    let t = input[0];
    index = 1;
    while(t--){
        let n = input[index++];
        // recu(n);
        console.log(recu(n));
    }
}



runProgram(`1
12`);