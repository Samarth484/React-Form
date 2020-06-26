import React, { useState } from "react";

function App() {
  const [isWhat, setIsWhat] = useState(false);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  function setTrue() {
    setIsWhat(true);
  }

  function setFalse() {
    setIsWhat(false);
  }
  function updateFname(event) {
    setFname(event.target.value);
  }
  function updateLname(event) {
    setLname(event.target.value);
  }
  return (
    <div className="container">
      <h1>
        Hello {fname} {lname}
      </h1>
      <form>
        <input onChange={updateFname} name="fName" placeholder="First Name" />
        <input onChange={updateLname} name="lName" placeholder="Last Name" />
        <button
          style={{ backgroundColor: isWhat && "black" }}
          onMouseOver={setTrue}
          onMouseOut={setFalse}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
