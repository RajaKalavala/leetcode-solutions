# 3. Longest Substring Without Repeating Characters

**Difficulty:** 🟡 Medium  
**Topics:** Hash Table, String, Sliding Window  
**LeetCode Link:** [https://leetcode.com/problems/longest-substring-without-repeating-characters/](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

## Problem Description

Given a string `s`, find the length of the **longest substring** without repeating characters.

### Examples:

**Example 1:**
```text
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
```

**Example 2:**
```text
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
```

**Example 3:**
```text
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
```

### Constraints:
- `0 <= s.length <= 5 * 10^4`
- `s` consists of English letters, digits, symbols and spaces.

---

## Approaches

### Approach 1: Sliding Window (Optimal)
**Intuition:**
Use a sliding window defined by `left` and `right` pointers. We use a set or map to keep track of characters in the current window. If we encounter a character already in the set, we shrink the window from the left until the repeating character is removed.

**Algorithm:**
1. Initialize `left` pointer to 0.
2. Initialize `maxLength` to 0.
3. Initialize a Set `charSet` to store characters in the current window.
4. Iterate with `right` pointer from 0 to s.length-1:
    - While `s[right]` is in `charSet`, remove `s[left]` from `charSet` and increment `left`.
    - Add `s[right]` to `charSet`.
    - Update `maxLength = max(maxLength, right - left + 1)`.
5. Return `maxLength`.

**Complexity Analysis:**
- Time Complexity: O(n) - Each character is visited at most twice (once by right pointer, once by left pointer).
- Space Complexity: O(min(m, n)) - We need O(k) space for the sliding window, where k is the size of the Set. The size of the Set is upper bounded by the size of the string n and the size of the charset/alphabet m.

---

## Key Takeaways
- **Sliding Window** is a powerful technique for substring problems.
- Using a **Set** allows O(1) lookups to check for duplicates.
