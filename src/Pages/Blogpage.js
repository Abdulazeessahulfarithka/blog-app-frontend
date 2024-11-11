import React from 'react';
import { useLocation } from 'react-router-dom';

function Blogpage() {
  const location = useLocation();
  const { formData } = location.state || {};  

  if (!formData) {
    return <div>No data available.</div>;  
  }

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md mt-8">
      <h1 className="text-2xl font-semibold text-center">Blog Details</h1>
      
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Title: {formData.title}</h2>
        <p className="mt-2 text-sm text-gray-600">Author: {formData.author}</p>
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Content:</h3>
          <p>{formData.content}</p>
        </div>
      </div>
    </div>
  );
}

export default Blogpage;
