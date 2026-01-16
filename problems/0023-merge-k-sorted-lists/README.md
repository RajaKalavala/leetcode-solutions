# 23. Merge k Sorted Lists

**Difficulty:** 🔴 Hard  
**Topics:** Linked List, Divide and Conquer, Heap (Priority Queue)  
**LeetCode Link:** [https://leetcode.com/problems/merge-k-sorted-lists/](https://leetcode.com/problems/merge-k-sorted-lists/)

## Problem Description

You are given an array of `k` linked-lists `lists`, each linked-list is sorted in ascending order.

*Merge all the linked-lists into one sorted linked-list and return it.*

### Examples:

**Example 1:**
```text
Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6
```

**Example 2:**
```text
Input: lists = []
Output: []
```

**Example 3:**
```text
Input: lists = [[]]
Output: []
```

### Constraints:
- `k == lists.length`
- `0 <= k <= 10^4`
- `0 <= lists[i].length <= 500`
- `-10^4 <= lists[i][j] <= 10^4`
- `lists[i]` is sorted in ascending order.
- The sum of `lists[i].length` will not exceed `10^4`.

---

## Approaches

### Approach 1: Divide and Conquer
**Intuition:**
Merging k lists is similar to merge sort. We can pair up k lists and merge each pair. Repeat the process with the `k/2` merged lists, and so on, until we have 1 list.

**Algorithm:**
1. If `lists` is empty, return null.
2. While `lists.length > 1`:
    - Create `mergedLists`.
    - Iterate `i` from `0` to `lists.length` with step 2:
        - `l1 = lists[i]`
        - `l2 = (i + 1 < lists.length) ? lists[i+1] : null`
        - Push `mergeTwoLists(l1, l2)` to `mergedLists`.
    - `lists = mergedLists`.
3. Return `lists[0]`.

**Complexity Analysis:**
- Time Complexity: O(N log k), where N is total nodes and k is number of lists.
- Space Complexity: O(1) (iterative merge) or O(log k) (recursion).

---

## Key Takeaways
- Divide and Conquer reduces the complexity from O(kN) (comparing all heads every time) to O(N log k).
