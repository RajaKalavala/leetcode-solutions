# 7. Reverse Integer

**Difficulty:** 🟡 Medium  
**Topics:** Math  
**LeetCode Link:** [https://leetcode.com/problems/reverse-integer/](https://leetcode.com/problems/reverse-integer/)

## Problem Description

Given a signed 32-bit integer `x`, return `x` *with its digits reversed*. If reversing `x` causes the value to go outside the signed 32-bit integer range `[-2^31, 2^31 - 1]`, then return `0`.

**Assume the environment does not allow you to store 64-bit integers (signed or unsigned).**

### Examples:

**Example 1:**
```text
Input: x = 123
Output: 321
```

**Example 2:**
```text
Input: x = -123
Output: -321
```

**Example 3:**
```text
Input: x = 120
Output: 21
```

### Constraints:
- `-2^31 <= x <= 2^31 - 1`

---

## Approaches

### Approach 1: Digit Extraction
**Intuition:**
We can extract the last digit of the number by taking `x % 10` and then dropping that last digit by doing `x / 10`. We build the reverse number by continuously adding the extracted digit: `rev = rev * 10 + digit`.

**Algorithm:**
1. Initialize `rev = 0`.
2. Iterate while `x != 0`.
    - Get the last digit: `pop = x % 10`.
    - Update `x`: `x = trunc(x / 10)` (Be careful with negative division in some languages).
    - Check for overflow before pushing the digit:
        - If `rev > MAX_INT/10` or (`rev == MAX_INT/10` and `pop > 7`), return 0.
        - If `rev < MIN_INT/10` or (`rev == MIN_INT/10` and `pop < -8`), return 0.
    - Update `rev`: `rev = rev * 10 + pop`.
3. Return `rev`.

**Complexity Analysis:**
- Time Complexity: O(log(x)). The number of digits in x is roughly log10(x).
- Space Complexity: O(1).

---

## Key Takeaways
- Always be mindful of integer overflow limits (32-bit signed range).
- Handling negative numbers with modulo operator differs between languages (e.g., Python vs C++ vs JS).
