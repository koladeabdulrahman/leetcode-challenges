/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let chars = word.split("")
    let uppers = new Set('QWERTYUIOPASDFGHJKLZXCVBNM'.split(""))
    let lowers = new Set('qwertyuiopasdfghjklzxcvbnm'.split(""))
    if(chars.every(char => uppers.has(char)) || chars.every(char=>lowers.has(char))) return true
    if (uppers.has(chars[0]) && chars.slice(1).every(char => lowers.has(char)))return true
    return false
};