class Solution:
    # def getAverages(self, nums: List[int], k: int) -> List[int]:
        # n = len(nums)
        # avgs = [-1] * n
        # target_length = k * 2 + 1
        # if target_length > len(nums) : return avgs
        # total = sum(nums[0:target_length])
        # for c in range(k,n) : 
        #     if c + k > n : 
        #         avgs[c] = total // target_length
        #         if c + k + 1 >= n : break
        #         total-= nums[c-k]
        #         total+= nums[c+k+1]
        # return avgs
    def getAverages(self, nums: List[int], k: int) -> List[int]:
        targLen = (k * 2) + 1
        total = sum(nums[:targLen])
        n = len(nums)
        avg = [-1] * n
        if targLen > len(nums) : return avg
        for c in range(k, n) :
            if c + k < n : 
                avg[c] = total // targLen
                if c + k + 1 >= n : break
                total+= nums[c + k + 1]
                total-=nums[c - k]
        return avg