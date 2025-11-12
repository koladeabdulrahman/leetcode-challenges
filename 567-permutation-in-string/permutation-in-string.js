/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let count = 0, left = 0, map = {}
    for(let char of s1){
        map[char]? map[char]++: map[char] = 1
    }

    let right = 0
    while (right<s2.length){
        let char = s2[right]
        if(map[char] > 0){
            count++
        }
        if (char in map) map[char]--
        right++
        if(count == s1.length)return true
        if(right - left === s1.length){
            if(map[s2[left]] >= 0){
                count--
            }
            if (s2[left] in map) map[s2[left]]++
            left++
        }
    }
    return count == s1.length
};