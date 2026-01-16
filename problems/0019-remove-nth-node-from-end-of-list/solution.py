"""
Problem Number: 19
Problem Name: Remove Nth Node From End of List
Difficulty: Medium
Topics: Linked List, Two Pointers
Companies: Facebook, Amazon, Apple
"""

from typing import Optional, List

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        """
        Approach: One Pass with Two Pointers
        Time Complexity: O(L)
        Space Complexity: O(1)
        """
        dummy = ListNode(0, head)
        first = dummy
        second = dummy
        
        # Move first n + 1 steps
        for _ in range(n + 1):
            first = first.next
            
        # Move until first reaches end
        while first:
            first = first.next
            second = second.next
            
        # Remove
        second.next = second.next.next
        
        return dummy.next

# Helper methods for testing
def create_list(arr):
    dummy = ListNode(0)
    curr = dummy
    for val in arr:
        curr.next = ListNode(val)
        curr = curr.next
    return dummy.next

def list_to_arr(head):
    res = []
    while head:
        res.append(head.val)
        head = head.next
    return res

# Test cases
if __name__ == "__main__":
    solution = Solution()
    head = create_list([1,2,3,4,5])
    new_head = solution.removeNthFromEnd(head, 2)
    print(list_to_arr(new_head)) # [1,2,3,5]
