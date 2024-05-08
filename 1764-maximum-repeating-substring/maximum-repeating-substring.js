/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function(sequence, word) {
    if(sequence.indexOf(word) == -1) return 0
    let count = 1
    let seq = word
    while(sequence.indexOf(seq) !== -1){
        count++
        seq = word.repeat(count)
        if(sequence.indexOf(seq) == -1)break
    }
    return count - 1
};