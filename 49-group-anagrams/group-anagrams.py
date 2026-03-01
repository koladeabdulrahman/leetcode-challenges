class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        res = []
        mapp = {}
        for word in strs:
            keyy = "".join(sorted(word))
            if keyy not in mapp :
                mapp[keyy] = []
            mapp[keyy].append(word)
        res = list(mapp.values())
        return res
        