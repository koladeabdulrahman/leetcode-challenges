/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
    let map = {0:1}
    let count = 0
    let prefixRem = 0
    for(let i = 1; i<k; i++){
        map[i] = 0
    }
    for(let num of nums){
        prefixRem = (prefixRem + (num % k) + k) % k 
        count+= map[prefixRem]
        map[prefixRem]++
    }
    return count
};