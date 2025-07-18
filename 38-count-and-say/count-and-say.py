class Solution:
    def countAndSay(self, n: int) -> str:
        if n == 1: return "1"
        count = 1
        word = str(count)
        while count < n:    
            temp = transform(word)
            word = temp
            count+=1
        return word
        
def transform(s: str) -> str:
    res = []
    count = 1
    for i in range(len(s) - 1):  # Stop at second-to-last character
        if s[i] == s[i + 1]:
            count += 1
        else:
            res.append(str(count) + s[i])
            count = 1
    # Handle the last group
    res.append(str(count) + s[-1])
    return "".join(res)