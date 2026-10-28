"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateInvestment(data) {
    const { initialAmount, annualContribution, expectedReturn, duration } = data;
    if (initialAmount < 0) {
        return 'Initial investment amount must be at least zero.';
    }
    if (duration <= 0) {
        return 'No valid amount of years provided.';
    }
    if (expectedReturn < 0) {
        return 'Expected return must be at least zero.';
    }
    let total = initialAmount;
    let totalContributions = 0;
    let totalInterestEarned = 0;
    const annualResults = [];
    for (let i = 0; i < duration; i++) {
        total = total * (1 + expectedReturn); // 0.08
        totalInterestEarned = total - totalContributions - initialAmount;
        totalContributions = totalContributions + annualContribution;
        total = total + annualContribution;
        annualResults.push({
            year: `Year ${i + 1}`,
            totalAmount: total,
            totalInterestEarned,
            totalContributions
        });
    }
    return annualResults;
}
function printResults(results) {
    if (typeof results === 'string') {
        console.log(results);
        return;
    }
    for (const yearEndResult of results) {
        console.log(yearEndResult.year);
        console.log(`Total: ${yearEndResult.totalAmount.toFixed(0)}`);
        console.log(`Total Contributions: ${yearEndResult.totalContributions.toFixed(0)}`);
        console.log(`Total Interest Earned: ${yearEndResult.totalInterestEarned.toFixed(0)}`);
        console.log('--------------------------');
    }
}
const investmentData = {
    initialAmount: 1000,
    annualContribution: 120,
    expectedReturn: 0.08,
    duration: 10
};
const results = calculateInvestment(investmentData);
printResults(results);
// const investment: Data = {
//     initialAmount: 1000,
//     annualContribution: 120,
//     expectedReturn: 8,
//     duration: 30
// }
// function calculateInvestment(data: Data) {
//     let rate = data.expectedReturn / 100
//     let currentBalance = data.initialAmount
//     let result: number[] = []
//     for(let i = 0; i < data.duration; i++) {
//         let x = currentBalance + data.annualContribution
//         let y = x * rate
//         currentBalance += y
//         result.push(Math.round(currentBalance * 100) / 100)
//     }
//     return result
// } // => result[]
// function printResults(results: number[]) {
//     console.log(results)
// }
// const results = calculateInvestment(investment)
// printResults(results)
//# sourceMappingURL=calculator.js.map