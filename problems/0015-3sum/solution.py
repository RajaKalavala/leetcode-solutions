"""
Problem Number: 15
Problem Name: 3Sum
Difficulty: Medium
Topics: Array, Two Pointers, Sorting
Companies: Facebook, Amazon, Microsoft
"""

from typing import List

class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        """
        Approach: Sorting + Two Pointers
        Time Complexity: O(n²)
        Space Complexity: O(1) (ignoring output)
        """
        res = []
        nums.sort()
        
        for i in range(len(nums) - 2):
            if i > 0 and nums[i] == nums[i-1]:
                continue
                
            l, r = i + 1, len(nums) - 1
            while l < r:
                s = nums[i] + nums[l] + nums[r]
                if s < 0:
                    l += 1
                elif s > 0:
                    r -= 1
                else:
                    res.append([nums[i], nums[l], nums[r]])
                    while l < r and nums[l] == nums[l+1]:
                        l += 1
                    while l < r and nums[r] == nums[r-1]:
                        r -= 1
                    l += 1
                    r -= 1
        return res

# Test cases
if __name__ == "__main__":
    solution = Solution()
    print(solution.threeSum([-1,0,1,2,-1,-4])) # [[-1,-1,2],[-1,0,1]]
    print(solution.threeSum([0,1,1]))          # []
    print(solution.threeSum([0,0,0]))          # [[0,0,0]]
