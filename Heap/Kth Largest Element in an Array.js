/*
Given an integer array nums and an integer k, return the kth largest element in the array.
Note that it is the kth largest element in the sorted order, not the kth distinct element.

Can you solve it without sorting?

**Examples:**

Input: nums = [3,2,1,5,6,4], k = 2
Output: 5
---
Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
Output: 4

https://leetcode.com/problems/kth-largest-element-in-an-array/
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// First we have to implement MinHeap here (as we don't directly have any library in js)
class MinHeap{
  // ...
  // implementation
  // ...
}
var findKthLargest = function(nums, k) {
    let minHeap = new MinHeap();

    for(let num of nums){
        minHeap.insert(num);
        if(minHeap.size() > k){
            minHeap.removeMin();
        }
    }

    return minHeap.peak();
};

findKthLargest([3,2,1,5,6,4], 2)
// Output : 5

findKthLargest([3,2,3,1,2,4,5,5,6], 4)
// Output : 4
