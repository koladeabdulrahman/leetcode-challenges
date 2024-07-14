/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    var start = 0, end = arr.length - 1;
    while (start < end) {
        var mid = Math.floor((start + end) / 2);
        if (mid === 0) {
            return arr[0] >= arr[1] ? 0 : 1;
        }
        if (mid === end) {
            return arr[end - 1] >= arr[end - 2] ? end - 1 : end - 2;
        }

        if (arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1]) {
            return mid;
        }
        if (arr[mid] < arr[mid - 1]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return start;
};