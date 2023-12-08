let myArray = [];

for (let i = 0; i < 10; i++) {
  myArray.push(i + 1); 
}

console.log("Array:", myArray);
console.log("Using for loop:");
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}
console.log("Using for...of loop:");
for (let value of myArray) {
    console.log(value);
  }