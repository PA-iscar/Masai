function placeQueen(board, queens, n){
    if(queens==0){
        console.log(board);
        return board;
    }
    else{
        for(let i=0;i<n;i++){
            for(let j=0;j<n;j++){
                if(isSafe(board,i,j)){

                }
            }
        }
    }
}

function isSafe(board,row,col){
    for(let i=0;i<row;i++){
        
    }
}

function runProgram(input){
    let n = Number(input);
    let board = new Array(n);
    for(let i=0;i<n;i++){
        board[i] = new Array(n);
        for(let j=0;j<n;j++){
            board[i][j] = 0;
        }
    }
    placeQueen(board, n, n);
}

runProgram(`4`);