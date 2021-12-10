function check(arr, n, k) {
    let i = 0;
    let j = 1;
    while(i<n && j<n){
        if(i!=j && arr[j]-arr[i] == k){
            return "Yes"
        }
        else if(arr[j]-arr[i] < k){
            j++;
        }
        else 
            i++;
    }
    return "No";
}

function runProgram(input) {
    input = input.split("\n");
    let t = Number(input[0]);
    let index = 1;
    while (t--) {
        let dim = input[index++].split(" ").map(Number);
        let n = dim[0];
        let k = dim[1];
        let arr = input[index++].split(" ").map(Number);
        console.log(check(arr, n, k));
    }
}

runProgram(`2
5 3
1 2 3 4 5
5 8
1 2 3 4 5 `);