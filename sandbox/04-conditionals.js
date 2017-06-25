const rollDie = require('./helpers/roll-die')
console.log('Let\'s learn about conditionals!')

/**
 * One of the most useful things to do in code is to make decisions
 * To make decisions in javascript, we can use 'if {condition} then {do something}'
 * 
 * Imagine a simple game in which the player roles a die.
 * If the result of the die roll is greater than four, the player wins.
 * 
 * Let's write that in some code:
 */

let dieRollResult = rollDie()

if (dieRollResult > 4) {
    console.log('You win because you rolled a', dieRollResult)
}

/**
 * The above example works pretty well, but what if we want to print
 * a different message when the player loses?
 * 
 * In that case, we can use an `else` keyword:
 */

dieRollResult = rollDie()

if (dieRollResult > 4) {
    console.log('You win because you rolled a', dieRollResult)
} else {
    console.log('Sorry, you lose because you rolled a', dieRollResult)
}

/**
 * Finally, what if the game were more complicated, and had the following rules:
 * 1. If the die role is 5 or 6, then the player wins
 * 2. If the die role is 1 or 2, then the player loses
 * 3. If the die role is 3 or 4, then the player can roll again
 * 
 * For that, we use `else if`:
 */

dieRollResult = rollDie()

if (dieRollResult > 4) {
    console.log('You win because you rolled a', dieRollResult)
} else if (dieRollResult >= 3) {
    console.log('You may to roll again because you rolled a', dieRollResult)
} else {
    console.log('Sorry, you lose because you rolled a', dieRollResult)
}


/**
 * Exercise:
 * 
 * 1. Write a function called 'decideGameResult' that takes a number as a parameter, and returns 'WINNER' if the user won, 'TRY_AGAIN' if they get to try again,
 *    and 'LOSER' if they lost.
 * 2. Test your function by calling it with values 1, 3, and 5.
 * 3. Write a function called `printGameOutcome` that takes a dieRollResult as input
 *    and prints whether the player won the game, gets to roll again, or lost the game.
 *    Bonus points if you re-use 'decideGameResult' in your new function.
 * 4. Test your function by calling it with values 1, 3, and 5.
 */
