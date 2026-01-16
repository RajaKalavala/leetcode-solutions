"""
Problem Number: 28
Problem Name: Find the Index of the First Occurrence in a String
Difficulty: Easy
Topics: Two Pointers, String, String Matching
Companies: Microsoft, Facebook, Apple
"""

class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        """
        Approach: Sliding Window (or just built-in find)
        Time Complexity: O(n * m) - naive implementation
        Space Complexity: O(1)
        """
        if not needle:
            return 0
            
        return haystack.find(needle)

# Test cases
if __name__ == "__main__":
    solution = Solution()
    print(solution.strStr("sadbutsad", "sad")) # 0
    print(solution.strStr("leetcode", "leeto")) # -1
