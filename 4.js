
let myTable = [];
const numRows = 5;
const numColumns = 4; 
let counters = 0;
for (let i = 0; i < numRows; i++) {
  
  let tempTable = []; 

  for (let j = 0; j < numColumns; j++) {
    counter++;
    tempTable.push(counters);
  }
  myTable.push(tempTable);
}
console.table(myTable);
