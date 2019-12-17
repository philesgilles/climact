import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as QueryString from "query-string";

const Test = props => {
  console.log(props);
  const params = QueryString.parse(props.location.search);
  // Get parameters from URL
  useEffect(
    () => {
      // If there are "code params, set the levers
      if (params.preset) {
        console.log("preset loaded", params.preset);
      } else if (params.code) {
        props.setLeversState(params.code.split(""));
      }
    }, // eslint-disable-next-line
    [] // Run UseEffect only Once
  );

  const click = () => {
    props.history.push({ pathname: "/", search: "?aaa=bbb" });
  };

  return (
    <div>
      <p>{props.leversState}</p>
      <p onClick={() => props.setLeversState([1, 2, 3])}>Click Me</p>
      <p onClick={click}>no click Me</p>
    </div>
  );
};

const mapsStateToProps = state => {
  return {
    leversState: state.leversValue
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setLeversState: value => dispatch({ type: "SET_LEVERS", payload: value })
  };
};

export default connect(
  mapsStateToProps,
  mapDispatchToProps
)(Test);
