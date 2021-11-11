var N = 0;

function placeQueen(board, col) {
    if (col >= N) {
        console.log(board);
        return true;
    }

    for(let i=0;i<N;i++){
        if(isSafe(board, i, col)){
            board[i][col] = 1;
            if(placeQueen(board,col+1)){
                return true;
            }
            board[i][col] = 0;
        }
    }
    return false;
}

function isSafe(board, row, col) {
    for (let i = 0; i < col; i++){
        if (board[row][i])
            return false;
    }
    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--){
        if (board[i][j])
            return false;
    }
    for (let i = row, j = col; j >= 0 && i < N; i++, j--){
        if (board[i][j])
            return false;
    }
    return true;
}

function runProgram(input) {
    let n = Number(input);
    let board = new Array(n);
    for (let i = 0; i < n; i++) {
        board[i] = new Array(n);
        for (let j = 0; j < n; j++) {
            board[i][j] = 0;
        }
    }
    N = n;

    placeQueen(board, 0);
}


runProgram(`4`);