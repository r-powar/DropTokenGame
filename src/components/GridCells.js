/**
 * Created by rpowar on 8/13/18.
 */
import React, {Component} from 'react';

const Cell = ({val, colIndex, pickCol}) => {
    let cellColor;
    if (val === 1) {
        cellColor = 'red';
    } else if (val === 2) {
        cellColor = 'blue';
    } else {
        cellColor = 'white';
    }
    return (
        <td>
            <div className="cells" onClick={() => {
                pickCol(colIndex)
            }}>
                <div className={cellColor}>
                </div>
            </div>
        </td>
    );

};
const Row = ({row, select}) => {
    return (
        <tr>
            {row.map((cell, i) => <Cell key={i} val={cell} colIndex={i} pickCol={select}/>)}
        </tr>
    );
};

class GridCells extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
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
                        <Row key={i} row={row} select={this.props.selectCol}/>
                    ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default GridCells;