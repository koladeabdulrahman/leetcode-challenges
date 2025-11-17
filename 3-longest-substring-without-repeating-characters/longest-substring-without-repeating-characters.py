class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        seen_chars_indices, begin, max_len = {}, 0, 0
        for end in range(len(s)):
            while s[end] in seen_chars_indices and seen_chars_indices[s[end]] >= begin:
                begin = seen_chars_indices[s[end]] + 1
            length = end - begin + 1
            max_len = max(max_len, length)
            seen_chars_indices[s[end]] = end
        return max_len