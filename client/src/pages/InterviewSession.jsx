import { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import api from "../services/api";

const InterviewSession = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // ==========================
  // Questions from CreateInterview
  // ==========================
  const questions = location.state?.questions || [];

  // ==========================
  // Refs
  // ==========================
  const videoRef = useRef(null);
  const recognitionRef = useRef(null);
  const timerRef = useRef(null);

  // ==========================
  // Camera & Mic
  // ==========================
  const [stream, setStream] = useState(null);

  const [cameraOn, setCameraOn] = useState(false);
  const [micOn, setMicOn] = useState(false);

  const [permissionError, setPermissionError] = useState("");

  // ==========================
  // Interview State
  // ==========================
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [answers, setAnswers] = useState([]);

  const [transcript, setTranscript] = useState("");

  const [listening, setListening] = useState(false);

  const [loading, setLoading] = useState(false);

  const [completed, setCompleted] = useState(false);

  const [score, setScore] = useState(null);

  const [feedback, setFeedback] = useState("");

  // ==========================
  // Timer
  // ==========================
  const TOTAL_TIME = 15 * 60;

  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);

  // ==========================
  // Progress
  // ==========================
  const progress =
    questions.length > 0
      ? ((currentQuestion + 1) / questions.length) * 100
      : 0;

  // ==========================
  // Redirect if no questions
  // ==========================
  useEffect(() => {
    if (!questions.length) {
      navigate("/dashboard");
    }
  }, [questions, navigate]);

  // ==========================
  // Start Camera + Microphone
  // ==========================
  useEffect(() => {
    const startMedia = async () => {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });

        setStream(mediaStream);

        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
        }

        setCameraOn(true);
        setMicOn(true);
      } catch (err) {
        console.error(err);

        setPermissionError(
          "Please allow Camera & Microphone permissions."
        );
      }
    };

    startMedia();

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  // ==========================
  // Attach Stream to Video
  // ==========================
  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  // ==========================
  // Interview Timer
  // ==========================
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          handleFinishInterview();
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, []);

  // ==========================
  // Toggle Camera
  // ==========================
  const toggleCamera = () => {
    if (!stream) return;

    const track = stream.getVideoTracks()[0];

    if (!track) return;

    track.enabled = !track.enabled;

    setCameraOn(track.enabled);
  };

  // ==========================
  // Toggle Microphone
  // ==========================
  const toggleMicrophone = () => {
    if (!stream) return;

    const track = stream.getAudioTracks()[0];

    if (!track) return;

    track.enabled = !track.enabled;

    setMicOn(track.enabled);
  };

  // ==========================
  // Format Timer
  // ==========================
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);

    const secs = seconds % 60;

    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  };
  import { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import api from "../services/api";

const InterviewSession = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // ==========================
  // Questions from CreateInterview
  // ==========================
  const questions = location.state?.questions || [];

  // ==========================
  // Refs
  // ==========================
  const videoRef = useRef(null);
  const recognitionRef = useRef(null);
  const timerRef = useRef(null);

  // ==========================
  // Camera & Mic
  // ==========================
  const [stream, setStream] = useState(null);

  const [cameraOn, setCameraOn] = useState(false);
  const [micOn, setMicOn] = useState(false);

  const [permissionError, setPermissionError] = useState("");

  // ==========================
  // Interview State
  // ==========================
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [answers, setAnswers] = useState([]);

  const [transcript, setTranscript] = useState("");

  const [listening, setListening] = useState(false);

  const [loading, setLoading] = useState(false);

  const [completed, setCompleted] = useState(false);

  const [score, setScore] = useState(null);

  const [feedback, setFeedback] = useState("");

  // ==========================
  // Timer
  // ==========================
  const TOTAL_TIME = 15 * 60;

  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);

  // ==========================
  // Progress
  // ==========================
  const progress =
    questions.length > 0
      ? ((currentQuestion + 1) / questions.length) * 100
      : 0;

  // ==========================
  // Redirect if no questions
  // ==========================
  useEffect(() => {
    if (!questions.length) {
      navigate("/dashboard");
    }
  }, [questions, navigate]);

  // ==========================
  // Start Camera + Microphone
  // ==========================
  useEffect(() => {
    const startMedia = async () => {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });

        setStream(mediaStream);

        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
        }

        setCameraOn(true);
        setMicOn(true);
      } catch (err) {
        console.error(err);

        setPermissionError(
          "Please allow Camera & Microphone permissions."
        );
      }
    };

    startMedia();

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  // ==========================
  // Attach Stream to Video
  // ==========================
  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  // ==========================
  // Interview Timer
  // ==========================
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          handleFinishInterview();
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, []);

  // ==========================
  // Toggle Camera
  // ==========================
  const toggleCamera = () => {
    if (!stream) return;

    const track = stream.getVideoTracks()[0];

    if (!track) return;

    track.enabled = !track.enabled;

    setCameraOn(track.enabled);
  };

  // ==========================
  // Toggle Microphone
  // ==========================
  const toggleMicrophone = () => {
    if (!stream) return;

    const track = stream.getAudioTracks()[0];

    if (!track) return;

    track.enabled = !track.enabled;

    setMicOn(track.enabled);
  };

  // ==========================
  // Format Timer
  // ==========================
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);

    const secs = seconds % 60;

    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  };  // ==========================
  // Speech Recognition
  // ==========================
  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      console.log("Speech Recognition is not supported.");
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-US";
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onstart = () => {
      setListening(true);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognition.onerror = (event) => {
      console.log(event.error);
      setListening(false);
    };

    recognition.onresult = (event) => {
      let finalTranscript = "";

      for (let i = 0; i < event.results.length; i++) {
        finalTranscript += event.results[i][0].transcript + " ";
      }

      setTranscript(finalTranscript);

      setAnswers((prev) => {
        const updated = [...prev];
        updated[currentQuestion] = finalTranscript;
        return updated;
      });
    };

    recognitionRef.current = recognition;
  }, [currentQuestion]);

  // ==========================
  // AI Speaks Current Question
  // ==========================
  const speakQuestion = () => {
    if (!questions[currentQuestion]) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(
      questions[currentQuestion]
    );

    utterance.lang = "en-US";
    utterance.rate = 1;
    utterance.pitch = 1;

    window.speechSynthesis.speak(utterance);
  };

  // Speak whenever question changes
  useEffect(() => {
    if (questions.length) {
      speakQuestion();
    }
  }, [currentQuestion]);

  // ==========================
  // Start Listening
  // ==========================
  const startListening = () => {
    if (!recognitionRef.current) return;

    setTranscript("");

    recognitionRef.current.start();
  };

  // ==========================
  // Stop Listening
  // ==========================
  const stopListening = () => {
    if (!recognitionRef.current) return;

    recognitionRef.current.stop();
  };

  // ==========================
  // Previous Question
  // ==========================
  const previousQuestion = () => {
    stopListening();

    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  // ==========================
  // Next Question
  // ==========================
  const nextQuestion = () => {
    stopListening();

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  // ==========================
  // Submit Interview
  // ==========================
  const handleFinishInterview = async () => {
    stopListening();

    window.speechSynthesis.cancel();

    clearInterval(timerRef.current);

    try {
      setLoading(true);

      const response = await api.post("/interview/evaluate", {
        questions,
        answers,
      });

      setScore(response.data.score);
      setFeedback(response.data.feedback);
      setCompleted(true);
    } catch (error) {
      console.log(error);

      alert("Unable to evaluate interview.");
    } finally {
      setLoading(false);
    }
  };