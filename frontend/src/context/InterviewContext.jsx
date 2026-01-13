import { createContext, useContext, useState, useEffect } from "react";

const InterviewContext = createContext();

export const InterviewProvider = ({ children }) => {
  const [config, setConfig] = useState(null); // Interview configuration
  const [questions, setQuestions] = useState([]);

  // Load config from sessionStorage on initial load
  useEffect(() => {
    const savedConfig = sessionStorage.getItem("interviewConfig");
    if (savedConfig) setConfig(JSON.parse(savedConfig));
  }, []);

  const updateConfig = (newConfig) => {
    setConfig(newConfig);
    sessionStorage.setItem("interviewConfig", JSON.stringify(newConfig));
  };

  const updateQuestions = (qs) => {
    setQuestions(qs);
  };

  return (
    <InterviewContext.Provider
      value={{ config, updateConfig, questions, updateQuestions }}
    >
      {children}
    </InterviewContext.Provider>
  );
};

export const useInterview = () => {
  const context = useContext(InterviewContext);
  if (!context) {
    throw new Error("useInterview must be used within InterviewProvider");
  }
  return context;
};
