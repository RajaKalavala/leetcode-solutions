# 16. 3Sum Closest

**Difficulty:** 🟡 Medium  
**Topics:** Array, Two Pointers, Sorting  
**LeetCode Link:** [https://leetcode.com/problems/3sum-closest/](https://leetcode.com/problems/3sum-closest/)

## Problem Description

Given an integer array `nums` of length `n` and an integer `target`, find three integers in `nums` such that the sum is closest to `target`.

Return *the sum of the three integers*.

You may assume that each input would have exactly one solution.

### Examples:

**Example 1:**
```text
Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
```

**Example 2:**
```text
Input: nums = [0,0,0], target = 1
Output: 0
Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).
```

### Constraints:
- `3 <= nums.length <= 500`
- `-1000 <= nums[i] <= 1000`
- `-10^4 <= target <= 10^4`

---

## Approaches

### Approach 1: Sorting and Two Pointers
**Intuition:**
Similar to 3Sum, we sort the array and iterate with `i`, `left`, and `right`.
Instead of looking for `sum == 0`, we look for `sum` that minimizes `abs(target - sum)`.

**Algorithm:**
1. Sort `nums`.
2. Initialize `closestSum = nums[0] + nums[1] + nums[2]`.
3. Iterate `i` from `0` to `n-3`:
    - `left = i + 1`, `right = n - 1`.
    - While `left < right`:
        - `currentSum = nums[i] + nums[left] + nums[right]`.
        - If `abs(target - currentSum) < abs(target - closestSum)`, update `closestSum`.
        - If `currentSum < target`, `left++`.
        - If `currentSum > target`, `right--`.
        - If `currentSum == target`, return `currentSum` immediately (diff is 0).
4. Return `closestSum`.

**Complexity Analysis:**
- Time Complexity: O(n^2).
- Space Complexity: O(log n) or O(n) for sorting.

---

## Key Takeaways
- The structure is almost identical to 3Sum.
- Keeping track of the minimum difference allows finding the closest value.
