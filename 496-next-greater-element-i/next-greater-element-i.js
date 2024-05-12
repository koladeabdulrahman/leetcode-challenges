/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let map = {}
    let stack = [], res = []
    for(let i = 0; i<nums2.length; i++){
        let num = nums2[i]
        while(stack.length && num>stack[stack.length - 1]){
            let pop = stack.pop()
            map[pop] = num
        }
        stack.push(num)
    }
    for(let i = 0; i<nums1.length; i++){
        let num = nums1[i]
        map[num]? res[i] = map[num]: res[i] = -1
    }
    return res
};