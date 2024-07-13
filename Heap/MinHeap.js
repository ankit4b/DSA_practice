/*
-> Heap : 
- A heap is a specialized tree-based data structure that satisfies the heap property. heaps are specifically designed to ensure that the highest (or lowest) priority element is readily accessible.
- This property makes heaps invaluable in various applications, including priority queues, heap sort algorithms, and graph algorithms like Dijkstra’s shortest path algorithm.

-> Types of heaps
- Heaps come primarily in two variations:

1. Min Heap: In a min heap, the root node holds the minimum element in the entire heap. Each parent node is smaller than its child nodes, ensuring the smallest element is always at the root.
2. Max Heap: Conversely, in a max heap, the root node holds the maximum element, and each parent node is greater than its child nodes, ensuring the largest element resides at the root.

*/

// MIN HEAP implementation
class MinHeap {
    constructor() {
        this.heap = [];
    }

    // Helper methods to get indices
    getLeftChildIndex(parent_index) {
        return 2 * parent_index + 1;
    }

    getRightChildIndex(parent_index) {
        return 2 * parent_index + 2;
    }

    getParentIndex(child_index) {
        return Math.floor((child_index - 1) / 2);
    }

    // Check if a node has a parent
    hasParent(index) {
        return this.getParentIndex(index) >= 0;
    }

    // Swap two elements in the heap
    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    // Get the size of the heap
    size() {
        return this.heap.length;
    }

    // Insert a new value into the heap
    insert(value) {
        this.heap.push(value);
        this.heapifyUp(); // Maintain the heap property
    }

    // Remove and return the minimum value from the heap
    removeMin() {
        if (this.size() === 0) {
            throw new Error("Heap is empty");
        }
        const minValue = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(); // Maintain the heap property
        return minValue;
    }

    // Restore the heap property by moving a node up
    heapifyUp() {
        let currentIndex = this.heap.length - 1;
        let parentIndex = this.getParentIndex(currentIndex);
        while (this.hasParent(currentIndex) && this.heap[currentIndex] < this.heap[parentIndex]) {
            this.swap(currentIndex, parentIndex);
            currentIndex = parentIndex;
            parentIndex = this.getParentIndex(currentIndex);
        }
    }

    // Restore the heap property by moving a node down
    heapifyDown() {
        let currentIndex = 0;
        let leftChildIndex = this.getLeftChildIndex(currentIndex);
        let rightChildIndex = this.getRightChildIndex(currentIndex);
        let smallerChildIndex = leftChildIndex;

        while (leftChildIndex < this.size()) {
            // Find the smaller child
            if (rightChildIndex < this.size() && this.heap[rightChildIndex] < this.heap[smallerChildIndex]) {
                smallerChildIndex = rightChildIndex;
            }

            // If current node is smaller than its children, heap property is satisfied
            if (this.heap[currentIndex] <= this.heap[smallerChildIndex]) {
                break;
            }

            // Otherwise, swap with the smaller child
            this.swap(currentIndex, smallerChildIndex);
            currentIndex = smallerChildIndex;
            leftChildIndex = this.getLeftChildIndex(currentIndex);
            rightChildIndex = this.getRightChildIndex(currentIndex);
            smallerChildIndex = leftChildIndex;
        }
    }

    // Print all elements in the heap
    printHeap() {
        for (let num of this.heap) {
            console.log(num);
        }
    }
}

// Usage example
const priorityQueue = new MinHeap();
priorityQueue.insert(10);
priorityQueue.insert(5);
priorityQueue.insert(20);
priorityQueue.insert(3);

console.log("Print -----------------------------");
priorityQueue.printHeap();

priorityQueue.removeMin();

console.log("Print -----------------------------");
priorityQueue.printHeap();


/*
OUTPUT:
Print -----------------------------
3
5
20
10
Print -----------------------------
5
10
20
*/
