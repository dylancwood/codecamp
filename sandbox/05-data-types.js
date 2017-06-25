console.log('Let\'s learn about data types!')

/**
 * So far, we have seen three basic data types that Javascript supports:
 * numbers e.g. 303
 * strings e.g 'this is a sentence' or "Javascript Rules!"
 * functions (yep, javascript treats functions as regular data)
 * 
 * There are other data types that are useful for describing real-world situations
 */

// Booleans:
const thisIsTrue = true
const thisIsFalse = false

if (thisIsTrue) {
    console.log('I told you it was true')
}

if (thisIsFalse) {
    console.log('This will never print')
}

// Arrays (lists)
const daysOfTheWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
]

// Arrays are zero-indexed, so "Sunday" is at [0], and the third element is at [2]
const thirdDay = daysOfTheWeek[2]

console.log('The third day of the week is', thirdDay)

// Objects (dictionaries) 

const dayAbbreviations = {
    Sunday: 'Sun',
    Monday: 'Mon',
    Tuesday: 'Tues',
    Wednesday: 'Weds',
    Thursday: 'Thurs',
    Friday: 'Fri'
}

/**
 * An object consists of key: value pairs called properties.
 * To create an object, simply use the squigly braces '{}'
 */

const wednesdayAbbreviated = dayAbbreviations['Wednesday']
console.log('The abbreviation for Wednesday is', wednesdayAbbreviated)

// you can also get properties of an object using this format:
const mondayAbbreviated = dayAbbreviations.Monday
console.log('The abbreviation for Wednesday is', mondayAbbreviated)

// you can also assign and re-assing properties to an object after it is created:

dayAbbreviations.Saturday = 'Sat'

// you can even assign functions to object properties

dayAbbreviations.getAbbreviation = function(dayName) {
    const abbreviation = dayAbbreviations[dayName]
    // check if the abbreviation is 'truthy' (anything but false, 0, null, undefined)
    if (abbreviation) {
        return abbreviation
    } else {
        return 'Unknown day given'
    }
}

const saturdayName = 'Saturday'
const saturdayAbbreviated = dayAbbreviations.getAbbreviation(saturdayName)
console.log('Saturday\'s abbreviation is', saturdayAbbreviated)

const maydayAbbreviated = dayAbbreviations.getAbbreviation('Mayday');
console.log('Mayday\'s abbreviation is', maydayAbbreviated)

/**
 * Exercises
 * 1. Use the array and object above to print the abbreviation for the fifth day of the week.
 *    Hint: start by getting the fifth day of the week from the array, then use it to get the abbreviation
 * 2. Use an object to create a rulebook for the game we made in the conditionals lesson
 *    Hint: 
 *    const dieRollResults = {
 *        1: 'LOSER',
 *        ...
 *    }
 * 3. Use the above object in a function that takes a dieRollResult number and returns 'LOSER', 'TRY_AGAIN', or 'WINNER'
 *    Hint: you do not need to use conditionals anymore!
 */