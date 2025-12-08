class Solution:
    def sortArrayByParity(self, nums: List[int]) -> List[int]:
        odds = [c for c in nums if c % 2 != 0]
        evens = [c for c in nums if c % 2 == 0]
        return evens + odds
        