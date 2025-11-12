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
            if charsA == charsB : return True

        for i in range(len(s1), len(s2)) : 
            if s2[i] in charsA : charsB[s2[i]] = charsB.get(s2[i], 0) + 1

            prev = i - len(s1)
            if s2[prev] in charsB : 
                charsB[s2[prev]]-=1
                if charsB[s2[i- len(s1)]] == 0 : del charsB[s2[i-len(s1)]]

            if len(charsA) == len(charsB) : 
                if charsA == charsB : return True

        return False