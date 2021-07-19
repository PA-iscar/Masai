function twoSum(arr,k){
    var n = arr.length;
    var i = 0;
    var j = n-1;
    while(i<j){
        var sum = arr[i] + arr[j];
        if(sum == k){
            return [i, j];
        }
        if(sum < k){
            i++;
        }
        if(sum > k){
            j--;
        }
    }
    return [-1,-1];
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
        var result = twoSum(arr, k);
        console.log(result[0]+" "+result[1]);
    }
}

runProgram(`3
4 9
2 7 11 15
5 10
1 2 3 5 5
2 100
48 49`);