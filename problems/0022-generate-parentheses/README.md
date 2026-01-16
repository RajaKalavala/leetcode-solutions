# 22. Generate Parentheses

**Difficulty:** 🟡 Medium  
**Topics:** String, Dynamic Programming, Backtracking  
**LeetCode Link:** [https://leetcode.com/problems/generate-parentheses/](https://leetcode.com/problems/generate-parentheses/)

## Problem Description

Given `n` pairs of parentheses, write a function to *generate all combinations of well-formed parentheses*.

### Examples:

**Example 1:**
```text
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
```

**Example 2:**
```text
Input: n = 1
Output: ["()"]
```

### Constraints:
- `1 <= n <= 8`

---

## Approaches

### Approach 1: Backtracking
**Intuition:**
We can build the string by adding `(` or `)`.
We can add `(` if we have used fewer than `n` opening brackets so far.
We can add `)` if we have used fewer `)` than `(` so far.
Base case: string length is `2 * n`.

**Algorithm:**
1. Define recursive `backtrack(currentString, openCount, closeCount)`.
2. Base case: If `currentString.length == 2 * n`, add to results.
3. If `openCount < n`: `backtrack(currentString + "(", openCount + 1, closeCount)`.
4. If `closeCount < openCount`: `backtrack(currentString + ")", openCount, closeCount + 1)`.
5. Call `backtrack("", 0, 0)`.

**Complexity Analysis:**
- Time Complexity: O(4^n / sqrt(n)). (Catalan number).
- Space Complexity: O(n) for stack depth.

---

## Key Takeaways
- Constructing valid states incrementally is often better than generating all possibilities and checking validity.
