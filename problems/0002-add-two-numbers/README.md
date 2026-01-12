# 2. Add Two Numbers

**Difficulty:** 🟡 Medium  
**Topics:** Linked List, Math, Recursion  
**LeetCode Link:** [https://leetcode.com/problems/add-two-numbers/](https://leetcode.com/problems/add-two-numbers/)

## Problem Description

You are given two **non-empty** linked lists representing two non-negative integers. The digits are stored in **reverse order**, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

### Examples:

**Example 1:**
```text
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
```

**Example 2:**
```text
Input: l1 = [0], l2 = [0]
Output: [0]
```

**Example 3:**
```text
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
```

### Constraints:
- The number of nodes in each linked list is in the range `[1, 100]`.
- `0 <= Node.val <= 9`
- It is guaranteed that the list represents a number that does not have leading zeros.

---

## Approaches

### Approach 1: Elementary Math
**Intuition:**
Keep track of the carry using a variable and simulate digit-by-digit addition starting from the head of the list, which contains the least-significant digit.

**Algorithm:**
1. Initialize a dummy head node to simplify the code.
2. Initialize `curr` to the dummy head.
3. Initialize `carry` to 0.
4. Loop while `l1`, `l2`, or `carry` is non-zero:
    - Sum = `carry` + (value of `l1` if exists) + (value of `l2` if exists).
    - Update `carry` = `Sum / 10`.
    - Create a new node with value `Sum % 10` and attach it to `curr.next`.
    - Move `curr`, `l1`, and `l2` forward.
5. Return `dummy.next`.

**Complexity Analysis:**
- Time Complexity: O(max(m, n)) - Where m and n are lengths of l1 and l2.
- Space Complexity: O(max(m, n)) - Length of the new list is at most max(m,n) + 1.

---

## Key Takeaways
- Using a `dummy head` simplifies linked list problems by avoiding edge cases for the head node.
- Don't forget the final carry! If the loop finishes and carry > 0, you need one more node.
