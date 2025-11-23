class Solution:
    def validPalindrome(self, s: str) -> bool:
        start, end = 0, len(s) - 1
        while(start<end):
            if s[start] != s[end]:
                if isPalindrome(s, start+1, end) or isPalindrome(s,start, end-1):return True
                else : return False
            start+=1
            end-=1
        return True



def isPalindrome(string, start, end) :
    while(start<end):
        if string[start] != string[end]:return False
        start+=1
        end-=1
    return True
    
    