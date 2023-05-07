import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpperCase = () => {
    setText(text.toUpperCase());
  };
  const handleLowerCase = () => {
    setText(text.toLowerCase());
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleClearText = () => {
    setText("");
  }

  const [text, setText] = useState("");

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            value={text}
            className="form-control"
            id="myBox1"
            onChange={handleOnChange}
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpperCase}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowerCase}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary" onClick={handleClearText}> 
          Clear Text
        </button>
      </div>
      <div className="container my-3">
        <h2>You text Summary</h2>
        <p>
          {text.split(" ").length} words {text.length} character
        </p>
        <p>It will tae you {0.08 * text.split(" ").length} Minutes to read.</p>
      </div>
    </>
  );
}
