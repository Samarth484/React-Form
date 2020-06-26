import React, { useState } from "react";

function App() {
  const [isWhat, setIsWhat] = useState(false);
  function setTrue() {
    setIsWhat(true);
  }
  function setFalse() {
    setIsWhat(false);
  }
  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isWhat && "black" }}
        onMouseOver={setTrue}
        onMouseOut={setFalse}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
