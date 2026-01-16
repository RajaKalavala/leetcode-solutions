"""
Problem Number: 14
Problem Name: Longest Common Prefix
Difficulty: Easy
Topics: String
Companies: Amazon, Google, Apple
"""

from typing import List

class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        """
        Approach: Horizontal Scanning
        Time Complexity: O(S)
        Space Complexity: O(1)
        """
        if not strs:
            return ""
            
        prefix = strs[0]
        
        for s in strs[1:]:
            while not s.startswith(prefix):
                prefix = prefix[:-1]
                if not prefix:
                    return ""
                    
        return prefix

# Test cases
if __name__ == "__main__":
    solution = Solution()
    print(solution.longestCommonPrefix(["flower","flow","flight"])) # "fl"
    print(solution.longestCommonPrefix(["dog","racecar","car"]))    # ""
