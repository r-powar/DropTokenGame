/**
 * Created by rpowar on 8/13/18.
 */
import * as types from './types';
import utils from '../utils/utilities';

const dtService = 'https://w0ayb2ph1k.execute-api.us-west-2.amazonaws.com/production';

export function initGame() {
    return function (dispatch, getState) {
        dispatch({
            type: types.INIT_GAME
        });

        const currState = getState().boardGame;

        if (currState.currentPlayer === 2) {
            let url = new URL(dtService);
            let params = {moves: currState.moves};
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
                    }
                });
        }
    }
}

export function dropTile(colVal) {
    return function (dispatch, getState) {
        //Repeat this at bottom before the service call
        const currState = getState().boardGame;
        let result;

        dispatch({
            type: types.DROP_TILE,
            payload: colVal
        });


        if (currState.currentPlayer === 1) {
            let url = new URL(dtService);
            let moves = getState().boardGame.moves;
            let params = {moves: moves};
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
                        if (result) {
                            dispatch({
                                type: types.GAME_OVER,
                                payload: result
                            });
                        }
                    }
                });

            result = utils.checkGameCondition(currState.board, currState.boardRowSize, currState.boardColSize);
            if (result) {
                dispatch({
                    type: types.GAME_OVER,
                    payload: result
                });
            }


        }




    }
}

export function setPlayer(player) {
    return function (dispatch) {
        dispatch({
            type: types.SET_PLAYER,
            payload: player
        })
    }
}

export function restartGame() {
    return function (dispatch) {
        dispatch({
            type: types.RESTART
        })
    }
}

