"""
Problem Number: 29
Problem Name: Divide Two Integers
Difficulty: Medium
Topics: Math, Bit Manipulation
Companies: Facebook, Google, Amazon
"""

class Solution:
    def divide(self, dividend: int, divisor: int) -> int:
        """
        Approach: Bit Manipulation
        Time Complexity: O(log n)
        Space Complexity: O(1)
        """
        # Constants
        INT_MAX = 2**31 - 1
        INT_MIN = -2**31
        
        # Handle overflow
        if dividend == INT_MIN and divisor == -1:
            return INT_MAX
            
        sign = 1 if (dividend > 0) == (divisor > 0) else -1
        
        dividend = abs(dividend)
        divisor = abs(divisor)
        result = 0
        
        # Determine the most significant bit of divisor relative to dividend
        # Equivalent to finding 2^k * divisor <= dividend < 2^(k+1) * divisor
        while dividend >= divisor:
            temp_divisor = divisor
            multiple = 1
            while dividend >= (temp_divisor << 1):
                temp_divisor <<= 1
                multiple <<= 1
                
            dividend -= temp_divisor
            result += multiple
            
        return sign * result

# Test cases
if __name__ == "__main__":
    solution = Solution()
    print(solution.divide(10, 3))  # 3
    print(solution.divide(7, -3))  # -2
