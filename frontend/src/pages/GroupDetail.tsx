import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { getGroupExpenses } from "../services/expenseService";
import type { Expense } from "../types/expense";

function GroupDetail() {
  const { groupId } = useParams<{ groupId: string }>();

  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [isLoadingExpenses, setIsLoadingExpenses] = useState(true);
  const [error, setError] = useState("");

  const isMissingGroupId = !groupId;

  useEffect(() => {
    let ignore = false;

    if (!groupId) {
      return;
    }

    getGroupExpenses(groupId)
      .then((data) => {
        if (!ignore) {
          setExpenses(data.expenses);
        }
      })
      .catch((error: unknown) => {
        if (!ignore) {
          if (axios.isAxiosError(error)) {
            setError(
              error.response?.data?.message ||
                error.response?.data ||
                "Failed to fetch group expenses"
            );
          } else {
            setError("Something went wrong");
          }
        }
      })
      .finally(() => {
        if (!ignore) {
          setIsLoadingExpenses(false);
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

  return (
    <div>
      <header>
        <Link to="/dashboard">← Back to Dashboard</Link>

        <h1>Group Details</h1>

        <p>Group ID: {groupId}</p>
      </header>

      <hr />

      <section>
        <h2>Expenses</h2>

        {error && <p style={{ color: "red" }}>{error}</p>}

        {isLoadingExpenses && <p>Loading expenses...</p>}

        {!isLoadingExpenses && expenses.length === 0 && (
          <p>No expenses yet for this group.</p>
        )}

        {!isLoadingExpenses && expenses.length > 0 && (
          <ul>
            {expenses.map((expense) => (
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
    </div>
  );
}

export default GroupDetail;