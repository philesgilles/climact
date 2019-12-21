import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import "./LeversBtn.css";

const LeversBtn = props => {
  const { initialValue, isActive, handleLeversSelected, id, value } = props;
  const [leversValue, setLeversValue] = useState(value);

  const handleClick = initialValue => {
    let newValue = 0;
    if (initialValue > 0) {
      if (isActive)
        newValue =
          leversValue < initialValue - 0.8
            ? initialValue
            : (leversValue - 0.1).toFixed(1);
      else {
        newValue = initialValue;
      }
    }
    handleLeversSelected(newValue);
  };

  useEffect(() => {
    setLeversValue(value);
  }, [value]);

  return (
    <span
      className={isActive ? "levers__selected levers__btn" : "levers__btn"}
      onClick={() => handleClick(initialValue)}
    >
      {isActive ? leversValue : initialValue}
    </span>
  );
};

const mapStateToProps = state => {
  return {
    levers: state.stateLevers
  };
};

export default connect(mapStateToProps)(LeversBtn);
