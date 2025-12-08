class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
        return sorted(c * c for c in nums)