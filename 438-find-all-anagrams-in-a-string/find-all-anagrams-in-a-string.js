/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let result = [];
    let count = 0;
    let map = {};
    for (let char of p) {
        map[char] ? map[char]++ : map[char] = 1;
    }

    // First loop to process the initial window
    for (let right = 0; right < p.length; right++) {
        if (right >= s.length) return result;
        let char = s[right];
        if (map[char] > 0) {
            count++;
        }
        if (char in map) {
            map[char]--;
        }
    }
    if (count === p.length) result.push(0);

    // Second loop to slide the window
    for (let right = p.length; right < s.length; right++) {
        let char = s[right];
        // Add the new character
        if (map[char] > 0) {
            count++;
        }
        if (char in map) {
            map[char]--;
        }
        // Remove the old character
        let left = right - p.length;
        let char_left = s[left];
        if (map[char_left] >= 0) {
            count--;
        }
        if (char_left in map) {
            map[char_left]++;
        }
        // Check if match
        if (count === p.length) result.push(left + 1);
    }
    return result;
};
