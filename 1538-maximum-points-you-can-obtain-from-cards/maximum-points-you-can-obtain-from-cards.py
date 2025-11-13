class Solution:
    def maxScore(self, cardPoints: List[int], k: int) -> int:
        r =  len(cardPoints) - k
        total = sum(cardPoints[r:])
        res = total
        for right in range(r, len(cardPoints)) : 
            total+=cardPoints[right - r] - cardPoints[right]
            res = max(res, total)
        return res