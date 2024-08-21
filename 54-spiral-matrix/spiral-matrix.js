/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let top = 0
    let right = matrix[0].length - 1
    let bottom = matrix.length - 1
    let left = 0
    let size = matrix.length * matrix[0].length
    let res = []
    while(res.length < size){
        // top row, left to right
        for(let col = left; col<=right && res.length < size; col++){
            res.push(matrix[top][col])
        }
        top++
        // right col, top to bottom
        for(let row = top; row<=bottom && res.length < size; row++){
            res.push(matrix[row][right])
        }
        right--
        // bottom row, right to left
        for(let col = right; col>=left && res.length < size; col--){
            res.push(matrix[bottom][col])
        }
        bottom--
        // left col, bottom to top
        for(let row = bottom; row>=top && res.length < size; row--){
            res.push(matrix[row][left])
        }
        left++
    }
    return res
};