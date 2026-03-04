class Solution:
    def frequencySort(self, s: str) -> str:
        char = [c for c in s]
        counts = {}
        for c in char:
            counts[c] = counts.get(c, 0) + 1
        char.sort(key = lambda x : (-counts[x], x))
        return "".join(char)