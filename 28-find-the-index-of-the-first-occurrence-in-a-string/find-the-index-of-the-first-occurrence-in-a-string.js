/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let wind = haystack.slice(0,needle.length)
    if(wind === needle)return 0
    for(let i = needle.length; i<haystack.length; i++){
        let temp =  wind.slice(1) + haystack[i]
        console.log(temp)
        if(temp === needle){
            console.log(i, temp,"here")
            return i - needle.length + 1
        }
        wind = temp
    }
    return -1
};