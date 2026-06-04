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
    <div>
      <h1>Register</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="text"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Creating account..." : "Register"}
        </button>
      </form>

      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Register;