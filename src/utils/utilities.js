export function populateBoard(row, col) {
    let temp = [];
    for (let i = 0; i < row; i++) {
        let cells = [];
        for (let j = 0; j < col; j++) {
            cells.push(null);
        }
        temp.push(cells);
    }

    return temp;
}

export function updateBoard(row, col, board, currPlayer) {
    for(let i = row - 1; i >= 0; i--){
        if(!board[i][col]){
            board[i][col] = currPlayer;
            break;
        }
    }
    return board;
}

export default {populateBoard, updateBoard}
