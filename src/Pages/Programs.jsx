import React from "react";
import { Outlet } from "react-router-dom";

const Programs = () => {
  return (
    <div className="container mx-auto px-6 py-8 pt-28">
      <h1 className="text-3xl font-bold text-blue-950">Programs</h1>
      <p>This is the programs page.</p>
      <Outlet />
    </div>
  );
};

export default Programs;
