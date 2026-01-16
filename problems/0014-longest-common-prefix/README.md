# 14. Longest Common Prefix

**Difficulty:** 🟢 Easy  
**Topics:** String  
**LeetCode Link:** [https://leetcode.com/problems/longest-common-prefix/](https://leetcode.com/problems/longest-common-prefix/)

## Problem Description

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string `""`.

### Examples:

**Example 1:**
```text
Input: strs = ["flower","flow","flight"]
Output: "fl"
```

**Example 2:**
```text
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
```

### Constraints:
- `1 <= strs.length <= 200`
- `0 <= strs[i].length <= 200`
- `strs[i]` consists of only lowercase English letters.

---

## Approaches

### Approach 1: Horizontal Scanning
**Intuition:**
Take the first string as the initial prefix. Compare it with the second string and update the prefix (shorten it until it matches). Then compare the updated prefix with the third string, and so on.

**Algorithm:**
1. If array is empty, return "".
2. Let `prefix = strs[0]`.
3. Iterate through `strs` starting from index 1.
    - While `strs[i].indexOf(prefix) !== 0` (current string doesn't start with prefix):
        - Shorten `prefix` by removing the last character.
        - If `prefix` becomes empty, return "".
4. Return `prefix`.

**Complexity Analysis:**
- Time Complexity: O(S), where S is the sum of all characters in all strings.
- Space Complexity: O(1).

### Approach 2: Sorting
**Intuition:**
If we sort the array of strings, the longest common prefix must be a prefix of the *first* and the *last* string (because sorting groups similar prefixes).

**Algorithm:**
1. Sort `strs`.
2. Compare the first string `s1` and the last string `s2`.
3. Find the common part from the start.
4. Return that common part.

**Complexity Analysis:**
- Time Complexity: O(N log N * M) where N is array length and M is string length (due to sorting comparisons).
- Space Complexity: O(1) or O(M) depending on sort implementation.

---

## Key Takeaways
- The horizontal scanning approach is simple and efficient O(S).
- Sorting is a clever trick but might be slower due to O(N log N).
