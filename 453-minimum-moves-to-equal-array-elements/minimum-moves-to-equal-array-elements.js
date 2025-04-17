/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    let min = Math.min(...nums), res = 0
    for(let num of nums){
        res+= num - min
    }
    return res
};