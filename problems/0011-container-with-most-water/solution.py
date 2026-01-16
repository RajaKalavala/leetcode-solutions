"""
Problem Number: 11
Problem Name: Container With Most Water
Difficulty: Medium
Topics: Array, Two Pointers, Greedy
Companies: Amazon, Google, Facebook
"""

from typing import List

class Solution:
    def maxArea(self, height: List[int]) -> int:
        """
        Approach: Two Pointers
        Time Complexity: O(n)
        Space Complexity: O(1)
        """
        max_water = 0
        left, right = 0, len(height) - 1
        
        while left < right:
            h = min(height[left], height[right])
            w = right - left
            max_water = max(max_water, h * w)
            
            if height[left] < height[right]:
                left += 1
            else:
                right -= 1
                
        return max_water

# Test cases
if __name__ == "__main__":
    solution = Solution()
    print(solution.maxArea([1,8,6,2,5,4,8,3,7])) # 49
    print(solution.maxArea([1,1]))               # 1
