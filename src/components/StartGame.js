import React, {Component} from 'react';
import PropTypes from 'prop-types';

class StartGame extends Component{
    constructor(props){
        super(props);
        this.players = ['myself', '9DTService'];
        this.selectedVal = 1;
    }

    selectedPlayer = (event) => {
        this.selectedVal = event.target.value === 'myself' ? 1 : 2;
    };

    handleClick = () => {
        this.props.pickPlayer(this.selectedVal);
    };

    render(){
        let options = this.players.map((val) => {
            return (<option key={val} value={val}>{val}</option>)
        });
        return(
            <div className='startGame'>
                <select name="players" id="players" onChange={this.selectedPlayer}>
                    {options}
                </select>
                <button onClick= {this.handleClick}>Start Game</button>
            </div>
        )
    }
}

StartGame.propTypes = {
    pickPlayer: PropTypes.func.isRequired
};

export default StartGame;