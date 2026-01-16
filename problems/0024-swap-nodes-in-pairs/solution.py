"""
Problem Number: 24
Problem Name: Swap Nodes in Pairs
Difficulty: Medium
Topics: Linked List, Recursion
Companies: Microsoft, Amazon, Facebook
"""

from typing import Optional

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
        """
        Approach: Iterative
        Time Complexity: O(n)
        Space Complexity: O(1)
        """
        dummy = ListNode(0)
        dummy.next = head
        prev = dummy
        
        while prev.next and prev.next.next:
            first = prev.next
            second = prev.next.next
            
            # Swap
            prev.next = second
            first.next = second.next
            second.next = first
            
            # Move
            prev = first
            
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
    head = create_list([1,2,3,4])
    res = solution.swapPairs(head)
    print(list_to_arr(res)) # [2,1,4,3]
