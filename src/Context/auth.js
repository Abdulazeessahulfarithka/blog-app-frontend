import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create the AuthContext
const AuthContext = createContext();

// AuthProvider to manage and provide authentication state
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ user: null, token: '' });

  // Set default axios header for Authorization token
  axios.defaults.headers.common['Authorization'] = auth?.token;

  useEffect(() => {
    // Check for saved authentication data in localStorage
    const data = localStorage.getItem('auth');
    if (data) {
      const parsedData = JSON.parse(data);
      setAuth({
        user: parsedData.user,
        token: parsedData.token,
      });
    }
  }, []);

  useEffect(() => {
    // Save auth data to localStorage whenever it changes
    if (auth?.token) {
      localStorage.setItem('auth', JSON.stringify(auth));
    }
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use Auth context
const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
