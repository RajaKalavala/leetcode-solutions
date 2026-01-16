"""
Problem Number: 27
Problem Name: Remove Element
Difficulty: Easy
Topics: Array, Two Pointers
Companies: Facebook, Amazon, Google
"""

from typing import List

class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        """
        Approach: Two Pointers
        Time Complexity: O(n)
        Space Complexity: O(1)
        """
        k = 0
        for i in range(len(nums)):
            if nums[i] != val:
                nums[k] = nums[i]
                k += 1
        return k

# Test cases
if __name__ == "__main__":
    solution = Solution()
    nums1 = [3,2,2,3]
    k1 = solution.removeElement(nums1, 3)
    print(k1, nums1[:k1]) # 2, [2,2]

    nums2 = [0,1,2,2,3,0,4,2]
    k2 = solution.removeElement(nums2, 2)
    print(k2, nums2[:k2]) # 5, [0,1,3,0,4]
