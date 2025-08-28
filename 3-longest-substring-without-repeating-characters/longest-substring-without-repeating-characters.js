/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let begin = 0, max = 0, map = {}
    for(let end = 0; end<s.length; end++){
        if(map[s[end]] !== undefined && map[s[end]] >= begin){
            begin = map[s[end]] + 1
        }
        let len = end - begin + 1
        max = Math.max(len, max)
        map[s[end]] = end
    }
    return max
};