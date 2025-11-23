class Solution:
    def numUniqueEmails(self, emails: List[str]) -> int:
        mapp = {}
        for char in emails:
            local, domain = char.split("@")
            newLocal = ''
            for char in local:
                if char == ".":continue
                if char == "+":break
                newLocal+=char
            mapp[newLocal+" "+domain] = True
        return len(mapp)


        