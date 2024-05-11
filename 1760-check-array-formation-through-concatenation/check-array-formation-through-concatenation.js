/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function(arr, pieces) {
    let piecewithStart = {}
    let res = []
    for(let piece of pieces){
        let first = piece[0]
        piecewithStart[first] = piece
    }
    for(let i = 0; i<arr.length;){
        let num = arr[i]
        let piece = piecewithStart[num]
        if(!piece)return false
        res.push(...piece)
        i+=piece.length
    }
    return res.join("") === arr.join("")
};