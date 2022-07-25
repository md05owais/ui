import React, { useState } from "react";
import "./editable.css";
import plus from "../../../Asset/plus.svg";
const Editable = (props) => {
  console.log(props);
  const [showEdit, setShowEdit] = useState(false);
  const [inputValue, setInputValue] = useState(props.text || "");
  const [inputText, setInputText] = useState(props.text || "");
  return (
    <div className="editable">
      {/*<spna>owasi</spna>*/}
      {showEdit ? (
        <form
          className="editable_edit"
          onSubmit={(event) => {
            event.preventDefault();
            // if (props.onSubmit) props.onSubmit(inputValue, inputText);
            setInputValue("");
            setShowEdit(false);
            setInputText("");
          }}
        >
          <input
            type="text"
            value={inputValue}
            placeholder={props.placeholderInput || "Title"}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <textarea
            type="text"
            placeholder={props.placeholderDesc || "Description"}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          ></textarea>
          <div className="buttonCross">
            <button
              type="submit"
              onClick={() => {
                props.onSubmit(inputValue, inputText);
              }}
              className="AddButton"
            >
              {props.button || "Add"}
            </button>
            <span onClick={() => setShowEdit(false)} className="cross">
              X
            </span>
          </div>
        </form>
      ) : (
        <button className="button" onClick={() => setShowEdit(true)}>
          <img src={plus}></img>
        </button>
      )}
    </div>
  );
};

export default Editable;
