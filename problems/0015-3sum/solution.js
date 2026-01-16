/**
 * @problemNumber: 15
 * @problemName: 3Sum
 * @difficulty: Medium
 * @topics: Array, Two Pointers, Sorting
 * @companies: Facebook, Amazon, Microsoft
 */

/**
 * Approach: Sorting + Two Pointers
 * Time Complexity: O(n²)
 * Space Complexity: O(log n) to O(n) (sorting)
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
    const result = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        // Skip duplicates for the first element
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                // Skip duplicates for the second element
                while (left < right && nums[left] === nums[left + 1]) left++;
                // Skip duplicates for the third element
                while (left < right && nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
}

// Test cases
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0, 1, 1]));          // []
console.log(threeSum([0, 0, 0]));          // [[0,0,0]]

module.exports = { threeSum };
