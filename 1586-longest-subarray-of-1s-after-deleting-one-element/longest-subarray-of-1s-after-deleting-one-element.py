class Solution:
    def longestSubarray(self, nums: List[int]) -> int:
        begin, max_len, k = 0, 0, 1
        for end in range(len(nums)) : 
            if nums[end] != 1 : k-=1
            while k < 0 :
                if nums[begin] == 0 : k+=1
                begin+=1
            length = end - begin
            max_len = max(max_len, length)
        return max_len