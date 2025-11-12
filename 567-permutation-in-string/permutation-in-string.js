/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let count = 0;
    let map = {};
    for (let char of s1) {
        map[char] ? map[char]++ : map[char] = 1;
    }

    // First loop to process the initial window
    for (let right = 0; right < s1.length; right++) {
        let char = s2[right];
        if (map[char] > 0) {
            count++;
        }
        if (char in map) {
            map[char]--;
        }
    }
    if (count === s1.length) return true;

    // Second loop to slide the window
    for (let right = s1.length; right < s2.length; right++) {
        let char = s2[right];
        // Add the new character
        if (map[char] > 0) {
            count++;
        }
        if (char in map) {
            map[char]--;
        }
        // Remove the old character
        let left = right - s1.length;
        let char_left = s2[left];
        if (map[char_left] >= 0) {
            count--;
        }
        if (char_left in map) {
            map[char_left]++;
        }
        // Check if match
        if (count === s1.length) return true;
    }
    return false;
};