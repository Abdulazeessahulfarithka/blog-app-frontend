import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { src: "https://www.shutterstock.com/image-photo/blogging-concept-web-blog-social-600nw-2484136087.jpg", alt: "First slide" },
    { src: "https://media.istockphoto.com/id/1198931639/photo/writing-a-blog-blogger-influencer-reading-text-on-screen.jpg?s=612x612&w=0&k=20&c=4FJ_fzzZYqBoGG-RY8fcohpaOKKwnnI-ik58cPy6t-g=", alt: "Second slide" },
    { src: "https://www.microsoft.com/en-us/microsoft-365/blog/wp-content/uploads/sites/2/2024/11/M365_372575_Blog_241105-1024x576.webp", alt: "Third slide" }
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  return (
    <>
      <div className="text-center mt-8 space-y-4">
        <h1 className="text-2xl font-bold">Passionate to Work</h1>
        <span className="text-gray-600">They are focused, work diligently, and produce high-quality results</span>
        <div className="mt-4">
        <Link   className="bg-green-500 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50" to="blog-create">
  Create Blog
</Link>

        </div>
      </div>

      <div className="mt-10 relative w-full max-w-2xl mx-auto overflow-hidden rounded-lg shadow-lg">
        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="min-w-full h-64 flex items-center justify-center">
              <img className="object-cover w-full h-full rounded-lg" src={slide.src} alt={slide.alt} />
            </div>
          ))}
        </div>
        
        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-blue-500' : 'bg-gray-300'}`}
            ></button>
          ))}
        </div>
      </div>
      
    </>
  );
}

export default Home;
