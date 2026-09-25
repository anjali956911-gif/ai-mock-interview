import express from "express";

import {
  createInterview,
  getMyInterviews,
  getInterviewById,
  submitInterview,
} from "../controllers/interviewController.js";

import { protect } from "../middleware/authMiddleware.js";


const router = express.Router();


// ===============================
// Create AI Interview
// POST /api/interviews
// ===============================
router.post(
  "/",
  protect,
  createInterview
);


// ===============================
// Get Logged-in User Interviews
// GET /api/interviews
// ===============================
router.get(
  "/",
  protect,
  getMyInterviews
);


// ===============================
// Get Single Interview
// GET /api/interviews/:id
// ===============================
router.get(
  "/:id",
  protect,
  getInterviewById
);


// ===============================
// Submit Interview Answers
// PUT /api/interviews/:id/submit
// ===============================
router.put(
  "/:id/submit",
  protect,
  submitInterview
);


export default router;