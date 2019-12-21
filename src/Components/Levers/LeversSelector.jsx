import React, { useState, useEffect } from "react";
import LeversBtn from "./LeversBtn/LeversBtn";
import { connect, useSelector } from "react-redux";

import "./LeversSelector.css";
const LeversSelector = props => {
  const [leversValue, setLeversValue] = useState(null);
  const [show, setShow] = useState(false);
  //const [selectedLevers, setSelectedLevers] = useState("");
  const handleLeversSelected = leversValue => {
    setLeversValue(leversValue);
    if (props.type === "title") {
      props.setThisLevers(props.id, +leversValue * 10);
    } else {
      props.setGroupLevers(props.type, props.title, +leversValue * 10);
    }
  };
  let type = props.type;
  let title = props.title;
  useEffect(
    () => {
      //console.log("leversValue :", leversValue);
      if (props.type === "title") {
        setLeversValue(props.value / 10);
      }
    }, // eslint-disable-next-line
    []
  );
  const dropDown = () => {
    setShow(!show);
  };

  return (
    <div className={type === "title" ? "pl-2" : ""}>
      <div className={"lever d-flex mb-5 " + type}>
        <div className="pointer" onClick={dropDown}>
          {props.children ? (
            show ? (
              <i className="fas fa-chevron-down mr"></i>
            ) : (
              <i className="fas fa-chevron-right mr"></i>
            )
          ) : (
            ""
          )}
          {title}
        </div>

        <div className="all-selectors">
          <LeversBtn
            initialValue={0}
            isActive={leversValue === 0}
            id={props.id}
            value={0}
            handleLeversSelected={handleLeversSelected}
          />
          <LeversBtn
            initialValue={1}
            isActive={leversValue > 0 && leversValue <= 1}
            id={props.id}
            value={leversValue > 0 && leversValue <= 1 ? leversValue : 1}
            handleLeversSelected={handleLeversSelected}
          />
          <LeversBtn
            initialValue={2}
            isActive={leversValue > 1 && leversValue <= 2}
            id={props.id}
            value={leversValue > 1 && leversValue <= 2 ? leversValue : 2}
            handleLeversSelected={handleLeversSelected}
          />
          <LeversBtn
            initialValue={3}
            isActive={leversValue > 2 && leversValue <= 3}
            id={props.id}
            value={leversValue > 2 && leversValue <= 3 ? leversValue : 3}
            handleLeversSelected={handleLeversSelected}
          />
        </div>
      </div>

      <div className={show ? "" : "hide"}>{props.children}</div>
    </div>
  );
};

// const mapStateToProps = state => {
//   return {
//     levers: state.levers
//   };
// };

const mapDispatchToProps = dispatch => {
  return {
    setThisLevers: (id, value) =>
      dispatch({ type: "SET_THIS_LEVERS", payload: { id: id, value: value } }),
    setGroupLevers: (group, title, value) =>
      dispatch({
        type: "SET_GROUP_LEVERS",
        payload: { group: group, title: title, value: value }
      })
  };
};

export default connect(null, mapDispatchToProps)(LeversSelector);
