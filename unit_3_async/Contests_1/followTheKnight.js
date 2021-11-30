var board = new Array(10);
for (let i = 0; i < 10; i++) {
    board[i] = new Array(10);
    for (let j = 0; j < 10; j++) {
        board[i][j] = 0;
    }
}
let count = 0;

function knight(i, j, n) {
    if (i < 0 || i > 9 || j < 0 || j > 9) {
        return;
    }
    if (n == 0) {
        if(!board[i][j]){
            count++;
        }
        board[i][j] = 1;
        return;
    }

    knight(i + 2, j + 1, n - 1)
    knight(i + 2, j - 1, n - 1)
    knight(i - 2, j + 1, n - 1)
    knight(i - 2, j - 1, n - 1)
    knight(i + 1, j + 2, n - 1)
    knight(i + 1, j - 2, n - 1)
    knight(i - 1, j + 2, n - 1)
    knight(i - 1, j - 2, n - 1)

}


function runProgram(input) {
    input = input.split(" ").map(Number);
    let i = input[0];
    let j = input[1];
    let n = input[2];

    knight(i-1, j-1, n);
    console.log(count)
}


runProgram(`4 10 1`);