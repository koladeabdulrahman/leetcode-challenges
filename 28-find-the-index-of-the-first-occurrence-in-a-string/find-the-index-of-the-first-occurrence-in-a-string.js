/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let split = haystack.split(needle)
    if (split.length > 1) {
        return split[0].length
    }
    return -1
};