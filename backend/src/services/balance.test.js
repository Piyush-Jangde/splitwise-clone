const {
  calculateRawBalances,
  calculateSimplifiedBalances,
} = require("./balance.service");

function runTest(name, expenses, settlements = []) {
  console.log("\n==============================");
  console.log(name);
  console.log("==============================");

  const raw = calculateRawBalances(expenses, settlements);
  const simplified = calculateSimplifiedBalances(raw);

  console.log("Raw Balances:");
  console.log(raw);

  console.log("Simplified Balances:");
  console.log(simplified);
}

/**
 * TEST 1: Equal Split
 * A paid 900 for A, B, C, D
 * Each share = 225
 */
runTest("TEST 1: Equal Split", [
  {
    payerId: "A",
    amount: 900,
    participants: [
      { userId: "A", amountOwed: 225 },
      { userId: "B", amountOwed: 225 },
      { userId: "C", amountOwed: 225 },
      { userId: "D", amountOwed: 225 },
    ],
  },
]);

/**
 * Expected:
 * B -> A : 225
 * C -> A : 225
 * D -> A : 225
 */


/**
 * TEST 2: Unequal Split
 * A paid 1000
 * A owes 100, B owes 200, C owes 700
 */
runTest("TEST 2: Unequal Split", [
  {
    payerId: "A",
    amount: 1000,
    participants: [
      { userId: "A", amountOwed: 100 },
      { userId: "B", amountOwed: 200 },
      { userId: "C", amountOwed: 700 },
    ],
  },
]);

/**
 * Expected:
 * B -> A : 200
 * C -> A : 700
 */


/**
 * TEST 3: Percentage Split
 * A paid 1000
 * A = 10%, B = 20%, C = 70%
 */
runTest("TEST 3: Percentage Split", [
  {
    payerId: "A",
    amount: 1000,
    participants: [
      { userId: "A", amountOwed: 100 },
      { userId: "B", amountOwed: 200 },
      { userId: "C", amountOwed: 700 },
    ],
  },
]);

/**
 * Expected:
 * B -> A : 200
 * C -> A : 700
 */


/**
 * TEST 4: Share Split
 * A paid 1200
 * A = 1 share, B = 2 shares, C = 3 shares
 * Total shares = 6
 * One share = 200
 */
runTest("TEST 4: Share Split", [
  {
    payerId: "A",
    amount: 1200,
    participants: [
      { userId: "A", amountOwed: 200 },
      { userId: "B", amountOwed: 400 },
      { userId: "C", amountOwed: 600 },
    ],
  },
]);

/**
 * Expected:
 * B -> A : 400
 * C -> A : 600
 */


/**
 * TEST 5: Settlement
 * A paid 900 for A, B, C
 * Each owes 300
 * B pays A 100
 */
runTest(
  "TEST 5: Settlement",
  [
    {
      payerId: "A",
      amount: 900,
      participants: [
        { userId: "A", amountOwed: 300 },
        { userId: "B", amountOwed: 300 },
        { userId: "C", amountOwed: 300 },
      ],
    },
  ],
  [
    {
      payerId: "B",
      receiverId: "A",
      amount: 100,
    },
  ]
);

/**
 * Expected:
 * B -> A : 200
 * C -> A : 300
 */


/**
 * TEST 6: Opposite Debts
 * A paid 300 for A and B
 * B paid 100 for A and B
 */
runTest("TEST 6: Opposite Debts", [
  {
    payerId: "A",
    amount: 300,
    participants: [
      { userId: "A", amountOwed: 150 },
      { userId: "B", amountOwed: 150 },
    ],
  },
  {
    payerId: "B",
    amount: 100,
    participants: [
      { userId: "A", amountOwed: 50 },
      { userId: "B", amountOwed: 50 },
    ],
  },
]);

/**
 * Expected:
 * B -> A : 100
 */


/**
 * TEST 7: Simplification
 *
 * Raw situation:
 * B owes A 300
 * C owes A 200
 * A owes D 500
 *
 * Net:
 * A receives 500 but owes 500 = 0
 * B owes 300
 * C owes 200
 * D receives 500
 *
 * Simplified:
 * B -> D : 300
 * C -> D : 200
 */
runTest("TEST 7: Simplification", [
  {
    payerId: "A",
    amount: 900,
    participants: [
      { userId: "A", amountOwed: 400 },
      { userId: "B", amountOwed: 300 },
      { userId: "C", amountOwed: 200 },
    ],
  },
  {
    payerId: "D",
    amount: 500,
    participants: [
      { userId: "A", amountOwed: 500 },
      { userId: "D", amountOwed: 0 },
    ],
  },
]);