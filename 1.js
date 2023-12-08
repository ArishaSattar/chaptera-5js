
const maxValue = 5;


const solution = Math.floor(Math.random() * maxValue) + 1;
console.log("Solution:", solution); // Comment out in the final version


let isCorrect = false;
do { 
  let userGuess = prompt(`Enter a number between 1 and ${maxValue}:`);
  userGuess = parseInt(userGuess);
  if (userGuess === solution) {
    isCorrect = true;
    alert("Congratulations! Your guess is correct!");
  } else {
    if (userGuess > solution) {
      alert("Too high! Try again.");
    } else {
      alert("Too low! Try again.");
    }
  }
} while (!isCorrect);
