/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let start = nums[0], count = start, res = [], end
    if(!nums.length)return nums
    for(let i = 0; i<nums.length; i++){
        if(count !== nums[i] ){
            end = nums[i - 1]
            if(start !== end)res.push(`${start}->${end}`)
            else res.push(`${start}`)
            start = nums[i]
            count = start
        }
        count++
    }
    end = count - 1
    if(start !== end)res.push(`${start}->${end}`)
    else res.push(`${start}`)
    return res
};