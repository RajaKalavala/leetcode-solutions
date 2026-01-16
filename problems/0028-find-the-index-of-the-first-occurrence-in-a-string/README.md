# 28. Find the Index of the First Occurrence in a String

**Difficulty:** 🟢 Easy  
**Topics:** Two Pointers, String, String Matching  
**LeetCode Link:** [https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/)

## Problem Description

Given two strings `needle` and `haystack`, return the index of the first occurrence of `needle` in `haystack`, or `-1` if `needle` is not part of `haystack`.

### Examples:

**Example 1:**
```text
Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6. The first occurrence is at index 0.
```

**Example 2:**
```text
Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
```

### Constraints:
- `1 <= haystack.length, needle.length <= 10^4`
- `haystack` and `needle` consist of only lowercase English characters.

---

## Approaches

### Approach 1: Sliding Window / Naive Matching
**Intuition:**
Iterate through `haystack`. For each position, check if the substring starting there matches `needle`.

**Algorithm:**
1. Loop `i` from 0 to `haystack.length - needle.length`.
2. Check if `haystack.substring(i, i + needle.length) === needle`.
3. Return `i` if match.
4. Return `-1`.

**Complexity Analysis:**
- Time Complexity: O(N * M).
- Space Complexity: O(1).

### Approach 2: Built-in Methods
Most languages provide optimized search functions (like KMP or Boyer-Moore under the hood).
- JS: `indexOf`
- Python: `find` or `index`

---

## Key Takeaways
- While KMP is the optimal O(N+M) algorithm, for typical Interview constraints and practical use strings, the naive approach or built-ins are sufficient.
