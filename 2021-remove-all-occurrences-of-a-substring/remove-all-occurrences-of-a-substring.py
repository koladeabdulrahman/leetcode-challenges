class Solution:
    def removeOccurrences(self, s: str, part: str) -> str:
        lastChar = part[-1]
        stack = []
        for char in s:
            stack.append(char)
            if(len(stack) >= len(part)) and (char == lastChar):
                if "".join(stack[-len(part):]) == part:
                    n = len(part)
                    while n>0:
                        stack.pop()
                        n-=1
        return "".join(stack)
        