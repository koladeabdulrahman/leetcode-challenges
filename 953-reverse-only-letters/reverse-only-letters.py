class Solution:
    def reverseOnlyLetters(self, s: str) -> str:
        alphs, chars = set("QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"), list(s)
        start, end = 0, len(chars) - 1
        while start < end: 
            while chars[start] not in alphs and start < end : start+=1
            while chars[end] not in alphs and start < end : end-=1
            chars[start], chars[end] = chars[end], chars[start]
            start+=1; end-=1
        return "".join(chars)

        