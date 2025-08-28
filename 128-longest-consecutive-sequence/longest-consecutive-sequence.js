/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let set = new Set(nums), max = 0
    for(let num of set){
        if(!set.has(num - 1)){
            let count = 0
            let dig = num
            while(set.has(dig)){
                count++
                dig++
            }
        max = Math.max(count, max)
        }
    }
    return max
};