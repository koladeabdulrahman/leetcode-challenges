/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let begin = 0, res = 0, k = 1
    for(let end = 0; end<nums.length; end++){
        if(nums[end]== 0)k--
        if(k<0){
            if(nums[begin] == 0){
                k++
            }
            begin++
        }
        let len = end - begin
        res = Math.max(len, res)
    }
    return res
};