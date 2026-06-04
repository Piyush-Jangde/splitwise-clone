import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";

import { getGroupDetail, renameGroup, removeMember, deleteGroup } from "../services/groupService";
import { createExpense } from "../services/expenseService";
import { getGroupBalances } from "../services/balanceService";
import { getGroupActivity } from "../services/activityService";
import { createOwnershipTransfer } from "../services/ownershipTransferService"


import type { GroupDetailData } from "../types/groupDetail";
import type { SimplifiedBalance } from "../types/balance";
import type { SplitType } from "../types/expense";
import type { Activity } from "../types/activity";

import SettlementForm from "../components/SettlementForm";

function GroupDetail() {
  const auth = useContext(AuthContext);
  const user = auth?.user;

  const navigate = useNavigate();

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
  const [shareSplits, setShareSplits] = useState<Record<string, string>>({});

  const [balances, setBalances] = useState<SimplifiedBalance[]>([]);
  const [isLoadingBalances, setIsLoadingBalances] = useState(Boolean(groupId));

  const [activities, setActivities] = useState<Activity[]>([]);
  const [isLoadingActivities, setIsLoadingActivities] = useState(true);

  const [newGroupName, setNewGroupName] = useState("");
  const [isRenaming, setIsRenaming] = useState(false);

  const [isRemovingMember, setIsRemovingMember] = useState(false);

  const [selectedOwnerId, setSelectedOwnerId] = useState("");
  const [isTransferringOwnership, setIsTransferringOwnership] = useState(false);

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
      const activityData = await getGroupActivity(groupId!);
      setActivities(activityData.activities);

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
        setIsLoadingActivities(false);
      }
    }
  }

  loadGroupAndBalances();

  return () => {
    ignore = true;
  };
}, [groupId]);

  async function handleRenameGroup() {
        if (!groupId || !group) {
            return;
        }

        const nameToUse = (
            newGroupName || group.name
        ).trim();

        if (!nameToUse) {
            setError("Group name is required");
            return;
        }

        try {
            setIsRenaming(true);

            const data = await renameGroup(
            groupId,
            nameToUse
            );

            setGroup((previousGroup) => {
                if (!previousGroup) {
                    return previousGroup;
                }

                return {
                    ...previousGroup,
                    name: data.group.name,
                };
            });

            await refreshActivities();

            setNewGroupName("");

        } catch (error) {
            console.error(error);
        } finally {
            setIsRenaming(false);
          }
  }

  async function handleRemoveMember(
        userId: string
      ) {
        if (!groupId || !group) {
          return;
        }

        const confirmed = window.confirm(
          "Remove this member from the group?"
        );

        if (!confirmed) {
          return;
        }

        try {
          setIsRemovingMember(true);

          await removeMember(groupId, userId);

          await refreshGroup();
          await refreshBalances();
          await refreshActivities();
        } catch (error) {
          console.error(error);
        } finally {
          setIsRemovingMember(false);
        }
  }

  async function handleDeleteGroup() {
    if (!groupId || !group) {
      return;
    }

    const confirmed = window.confirm(
      `Delete "${group.name}"? This cannot be undone.`
    );

    if (!confirmed) {
      return;
    }

    try {
      await deleteGroup(groupId);

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  }

  async function handleOwnershipTransfer() {
    if (
      !groupId ||
      !selectedOwnerId
    ) {
      return;
    }

    try {
      setIsTransferringOwnership(true);

      await createOwnershipTransfer(
        groupId,
        selectedOwnerId
      );

      alert(
        "Ownership transfer request sent"
      );

      setSelectedOwnerId("");

      await refreshActivities();
    } catch (error) {
      console.error(error);
    } finally {
      setIsTransferringOwnership(false);
    }
  }

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

  async function refreshActivities() {
    if (!groupId) {
        return;
    }

    try {
        setIsLoadingActivities(true);

        const data = await getGroupActivity(groupId);

        setActivities(data.activities);
    } catch (error) {
        console.error(error);
    } finally {
        setIsLoadingActivities(false);
    }
  }

  async function refreshGroup() {
    if (!groupId) {
      return;
    }

    try {
      const data = await getGroupDetail(groupId);
      setGroup(data.group);
    } catch (error) {
      console.error(error);
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

    if (splitType === "SHARE") {
        const totalShares = participantIds.reduce(
            (sum, userId) =>
            sum + Number(shareSplits[userId] || 0),
            0
        );

        if (totalShares <= 0) {
            setError("Total shares must be greater than zero");
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

            if (splitType === "SHARE") {
                return {
                userId,
                shares: Number(shareSplits[userId]),
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
      await refreshActivities();

      //Resetting all useful states
      setDescription("");
      setAmount("");
      setPayerId("");
      setParticipantIds([]);
      setSplitType("EQUAL");
      setUnequalAmounts({});
      setPercentageSplits({});
      setShareSplits({});

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

  function formatActivityType(activityType: string) {
  switch (activityType) {
    case "EXPENSE_CREATED":
      return "added an expense";

    case "SETTLEMENT_CREATED":
      return "recorded a settlement";

    case "GROUP_CREATED":
      return "created the group";

    case "GROUP_UPDATED":
      return "updated the group";

    case "MEMBER_ADDED":
      return "added a member";

    case "MEMBER_REMOVED":
      return "removed a member";

    default:
      return activityType
        .toLowerCase()
        .replaceAll("_", " ");
  }
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
    <div className="min-h-screen bg-linear-to-br from-teal-50 via-indigo-50 to-amber-50 px-4 py-6">
      <div className="mx-auto max-w-6xl space-y-6">
        {/* Header */}
        <header className="rounded-3xl bg-linear-to-r from-teal-600 via-cyan-600 to-indigo-600 p-6 text-white shadow-lg">
          <Link
            to="/dashboard"
            className="text-sm font-medium text-cyan-100 hover:text-white"
          >
            ← Back to Dashboard
          </Link>
          {/* Group Details */}
          <h1 className="mt-4 text-3xl font-bold">
            {group?.name || "Group Details"}
          </h1>

          <p className="mt-2 text-cyan-50">
            Group ID: {groupId}
          </p>

          <p className="text-cyan-50">
            Invite Code: {group?.inviteCode}
          </p>

          <p className="text-cyan-50">
            Owner: {group?.owner.fullName || "Unknown Owner"}
          </p>

          {group && user?.id === group.owner.id && (
            <button
              type="button"
              onClick={handleDeleteGroup}
              className="mt-4 rounded-xl bg-rose-600 px-4 py-2 font-medium text-white hover:bg-rose-700"
            >
              Delete Group
            </button> 
          )}

          {group && (
            <section className="rounded-3xl bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-semibold text-slate-900">Invite Members</h2>
              <p>
                  Share this invite code with another user so they can join this group:
              </p>
              <span className="rounded-full bg-indigo-100 px-3 py-1 font-medium text-indigo-700">
                {group.inviteCode}
              </span>   
              <button
                type="button"
                onClick={() => {
                  navigator.clipboard.writeText(group.inviteCode);
                }}
                className="ml-3 rounded-xl bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
              >
                Copy Invite Code
              </button>
            </section>
          )}
          
        </header>

        {/* Rename Group */}
        <section className="rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold text-slate-900">
            Rename Group
          </h2>
          <div className="mb-5 rounded-2xl border border-teal-200 bg-linear-to-r from-teal-50 to-cyan-50 p-4">
            <p className="text-sm font-medium text-slate-500">
              Current Group Name
            </p>
            <h3 className="mt-1 text-xl font-bold text-teal-700">
              {group?.name}
            </h3>
          </div>
          <div className="flex flex-col gap-3 md:flex-row">
            <input
              type="text"
              value={newGroupName || ""}
              placeholder="Enter new group name"
              onChange={(e) => setNewGroupName(e.target.value)}
              className="flex-1 rounded-xl border border-slate-300 px-4 py-2 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
            />
            <button
              type="button"
              onClick={handleRenameGroup}
              disabled={isRenaming}
              className="rounded-xl bg-teal-600 px-5 py-2 font-medium text-white shadow-sm transition hover:bg-teal-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isRenaming ? "Renaming..." : "Rename Group"}
            </button>
          </div>
        </section>

        {/* Transfer Ownership */}
        {group && user?.id === group.owner.id && (
          <section className="rounded-3xl bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold text-slate-900">
              Transfer Ownership
            </h2>

            <div className="mb-5 rounded-2xl border border-indigo-200 bg-linear-to-r from-indigo-50 to-cyan-50 p-4">
              <p className="text-sm font-medium text-slate-500">
                Current Owner
              </p>

              <h3 className="mt-1 text-xl font-bold text-indigo-700">
                {group.owner.fullName}
              </h3>
            </div>

            <div className="flex flex-col gap-3 md:flex-row">
              <select
                value={selectedOwnerId}
                onChange={(e) => setSelectedOwnerId(e.target.value)}
                className="flex-1 rounded-xl border border-slate-300 px-4 py-2 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              >
                <option value="">Select new owner</option>

                {group.members
                  .filter((member) => member.user.id !== group.owner.id)
                  .map((member) => (
                    <option key={member.user.id} value={member.user.id}>
                      {member.user.fullName}
                    </option>
                  ))}
              </select>

              <button
                type="button"
                disabled={!selectedOwnerId || isTransferringOwnership}
                onClick={handleOwnershipTransfer}
                className="rounded-xl bg-indigo-600 px-5 py-2 font-medium text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isTransferringOwnership ? "Sending..." : "Transfer Ownership"}
              </button>
            </div>
          </section>
        )}

        {/* Error */}
        {error && (
          <p className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
            {error}
          </p>
        )}

        {/* Loading Group */}
        {isLoadingGroup && <p>Loading group...</p>}

        {/* Group Information Loaded */}
        {!isLoadingGroup && group && (
          <>
            {/* Members List */}
            <section className="rounded-3xl bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-teal-600">
                    Group People
                  </p>
                  <h2 className="text-xl font-semibold text-slate-900">
                    Members
                  </h2>
                </div>

                <span className="rounded-full bg-teal-100 px-3 py-1 text-sm font-medium text-teal-700">
                  {group.members.length} members
                </span>
              </div>

              {group.members.length === 0 ? (
                <p className="rounded-2xl border border-dashed border-slate-300 p-6 text-center text-slate-600">
                  No members found.
                </p>
              ) : (
                <ul className="grid gap-4 md:grid-cols-2">
                  {group.members.map((member) => (
                    <li
                      key={member.user.id}
                      className="rounded-2xl border border-slate-200 bg-linear-to-br from-white to-slate-50 p-4"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="font-semibold text-slate-900">
                            {member.user.fullName}
                          </p>
                          <p className="mt-1 text-sm text-slate-500">
                            {member.user.email}
                          </p>
                        </div>

                        {group.owner.id === member.user.id ? (
                          <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700">
                            Owner
                          </span>
                        ) : (
                          user?.id === group.owner.id && (
                            <button
                              type="button"
                              disabled={isRemovingMember}
                              onClick={() => handleRemoveMember(member.user.id)}
                              className="rounded-xl bg-rose-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-rose-700 disabled:cursor-not-allowed disabled:opacity-60"
                            >
                              Remove
                            </button>
                          )
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </section>
            
            {/* Create Expense */}
            <section className="rounded-3xl bg-white p-6 shadow-sm">
  <div className="mb-5">
    <p className="text-sm font-medium text-amber-600">
      Add a shared cost
    </p>
    <h2 className="text-xl font-semibold text-slate-900">
      Create Expense
    </h2>
  </div>

  <form onSubmit={handleCreateEqualExpense} className="space-y-5">
    <div className="grid gap-4 md:grid-cols-2">
      {/* Split Type */}
      <div>
        <label className="text-sm font-medium text-slate-700">
          Split Type
        </label>
        <select
          value={splitType}
          onChange={(e) => setSplitType(e.target.value as SplitType)}
          className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-2 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
        >
          <option value="EQUAL">Equal</option>
          <option value="UNEQUAL">Unequal</option>
          <option value="PERCENTAGE">Percentage</option>
          <option value="SHARE">Share</option>
        </select>
      </div>

      {/* Expense Description */}
      <div>
        <label
          htmlFor="description"
          className="text-sm font-medium text-slate-700"
        >
          Description
        </label>
        <input
          id="description"
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Dinner"
          className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-2 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
        />
      </div>

      {/* Amount */}
      <div>
        <label
          htmlFor="amount"
          className="text-sm font-medium text-slate-700"
        >
          Amount
        </label>
        <input
          id="amount"
          type="number"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
          placeholder="1000"
          className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-2 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
        />
      </div>

      {/* Payer Details */}
      <div>
        <label
          htmlFor="payerId"
          className="text-sm font-medium text-slate-700"
        >
          Paid By
        </label>
        <select
          id="payerId"
          value={payerId}
          onChange={(event) => setPayerId(event.target.value)}
          className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-2 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
        >
          <option value="">Select payer</option>
          {group.members.map((member) => (
            <option key={member.user.id} value={member.user.id}>
              {member.user.fullName}
            </option>
          ))}
        </select>
      </div>
    </div>

    {/* Participants */}
    <div>
      <p className="mb-3 text-sm font-medium text-slate-700">
        Participants
      </p>

      <div className="grid gap-3 md:grid-cols-2">
        {group.members.map((member) => (
          <label
            key={member.user.id}
            className="flex cursor-pointer items-center gap-3 rounded-2xl border border-slate-200 p-3 transition hover:bg-slate-50"
          >
            <input
              type="checkbox"
              checked={participantIds.includes(member.user.id)}
              onChange={() => handleToggleParticipant(member.user.id)}
              className="h-4 w-4 accent-amber-600"
            />
            <span className="font-medium text-slate-700">
              {member.user.fullName}
            </span>
          </label>
        ))}
      </div>
    </div>

    {/* Unequal Split */}
    {splitType === "UNEQUAL" && (
      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
        <h3 className="mb-3 font-semibold text-amber-800">
          Unequal Split Amounts
        </h3>

        <div className="grid gap-3 md:grid-cols-2">
          {participantIds.map((userId) => {
            const member = group.members.find((m) => m.user.id === userId);

            return (
              <div key={userId}>
                <label className="text-sm font-medium text-slate-700">
                  {member?.user.fullName}
                </label>
                <input
                  type="number"
                  value={unequalAmounts[userId] || ""}
                  onChange={(e) =>
                    setUnequalAmounts((prev) => ({
                      ...prev,
                      [userId]: e.target.value,
                    }))
                  }
                  className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-2 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                />
              </div>
            );
          })}
        </div>
      </div>
    )}

    {/* Percentage Split */}
    {splitType === "PERCENTAGE" && (
      <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-4">
        <h3 className="mb-3 font-semibold text-indigo-800">
          Percentage Split
        </h3>

        <div className="grid gap-3 md:grid-cols-2">
          {participantIds.map((userId) => {
            const member = group.members.find(
              (member) => member.user.id === userId
            );

            return (
              <div key={userId}>
                <label className="text-sm font-medium text-slate-700">
                  {member?.user.fullName}
                </label>

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
                  className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-2 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>
            );
          })}
        </div>
      </div>
    )}

    {/* Share Split */}
    {splitType === "SHARE" && (
      <div className="rounded-2xl border border-teal-200 bg-teal-50 p-4">
        <h3 className="mb-3 font-semibold text-teal-800">
          Share Split
        </h3>

        <div className="grid gap-3 md:grid-cols-2">
          {participantIds.map((userId) => {
            const member = group.members.find(
              (member) => member.user.id === userId
            );

            return (
              <div key={userId}>
                <label className="text-sm font-medium text-slate-700">
                  {member?.user.fullName}
                </label>

                <input
                  type="number"
                  value={shareSplits[userId] || ""}
                  onChange={(event) =>
                    setShareSplits((previous) => ({
                      ...previous,
                      [userId]: event.target.value,
                    }))
                  }
                  placeholder="Shares"
                  className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-2 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                />
              </div>
            );
          })}
        </div>
      </div>
    )}

    <button
      type="submit"
      disabled={isCreatingExpense}
      className="w-full rounded-xl bg-amber-500 px-5 py-3 font-semibold text-white shadow-sm hover:bg-amber-600 disabled:cursor-not-allowed disabled:opacity-60 md:w-auto"
    >
      {isCreatingExpense ? "Creating..." : "Create Expense"}
    </button>
  </form>
            </section>

            {/* Balances */}
            <section className="rounded-3xl bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-teal-600">
                    Who owes whom
                  </p>
                  <h2 className="text-xl font-semibold text-slate-900">
                    Balances
                  </h2>
                </div>

                <span className="rounded-full bg-teal-100 px-3 py-1 text-sm font-medium text-teal-700">
                  {balances.length} active
                </span>
              </div>

              {isLoadingBalances && (
                <p className="rounded-2xl border border-dashed border-slate-300 p-6 text-center text-slate-600">
                  Loading balances...
                </p>
              )}

              {!isLoadingBalances && balances.length === 0 && (
                <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6 text-center">
                  <p className="text-lg font-semibold text-teal-700">
                    Everyone is settled up
                  </p>
                  <p className="mt-1 text-sm text-teal-600">
                    No one owes anything in this group right now.
                  </p>
                </div>
              )}

              {!isLoadingBalances && balances.length > 0 && (
                <ul className="space-y-3">
                  {balances.map((balance) => (
                    <li
                      key={`${balance.debtorId}-${balance.creditorId}`}
                      className="rounded-2xl border border-slate-200 bg-linear-to-r from-white to-teal-50 p-4"
                    >
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-slate-700">
                          <span className="font-semibold text-rose-600">
                            {getMemberName(balance.debtorId)}
                          </span>{" "}
                          owes{" "}
                          <span className="font-semibold text-teal-700">
                            {getMemberName(balance.creditorId)}
                          </span>
                        </p>

                        <span className="rounded-full bg-white px-4 py-1 text-lg font-bold text-slate-900 shadow-sm">
                          ₹{balance.amount}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </section>

            {/* Activity */}
            <section className="rounded-3xl bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-indigo-600">
                    Timeline
                  </p>
                  <h2 className="text-xl font-semibold text-slate-900">
                    Activity Feed
                  </h2>
                </div>

                <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700">
                  {activities.length} events
                </span>
              </div>

              {isLoadingActivities && (
                <p className="rounded-2xl border border-dashed border-slate-300 p-6 text-center text-slate-600">
                  Loading activity...
                </p>
              )}

              {!isLoadingActivities && activities.length === 0 && (
                <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-6 text-center">
                  <p className="font-semibold text-indigo-700">
                    No activity yet
                  </p>

                  <p className="mt-1 text-sm text-indigo-600">
                    Activity will appear here when members interact with the group.
                  </p>
                </div>
              )}

              {!isLoadingActivities && activities.length > 0 && (
                <ul className="space-y-4">
                  {activities.map((activity) => (
                    <li
                      key={activity.id}
                      className="rounded-2xl border border-slate-200 bg-linear-to-r from-white to-indigo-50 p-4"
                    >
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <p className="text-slate-800">
                            <span className="font-semibold text-indigo-700">
                              {activity.actor.fullName}
                            </span>

                            <span className="mx-2 text-slate-400">
                              •
                            </span>

                            {formatActivityType(
                              activity.activityType
                            )}
                          </p>
                        </div>

                        <span className="text-sm text-slate-500">
                          {new Date(
                            activity.createdAt
                          ).toLocaleString()}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </section>

            {/* Settlement */}
            <SettlementForm
              groupId={groupId}
              members={group.members}
              onSettlementCreated={async ()=>{
                  await refreshBalances();
                  await refreshActivities();
              }}
            />

            {/* Expenses */}
            <section className="rounded-3xl bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-amber-600">
                    Spending History
                  </p>
                  <h2 className="text-xl font-semibold text-slate-900">
                    Expenses
                  </h2>
                </div>

                <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-700">
                  {group.expenses.length} expenses
                </span>
              </div>

              {group.expenses.length === 0 ? (
                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-center">
                  <p className="font-semibold text-amber-700">
                    No expenses yet
                  </p>

                  <p className="mt-1 text-sm text-amber-600">
                    Create your first expense to start tracking shared costs.
                  </p>
                </div>
              ) : (
                <ul className="space-y-4">
                  {group.expenses.map((expense) => (
                    <li
                      key={expense.id}
                      className="rounded-2xl border border-slate-200 bg-linear-to-r from-white to-amber-50 p-5"
                    >
                      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-slate-900">
                            {expense.description}
                          </h3>

                          <div className="mt-3 flex flex-wrap gap-2">
                            <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">
                              {expense.splitType}
                            </span>

                            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                              Paid by{" "}
                              {expense.payer?.fullName || expense.payerId}
                            </span>
                          </div>
                        </div>

                        <div className="text-left md:text-right">
                          <p className="text-sm text-slate-500">
                            Amount
                          </p>

                          <p className="text-2xl font-bold text-amber-700">
                            ₹{expense.amount}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          </>
        )}
      </div>
    </div>
  );
}

export default GroupDetail;