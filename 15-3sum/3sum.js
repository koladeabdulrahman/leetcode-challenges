/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b)=>a-b)
    let res = []
    for(let i = 0; i<nums.length; i++){
        if(nums[i] == nums[i-1])continue
        let target = 0 - nums[i]
        let [start, end] = [i + 1, nums.length - 1]
        while(start< end){
            let sum = nums[start] + nums[end]
            if(sum == target){
                res.push([nums[i], nums[start], nums[end]])
                while(nums[start] == nums[start + 1])start++
                while(nums[end] == nums[end - 1])end--
                start++
                end--
            }
            else if(sum > target)end--
            else start++
        }
    }
    return res
};