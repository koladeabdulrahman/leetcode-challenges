/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b)=>a-b)
    let result = []
    for(let i = 0; i<nums.length; i++){
        if(nums[i] == nums[i-1]) continue
        let start = i + 1, end = nums.length - 1
        while(start<end){
            let sum = nums[start] + nums[end] + nums[i]
            if(sum === 0) {
                console.log(i, start, end)
                result.push( [nums[i], nums[start], nums[end]])
                while(nums[start] === nums[start + 1])start++
                while(nums[end] === nums[end - 1])end--
                start++
                end--
            }
            else if(sum > 0)end--
            else start++
        }
    }
    return result
};

