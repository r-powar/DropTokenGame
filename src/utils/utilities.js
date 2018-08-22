//populates the grid with initial values
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

//updates when a tile is dropped
export function updateBoard(row, col, board, currPlayer) {
    for (let i = row - 1; i >= 0; i--) {
        if (!board[i][col]) {
            board[i][col] = currPlayer;
            break;
        }
    }
    return board;
}

const checkVertical = (board, row, col) => {
    for (let i = 3; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (board[i][j]) {
                if (board[i][j] === board[i - 1][j] &&
                    board[i][j] === board[i - 2][j] &&
                    board[i][j] === board[i - 3][j]) {
                    return board[i][j];
                }
            }
        }
    }
};
const checkHorizontal = (board, row, col) => {
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < 4; j++) {
            if (board[i][j]) {
                if (board[i][j] === board[i][j + 1] &&
                    board[i][j] === board[i][j + 2] &&
                    board[i][j] === board[i][j + 3]) {
                    return board[i][j];
                }
            }
        }
    }
};
const checkDiagonalRight = (board, row, col) => {
    for (let i = 3; i < row; i++) {
        for (let j = 0; j < 4; j++) {
            if (board[i][j]) {
                if (board[i][j] === board[i - 1][j + 1] &&
                    board[i][j] === board[i - 2][j + 2] &&
                    board[i][j] === board[i - 3][j + 3]) {
                    return board[i][j];
                }
            }
        }
    }
};
const checkDiagonalLeft = (board, row, col) => {
    for (let i = 3; i < row; i++) {
        for (let j = 3; j < col; j++) {
            if (board[i][j]) {
                if (board[i][j] === board[i - 1][j - 1] &&
                    board[i][j] === board[i - 2][j - 2] &&
                    board[i][j] === board[i - 3][j - 3]) {
                    return board[i][j];
                }
            }
        }
    }
};
const checkDraw = (board, row, col) => {

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (board[i][j] === null) {
                return null;
            }
        }
    }

    return 'tie';
};

//checks for win or draw
export function checkGameCondition(board, row, col) {
    return checkVertical(board, row, col) || checkHorizontal(board, row, col) ||
        checkDiagonalRight(board, row, col) || checkDiagonalLeft(board, row, col) || checkDraw(board, row, col);

}

//TO DO: extract out the api call to a function
// export function servicePlay(urlEndpoint, currState){
//     let url = new URL(urlEndpoint);
//     let params = {moves: currState.moves};
//     Object.keys(params).forEach(key => url.searchParams.append(key, JSON.stringify(params[key])));
//
//     return fetch(url.href);
//
// }
export default {populateBoard, updateBoard, checkGameCondition}
