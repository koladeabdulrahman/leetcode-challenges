class Solution:
    def countGoodSubstrings(self, s: str) -> int:
        if len(s) < 3 : return 0
        chars = {}
        for i in range(3) : 
            chars[s[i]] = chars.get(s[i], 0) + 1
        count = 0
        if len(chars) == 3 : count+=1
        for i in range(3, len(s)) : 
            chars[s[i-3]] -= 1
            if chars[s[i-3]] == 0 : del chars[s[i-3]]
            chars[s[i]] = chars.get(s[i] , 0) + 1
            if len(chars) == 3 : count+=1
        return count
        
        