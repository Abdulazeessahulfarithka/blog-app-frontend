import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home.js';
import Blog from './Pages/Blog.js';
import SignIn from "./Pages/Signin.js";
import Register from './Pages/Register.js';

function App() {
  return (
    <div className="container-xl">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/blog-create" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
