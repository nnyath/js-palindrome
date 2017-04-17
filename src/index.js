var Palindrome = require('./palindrome')

var params = {
    even : {
        valid : 'imalasagnahoggohangasalami',
        validIndex : Math.floor('imalasagnahoggohangasalami'.length/2),
        invalid : 'notvalid',
        invalidIndex : Math.floor('notvalid'.length/2)
    },
    odd : {
        valid : 'tacocat',
        validIndex : Math.floor('tacocat'.length/2),
        invalid : 'novalid',
        invalidIndex : Math.floor('novalid'.length/2)
    }
    
}

var results = {
}

results.originalValid = Palindrome.original(params.even.valid,params.even.validIndex)
results.originalInvalid = Palindrome.original(params.even.invalid, params.even.invalidIndex)

results.originalImproved = Palindrome.originalImproved(params.even.valid)
results.originalInvalid = Palindrome.originalImproved(params.even.invalid, params.even.invalidIndex)

console.log('Safe-Palindrome')
console.log('---------------')
console.log(results)

