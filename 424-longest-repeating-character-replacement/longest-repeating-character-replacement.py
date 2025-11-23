class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        left, max_len, mapp, max_freq = 0, 0, {}, 0
        for right in range(len(s)):
            mapp[s[right]] = mapp.get(s[right], 0) + 1
            max_freq = max(mapp[s[right]], max_freq)
            length = right - left + 1
            while length - max_freq > k :
                mapp[s[left]]-=1
                if mapp[s[left]] == 0 : del mapp[s[left]]
                left+=1
                length = right - left + 1
            max_len = max(length, max_len)
        return max_len

