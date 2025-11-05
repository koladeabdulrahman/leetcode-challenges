/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let map = {}, res = 0
    for (let num of nums){
        map[num]? map[num]++: map[num] = 1
    }
    for (let char in map){
       if (map[char] == 1 ) res+=Number(char)
    }
    return res
};