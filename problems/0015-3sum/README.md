# 15. 3Sum

**Difficulty:** 🟡 Medium  
**Topics:** Array, Two Pointers, Sorting  
**LeetCode Link:** [https://leetcode.com/problems/3sum/](https://leetcode.com/problems/3sum/)

## Problem Description

Given an integer array nums, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.

Notice that the solution set must not contain duplicate triplets.

### Examples:

**Example 1:**
```text
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
```

**Example 2:**
```text
Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum to 0.
```

**Example 3:**
```text
Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums to 0.
```

### Constraints:
- `3 <= nums.length <= 3000`
- `-10^5 <= nums[i] <= 10^5`

---

## Approaches

### Approach 1: Sorting and Two Pointers
**Intuition:**
First, sort the array. Then iterate through the array with index `i`. For each `i`, we want to find two other numbers `nums[j]` and `nums[k]` (where `j > i` and `k > j`) such that `nums[i] + nums[j] + nums[k] == 0`. This reduces the problem to "Two Sum II" (finding two numbers that sum to `-nums[i]` in a sorted array).

**Algorithm:**
1. Sort `nums`.
2. Iterate `i` from `0` to `n-3`:
    - If `i > 0` and `nums[i] == nums[i-1]`, skip to avoid duplicates.
    - Set `low = i + 1`, `high = n - 1`.
    - While `low < high`:
        - `sum = nums[i] + nums[low] + nums[high]`.
        - If `sum < 0`, `low++`.
        - If `sum > 0`, `high--`.
        - If `sum == 0`, add triplet to result.
            - Skip duplicates for `low`: while `low < high` and `nums[low] == nums[low+1]`, `low++`.
            - Skip duplicates for `high`: while `low < high` and `nums[high] == nums[high-1]`, `high--`.
            - `low++`, `high--`.
3. Return result.

**Complexity Analysis:**
- Time Complexity: O(n²) because of the outer loop and the two-pointer inner scan. Sorting takes O(n log n).
- Space Complexity: O(log n) or O(n) depending on sorting implementation.

---

## Key Takeaways
- Sorting is crucial to efficiently handle duplicates and use the two-pointer technique.
- Skipping duplicates is the tricky part to ensure unique triplets.
