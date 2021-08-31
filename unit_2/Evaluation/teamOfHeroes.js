function check(n,k,arr){
    var i=0;
    var j=n-1;
    while(i!=j && j>=0 && i<n){
        if(arr[i]+arr[j]==k){
            return true;
        }
        if(arr[i]+arr[j]>k){
            j--;
        }
        if(arr[i]+arr[j]<k){
            i++;
        }
    }
    return false;
}

function runProgram(input){
    var input = input.split("\n");
    var t = Number(input[0]);
    var index = 1;
    while(t--){
        var dim = input[index++].split(" ").map(Number);
        var n = dim[0];
        var k = dim[1];
        var arr = input[index++].split(" ").map(Number);

        console.log(check(n,k,arr)?"Yes":"No");
    }
}

runProgram(`2
5 31
10 11 13 17 21
5 44
10 11 13 17 21`);