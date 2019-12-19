import React, { useState } from "react";
import Select from "react-select";
import { MAP_CONTROL as mapTitles } from "../../utils/constants";

import "./MapControl.css";
const MapControl = () => {
  const [position, setPosition] = useState(0);
  const [selectedTitle, setSelectedTitle] = useState(0);
  const [selectedSubtitle, setSelectedSubtitle] = useState(
    mapTitles[selectedTitle].subtitle[0]
  );

  const selectTitleHandler = async titleId => {
    await setSelectedTitle(titleId);
    console.log(mapTitles[titleId].subtitle[0]);
    setSelectedSubtitle(mapTitles[titleId].subtitle[0]);
  };

  const handleChange = e => {
    setSelectedSubtitle(e.value);
  };

  const controlTitles = mapTitles.map((e, i) => (
    <li
      key={i}
      onClick={() => selectTitleHandler(i)}
      className={i === selectedTitle ? "selected" : ""}
    >
      {e.title}
    </li>
  ));

  const controlSubTitles = mapTitles[selectedTitle].subtitle.map(subtitle => ({
    value: subtitle,
    label: subtitle
  }));

  // console.log("control :", controlSubTitles);
  console.log("subtitle :", selectedSubtitle);
  // console.log("title :", selectedTitle);
  return (
    <div className="map-control">
      <div>
        <ul className="map-control-list">{controlTitles}</ul>
      </div>
      <div>
        <Select
          onChange={handleChange}
          value={{ value: selectedSubtitle, label: selectedSubtitle }}
          options={controlSubTitles}
        />
      </div>
    </div>
  );
};

export default MapControl;
