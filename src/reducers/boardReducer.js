/**
 * Created by rpowar on 8/13/18.
 */
import * as types from '../actions/types';
import utils from '../utils/utilities';
import initialState from './initialState';


const boardGame = (state = initialState, action) => {
    switch (action.type) {
        case types.INIT_GAME:
            let boardCells = utils.populateBoard(state.boardRowSize, state.boardColSize);
            return Object.assign({}, state, {board: state.board.concat(boardCells)});

        case types.DROP_TILE:
            let currPick = state.currentPlayer;
            let currCol = action.payload;
            let copyBoard = state.board.slice();
            let rows = state.boardRowSize;

            let newBoard = utils.updateBoard(rows, currCol, copyBoard, currPick);

            let newMoves = state.moves.slice();
            newMoves.push(currCol);

            //switch player
            let togglePlayer = currPick === state.player1 ? state.player2 : state.player1;

            return Object.assign({}, state, {board: newBoard, currentPlayer: togglePlayer, moves: newMoves});

        case types.SET_PLAYER:
            let player = action.payload;
            let gameStatus = true;
            return Object.assign({}, state, {currentPlayer: player, gameStatus: gameStatus});

        case types.GAME_OVER:
            let message = action.payload;
            return Object.assign({}, state, {message: message, currentPlayer:null});

        case types.RESTART:
            return {...initialState};

        default:
            return state;
    }

};

export default boardGame;