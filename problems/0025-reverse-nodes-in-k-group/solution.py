"""
Problem Number: 25
Problem Name: Reverse Nodes in k-Group
Difficulty: Hard
Topics: Linked List, Recursion
Companies: Microsoft, Amazon, Facebook
"""

from typing import Optional

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def reverseKGroup(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        """
        Approach: Iterative with Counting
        Time Complexity: O(n)
        Space Complexity: O(1)
        """
        if not head or k == 1:
            return head
        
        dummy = ListNode(0)
        dummy.next = head
        cur, nex, pre = dummy, dummy, dummy
        
        count = 0
        while cur.next:
            cur = cur.next
            count += 1
            
        while count >= k:
            cur = pre.next
            nex = cur.next
            for _ in range(1, k):
                cur.next = nex.next
                nex.next = pre.next
                pre.next = nex
                nex = cur.next
                
            pre = cur
            count -= k
            
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
    res = solution.reverseKGroup(head, 2)
    print(list_to_arr(res)) # [2,1,4,3,5]
