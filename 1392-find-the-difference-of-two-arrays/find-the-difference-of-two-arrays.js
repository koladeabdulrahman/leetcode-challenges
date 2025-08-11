/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let set1 = new Set(...[nums2])
    let set2 = new Set(...[nums1])
    let result = []
    let res1 = []
    let res2 = []
    for(let char of set2){
        if(!set1.has(char))res1.push(char)
    }
    for(let char of set1){
        if(!set2.has(char))res2.push(char)
    }
    return [res1, res2]
};