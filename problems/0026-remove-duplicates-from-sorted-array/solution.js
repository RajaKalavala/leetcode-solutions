/**
 * @problemNumber: 26
 * @problemName: Remove Duplicates from Sorted Array
 * @difficulty: Easy
 * @topics: Array, Two Pointers
 * @companies: Facebook, Microsoft, Google
 */

/**
 * Approach: Two Pointers
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
    if (nums.length === 0) return 0;

    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }

    return i + 1;
}

// Test cases
let nums1 = [1, 1, 2];
let k1 = removeDuplicates(nums1);
console.log(k1, nums1.slice(0, k1)); // 2, [1,2]

let nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let k2 = removeDuplicates(nums2);
console.log(k2, nums2.slice(0, k2)); // 5, [0,1,2,3,4]

module.exports = { removeDuplicates };
