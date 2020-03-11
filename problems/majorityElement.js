// Majority Element
// Given an array with size of n, return the majority element from that array. 
// The majority element is the element that appears more than (n / 2) times.


// Example:
// Input: [3,3,3]
// Output: 3

// Input: [2,2,1,1,1,2,2]
// Output: 2

// Some notes: the output will be an integer, not an array
// You can assume the array is non empty and will always have a majority element

const majorityElement = function(nums) {
    // count how many times an element appears in the array
    // compare that element to the size of the array
    // if the integer is larger than size / 2, return that integer
    // else continue searching through the array
    
    // initialize a map
    let map = {}
    
    // count how many times an element appears in the array
    for(let i = 0; i < nums.length; i++) {
        // if no element appears, set to 0
        if(!map[nums[i]]) {
            map[nums[i]] = 0
        }
        map[nums[i]]++
    }
    
    // extract the values from the object
    let values = Object.values(map)
    // if the value is larger than size / 2, return that integer
    let filtered = values.filter(x => x > nums.length / 2)[0]
    // look through the object and return the key value that matches the filtered integer
    return Object.keys(map).find(key => map[key] === filtered)
}