/*
Problem statement:
-------------------
Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.
Letters are case sensitive, for example, "Aa" is not considered a palindrome.

Example 1:
Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

Example 2:
Input: s = "a"
Output: 1
Explanation: The longest palindrome that can be built is "a", whose length is 1.

Solve Approach
--------------------
1. Count Character Frequencies:
>> Use a map (object) to count the frequency of each character in the string s.

2. Calculate Palindrome Length:
>> Initialize count to keep track of the length of the longest palindrome.
>> Initialize oddCount to track the number of characters that appear an odd number of times.

3. Iterate over the frequency map:
>> If a character's frequency is even, add it to count.
>> If a character's frequency is odd, add the largest even part to count and increment oddCount.

4. Adjust for Center Character:
>> If there are any characters with odd frequencies (oddCount > 0), add 1 to count to account for a single character that can sit in the center of the palindrome.

5. Return Result:
>> Return count, which represents the length of the longest possible palindrome.
*/

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let map = {};
    let count = 0;
    let oddCount = 0;
    
    for(let ch of s) {
      if(ch in map){
        map[ch]++;
      }else{
        map[ch]=1;
      }
    }
    
    for(ch in map){
      if(map[ch] > 1){
        if(map[ch] % 2 === 0){
          count += map[ch];
        }else{
          count += map[ch]-1;
          oddCount += 1;
        }
      } else{
        oddCount += 1;
      }
    }

    if(oddCount > 0){
      count += 1;
    }
    
    return count;
};
