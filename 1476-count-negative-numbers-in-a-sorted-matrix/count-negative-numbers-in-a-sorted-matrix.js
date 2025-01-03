/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let count = 0
    for(let row of grid){
        let [start, end] = [0, row.length - 1]
        while(start<=end){
            let mid = Math.floor((start+end)/2)
            if(row[mid] < 0){
                count+= end - mid + 1
                end  = mid - 1
            }
            else start = mid + 1
        }
    }
    return count
};