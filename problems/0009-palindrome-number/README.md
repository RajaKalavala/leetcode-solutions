# 9. Palindrome Number

**Difficulty:** 🟢 Easy  
**Topics:** Math  
**LeetCode Link:** [https://leetcode.com/problems/palindrome-number/](https://leetcode.com/problems/palindrome-number/)

## Problem Description

Given an integer `x`, return `true` if `x` is a palindrome integer.

An integer is a **palindrome** when it reads the same backward as forward.

- For example, `121` is a palindrome while `123` is not.

### Examples:

**Example 1:**
```text
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
```

**Example 2:**
```text
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
```

**Example 3:**
```text
Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
```

### Constraints:
- `-2^31 <= x <= 2^31 - 1`

**Follow up:** Could you solve it without converting the integer to a string?

---

## Approaches

### Approach 1: Convert to String
**Intuition:**
Convert the integer to a string and check if the string is equal to its reverse.

**Algorithm:**
1. String `s = String(x)`.
2. Return `s == reverse(s)`.

**Complexity Analysis:**
- Time Complexity: O(log10(x)) - digits in number.
- Space Complexity: O(log10(x)) - to create the string.

### Approach 2: Revert Half of the Number
**Intuition:**
We can reverse the second half of the number and compare it with the first half. If they are equal, it's a palindrome. This avoids the overflow issue of reversing the whole number, although for palindrome checking specifically, checking equality handles overflow implicitly (never matches).

**Algorithm:**
1. Handle edge cases: Negative numbers are not palindromes. Numbers ending in 0 (except 0 itself) are not palindromes.
2. Initialize `revertedNumer = 0`.
3. Loop while `x > revertedNumber`:
    - `revertedNumber = revertedNumber * 10 + x % 10`
    - `x /= 10`
4. Return `x == revertedNumber` (even digits) or `x == revertedNumber / 10` (odd digits, middle digit ignored).

**Complexity Analysis:**
- Time Complexity: O(log10(x)).
- Space Complexity: O(1).

---

## Key Takeaways
- Negative numbers are not palindromes.
- Reversing only half the number is a clever optimization to avoid full reversal and save time/space.
