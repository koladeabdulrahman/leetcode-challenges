class Solution:
    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
        items1 , items2, res = {}, {}, []
        for char in nums1 : items1[char] = True
        for char in nums2 : items2[char] = True
        for item in items1 : 
            if item in items2 : res.append(int(item))
        return res

        