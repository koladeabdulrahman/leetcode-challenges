/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    people.sort((a,b)=>a-b)
    let count = 0
    let start = 0, end = people.length - 1
    while(start <= end){
        let rem = limit - people[end]
        end--
        if(people[start] <= rem)start++
        count++
    }
    return count
};