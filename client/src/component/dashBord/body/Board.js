import React from "react";
import "./board.css";
import Card from "./card/Card";

import Editable from "./editable/Editable";
const Board = (props) => {
  console.log(props.addCard);
  return (
    <div className="board">
      <div className="board_top">
        <p className="board_top_title counter-Task">{props.board?.title}</p>
        <div className="counter">{props.board?.cards?.length}</div>
      </div>

      <Editable
        text="Add Card"
        placeholderInput="Title"
        placeholderDesc="Description"
        onSubmit={(value1, value2) =>
          props.addCard(value1, value2, props.board.id)
        }
      />
      <div className="board_card">
        {props.board?.cards?.map((item) => (
          <Card
            key={item.id}
            card={item}
            handleDragEnter={props.handleDragEnter}
            handleDragEnd={props.handleDragEnd}
            boardId={props.board?.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Board;
