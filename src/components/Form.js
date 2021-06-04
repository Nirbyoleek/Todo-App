import React, { useState } from "react";
import "../App.css";
const Form = ({ inputText, setInputText, todos, setTodos }) => {
  const [type, setType] = useState(false);
  const textHandler = (e) => {
    setInputText(e.target.value);
    setType(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        id: inputText + Math.floor(Math.random() * 100),
        completed: false,
      },
    ]);
    setInputText("");
    setType(false);
  };

  return (
    <div>
      <form action="" className="Form" onSubmit={submitHandler}>
        <label id="label">
          {type ? "Currently Typing ..." : "Create a new todo .."}
          <input
            value={inputText}
            onChange={textHandler}
            type="text"
            className="Input"
          />
        </label>
      </form>
    </div>
  );
};

export default Form;
