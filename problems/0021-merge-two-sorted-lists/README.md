# 21. Merge Two Sorted Lists

**Difficulty:** 🟢 Easy  
**Topics:** Linked List, Recursion  
**LeetCode Link:** [https://leetcode.com/problems/merge-two-sorted-lists/](https://leetcode.com/problems/merge-two-sorted-lists/)

## Problem Description

You are given the heads of two sorted linked lists `list1` and `list2`.

Merge the two lists into one **sorted** list. The list should be made by splicing together the nodes of the first two lists.

Return *the head of the merged linked list*.

### Examples:

**Example 1:**
```text
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
```

**Example 2:**
```text
Input: list1 = [], list2 = []
Output: []
```

**Example 3:**
```text
Input: list1 = [], list2 = [0]
Output: [0]
```

### Constraints:
- The number of nodes in both lists is in the range `[0, 50]`.
- `-100 <= Node.val <= 100`
- Both `list1` and `list2` are sorted in **non-decreasing** order.

---

## Approaches

### Approach 1: Iterative
**Intuition:**
We can use a dummy head node and a current pointer. Compare the heads of `list1` and `list2`, append the smaller one to `current.next`, and advance the pointer for that list. Repeat until one list is empty, then append the rest of the other list.

**Algorithm:**
1. Create `dummy`. `tail = dummy`.
2. While `list1` and `list2` are not null:
    - If `list1.val <= list2.val`:
        - `tail.next = list1`
        - `list1 = list1.next`
    - Else:
        - `tail.next = list2`
        - `list2 = list2.next`
    - `tail = tail.next`
3. If `list1` is not null, `tail.next = list1`.
4. If `list2` is not null, `tail.next = list2`.
5. Return `dummy.next`.

**Complexity Analysis:**
- Time Complexity: O(N + M).
- Space Complexity: O(1).

---

## Key Takeaways
- The dummy head technique significantly simplifies linked list construction code by avoiding first-element checks.
