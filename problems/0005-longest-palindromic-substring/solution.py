"""
Problem Number: 5
Problem Name: Longest Palindromic Substring
Difficulty: Medium
Topics: String, Dynamic Programming
Companies: Amazon, Google, Microsoft, Meta
"""

class Solution:
    def longestPalindrome(self, s: str) -> str:
        """
        Approach: Expand Around Center
        Time Complexity: O(n²)
        Space Complexity: O(1)
        """
        res = ""
        resLen = 0
        
        for i in range(len(s)):
            # Odd length
            l, r = i, i
            while l >= 0 and r < len(s) and s[l] == s[r]:
                if (r - l + 1) > resLen:
                    res = s[l:r+1]
                    resLen = r - l + 1
                l -= 1
                r += 1
            
            # Even length
            l, r = i, i + 1
            while l >= 0 and r < len(s) and s[l] == s[r]:
                if (r - l + 1) > resLen:
                    res = s[l:r+1]
                    resLen = r - l + 1
                l -= 1
                r += 1
                
        return res

# Test cases
if __name__ == "__main__":
    solution = Solution()
    print(solution.longestPalindrome("babad")) # "bab" or "aba"
    print(solution.longestPalindrome("cbbd"))  # "bb"
