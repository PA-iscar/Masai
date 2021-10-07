function now(arr,n,k){
    if(k<0){
        return 0
    }
    if(k==0){
        return 1
    }
    var res = 0;
    for(var i=0;i<n;i++){
        res = res + now(arr,n,k-arr[i])
    }
    return res;
}

function runProgram(input){
    input = input.split("\n");
    var dim = input[0].split(" ").map(Number);
    var k = dim[0];
    var n = dim[1];
    var arr = input[1].split(" ").map(Number);
    console.log(now(arr,n,k));
}


runProgram(`3 3
1 2 3`);