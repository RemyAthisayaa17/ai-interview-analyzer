import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSession } from "../context/SessionContext";

export default function Candidate() {
  const { updateCandidate } = useSession();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const next = () => {
    updateCandidate({ name, email });
    navigate("/config");
  };

  return (
    <div>
      <h2>Candidate Details</h2>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={next}>Next</button>
    </div>
  );
}
