var sum = 0;
function now(arr,n,k){
    var counter = 0;
    if(k<0){
        return 0;
    }
    if(k==0){
        return 1;
    }
    for(var i=0;i<n;i++){
        if(now(arr,n,k-arr[i])){
            sum++;
        }
    }

}

function runProgram(input){
    input = input.split("\n");
    var dim = input[0].split(" ").map(Number);
    var k = dim[0];
    var n = dim[1];
    var arr = input[1].split(" ").map(Number);
    now(arr,n,k);
    if(sum==0){
        console.log(-1);
    }
}


runProgram(`3 3
1 2 3`);