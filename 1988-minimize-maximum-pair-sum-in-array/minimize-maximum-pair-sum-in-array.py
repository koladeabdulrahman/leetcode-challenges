class Solution:
    def minPairSum(self, nums: List[int]) -> int:
        if not nums : return 0
        min_sum = -float("inf")
        start, end = 0, len(nums) - 1
        nums = sorted(nums)
        while start < end :
            summ = nums[start] + nums[end]
            min_sum = max(min_sum, summ)
            start+=1; end-=1
        return min_sum
