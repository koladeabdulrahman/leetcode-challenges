class Solution:
    def mostFrequent(self, nums: List[int], key: int) -> int:
        mapp = {}
        for i in range(len(nums)) : 
            if nums[i] == key and i < len(nums) - 1 : 
                mapp[nums[i+1]] = mapp.get(nums[i+1], 0) + 1
        max_occ = max(mapp.values())
        for item in mapp: 
            if mapp[item] == max_occ : return item

        