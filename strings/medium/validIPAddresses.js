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
    if (string.length < 4) return [];
    let validIPAddresses = [];

    for (let i = 1; i < 4; i++) {
        let part1 = string.substring(0, i);
        if (!isValidPart(part1)) continue;

        for (let j = i + 1; j < i + 4 && j < string.length; j++) {
            let part2 = string.substring(i, j);
            if (!isValidPart(part2)) continue;

            for (let k = j + 1; k < j + 4 && k < string.length; k++) {
                let part3 = string.substring(j, k);
                let part4 = string.substring(k, string.length);
                if (isValidPart(part3) && isValidPart(part4)) {
                    validIPAddresses.push(`${part1}.${part2}.${part3}.${part4}`)
                }
            }
        }
    }

    return validIPAddresses;

};

const isValidPart = (part) => {
    if (part.length > 3 || part.length < 1) return false
    let num = +part;
    if (num > 255) return false;
    return part.length === num.toString().length;
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
