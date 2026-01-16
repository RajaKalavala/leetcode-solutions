# 13. Roman to Integer

**Difficulty:** 🟢 Easy  
**Topics:** Hash Table, Math, String  
**LeetCode Link:** [https://leetcode.com/problems/roman-to-integer/](https://leetcode.com/problems/roman-to-integer/)

## Problem Description

Roman numerals are represented by seven different symbols: `I`, `V`, `X`, `L`, `C`, `D` and `M`.

| Symbol | Value |
| :--- | :--- |
| I | 1 |
| V | 5 |
| X | 10 |
| L | 50 |
| C | 100 |
| D | 500 |
| M | 1000 |

For example, `2` is written as `II` in Roman numeral, just two ones added together. `12` is written as `XII`, which is simply `X + II`. The number `27` is written as `XXVII`, which is `XX + V + II`.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not `IIII`. Instead, the number four is written as `IV`. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as `IX`. There are six instances where subtraction is used:

- `I` can be placed before `V` (5) and `X` (10) to make 4 and 9. 
- `X` can be placed before `L` (50) and `C` (100) to make 40 and 90. 
- `C` can be placed before `D` (500) and `M` (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer.

### Examples:

**Example 1:**
```text
Input: s = "III"
Output: 3
Explanation: III = 3.
```

**Example 2:**
```text
Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
```

**Example 3:**
```text
Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
```

### Constraints:
- `1 <= s.length <= 15`
- `s` contains only the characters `('I', 'V', 'X', 'L', 'C', 'D', 'M')`.
- It is guaranteed that `s` is a valid roman numeral in the range `[1, 3999]`.

---

## Approaches

### Approach 1: Right to Left Pass
**Intuition:**
Iterate from the last character to the first. Keep a running sum. If the character's value is less than the previous character's value (the one to its right), subtract it. Otherwise, add it.
Example: IV (4). Process V (5), sum=5. Process I (1). Since 1 < 5, subtract 1. Sum = 4.

**Algorithm:**
1. Create a map of values.
2. Initialize `sum = 0` and `prevValue = 0`.
3. Iterate backwards through the string:
    - `currentValue = map[char]`.
    - If `currentValue < prevValue`, `sum -= currentValue`.
    - Else, `sum += currentValue`.
    - `prevValue = currentValue`.
4. Return `sum`.

**Complexity Analysis:**
- Time Complexity: O(n).
- Space Complexity: O(1).

---

## Key Takeaways
- Processing from right to left makes the subtraction logic very simple (if current < prev, subtract).
