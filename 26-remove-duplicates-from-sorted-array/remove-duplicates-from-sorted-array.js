/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let slow = 0
    for(let i = 1; i< nums.length; i++){
        if(nums[i] !== nums[i-1]){
            slow++
            nums[slow] = nums[i]
        }
    }
    return slow+1
};