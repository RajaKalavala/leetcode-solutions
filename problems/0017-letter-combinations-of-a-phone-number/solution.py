"""
Problem Number: 17
Problem Name: Letter Combinations of a Phone Number
Difficulty: Medium
Topics: String, Backtracking
Companies: Amazon, Google, Facebook
"""

from typing import List

class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        """
        Approach: Backtracking
        Time Complexity: O(4^n)
        Space Complexity: O(n)
        """
        if not digits:
            return []
            
        phone_map = {
            '2': 'abc',
            '3': 'def',
            '4': 'ghi',
            '5': 'jkl',
            '6': 'mno',
            '7': 'pqrs',
            '8': 'tuv',
            '9': 'wxyz'
        }
        
        res = []
        
        def backtrack(index, current_str):
            if index == len(digits):
                res.append(current_str)
                return
            
            for char in phone_map[digits[index]]:
                backtrack(index + 1, current_str + char)
                
        backtrack(0, "")
        return res

# Test cases
if __name__ == "__main__":
    solution = Solution()
    print(solution.letterCombinations("23")) # ["ad","ae","af","bd","be","bf","cd","ce","cf"]
    print(solution.letterCombinations(""))   # []
    print(solution.letterCombinations("2"))  # ["a","b","c"]
