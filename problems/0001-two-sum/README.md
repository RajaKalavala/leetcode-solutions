# 1. Two Sum

**Difficulty:** 🟢 Easy  
**Topics:** Array, Hash Table  
**LeetCode Link:** [https://leetcode.com/problems/two-sum/](https://leetcode.com/problems/two-sum/)

## Problem Description

Given an array of integers `nums` and an integer `target`, return *indices of the two numbers such that they add up to `target`*.

You may assume that each input would have **exactly one solution**, and you may not use the *same* element twice.

You can return the answer in any order.

### Examples:

**Example 1:**
```text
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

**Example 2:**
```text
Input: nums = [3,2,4], target = 6
Output: [1,2]
```

**Example 3:**
```text
Input: nums = [3,3], target = 6
Output: [0,1]
```

### Constraints:
- `2 <= nums.length <= 10^4`
- `-10^9 <= nums[i] <= 10^9`
- `-10^9 <= target <= 10^9`
- **Only one valid answer exists.**

---

## Approaches

### Approach 1: Brute Force
**Intuition:**
 Iterate through each element `x` and find if there is another value that equals `target - x`.

**Algorithm:**
1. Loop through each element `i` from `0` to `n-1`.
2. Loop through each element `j` from `i+1` to `n-1`.
3. If `nums[i] + nums[j] == target`, return `[i, j]`.

**Complexity Analysis:**
- Time Complexity: O(n²) - We traverse the list containing n elements exactly twice.
- Space Complexity: O(1) - The space required does not depend on the size of the input array.

### Approach 2: One-pass Hash Table (Optimal)
**Intuition:**
While we iterate and inserting elements into the table, we also look back to check if current element's complement already exists in the table. If it exists, we have found a solution and return immediately.

**Algorithm:**
1. Create a hash map to store `value -> index`.
2. Iterate through the array with index `i`.
3. Calculate `complement = target - nums[i]`.
4. If `complement` is in the map, return `[map[complement], i]`.
5. Otherwise, add `nums[i]` to the map with value `i`.

**Complexity Analysis:**
- Time Complexity: O(n) - We traverse the list containing n elements only once. Each look up in the table costs only O(1) time.
- Space Complexity: O(n) - The extra space required depends on the number of items stored in the hash table, which stores at most n elements.

---

## Key Takeaways
- Hash Maps are excellent for reducing time complexity from O(n²) to O(n) when searching for specific values or pairs.
- Trading space for time is a common optimization pattern.
