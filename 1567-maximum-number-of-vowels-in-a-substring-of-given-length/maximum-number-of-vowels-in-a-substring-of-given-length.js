/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let vowels = new Set("aeiou".split('')), count = 0
    for (let i = 0; i<k; i++){
        if (vowels.has(s[i]))count++
    }
    let max = count
    for (let i = k; i<s.length; i++){
        if (vowels.has(s[i]))count++
        if (vowels.has(s[i-k]))count--
        max = Math.max(count, max)
    }
    return max
};