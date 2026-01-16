"""
Problem Number: 12
Problem Name: Integer to Roman
Difficulty: Medium
Topics: Hash Table, Math, String
Companies: Amazon, Google, Adobe
"""

class Solution:
    def intToRoman(self, num: int) -> str:
        """
        Approach: Greedy with Predefined Values
        Time Complexity: O(1)
        Space Complexity: O(1)
        """
        # List of tuples (value, symbol)
        value_symbols = [
            (1000, "M"),
            (900, "CM"),
            (500, "D"),
            (400, "CD"),
            (100, "C"),
            (90, "XC"),
            (50, "L"),
            (40, "XL"),
            (10, "X"),
            (9, "IX"),
            (5, "V"),
            (4, "IV"),
            (1, "I"),
        ]
        
        res = []
        for val, sym in value_symbols:
            if num == 0:
                break
            count, num = divmod(num, val)
            res.append(sym * count)
            
        return "".join(res)

# Test cases
if __name__ == "__main__":
    solution = Solution()
    print(solution.intToRoman(3749)) # "MMMDCCXLIX"
    print(solution.intToRoman(58))   # "LVIII"
    print(solution.intToRoman(1994)) # "MCMXCIV"
