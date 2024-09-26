import "./App.css";
import data from "../public/data"; // Assuming this imports your array of questions
import { useState } from "react";
import QuestionBank from "./Components/QuestionBox.jsx";

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
              <>
                <QuestionBank
                  openStates={openStates}
                  qus={qus}
                  keys={i}
                  handleChange={handleChange}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
