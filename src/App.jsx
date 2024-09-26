import "./App.css";
import data from "../public/data";

function App() {
  console.log(data);
  return (
    <>
      <div>
        <h1>My Pop_Out_box</h1>
        <div className="lists">
          {data.map((qus, i) => {
            return (
              <>
                {" "}
                <div key={i} className="list">
                  <div className="list-title">
                    <span>{i + 1}.</span>
                    <h2>{qus.title}</h2>
                  </div>
                  <p>{qus.text}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
