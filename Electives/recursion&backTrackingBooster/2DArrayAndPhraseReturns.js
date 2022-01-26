function solve(arr, n, m) {
    let str = "masaischool"
    let ind = 0

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (arr[i][j] == str[ind]) {
                if (check(arr, i, j, str, 0)) {
                    return true
                }
            }
        }
    }
    return false
}

function check(arr, i, j, str, ind) {
    if (i < 0 || i >= arr.length || j < 0 || j >= arr[i].length || str[ind] != arr[i][j]) {
        return false
    }
    if (ind == str.length) {
        return true
    }

    return (check(arr, i - 1, j - 1, str, ind + 1) || check(arr, i - 1, j, str, ind + 1) || check(arr, i - 1, j + 1, str, ind + 1) || check(arr, i, j + 1, str, ind + 1) || check(arr, i + 1, j + 1, str, ind + 1) || check(arr, i + 1, j, str, ind + 1) || check(arr, i + 1, j - 1, str, ind + 1) || check(arr, i, j - 1, str, ind + 1))
}

function runProgram(input) {
    input = input.split("\n");
    let dim = input[0].split(" ").map(Number);
    let rows = dim[0]
    let cols = dim[1]

    let arr = [];
    for (let i = 1; i <= rows; i++) {
        let arr2 = input[i].split(" ");
        arr.push(arr2);
    }
    console.log(solve(arr, rows, cols))
}

runProgram(`7 6
l l s c s d
h b s h l m
i l h c c m
m l d a b l
a s d b c o
o o a c s o
l c d i c h`);