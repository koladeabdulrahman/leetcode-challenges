/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let diffs = {}
    for(let i = 0; i < nums.length; i++){
        let num = nums[i]
        let diff = target - num
        if(diffs[num] !== undefined) return [i, diffs[num]]
        diffs[diff] = i

    }
};