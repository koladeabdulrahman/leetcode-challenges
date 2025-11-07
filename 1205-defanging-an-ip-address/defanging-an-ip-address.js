/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let res = ""
    for(let char of address){
        if (char === ".")res+= "[.]"
        else res+= char
    }
    return res
};