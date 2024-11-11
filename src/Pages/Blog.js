import { Formik, Field, Form } from 'formik';
import React, { useState } from 'react';
import Blogpage from './Blogpage'; // Ensure the path is correct

function Blog() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState(null); 
  const [blogs, setBlogs] = useState([]); 

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <Formik
        initialValues={{
          author: '', 
          title: '',  
          content: '', 
        }}
        onSubmit={(values) => {
          // handle form submission here
          console.log('Form data:', values);
          setBlogs(prevBlogs => [...prevBlogs, values]); 
          setFormData(values); 
          setIsSubmitted(true); 
        }}
      >
        {() => (
          <Form>
            <div className="mb-4">
              <label htmlFor="author" className="block text-lg font-medium text-gray-700">Author</label>
              <Field
                id="author"
                name="author"
                placeholder="Enter the author's name"
                type="text"
                className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="title" className="block text-lg font-medium text-gray-700">Title</label>
              <Field
                id="title"
                name="title"
                placeholder="Enter the blog title"
                type="text"
                className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="content" className="block text-lg font-medium text-gray-700">Content</label>
              <Field
                id="content"
                name="content"
                placeholder="Enter the blog content"
                as="textarea"
                className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="6"
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full py-3 px-6 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50"
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>

     
      {isSubmitted && (
        <div className="mt-4 text-center text-green-600">
          <h2 className="text-xl font-semibold">Form Submitted Successfully!</h2>
          <p className="mt-2">Here is the submitted data:</p>
          <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-md">
            <p><strong>Author:</strong> {formData.author}</p>
            <p><strong>Title:</strong> {formData.title}</p>
            <p><strong>Content:</strong> {formData.content}</p>
          </div>
        </div>
      )}

      {/* Display all blogs submitted */}
      {blogs.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">All Blogs</h2>
          {blogs.map((blog, index) => (
            <div key={index} className="mb-6 p-4 border border-gray-300 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">{blog.title}</h3>
              <p className="text-sm text-gray-600">By {blog.author}</p>
              <p className="mt-2">{blog.content}</p>
            </div>
          ))}
        </div>
      )}

      
      {isSubmitted}
    </div>
  );
}

export default Blog;
