"""
Problem Number: 13
Problem Name: Roman to Integer
Difficulty: Easy
Topics: Hash Table, Math, String
Companies: Facebook, Amazon, Apple
"""

class Solution:
    def romanToInt(self, s: str) -> int:
        """
        Approach: Right to Left Pass
        Time Complexity: O(n)
        Space Complexity: O(1)
        """
        roman_map = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        }
        
        total = 0
        prev_value = 0
        
        for i in range(len(s) - 1, -1, -1):
            curr_value = roman_map[s[i]]
            
            if curr_value < prev_value:
                total -= curr_value
            else:
                total += curr_value
            prev_value = curr_value
            
        return total

# Test cases
if __name__ == "__main__":
    solution = Solution()
    print(solution.romanToInt("III"))      # 3
    print(solution.romanToInt("LVIII"))    # 58
    print(solution.romanToInt("MCMXCIV"))  # 1994
