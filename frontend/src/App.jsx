import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SessionProvider } from "./context/SessionContext";

import Landing from "./pages/Landing";
import Candidate from "./pages/Candidate";
import Resume from "./pages/Resume";
import Config from "./pages/Config";
import Interview from "./pages/Interview";
import Complete from "./pages/Complete";

export default function App() {
  return (
    <SessionProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/candidate" element={<Candidate />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/config" element={<Config />} />
          <Route path="/interview" element={<Interview />} />
          <Route path="/complete" element={<Complete />} />
        </Routes>
      </BrowserRouter>
    </SessionProvider>
  );
}
