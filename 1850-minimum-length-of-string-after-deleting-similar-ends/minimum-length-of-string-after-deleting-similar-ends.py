class Solution:
    def minimumLength(self, s: str) -> int:
        start , end = 0, len(s) - 1
        while start <= end: 
            char = s[end]
            if s[start] != s[end] or start == end:
                break
            while start <= end and  s[start] == char: start+=1
            while start <= end and s[end] == char: end-=1
        return end - start + 1
        