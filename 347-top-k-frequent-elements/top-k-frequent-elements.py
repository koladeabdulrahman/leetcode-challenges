class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        counts = {}
        freqs = [[] for i in range(len(nums) + 1)]
        
        for char in nums:
            counts[char] = counts.get(char, 0) + 1
        
        for no in counts:
            freqs[counts[no]].append(no)

        res = []
        for i in range(len(freqs) - 1, 0, -1):
            for no in freqs[i]:
                res.append(no)
                if len(res) == k : return res