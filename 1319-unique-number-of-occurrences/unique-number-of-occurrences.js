/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let map = {}
    for(let num of arr){
        map[num]? map[num]++: map[num] = 1
    }
    let set = new Set()
    for(let num in map){
        if(set.has(map[num]))return false
        set.add(map[num])
    }
    return true
};