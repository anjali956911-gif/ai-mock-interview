
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createInterview } from "../services/api";

const CreateInterview = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    role: "",
    company: "",
    experience: "",
    difficulty: "",
    type: "",
    questions: 5,
  });


  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.name === "questions"
          ? Number(e.target.value)
          : e.target.value,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const { data } = await createInterview(formData);

      localStorage.setItem(
        "currentInterview",
        JSON.stringify(data.interview)
      );

      navigate("/interview");

    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
        "Failed to create interview"
      );

    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="min-h-screen bg-[#060816] text-white px-6 py-10">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-3">
          Create AI Mock Interview
        </h1>

        <p className="text-center text-gray-400 mb-10">
          Configure your interview and let AI prepare questions.
        </p>


        <form
          onSubmit={handleSubmit}
          className="bg-white/5 border border-purple-500/20 rounded-3xl p-8 space-y-6"
        >


          <div>
            <label>Job Role</label>

            <input
              name="role"
              placeholder="Frontend Developer"
              value={formData.role}
              onChange={handleChange}
              required
              className="w-full mt-2 bg-[#111827] border border-gray-700 rounded-xl px-4 py-3"
            />
          </div>


          <div>
            <label>Company</label>

            <input
              name="company"
              placeholder="Google"
              value={formData.company}
              onChange={handleChange}
              required
              className="w-full mt-2 bg-[#111827] border border-gray-700 rounded-xl px-4 py-3"
            />
          </div>


          <div>
            <label>Experience</label>

            <select
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              required
              className="w-full mt-2 bg-[#111827] border border-gray-700 rounded-xl px-4 py-3"
            >
              <option value="">Select</option>
              <option>Fresher</option>
              <option>1-3 Years</option>
              <option>3-5 Years</option>
              <option>5+ Years</option>
            </select>

          </div>


          <div>
            <label>Difficulty</label>

            <select
              name="difficulty"
              value={formData.difficulty}
              onChange={handleChange}
              required
              className="w-full mt-2 bg-[#111827] border border-gray-700 rounded-xl px-4 py-3"
            >
              <option value="">Select</option>
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>

          </div>


          <div>
            <label>Interview Type</label>

            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
              className="w-full mt-2 bg-[#111827] border border-gray-700 rounded-xl px-4 py-3"
            >
              <option value="">Select</option>
              <option>Technical</option>
              <option>HR</option>
              <option>Behavioral</option>
              <option>System Design</option>
            </select>

          </div>


          <div>
            <label>Number of Questions</label>

            <input
              type="number"
              min="5"
              max="20"
              name="questions"
              value={formData.questions}
              onChange={handleChange}
              className="w-full mt-2 bg-[#111827] border border-gray-700 rounded-xl px-4 py-3"
            />

          </div>


          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 font-semibold text-lg disabled:opacity-50"
          >
            {loading
              ? "Generating AI Interview..."
              : "🚀 Generate AI Interview"
            }

          </button>


        </form>

      </div>

    </div>
  );
};


export default CreateInterview;