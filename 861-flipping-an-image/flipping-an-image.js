/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    let res = []
    for(let row of image){
        let flip = row.reverse()
        let inv = flip.map(char=>char==0?1:0)
        res.push(inv)
    }
    return res
};

function col(mat){
    let res = []
    for(let row = 0; row<mat.length; row++){
        for(let col = 0; col<mat[0].length; col++){
            res.push(mat[row][col])
        }
    }
    return res
}
function row(mat){
    let res = []
    for(let col = 0; col<mat[0].length; col++){
        for(let row = 0; row<mat.length; row++){
            res.push(mat[row][col])
        }
    }
    return res
}