import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSession } from "../context/SessionContext";
import api from "../api/api";
import CameraRecorder from "../components/CameraRecorder";
import QuestionCard from "../components/QuestionCard";

export default function Interview() {
  const { session } = useSession();
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // STEP 1: Validate config
  useEffect(() => {
    if (!session || !session.config) {
      alert("Interview configuration is missing. Start again.");
      navigate("/");
      return;
    }

    api
      .post("/get-questions", session.config)
      .then((res) => {
        setQuestions(res.data.questions || []);
        setAnswers(new Array(res.data.questions.length).fill(""));
        setLoading(false);
      })
      .catch(() => {
        alert("Failed to load questions");
        setLoading(false);
      });
  }, [session, navigate]);

  const handleAnswerChange = (value) => {
    const updated = [...answers];
    updated[index] = value;
    setAnswers(updated);
  };

  const handleSubmit = async () => {
    try {
      await api.post("/submit-interview", {
        candidate: session.candidate,
        config: session.config,
        answers: answers,
      });

      navigate("/complete");
    } catch (err) {
      alert("Interview submission failed");
    }
  };

  if (loading) return <h2>Loading interview...</h2>;
  if (!questions.length) return <h2>No questions available</h2>;

  return (
    <div className="interview-page">
      <CameraRecorder />

      <QuestionCard
        question={questions[index]}
        answer={answers[index]}
        onChange={handleAnswerChange}
      />

      {index < questions.length - 1 ? (
        <button onClick={() => setIndex(index + 1)}>Next</button>
      ) : (
        <button onClick={handleSubmit}>Submit Interview</button>
      )}
    </div>
  );
}
