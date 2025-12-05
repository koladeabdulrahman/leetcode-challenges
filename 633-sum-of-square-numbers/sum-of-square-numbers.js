/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    let start = 0, end = Math.ceil(Math.sqrt(c))
    while(start<=end){
        let res = (start*start) + (end * end)
        if (res == c)return true
        if(res > c)end--
        else start++
    }
    return false
};