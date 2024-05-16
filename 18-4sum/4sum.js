/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a,b)=>a-b)
    let result = []
    for(let i = 0; i<nums.length - 3; i++){
        for(let j = i+1; j<nums.length - 2; j++){
            let start = j+1, end = nums.length - 1
            while(start<end){
                let sum = nums[i]+nums[j]+nums[start]+nums[end]
                if(sum === target){
                    result.push([nums[i], nums[j], nums[start], nums[end]])
                    while(nums[start] == nums[start+1])start++
                    while(nums[end] == nums[end-1])end--
                    start++
                    end--
                }
                else if(sum>target)end--
                else start++
            }
            while(nums[j] == nums[j+1])j++
        }
        while(nums[i] == nums[i+1])i++
    }
    return result
};

// var fourSum = function(nums, target) {
//     nums.sort((a, b) => a - b);
//     const result = []
    
//     for(let i = 0; i < nums.length - 3; i++) {
//         for(let j = i + 1; j < nums.length - 2; j++) {
//             let low = j + 1;
//             let high = nums.length - 1

//             while(low < high) {
//                 const sum = nums[i] + nums[j] + nums[low] + nums[high];
//                 if(sum === target) {
//                     result.push([nums[i], nums[j], nums[low], nums[high]])
//                     while(nums[low] === nums[low + 1]) low++;
//                     while(nums[high] === nums[high - 1]) high--;
//                     low++;
//                     high--;
//                 } else if(sum < target) {
//                     low++
//                 } else {
//                     high--
//                 }
//             }   
//             while(nums[j] === nums[j + 1]) j++;
//         }   
//         while(nums[i] === nums[i + 1]) i++;
//     }
//     return result
// };