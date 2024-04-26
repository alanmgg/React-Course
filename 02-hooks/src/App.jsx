import React, { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");

  // Funciones a aprender
  // onClick => onClick={() => setTitle("Hola mundo")} Sirve para ejecutar una función al hacer click
  // onChange => onChange={(e) => setTitle(e.target.value)} Sirve para ejecutar una función al cambiar el valor de un input

  return (
    <>
      <h1>{title === "" ? "Hola mundo" : title}</h1>

      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <button onClick={() => setTitle("")}>Borrar</button>
    </>
  );
}

export default App;
