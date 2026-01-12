"""
Problem Number: 1
Problem Name: Two Sum
Difficulty: Easy
Topics: Array, Hash Table
Companies: Amazon, Google, Microsoft
"""

from typing import List

class Solution:
    def twoSumBruteForce(self, nums: List[int], target: int) -> List[int]:
        """
        Approach 1: Brute Force
        Time Complexity: O(n²)
        Space Complexity: O(1)
        """
        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                if nums[i] + nums[j] == target:
                    return [i, j]
        return []

    def twoSum(self, nums: List[int], target: int) -> List[int]:
        """
        Approach 2: Hash Map (Optimal)
        Time Complexity: O(n)
        Space Complexity: O(n)
        """
        prevMap = {} # val : index

        for i, n in enumerate(nums):
            diff = target - n
            if diff in prevMap:
                return [prevMap[diff], i]
            prevMap[n] = i
        return []

# Test cases
if __name__ == "__main__":
    solution = Solution()
    print(solution.twoSum([2,7,11,15], 9))  # [0,1]
    print(solution.twoSum([3,2,4], 6))       # [1,2]
    print(solution.twoSum([3,3], 6))         # [0,1]
