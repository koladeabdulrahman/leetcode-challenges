/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = {}
    for(let char of nums){
        map[char]? map[char]++: map[char] = 1
        if(map[char] > nums.length/2)return char
    }
};