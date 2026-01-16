"""
Problem Number: 18
Problem Name: 4Sum
Difficulty: Medium
Topics: Array, Two Pointers, Sorting
Companies: Amazon, Google, Apple
"""

from typing import List

class Solution:
    def fourSum(self, nums: List[int], target: int) -> List[List[int]]:
        """
        Approach: K-Sum (Generalization)
        Time Complexity: O(n^3)
        Space Complexity: O(n)
        """
        nums.sort()
        results = []
        self.kSum(nums, target, 4, 0, [], results)
        return results

    def kSum(self, nums: List[int], target: int, k: int, start: int, current_quad: List[int], results: List[List[int]]):
        if k == 2:
            left, right = start, len(nums) - 1
            while left < right:
                s = nums[left] + nums[right]
                if s == target:
                    results.append(current_quad + [nums[left], nums[right]])
                    left += 1
                    while left < right and nums[left] == nums[left - 1]:
                        left += 1
                    right -= 1
                    while left < right and nums[right] == nums[right + 1]:
                        right -= 1
                elif s < target:
                    left += 1
                else:
                    right -= 1
            return

        for i in range(start, len(nums) - k + 1):
            if i > start and nums[i] == nums[i - 1]:
                continue
            
            # Additional Pruning (optional but recommended)
            if nums[i] * k > target: break # Smallest possible sum is too large
            if nums[i] + nums[-1] * (k-1) < target: continue # Largest possible sum is too small
            
            self.kSum(nums, target - nums[i], k - 1, i + 1, current_quad + [nums[i]], results)

# Test cases
if __name__ == "__main__":
    solution = Solution()
    print(solution.fourSum([1,0,-1,0,-2,2], 0)) # [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
    print(solution.fourSum([2,2,2,2,2], 8))     # [[2,2,2,2]]
