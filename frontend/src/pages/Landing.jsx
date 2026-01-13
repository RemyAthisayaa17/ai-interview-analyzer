import { useNavigate } from "react-router-dom";
import { useSession } from "../context/SessionContext";

export default function Landing() {
  const { resetSession } = useSession();
  const navigate = useNavigate();

  const start = () => {
    resetSession();
    navigate("/candidate");
  };

  return (
    <div className="page">
      <h1>AI Smart Interview Analyzer</h1>
      <button onClick={start}>Start</button>
    </div>
  );
}
