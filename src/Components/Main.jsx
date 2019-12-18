import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as queryString from "query-string";
import Levers from "./Levers/Levers";

import "./Main.css";

const Main = props => {
  // const urlValueTest = '10101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010'

  const apiCall = async () => {
    const response = await fetch("http://54.93.129.246:5000/api/v1.0/levers", {
      method: "GET"
    });
    const fetchedLevers = await response.json();

    let urlData = queryString.parse(props.location.search);
    if (Object.keys(urlData).length > 0) {
      urlData = urlData.levers.match(/[0-9]{1,2}/g);

      fetchedLevers.forEach((e, i) => {
        e.value = urlData[i];
        e.id = i;
      });
    } else {
      fetchedLevers.forEach((e, i) => {
        e.value = "00";
        e.id = i;
      });
    }
    props.setAllLevers(fetchedLevers);
  };

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <div className="main">
      <Levers levers={props.levers} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    levers: state.levers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setAllLevers: value => dispatch({ type: "SET_ALL_LEVERS", payload: value })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
