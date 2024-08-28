/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let map = {}, stack = [], res = []
    for(let num of nums2){
        while(num > stack[stack.length - 1] ){
            let popped = stack.pop()
            map[popped] = num
        }
        stack.push(num)
    }
    for(let char of nums1)map[char]? res.push(map[char]): res.push(-1)
    return res
};