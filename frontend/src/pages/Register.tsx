import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import type { AuthResponse } from "../types/auth";
import { useAuth } from "../context/useAuth";
import axios from "axios";

interface RegisterFormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  password: string;
}

function Register() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState<RegisterFormData>({
    fullName: "",
    email: "",
    phoneNumber: "",
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
      const response = await api.post<AuthResponse>(
        "/auth/register",
        formData
      );

      login(response.data.user, response.data.token);

      navigate("/dashboard");
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            setError(
            error.response?.data?.message ||
                error.response?.data ||
                "Registration failed"
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
        <div className="bg-linear-to-br from-indigo-600 via-cyan-600 to-teal-600 p-8 text-white md:p-10">
          <p className="text-sm font-medium uppercase tracking-wide text-cyan-100">
            Splitwise Clone
          </p>

          <h1 className="mt-4 text-4xl font-bold">
            Start splitting smarter.
          </h1>

          <p className="mt-4 text-cyan-50">
            Create your account and manage shared expenses with friends, trips, roommates, and teams.
          </p>

          <div className="mt-8 space-y-3 text-sm text-cyan-50">
            <p>✓ Create and join groups</p>
            <p>✓ Track expenses and balances</p>
            <p>✓ Settle debts clearly</p>
          </div>
        </div>

        <div className="p-8 md:p-10">
          <h2 className="text-2xl font-bold text-slate-900">
            Create Account
          </h2>

          <p className="mt-2 text-sm text-slate-600">
            Register to start using your expense groups.
          </p>

          {error && (
            <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label
                htmlFor="fullName"
                className="text-sm font-medium text-slate-700"
              >
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder="Your full name"
                className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
              />
            </div>

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
                className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              />
            </div>

            <div>
              <label
                htmlFor="phoneNumber"
                className="text-sm font-medium text-slate-700"
              >
                Phone Number
              </label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="text"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Optional"
                className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
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
                placeholder="Create a password"
                className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-xl bg-teal-600 px-4 py-2 font-medium text-white hover:bg-teal-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isLoading ? "Creating account..." : "Register"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-indigo-600 hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Register;