"""
Problem Number: 23
Problem Name: Merge k Sorted Lists
Difficulty: Hard
Topics: Linked List, Divide and Conquer, Heap
Companies: Facebook, Amazon, Google
"""

from typing import List, Optional

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        """
        Approach: Divide and Conquer
        Time Complexity: O(N log k)
        Space Complexity: O(1)
        """
        if not lists or len(lists) == 0:
            return None
            
        while len(lists) > 1:
            merged_lists = []
            for i in range(0, len(lists), 2):
                l1 = lists[i]
                l2 = lists[i+1] if i + 1 < len(lists) else None
                merged_lists.append(self.mergeTwoLists(l1, l2))
            lists = merged_lists
            
        return lists[0]

    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
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
    l1 = create_list([1,4,5])
    l2 = create_list([1,3,4])
    l3 = create_list([2,6])
    res = solution.mergeKLists([l1, l2, l3])
    print(list_to_arr(res)) # [1,1,2,3,4,4,5,6]
