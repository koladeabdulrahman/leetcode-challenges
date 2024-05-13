/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let start = 0, end = nums.length - 1, index = 0
    while(index<=end && start<end){
        if(nums[index] == 0){
            swap(nums, start, index)
            start++
            index++
        }
        else if(nums[index] == 2){
            swap(nums, index, end)
            end--
        }
        else index++
    }
};

function swap(arr, idx1, idx2){
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}