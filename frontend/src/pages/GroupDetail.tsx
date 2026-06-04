import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { getGroupDetail } from "../services/groupService";
import type { GroupDetailData } from "../types/groupDetail";

function GroupDetail() {
  const { groupId } = useParams<{ groupId: string }>();

  const [group, setGroup] = useState<GroupDetailData | null>(null);
  const [isLoadingGroup, setIsLoadingGroup] = useState(true);
  const [error, setError] = useState("");

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