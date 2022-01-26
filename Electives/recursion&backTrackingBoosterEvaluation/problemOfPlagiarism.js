let sol = []
let low = 0;
let high = 0;
let count = 0;

function permute(arr, l, r) {
    if (l == r) {
        let sum = 0
        for(let j = low; j<=high; j++){
            sum += arr[j];
        }
        if(sum%2!=0){
            count++;
        }
        sol.push(arr.join(" "))
        return;
    }
    else {
        for (let i = l; i <= r; i++) {
            arr = swap(arr, l, i);
            permute(arr, l + 1, r);
            arr = swap(arr, l, i);
        }
    }
    return
}

function swap(a, i, j) {
    let temp;
    let char = a;
    temp = char[i];
    char[i] = char[j];
    char[j] = temp;
    return (char);
}


function runProgram(input) {
    input = input.split("\n");
    let n = Number(input[0]);
    let dim = input[1].split(" ").map(Number);
    low = dim[0]
    high = dim[1]
    let arr = new Array();
    for(let i=1;i<=n;i++){
        arr.push(i);
    }
    permute(arr, 0, n - 1);
    
    // let count = 0;
    // for(let i=0;i<sol.length;i++){
    //     let val = sol[i].trim().split(" ").map(Number);
    //     let sum = 0;
    //     for(let j = l; j<=r; j++){
    //         sum += val[j];
    //     }

    //     if(sum%2!=0){
    //         count++;
    //     }
    // }
    console.log(count)
}



runProgram(`3
0 1`);