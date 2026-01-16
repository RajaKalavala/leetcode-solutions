# 10. Regular Expression Matching

**Difficulty:** 🔴 Hard  
**Topics:** String, Dynamic Programming, Recursion  
**LeetCode Link:** [https://leetcode.com/problems/regular-expression-matching/](https://leetcode.com/problems/regular-expression-matching/)

## Problem Description

Given an input string `s` and a pattern `p`, implement regular expression matching with support for `'.'` and `'*'`.

- `'.'` Matches any single character.
- `'*'` Matches zero or more of the preceding element.

The matching should cover the **entire** input string (not partial).

### Examples:

**Example 1:**
```text
Input: s = "aa", p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".
```

**Example 2:**
```text
Input: s = "aa", p = "a*"
Output: true
Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
```

**Example 3:**
```text
Input: s = "ab", p = ".*"
Output: true
Explanation: ".*" means "zero or more (*) of any character (.)".
```

### Constraints:
- `1 <= s.length <= 20`
- `1 <= p.length <= 20`
- `s` contains only lowercase English letters.
- `p` contains only lowercase English letters, `'.'`, and `'*'`.
- It is guaranteed for each appearance of the character `'*'`, there will be a previous valid character to match.

---

## Approaches

### Approach 1: Dynamic Programming
**Intuition:**
We can define a 2D boolean table `dp[i][j]` which represents whether `s[0...i-1]` matches `p[0...j-1]`.

**Algorithm:**
1. Initialize `dp[s.length + 1][p.length + 1]` with `false`.
2. `dp[0][0] = true` (empty string matches empty pattern).
3. Handle patterns like `a*`, `a*b*`, etc., which can match empty strings: 
   - For `j` from 1 to `p.length`: if `p[j-1] == '*'`, `dp[0][j] = dp[0][j-2]`.
4. Iterate `i` from 1 to `s.length` and `j` from 1 to `p.length`:
   - If `p[j-1]` is a regular char or `.` :
     - match if `s[i-1] == p[j-1]` or `p[j-1] == '.'`.
     - `dp[i][j] = dp[i-1][j-1]` if matched.
   - If `p[j-1]` is `*`:
     - Case 1: zero occurrences of char before `*`: `dp[i][j] = dp[i][j-2]`.
     - Case 2: one or more occurrences: Check if `s[i-1]` matches `p[j-2]` (or `p[j-2] == '.'`), then `dp[i][j] = dp[i][j] || dp[i-1][j]`.

**Complexity Analysis:**
- Time Complexity: O(mn), where m and n are lengths of s and p.
- Space Complexity: O(mn).

---

## Key Takeaways
- DP is the standard way to solve complex string matching problems.
- Handling the `*` logic correctly (checking 0 occurences vs 1+ occurrences) is the trickiest part.
