/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    citations.sort((a,b)=>b-a)
    console.log(citations)
    let count = 0
    for(let cit of citations){
        count++
        if(count > cit)return count - 1
    }
    return count
};