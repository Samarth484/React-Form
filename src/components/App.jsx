import React, { useState } from "react";

function App() {
  const [isWhat, setIsWhat] = useState(false);
  const [name, setName] = useState("");
  const [nameToDisplay, setFinalName] = useState("");

  function setTrue() {
    setIsWhat(true);
  }

  function setFalse() {
    setIsWhat(false);
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  function setIsDone() {
    setFinalName(name);
  }

  return (
    <div className="container">
      <h1>Hello {nameToDisplay} </h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
      />
      <button
        style={{ backgroundColor: isWhat && "black" }}
        onMouseOver={setTrue}
        onMouseOut={setFalse}
        onClick={setIsDone}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
