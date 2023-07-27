import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AllBeersPage from "./pages/AllBeersPage";
import RandomBeersPage from "./pages/RandomBeerPage";
import AddBeerPage from "./pages/AddBeerPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/allBeers" element={<AllBeersPage />} />
        <Route path="/randomBeer" element={<RandomBeersPage />} />
        <Route path="/addBeer" element={<AddBeerPage />} />
      </Routes>
    </div>
  );
}

export default App;
