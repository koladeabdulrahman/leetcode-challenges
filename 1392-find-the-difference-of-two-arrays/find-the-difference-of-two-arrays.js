/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let chars1 = new Set(nums1)
    let chars2 = new Set(nums2)

    let res1 = [], res2 = []

    for(let char of chars1 ){
        if(!chars2.has(char))res2.push(char)
    }
    for(let char of chars2 ){
        if(!chars1.has(char))res1.push(char)
    }
    return [res2, res1]
};