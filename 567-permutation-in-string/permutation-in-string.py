class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool: 
        if len(s1) > len(s2) : return False
        charsA = {}
        for char in s1: charsA[char] = charsA.get(char, 0) + 1
        charsB = {}
        for i in range(len(s1)) : 
            if (s2[i]) in charsA :
                charsB[s2[i]] = charsB.get(s2[i], 0) + 1
        if len(charsA) == len(charsB) : 
            count = 0
            for char in charsA : 
                if charsA[char] == charsB[char] : count+=1
            if count == len(charsA) : return True
        for i in range(len(s1), len(s2)) : 
            if (s2[i]) in charsA : charsB[s2[i]] = charsB.get(s2[i], 0) + 1
            prev = i - len(s1)
            if s2[prev] in charsB : 
                charsB[s2[prev]]-=1
                if charsB[s2[i- len(s1)]] == 0 : del charsB[s2[i-len(s1)]]
            if len(charsA) == len(charsB) : 
                count = 0
                for char in charsA : 
                    if charsA[char] == charsB[char] : count+=1
                if count == len(charsA) : return True
        return False

        # if len(s1) > len(s2) : return False
        # s1count, s2count = [0] * 26 , [0] * 26
        # for i in range(len(s1)) : 
        #     s1count[ord(s1[i]) - ord("a")]+=1
        #     s2count[ord(s2[i]) - ord("a")]+=1
        # matches = 0
        # for i in range(26) : 
        #     if s1count[i] == s2count[i] : matches +=1
        # l = 0
        # for r in range(len(s1), len(s2)) : 
        #     if matches == 26 : return True
        #     index = ord(s2[r]) - ord("a")
        #     s2count[index]+=1

        #     if s1count[index] == s2count[index] : matches+=1
        #     elif s1count[index] + 1 == s2count[index] : matches-=1

        #     index = ord(s2[l]) - ord("a")
        #     s2count[index] -=1

        #     if s1count[index] == s2count[index] : matches+=1
        #     elif s1count[index] - 1 == s2count[index] : matches-=1

        #     l+=1

        # return False


        