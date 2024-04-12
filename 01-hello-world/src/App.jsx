import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   setCount(count + 1);
  // });

  useEffect(() => {
    console.log("Hola");
    setCount(count + 1);
  }, []);

  useEffect(() => {
    console.log("Hola");
  }, [count]);

  function handleCount(type) {
    if (type === "suma") {
      setCount(count + 1);
    } else if (type === "resta") {
      setCount(count - 1);
    }
  }

  return (
    <>
      <h1>Hello world</h1>

      <h1>{count}</h1>

      <button onClick={() => handleCount("suma")}>+</button>
      <button onClick={() => handleCount("resta")}>-</button>
    </>
  );
}

export default App;
