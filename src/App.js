
import React, { useState } from "react";
import "./App.css";

function App() {
  const [dob, setDob] = useState(""); 
  const [age, setAge] = useState(null);

 
  const calculateAge = (dateOfBirth) => {
    const dobDate = new Date(dateOfBirth);
    const diffMs = Date.now() - dobDate.getTime();
    const ageDate = new Date(diffMs);

    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  
  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (dob) {
      const calculatedAge = calculateAge(dob);
      setAge(calculatedAge);
    } else {
      setAge(null);
    }
  };

  
  const handleReset = () => {
    setDob(""); 
    setAge(null); 
  };

  return (
    <div className="container">
      <h1>Age Calculator</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="dob">Enter your date of birth:</label>
        <input
          type="date"
          id="dob"
          value={dob}
          onChange={(e) => setDob(e.target.value)} 
          required
        />
        <button type="submit">Calculate Age</button>
        <button type="button" onClick={handleReset} className="reset-button">
          Reset
        </button>
      </form>
      {age !== null && <p id="result">Your age is {age} years.</p>}
    </div>
  );
}

export default App;

