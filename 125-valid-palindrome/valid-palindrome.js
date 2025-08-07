/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^A-Za-z0-9]/g, "")
    if(s.split("").join("") === s.split("").reverse().join(""))return true
    return false
};