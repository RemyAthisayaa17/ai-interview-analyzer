import React from "react";
import { useNavigate } from "react-router-dom";
import "@/styles/theme.css";

const Complete = () => {
  const navigate = useNavigate();

  return (
    <div className="complete-page">
      <h1 className="complete-title">🎉 Your interview is completed!</h1>
      <p className="complete-text">
        Your detailed premium PDF report will be sent to your email shortly.
      </p>
      <button className="primary-btn" onClick={() => navigate("/")}>
        Start New Interview
      </button>
    </div>
  );
};

export default Complete;
