/**
 * @param {number[]} fruits
 * @return {number}
 */
// var totalFruit = function(fruits) {
//     const map = {}
//     let ans = 0;
    
//     const add = e => {
//         map[e] = map[e]? map[e]++ : map[e] = 1
//     }
    
//     const remove = e => {
//         if(map[e] == 1) delete map[e]
//         else map[e]--
//     }
    
//     let r = 0;
//     let l = 0;
    
//     while(r < fruits.length) {
//         if(Object.keys(map).length <= 1 || 
//         (Object.keys(map).length === 2 && map[fruits[r]])) {
//             add(fruits[r]);
//             r++;
//         } else {
//             remove(fruits[l]);
//             l++;
//         }
        
//         ans = Math.max(ans, r - l);
//     }
    
//     return ans;
// };


var totalFruit = function(fruits) {
    let map = {}, l = 0, r = 0, ans = 0

    function add(fruit){
        map[fruit]? map[fruit]++ : map[fruit] = 1
    }

    function remove(fruit){
        map[fruit] == 1? delete map[fruit] : map[fruit]--
    }

    while(r < fruits.length){
        if(Object.keys(map).length >= 2 && !map[fruits[r]]){
            remove(fruits[l])
            l++
        }
        else{
            add( fruits[r])
            r++
        }
        ans = Math.max(ans, r - l)
    }

    return ans
};





// /**
//  * @param {number[]} fruits
//  * @return {number}
//  */
// var totalFruit = function (fruits) {
//     let max = 0;
//     let currentMax = 0;
//     let lastcount = 0;
//     let lastfruit = -1;
//     let secondlastfruit = -1;

//     for (let fruit of fruits) {
//         if (fruit == lastfruit || fruit == secondlastfruit) {
//             currentMax += 1;
//         } else {
//             currentMax = lastcount += 1;
//         }

//         if (fruit == lastfruit) {
//             lastcount++;
//         } else {
//             lastcount = 1;
//         }

//         if (fruit !== lastfruit) {
//             secondlastfruit = lastfruit;
//             lastfruit = fruit;
//         }
//         max = Math.max(currentMax, max)
//     }
//     return max;
// };