import React from "react";
import "./../App.css";

import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function navegar() {
    navigate("/prueba/6/elemento/agua");
  }

  return (
    <div>
      <h1>Home</h1>
      <p>Esta es la página de inicio</p>

      <Link to="/about">Ir a About</Link>
      <Link to="/prueba/5/elemento/agua">Ir a Prueba</Link>

      <button onClick={() => navegar()}>Ir a Prueba 6</button>
    </div>
  );
}

export default Home;
