# 29. Divide Two Integers

**Difficulty:** 🟡 Medium  
**Topics:** Math, Bit Manipulation  
**LeetCode Link:** [https://leetcode.com/problems/divide-two-integers/](https://leetcode.com/problems/divide-two-integers/)

## Problem Description

Given two integers `dividend` and `divisor`, divide two integers without using multiplication, division, and mod operator.

The integer division should truncate toward zero, which means losing its fractional part. For example, `8.345` would be truncated to `8`, and `-2.7335` would be truncated to `-2`.

Return the **quotient** after dividing `dividend` by `divisor`.

**Note:** Assume we are dealing with an environment that could only store integers within the **32-bit** signed integer range: `[-2^31, 2^31 - 1]`. For this problem, if the quotient is strictly greater than `2^31 - 1`, return `2^31 - 1`, and if the quotient is strictly less than `-2^31`, return `-2^31`.

### Examples:

**Example 1:**
```text
Input: dividend = 10, divisor = 3
Output: 3
Explanation: 10/3 = 3.33333.. which is truncated to 3.
```

**Example 2:**
```text
Input: dividend = 7, divisor = -3
Output: -2
Explanation: 7/-3 = -2.33333.. which is truncated to -2.
```

### Constraints:
- `-2^31 <= dividend, divisor <= 2^31 - 1`
- `divisor != 0`

---

## Approaches

### Approach 1: Bit Manipulation (Repeated Subtraction Optimization)
**Intuition:**
We can implement division as repeated subtraction. To speed it up, we subtract `divisor * 2^i` instead of just `divisor`. This is similar to long division in binary.
We want to find the largest `shift` such that `divisor << shift <= dividend`. Then we subtract that amount and add `1 << shift` to the result.

**Algorithm:**
1. Handle edge cases: overflow (INT_MIN / -1), divisor is 1 or -1.
2. Determine sign of result.
3. Convert both numbers to positive (use long/BigInt to avoid overflow during conversion).
4. While `dividend >= divisor`:
    - Find the largest `shift` such that `(divisor << shift) <= dividend`.
    - Subtract `divisor << shift` from `dividend`.
    - Add `1 << shift` to `result`.
5. Apply sign and clamp to 32-bit range.

**Complexity Analysis:**
- Time Complexity: O(log N).
- Space Complexity: O(1).

---

## Key Takeaways
- Bit shifting is equivalent to multiplying/dividing by 2.
- Handling `INT_MIN` is tricky because `abs(INT_MIN)` overflows 32-bit signed int.
