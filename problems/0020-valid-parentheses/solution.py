"""
Problem Number: 20
Problem Name: Valid Parentheses
Difficulty: Easy
Topics: String, Stack
Companies: Amazon, Facebook, Google
"""

class Solution:
    def isValid(self, s: str) -> bool:
        """
        Approach: Stack
        Time Complexity: O(n)
        Space Complexity: O(n)
        """
        stack = []
        mapping = {")": "(", "}": "{", "]": "["}
        
        for char in s:
            if char in mapping:
                top_element = stack.pop() if stack else '#'
                if mapping[char] != top_element:
                    return False
            else:
                stack.append(char)
        
        return not stack

# Test cases
if __name__ == "__main__":
    solution = Solution()
    print(solution.isValid("()"))     # True
    print(solution.isValid("()[]{}")) # True
    print(solution.isValid("(]"))     # False
