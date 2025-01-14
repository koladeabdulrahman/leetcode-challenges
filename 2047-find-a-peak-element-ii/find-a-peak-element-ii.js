/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findPeakGrid = function(matrix) {
    const getMaxElement = (matrix, mid) => {
        let index;
        let max = -Infinity

        for (let row = 0; row < matrix.length; row++) {
            let elm = matrix[row][mid];
            if (elm > max) {
                max = elm
                index = row;
            }
        }
        
        return index;
    };

    const n = matrix.length;
    const m = matrix[0].length;

    let start = 0;
    let end = m - 1;

    while (start <= end) {
        const mid = start + Math.floor((end - start) / 2);

        let row = getMaxElement(matrix, mid);
        let left = -1;
        let right = -1;

        // handling edge cases
        if (mid - 1 >= 0) {
            left = matrix[row][mid - 1];
        }

        if (mid + 1 < m) {
            right = matrix[row][mid + 1];
        }

        // we find peak element
        if (matrix[row][mid] > left && matrix[row][mid] > right) {
            return [row, mid];
        }

        // our peak is on the left side of mid so eliminate the right part
        else if (matrix[row][mid] > right) {
            end = mid - 1;
        }

        // our peak is on the right side of mid so eliminate the left part
        else {
            start = mid + 1;
        }
    }

    return [-1, -1];
};


// var findPeakGrid = function(mat) {
//     function findMaxRow(grid, mid){
//         let max = -Infinity, index
//         for(let row = 0; row<grid.length; row++){
//             if(grid[row][mid] > max){
//                 max = row
//                 index = row
//             }
//         }
//         return index
//     }
//     let [start, end] = [0, mat.length - 1]
//     while(start<=end){
//         let mid = Math.floor((start+end)/2)
//         if(mat[maxRow][mid] > left && mat[maxRow][mid] > right)return [maxRow, mid]
//         let maxRow = findMaxRow(mat, mid)
//         let left = -1, right = -1
//         else if(mat[maxRow][mid] > right)end = mid - 1
//         else start = mid + 1
//     }
//     return [-1,-1]
// };