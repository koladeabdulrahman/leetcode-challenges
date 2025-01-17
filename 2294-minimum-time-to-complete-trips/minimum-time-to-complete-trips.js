var minimumTime = function(time, totalTrips) {
    let low = 1;
    let high = Math.min(...time) * totalTrips
    let ans = 0;
    
    while(low <= high) {
        let mid = Math.floor(low + (high - low) / 2); // to prevent overflow
        console.log(mid)
        
        if(isPossible(time, mid, totalTrips)) {
            ans = mid
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return ans;
};

function isPossible(arr, mid, totalTrips) {
    let trips = 0;
    for (let i = 0; i < arr.length; i++) {
      trips += Math.floor(mid / arr[i]);
    }
    return trips >= totalTrips;
}