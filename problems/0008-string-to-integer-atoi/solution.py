"""
Problem Number: 8
Problem Name: String to Integer (atoi)
Difficulty: Medium
Topics: String
Companies: Microsoft, Facebook, Amazon
"""

class Solution:
    def myAtoi(self, s: str) -> int:
        """
        Approach: Deterministic Scan
        Time Complexity: O(n)
        Space Complexity: O(1)
        """
        i = 0
        n = len(s)
        sign = 1
        result = 0
        INT_MAX = 2**31 - 1
        INT_MIN = -2**31
        
        # 1. Skip whitespace
        while i < n and s[i] == ' ':
            i += 1
            
        if i == n:
            return 0
        
        # 2. Check sign
        if s[i] == '+' or s[i] == '-':
            sign = 1 if s[i] == '+' else -1
            i += 1
            
        # 3. Process digits
        while i < n and s[i].isdigit():
            digit = int(s[i])
            
            # Check overflow
            # (In Python we can just compute and clamp at end, but adhering to logic)
            if result > INT_MAX // 10 or (result == INT_MAX // 10 and digit > 7):
                return INT_MAX if sign == 1 else INT_MIN
                
            result = result * 10 + digit
            i += 1
            
        return sign * result

# Test cases
if __name__ == "__main__":
    solution = Solution()
    print(solution.myAtoi("42"))               # 42
    print(solution.myAtoi("   -42"))           # -42
    print(solution.myAtoi("4193 with words"))  # 4193
