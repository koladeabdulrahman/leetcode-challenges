/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    let str = "", res = ""
    for(let i = 0; i<Math.max(str1.length, str2.length); i++){
        if(str1[i] !== str2[i])break
        else str += str1[i]
        if((str.repeat(str1.length/str.length) === str1) && (str.repeat(str2.length/str.length) === str2) ) res = str
    }
    return res
};