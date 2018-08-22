import GridCells from '../GridCells';
import {connect} from 'react-redux';
import * as allActions from '../../actions/gameActions';

const mapStateToProps = state => (
    {
        board: state.boardGame.board,
        message: state.boardGame.message
    }
);

const mapDispatchToProps = dispatch => {
    return {
        initGame: () => {
            dispatch(allActions.initGame())
        },

        selectCol : (val) => {
            dispatch(allActions.dropTile(val))
        }
    }
};

const GameContainer = connect(mapStateToProps, mapDispatchToProps)(GridCells);

export default GameContainer;