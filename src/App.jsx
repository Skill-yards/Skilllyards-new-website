import Footer from "./components/Footer.jsx";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Programs from "./Pages/Programs";
import Blogs from "./Pages/Blogs";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
      <div className="flex flex-col items-center gap-4 min-h-screen w-full justify-center">
        <Footer />
      </div>
    </>
  );
}

export default App;
