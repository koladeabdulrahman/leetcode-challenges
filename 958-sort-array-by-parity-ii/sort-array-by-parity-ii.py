class Solution:
    def sortArrayByParityII(self, nums: List[int]) -> List[int]:
        odds = [x for x in nums if x%2 != 0]
        evens = [x for x in nums if x%2 == 0]
        res = []
        for i in range(len(odds)) : 
           res.append(evens[i])
           res.append(odds[i])
        return res