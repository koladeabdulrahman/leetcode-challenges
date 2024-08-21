/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
var restoreMatrix = function(rowSum, colSum) {
    const [m, n] = [rowSum.length, colSum.length]
    const res = Array.from({length:m}, ()=>new Array(n))
    for(let row = 0; row<res.length; row++){
        for(let col = 0; col<res[0].length; col++){
            let num = Math.min(rowSum[row], colSum[col])
            res[row][col] = num
            rowSum[row] -= num
            colSum[col] -= num
        }
    }
    return res
};