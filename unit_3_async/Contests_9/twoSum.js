function twoSum(arr,n,k){
    let i = 0;
    let j = n-1;
    while(i<j){
        if(arr[i] + arr[j] == k){
            console.log(i,j);
            return
        }
        if(arr[i] + arr[j] > k){
            j--;
        }
        if(arr[i] + arr[j] < k){
            i++;
        }
    }
    console.log(-1,-1);
    return
}

function runProgram(input){
    input = input.split("\n");
    let t = Number(input[0]);
    let index = 1;
    while(t--){
        let dim = input[index++].split(" ").map(Number);
        let n = dim[0];
        let k = dim[1];
        let arr = input[index++].split(" ").map(Number);
        twoSum(arr,n,k);
    }
}


runProgram(`3
4 9
2 7 11 15
5 10
1 2 3 5 5
2 100
48 49`);