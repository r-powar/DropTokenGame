/**
 * Created by rpowar on 8/13/18.
 */
import {combineReducers} from 'redux';
import boardReducer from './boardReducer';

const rootReducer = combineReducers({
    boardGame: boardReducer,
});

export default rootReducer;