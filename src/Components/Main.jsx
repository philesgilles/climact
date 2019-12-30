import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as queryString from "query-string";
import Levers from "./Levers/Levers";
import { FAKE_LEVERS } from "../utils/constants";
import "./Main.css";
import MapControl from "./Display/MapControl";
import MapDisplay from "./Display/MapDisplay";

const Main = props => {
  console.log(props);
  const [mainLevers, setMainLevers] = useState(props.levers);
  const apiCall = async () => {
    const response = await fetch("http://54.93.129.246:5000/api/v1.0/levers", {
      method: "GET"
    });
    let fetchedLevers = await response.json();

    //Take URL Informations
    let urlData = queryString.parse(props.location.search);
    if (Object.keys(urlData).length > 0) {
      urlData = urlData.levers.match(/[0-9]{1,2}/g);
      fetchedLevers.forEach((e, i) => {
        e.value = urlData[i];
        e.id = i;
      });
    } else {
      fetchedLevers.forEach((e, i) => {
        e.value = 10;
        e.id = i;
      });
    }
    props.setAllLevers(fetchedLevers);
  };

  useEffect(() => {
    if (props.levers.length < 1) {
      //apiCall();
    }
    props.setAllLevers(FAKE_LEVERS);
  }, []);

  const setUrl = () => {
    // Passing the function to the callback queue to get executed asynchronously
    setTimeout(() => {
      console.log("MAIN :", props.levers);
      let newUrl = "";
      props.levers.forEach(lever => {
        if (lever.value < 10) {
          newUrl = newUrl + "0" + lever.value;
        } else {
          newUrl = newUrl + lever.value.toString();
        }
      });
      const param = `?levers=${newUrl}`;
      props.history.push({
        pathname: "/",
        search: param
      });
      console.log("URLVALUE : ", newUrl);
    }, 0)
  };

  return (
    <div className="main">
      <Levers setUrl={setUrl} levers={props.levers} />
      <div className="display">
        <h4>Selector :</h4>
        <MapControl />
        <MapDisplay />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    levers: state.stateLevers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setAllLevers: value => dispatch({ type: "SET_ALL_LEVERS", payload: value })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
