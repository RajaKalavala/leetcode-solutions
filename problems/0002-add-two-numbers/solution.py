"""
Problem Number: 2
Problem Name: Add Two Numbers
Difficulty: Medium
Topics: Linked List, Math
Companies: Amazon, Google, Microsoft, Meta
"""

from typing import Optional

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        """
        Approach: Elementary Math
        Time Complexity: O(max(m, n))
        Space Complexity: O(max(m, n))
        """
        dummy = ListNode(0)
        curr = dummy
        carry = 0
        
        while l1 or l2 or carry:
            val1 = l1.val if l1 else 0
            val2 = l2.val if l2 else 0
            
            # New digit
            val = val1 + val2 + carry
            carry = val // 10
            val = val % 10
            
            curr.next = ListNode(val)
            curr = curr.next
            
            # Update pointers
            l1 = l1.next if l1 else None
            l2 = l2.next if l2 else None
            
        return dummy.next

# Helper to create list from array
def createList(arr):
    dummy = ListNode(0)
    curr = dummy
    for val in arr:
        curr.next = ListNode(val)
        curr = curr.next
    return dummy.next

# Helper to print list
def printList(node):
    output = []
    while node:
        output.append(node.val)
        node = node.next
    print(output)

# Test cases
if __name__ == "__main__":
    solution = Solution()
    l1 = createList([2,4,3])
    l2 = createList([5,6,4])
    printList(solution.addTwoNumbers(l1, l2)) # [7,0,8]
