var characterReplacement = function(s, k) {
    let freqs = {};
    let res = 0, left = 0, maxFreq = 0;

    for (let right = 0; right < s.length; right++) {
        freqs[s[right]] = (freqs[s[right]] || 0) + 1;
        maxFreq = Math.max(maxFreq, freqs[s[right]]);

        if ((right - left + 1) - maxFreq > k) {
            freqs[s[left]] -= 1;
            left++;
        }

        res = Math.max(res, right - left + 1);
    }

    return res;
};


