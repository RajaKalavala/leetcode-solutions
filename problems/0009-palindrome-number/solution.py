"""
Problem Number: 9
Problem Name: Palindrome Number
Difficulty: Easy
Topics: Math
Companies: Facebook, Apple, Google
"""

class Solution:
    def isPalindrome(self, x: int) -> bool:
        """
        Approach: Revert Half of the Number
        Time Complexity: O(log10(n))
        Space Complexity: O(1)
        """
        if x < 0 or (x % 10 == 0 and x != 0):
            return False
            
        reverted_number = 0
        while x > reverted_number:
            reverted_number = reverted_number * 10 + x % 10
            x //= 10
            
        return x == reverted_number or x == reverted_number // 10

# Test cases
if __name__ == "__main__":
    solution = Solution()
    print(solution.isPalindrome(121))  # True
    print(solution.isPalindrome(-121)) # False
    print(solution.isPalindrome(10))   # False
