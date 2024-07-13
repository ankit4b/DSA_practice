/*
Given an array arr[] and an integer k where k is smaller than the size of the array, the task is to find the kth smallest element in the given array. It is given that all array elements are distinct.

Examples:
---
Input: n = 6, arr[] = 7 10 4 3 20 15, k = 3
Output : 7
Explanation : 3rd smallest element in the given array is 7.
---
Input: n = 5, arr[] = 7 10 4 20 15, k = 4
Output : 15
Explanation :4th smallest element in the given array is 15.
---

Expected Time Complexity: O(n*log(n))
Expected Auxiliary Space: O(log(n))

https://www.geeksforgeeks.org/problems/kth-smallest-element5635/1
*/

// First we have to implement MaxHeap here (as we don't directly have any library in js)
class MaxHeap{
  // ...
  // implementation
  // ...
}

function kthSmallest(arr,k){
    //code here
    let maxHeap = new MaxHeap();
    
    for(let num of arr){
        maxHeap.insert(num);
        
        if(maxHeap.size() > k){
            maxHeap.removeMax();
        }
    }
    
    return maxHeap.peak();
  }

kthSmallest([7, 10, 4, 3, 20, 15], 3)
// Output : 7

kthSmallest([7, 10, 4, 20, 15], 4)
// Output : 15
