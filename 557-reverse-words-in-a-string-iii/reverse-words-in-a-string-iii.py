class Solution:
    def reverseWords(self, s: str) -> str:
        res = []
        for c in s.split(" "):
            chars = list(c)
            chars.reverse()
            word = "".join(chars)
            res.append(word)
        return " ".join(res)

        