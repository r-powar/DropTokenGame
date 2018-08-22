import {connect} from 'react-redux';
import StartGame from '../StartGame'
import * as allActions from '../../actions/gameActions';


const mapDispatchToProps = dispatch => {
    return{
        pickPlayer: (currPlayer) => {
            dispatch(allActions.setPlayer(currPlayer))
        }
    }
};
const StartGameContainer = connect(null, mapDispatchToProps)(StartGame);

export default StartGameContainer;