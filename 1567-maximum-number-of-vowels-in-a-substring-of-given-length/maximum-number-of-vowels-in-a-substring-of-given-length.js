/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let window = ""
    function isVowel(char){
        let chars = {"a":true, "e":true, "i":true, "o":true, "u":true}
        return chars[char] !== undefined
    }

    let count = 0

    for(let i = 0; i<k; i++){
        if(isVowel(s[i]))count++
        window+= s[i]
    }

    let max = count
    for(let i = k; i<s.length; i++){
        let char = s[i]
        if(isVowel(char)){
            count++
        }
        if(isVowel(s[i - k])){
            count--
        }
        max = Math.max(count, max)
    }
    return max
};