//
let multiplicationTable = [];

// Step 2: Set a value variable to specify how many values you want to multiply.
let num = 9; 


for (let i = 1; i <= num; i++) {

  let tempRow = [];

 
  for (let j = 1; j <= num; j++) {

    tempRow.push(i * j);
  }

  multiplicationTable.push(tempRow);
}


console.log("Multiplication Table:");
console.table(multiplicationTable);
console.log("Using continue:", output);


output = ""; 

for (let i = 1; i <= 10; i++) {
  if (i === skipNumber) {
    break;
  }
  output += i + " ";
}

console.log("Using break:", output);
  