/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let sum = 0
    let dup = Array.from({length: mat.length}, ()=>new Array(mat.length).fill(false))
    for(let i = 0; i<mat.length; i++){
        for(let j = 0; j<mat[0].length; j++){
            if(!dup[i][j]) {
                sum+= mat[i][j]
                dup[i][j] = true
            }
            i++
        }
    }
    for(let j = mat[0].length - 1; j>=0; j--){
        for(let i = 0; i<mat.length; i++){
            if(!dup[i][j]){
                sum+= mat[i][j]
                dup[i][j] = true
            }
            j--
        }
    }
    return sum
};