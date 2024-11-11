import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="bg-gray-100 p-4 shadow-md mt-1">
      <div className="container mx-auto flex justify-between items-center">
        <button className="text-xl font-semibold text-gray-800 focus:outline-none" >
          Blogs
        </button>
        <button 
          className="text-gray-600 md:hidden focus:outline-none focus:ring-2 focus:ring-gray-600" 
          type="button" 
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M4 5h16M4 12h16M4 19h16" clipRule="evenodd" />
          </svg>
        </button>
        <div className="hidden md:flex md:items-center space-x-4" id="navbarNavAltMarkup">
          <Link to="/login" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
            LogIn
          </Link>
          <Link  to="/blog-create" className="bg-green-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50">
            Create Blog
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
