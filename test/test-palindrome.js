var expect = require('chai').expect
var assert = require('chai').assert
var Palindrome = require('../src/palindrome.js')

//Refactor to have clearer param names
var params = {
    even : {
        validA: 'imalasagnahoggohangasalami',
        validB: '',
        validIndex: Math.floor('imalasagnahoggohangasalami'.length / 2),
        nonA: 'test',
        nonB: '',
        nonIndex: Math.floor('test'.length / 2),
        invalidA: 'Tester80',
        invalidB: 1234,
        invalidIndex: 0,
        invalidIndexTwo: '0', 
    },
    odd : {
        validA: 'tacocat',
        validB: '',
        validIndex: Math.floor('tacocat'.length / 2),
        nonA: 'test',
        nonB: '',
        nonIndex: Math.floor('test'.length / 2),
        invalidA: 'Test1',
        invalidB: 123,
        invalidIndex: 0,
        invalidIndexTwo: '0',
    }

}

describe('Original - Input Args', function () {

    it('should error on invalid StringA input', function () {
        expect(Palindrome.original.bind(Palindrome, params.even.invalidA, params.even.validIndex, params.even.validB)).to.throw('Invalid StringA Parameter')
        expect(Palindrome.original.bind(Palindrome, undefined, params.even.validIndex, params.even.validB)).to.throw('Invalid StringA Parameter')
        expect(Palindrome.original.bind(Palindrome, null, params.even.validIndex, params.even.validB)).to.throw('Invalid StringA Parameter')
    })

    it('should error on invalid StringB input', function () {
        expect(Palindrome.original.bind(Palindrome, params.even.validA, params.even.validIndex, params.even.invalidB)).to.throw('Invalid StringB Parameter')
    })

    it('should error on invalid Index input', function () {
        expect(Palindrome.original.bind(Palindrome, params.even.validA, params.even.invalidIndex, params.even.validB)).to.throw('Invalid Index Parameter')
        expect(Palindrome.original.bind(Palindrome, params.even.validA, params.even.invalidIndex2, params.even.validB)).to.throw('Invalid Index Parameter')
        expect(Palindrome.original.bind(Palindrome, params.even.validA, params.even.validA.length + 1, params.even.validB)).to.throw('Invalid Index Parameter')
    })

})

describe('Original - Valid Palindrome', function () {

    it('should return true for valid even length palindromes', function () {
        assert.isTrue(Palindrome.original(params.even.validA, params.even.validIndex, params.even.validB))
        assert.isTrue(Palindrome.original(params.even.validA, params.even.validIndex))
    })

    it('should return false for invalid even length palindrome', function () {
        assert.isFalse(Palindrome.original(params.even.nonA,params.even.nonIndex))
    })

    it('should return true for valid odd length palindromes', function () {
        assert.isTrue(Palindrome.original(params.odd.validA, params.odd.validIndex, params.odd.validB))
        assert.isTrue(Palindrome.original(params.odd.validA, params.odd.validIndex))
    })

    it('should return false for invalid odd length palindrome', function () {
        assert.isFalse(Palindrome.original(params.odd.nonA,params.odd.nonIndex))
    })

})

describe('Original Improved - Input Args', function () {

    it('should error on invalid StringA input', function () {
        expect(Palindrome.original.bind(Palindrome, params.odd.invalidA, params.odd.validIndex, params.odd.validB)).to.throw('Invalid StringA Parameter')
        expect(Palindrome.original.bind(Palindrome, undefined, params.odd.validIndex, params.odd.validB)).to.throw('Invalid StringA Parameter')
        expect(Palindrome.original.bind(Palindrome, null, params.odd.validIndex, params.odd.validB)).to.throw('Invalid StringA Parameter')
    })

    it('should error on invalid StringB input', function () {
        expect(Palindrome.original.bind(Palindrome, params.odd.validA, params.odd.validIndex, params.odd.invalidB)).to.throw('Invalid StringB Parameter')
    })

    it('should error on invalid Index input', function () {
        expect(Palindrome.original.bind(Palindrome, params.odd.validA, params.odd.invalidIndex, params.odd.validB)).to.throw('Invalid Index Parameter')
        expect(Palindrome.original.bind(Palindrome, params.odd.validA, params.odd.invalidIndex2, params.odd.validB)).to.throw('Invalid Index Parameter')
        expect(Palindrome.original.bind(Palindrome, params.odd.validA, params.odd.validA.length + 1, params.odd.validB)).to.throw('Invalid Index Parameter')
    })

})

describe('Original Improved - Valid Palindrome', function () {

    it('should return true for valid even length palindromes', function () {
        assert.isTrue(Palindrome.originalImproved(params.even.validA))
        assert.isTrue(Palindrome.originalImproved(params.even.validA))
    })

    it('should return false for invalid even length palindrome', function () {
        assert.isFalse(Palindrome.originalImproved(params.even.nonA))
    })

    it('should return true for valid odd length palindromes', function () {
        assert.isTrue(Palindrome.originalImproved(params.odd.validA))
        assert.isTrue(Palindrome.originalImproved(params.odd.validA))
    })

    it('should return false for invalid odd length palindrome', function () {
        assert.isFalse(Palindrome.originalImproved(params.odd.nonA))
    })

})

