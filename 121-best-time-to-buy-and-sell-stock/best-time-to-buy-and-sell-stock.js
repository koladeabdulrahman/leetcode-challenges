/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let left = 0, max = 0
    for(let i = 1; i<prices.length; i++){
        if(prices[i] > prices[left]){
            max = Math.max(max, prices[i] - prices[left])
            if(prices[i] < prices[left])left = i
        }
        else left = i
    }
    return max
};
