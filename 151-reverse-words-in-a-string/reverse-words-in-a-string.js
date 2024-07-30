/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let res = ""
    s = s.trim().split(" ").reverse()
    for(let word of s){
        res+= word === ""? "": word + " "
    }
    return res.trim()
};