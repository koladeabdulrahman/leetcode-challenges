/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
var findLongestWord = function(s, dictionary) {
    dictionary.sort((a,b)=>{
        if (b.length !== a.length) return b.length - a.length
        return a.localeCompare(b)
    })
    for (let word of dictionary){
        if( isSubsequence(s, word))return word
    }
    return ""
};

function isSubsequence(word, sub){
    let slow = 0
    for (let fast = 0;fast<word.length; fast++){
        if (word[fast] == sub[slow]){
            slow++
        }
    }
    return slow == sub.length
}
