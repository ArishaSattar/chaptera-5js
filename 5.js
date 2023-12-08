let grid = [];
const numCells = 64;
let value = 0;
let row = [];
for (let i = 0; i <= numCells; i++) {
  if (value % 8 === 0) {
    if (row !== undefined) {
    
      grid.push(row);
    }
    if (value % 8 === 0) {
      row = [];
    }
  }
  counter++;
  let tempValue = value;
  row.push(tempValue);
  if (counter % 8 === 0) {
    grid.push(row);
  }
}
console.log(grid);