/**
 * Created by rpowar on 8/13/18.
 */
import * as types from '../actions/types';
import utils from '../utils/utilities';
import initialState from './initialState';


const initializeGame = (state = initialState, action) => {
    switch (action.type) {
        case types.INIT_GAME:
            let boardCells = utils.populateBoard(state.boardRowSize, state.boardColSize);
            return Object.assign({}, state, {board: state.board.concat(boardCells), currentPlayer: state.player1});

        case types.DROP_TILE:
            let currPick = state.currentPlayer;
            let currCol = action.payload;
            let copyBoard = state.board.slice();
            let rows = state.boardRowSize;

            let newBoard = utils.updateBoard(rows, currCol, copyBoard, currPick);

            let newMoves = state.moves.slice();
            newMoves.push(currCol);

            //switch player
            let togglePlayer = state.currentPlayer === state.player1 ? state.player2 : state.player1;

            return Object.assign({}, state, {board: newBoard, currentPlayer: togglePlayer, moves: newMoves});
        default:
            return state;
    }

};

export default initializeGame;