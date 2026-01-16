"""
Problem Number: 16
Problem Name: 3Sum Closest
Difficulty: Medium
Topics: Array, Two Pointers, Sorting
Companies: Facebook, Amazon, Google
"""

from typing import List

class Solution:
    def threeSumClosest(self, nums: List[int], target: int) -> int:
        """
        Approach: Sorting + Two Pointers
        Time Complexity: O(n²)
        Space Complexity: O(1)
        """
        nums.sort()
        closest_sum = float('inf')
        
        # Initialize with first three elements as a baseline (handling infinite properly requires valid init)
        if len(nums) >= 3:
            closest_sum = nums[0] + nums[1] + nums[2]
            
        for i in range(len(nums) - 2):
            l, r = i + 1, len(nums) - 1
            while l < r:
                current_sum = nums[i] + nums[l] + nums[r]
                
                if abs(target - current_sum) < abs(target - closest_sum):
                    closest_sum = current_sum
                    
                if current_sum == target:
                    return current_sum
                elif current_sum < target:
                    l += 1
                else:
                    r -= 1
        
        return closest_sum

# Test cases
if __name__ == "__main__":
    solution = Solution()
    print(solution.threeSumClosest([-1,2,1,-4], 1)) # 2
    print(solution.threeSumClosest([0,0,0], 1))     # 0
