class Solution:
    def numOfSubarrays(self, arr: List[int], k: int, threshold: int) -> int:
        summ = sum(arr[:k])
        avg = summ/k 
        count = 0
        if avg >= threshold : count+=1
        for i in range(k, len(arr)) : 
            summ+=arr[i]
            summ-=arr[i-k]
            avg = summ/k 
            if avg >= threshold : count+=1
        return count
