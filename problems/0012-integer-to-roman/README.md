# 12. Integer to Roman

**Difficulty:** 🟡 Medium  
**Topics:** Hash Table, Math, String  
**LeetCode Link:** [https://leetcode.com/problems/integer-to-roman/](https://leetcode.com/problems/integer-to-roman/)

## Problem Description

Seven different symbols represent Roman numerals with the following values:

| Symbol | Value |
| :--- | :--- |
| I | 1 |
| V | 5 |
| X | 10 |
| L | 50 |
| C | 100 |
| D | 500 |
| M | 1000 |

Roman numerals are formed by appending the conversions of decimal place values from highest to lowest. Converting a decimal place value into a Roman numeral has the following rules:

- If the value does not start with 4 or 9, select the symbol of the maximal value that can be subtracted from the input, append that symbol to the result, and subtract its value, and convert the remainder to a Roman numeral.
- If the value starts with 4 or 9 use the subtractive form representing one symbol subtracted from the following symbol, for example 4 is 1 (I) less than 5 (V): IV and 9 is 1 (I) less than 10 (X): IX. Only the following subtractive forms are used: 4 (IV), 9 (IX), 40 (XL), 90 (XC), 400 (CD) and 900 (CM).

### Examples:

**Example 1:**
```text
Input: num = 3749
Output: "MMMDCCXLIX"
```

**Example 2:**
```text
Input: num = 58
Output: "LVIII"
Explanation: L = 50, V = 5, III = 3.
```

**Example 3:**
```text
Input: num = 1994
Output: "MCMXCIV"
Explanation: M = 1000, CM = 900, XC = 90, IV = 4.
```

### Constraints:
- `1 <= num <= 3999`

---

## Approaches

### Approach 1: Greedy with Predefined Values
**Intuition:**
We can store the value-symbol pairs in descending order, including the subtractive cases (e.g., 900: CM, 400: CD). Then we iterate through them and subtract as many times as possible while appending the symbol.

**Algorithm:**
1. Create a list of pairs: `{1000: "M"}, {900: "CM"}, {500: "D"}, {400: "CD"}...{1: "I"}`.
2. Initialize empty result string.
3. Iterate through the pairs. For each `value, symbol`:
    - While `num >= value`:
        - `num -= value`
        - Append `symbol` to result.
4. Return result.

**Complexity Analysis:**
- Time Complexity: O(1). Since the input is bounded (<= 3999), the loop runs a constant number of times.
- Space Complexity: O(1).

---

## Key Takeaways
- Including the special subtractive cases (IV, IX, etc.) in the lookup table simplifies the logic significantly.
