/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let window = haystack.slice(0,needle.length)
    if(window == needle)return 0
    for(let i = needle.length; i<=haystack.length; i++){
        console.log(window)
        if(window == needle)return i - needle.length
        window = window.slice(1)+ haystack[i]
    }
    return -1
};
