import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react"; // optional, for icons

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // toggle state
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const dummyUsers = [{ email: "opena@gmail.com", password: "opena" }];

  const handleLogin = (e) => {
    e.preventDefault();

    const user = dummyUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      setError("");
      navigate("/user");
    } else {
      setError("Invalid credentials");
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row font-sans">
      {/* Left Side */}
      <div className="md:w-1/2 bg-gray-50 text-gray-800 flex flex-col justify-center p-12">
        <h1 className="text-3xl font-semibold mb-4">Remindra</h1>
        <p className="text-base mb-6 leading-relaxed">
          Organize your day naturally and effortlessly. Keep track of tasks and
          reminders without distractions.
        </p>
        <ul className="list-disc ml-5 space-y-1 text-gray-600 text-sm">
          <li>Simple Task Management</li>
          <li>Smart Reminders</li>
          <li>Calendar Sync</li>
          <li>Daily Insights</li>
        </ul>
      </div>

      {/* Right Side - Login Form */}
      <div className="md:w-1/2 flex justify-center items-center bg-white p-8">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-sm flex flex-col space-y-4"
        >
          <h2 className="text-2xl font-medium text-gray-800 text-center">
            Login
          </h2>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400"
            required
          />

          {/* Password Input with toggle */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-800"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {error && (
            <p className="text-red-500 text-sm text-center transition-opacity duration-300">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="p-3 bg-gray-800 text-white rounded font-medium hover:bg-gray-900 transition-colors"
          >
            Login
          </button>

          <p className="text-center text-gray-600 text-sm">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-gray-800 font-medium hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
