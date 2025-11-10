/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
    let res = 0, sum = 0
    for(let i = 0; i<k; i++){
        sum+=arr[i]
    }
    if ((sum / k) >= threshold) res+=1
    for (let i = k; i<arr.length; i++){
        sum+=arr[i]
        sum-=arr[i-k]
        if ((sum / k) >= threshold) res+=1
    }
    return res
};