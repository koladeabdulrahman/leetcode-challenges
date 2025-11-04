class Solution:
    def partitionLabels(self, s: str) -> List[int]:
        endInds = {}
        for i, char in enumerate(s) : endInds[char] = i
        size, res, end = 0, [], 0
        for i, char in enumerate(s) : 
            size+=1
            end = max(endInds[char], end)
            if i == end :
                res.append(size)
                size = 0
        return res