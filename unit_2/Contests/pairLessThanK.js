function lessThan(arr,n,k){
    var i = 0;
    var j = n-1;
    var max = -1;
    while(i<j){
        var sum = arr[i]+arr[j];
        if(sum<k && sum>max){
            max = sum;
            i++;
        }
        else{
            j--;
        }
    }
    return max;
}

function runProgram(input){
    var input = input.split("\n");
    var t = Number(input[0]);
    var index = 1;
    while(t--){
        var n = Number(input[index++]);
        var arr = input[index++].split(" ").map(Number);
        var k = Number(input[index++]);
        
        var result = lessThan(arr,n,k);
        console.log(result);
    }
}

runProgram(`2
5
1 2 3 4 5
7
3
30 10 20
15`);