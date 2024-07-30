/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    let str = ""
    let res = ""
    let len = Math.max(str1.length, str2.length)
    for(let i = 0; i<len; i++){
        if(str1[i] == str2[i] ){
            str+=str1[i]
        }
        else break
        if(str.repeat(str1.length/str.length) === str1 &&
        str.repeat(str2.length/str.length) === str2
        ) res = str
    }
    return res
};