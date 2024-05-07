/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    let str = ""
    for(let i = 0; i<s.length - 1; i++){
        str+=s[i]
        let len = s.length / str.length
        if(str.repeat(len) === s){
            console.log(str.repeat(len), "here", s)
            return true
        }
    }
    return false
};