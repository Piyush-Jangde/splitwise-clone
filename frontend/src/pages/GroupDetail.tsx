import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

import { getGroupDetail } from "../services/groupService";
import { createExpense } from "../services/expenseService";
import { getGroupBalances } from "../services/balanceService";

import type { GroupDetailData } from "../types/groupDetail";
import type { SimplifiedBalance } from "../types/balance";
import type { SplitType } from "../types/expense"

import SettlementForm from "../components/SettlementForm";

function GroupDetail() {
  const { groupId } = useParams<{ groupId: string }>();

  const [group, setGroup] = useState<GroupDetailData | null>(null);
  const [isLoadingGroup, setIsLoadingGroup] = useState(Boolean(groupId));
  const [error, setError] = useState("");

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [payerId, setPayerId] = useState("");
  const [participantIds, setParticipantIds] = useState<string[]>([]);
  const [isCreatingExpense, setIsCreatingExpense] = useState(false);

  const [splitType, setSplitType] = useState<SplitType>("EQUAL");
  const [unequalAmounts, setUnequalAmounts] = useState<Record<string, string>>({});
  const [percentageSplits, setPercentageSplits] = useState<Record<string, string>>({});

  const [balances, setBalances] = useState<SimplifiedBalance[]>([]);
  const [isLoadingBalances, setIsLoadingBalances] = useState(Boolean(groupId));

 useEffect(() => {
  let ignore = false;

  if (!groupId) {
    return;
  }

  const currentGroupId=groupId;

  async function loadGroupAndBalances() {
    try {
      setError("");

      const [groupData, balanceData] = await Promise.all([
        
        getGroupDetail(currentGroupId),
        getGroupBalances(currentGroupId),
      ]);

      if (!ignore) {
        setGroup(groupData.group);
        setBalances(balanceData.simplifiedBalances);
      }
    } catch (error: unknown) {
      if (!ignore) {
        if (axios.isAxiosError(error)) {
            console.log("EXPENSE ERROR:", error.response?.data);

          setError(
            error.response?.data?.message ||
              error.response?.data ||
              "Failed to fetch group details"
          );
        } else {
          setError("Something went wrong");
        }
      }
    } finally {
      if (!ignore) {
        setIsLoadingGroup(false);
        setIsLoadingBalances(false);
      }
    }
  }

  loadGroupAndBalances();

  return () => {
    ignore = true;
  };
}, [groupId]);

  async function refreshBalances() {
    if (!groupId) {
      return;
    }

    try {
      setIsLoadingBalances(true);
      setError("");

      const data = await getGroupBalances(groupId);
      setBalances(data.simplifiedBalances);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        setError(
          error.response?.data?.message ||
            error.response?.data ||
            "Failed to refresh balances"
        );
      } else {
        setError("Something went wrong");
      }
    } finally {
      setIsLoadingBalances(false);
    }
  }

  function handleToggleParticipant(userId: string) {
    setParticipantIds((previousIds) => {
      if (previousIds.includes(userId)) {
        return previousIds.filter((id) => id !== userId);
      }

      return [...previousIds, userId];
    });
  }

  async function handleCreateEqualExpense(
    event: React.SyntheticEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (!group || !groupId) {
      setError("Group data is missing");
      return;
    }

    const numericAmount = Number(amount);
    if (splitType === "UNEQUAL") {
    const unequalTotal = participantIds.reduce(
        (sum, userId) =>
        sum + Number(unequalAmounts[userId] || 0),
        0
    );

    if (unequalTotal !== numericAmount) {
        setError(
        `Unequal amounts must total ₹${numericAmount}`
        );
        return;
    }
    }

    if (splitType === "PERCENTAGE") {
        const percentageTotal = participantIds.reduce(
            (sum, userId) =>
            sum + Number(percentageSplits[userId] || 0),
            0
        );

        if (percentageTotal !== 100) {
            setError("Percentage splits must add up to 100");
            return;
        }
    }

    if (!description.trim()) {
      setError("Description is required");
      return;
    }

    if (Number.isNaN(numericAmount) || numericAmount <= 0) {
      setError("Amount must be greater than zero");
      return;
    }

    if (!payerId) {
      setError("Please select who paid");
      return;
    }

    if (participantIds.length === 0) {
      setError("Please select at least one participant");
      return;
    }

    try {
      setError("");
      setIsCreatingExpense(true);
        console.log("EXPENSE PAYLOAD:", {
            description: description.trim(),
            amount: numericAmount,
            splitType,
            payerId,
            groupId,
            participants: participantIds.map((userId) => ({
                userId,
                amount:
                    splitType === "UNEQUAL"
                        ? Number(unequalAmounts[userId])
                        : undefined,
                percentage:
                    splitType === "PERCENTAGE"
                        ? Number(percentageSplits[userId])
                        : undefined,
            })),
        });
        const participantsPayload = participantIds.map((userId) => {
            if (splitType === "UNEQUAL") {
                return {
                userId,
                amountOwed: Number(unequalAmounts[userId]),
                };
            }

            if (splitType === "PERCENTAGE") {
                return {
                userId,
                percentage: Number(percentageSplits[userId]),
                };
            }

            return {
                userId,
            };
        });
      const data = await createExpense({
        description: description.trim(),
        amount: numericAmount,
        splitType,
        payerId,
        groupId,
        participants: participantsPayload,
      });

      setGroup({
        ...group,
        expenses: [data.expense, ...group.expenses],
      });

      await refreshBalances();

      setDescription("");
      setAmount("");
      setPayerId("");
      setParticipantIds([]);
      setSplitType("EQUAL");
      setUnequalAmounts({});
      setPercentageSplits({});
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        setError(
          error.response?.data?.message ||
            error.response?.data ||
            "Failed to create expense"
        );
      } else {
        setError("Something went wrong");
      }
    } finally {
      setIsCreatingExpense(false);
    }
  }

  function getMemberName(userId: string) {
    const member = group?.members.find(
      (member) => member.user.id === userId
    );

    return member?.user.fullName ?? "Unknown User";
  }

  if (!groupId) {
    return (
      <div>
        <Link to="/dashboard">← Back to Dashboard</Link>
        <p style={{ color: "red" }}>Group ID is missing</p>
      </div>
    );
  }

  return (
    <div>
      <header>
        <Link to="/dashboard">← Back to Dashboard</Link>

        <h1>{group?.name || "Group Details"}</h1>

        <p>Group ID: {groupId}</p>
        <p>Invite Code: {group?.inviteCode}</p>
        <p>Owner: {group?.owner.fullName}</p>
      </header>

      <hr />

      {error && <p style={{ color: "red" }}>{error}</p>}

      {isLoadingGroup && <p>Loading group...</p>}

      {!isLoadingGroup && group && (
        <>
          <section>
            <h2>Members</h2>

            {group.members.length === 0 ? (
              <p>No members found.</p>
            ) : (
              <ul>
                {group.members.map((member) => (
                  <li key={member.user.id}>
                    {member.user.fullName} ({member.user.email})
                  </li>
                ))}
              </ul>
            )}
          </section>

          <hr />

          <section>
            <h2>Create Expense</h2>

            <form onSubmit={handleCreateEqualExpense}>
                <div>
                    <label>Split Type</label>

                    <select
                        value={splitType}
                        onChange={(e) => setSplitType(e.target.value as SplitType)}
                    >
                        <option value="EQUAL">Equal</option>
                        <option value="UNEQUAL">Unequal</option>
                        <option value="PERCENTAGE">Percentage</option>
                        <option value="SHARE">Share</option>
                    </select>
                </div>
              <div>
                <label htmlFor="description">Description</label>
                <input
                  id="description"
                  type="text"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                  placeholder="Dinner"
                />
              </div>

              <div>
                <label htmlFor="amount">Amount</label>
                <input
                  id="amount"
                  type="number"
                  value={amount}
                  onChange={(event) => setAmount(event.target.value)}
                  placeholder="1000"
                />
              </div>

              <div>
                <label htmlFor="payerId">Paid By</label>
                <select
                  id="payerId"
                  value={payerId}
                  onChange={(event) => setPayerId(event.target.value)}
                >
                  <option value="">Select payer</option>
                  {group.members.map((member) => (
                    <option key={member.user.id} value={member.user.id}>
                      {member.user.fullName}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <p>Participants</p>

                {group.members.map((member) => (
                  <label key={member.user.id} style={{ display: "block" }}>
                    <input
                      type="checkbox"
                      checked={participantIds.includes(member.user.id)}
                      onChange={() => handleToggleParticipant(member.user.id)}
                    />
                    {member.user.fullName}
                  </label>
                ))}
              </div>
                {splitType === "UNEQUAL" && (
                    <div>
                        <h3>Unequal Split Amounts</h3>

                        {participantIds.map((userId) => {
                        const member = group.members.find(
                            (m) => m.user.id === userId
                        );

                        return (
                            <div key={userId}>
                            <label>{member?.user.fullName}</label>

                            <input
                                type="number"
                                value={unequalAmounts[userId] || ""}
                                onChange={(e) =>
                                setUnequalAmounts((prev) => ({
                                    ...prev,
                                    [userId]: e.target.value,
                                }))
                                }
                            />
                            </div>
                        );
                        })}
                    </div>
                    )}
                {splitType === "PERCENTAGE" && (
                    <div>
                        <h3>Percentage Split</h3>

                        {participantIds.map((userId) => {
                        const member = group.members.find(
                            (member) => member.user.id === userId
                        );

                        return (
                            <div key={userId}>
                            <label>{member?.user.fullName}</label>

                            <input
                                type="number"
                                value={percentageSplits[userId] || ""}
                                onChange={(event) =>
                                setPercentageSplits((previous) => ({
                                    ...previous,
                                    [userId]: event.target.value,
                                }))
                                }
                                placeholder="Percentage"
                            />
                            </div>
                        );
                        })}
                    </div>
                    )}
              <button type="submit" disabled={isCreatingExpense}>
                {isCreatingExpense ? "Creating..." : "Create Expense"}
              </button>
            </form>
          </section>

          <hr />

          <section>
            <h2>Balances</h2>

            {isLoadingBalances && <p>Loading balances...</p>}

            {!isLoadingBalances && balances.length === 0 && (
              <p>No balances yet. Everyone is settled up.</p>
            )}

            {!isLoadingBalances && balances.length > 0 && (
              <ul>
                {balances.map((balance) => (
                  <li key={`${balance.debtorId}-${balance.creditorId}`}>
                    {getMemberName(balance.debtorId)} owes{" "}
                    {getMemberName(balance.creditorId)} ₹{balance.amount}
                  </li>
                ))}
              </ul>
            )}
          </section>

          <hr />

          <SettlementForm
            groupId={groupId}
            members={group.members}
            onSettlementCreated={refreshBalances}
          />

          <hr />

          <section>
            <h2>Expenses</h2>

            {group.expenses.length === 0 ? (
              <p>No expenses yet for this group.</p>
            ) : (
              <ul>
                {group.expenses.map((expense) => (
                  <li key={expense.id}>
                    <strong>{expense.description}</strong>
                    <br />
                    Amount: ₹{expense.amount}
                    <br />
                    Split Type: {expense.splitType}
                    <br />
                    Paid by: {expense.payer?.fullName || expense.payerId}
                  </li>
                ))}
              </ul>
            )}
          </section>
        </>
      )}
    </div>
  );
}

export default GroupDetail;