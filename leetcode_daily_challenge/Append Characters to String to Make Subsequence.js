/*
Problem statement: 
-------------------
You are given two strings s and t consisting of only lowercase English letters. Return the minimum number of characters that need to be appended to the end of s so that t becomes a subsequence of s. A subsequence is a string that can be derived from another string by deleting some or no characters without changing the order of the remaining characters.
Input: s = "coaching", t = "coding"
Output: 4
Explanation: Append the characters "ding" to the end of s so that s = "coachingding".
Now, t is a subsequence of s ("coachingding").
It can be shown that appending any 3 characters to the end of s will never make t a subsequence.

Solve Approach
--------------------
1. Initialize Pointers:
>> s_start and t_start are set to 0. These pointers will traverse the strings s and t.

2. Traverse Strings:
>> Use a while loop to go through both strings as long as neither pointer has reached the end of its respective string.
>> If characters s[s_start] and t[t_start] match, increment both pointers.
>> If they don't match, increment only s_start.

3. Determine Remaining Characters:
>> After the loop, if t_start equals the length of t, t is already a subsequence of s and no characters need to be appended, so return 0.
>> If not, return the difference t.length - t_start, which represents the number of characters that need to be appended to s to make t a subsequence.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function(s, t) {
    let s_start = 0;
    let t_start = 0;
    let count = 0;

    while(s_start < s.length && t_start < t.length){
        if(s[s_start] === t[t_start]){
            s_start++;
            t_start++;
        } else{
            s_start++;
        }
    }

    if(t_start === t.length){
        return 0;
    } 

    return t.length - t_start;
};
