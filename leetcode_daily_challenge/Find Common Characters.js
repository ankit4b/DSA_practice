/*
Problem statement:
-------------------
Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.

Example 1:
Input: words = ["bella","label","roller"]
Output: ["e","l","l"]

Example 2:
Input: words = ["cool","lock","cook"]
Output: ["c","o"]

Solve Approach
--------------------
1. Initialize Frequency Arrays:
>> Create an array min_frequencies to track the minimum frequency of each character (from 'a' to 'z') across all words, initialized to Number.MAX_VALUE.

2. Calculate Character Frequencies:
>> For each word in the input array words:
    - Create an array char_frequencies to count the frequency of each character in the current word.
    - Iterate over each character in the word and update its frequency in char_frequencies.
    - Update min_frequencies to keep the minimum frequency of each character across all words.

3. Build Result Array:
>> Iterate over min_frequencies. For each character, add it to the result array res the number of times it appears as determined by min_frequencies.

4. Return Result:
>> Return the array res containing all characters that appear in all words.
*/

/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    let res = [];
    let min_friquencies = new Array(26);
    min_friquencies.fill(Number.MAX_VALUE);

    for(let word of words){
        let char_freqencies = new Array(26);
        char_freqencies.fill(0);

        for(let i=0; i<word.length; i++){
            char_freqencies[word[i].charCodeAt() - 97]++;
        }

        for(let i=0; i<26; i++){
            min_friquencies[i] = Math.min(min_friquencies[i], char_freqencies[i]);
        }
    }

    for(let i=0; i<26; i++){
        while( min_friquencies[i] > 0 ){
            res.push(String.fromCharCode(97 + i));
            min_friquencies[i]--;
        }
    }

    return res;
};
