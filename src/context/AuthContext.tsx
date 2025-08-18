import React, { createContext, useContext, useState, type ReactNode } from "react";

interface AuthContextType {
  token: string | null;
  setToken: (token: string | null) => void;
}

const AuthContext = createContext<AuthContextType>({
  token: null,
  setToken: () => {},
});

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>("eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI0MTkyNzNlNi1kOTQzLTQzMzAtODgxNy0yNmMzNDU1NjMwZGUiLCJpYXQiOjE3NTU1MDY1OTEsImV4cCI6MTc1ODA5ODU5MX0.PrsLtSRWVizwwTejhL0zX1KjuRANg63D5FguQ65Z9NdrYgj9As-sI07ZCcynv3m8w49o4HMYDjrp37oFC_3TjA");
  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
