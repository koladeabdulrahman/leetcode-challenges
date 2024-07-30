/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let sum = 0
    let alph = {
        "I": 1,
        "V"  : 5,
        "X":   10,
        'L':   50,
        'C':   100,
        'D':   500,
        'M':   1000
    }
    for(let i= 0; i<s.length; i++){
        let char = alph[s[i]], nextChar = alph[s[i+1]]
        if(char<nextChar){
            sum += nextChar - char
            i++
        }
        else sum +=char
    }
    return sum
};