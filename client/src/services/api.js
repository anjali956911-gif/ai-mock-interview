import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5001/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// =======================
// Attach JWT Token
// =======================

API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


// =======================
// Authentication APIs
// =======================

export const registerUser = async (data) => {
  return await API.post("/auth/register", data);
};


export const loginUser = async (data) => {
  return await API.post("/auth/login", data);
};


export const getProfile = async () => {
  return await API.get("/auth/profile");
};


// =======================
// Interview APIs
// =======================

export const createInterview = async (data) => {
  return await API.post("/interviews", data);
};


export const getMyInterviews = async () => {
  return await API.get("/interviews");
};


export const getInterview = async (id) => {
  return await API.get(`/interviews/${id}`);
};


export const submitInterview = async (id, answers) => {
  return await API.put(`/interviews/${id}/submit`, {
    answers,
  });
};


export default API;