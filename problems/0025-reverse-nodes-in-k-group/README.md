# 25. Reverse Nodes in k-Group

**Difficulty:** 🔴 Hard  
**Topics:** Linked List, Recursion  
**LeetCode Link:** [https://leetcode.com/problems/reverse-nodes-in-k-group/](https://leetcode.com/problems/reverse-nodes-in-k-group/)

## Problem Description

Given the `head` of a linked list, reverse the nodes of the list `k` at a time, and return the modified list.

`k` is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of `k` then left-out nodes, in the end, should remain as it is.

You may not alter the values in the list's nodes, only nodes themselves may be changed.

### Examples:

**Example 1:**
```text
Input: head = [1,2,3,4,5], k = 2
Output: [2,1,4,3,5]
```

**Example 2:**
```text
Input: head = [1,2,3,4,5], k = 3
Output: [3,2,1,4,5]
```

### Constraints:
- The number of nodes in the list is `n`.
- `1 <= k <= n <= 5000`
- `0 <= Node.val <= 1000`

---

## Approaches

### Approach 1: Iterative with Counting
**Intuition:**
We iterate through the list. Every time we encounter `k` nodes, we reverse them.
We need to keep track of the node *before* the group (`prevGroupTail`) and the *next* node after the group.

**Algorithm:**
1. Count the length of the list `n`.
2. Create `dummy`. `dummy.next = head`. `prevGroupTail = dummy`. `curr = head`.
3. Loop while `n >= k`:
    - Capture the range to reverse: `curr` to the k-th node.
    - Reverse the k nodes inside the loop.
    - Update connections: `prevGroupTail.next` points to new head of group, `oldHead` points to next group.
    - Update `prevGroupTail`, `curr`, `n` (decrement by k).
4. Return `dummy.next`.

**Complexity Analysis:**
- Time Complexity: O(n). We visit each node twice at (once for counting/checking, once for reversing).
- Space Complexity: O(1).

---

## Key Takeaways
- Complex pointer manipulation. Breaking it down into "Reverse sublist of size k" helps.
- Checking if `k` nodes exist before reversing is crucial.
