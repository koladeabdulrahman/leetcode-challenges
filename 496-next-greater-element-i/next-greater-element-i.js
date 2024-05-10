/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const map ={}; // map for next greater element
    const stack = [];
    for (let num of nums2) {
        while (stack.length && stack[stack.length - 1] < num) { 
            map[stack.pop()] =  num;
        }
        stack.push(num);
    }
    for (let i = 0; i < nums1.length; i++) { 
        nums1[i] = map[nums1[i]] ? map[nums1[i]] : -1;
    }
    return nums1;
}
