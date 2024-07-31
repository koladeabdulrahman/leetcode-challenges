/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let [start, end] = [0, height.length - 1]
    let max = 0
    while(start<end){
        let [length, breadth] = [end-start, Math.min(height[start], height[end])]
        let area = length * breadth
        max = Math.max(max, area)
        if(height[end] > height[start])start++
        else end--
    }
    return max
};