// You recently started freelance software development and have been offered a variety of job opportunities. Each job has a deadline, meaning there is no value in completing the work after the deadline. Additionally, each job has an associated payment representing the profit for completing that job. Given this information, write a function that returns the maximum profit that can be obtained in a 7-day period.

// Each job will take 1 full day to complete, and the deadline will be given as the number of days left to complete the job. For example, if a job has a deadline of 1, then it can only be completed if it is the first job worked on. If a job has a deadline of 2, then it could be started on the first or second day.

// Note: There is no requirement to complete all of the jobs. Only one job can be worked on at a time, meaning that in some scenarios it will be impossible to complete them all.

// Sample Input: [
//     { "deadline": 1, "payment": 1 },
//     { "deadline": 2, "payment": 1 },
//     { "deadline": 2, "payment": 2 },
// ]

// Sample Output: 3 - Job 0 would be completed first, followed by job 2. Job 1 is not completed.

const optimalFreelancing = (jobs) => {
    jobs.sort((a, b) => b.payment - a.payment);
    let timeline = new Array(7).fill(false);
    let maxDays = 7;
    let profit = 0;

    for (const job of jobs) {
        const deadline = job.deadline;
        for (let time = deadline - 1; time >= 0; time--) {
            if(timeline[time] === false) {
                timeline[time] = true;
                profit += job.payment;
                break;
            }
        }
    }
    return profit;
}


console.log(optimalFreelancing([
    { "deadline": 1, "payment": 1 },
    { "deadline": 2, "payment": 1 },
    { "deadline": 2, "payment": 2 },
])) // 3