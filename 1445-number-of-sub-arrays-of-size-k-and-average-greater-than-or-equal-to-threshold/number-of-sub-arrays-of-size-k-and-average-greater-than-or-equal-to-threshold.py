class Solution:
    def numOfSubarrays(self, arr: List[int], k: int, threshold: int) -> int:
        summ, res = 0, 0
        for i in range(k):
            summ+=arr[i]
        if (summ / k )>= threshold : res+=1
        for i in range(k, len(arr)) : 
            summ+=arr[i]
            summ-=arr[i-k]
            if (summ / k) >= threshold : res+=1
        return res

        