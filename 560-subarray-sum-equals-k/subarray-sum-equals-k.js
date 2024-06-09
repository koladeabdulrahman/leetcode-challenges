/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let map = {0:1}, count = 0, sum = 0
    for(let i = 0; i<nums.length; i++){
        sum+=nums[i]
        let diff = sum - k
        if(map[diff])count+=map[diff]
        map[sum]?map[sum]++:map[sum] = 1
    }
    return count
};