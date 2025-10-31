/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    items1 = {}
    for (let char of nums1) items1[char] = true 
    items2 = {}
    for (let char of nums2) items2[char] = true 
    let res = []
    for (let char in items1){
        if (items2[char]) res.push(Number(char))
    }
    return res
};