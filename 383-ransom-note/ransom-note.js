/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if (magazine.length < ransomNote.length) return false
    let mag = {}
    for(let char of magazine){
        mag[char]? mag[char]++: mag[char] = 1
    }
    for(let char of ransomNote){
        if(mag[char])mag[char]--
        else return false
    }
    return true
};