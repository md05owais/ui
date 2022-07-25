import React, { useState } from "react";
import "./card.css";

const Card = (props) => {
  
  console.log(props.card);
  return (
    <div
      className="card"
      draggable
      onDragEnd={() => props.handleDragEnd(props.card?.id, props.boardId)}
      onDragEnter={() => props.handleDragEnter(props.card?.id, props.boardId)}
    >
      <div className="card_content">
        <div className="card_title">{props.card?.title}</div>
        <div className="card_description">{props.card?.description}</div>
      </div>
    </div>
  );
};

export default Card;
