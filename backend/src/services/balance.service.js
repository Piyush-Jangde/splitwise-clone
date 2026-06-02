function addBalance(balanceMap, debtorId, creditorId, amount) {
  if (debtorId === creditorId) return;

  const key = `${debtorId}->${creditorId}`;

  balanceMap[key] = (balanceMap[key] || 0) + Number(amount);
}

function normalizeBalances(balanceMap) {
  const normalized = {};

  for (const [key, amount] of Object.entries(balanceMap)) {
    const [debtorId, creditorId] = key.split("->");

    const reverseKey = `${creditorId}->${debtorId}`;

    if (normalized[reverseKey]) {
      normalized[reverseKey] -= amount;
    } else {
      normalized[key] = (normalized[key] || 0) + amount;
    }
  }

  return Object.entries(normalized)
    .filter(([_, amount]) => Math.abs(amount) > 0.01)
    .map(([key, amount]) => {
      const [debtorId, creditorId] = key.split("->");

      if (amount < 0) {
        return {
          debtorId: creditorId,
          creditorId: debtorId,
          amount: Number(Math.abs(amount).toFixed(2)),
        };
      }

      return {
        debtorId,
        creditorId,
        amount: Number(amount.toFixed(2)),
      };
    });
}


function calculateRawBalances(expenses, settlements = []) {
  const balanceMap = {};

  for (const expense of expenses) {
    const payerId = expense.payerId;

    for (const participant of expense.participants) {
      const participantId = participant.userId;
      const amountOwed = Number(participant.amountOwed);

      if (participantId !== payerId) {
        addBalance(balanceMap, participantId, payerId, amountOwed);
      }
    }
  }

  for (const settlement of settlements) {
    addBalance(
      balanceMap,
      settlement.payerId,
      settlement.receiverId,
      -Number(settlement.amount)
    );
  }

  return normalizeBalances(balanceMap);
}

function calculateSimplifiedBalances(rawBalances) {
  const netMap = {};

  for (const balance of rawBalances) {
    netMap[balance.debtorId] =
      (netMap[balance.debtorId] || 0) - balance.amount;

    netMap[balance.creditorId] =
      (netMap[balance.creditorId] || 0) + balance.amount;
  }

  const debtors = [];
  const creditors = [];

  for (const [userId, netAmount] of Object.entries(netMap)) {
    const rounded = Number(netAmount.toFixed(2));

    if (rounded < -0.01) {
      debtors.push({
        userId,
        amount: Math.abs(rounded),
      });
    }

    if (rounded > 0.01) {
      creditors.push({
        userId,
        amount: rounded,
      });
    }
  }

  const simplified = [];

  let i = 0;
  let j = 0;

  while (i < debtors.length && j < creditors.length) {
    const debtor = debtors[i];
    const creditor = creditors[j];

    const amount = Math.min(debtor.amount, creditor.amount);

    simplified.push({
      debtorId: debtor.userId,
      creditorId: creditor.userId,
      amount: Number(amount.toFixed(2)),
    });

    debtor.amount = Number((debtor.amount - amount).toFixed(2));
    creditor.amount = Number((creditor.amount - amount).toFixed(2));

    if (debtor.amount <= 0.01) i++;
    if (creditor.amount <= 0.01) j++;
  }

  return simplified;
}

module.exports = {
  calculateRawBalances,
  calculateSimplifiedBalances,
};