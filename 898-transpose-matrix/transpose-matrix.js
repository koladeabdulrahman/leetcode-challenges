/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let res = []
    for(let col = 0; col <matrix[0].length; col++){
        let column = []
        for(let row = 0; row<matrix.length; row++){
            column.push(matrix[row][col])
        }
        res.push(column)
    }
    return res;
};