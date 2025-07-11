class Solution:
    def removeOccurrences(self, s: str, part: str) -> str:
        while(part in s):
            index = s.find(part)
            temp = s[:index]+ s[index+len(part):]
            s = temp
        return s
        