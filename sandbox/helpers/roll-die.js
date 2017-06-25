/**
 * rollDie is a function that simulates rolling a six-sided die
 * Do not worry too much about how this function works for now 
 * @return random whole-number (integer) between 1 and 6
 */
const rollDie = function () {
  // Math.radom() returns a random number between 0,1
  const randomNumber = Math.random();
  const dieRoll = Math.ceil(randomNumber * 6)
  return dieRoll
}

// Export the rollDie function so that it becomes available to 
// other files that require this file
module.exports = rollDie