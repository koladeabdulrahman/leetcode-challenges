/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let map = {}
    let stack = []
    let res = new Array(temperatures.length).fill(0)
    for(let i = 0; i< temperatures.length; i++){
        let temp = temperatures[i]
        while(stack.length && temp > temperatures[stack[stack.length - 1]]){
            let index = stack.pop()
            res[index] = i - index
        }
        stack.push(i)
    }
    return res
};