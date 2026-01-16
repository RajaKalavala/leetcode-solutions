"""
Problem Number: 21
Problem Name: Merge Two Sorted Lists
Difficulty: Easy
Topics: Linked List, Recursion
Companies: Amazon, Microsoft, Facebook
"""

from typing import Optional, List

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        """
        Approach: Iterative
        Time Complexity: O(n + m)
        Space Complexity: O(1)
        """
        dummy = ListNode(0)
        tail = dummy
        
        while list1 and list2:
            if list1.val <= list2.val:
                tail.next = list1
                list1 = list1.next
            else:
                tail.next = list2
                list2 = list2.next
            tail = tail.next
            
        if list1:
            tail.next = list1
        elif list2:
            tail.next = list2
            
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
    l1 = create_list([1,2,4])
    l2 = create_list([1,3,4])
    res = solution.mergeTwoLists(l1, l2)
    print(list_to_arr(res)) # [1,1,2,3,4,4]
