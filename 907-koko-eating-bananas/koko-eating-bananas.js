/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    piles.sort((a,b)=>a-b)
    let min = 1
    let max = Math.max(...piles)
    while(min<=max){
        let mid = Math.floor((min+max)/2)
        if(canEat(piles, mid, h)){
            res = mid
            max = mid - 1
        }
        else if(!canEat(piles, mid, h))min = mid + 1
    }
    return res
};

function canEat(pile, speed, time){
    let res = 0
    for(let h of pile){
        res+= Math.ceil(h/speed)
    }
    return res<=time
}
