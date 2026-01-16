"""
Problem Number: 6
Problem Name: Zigzag Conversion
Difficulty: Medium
Topics: String
Companies: PayPal, Amazon, Google
"""

class Solution:
    def convert(self, s: str, numRows: int) -> str:
        """
        Approach: Sort by Row (Simulation)
        Time Complexity: O(n)
        Space Complexity: O(n)
        """
        if numRows == 1 or numRows >= len(s):
            return s
        
        rows = [''] * numRows
        curRow, step = 0, 1
        
        for char in s:
            rows[curRow] += char
            if curRow == 0:
                step = 1
            elif curRow == numRows - 1:
                step = -1
            curRow += step
        
        return ''.join(rows)

# Test cases
if __name__ == "__main__":
    solution = Solution()
    print(solution.convert("PAYPALISHIRING", 3)) # "PAHNAPLSIIGYIR"
    print(solution.convert("PAYPALISHIRING", 4)) # "PINALSIGYAHRPI"
    print(solution.convert("A", 1))              # "A"
