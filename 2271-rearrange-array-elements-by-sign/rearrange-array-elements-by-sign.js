/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let res = []
    let pos = nums.filter(num=>num>0)
    let neg = nums.filter(num=>num<0)
    let index = 0
    while(index<Math.max(pos.length, neg.length)){
        res.push(pos[index])
        res.push(neg[index])
        index++
    }
    return res
};