# 27. Remove Element

**Difficulty:** 🟢 Easy  
**Topics:** Array, Two Pointers  
**LeetCode Link:** [https://leetcode.com/problems/remove-element/](https://leetcode.com/problems/remove-element/)

## Problem Description

Given an integer array `nums` and an integer `val`, remove all occurrences of `val` in `nums` **in-place**. The relative order of the elements may be changed.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the **first part** of the array `nums`. More formally, if there are `k` elements after removing, then the first `k` elements of `nums` should hold the final result. It does not matter what you leave beyond the first `k` elements.

Return `k` after placing the final result in the first `k` slots of `nums`.

### Examples:

**Example 1:**
```text
Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
```

**Example 2:**
```text
Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,3,0,4,_,_,_]
```

### Constraints:
- `0 <= nums.length <= 100`
- `0 <= nums[i] <= 50`
- `0 <= val <= 100`

---

## Approaches

### Approach 1: Two Pointers
**Intuition:**
We can maintain a pointer `k` that tracks the position of the next "valid" element (element that is not `val`).
Iterate through the array with `i`. If `nums[i] != val`, we assign `nums[k] = nums[i]` and increment `k`.
This effectively shifts all non-`val` elements to the front.

**Algorithm:**
1. Initialize `k = 0`.
2. Loop `i` from 0 to `nums.length - 1`:
    - If `nums[i] != val`:
        - `nums[k] = nums[i]`
        - `k++`
3. Return `k`.

**Complexity Analysis:**
- Time Complexity: O(n).
- Space Complexity: O(1).

---

## Key Takeaways
- Similar pattern to "Remove Duplicates", just a different condition.
