import React from "react";
import Home from "./components/home";
import Hero from "./components/hero-section";
import Sidebar from "./components/sidebar";

export const App = () => {
  return (
    <div>
      <Home />
      <Hero />
      <Sidebar />
    </div>
  );
};
