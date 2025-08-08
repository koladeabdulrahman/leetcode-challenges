/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0, start = 0
    for(let i = 1; i<prices.length; i++){
        let prof = prices[i] - prices[start]
        max = Math.max(prof, max)
        if(prices[i] < prices[start]) start = i
    }
    return max
};