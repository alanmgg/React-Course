import React from "react";
import { Routes, Route } from "react-router-dom";

// Views
import Home from "./views/Home";
import About from "./views/About";
import Prueba from "./views/Prueba";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/prueba/:id/elemento/:elemento" element={<Prueba />} />

      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
}

export default App;
