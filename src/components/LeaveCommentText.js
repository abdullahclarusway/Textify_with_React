import React, { useState, useContext } from "react";
import MainContext from "../MainContext";

const LeaveCommentText = (props) => {
  const { position } = useContext(MainContext);
  return (
    <div
      className="leave-comment-text"
      style={{ position: "fixed", top: position.y, left: position.x + 20 }}
    >
      Yorum yazmak için tıkla
    </div>
  );
};

export default LeaveCommentText;
