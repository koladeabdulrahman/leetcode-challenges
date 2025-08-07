/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let count = 100
    while(count > 0){
        count--
        let temp = convert(n)
        if(temp == 1)return true
        n = temp
    }
    return false
};

function convert(numb){
    let temp = numb.toString().split("").map(char=>parseInt(char))
    let num = 0;
    temp.forEach(char=>num += (char*char))
    return num
}

