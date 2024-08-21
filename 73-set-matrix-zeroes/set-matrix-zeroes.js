/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let ads = []
    for(let row = 0; row<matrix.length; row++){
        for(let col = 0; col<matrix[0].length; col++){
            if(matrix[row][col] == 0)ads.push([row,col])
        }
    }
    for(let ad of ads){
        let [row, col] = ad
        Os(matrix, row, col)
    }
};

function Os(mat,r,c){
    for(let row  = 0; row<mat.length; row++){
        mat[row][c] = 0
    }
    for(let col  = 0; col<mat[0].length; col++){
        mat[r][col] = 0
    }
}