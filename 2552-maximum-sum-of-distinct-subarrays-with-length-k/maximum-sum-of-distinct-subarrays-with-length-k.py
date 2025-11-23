class Solution:
    def maximumSubarraySum(self, nums: List[int], k: int) -> int:
        mapp, summ, maxx= {}, 0, 0
        for i in range(k):
            mapp[nums[i]] = mapp.get(nums[i], 0) + 1
            summ+= nums[i] 
        if (len(mapp) == k): maxx = max(summ, maxx)
        for i in range(k,len(nums)):
            summ+= nums[i] - nums[i-k]
            mapp[nums[i]] = mapp.get(nums[i], 0) + 1
            mapp[nums[i- k]]-=1
            if mapp[nums[i-k]] == 0 : del mapp[nums[i-k]]
            if (len(mapp) == k): maxx = max(summ, maxx)
        return maxx


        