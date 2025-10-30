/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.split(" ")
    let res = []
    for (char of s){
        let word = char.split("")
        res.push(word.reverse().join(""))
    }
    return res.join(" ")
};