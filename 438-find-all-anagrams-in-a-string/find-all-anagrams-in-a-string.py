class Solution:
    def findAnagrams(self, s: str, p: str) -> List[int]:
        res = []
        s,p = p, s
        if len(s) > len(p) : return []
        scount, pcount = [0] * 26 , [0] * 26
        for i in range(len(s)) : 
            scount[ord(s[i]) - ord("a")]+=1
            pcount[ord(p[i]) - ord("a")]+=1
        matches = 0
        for i in range(26) : 
            if scount[i] == pcount[i] : matches +=1
        
        l = 0
        if matches == 26 : res.append(l)
        for r in range(len(s), len(p)) : 
            index = ord(p[r]) - ord("a")
            pcount[index]+=1

            if scount[index] == pcount[index] : matches+=1
            elif scount[index] == pcount[index] - 1 : matches-=1

            index = ord(p[l]) - ord("a")
            pcount[index] -=1

            if scount[index] == pcount[index] : matches+=1
            elif scount[index] == pcount[index] + 1 : matches-=1

            l+=1
            if matches == 26 : res.append(l)
        return res


        
