import React, {Component} from 'react';

//function for each individual cell
const Cell = ({val, colIndex, pickCol, gameEnd}) => {
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
                if(!gameEnd){
                    pickCol(colIndex)
                }
            }}>
                <div className={cellColor}>
                </div>
            </div>
        </td>
    );

};

class RowCells extends Component{

    render(){
        return(
            <tr>
                {this.props.row.map((cell, i) => <Cell key={i} val={cell} colIndex={i} gameEnd={this.props.message} pickCol={this.props.select}/>)}
            </tr>
        );
    }

}

export default RowCells;