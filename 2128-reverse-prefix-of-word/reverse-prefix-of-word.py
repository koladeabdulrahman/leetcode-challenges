class Solution:
    def reversePrefix(self, word: str, ch: str) -> str:
        if not word : return word
        k = word.index(ch) if ch in word else -1
        if k == -1 : return word
        word = list(word)
        start, end = 0, k
        while start < end :
            word[start], word[end] = word[end], word[start]
            start+=1; end-=1
        return "".join(word)
        