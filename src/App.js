import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import GameContainer from './components/containers/GameContainer';
import StartGameContainer from './components/containers/StartGameContainer';
import MessageContainer from './components/containers/MessageContainer';

class App extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">98point6 Drop Token</h1>
                </header>

                <StartGameContainer />
                {this.props.display ? <GameContainer/> : null}
                {this.props.message ? <MessageContainer/> : null}

            </div>
        );
    }
}

const mapStateToProps = state => ({
    display: state.boardGame.gameStatus,
    message: state.boardGame.message
});

export default connect(mapStateToProps)(App);
