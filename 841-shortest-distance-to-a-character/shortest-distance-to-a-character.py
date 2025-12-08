class Solution:
    def shortestToChar(self, s: str, c: str) -> List[int]:
        slow = s.index(c)
        res = []
        for fast in range(len(s)):
            if s[fast] == c : 
                slow = fast
            res.append(abs(fast - slow))
        slow = s.rfind(c)
        for fast in range(len(s) -1, -1, -1):
            if s[fast] == c : 
                slow = fast
            res[fast] = min(abs(fast - slow), res[fast])
        return res

        