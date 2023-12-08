
let output = "";
let skipNumber = 1; 
for (let i = 1; i <= 10; i++) {
 
  if (i === skipNumber) {
  
    continue; 
  }
  output += i + " ";
}