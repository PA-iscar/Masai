function findIt(arr, row, col) {
    let result = arr[0];
    for (let i = 1; i < row; i++) {
        let temp = [];
        for (let j = 0; j < col; j++) {
            if (j == 0) {
                temp.push(arr[i][j] + (result[j] > result[1] ? result[j] : result[1]));
            }
            else if (j == col - 1) {
                temp.push(arr[i][j] + (result[j] > result[j - 1] ? result[j] : result[j - 1]));
            }
            else {
                temp.push(arr[i][j] + ((result[j] > result[j - 1]) ? (result[j] > result[j + 1] ? result[j] : result[j + 1]) : (result[j - 1] > result[j + 1] ? result[j - 1] : result[j + 1])));
            }
        }
        result = temp
    }
    return result.sort((a,b) => a - b)[result.length-1];
}

function runProgram(input) {
    input = input.trim().split("\n");
    let t = Number(input[0]);
    let index = 1;
    while (t--) {
        let dim = input[index++].trim().split(" ").map(Number);
        let h = dim[0];
        let w = dim[1];
        let arr = [];

        for (let i = 0; i < h; i++) {
            // arr[i] = new Array(w);
            arr.push(input[index++].trim().split(" ").map(Number));
        }

        console.log(findIt(arr, h, w))
    }
}


runProgram(`1
6 5
3 1 7 4 2
2 1 3 1 1
1 2 2 1 8
2 2 1 5 3
2 1 4 4 4
5 2 7 5 1`);