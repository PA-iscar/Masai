var count = 0;

function placeQueen(board, row, N) {
    if (row == N) {
        // console.log(board);
        count++;
        return;
    }

    for(let i=0;i<N;i++){
        if(isSafe(board, row, i)){
            board[row][i] = 1;
            placeQueen(board,row+1,N);
            board[row][i] = 0;
        }
    }
    
}

function isSafe(board, row, col) {
    for (let i = 0; i < row; i++){
        if (board[i][col])
            return false;
    }
    for (let i = row-1, j = col-1; i >= 0 && j >= 0; i--, j--){
        if (board[i][j])
            return false;
    }
    for (let i = row-1, j = col+1; i >= 0 && j < board.length; i--, j++){
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

    placeQueen(board, 0, n);
    console.log(count);
}



runProgram(`4`);