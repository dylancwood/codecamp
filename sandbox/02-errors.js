console.log('Let\'s learn how to fix errors')

/**
 * Sometimes the code that you write is not perfect and the computer
 * is not sure how to read it, or it is asking for something that is
 * impossible to do. 
 * 
 * When this happens, an error will show up in the output of your program.
 * 
 * There is something wrong with the code below, and it will cause an error.
 * Run this file to see the error
 */

const favoriteSport = Sleeping

console.log('My favorite sport is', favoriteSport)

/**
 * The error should look something like:
 * 
 * Let's learn how to fix errors
 * c:\Users\Angela\codecamp\sandbox\02-errors.js:14
 * const favoriteSport = Sleeping
 *                       ^
 * ReferenceError: Sleeping is not defined
 *   at createScript (vm.js:56:10)
 *   at Object.runInThisContext (vm.js:97:10)
 *   at Module._compile (module.js:542:28)
 *   at Object.Module._extensions..js (module.js:579:10)
 *   at Module.load (module.js:487:32)
 *   at tryModuleLoad (module.js:446:12)
 *   at Function.Module._load (module.js:438:3)
 *   at Module.runMain (module.js:604:10)
 *   at run (bootstrap_node.js:389:7)
 *   at startup (bootstrap_node.js:149:9)
 * 
 * Error messages are not always easy to read, 
 * but they usually tell us where the mistake in our code is.
 * 
 * We can see that the mistake is somewhere on line 14 (02-errors.js:14)
 * We can also see that it doesn't like something about `Sleeping`
 * 
 * To fix this, we will need to wrap the `Sleeping` in quotes
 * Once we do that, Node.js will know that `Sleeping` is not a key word
 * with special meaning: it is just some data that I want to assign to `favoriteSport`
 * 
 */

/**
 * Exercise:
 * 
 * 1. Fix the code above so that this program runs.
 * 2. Remove the comments from the code below and use the error message
 *    to fix the error
 * 3. Change the favoriteSport so that it is your favorite sport
 */

/*
favoriteSport = 'Basketball'

console.log('My favorite sport is actually ', favoriteSport)
*/




