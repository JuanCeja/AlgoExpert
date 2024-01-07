// You're given a string of length 12 or smaller, containing only digits. Write a function that returns all the possible IP addresses that can be created by inserting three . in the string.

// An IP address is a sequence of four positive integers that are separated by ., where each individual integer is within the range 0 - 225, inclusively.

// An IP address isn' t valid if any of the individual integers contains leading 0's. For example, "192.168.0.1" is valid IP address, but "192.168.00.1" and "192.168.0.01" aren't, because they contain "00" and 01, respectively. Another example of a valid IP address is "99.1.1.10"; conversely, "991.1.1.0" isn't valid, because "991" is greater than 225.

// Your function should return the IP addresses in string format and in no particular order. If no valid IP addresses can be created from the string, your function should return an empty list.


// Sample Input:
// string = "1921680"

// Sample Output: 
// [
//     "1.9.216.80",
//     "1.92.16.80",
//     "1.92.168.0",
//     "19.2.16.80",
//     "19.21.6.80",
//     "19.21.68.0",
//     "19.216.8.0",
//     "192.1.6.80",
//     "192.1.68.0",
//     "192.16.8.0",
// ]

const validIPAddresses = (string) => {
    // check to see if the string is of length
    // valid IP addresses

    // iterate for our first section
        // create our part
        // test our part and keep going or iterate to next element in string
        
        // iterate for our second section
            // create our part
            // test our part and keep going or iterate to next element in string

            // iterate for our third & fourth section
                // create our part
                // test our part and keep going or iterate to next element in string

};

const isValidPart = (part) => {
    // if part > 3 || < 1 return false
    // convert part to num
    // if part > 255 return false
    // return length of string === num length
}

console.log(validIPAddresses("1921680"));
// [
//     "1.9.216.80",
//     "1.92.16.80",
//     "1.92.168.0",
//     "19.2.16.80",
//     "19.21.6.80",
//     "19.21.68.0",
//     "19.216.8.0",
//     "192.1.6.80",
//     "192.1.68.0",
//     "192.16.8.0",
// ]