/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    let map = {}
    for(let num of nums)map[num]? map[num]++ : map[num] = 1
    console.log(map)
    for (let key in map)if (map[key] % 2 !== 0)return false
    return true
};