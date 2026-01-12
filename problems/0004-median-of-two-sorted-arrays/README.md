# 4. Median of Two Sorted Arrays

**Difficulty:** 🔴 Hard  
**Topics:** Array, Binary Search, Divide and Conquer  
**LeetCode Link:** [https://leetcode.com/problems/median-of-two-sorted-arrays/](https://leetcode.com/problems/median-of-two-sorted-arrays/)

## Problem Description

Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return **the median** of the two sorted arrays.

The overall run time complexity should be `O(log (m+n))`.

### Examples:

**Example 1:**
```text
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
```

**Example 2:**
```text
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
```

### Constraints:
- `nums1.length == m`
- `nums2.length == n`
- `0 <= m <= 1000`
- `0 <= n <= 1000`
- `1 <= m + n <= 2000`
- `-10^6 <= nums1[i], nums2[i] <= 10^6`

---

## Approaches

### Approach 1: Merge and Sort (Brute Force)
**Intuition:**
Merge the two arrays into one sorted array and then find the median.

**Complexity Analysis:**
- Time Complexity: O(m+n) - Merging takes linear time.
- Space Complexity: O(m+n) - New array to store merged result.

### Approach 2: Binary Search (Optimal)
**Intuition:**
We want to partition both arrays such that the left half contains `(m + n + 1) / 2` elements and every element in the left half is less than or equal to every element in the right half.
We can perform a binary search on the smaller array to find the correct partition.

**Algorithm:**
1. Ensure `nums1` is the smaller array. If not, swap them.
2. Perform binary search on `nums1`:
    - `i` is the partition index for `nums1`.
    - `j` is the partition index for `nums2`, calculated as `half - i`.
    - Check if the partitions are valid:
        - `nums1[i-1] <= nums2[j]` and `nums2[j-1] <= nums1[i]`
    - If valid, calculate median based on total length (odd or even).
    - If `nums1[i-1] > nums2[j]`, move `right` pointer to `i - 1`.
    - If `nums2[j-1] > nums1[i]`, move `left` pointer to `i + 1`.

**Complexity Analysis:**
- Time Complexity: O(log(min(m, n))) - Binary search on smaller array.
- Space Complexity: O(1) - Iterative approach, constant space.

---

## Key Takeaways
- Finding the median of two sorted arrays can be reduced to finding the k-th element in the union of two sorted arrays.
- Binary search is not just for finding elements, but also for finding a boundary or partition.
