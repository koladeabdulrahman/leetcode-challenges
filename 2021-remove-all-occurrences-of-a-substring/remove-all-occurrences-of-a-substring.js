/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function(s, part) {
    let stack = []
    for(let char of s){
        stack.push(char)
        let word = stack.slice(stack.length - part.length).join("")
        if(word === part){
            let n = part.length
            while(n > 0){
                stack.pop()
                n--
            }
        }
    }
    return stack.join("")
};