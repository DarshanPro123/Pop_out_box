import "./App.css";
import data from "../public/data"; // Assuming this imports your array of questions
import { useState } from "react";
import QuestionBank from "./Components/QuestionBox.jsx";

function App() {
  // Initialize an array of booleans for each question's open state
  const [currentOpen, setCurentOpn] = useState(null);

  const handleCurrentOpen = (keys) => {
    setCurentOpn(keys);
  };

  return (
    <>
      <div>
        <h1>My Pop-Out Box</h1>
        <div className="lists">
          {data.map((qus, i) => {
            return (
              <div key={i}>
                <QuestionBank
                  qus={qus}
                  currentOpen={currentOpen}
                  onOpen={handleCurrentOpen}
                  keys={i}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
