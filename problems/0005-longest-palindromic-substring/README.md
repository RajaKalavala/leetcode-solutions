# 5. Longest Palindromic Substring

**Difficulty:** 🟡 Medium  
**Topics:** String, Dynamic Programming, Two Pointers  
**LeetCode Link:** [https://leetcode.com/problems/longest-palindromic-substring/](https://leetcode.com/problems/longest-palindromic-substring/)

## Problem Description

Given a string `s`, return *the longest palindromic substring* in `s`.

### Examples:

**Example 1:**
```text
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
```

**Example 2:**
```text
Input: s = "cbbd"
Output: "bb"
```

### Constraints:
- `1 <= s.length <= 1000`
- `s` consist of only digits and English letters.

---

## Approaches

### Approach 1: Expand Around Center
**Intuition:**
A palindrome mirrors around its center. Therefore, a palindrome can be expanded from its center, and there are only `2n - 1` such centers. The center of a palindrome can be valid in two ways:
1. One character (e.g., "aba" centered at 'b')
2. Between two characters (e.g., "abba" centered between 'b' and 'b')

**Algorithm:**
1. Iterate through each character in the string (index `i`).
2. For each `i`, expand around `i` (odd length palindromes).
3. For each `i`, expand around `i` and `i+1` (even length palindromes).
4. Keep track of the maximum length found and the start/end indices.
5. Return the substring corresponding to the max length.

**Complexity Analysis:**
- Time Complexity: O(n²) - Expanding a palindrome around its center could take O(n) time, and we do this for each of the 2n-1 centers.
- Space Complexity: O(1) - We only need constant extra space.

### Approach 2: Dynamic Programming
**Intuition:**
Define `dp[i][j]` as true if the substring `P[i...j]` is a palindrome.
`dp[i][j]` is true if `P[i] == P[j]` and `dp[i+1][j-1]` is true.

**Complexity Analysis:**
- Time Complexity: O(n²)
- Space Complexity: O(n²)

---

## Key Takeaways
- Expanding around the center is a very space-efficient approach for palindrome problems (O(1) space).
- Manacher's Algorithm can solve this in O(n) time, but it is complex and rarely required in interviews.
