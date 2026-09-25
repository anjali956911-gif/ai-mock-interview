import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setError("");

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const res = await axios.post(
        "http://localhost:5001/api/auth/login",
        formData
      );

      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));

        navigate("/dashboard");
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "Login failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#060816] flex items-center justify-center px-6 py-10">

      <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-8 shadow-2xl">

        <div className="text-center mb-8">

          <h1 className="text-4xl font-bold text-white">
            Welcome Back
          </h1>

          <p className="text-gray-400 mt-3">
            Login to continue your AI Interview journey.
          </p>

        </div>

        {error && (
          <div className="mb-5 rounded-lg bg-red-500/10 border border-red-500 text-red-400 p-3 text-sm">
            {error}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <div>

            <label className="block text-gray-300 mb-2">
              Email
            </label>

            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full rounded-xl bg-[#111827] border border-gray-700 px-4 py-3 text-white outline-none focus:border-purple-500 transition"
            />

          </div>

          <div>

            <label className="block text-gray-300 mb-2">
              Password
            </label>

            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full rounded-xl bg-[#111827] border border-gray-700 px-4 py-3 text-white outline-none focus:border-purple-500 transition"
            />

          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:scale-[1.02] transition duration-300 disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

        <div className="mt-6 text-center text-gray-400">

          Don't have an account?{" "}

          <Link
            to="/signup"
            className="text-purple-400 hover:text-purple-300 font-medium"
          >
            Sign Up
          </Link>

        </div>

      </div>

    </div>
  );
};

export default Login;