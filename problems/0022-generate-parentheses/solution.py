"""
Problem Number: 22
Problem Name: Generate Parentheses
Difficulty: Medium
Topics: String, Dynamic Programming, Backtracking
Companies: Facebook, Microsoft, Amazon
"""

from typing import List

class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        """
        Approach: Backtracking
        Time Complexity: O(4^n / sqrt(n))
        Space Complexity: O(n)
        """
        res = []
        
        def backtrack(s: str, open_count: int, close_count: int):
            if len(s) == 2 * n:
                res.append(s)
                return
            
            if open_count < n:
                backtrack(s + "(", open_count + 1, close_count)
            
            if close_count < open_count:
                backtrack(s + ")", open_count, close_count + 1)
                
        backtrack("", 0, 0)
        return res

# Test cases
if __name__ == "__main__":
    solution = Solution()
    print(solution.generateParenthesis(3)) # ["((()))","(()())","(())()","()(())","()()()"]
    print(solution.generateParenthesis(1)) # ["()"]
