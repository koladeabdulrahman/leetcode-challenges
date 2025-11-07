class Solution:
    def maxFrequencyElements(self, nums: List[int]) -> int:
        res = 0
        counts = {}
        for num in nums : counts[num] = counts.get(num, 0) + 1
        nos = counts.values()
        max_num = max(nos)
        for key in nos : 
            if key == max_num : res+=key
        return res