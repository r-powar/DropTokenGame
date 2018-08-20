/**
 * Created by rpowar on 8/13/18.
 */
import * as types from './types';
import utils from '../utils/utilities';

const dtService = 'https://w0ayb2ph1k.execute-api.us-west-2.amazonaws.com/production';

export function initGame() {
    return function (dispatch) {
        dispatch({
            type: types.INIT_GAME
        })
    }
}

export function dropTile(colVal) {
    return function (dispatch, getState) {
        const currState = getState().board;
        let result;

        if (currState.currentPlayer === 1) {
            let url = new URL(dtService);
            let params = {moves: currState.moves};
            console.log(currState.moves);
            Object.keys(params).forEach(key => url.searchParams.append(key, JSON.stringify(params[key])));

            fetch(url.href)
                .then(res => {
                        if (res.status === 200) {
                            return res.json();
                        }
                    }
                )
                .then(val => {
                    if (val) {
                        dispatch({
                            type: types.DROP_TILE,
                            payload: val[val.length - 1]
                        });
                        result = utils.checkGameCondition(currState.board, currState.boardRowSize, currState.boardColSize);
                        console.log("Second:",result);
                    }
                });
        }


        dispatch({
            type: types.DROP_TILE,
            payload: colVal
        });

        result = utils.checkGameCondition(currState.board, currState.boardRowSize, currState.boardColSize);
        console.log("First:", result);
    }
}

