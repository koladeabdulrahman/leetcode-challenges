class Solution:
    def mostFrequentEven(self, nums: List[int]) -> int:
        evens  = {}
        nums = [num for num in nums if num % 2== 0]
        if not nums : return -1
        for num in nums : evens[num] = evens.get(num, 0) + 1
        res = []
        max_val = max(evens.values())
        for num in evens : 
            if evens[num] == max_val : res.append(num)
        return sorted(res)[0]
        