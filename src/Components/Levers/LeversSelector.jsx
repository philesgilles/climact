import React, { useState, useEffect } from "react";
import LeversBtn from "./LeversBtn/LeversBtn";

import "./LeversSelector.css";
const LeversSelector = props => {
  const [leversValue, setLeversValue] = useState(props.level);
  const [show, setShow] = useState(false);
  const [selectedLevers, setSelectedLevers] = useState("");
  const handleLeversSelected = (selectedLevers, leversValue) => {
    console.log(selectedLevers, leversValue);
    setSelectedLevers(selectedLevers);
    setLeversValue(leversValue);
  };

  let type = props.type;
  let title = props.title;

  useEffect(
    () => {
      setLeversValue(props.level);
    }, // eslint-disable-next-line
    []
  );

  const dropDown = () => {
    setShow(!show);
  };

  return (
    <div className={type === "title" ? "pl-2" : "pl"}>
      <div className="d-flex mb-5">
        <div className={type}>
          {props.children ? (
            show ? (
              <i onClick={dropDown} className="fas fa-chevron-down mr"></i>
            ) : (
              <i onClick={dropDown} className="fas fa-chevron-right mr"></i>
            )
          ) : (
            ""
          )}
          {title}
        </div>

        <div className="all-selectors">
          <LeversBtn
            initialValue={0}
            isActive={selectedLevers === 0}
            handleLeversSelected={handleLeversSelected}
          />
          <LeversBtn
            initialValue={1}
            isActive={selectedLevers === 1}
            handleLeversSelected={handleLeversSelected}
          />
          <LeversBtn
            initialValue={2}
            isActive={selectedLevers === 2}
            handleLeversSelected={handleLeversSelected}
          />
          <LeversBtn
            initialValue={3}
            isActive={selectedLevers === 3}
            handleLeversSelected={handleLeversSelected}
          />
        </div>
      </div>

      <div className={show ? "" : "hide"}>{props.children}</div>
    </div>
  );
};

export default LeversSelector;
