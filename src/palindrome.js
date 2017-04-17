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

    if(midIndex<1 || typeof midIndex !== 'number' || midIndex>stringA.length)
        throw new Error('Invalid Index Parameter')
    
    if(stringA.length-1>midIndex)
        return this.original(stringA.slice(0,-1),midIndex, (stringB==null?'':stringB) + stringA.slice(-1))
    else
        if(stringA.length>stringB.length)
            return (stringA.slice(0,-1).toLowerCase()===stringB.toLowerCase())
        else
            return stringA.toLowerCase()===stringB.toLowerCase()

}

module.exports = new Palindrome