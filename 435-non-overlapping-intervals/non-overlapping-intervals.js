/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    let count = 0
    intervals.sort((a,b)=>a[1] - b[1]) 
    let end = intervals[0][1]
    for(let i = 1; i<intervals.length; i++){
        let right = intervals[i][0]
        if(right < end){
            count++
        }
        else end = intervals[i][1]
        
    }
    return count
};