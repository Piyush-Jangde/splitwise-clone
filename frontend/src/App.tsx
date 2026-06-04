import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import GroupDetail from "./pages/GroupDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import OwnershipTransfers from "./pages/OwnershipTransfers";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/groups/:groupId"
        element={
          <ProtectedRoute>
            <GroupDetail />
          </ProtectedRoute>
        }
      />

      <Route
        path="/ownership-transfers"
        element={
          <ProtectedRoute>
            <OwnershipTransfers />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;