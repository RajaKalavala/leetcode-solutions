/**
 * @problemNumber: 16
 * @problemName: 3Sum Closest
 * @difficulty: Medium
 * @topics: Array, Two Pointers, Sorting
 * @companies: Facebook, Amazon, Google
 */

/**
 * Approach: Sorting + Two Pointers
 * Time Complexity: O(n²)
 * Space Complexity: O(log n) to O(n)
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function threeSumClosest(nums, target) {
    nums.sort((a, b) => a - b);
    let closestSum = nums[0] + nums[1] + nums[2];

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const currentSum = nums[i] + nums[left] + nums[right];

            if (Math.abs(target - currentSum) < Math.abs(target - closestSum)) {
                closestSum = currentSum;
            }

            if (currentSum === target) {
                return currentSum;
            } else if (currentSum < target) {
                left++;
            } else {
                right--;
            }
        }
    }

    return closestSum;
}

// Test cases
console.log(threeSumClosest([-1, 2, 1, -4], 1)); // 2
console.log(threeSumClosest([0, 0, 0], 1));     // 0

module.exports = { threeSumClosest };
