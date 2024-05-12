/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let stack = []
    let res = new Array(temperatures.length).fill(0)
    for(let i = 0; i<temperatures.length; i++){
        let temp = temperatures[i]
        while(stack.length && temp>temperatures[stack[stack.length -1]]){
            let pop = stack.pop()
            let idx = i - pop
            res[pop] = idx
        }
        stack.push(i)
    }
    return res
};