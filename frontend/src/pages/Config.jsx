import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSession } from "../context/SessionContext";

export default function Config() {
  const { updateConfig } = useSession();
  const navigate = useNavigate();

  const [round, setRound] = useState("HR");
  const [domain, setDomain] = useState("default");
  const [count, setCount] = useState(3);

  const handleStart = () => {
    const config = { round, domain, count };
    updateConfig(config);
    navigate("/interview");
  };

  return (
    <div>
      <h2>Interview Configuration</h2>

      <select value={round} onChange={(e) => setRound(e.target.value)}>
        <option value="HR">HR</option>
        <option value="Technical">Technical</option>
        <option value="DSA">DSA</option>
      </select>

      <select value={domain} onChange={(e) => setDomain(e.target.value)}>
        <option value="default">Default</option>
        <option value="Python">Python</option>
        <option value="Java">Java</option>
        <option value="JavaScript">JavaScript</option>
      </select>

      <select value={count} onChange={(e) => setCount(Number(e.target.value))}>
        <option value={3}>3</option>
        <option value={5}>5</option>
        <option value={7}>7</option>
      </select>

      <button onClick={handleStart}>Start Interview</button>
    </div>
  );
}
