/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let index = {}, left = 0, max = 0
    for(let right = 0; right<s.length; right++){
        let char = s[right]
        if(index[char]  !== undefined && index[char]>= left){
            left = index[char] + 1
        }
        max = Math.max(right - left + 1, max)
        index[char] = right
    }
    return max
};
