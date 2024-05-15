/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let res = []
    if(nums.length < 3)return res
    nums.sort((a,b)=>a-b)
    for(let i = 0; i<nums.length; i++){
        let start = i + 1, end = nums.length - 1
        let target = 0 - nums[i]
        if(i>0 && nums[i] == nums[i-1])continue
        while(start<end){
            let sum = nums[start] + nums[end]
            if(sum === target){
            res.push([nums[i], nums[start], nums[end]])
            while(nums[start] == nums[start+1])start++
            while(nums[end] == nums[end-1])end--
            start++
            end--
        }
        else if(sum>target) end--
        else start++
        }
    }
    return res
};

[ -4, -1, -1, 0, 1, 2 ]