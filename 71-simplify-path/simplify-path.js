/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let stack = path.split("/").filter(char=>char!=="." && char!=="")
    let res = []
    for(let char of stack){
        if(char == "..")res.pop()
        else res.push(char)
    }
    return "/"+ res.join("/")
};