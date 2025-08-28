/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if(magazine.length < ransomNote.length || !magazine)return false
    let map = {}
    for(let char of magazine){
        map[char]? map[char]++: map[char] = 1
    }
    for(let char of ransomNote){
        if(!map[char])return false
        map[char]--
    }
    return true
};