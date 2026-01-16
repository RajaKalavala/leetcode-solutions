/**
 * @problemNumber: 27
 * @problemName: Remove Element
 * @difficulty: Easy
 * @topics: Array, Two Pointers
 * @companies: Facebook, Amazon, Google
 */

/**
 * Approach: Two Pointers
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removeElement(nums, val) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
}

// Test cases
let nums1 = [3, 2, 2, 3];
let k1 = removeElement(nums1, 3);
console.log(k1, nums1.slice(0, k1)); // 2, [2,2]

let nums2 = [0, 1, 2, 2, 3, 0, 4, 2];
let k2 = removeElement(nums2, 2);
console.log(k2, nums2.slice(0, k2)); // 5, [0,1,3,0,4] (order may vary)

module.exports = { removeElement };
