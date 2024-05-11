/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function(arr, pieces) {
    let firsts = {}, res = []
    for(let arr of pieces){
        let first = arr[0]
        firsts[first] = arr 
    }
    for(let i = 0; i<arr.length;){
        let chars = firsts[arr[i]]
        console.log(chars)
        if(!chars)return false
        res.push(...chars)
        i+=chars.length
    }
    return res.join("") === arr.join("")
};