/**
 * @problemNumber: 4
 * @problemName: Median of Two Sorted Arrays
 * @difficulty: Hard
 * @topics: Array, Binary Search
 * @companies: Amazon, Google, Microsoft, Apple, Bloomberg
 */

/**
 * Approach: Binary Search
 * Time Complexity: O(log(min(m, n)))
 * Space Complexity: O(1)
 * 
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function findMedianSortedArrays(nums1, nums2) {
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    const m = nums1.length;
    const n = nums2.length;
    let left = 0;
    let right = m;
    const half = Math.floor((m + n + 1) / 2);

    while (left <= right) {
        const i = Math.floor((left + right) / 2);
        const j = half - i;

        const nums1Left = (i === 0) ? -Infinity : nums1[i - 1];
        const nums1Right = (i === m) ? Infinity : nums1[i];
        const nums2Left = (j === 0) ? -Infinity : nums2[j - 1];
        const nums2Right = (j === n) ? Infinity : nums2[j];

        if (nums1Left <= nums2Right && nums2Left <= nums1Right) {
            // Found correct partition
            if ((m + n) % 2 === 1) {
                return Math.max(nums1Left, nums2Left);
            } else {
                return (Math.max(nums1Left, nums2Left) + Math.min(nums1Right, nums2Right)) / 2;
            }
        } else if (nums1Left > nums2Right) {
            right = i - 1;
        } else {
            left = i + 1;
        }
    }

    throw new Error("Input arrays are not sorted or invalid.");
}

// Test cases
console.log(findMedianSortedArrays([1, 3], [2]));       // 2
console.log(findMedianSortedArrays([1, 2], [3, 4]));     // 2.5

module.exports = findMedianSortedArrays;
