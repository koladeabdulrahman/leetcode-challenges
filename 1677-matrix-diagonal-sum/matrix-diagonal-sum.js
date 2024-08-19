/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let sum = 0
    let grid = Array.from({length: mat.length}, ()=>new Array(mat.length).fill(false))
    for(let r = 0; r<mat.length; r++){
        for(let c = 0; c<mat[0].length; c++){
            if(isValid(grid,r,c)){
                sum+=mat[r][c]
            }
            grid[r][c] = true
            r++
        }
    }
    for(let c = mat[0].length -1; c>=0; c--){
        for(let r = 0; r<mat.length; r++){
            if(isValid(grid,r,c)){
                sum+=mat[r][c]
            }
            grid[r][c] = true
            c--
        }
    }
    return sum
};

function isValid(grid,r,c){
    return !grid[r][c]
}