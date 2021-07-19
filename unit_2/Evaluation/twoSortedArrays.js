function chk(a,b,n){
    var i=0;
    var j=n-1;
    var count = 0;
    while(i<n && j>=0){
        
        if(a[i]>b[j]){
            j--;
        }
        if(a[i]<b[j]){
            i++;
        }
        if(a[i]==b[j]){
            count++;
            i++;
            j--;
        }
    }
    return count;
}


function runProgram(input){
    var input = input.split("\n");
    var t = Number(input[0]);
    var index = 1;
    while(t--){
        var n = Number(input[index++]);
        var A = input[index++].split(" ").map(Number);
        var B = input[index++].split(" ").map(Number);
        console.log(chk(A, B, n));
    }
}

runProgram(`1
6
1 2 2 3 4 5
4 4 3 2 1 1`);