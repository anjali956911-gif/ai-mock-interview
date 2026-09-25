import Interview from "../models/Interview.js";
import { generateInterviewQuestions } from "../services/geminiService.js";

// ===============================
// Create Interview (AI Generate)
// ===============================
export const createInterview = async (req, res) => {
  console.log("INTERVIEW BODY:", req.body);
  console.log("USER:", req.user);

  try {
    const {
      role,
      company,
      experience,
      difficulty,
      type,
      questions,
    } = req.body;

    if (!role || !difficulty || !type || !questions) {
      return res.status(400).json({
        success: false,
        message: "Required fields are missing",
      });
    }

    // Generate AI Questions
    const aiQuestions = await generateInterviewQuestions({
      role,
      company,
      experience,
      difficulty,
      type,
      questions,
    });

    // Save Interview
    const interview = await Interview.create({
      user: req.user,
      role,
      company,
      experience,
      difficulty,
      type,
      questions: aiQuestions,
      status: "created",
    });

    res.status(201).json({
      success: true,
      message: "Interview created successfully",
      interview,
    });

  } catch (error) {
    console.error("Create Interview Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to create interview",
      error: error.message,
    });
  }
};

// ===============================
// Get All My Interviews
// ===============================
export const getMyInterviews = async (req, res) => {
  try {
    const interviews = await Interview.find({
      user: req.user,
    }).sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      interviews,
    });

  } catch (error) {
    console.error("Fetch Interview Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch interviews",
      error: error.message,
    });
  }
};

// ===============================
// Get Single Interview
// ===============================
export const getInterviewById = async (req, res) => {
  try {
    const interview = await Interview.findById(req.params.id);

    if (!interview) {
      return res.status(404).json({
        success: false,
        message: "Interview not found",
      });
    }

    res.status(200).json({
      success: true,
      interview,
    });

  } catch (error) {
    console.error("Get Interview Error:", error);

    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

// ===============================
// Submit Interview
// ===============================
export const submitInterview = async (req, res) => {
  try {
    const { answers } = req.body;

    const interview = await Interview.findById(req.params.id);

    if (!interview) {
      return res.status(404).json({
        success: false,
        message: "Interview not found",
      });
    }

    interview.answers = answers;
    interview.status = "completed";

    // AI evaluation (placeholder)
    interview.score = 0;
    interview.feedback = "AI evaluation pending";

    await interview.save();

    res.status(200).json({
      success: true,
      message: "Interview submitted successfully",
      interview,
    });

  } catch (error) {
    console.error("Submit Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to submit interview",
      error: error.message,
    });
  }
};