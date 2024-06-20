/*
A Linked List is a linear data structure where elements are stored in nodes, and each node contains a reference (or link) to the next node in the sequence. Unlike arrays, linked lists do not store elements in contiguous memory locations, allowing for efficient insertions and deletions.

>> Node:            Represents an element in the linked list, containing the data and a pointer to the next node.
>> LinkedList:      Represents the linked list itself, with methods to manipulate the list.
>> size():          Returns the number of nodes in the list.
>> addFirst(data):  Adds a new node with the given data at the beginning of the list.
>> addLast(data):   Adds a new node with the given data at the end of the list.
>> addAt(index,     data): Adds a new node with the given data at the specified index.
>> removeTop():     Removes the first node of the list.
>> removeLast():    Removes the last node of the list.
>> removeAt(index): Removes the node at the specified index.
>> print():         Prints all the nodes' data in the list.
*/

// Class representing a Node in a linked list
class Node {
  constructor(data) {
    this.data = data; // Data of the node
    this.next = null; // Pointer to the next node in the list
  }
}

// Class representing a Linked List
class LinkedList {
  constructor() {
    this.head = null; // Head (first node) of the linked list
  }

  // Method to get the size of the linked list
  size() {
    let count = 0;
    let curr = this.head;

    // Traverse the list and count the nodes
    while (curr) {
      count++;
      curr = curr.next;
    }

    return count;
  }

  // Method to add a node at the beginning of the linked list
  addFirst(data) {
    const newNode = new Node(data);
    newNode.next = this.head; // Point new node to the current head
    this.head = newNode; // Update the head to the new node
  }

  // Method to add a node at the end of the linked list
  addLast(data) {
    const newNode = new Node(data);
    
    // If the list is empty, make newNode the head
    if (!this.head) {
      this.head = newNode;
      return;
    }
    
    let curr = this.head;
    
    // Traverse to the last node
    while (curr.next) {
      curr = curr.next;
    }
    
    curr.next = newNode; // Link the last node to newNode
  }

  // Method to add a node at a specific index
  addAt(index, data) {
    if (index > this.size() || index < 0) {
      console.log("Invalid index");
      return;
    }
    
    const newNode = new Node(data);
    
    // If adding at the head (index 0)
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    
    let curr = this.head;
    
    // Traverse to the node before the index
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    
    newNode.next = curr.next; // Point newNode to the next node
    curr.next = newNode; // Link the current node to newNode
  }

  // Method to remove the first node (head) of the linked list
  removeTop() {
    if (!this.head) {
      return;
    }
    
    this.head = this.head.next; // Update the head to the next node
  }

  // Method to remove the last node of the linked list
  removeLast() {
    if (!this.head) {
      return;
    }

    // If there is only one node
    if (!this.head.next) {
      this.head = null;
      return;
    }
    
    let curr = this.head;
    
    // Traverse to the second last node
    while (curr.next.next) {
      curr = curr.next;
    }
    
    curr.next = null; // Remove the last node
  }

  // Method to remove a node at a specific index
  removeAt(index) {
    if (index >= this.size() || index < 0) {
      console.log("Invalid index");
      return;
    }
    
    // If removing the head (index 0)
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    
    let curr = this.head;
    
    // Traverse to the node before the index
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    
    if (curr.next) {
      curr.next = curr.next.next; // Remove the node at the index
    }
  }

  // Method to print the linked list
  print() {
    let curr = this.head;
    
    // Traverse and print each node's data
    while (curr) {
      console.log(curr.data);
      curr = curr.next;
    }
  }
}

// Example usage of the LinkedList class
let linkedlist = new LinkedList();
linkedlist.addFirst(10);
linkedlist.addFirst(20);
linkedlist.addLast(30);
linkedlist.addAt(1, 50);
linkedlist.print();

console.log("Remove top -------------------");
linkedlist.removeTop();
linkedlist.print();

console.log("Remove last -------------------");
linkedlist.removeLast();
linkedlist.print();

console.log("Remove at -------------------");
linkedlist.removeAt(1);
linkedlist.print();

console.log("-------------------");
console.log("Size : ", linkedlist.size());

/*
Output
----------------
20
50
10
30
Remove top -------------------
50
10
30
Remove last -------------------
50
10
Remove at -------------------
50
-------------------
Size :  1
*/
