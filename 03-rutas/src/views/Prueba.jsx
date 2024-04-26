import React from "react";
import "./../App.css";

import { useParams } from "react-router-dom";

function Prueba() {
  const { id, elemento } = useParams();

  return (
    <div>
      <h1>Prueba</h1>
      <p>
        Esta es la página de Prueba con el ID: {id} con el elemento: {elemento}
      </p>
    </div>
  );
}

export default Prueba;
