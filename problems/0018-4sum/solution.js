/**
 * @problemNumber: 18
 * @problemName: 4Sum
 * @difficulty: Medium
 * @topics: Array, Two Pointers, Sorting
 * @companies: Amazon, Google, Apple
 */

/**
 * Approach: K-Sum (Generalization)
 * Time Complexity: O(n^3)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
function fourSum(nums, target) {
    nums.sort((a, b) => a - b);

    function kSum(start, target, k) {
        let res = [];

        // Base case: 2Sum
        if (k === 2) {
            let left = start;
            let right = nums.length - 1;
            while (left < right) {
                // Using BigInt for safety with large numbers, though standard JS numbers are doubles (up to 2^53 safe integer)
                // Constraints say 10^9 + 10^9 + 10^9 + 10^9 = 4 * 10^9 fits in standard number safely.
                const sum = nums[left] + nums[right];

                if (sum === target) {
                    res.push([nums[left], nums[right]]);
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    while (left < right && nums[right] === nums[right - 1]) right--;
                    left++;
                    right--;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
            return res;
        }

        for (let i = start; i < nums.length - k + 1; i++) {
            if (i > start && nums[i] === nums[i - 1]) continue;

            // Optimization / Pruning
            // Smallest possible sum > target
            // Largest possible sum < target
            // (Optional here but good for speed)

            const subRes = kSum(i + 1, target - nums[i], k - 1);
            for (const arr of subRes) {
                res.push([nums[i], ...arr]);
            }
        }
        return res;
    }

    return kSum(0, target, 4);
}

// Test cases
console.log(fourSum([1, 0, -1, 0, -2, 2], 0)); // [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
console.log(fourSum([2, 2, 2, 2, 2], 8));     // [[2,2,2,2]]

module.exports = { fourSum };
