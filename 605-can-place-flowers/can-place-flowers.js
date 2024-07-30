/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    for(let i = 0; i< flowerbed.length; i++){
        let [pBef, pot, pAft] = [flowerbed[i-1] || 0, 
        flowerbed[i] || 0, flowerbed[i+1] || 0]
        if(pot == 0 && pBef !== 1 && pAft!== 1){
            flowerbed[i] = 1
            n--
        }
    }
    return n<=0
};