import React, { useState } from "react";

import "./LeversBtn.css";

const LeversBtn = ({ initialValue, isActive, handleLeversSelected }) => {
  const [leversValue, setLeversValue] = useState(initialValue);

  const handleClick = initialValue => {
    if (initialValue === 0) setLeversValue(0);
    else if (isActive)
      setLeversValue(leversValue =>
        leversValue < initialValue - 0.8
          ? initialValue
          : (leversValue - 0.1).toFixed(1)
      );
    else {
      setLeversValue(initialValue)
    }
    handleLeversSelected(initialValue, leversValue);
  };

  return (
    <span
      className={isActive ? "levers__selected levers__btn" : "levers__btn"}
      onClick={() => handleClick(initialValue)}
    >
      {isActive ? leversValue : initialValue}
    </span>
  );
};

export default LeversBtn;
