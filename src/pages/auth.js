import React from "react";
import { createContext, useState, useContext } from "react";

const AuthContext = createContext(null);

const Auth = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (person) => {
    setUser(person);
  };

  const logout = () => {
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default Auth;
