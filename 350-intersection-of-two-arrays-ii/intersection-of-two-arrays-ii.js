/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let items1 = {}, items2 = {}, res = []
    for (let char of nums1) items1[char]? items1[char]++: items1[char] = 1
    for (let char of nums2) items2[char]? items2[char]++: items2[char] = 1
    for (let item in items1){
        if (items2[item]){
            count = Math.min(items2[item], items1[item])
            while(count > 0){
                res.push(Number(item))
                count--
            }
        }
    }
    return res
};