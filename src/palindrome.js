//This is the Palindrome object constructor
function Palindrome() {
    this.alphabetRegex = (/^[a-zA-Z]+$/)
    this.palindromeRegex = /^\([a-zA-Z]\)\([a-zA-Z]\)[a-zA-Z]\2\1/
}

//TODO: Consider abstracting Input checks to separate, reusable functions

//Original, recursive approach
//Assume the midIndex has been provided
//Accept alphabet strings only, no special chars, numeric, etc
Palindrome.prototype.original = function (stringA, midIndex, stringB) {

    if (stringA == null || this.alphabetRegex.test(stringA) === false)
        throw new Error('Invalid StringA Parameter')

    if (stringB != null && stringB !== '')
        if (this.alphabetRegex.test(stringB) === false)
            throw new Error('Invalid StringB Parameter')

    if (midIndex < 1 || typeof midIndex !== 'number' || midIndex > stringA.length)
        throw new Error('Invalid Index Parameter')

    if (stringA.length > midIndex)
        return this.original(stringA.slice(0, -1), midIndex, (stringB == null ? '' : stringB) + stringA.slice(-1))
    else
        if (stringB.length > stringA.length)
            return (stringA.toLowerCase() === stringB.slice(0, -1).toLowerCase())
        else
            return stringA.toLowerCase() === stringB.toLowerCase()

}

//Abstract the middle index point calculation
//Use same recursive function from Original approach, only a slight "improvement" by accepting a null mid point index ;)
Palindrome.prototype.originalImproved = function (stringA, midIndex, stringB) {

    if (stringA == null || this.alphabetRegex.test(stringA) === false)
        throw new Error('Invalid StringA Parameter')

    if (stringB != null && stringB !== '')
        if (this.alphabetRegex.test(stringB) === false)
            throw new Error('Invalid StringB Parameter')

    if (midIndex != null)
        if (midIndex < 1 || typeof midIndex !== 'number' || midIndex > stringA.length)
            throw new Error('Invalid Index Parameter')

    if (midIndex == null || stringA.length > midIndex)
        return this.originalImproved(stringA.slice(0, -1), midIndex == null ? Math.floor(stringA.length / 2) : midIndex, (stringB == null ? '' : stringB) + stringA.slice(-1))
    else
        if (stringB.length > stringA.length)
            return (stringA.toLowerCase() === stringB.slice(0, -1).toLowerCase())
        else
            return stringA.toLowerCase() === stringB.toLowerCase()

}

//Approach to use native JS API approaches - Targetting ES5
//Slice string into two parts -- Use Math.floor for odd length strings which rounds to whole number
//Use split to turn String to char array so we can use the reverse function
//Rejoing char array back as string for final comparison
Palindrome.prototype.JSAPI = function (input) {

    if(input == null || this.alphabetRegex.test(input) === false)
        throw new Error('Invalid String Parameter')

    return (input.slice(0,Math.floor(input.length/2)).split('').join('').toLowerCase() === input.slice(-Math.floor(input.length/2)).split('').reverse().join('').toLowerCase())

}

//TODO: See if this implementation is possible

//Possible approach to use a RegEx to check for a Palindrome?
//A Palindrome regex is not a true formal language as it cannot describe for non-arbitrary lengths
//Possible to use forloop to create a language for the given input length?
Palindrome.prototype.JSRegex = function (input) {

    if(input == null || this.alphabetRegex.test(input) === false)
        throw new Error('Invalid String Parameter')

    return this.palindromeRegex.test(input)

}

module.exports = new Palindrome