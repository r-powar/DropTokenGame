import React, {Component} from 'react';

class GameOver extends Component {

    handleClick = () => {
        this.props.restart();

    };

    render() {
        let finalMessage;

        if(this.props.message === 1){
            finalMessage = 'Player 1 Won!!';
        }else if(this.props.message === 2){
            finalMessage = 'Player 2 Won!!';
        }else{
            finalMessage = 'It was a tie!!'
        }

        return (
            <div>
                <h3>{finalMessage}</h3>
                <button onClick={this.handleClick}>Play Again!</button>
            </div>
        )
    }
}

export default GameOver;