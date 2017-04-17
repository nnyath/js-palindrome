var Palindrome = require('./palindrome')
var params = require('./config')

var results = {
}

results.originalValidEven = {[params.even.validA] : Palindrome.original(params.even.validA,params.even.validIndex)}
results.originalValidOdd = {[params.odd.validA] : Palindrome.original(params.odd.validA,params.odd.validIndex)}

results.originalImprovedEven = {[params.even.validA] : Palindrome.originalImproved(params.even.validA)}
results.originalImprovedOdd = {[params.odd.validA] : Palindrome.originalImproved(params.odd.validA)}


console.log('Safe-Palindrome')
console.log('---------------')
console.log(results)

