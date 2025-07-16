/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function(s, part) {
    let stack = [], lastChar = part[part.length - 1]
    for(let char of s){
        stack.push(char)
        if(lastChar === char && stack.length >= part.length){
            if(stack.slice(-part.length).join("") === part){
                stack.length-= part.length
            }
        }
    }
    return stack.join("")
};