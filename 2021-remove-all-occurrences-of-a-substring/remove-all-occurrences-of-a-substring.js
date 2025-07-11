/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function(s, part) {
    while(s.includes(part)){
        let index = s.indexOf(part)
        let temp = s.slice(0,index) + s.slice(index+part.length)
        s = temp
    }
    return s
};