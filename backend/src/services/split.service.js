const ApiError = require("../utils/apiError");

function roundMoney(value) {
  return Number(Number(value).toFixed(2));
}

function isMissing(value) {
  return value === undefined || value === null || value === "";
}

function validatePositiveAmount(amount) {
  const numericAmount = Number(amount);

  if (Number.isNaN(numericAmount) || numericAmount <= 0) {
    throw new ApiError(400, "Amount must be greater than zero");
  }

  return numericAmount;
}

function validateParticipants(participants) {
  if (!participants || !Array.isArray(participants) || participants.length === 0) {
    throw new ApiError(400, "Participants are required");
  }
}

function amountsMatch(a, b) {
  return Math.abs(roundMoney(a) - roundMoney(b)) < 0.01;
}

function calculateEqualSplit(amount, participantIds) {
  const total = validatePositiveAmount(amount);

  if (!participantIds || !Array.isArray(participantIds) || participantIds.length === 0) {
    throw new ApiError(400, "Participants are required");
  }

  const share = roundMoney(total / participantIds.length);

  const splits = participantIds.map((userId) => ({
    userId,
    amountOwed: share,
  }));

  const currentTotal = splits.reduce(
    (sum, split) => sum + split.amountOwed,
    0
  );

  const difference = roundMoney(total - currentTotal);

  if (difference !== 0) {
    splits[0].amountOwed = roundMoney(
      splits[0].amountOwed + difference
    );
  }

  return splits;
}

function calculateUnequalSplit(amount, customSplits) {
  const total = validatePositiveAmount(amount);
  validateParticipants(customSplits);

  for (const split of customSplits) {
    if (isMissing(split.amountOwed)) {
      throw new ApiError(400, "Each participant must have an amount owed");
    }

    const amountOwed = Number(split.amountOwed);

    if (Number.isNaN(amountOwed) || amountOwed < 0) {
      throw new ApiError(400, "Amount owed cannot be negative");
    }
  }

  const splitTotal = customSplits.reduce(
    (sum, split) => sum + Number(split.amountOwed),
    0
  );

  if (!amountsMatch(splitTotal, total)) {
    throw new ApiError(
      400,
      "Unequal split amounts must add up to total expense amount"
    );
  }

  return customSplits.map((split) => ({
    userId: split.userId,
    amountOwed: roundMoney(split.amountOwed),
  }));
}

function calculatePercentageSplit(amount, percentageSplits) {
  const total = validatePositiveAmount(amount);
  validateParticipants(percentageSplits);

  for (const split of percentageSplits) {
    if (isMissing(split.percentage)) {
      throw new ApiError(400, "Each participant must have a percentage");
    }

    const percentage = Number(split.percentage);

    if (Number.isNaN(percentage) || percentage <= 0) {
      throw new ApiError(400, "Percentage must be greater than zero");
    }
  }

  const totalPercentage = percentageSplits.reduce(
    (sum, split) => sum + Number(split.percentage),
    0
  );

  if (!amountsMatch(totalPercentage, 100)) {
    throw new ApiError(400, "Percentages must add up to 100");
  }

  const splits = percentageSplits.map((split) => ({
    userId: split.userId,
    percentage: roundMoney(Number(split.percentage)),
    amountOwed: roundMoney(
      (total * Number(split.percentage)) / 100
    ),
  }));

  const currentTotal = splits.reduce(
    (sum, split) => sum + split.amountOwed,
    0
  );

  const difference = roundMoney(total - currentTotal);

  if (difference !== 0) {
    splits[0].amountOwed = roundMoney(
      splits[0].amountOwed + difference
    );
  }

  return splits;
}

function calculateShareSplit(amount, shareSplits) {
  const total = validatePositiveAmount(amount);
  validateParticipants(shareSplits);

  for (const split of shareSplits) {
    if (isMissing(split.shares)) {
      throw new ApiError(400, "Each participant must have shares");
    }

    const shares = Number(split.shares);

    if (!Number.isInteger(shares) || shares <= 0) {
      throw new ApiError(400, "Shares must be greater than zero");
    }
  }

  const totalShares = shareSplits.reduce(
    (sum, split) => sum + Number(split.shares),
    0
  );

  const splits = shareSplits.map((split) => ({
    userId: split.userId,
    shares: Number(split.shares),
    amountOwed: roundMoney(
      (total * Number(split.shares)) / totalShares
    ),
  }));

  const currentTotal = splits.reduce(
    (sum, split) => sum + split.amountOwed,
    0
  );

  const difference = roundMoney(total - currentTotal);

  if (difference !== 0) {
    splits[0].amountOwed = roundMoney(
      splits[0].amountOwed + difference
    );
  }

  return splits;
}

module.exports = {
  calculateEqualSplit,
  calculateUnequalSplit,
  calculatePercentageSplit,
  calculateShareSplit,
};