import React, { useState } from "react";
import { Animate } from "react-move";
import { easeExpInOut } from "d3-ease";

import "./MapControl.css";
const MapControl = () => {
  const [position, setPosition] = useState(0);

  const moveControls = direction => {
    if (direction === "left") {
      console.log("left ");
      if (position > -120) {
        return;
      }
      setPosition(position + 120);
    } else if (direction === "right") {
      console.log("right ");
      setPosition(position - 120);
    }
    console.log(position);
  };

  return (
    <div className="map-control">
      <div>
        <ul className="map-control-list">
          <li className="selected">Emissions</li>
          <li>Energy</li>
          <li>Transport</li>
          <li>Buildings</li>
          <li>Industry</li>
          <li>Land-use</li>
          <li>Agriculture</li>
          <li>Water</li>
          <li>Minerals</li>
          <li>Air</li>
          <li>Climate</li>
          <li>Jobs</li>
          <li>Cost</li>
          <li>World</li>
        </ul>
      </div>
      <div>
        <select name="mapSelect" id="">
          <option value="aaa">aaa</option>
          <option value="bbb">bbb</option>
          <option value="ccc">ccc</option>
        </select>
      </div>
    </div>
  );
};

export default MapControl;
