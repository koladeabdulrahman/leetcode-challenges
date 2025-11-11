class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t): return False
        chars_T = {}
        for char in t : chars_T[char] = chars_T.get(char, 0) + 1
        for char in s:
            if (char not in chars_T) or (chars_T.get(char) == 0) : return False
            chars_T[char] = chars_T.get(char) - 1
        return True
        