/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let indices = {}
    for(let i = 0; i<nums.length; i++){
        if(indices[nums[i]] !== undefined && i - indices[nums[i]] <= k)return true
        indices[nums[i]] = i
    }
    return false
};