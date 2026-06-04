import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import { createGroup, getMyGroups } from "../services/groupService";
import type { Group } from "../types/group";

function Dashboard() {
  const { user, logout } = useAuth();

  const [groups, setGroups] = useState<Group[]>([]);
  const [groupName, setGroupName] = useState("");
  const [isLoadingGroups, setIsLoadingGroups] = useState(true);
  const [isCreatingGroup, setIsCreatingGroup] = useState(false);
  const [error, setError] = useState("");

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

  return (
    <div>
      <header>
        <h1>Dashboard</h1>

        <p>Welcome, {user?.fullName}</p>

        <button onClick={logout}>Logout</button>
      </header>

      <hr />

      <section>
        <h2>Create Group</h2>

        <form onSubmit={handleCreateGroup}>
          <input
            type="text"
            placeholder="Example: Goa Trip"
            value={groupName}
            onChange={(event) => setGroupName(event.target.value)}
          />

          <button type="submit" disabled={isCreatingGroup}>
            {isCreatingGroup ? "Creating..." : "Create Group"}
          </button>
        </form>
      </section>

      <hr />

      <section>
        <h2>My Groups</h2>

        {error && <p style={{ color: "red" }}>{error}</p>}

        {isLoadingGroups && <p>Loading groups...</p>}

        {!isLoadingGroups && groups.length === 0 && (
          <p>No groups yet. Create your first group above.</p>
        )}

        {!isLoadingGroups && groups.length > 0 && (
          <ul>
            {groups.map((group) => (
              <li key={group.id}>
                <Link to={`/groups/${group.id}`}>{group.name}</Link>

                <br />

                <small>Invite Code: {group.inviteCode}</small>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

export default Dashboard;