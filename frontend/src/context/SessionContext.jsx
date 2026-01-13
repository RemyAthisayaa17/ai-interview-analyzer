import { createContext, useContext, useState } from "react";

const SessionContext = createContext(null);

export const SessionProvider = ({ children }) => {
  const [session, setSession] = useState({
    candidate: null,
    config: null,
  });

  const updateCandidate = (candidate) => {
    setSession((prev) => ({
      ...prev,
      candidate,
    }));
  };

  const updateConfig = (config) => {
    setSession((prev) => ({
      ...prev,
      config,
    }));
  };

  const resetSession = () => {
    setSession({
      candidate: null,
      config: null,
    });
  };

  return (
    <SessionContext.Provider
      value={{ session, updateCandidate, updateConfig, resetSession }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => {
  const ctx = useContext(SessionContext);
  if (!ctx) {
    throw new Error("useSession must be used inside SessionProvider");
  }
  return ctx;
};
