/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let result = Infinity
    nums.sort((a,b)=>a-b)
    for(let i = 0; i<nums.length - 2; i++){
        let start = i+1, end = nums.length - 1
        while(start<end){
            let sum = nums[i]+nums[start]+nums[end]
            result = compare(target, sum, result)? sum : result
            if(sum == target)return sum
            else if(sum>target)end--
            else start++
        }
    } 
    return result
};


function compare(target, sum, othersum){
    return Math.abs(target - sum) < Math.abs(target - othersum)
}
