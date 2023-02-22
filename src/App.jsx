import React from "react";
import { Routes, Route } from "react-router-dom";
// Pages & Components
import Home from "./pages/home";
import WeatherList from "./pages/weatherList";
import Navbar from "./components/layout/navbar";
// Styles
import "./App.css";

function App() {
  return (
    <div className="root">
      <span className="bg-screen"></span>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cities" element={<WeatherList />} />
      </Routes>
    </div>
  );
}

export default App;
