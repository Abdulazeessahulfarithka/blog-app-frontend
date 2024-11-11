import React from 'react';

function Footer() {
  return (
    <>
      <footer className="text-center bg-gray-100 py-6">
        {/* Social Media Section */}
        <div className="container mx-auto py-4">
          <div className="flex justify-center space-x-4">
            {/* Facebook */}
            <a
              className="text-gray-600 hover:text-blue-600 transition duration-300"
              href="#!"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f text-xl"></i>
            </a>
            {/* Twitter */}
            <a
              className="text-gray-600 hover:text-blue-400 transition duration-300"
              href="#!"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter text-xl"></i>
            </a>
            {/* Google */}
            <a
              className="text-gray-600 hover:text-red-500 transition duration-300"
              href="#!"
              aria-label="Google"
            >
              <i className="fab fa-google text-xl"></i>
            </a>
            {/* Instagram */}
            <a
              className="text-gray-600 hover:text-pink-500 transition duration-300"
              href="#!"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram text-xl"></i>
            </a>
            {/* LinkedIn */}
            <a
              className="text-gray-600 hover:text-blue-700 transition duration-300"
              href="#!"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            {/* GitHub */}
            <a
              className="text-gray-600 hover:text-black transition duration-300"
              href="#!"
              aria-label="GitHub"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-gray-600 text-sm py-3 bg-gray-200">
          © 2024 Copyright:
          <a
            className="text-gray-700 hover:text-blue-500 ml-1"
            href="https://mdbootstrap.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
           Blogs.com
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
