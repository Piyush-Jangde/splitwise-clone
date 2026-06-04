import { useAuth } from "../context/useAuth";

function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {user?.fullName}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Dashboard;