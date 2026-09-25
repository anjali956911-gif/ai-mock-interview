import mongoose from "mongoose";

const interviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    role: {
      type: String,
      required: true,
    },

    company: {
      type: String,
      required: true,
    },

    experience: {
      type: String,
      required: true,
    },

    difficulty: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      required: true,
    },

    questions: [
      {
        type: String,
      },
    ],

    answers: [
      {
        question: {
          type: String,
        },
        answer: {
          type: String,
        },
      },
    ],

    score: {
      type: Number,
      default: 0,
    },

    feedback: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      enum: ["created", "pending", "completed"],
      default: "created",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Interview", interviewSchema);