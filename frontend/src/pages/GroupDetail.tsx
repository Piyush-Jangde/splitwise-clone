import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { getGroupDetail } from "../services/groupService";
import type { GroupDetailData } from "../types/groupDetail";
import { createExpense } from "../services/expenseService";

function GroupDetail() {
  const { groupId } = useParams<{ groupId: string }>();

  const [group, setGroup] = useState<GroupDetailData | null>(null);
  const [isLoadingGroup, setIsLoadingGroup] = useState(true);
  const [error, setError] = useState("");

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [payerId, setPayerId] = useState("");
  const [participantIds, setParticipantIds] = useState<string[]>([]);
  const [isCreatingExpense, setIsCreatingExpense] = useState(false);


  const isMissingGroupId = !groupId;

  useEffect(() => {
    let ignore = false;

    if (!groupId) {
      return;
    }

    getGroupDetail(groupId)
      .then((data) => {
        if (!ignore) {
          setGroup(data.group);
        }
      })
      .catch((error: unknown) => {
        if (!ignore) {
          if (axios.isAxiosError(error)) {
            setError(
              error.response?.data?.message ||
                error.response?.data ||
                "Failed to fetch group details"
            );
          } else {
            setError("Something went wrong");
          }
        }
      })
      .finally(() => {
        if (!ignore) {
          setIsLoadingGroup(false);
        }
      });

    return () => {
      ignore = true;
    };
  }, [groupId]);

  if (isMissingGroupId) {
    return (
      <div>
        <Link to="/dashboard">← Back to Dashboard</Link>
        <p style={{ color: "red" }}>Group ID is missing</p>
      </div>
    );
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

        if (!description.trim()) {
            setError("Description is required");
            return;
        }

        if (!numericAmount || numericAmount <= 0) {
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

        setError("");
        setIsCreatingExpense(true);

        try {
            const data = await createExpense({
            description: description.trim(),
            amount: numericAmount,
            splitType: "EQUAL",
            payerId,
            groupId,
            participants: participantIds.map((userId) => ({
                userId,
            })),
            });

            setGroup({
            ...group,
            expenses: [data.expense, ...group.expenses],
            });

            setDescription("");
            setAmount("");
            setPayerId("");
            setParticipantIds([]);
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
            <h2>Create Equal Expense</h2>
            <form onSubmit={handleCreateEqualExpense}>
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
                <button type="submit" disabled={isCreatingExpense}>
                {isCreatingExpense ? "Creating..." : "Create Expense"}
                </button>
            </form>
        </section>

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