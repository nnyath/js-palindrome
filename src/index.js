var Palindrome = require('./palindrome')

var params = {
    valid : 'tacocat',
    validIndex : Math.floor('tacocat'.length/2),
    invalid : 'notvalid',
    invalidIndex : Math.floor('notvalid'.length/2)
}

var results = {
}

results.originalValid = Palindrome.original(params.valid,params.validIndex)
results.originalInvalid = Palindrome.original(params.invalid, params.invalidIndex)

console.log('Safe-Palindrome')
console.log('---------------')
console.log(results)