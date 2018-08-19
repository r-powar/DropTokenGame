/**
 * Created by rpowar on 8/13/18.
 */
import * as types from './types';

export function initGame(){
    return function(dispatch){
        dispatch({
            type: types.INIT_GAME
        })
    }
}

export  function dropTile(colVal) {
    return function(dispatch){
        dispatch({
            type: types.DROP_TILE,
            payload: colVal
        })
    }
}

