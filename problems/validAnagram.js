// Valid Anagram

// Given two strings, check to see if string t is an anagram of string s

// Example:

// Input: s = "anagram" t = "nagaram"
// Output: true

// Example 2:

// Input: s = "rat" t = "car"
// Output: false

// Notes: input is going to be two strings. output is going to be a boolean. Anagrams have to have the same length, right? Check both strings to see if they contain the same letters, if not, it's not a valid anagram

// one solution:

var isAnagram = function(s, t) {
    // checks to see if the sorted string equals the other sorted string, return true if so, false if not
    return s.split('').sort().join('') === t.split('').sort().join('')
};

// another possible solution: for follow up (what if the inputs contained unicode characters?)

var isAnagram = function(s, t) {
    // create array for 256 characters with 0s
    let map = Array(256).fill(0)
    
    // if the string lengths dont' match, then it's not an anagram and we can return false
    if(s.length !== t.length) {
        return false
    }

    // loop through both strings counting each time one character is found in string s, but decreasing the count for string t
    // if an anagram is found, they will essentially cancel each other out, and the array will still be full of zeroes
    for(let i = 0; i < s.length; i++) {
        map[s.charCodeAt(i)]++;
        map[t.charCodeAt(i)]--;
        
    }
    
    // if an anagram isn't found, some number other than zero will be in the array, and we loop through the array to find a positive number, and return false
    for(let i = 0; i < 256; i++) {
        if(map[i]) {
            return false
        }
    }

    // if no other conditions are met, return true
    return true
};