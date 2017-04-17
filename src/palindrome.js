//This is the Palindrome object constructor
function Palindrome(){
    this.alphabetRegex = (/^[a-zA-Z]+$/)
}

//Original, recursive approach
//Assume the midIndex has been provided
//Accept alphabet strings only, no special chars, numeric, etc
Palindrome.prototype.original = function(stringA,midIndex,stringB){

    if(stringA==null || this.alphabetRegex.test(stringA)===false)
        throw new Error('Invalid StringA Parameter')
    
    if(stringB!=null && stringB!=='')
        if(this.alphabetRegex.test(stringB)===false)
            throw new Error('Invalid StringB Parameter')

    if(midIndex<1 || typeof midIndex !== 'number')
        throw new Error('Invalid Index Parameter')

}

module.exports = new Palindrome