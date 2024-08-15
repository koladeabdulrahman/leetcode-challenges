/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let res = 0
    let min = Infinity
    nums.sort((a,b)=>a-b)

    for(let i = 0; i<nums.length; i++){
        let tag = target - nums[i]
        let [start, end] = [i+1, nums.length - 1]
        while(start<end){
            let sum = nums[start] + nums[end]
            let diff = Math.abs(tag - sum)
            if(diff < min) {
                min = diff
                res = nums[start] + nums[i] + nums[end]
            }
            // if(sum == target){
            //     start++
            //     end--
            // }
            else if (sum > tag) end--
            else start++
        }
    }
    return res
};