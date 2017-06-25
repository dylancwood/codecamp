console.log('Let\s learn about functions')

/**
 * This is a comment: you can write anything you want here.
 * Node.js will not read this text when trying to run your file
 * 
 * What are functions? Functions do things.We already know one function:
 * `console.log()` is a function that prints text.
 * 
 * We can write our own functions too.
 * To create a function, use the `function` key word:
 */

const printNodeJSRules = function () {
    console.log('Node.js Rules!')
}

/**
 * Functions can also take variables and do things with them.
 * For instance, console.log takes a message to print.
 * 
 * Let's write a function that takes two numbers and adds them together:
 */
const addThenPrint = function (number1, number2) {
    const result = number1 + number2
    console.log('I just added two numbers and got this result', result)
}

/**
 * Now we can 'call' our function:
 */

addThenPrint(1,1)
addThenPrint(3768, 9873)

/**
 * There is one more thing to understand about functions:
 * returning values.
 * 
 * Input parameters allow us to pass things into functions.
 * Returning allows us to pass things out of functions.
 */
 
const add = function (number1, number2) {
    const result = number1 + number2
    return result
}

/**
 * Above, we created a function called 'add' that adds two numbers together.
 * 'number1' and 'number2' are called input parameters.
 * after adding the numbers together, we return the result so that it
 * becomes available to the code that ran our function.
 * 
 */

const additionResult = add(1,1)

console.log('1 + 1 = ', additionResult)

/**
 * Now write a function that subtracts and returns the result,
 * then call that function to calculate 2876 minus 129 and print the result
 * 
 * Here is a hint to get you started:
 * const subtract = function(num1, num2) {
 *   // add some code here
 * }
 * 
 * 
 */

