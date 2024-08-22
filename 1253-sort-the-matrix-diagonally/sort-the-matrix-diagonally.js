/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function(mat) {
    let map = {}
    for(let row = 0; row<mat.length; row++){
        for(let col = 0; col<mat[0].length; col++){
            if(!map[row-col])map[row-col] = []
            map[row-col].push(mat[row][col])
        }
    }
    for(let key in map)map[key].sort((a,b)=>a-b)
    for(let row = 0; row<mat.length; row++){
        for(let col = 0; col<mat[0].length; col++){
            mat[row][col] = map[row-col].shift()
        }
    }
    return mat
};