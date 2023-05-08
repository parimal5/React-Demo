import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpperCase = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to UpperCase..", "success");
  };
  const handleLowerCase = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to Lower Case..", "success");
  };

  const handleClearText = () => {
    setText("");
    props.showAlert("Text Cleared..", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            value={text}
            className="form-control"
            id="myBox1"
            onChange={handleOnChange}
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "#212529" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpperCase}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLowerCase}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClearText}>
          Clear Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>You text Summary</h2>
        <p>
          {text.split(" ").filter((element) => {
            return element.length !== 0;
          }).length}{" "}
          words {text.length} character
        </p>
        <p>It will tae you {0.08 * text.split(" ").length} Minutes to read.</p>
      </div>
    </>
  );
}
