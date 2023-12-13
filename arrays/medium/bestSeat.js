// You walk into a theatre you're about to see a show in. The usher within the theatre walks you to your row and mentions you're allowed to sit anywhere within the given row. Naturally you'd like to sit in the seat that gives you the most space. You also would prefer this space to be evenly distributed on either side of you (e.g. if there are three empty seats in a row, you would prefer to sit in the middle of those three seats).

// Given the theatre row represented as an integer array, return the seat index of where you should sit. Ones represent occupied seats and zeroes represent empty seats.

// You may assume that someone is always sitting in the first and last seat of the row. Whenever there are two equally good seats, you should sit in the seat with the lower index. If there is no seat to sit in, return -1. The given array will always have a length of at least one and contain only ones and zeroes.

// Sample Input: 
// seats = [1, 0, 1, 0, 0, 0, 1]

// Sample Output:
// 4

const bestSeat = (seats) => {
    // create variables to store bestSeat, leftSpace, rightSpace, and counter
    let bestSeat;
    let biggestSpace = 0;
    let counter = -Infinity;

    // iterate through the array starting at 1 and ending at 1 before the end
    for (let i = 1; i < seats.length - 2; i++) {
        // create leftSeat and rightSeat vars
        let leftSeat = i - 1;
        let rightSeat = i + 1;
        // create a while loop that goes left and right if they are empty
        while(seats[leftSeat] === 0 && seats[rightSeat] === 0) {
            // if the left seat is empty and right is empty move both seats and increment counter by 2.
            leftSeat--;
            rightSeat++;
            counter += 2;
        };

        // if counter > biggestSpace
        if(counter > biggestSpace) {
            // set bestSeat to current index
            bestSeat = i;
        }
        // else set counter back to 0
        else counter = 0;
    };
    // return bestSeat
    return bestSeat;
};

console.log(bestSeat([1, 0, 1, 0, 0, 0, 1])); // 4