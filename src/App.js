import "./App.css";
// import About from "./component/About";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
    } else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
    }
  };

  return (
    <>
      <Navbar title="TextUtil" mode={mode} toggleMode={toggleMode} />;
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze" mode ={mode} />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
