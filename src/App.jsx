import "./App.css";
import data from "../public/data"; // Assuming this imports your array of questions
import { useState } from "react";

function App() {
  // Initialize an array of booleans for each question's open state
  const [openStates, setOpenStates] = useState(Array(data.length).fill(false));

  const handleChange = (index) => {
    // Update the specific index in the openStates array
    setOpenStates((prevStates) =>
      prevStates.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <>
      <div>
        <h1>My Pop-Out Box</h1>
        <div className="lists">
          {data.map((qus, i) => {
            return (
              <div key={i} className="list">
                <div className="list-title" onClick={() => handleChange(i)}>
                  <span>{i < 9 ? `0${i + 1}` : i + 1}.</span>
                  <h2>{qus.question}</h2>
                  <span> {openStates[i] ? "🔺" : "🔻"}</span>
                </div>
                {openStates[i] ? <p>{qus.answer}</p> : ""}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
