/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []
    for(let char of s){
        if(char == "]" || char == ")" || char == "}"){
            if(char === "]" && stack[stack.length - 1] !== "["){return false}
            else if(char === ")" && stack[stack.length - 1] !== "(")return false
            else if(char === "}" && stack[stack.length - 1] !== "{")return false
            else stack.pop()
        }
        else{
            stack.push(char)
        }
    }
    return !stack.length
};