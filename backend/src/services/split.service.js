function roundMoney(value) {
  return Number(Number(value).toFixed(2));
}

function calculateEqualSplit(amount, participantIds) {
  const total = Number(amount);
  const share = roundMoney(total / participantIds.length);

  const splits = participantIds.map((userId) => ({
    userId,
    amountOwed: share,
  }));

  const currentTotal = splits.reduce((sum, split) => sum + split.amountOwed, 0);
  const difference = roundMoney(total - currentTotal);

  if (difference !== 0) {
    splits[0].amountOwed = roundMoney(splits[0].amountOwed + difference);
  }

  return splits;
}

function calculateUnequalSplit(customSplits) {
  const total = customSplits.reduce(
    (sum, split) => sum + Number(split.amountOwed),
    0
  );

  return customSplits.map((split) => ({
    userId: split.userId,
    amountOwed: roundMoney(split.amountOwed),
  }));
}

function calculatePercentageSplit(amount, percentageSplits) {
  const total = Number(amount);

  let totalPercentage = percentageSplits.reduce(
    (sum, split) => sum + Number(split.percentage),
    0
  );

  const splits = percentageSplits.map((split) => {
    const normalizedPercentage =
      Number(split.percentage) / totalPercentage;

    return {
      userId: split.userId,
      percentage: roundMoney(Number(split.percentage)),
      amountOwed: roundMoney(total * normalizedPercentage),
    };
  });

  const currentTotal = splits.reduce((sum, split) => sum + split.amountOwed, 0);
  const difference = roundMoney(total - currentTotal);

  if (difference !== 0) {
    splits[0].amountOwed = roundMoney(splits[0].amountOwed + difference);
  }

  return splits;
}

function calculateShareSplit(amount, shareSplits) {
  const total = Number(amount);

  const totalShares = shareSplits.reduce(
    (sum, split) => sum + Number(split.shares),
    0
  );

  const splits = shareSplits.map((split) => ({
    userId: split.userId,
    shares: Number(split.shares),
    amountOwed: roundMoney((total * Number(split.shares)) / totalShares),
  }));

  const currentTotal = splits.reduce((sum, split) => sum + split.amountOwed, 0);
  const difference = roundMoney(total - currentTotal);

  if (difference !== 0) {
    splits[0].amountOwed = roundMoney(splits[0].amountOwed + difference);
  }

  return splits;
}

module.exports = {
  calculateEqualSplit,
  calculateUnequalSplit,
  calculatePercentageSplit,
  calculateShareSplit,
};