/**
 * Created by rpowar on 8/13/18.
 */
import * as types from './types';
import utils from '../utils/utilities';

export function initGame(){
    return function(dispatch){
        dispatch({
            type: types.INIT_GAME
        })
    }
}

export  function dropTile(colVal) {
    return function(dispatch, getState){
        const currState = getState().board;
        console.log(currState);

        dispatch({
            type: types.DROP_TILE,
            payload: colVal
        });

        let result = utils.checkGameCondition(currState.board, currState.boardRowSize, currState.boardColSize);
        console.log(result);
    }
}

