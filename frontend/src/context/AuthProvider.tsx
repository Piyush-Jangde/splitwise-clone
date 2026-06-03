import { useState, type ReactNode } from "react";
import type { User } from "../types/auth";
import { AuthContext } from "./AuthContext";

interface AuthProviderProps {
  children: ReactNode;
}

function getStoredUser(): User | null {
  const savedUser = localStorage.getItem("user");

  if (!savedUser) {
    return null;
  }

  try {
    return JSON.parse(savedUser) as User;
  } catch {
    localStorage.removeItem("user");
    return null;
  }
}

function getStoredToken(): string | null {
  return localStorage.getItem("token");
}

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(() => getStoredUser());
  const [token, setToken] = useState<string | null>(() => getStoredToken());

  function login(userData: User, authToken: string) {
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", authToken);

    setUser(userData);
    setToken(authToken);
  }

  function logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    setUser(null);
    setToken(null);
  }

  const value = {
    user,
    token,
    isAuthenticated: Boolean(user && token),
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;