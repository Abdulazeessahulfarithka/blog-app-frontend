import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const handleCreateBlogClick = () => {
    try {
      // Navigate to login page with state to remember the intended action
      navigate('/login', { state: { fromCreateBlog: true } });
    } catch (error) {
      console.error("Navigation error:", error);
    }
  };

  return (
    <nav className="bg-gray-100 p-4 shadow-md mt-1">
      <div className="container mx-auto flex justify-between items-center">
        <button className="text-xl font-semibold text-gray-800">
          Blogs
        </button>
        <div className="flex items-center space-x-4">
          <Link 
            to="/login" 
            className="bg-blue-500 text-white py-2 px-4 rounded-md"
          >
            LogIn
          </Link>
          <button
            onClick={handleCreateBlogClick}
            className="bg-green-500 text-white py-2 px-4 rounded-md"
          >
            Create Blog
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
