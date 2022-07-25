import React, { useState } from "react";
import Board from "./Board";

import "./body.css";

const Body = () => {
  const [boards, setBoards] = useState([
    {
      id: Date.now() + Math.random() * 2,
      title: "To do",
      cards: [
        {
          id: Date.now() + Math.random() * 2,
          title: "Card1",
          tasks: [],
          description: "Ali",
          Date: "",
        },
      ],
    },
    {
      id: Date.now() + Math.random() * 2,
      title: "In Progress",
      cards: [
        {
          id: Date.now() + Math.random() * 2,
          title: "Card1",
          tasks: ["sdyib", "sdcuhjkj"],
          description: "Ali",
          Date: "",
        },
      ],
    },
    {
      id: Date.now() + Math.random() * 2,
      title: "Complete",
      cards: [
        {
          id: Date.now() + Math.random() * 2,
          title: "Card1",
          tasks: [],
          description: "Ali",
          Date: "",
        },
      ],
    },
  ]);
  const [target, setTarget] = useState({
    cid: "",
    bid: "",
  });
  const addCard = (title, description, bid) => {
    const card = {
      id: Date.now() + Math.random(),
      title,
      tasks: ["aiuh"],
      date: "",
      description,
    };
    const index = boards.findIndex((item) => item.id === bid);
    if (index < 0) return 0;
    const tempboards = [...boards];
    tempboards[index].cards.push(card);
    setBoards(tempboards);
  };
  //   const removeCards = (cid, bid) => {
  //     const bIndex = boards.findIndex((item) => item.id === bid);
  //     if (bIndex < 0) return 0;

  //     const cIndex = boards[bIndex].findIndex((item) => item.id === cid);
  //     if (cIndex < 0) return 0;

  //     const tempboards = [...boards];
  //     tempboards[bIndex].cIndex.splice(cIndex, 1);
  //     setBoards(tempboards);
  //   };

  const handleDragEnd = (cid, bid) => {
    let s_bIndex, s_cIndex, t_bIndex, t_cIndex;
    s_bIndex = boards.findIndex((item) => item.id === bid);
    if (s_bIndex < 0) return;

    s_cIndex = boards[s_bIndex].cards?.findIndex((item) => item.id === cid);
    if (s_cIndex < 0) return;

    t_bIndex = boards.findIndex((item) => item.id === target.bid);
    if (t_bIndex < 0) return;

    t_cIndex = boards[t_bIndex].cards?.findIndex(
      (item) => item.id === target.cid
    );
    if (t_cIndex < 0) return;

    const tempboards = [...boards];
    const tempCard = tempboards[s_bIndex].cards[s_cIndex];

    tempboards[s_bIndex].cards.splice(s_cIndex, 1);
    tempboards[t_bIndex].cards.splice(t_cIndex, 0, tempCard);

    setBoards(tempboards);
  };
  const handleDragEnter = (cid, bid) => {
    console.log(cid, bid);
    setTarget({
      cid,
      bid,
    });
  };
  return (
    <div className="body">
      <div className="app_outer">
        <div className="app_boards">
          {boards.map((item) => (
            <Board
              key={item.id}
              board={item}
              addCard={addCard}
              handleDragEnd={handleDragEnd}
              handleDragEnter={handleDragEnter}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
