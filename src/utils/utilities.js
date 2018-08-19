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
                console.log("Row:",i);
                console.log("Col:", j);
                return null;
            }
        }
    }

    return 'tie';
};

export function checkGameCondition(board, row, col) {
    return checkVertical(board, row, col) || checkHorizontal(board, row, col) ||
        checkDiagonalRight(board, row, col) || checkDiagonalLeft(board, row, col) || checkDraw(board, row, col);

}

export default {populateBoard, updateBoard, checkGameCondition}
