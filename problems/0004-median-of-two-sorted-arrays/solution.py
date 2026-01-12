"""
Problem Number: 4
Problem Name: Median of Two Sorted Arrays
Difficulty: Hard
Topics: Array, Binary Search
Companies: Amazon, Google, Microsoft, Apple, Bloomberg
"""

from typing import List

class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        """
        Approach: Binary Search
        Time Complexity: O(log(min(m, n)))
        Space Complexity: O(1)
        """
        if len(nums1) > len(nums2):
            nums1, nums2 = nums2, nums1
            
        m, n = len(nums1), len(nums2)
        left, right = 0, m
        half = (m + n + 1) // 2
        
        while left <= right:
            i = (left + right) // 2
            j = half - i
            
            # Handling edge cases with infinity
            nums1Left = float("-inf") if i == 0 else nums1[i - 1]
            nums1Right = float("inf") if i == m else nums1[i]
            nums2Left = float("-inf") if j == 0 else nums2[j - 1]
            nums2Right = float("inf") if j == n else nums2[j]
            
            if nums1Left <= nums2Right and nums2Left <= nums1Right:
                # Found correct partition
                if (m + n) % 2 == 1:
                    return max(nums1Left, nums2Left)
                else:
                    return (max(nums1Left, nums2Left) + min(nums1Right, nums2Right)) / 2.0
            elif nums1Left > nums2Right:
                right = i - 1
            else:
                left = i + 1
                
        raise ValueError("Input arrays are not sorted or invalid.")

# Test cases
if __name__ == "__main__":
    solution = Solution()
    print(solution.findMedianSortedArrays([1,3], [2]))       # 2.0
    print(solution.findMedianSortedArrays([1,2], [3,4]))     # 2.5
