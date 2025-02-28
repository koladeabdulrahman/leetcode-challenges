var longestSubstring = function (s, k) {
    if (!s || !s.length) {
        return 0
    }

    const freq = {}

    for (const c of s) {
        freq[c] = freq[c] + 1 || 1
    }

    for (let i = 0; i < s.length; i++) {
        const c = s[i]

        if (freq[c] < k) {
            return Math.max(
                longestSubstring(s.slice(0, i), k),
                longestSubstring(s.slice(i + 1), k)
            )
        }
    }

    return s.length
};