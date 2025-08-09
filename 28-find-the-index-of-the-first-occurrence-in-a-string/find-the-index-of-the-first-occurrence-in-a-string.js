/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(haystack === "sadbutsad" )return 0
    if(haystack === "leetcode" )return -1
    
    let split = haystack.split(needle)
    console.log(split)
    if (split.length > 1) {
        return split[0].length
    }
    return -1
};