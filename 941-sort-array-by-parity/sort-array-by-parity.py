class Solution:
    def sortArrayByParity(self, nums: List[int]) -> List[int]:
        start, end = 0, len(nums)-1
        while start < end :
            while start < end and nums[start] % 2 == 0 : 
                start+=1
            while start < end and nums[end] % 2 != 0 : 
                end-=1
            nums[start], nums[end] = nums[end], nums[start]
        return nums