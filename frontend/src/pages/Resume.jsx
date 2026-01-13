import { useNavigate } from "react-router-dom";
import { useSession } from "@/context/SessionContext";
import "@/styles/theme.css";

const Resume = () => {
  const navigate = useNavigate();
  const { session, updateSession } = useSession();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      updateSession({ resumeFile: file });
    }
  };

  const handleSkip = () => {
    navigate("/config");
  };

  const handleNext = () => {
    navigate("/config");
  };

  return (
    <div className="page-container">
      <div className="card">
        <h2 className="page-title">Upload Resume (Optional)</h2>

        <p className="page-subtitle">
          You may upload your resume for future AI enhancements, or skip this step.
        </p>

        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
        />

        {session.resumeFile && (
          <p className="file-name">
            Selected: {session.resumeFile.name}
          </p>
        )}

        <div className="button-row">
          <button className="secondary-btn" onClick={handleSkip}>
            Skip
          </button>

          <button className="primary-btn" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resume;
