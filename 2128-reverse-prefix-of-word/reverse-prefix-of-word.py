class Solution:
    def reversePrefix(self, word: str, ch: str) -> str:
        if not word or ch not in word : return word
        index = word.index(ch)
        word = list(word)
        start, end = 0, index
        while start < end : 
            word[start], word[end] = word[end], word[start]
            start+=1; end-=1
        return "".join(word)