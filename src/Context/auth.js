import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ user: null, token: "" });

  // Set the Authorization header only after the auth state has been updated
  useEffect(() => {
    axios.defaults.headers.common["Authorization"] = auth?.token;
  }, [auth.token]); // This will run whenever the auth.token changes

  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parse = JSON.parse(data);
      setAuth({
        user: parse.user,
        token: parse.token,
      });
    }
  }, []); // This runs only once, on component mount

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
