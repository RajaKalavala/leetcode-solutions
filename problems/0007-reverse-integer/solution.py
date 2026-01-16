"""
Problem Number: 7
Problem Name: Reverse Integer
Difficulty: Medium
Topics: Math
Companies: Apple, Adobe, Bloomberg
"""

class Solution:
    def reverse(self, x: int) -> int:
        """
        Approach: Math with Overflow Check
        Time Complexity: O(log(x))
        Space Complexity: O(1)
        """
        # Python handles integers arbitrarily large, so we manually check 32-bit constraints
        INT_MAX = 2**31 - 1
        INT_MIN = -2**31
        
        res = 0
        
        # Handle negative sign for easier modulo logic
        sign = -1 if x < 0 else 1
        x = abs(x)
        
        while x != 0:
            pop = x % 10
            x //= 10
            
            # Check overflow (conceptually, though Python won't fault)
            if res > INT_MAX // 10 or (res == INT_MAX // 10 and pop > 7):
                return 0
            
            res = res * 10 + pop
            
        return sign * res

# Test cases
if __name__ == "__main__":
    solution = Solution()
    print(solution.reverse(123))   # 321
    print(solution.reverse(-123))  # -321
    print(solution.reverse(120))   # 21
    print(solution.reverse(1534236469)) # 0
