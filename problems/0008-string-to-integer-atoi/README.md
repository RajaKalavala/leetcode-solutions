# 8. String to Integer (atoi)

**Difficulty:** 🟡 Medium  
**Topics:** String  
**LeetCode Link:** [https://leetcode.com/problems/string-to-integer-atoi/](https://leetcode.com/problems/string-to-integer-atoi/)

## Problem Description

Implement the `myAtoi` function, which converts a string to a 32-bit signed integer (similar to C/C++'s `atoi` function).

The algorithm for `myAtoi(string s)` is as follows:

1.  **Read in and ignore any leading whitespace.**
2.  **Check if the next character (if not already at the end of the string) is `'-'` or `'+'`.** Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
3.  **Read in next the characters until the next non-digit character or the end of the input is reached.** The rest of the string is ignored.
4.  **Convert these digits into an integer (i.e. `"123" -> 123`, `"0032" -> 32`).** If no digits were read, then the integer is `0`. Change the sign as necessary (from step 2).
5.  **If the integer is out of the 32-bit signed integer range `[-2^31, 2^31 - 1]`, then clamp the integer so that it remains in the range.** Specifically, integers less than `-2^31` should be clamped to `-2^31`, and integers greater than `2^31 - 1` should be clamped to `2^31 - 1`.
6.  **Return the integer as the final result.**

**Note:**
- Only the space character `' '` is considered a whitespace character.
- Do not ignore any characters other than the leading whitespace or the rest of the string after the digits.

### Examples:

**Example 1:**
```text
Input: s = "42"
Output: 42
```

**Example 2:**
```text
Input: s = "   -42"
Output: -42
Explanation:
Step 1: "   -42" (leading whitespace is read and ignored)
            ^
Step 2: "   -42" ('-' is read, so result should be negative)
             ^
Step 3: "   -42" ("42" is read in)
               ^
The parsed integer is -42.
Since -42 is in the range [-2^31, 2^31 - 1], the final result is -42.
```

**Example 3:**
```text
Input: s = "4193 with words"
Output: 4193
```

### Constraints:
- `0 <= s.length <= 200`
- `s` consists of English letters (lower-case and upper-case), digits (`0-9`), `' '`, `'+'`, `'-'`, and `'.'`.

---

## Approaches

### Approach 1: Deterministic Finite State Machine (DFA) or Linear Scan
**Intuition:**
We need to process characters sequentially. We can just follow the rules in order: skip spaces, check sign, read digits, apply bounds.

**Algorithm:**
1. Initialize `index = 0`, `n = s.length`.
2. Whitespace: Increment `index` while `s[index]` is ' '.
3. Sign: Check if `s[index]` is '+' or '-'. Record sign, increment `index`.
4. Digits: Loop while `index < n` and `s[index]` is a digit.
    - Convert char to digit: `digit = s[index] - '0'`.
    - Check for overflow before adding:
        - `result > INT_MAX / 10` or (`result == INT_MAX / 10` and `digit > 7`).
    - Update result: `result = result * 10 + digit`.
5. Apply sign and return. Clamp if overflow happened.

**Complexity Analysis:**
- Time Complexity: O(n).
- Space Complexity: O(1).

---

## Key Takeaways
- The problem is essentially implementing a parser.
- Careful handling of states (whitespace -> sign -> numbers -> end) is needed.
