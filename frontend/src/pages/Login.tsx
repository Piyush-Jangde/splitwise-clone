import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import type { AuthResponse } from "../types/auth";
import { useAuth } from "../context/useAuth";

interface LoginFormData {
  email: string;
  password: string;
}

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  async function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setIsLoading(true);

    try {
      const response = await api.post<AuthResponse>("/auth/login", formData);

      login(response.data.user, response.data.token);

      navigate("/dashboard");
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        setError(
          error.response?.data?.message ||
            error.response?.data ||
            "Login failed"
        );
      } else {
        setError("Something went wrong");
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-teal-50 via-indigo-50 to-amber-50 px-4 py-8">
      <div className="mx-auto flex min-h-[80vh] max-w-5xl items-center justify-center">
        <div className="grid w-full overflow-hidden rounded-3xl bg-white shadow-xl md:grid-cols-2">
          <div className="bg-linear-to-br from-teal-600 via-cyan-600 to-indigo-600 p-8 text-white md:p-10">
            <p className="text-sm font-medium uppercase tracking-wide text-cyan-100">
              Splitwise Clone
            </p>

            <h1 className="mt-4 text-4xl font-bold">
              Welcome Back
            </h1>

            <p className="mt-4 text-cyan-50">
              Track expenses, settle balances, and manage group spending with ease.
            </p>

            <div className="mt-8 space-y-3 text-sm text-cyan-50">
              <p>✓ Equal, unequal, percentage & share splits</p>
              <p>✓ Group balances and settlements</p>
              <p>✓ Ownership transfers and member management</p>
            </div>
          </div>

          <div className="p-8 md:p-10">
            <h2 className="text-2xl font-bold text-slate-900">
              Login
            </h2>

            <p className="mt-2 text-sm text-slate-600">
              Sign in to access your groups and expenses.
            </p>

            {error && (
              <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">
                {error}
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="mt-6 space-y-4"
            >
              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-slate-700"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-slate-700"
                >
                  Password
                </label>

                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="Enter your password"
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full rounded-xl bg-teal-600 px-4 py-2 font-medium text-white hover:bg-teal-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isLoading ? "Logging in..." : "Login"}
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-slate-600">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-medium text-indigo-600 hover:underline"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;