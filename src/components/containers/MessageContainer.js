import {connect} from 'react-redux';
import GameOver from '../GameOver'
import * as allActions from '../../actions/gameActions';

const mapStateToProps = state => (
    {
        message: state.boardGame.message
    }
);

const mapDispatchToProps = dispatch => {
    return{
        restart:() => {
            dispatch(allActions.restartGame())
        }
    }
};

const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(GameOver);

export default MessageContainer;