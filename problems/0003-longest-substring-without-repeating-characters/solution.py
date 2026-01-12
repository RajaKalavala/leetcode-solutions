"""
Problem Number: 3
Problem Name: Longest Substring Without Repeating Characters
Difficulty: Medium
Topics: Hash Table, String, Sliding Window
Companies: Amazon, Google, Microsoft, Meta, Bloomberg
"""

class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        """
        Approach: Sliding Window
        Time Complexity: O(n)
        Space Complexity: O(min(m, n))
        """
        charSet = set()
        left = 0
        maxLength = 0
        
        for right in range(len(s)):
            while s[right] in charSet:
                charSet.remove(s[left])
                left += 1
            
            charSet.add(s[right])
            maxLength = max(maxLength, right - left + 1)
            
        return maxLength

# Test cases
if __name__ == "__main__":
    solution = Solution()
    print(solution.lengthOfLongestSubstring("abcabcbb")) # 3
    print(solution.lengthOfLongestSubstring("bbbbb"))    # 1
    print(solution.lengthOfLongestSubstring("pwwkew"))   # 3
