import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Navbar from "./components/NavBar.jsx";
import Hero from "./components/Hero";


import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <Hero/>
    <App></App>
  </StrictMode>,
);
