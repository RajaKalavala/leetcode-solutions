# 18. 4Sum

**Difficulty:** 🟡 Medium  
**Topics:** Array, Two Pointers, Sorting  
**LeetCode Link:** [https://leetcode.com/problems/4sum/](https://leetcode.com/problems/4sum/)

## Problem Description

Given an array `nums` of `n` integers, return an array of all the **unique** quadruplets `[nums[a], nums[b], nums[c], nums[d]]` such that:

- `0 <= a, b, c, d < n`
- `a, b, c, and d` are distinct.
- `nums[a] + nums[b] + nums[c] + nums[d] == target`

You may return the answer in **any order**.

### Examples:

**Example 1:**
```text
Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
```

**Example 2:**
```text
Input: nums = [2,2,2,2,2], target = 8
Output: [[2,2,2,2]]
```

### Constraints:
- `1 <= nums.length <= 200`
- `-10^9 <= nums[i] <= 10^9`
- `-10^9 <= target <= 10^9`

---

## Approaches

### Approach 1: Generalized K-Sum (Sorting + Two Pointers)
**Intuition:**
We can use k-1 nested loops to reduce the problem to the 2-Sum problem.
For 4Sum, we use 2 nested loops (for i and j), and then use two pointers for the remaining 2 elements.
To make it generic, we can implement a `kSum` function.

**Algorithm:**
1. Sort `nums`.
2. Implement `kSum(start, target, k)`:
    - Base case: if `k == 2`, use two pointers to find pairs summing to `target`.
    - Recursive step: Iterate `i` from `start` to `n - k`.
        - Skip duplicates.
        - Recursively call `kSum(i + 1, target - nums[i], k - 1)`.
        - Append `nums[i]` to each returned result.
3. Call `kSum(0, target, 4)`.

**Complexity Analysis:**
- Time Complexity: O(n^(k-1)), here O(n^3).
- Space Complexity: O(k) for recursion stack + O(n) for sorting.

---

## Key Takeaways
- The k-Sum pattern is a great generalization. 2Sum -> O(n), 3Sum -> O(n^2), 4Sum -> O(n^3).
- Pruning (checking if `nums[i] * k > target` or `nums[end] * k < target`) can optimize significantly.
