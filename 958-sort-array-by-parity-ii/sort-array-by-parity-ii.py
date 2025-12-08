class Solution:
    def sortArrayByParityII(self, nums: List[int]) -> List[int]:
        odds = [c for c in nums if c % 2 != 0]
        evens = [c for c in nums if c % 2 == 0]
        res = []
        for i in range(len(odds)) : 
            res.append(evens[i])
            res.append(odds[i])
        return res
        