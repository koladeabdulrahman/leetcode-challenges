/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findPeakGrid = function(mat) {
    function topRow(grid, mid){
        let ans, max = -Infinity
        for(let row = 0; row<grid.length; row++){
            let elem = grid[row][mid]
            if(elem > max){
                max = elem
                ans = row
            }
        }
        return ans
    }

    let start = 0, end = mat[0].length - 1
    while(start<=end){
        let mid = Math.floor((start+end)/2)
        let row = topRow(mat, mid)
        let [left, right] = [-1,-1]
        if(mid-1>=0) left = mat[row][mid - 1]
        if(mid+1<mat[0].length) right = mat[row][mid + 1]
        if(mat[row][mid] > left && mat[row][mid] > right)return [row, mid]
        else if(mat[row][mid] > left)start = mid + 1
        else end = mid - 1
    }
    return [-1,-1]
};