function longSubarray(arr, k) {
    let l = -1;
    let r = 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % k != 0) {
            if (l == -1)
                l = i;
            r = i;
        }
        sum += arr[i];
    }
    if (sum % k != 0)
        return arr.length
    if (l == -1)
        return 0
    l++;
    r = arr.length - r;
    let window = arr.length - Math.min(l, r);
    return window
}

function slide(arr, k) {
    let ans = [];
    let i = 0
    let j = k - 1
    while (j < arr.length) {
        let sum = 0
        for (k = i; k <= j; k++) sum += arr[k]
        i++
        j++
        ans.push(sum)
    }
    return ans
}

function runProgram(input) {
    input = input.split("\n");
    let dim = input[0].split(" ").map(Number);
    let n = dim[0];
    let k = dim[1];
    let arr = input[1].split(" ").map(Number);
    let window = longSubarray(arr, k);
    let sums = slide(arr,window);
    let count = 0;
    sums.forEach(el => {
        if(el % k != 0){
            count++;
        }
    });
    console.log(count);
}

runProgram(`4 3
2 3 4 6`);