"""
Problem Number: 26
Problem Name: Remove Duplicates from Sorted Array
Difficulty: Easy
Topics: Array, Two Pointers
Companies: Facebook, Microsoft, Google
"""

from typing import List

class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        """
        Approach: Two Pointers
        Time Complexity: O(n)
        Space Complexity: O(1)
        """
        if not nums:
            return 0
        
        i = 0
        for j in range(1, len(nums)):
            if nums[j] != nums[i]:
                i += 1
                nums[i] = nums[j]
                
        return i + 1

# Test cases
if __name__ == "__main__":
    solution = Solution()
    nums1 = [1,1,2]
    k1 = solution.removeDuplicates(nums1)
    print(k1, nums1[:k1]) # 2, [1,2]

    nums2 = [0,0,1,1,1,2,2,3,3,4]
    k2 = solution.removeDuplicates(nums2)
    print(k2, nums2[:k2]) # 5, [0,1,2,3,4]
