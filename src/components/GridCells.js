/**
 * Created by rpowar on 8/13/18.
 *
 * Populate the grid with this component
 *
 */
import React, {Component} from 'react';
import RowCells from '../components/RowCells';


class GridCells extends Component {

    componentDidMount() {
        this.props.initGame();
    }

    render() {
        return (
            <div className="game">
                <table>
                    <thead>
                    </thead>
                    <tbody>
                    {this.props.board.map((row, i) => (
                        <RowCells key={i} row={row} select={this.props.selectCol} message={this.props.message}/>
                    ))}
                    </tbody>
                </table>
            </div>
        )

    }
}

export default GridCells;