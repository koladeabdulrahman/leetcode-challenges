/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let pref = ""
    for(let i = 0; i<strs[0].length; i++){
        if(strs.every(str=>str[i] === strs[0][i]))pref+=strs[0][i]
        else return pref
    }
    return pref
};