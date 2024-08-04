/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let ans1 = new Set()
    let ans2 = new Set()

    let ans1map = {}
    let ans2map = {}

    for(let num of nums1)ans1map[num] = true
    for(let num of nums2)ans2map[num] = true

    for(let num of nums1)!ans2map[num] && ans1.add(num)
    for(let num of nums2)!ans1map[num] && ans2.add(num)

    let ans = [Array.from(ans1), Array.from(ans2)]

    return ans
};