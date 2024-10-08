/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let start = 0, index = 0, end = nums.length - 1
    while(index <= end && start<end){
        if(nums[index] == 0){
            swap(nums, index, start)
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

function swap(arr, start, end){
    [arr[start], arr[end]] = [arr[end], arr[start]]
}

