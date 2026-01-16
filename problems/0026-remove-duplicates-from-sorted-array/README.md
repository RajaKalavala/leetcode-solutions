# 26. Remove Duplicates from Sorted Array

**Difficulty:** 🟢 Easy  
**Topics:** Array, Two Pointers  
**LeetCode Link:** [https://leetcode.com/problems/remove-duplicates-from-sorted-array/](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)

## Problem Description

Given an integer array `nums` sorted in **non-decreasing order**, remove the duplicates **in-place** such that each unique element appears only **once**. The relative order of the elements should be kept the **same**.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the **first part** of the array `nums`. More formally, if there are `k` elements after removing the duplicates, then the first `k` elements of `nums` should hold the final result. It does not matter what you leave beyond the first `k` elements.

Return `k` after placing the final result in the first `k` slots of `nums`.

Do *not* allocate extra space for another array. You must do this by **modifying the input array in-place** with O(1) extra memory.

### Examples:

**Example 1:**
```text
Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
```

**Example 2:**
```text
Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
```

### Constraints:
- `1 <= nums.length <= 3 * 10^4`
- `-100 <= nums[i] <= 100`
- `nums` is sorted in **non-decreasing** order.

---

## Approaches

### Approach 1: Two Pointers
**Intuition:**
Use two pointers: `i` (slow-runner) for the position of the last unique element found, and `j` (fast-runner) for scanning the array.
Whenever `nums[j]` is different from `nums[i]`, we increment `i` and copy `nums[j]` to `nums[i]`.

**Algorithm:**
1. If `nums` is empty, return 0.
2. Initialize `i = 0`.
3. Loop `j` from 1 to `nums.length - 1`:
    - If `nums[j] != nums[i]`:
        - `i++`
        - `nums[i] = nums[j]`
4. Return `i + 1`.

**Complexity Analysis:**
- Time Complexity: O(n).
- Space Complexity: O(1).

---

## Key Takeaways
- The fast-runner slow-runner technique works perfectly for in-place array modification relative to conditions.
