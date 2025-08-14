/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0
    let start = 0, end = height.length - 1
    while(start<end){
        let area = (Math.min(height[start], height[end])) * (end - start)
        max = Math.max(max, area)
        if(height[start] < height[end])start++
        else end--
    }
    return max
};