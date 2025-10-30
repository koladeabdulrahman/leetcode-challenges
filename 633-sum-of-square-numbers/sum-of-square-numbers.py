class Solution:
    def judgeSquareSum(self, c: int) -> bool:
        a, b = 0, math.floor(math.sqrt(c))
        while a <= b : 
            product = (a * a) + (b * b)
            if product == c : return True
            if product > c : b-=1
            else : a+=1
        return False

        # what do i do when if we go less we go too less?
        