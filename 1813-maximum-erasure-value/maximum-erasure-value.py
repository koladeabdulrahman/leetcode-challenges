class Solution:
    def maximumUniqueSubarray(self, nums: List[int]) -> int:
        summ, chars, maxx, left = 0, {}, 0, 0
        for right in range(len(nums)) : 
            while(nums[right] in chars) :
                summ-=nums[left]
                del chars[nums[left]]
                left+=1
            summ+=nums[right]
            maxx = max(summ, maxx)
            chars[nums[right]] = True
        return maxx
            
