import Footer from "./components/Footer.jsx";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Programs from "./Pages/Programs";
import Blogs from "./Pages/Blogs";
import LoadingAnimation from "./components/Loading";

import logo from "./assets/logo.png";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasLoadedOnce, setHasLoadedOnce] = useState(false);

  useEffect(() => {
    if (!hasLoadedOnce) {
      const initializeApp = async () => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setHasLoadedOnce(true);
      };
      initializeApp();
    }
  }, [hasLoadedOnce]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (!hasLoadedOnce && isLoading) {
    return <LoadingAnimation logo={logo} onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
