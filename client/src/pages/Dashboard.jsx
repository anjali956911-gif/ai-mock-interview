import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const handleCreateInterview = () => {
    navigate("/create-interview");
  };

  return (
    <div className="min-h-screen bg-[#060816] text-white">

      {/* Header */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <div>
            <h1 className="text-3xl font-bold">
              Welcome{user?.name ? `, ${user.name}` : ""} 👋
            </h1>

            <p className="text-gray-400 mt-1">
              Prepare for your next dream job with AI.
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg transition"
          >
            Logout
          </button>

        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white/5 border border-purple-500/20 rounded-2xl p-6">
            <h3 className="text-gray-400">Total Interviews</h3>
            <p className="text-5xl font-bold mt-4 text-purple-400">0</p>
          </div>

          <div className="bg-white/5 border border-purple-500/20 rounded-2xl p-6">
            <h3 className="text-gray-400">Average Score</h3>
            <p className="text-5xl font-bold mt-4 text-green-400">--</p>
          </div>

          <div className="bg-white/5 border border-purple-500/20 rounded-2xl p-6">
            <h3 className="text-gray-400">Completed Interviews</h3>
            <p className="text-5xl font-bold mt-4 text-pink-400">0</p>
          </div>

        </div>

        {/* Create Interview Card */}
        <div className="mt-10 bg-white/5 border border-purple-500/20 rounded-3xl p-8">

          <h2 className="text-3xl font-bold">
            Create a New AI Mock Interview
          </h2>

          <p className="text-gray-400 mt-3 max-w-2xl">
            Generate a customized interview based on your job role,
            company, experience level, interview type, and difficulty.
            Receive AI-generated questions and detailed feedback after
            completing the interview.
          </p>

          <button
            onClick={handleCreateInterview}
            className="mt-8 bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition"
          >
            + Start New Interview
          </button>

        </div>

      </div>
    </div>
  );
};

export default Dashboard;