function kTb(arr, n) {
    let minJumps = new Array(n);
    minJumps.fill(101);
    minJumps[0] = 0;
    for (let i = 0; i < n; i++) {
        let range = arr[i] + i;
        for (let j = i + 1; j < (range + 1 < n ? range + 1 : n); j++) {
            minJumps[j] = (minJumps[j] < minJumps[i] + 1 ? minJumps[j] : minJumps[i] + 1);
        }
    }
    return minJumps[n - 1]
}

function runProgram(input) {
    input = input.split("\n")
    let n = Number(input[0]);
    let arr = input[1].split(" ").map(Number);

    console.log(kTb(arr, n))
}


runProgram(`15
3 1 2 3 2 2 3 5 12 6 5 7 11 6 5`);