/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    let map = {}
    for(let char of nums){
        map[char]? map[char]++ : map[char] = 1
    }
    return nums.sort((a,b)=>map[a] - map[b] || b - a)
};