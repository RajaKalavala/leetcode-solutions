# 11. Container With Most Water

**Difficulty:** 🟡 Medium  
**Topics:** Array, Two Pointers, Greedy  
**LeetCode Link:** [https://leetcode.com/problems/container-with-most-water/](https://leetcode.com/problems/container-with-most-water/)

## Problem Description

You are given an integer array `height` of length `n`. There are `n` vertical lines drawn such that the two endpoints of the `i-th` line are `(i, 0)` and `(i, height[i])`.

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return *the maximum amount of water a container can store*.

**Notice** that you may not slant the container.

### Examples:

**Example 1:**
```text
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
```

**Example 2:**
```text
Input: height = [1,1]
Output: 1
```

### Constraints:
- `n == height.length`
- `2 <= n <= 10^5`
- `0 <= height[i] <= 10^4`

---

## Approaches

### Approach 1: Two Pointers (Greedy)
**Intuition:**
The area is calculated by `min(height[left], height[right]) * (right - left)`.
To maximize the area, we want both height and width to be large. We start with the maximum width (pointers at both ends).
At every step, we shrink the width (move one pointer inward) to try and find a taller line. We should always move the shorter line, because if we move the taller line, the height is limited by the shorter line anyway, and width decreases, so area can only decrease.

**Algorithm:**
1. Initialize `maxArea = 0`.
2. Initialize `left = 0` and `right = n - 1`.
3. Loop while `left < right`:
    - Calculate current area: `Math.min(height[left], height[right]) * (right - left)`.
    - Update `maxArea`.
    - If `height[left] < height[right]`, increment `left`.
    - Else, decrement `right`.
4. Return `maxArea`.

**Complexity Analysis:**
- Time Complexity: O(n).
- Space Complexity: O(1).

---

## Key Takeaways
- The two-pointer technique is powerful for optimization problems involving arrays where you need to find a pair.
- Greedy choice (move the smaller height) works because keeping the smaller height while decreasing width guarantees a smaller or equal area.
