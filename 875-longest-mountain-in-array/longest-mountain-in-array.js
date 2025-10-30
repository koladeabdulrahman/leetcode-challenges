/**
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function(arr) {
    let max = 0
    for (let i = 1; i<arr.length; i++){
        if ((arr[i] > arr[i-1]) && (arr[i] > arr[i+1])){
            let left = i - 1, right = i+1
            while(arr[left - 1] < arr[left] && left >= 0){
                left--
            }
            while(arr[right] < arr[right - 1] && right < arr.length){
                right++
            }
            max = Math.max(max, right - left)
        }
    }
    return max
};