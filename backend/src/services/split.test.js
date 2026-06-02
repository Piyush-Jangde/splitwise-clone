const {
  calculateEqualSplit,
  calculateUnequalSplit,
  calculatePercentageSplit,
  calculateShareSplit,
} = require("./split.service");

console.log("Equal Split");
console.log(calculateEqualSplit(900, ["A", "B", "C", "D"]));

console.log("Unequal Split");
console.log(
  calculateUnequalSplit([
    { userId: "A", amountOwed: 100 },
    { userId: "B", amountOwed: 200 },
    { userId: "C", amountOwed: 700 },
  ])
);

console.log("Percentage Split");
console.log(
  calculatePercentageSplit(1000, [
    { userId: "A", percentage: 10 },
    { userId: "B", percentage: 20 },
    { userId: "C", percentage: 70 },
  ])
);

console.log("Share Split");
console.log(
  calculateShareSplit(1200, [
    { userId: "A", shares: 1 },
    { userId: "B", shares: 2 },
    { userId: "C", shares: 3 },
  ])
);