function hack(c,n){
    if(n==c){
        return true;
    }
    if(n<c){
        return false;
    }
    if(hack(10*c,n) == true || hack(20*c,n) == true){
        return true;
    }
    return false;
    
}

function runProgram(input){
    input = input.split("\n").map(Number);
    let t = input[0];
    let index = 1;
    while(t--){
        let n = input[index++];
        hack(1,n)?console.log("Yes"):console.log("No");
    }
}

runProgram(`5
1
2
10
25
200`);