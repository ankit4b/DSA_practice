/*
Problem statement:
-------------------
Alice has some number of cards and she wants to rearrange the cards into groups so that each group is of size groupSize, and consists of groupSize consecutive cards.
Given an integer array hand where hand[i] is the value written on the ith card and an integer groupSize, return true if she can rearrange the cards, or false otherwise.

Example 1:
Input: hand = [1,2,3,6,2,3,4,7,8], groupSize = 3
Output: true
Explanation: Alice's hand can be rearranged as [1,2,3],[2,3,4],[6,7,8]

Example 2:
Input: hand = [1,2,3,4,5], groupSize = 4
Output: false
Explanation: Alice's hand can not be rearranged into groups of 4.

Solve Approach
--------------------
1. Check Divisibility:
Return false if the total number of cards (hand.length) is not divisible by groupSize, as it's impossible to form groups of equal size otherwise.

2. Count Frequencies:
Use a map (count) to count the frequency of each card value in hand.

3. Sort and Process Cards:
Convert the keys of count to a min-heap (sorted array) to process cards in ascending order.

4. Form Groups:
While there are cards left to process:
>> Take the smallest card (first) from the heap.
>> Try to form a group starting from this card up to first + groupSize - 1.
>> For each card in this range, decrement its count in count.
>> If any card's count drops to zero, remove it from the heap.
>> If a required card is missing (not in count), return false.

5. Return True:
>> If all groups are successfully formed, return true.
*/

/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function(hand, groupSize) {
    if(hand.length % groupSize !== 0) return false;

    count = {};

    for(num of hand){
        if(num in count) count[num]++;
        else count[num] = 1;
    }
    let minHeap = Object.keys(count).map(Number);
    minHeap.sort((a, b) => a-b );

    while(minHeap.length > 0){
        first = minHeap[0];

        for(let i=first; i<(first+groupSize); i++){
            if(!(i in count)) return false;
            count[i]--;
            if(count[i] === 0){
                if(i !== minHeap[0]){
                    return false
                }
                minHeap.shift();
            }
        }
    }

    return true;

};
