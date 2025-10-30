class Solution:
    def reverseWords(self, s: str) -> str:
        res = []
        s = s.split(" ")
        for char in s:
            char = list(char)
            char.reverse()
            word = "".join(char)
            res.append(word)
        return " ".join(res)
        