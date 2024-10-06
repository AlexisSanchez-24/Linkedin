export function costCalculator(amount) {
    const transactionFee = 3;
    const interestRate = 0.01;

    const interest = amount * interestRate;

    const totalCost = amount + transactionFee + interest;

    return totalCost;
}