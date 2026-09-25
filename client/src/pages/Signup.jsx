import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
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

    if (formData.password !== formData.confirmPassword) {
      return setError("Passwords do not match.");
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5001/api/auth/register",
        {
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password,
        }
      );


      if (res.data.success) {
        alert("Account created successfully!");
        navigate("/login");
      }

    } catch (err) {
      console.error(err);

      setError(
        err.response?.data?.message ||
        "Registration failed. Please try again."
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
            Create Account
          </h1>

          <p className="text-gray-400 mt-3">
            Start your AI Mock Interview journey.
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
              Full Name
            </label>

            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full rounded-xl bg-[#111827] border border-gray-700 px-4 py-3 text-white outline-none focus:border-purple-500"
            />
          </div>


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
              className="w-full rounded-xl bg-[#111827] border border-gray-700 px-4 py-3 text-white outline-none focus:border-purple-500"
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
              placeholder="Create password"
              className="w-full rounded-xl bg-[#111827] border border-gray-700 px-4 py-3 text-white outline-none focus:border-purple-500"
            />
          </div>


          <div>
            <label className="block text-gray-300 mb-2">
              Confirm Password
            </label>

            <input
              type="password"
              name="confirmPassword"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password"
              className="w-full rounded-xl bg-[#111827] border border-gray-700 px-4 py-3 text-white outline-none focus:border-purple-500"
            />
          </div>


          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:scale-[1.02] transition disabled:opacity-60"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>


        </form>


        <div className="mt-6 text-center text-gray-400">

          Already have an account?{" "}

          <Link
            to="/login"
            className="text-purple-400 hover:text-purple-300 font-medium"
          >
            Login
          </Link>

        </div>


      </div>

    </div>
  );
};


export default Signup;