/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let res = Array.from({length:n}, ()=>new Array(n))
    let top = 0
    let bottom = res.length - 1
    let left = 0
    let right = res[0].length - 1
    let count = 1
    let size = n * n
    while(count <= size){
        // left to right
        for(let col = left; col<=right && count <= size; col++){
            res[top][col] = count
            count++
        }
        top++

        // top to bottom
        for(let row = top; row<=bottom && count <= size; row++){
            res[row][right]  = count
            count++
        }
        right--

        // right to left
        for(let col = right; col>=left && count <= size; col--){
            res[bottom][col] = count
            count++
        }
        bottom--

        //bottom to top
        for(let row = bottom; row>=top && count <= size; row--){
            res[row][left] = count
            count++
        }
        left++
    }
    return res
};