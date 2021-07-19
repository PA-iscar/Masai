function runProgram(input){
    var input = input.split("\n");
    var N = Number(input[0]);
    var A = input[1].split("");
    var M = Number(input[2]);
    var B = input[3].split("");
    var tom = {};
    var jerry = {};
    var out = 0;
    if(N>=M){
        for(var i=0;i<N;i++){
            tom[A[i]]?tom[A[i]]++ : tom[A[i]] = 1;
            if(B[i]){
                jerry[B[i]]?jerry[B[i]]++ : jerry[B[i]] = 1;
            }
        }
        for(var key in jerry){
            if(tom[key] && tom[key]>=jerry[key]){
                out = 1;
            }
            else{
                out = 0;
                break;
            }
        }
    }
    if(out){
        console.log("Yes");
    }
    else
        console.log("No");
}

runProgram(`5
aabbc
4
abcd`);