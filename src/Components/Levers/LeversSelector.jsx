import React, { useState, useEffect } from "react";

import "./LeversSelector.css";
const LeversSelector = props => {
  const [leversValue, setLeversValue] = useState(props.level);
  let type = props.type;
  let title = props.title;
  useEffect(() => {
    setLeversValue(props.level);
  }, // eslint-disable-next-line
  []);

  return (
    <div className="d-flex">
      <div className={type}>{title}</div>
      <div className='all-selectors'>
        <span
          onClick={ () => setLeversValue("0") }
          className={ leversValue === "0" ? "leverSelected simple_level" : "simple_level" }
        >
          0
        </span>

        <span
          onClick={() => setLeversValue("1")}
          className={ leversValue === "1" ? "leverSelected simple_level" : "simple_level" }
        >
          1
        </span>

        <span
          onClick={() => setLeversValue("2")}
          className={ leversValue === "2" ? "leverSelected simple_level" : "simple_level" }
        >
          2
        </span>

        <span
          onClick={() => setLeversValue("3")}
          className={ leversValue === "3" ? "leverSelected simple_level" : "simple_level" }
        >
          3
        </span>
      </div>
    </div>
  );
};

export default LeversSelector;
