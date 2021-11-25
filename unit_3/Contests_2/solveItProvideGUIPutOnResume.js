var flag = false;

function print(board) {
    for (let i = 0; i < board.length; i++) {
        console.log(board[i].join(" "));
    }
}

function fillBoard(board, x, y) {
    if (x == board.length) {
        print(board);
        flag = true;
        return
    }
    let next_row = 0;
    let next_col = 0;
    if (y == 8) {
        next_row = x + 1;
        next_col = 0;
    } else {
        next_row = x;
        next_col = y + 1;
    }

    if (board[x][y]) {
        fillBoard(board, next_row, next_col);
    }
    else {
        for (let i = 1; i <= 9; i++) {
            if (check(board, x, y, i)) {
                board[x][y] = i;
                fillBoard(board, next_row, next_col);
                board[x][y] = 0;
            }
        }
    }
}

function check(board, x, y, val) {
    for (let i = 0; i < 9; i++) {
        if (board[x][i] == val) {
            return false;
        }
    }
    for (let i = 0; i < 9; i++) {
        if (board[i][y] == val) {
            return false;
        }
    }

    row = Math.floor(x / 3) * 3;
    col = Math.floor(y / 3) * 3;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i + row][j + col] == val) {
                return false
            }
        }
    }
    return true;
}

function runProgram(input) {
    input = input.split("\n");
    let n = 9;
    let arr = new Array(n);
    for (let i = 0; i < n; i++) {
        // arr[i] = new Array(n);
        arr[i] = input[i].trim().split(" ").map(Number);
    }
    fillBoard(arr, 0, 0);
    if (!flag) {
        console.log(-1)
    }

}


runProgram(`0 4 0 0 0 0 1 7 9 
0 0 2 0 0 8 0 5 4 
0 0 6 0 0 5 0 0 8 
0 8 0 0 7 0 9 1 0 
0 5 0 0 9 0 0 3 0 
0 1 9 0 6 0 0 4 0 
3 0 0 4 0 0 7 0 0 
5 7 0 1 0 0 2 0 0 
9 2 8 0 0 0 0 6 0`);