/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    piles.sort((a,b)=>a-b)
    let min = 1, max = Math.max(...piles), ans
    while(min<=max){
        let mid = Math.floor((min+max)/2)
        if(canEat(piles, mid, h)){
            ans = mid
            max = mid - 1
        }
        else min = mid + 1
    }
    return ans
};

function canEat(bananas, speed, time){
    let totalTime = 0
    for(let ban of bananas){
        totalTime+= Math.ceil(ban/speed)
    }
    return totalTime <= time
}