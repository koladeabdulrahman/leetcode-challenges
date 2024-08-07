/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let res = ""
    for(let i = 0; i< strs[0].length; i++){
        let char = strs[0][i]
        if(strs.every(str=>str[i] == char)){
            res+=char
        }
        else break
    }
    return res
};