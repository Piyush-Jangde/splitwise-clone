import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import { createGroup, getMyGroups, joinGroupByInviteCode } from "../services/groupService";
import type { Group } from "../types/group";

function Dashboard() {
  const { user, logout } = useAuth();

  const [groups, setGroups] = useState<Group[]>([]);
  const [groupName, setGroupName] = useState("");
  const [isLoadingGroups, setIsLoadingGroups] = useState(true);

  const [isCreatingGroup, setIsCreatingGroup] = useState(false);
  const [inviteCode, setInviteCode] = useState("");
  const [isJoiningGroup, setIsJoiningGroup] = useState(false);

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    let ignore = false;

    getMyGroups()
      .then((data) => {
        if (!ignore) {
          setGroups(data.groups);
        }
      })
      .catch((error: unknown) => {
        if (!ignore) {
          if (axios.isAxiosError(error)) {
            setError(
              error.response?.data?.message ||
                error.response?.data ||
                "Failed to fetch groups"
            );
          } else {
            setError("Something went wrong");
          }
        }
      })
      .finally(() => {
        if (!ignore) {
          setIsLoadingGroups(false);
        }
      });

    return () => {
      ignore = true;
    };
  }, []);

  async function handleCreateGroup(
    event: React.SyntheticEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (!groupName.trim()) {
      setError("Group name is required");
      return;
    }

    setError("");
    setIsCreatingGroup(true);

    try {
      const data = await createGroup(groupName.trim());

      setGroups((previousGroups) => [data.group, ...previousGroups]);
      setGroupName("");
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        setError(
          error.response?.data?.message ||
            error.response?.data ||
            "Failed to create group"
        );
      } else {
        setError("Something went wrong");
      }
    } finally {
      setIsCreatingGroup(false);
    }
  }

  async function handleJoinGroup(event: React.SyntheticEvent<HTMLFormElement>) {
      event.preventDefault();

      if (!inviteCode.trim()) {
        setError("Invite code is required");
        setSuccessMessage("");
        return;
      }

      setError("");
      setSuccessMessage("");
      setIsJoiningGroup(true);

      try {
        await joinGroupByInviteCode(inviteCode.trim());

        const updatedGroups = await getMyGroups();

        setGroups(updatedGroups.groups);
        setInviteCode("");
        setSuccessMessage("Group joined successfully");
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          setError(
            error.response?.data?.message ||
              error.response?.data ||
              "Failed to join group"
          );
        } else {
          setError("Something went wrong");
        }
      } finally {
        setIsJoiningGroup(false);
      }
  }

 return (
  <div className="min-h-screen bg-linear-to-br from-teal-50 via-indigo-50 to-amber-50 px-4 py-6">
    <div className="mx-auto max-w-5xl space-y-6">
      <header className="overflow-hidden rounded-3xl bg-linear-to-r from-teal-600 via-cyan-600 to-indigo-600 p-6 text-white shadow-lg">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-teal-100">
              Splitwise Clone
            </p>
            <h1 className="mt-1 text-3xl font-bold">Dashboard</h1>
            <p className="mt-2 text-teal-50">
              Welcome, {user?.fullName}
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <Link
              to="/ownership-transfers"
              className="rounded-xl bg-white/15 px-4 py-2 text-center text-sm font-medium text-white backdrop-blur hover:bg-white/25"
            >
              Ownership Requests
            </Link>

            <button
              onClick={logout}
              className="rounded-xl bg-slate-950/80 px-4 py-2 text-sm font-medium text-white hover:bg-slate-950"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {error && (
        <p className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {error}
        </p>
      )}

      {successMessage && (
        <p className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700">
          {successMessage}
        </p>
      )}

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-3xl border border-teal-100 bg-white/90 p-6 shadow-sm backdrop-blur">
          <div className="mb-4">
            <p className="text-sm font-medium text-teal-600">
              Start something new
            </p>
            <h2 className="text-xl font-semibold text-slate-900">
              Create Group
            </h2>
          </div>

          <form onSubmit={handleCreateGroup} className="space-y-3">
            <input
              type="text"
              placeholder="Example: Goa Trip"
              value={groupName}
              onChange={(event) => setGroupName(event.target.value)}
              className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
            />

            <button
              type="submit"
              disabled={isCreatingGroup}
              className="w-full rounded-xl bg-teal-600 px-4 py-2 font-medium text-white hover:bg-teal-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isCreatingGroup ? "Creating..." : "Create Group"}
            </button>
          </form>
        </section>

        <section className="rounded-3xl border border-indigo-100 bg-white/90 p-6 shadow-sm backdrop-blur">
          <div className="mb-4">
            <p className="text-sm font-medium text-indigo-600">
              Have an invite?
            </p>
            <h2 className="text-xl font-semibold text-slate-900">
              Join Group
            </h2>
          </div>

          <form onSubmit={handleJoinGroup} className="space-y-3">
            <input
              type="text"
              placeholder="Enter invite code"
              value={inviteCode}
              onChange={(event) => setInviteCode(event.target.value)}
              className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />

            <button
              type="submit"
              disabled={isJoiningGroup}
              className="w-full rounded-xl bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isJoiningGroup ? "Joining..." : "Join Group"}
            </button>
          </form>
        </section>
      </div>

      <section className="rounded-3xl border border-amber-100 bg-white/90 p-6 shadow-sm backdrop-blur">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-amber-600">
              Shared expenses
            </p>
            <h2 className="text-xl font-semibold text-slate-900">
              My Groups
            </h2>
          </div>

          <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-700">
            {groups.length} groups
          </span>
        </div>

        {isLoadingGroups && (
          <p className="text-slate-600">Loading groups...</p>
        )}

        {!isLoadingGroups && groups.length === 0 && (
          <p className="rounded-xl border border-dashed border-slate-300 p-6 text-center text-slate-600">
            No groups yet. Create or join your first group above.
          </p>
        )}

        {!isLoadingGroups && groups.length > 0 && (
          <ul className="grid gap-4 sm:grid-cols-2">
            {groups.map((group) => (
              <li
                key={group.id}
                className="rounded-2xl border border-slate-200 bg-linear-to-br from-white to-slate-50 p-5 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <Link
                  to={`/groups/${group.id}`}
                  className="text-lg font-semibold text-slate-900 hover:text-teal-700"
                >
                  {group.name}
                </Link>

                <p className="mt-3 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                  Invite Code: {group.inviteCode}
                </p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  </div>
);
}

export default Dashboard;