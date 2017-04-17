var expect = require('chai').expect
var assert = require('chai').assert
var Palindrome = require('../src/palindrome.js')

var params = {
    validA: 'tacocat',
    validB: '',
    validIndex: 'tacocat'.length,
    invalidA: 'Test1',
    invalidB: '123',
    invalidIndex: 0,
    invalidIndexTwo: '0'
}

describe('Original - Input Args', function () {

    it('should error on invalid StringA input', function () {
        expect(Palindrome.original.bind(Palindrome, params.invalidA, params.validIndex, params.validB)).to.throw('Invalid StringA Parameter')
        expect(Palindrome.original.bind(Palindrome, undefined, params.validIndex, params.validB)).to.throw('Invalid StringA Parameter')
        expect(Palindrome.original.bind(Palindrome, null, params.validIndex, params.validB)).to.throw('Invalid StringA Parameter')
    })

    it('should error on invalid StringB input', function () {
        expect(Palindrome.original.bind(Palindrome, params.validA, params.validIndex, params.invalidB)).to.throw('Invalid StringB Parameter')
    })

    it('should error on invalid Index input', function () {
        expect(Palindrome.original.bind(Palindrome, params.validA, params.invalidIndex, params.validB)).to.throw('Invalid Index Parameter')
        expect(Palindrome.original.bind(Palindrome, params.validA, params.invalidIndex2, params.validB)).to.throw('Invalid Index Parameter')
    })

})