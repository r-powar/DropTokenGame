import utils from '../utils/utilities';

const row = 4;
const col = 5;
const grid = [
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null]
];


test('grid to be null', ()=>{
    expect(utils.checkGameCondition(grid, row, col)).toBe(null);
});