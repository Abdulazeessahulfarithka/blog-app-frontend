// Login.js
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Login() {
  const location = useLocation();
  const navigate = useNavigate();

  // Check if the user came from the Create Blog button
  const fromCreateBlog = location.state?.fromCreateBlog || false;

  useEffect(() => {
    if (fromCreateBlog) {
      console.log("Navigated to login from Create Blog button");
    }
  }, [fromCreateBlog]);

  const handleLogin = () => {
    // Simulate a login process
    console.log("User logged in successfully");

    // After login, redirect to the create blog page if the user came from there
    if (fromCreateBlog) {
      navigate('/create-blog'); // Redirect to the create blog page
    } else {
      navigate('/'); // Redirect to the home page (or wherever the user should go if not coming from create blog)
    }
  };

  return (
    <div className="login-container">
      <h1 className="text-center text-2xl font-bold">Login</h1>
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md mt-4"
      >
        Log In
      </button>
    </div>
  );
}

export default Login;
