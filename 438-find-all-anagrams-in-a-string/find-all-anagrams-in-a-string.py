class Solution:
    def findAnagrams(self, s: str, p: str) -> List[int]:
        p,s = s,p
        if len(p) < len(s) : return []
        res = []
        charsA = {}
        for char in s: charsA[char] = charsA.get(char, 0) + 1
        charsB = {}
        for i in range(len(s)) : 
            if (p[i]) in charsA :
                charsB[p[i]] = charsB.get(p[i], 0) + 1
        if len(charsA) == len(charsB) : 
            count = 0
            for char in charsA : 
                if charsA[char] == charsB[char] : count+=1
            if count == len(charsA) : res.append(i-len(s)+1)
        for i in range(len(s), len(p)) : 
            if (p[i]) in charsA : charsB[p[i]] = charsB.get(p[i], 0) + 1
            prev = i - len(s)
            if p[prev] in charsB : 
                charsB[p[prev]]-=1
                if charsB[p[i- len(s)]] == 0 : del charsB[p[i-len(s)]]
            if len(charsA) == len(charsB) : 
                count = 0
                for char in charsA : 
                    if charsA[char] == charsB[char] : count+=1
                if count == len(charsA) : res.append(i-len(s)+1)
        return res


        
