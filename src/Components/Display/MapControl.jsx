import React, { useState } from "react";
import Select from "react-select";
import { MAP_CONTROL as mapTitles, COUNTRIES } from "../../utils/constants";

import "./MapControl.css";
const MapControl = () => {
  const [position, setPosition] = useState(0);
  const [selectedTitle, setSelectedTitle] = useState(0);
  const [selectedSubtitle, setSelectedSubtitle] = useState(
    mapTitles[selectedTitle].subtitle[0]
  );
  const [selectedCountry, setSelectedCountry] = useState({value:COUNTRIES[0].code,label:COUNTRIES[0].name})

  const selectTitleHandler = async titleId => {
    await setSelectedTitle(titleId);
    console.log(mapTitles[titleId].subtitle[0]);
    setSelectedSubtitle(mapTitles[titleId].subtitle[0]);
  };

  const handleSubtitleChange = e => {
    setSelectedSubtitle(e.value);
  };

  const handleCountryChange = e => {
    setSelectedCountry(e);
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

  const countriesOptions = COUNTRIES.map(country => ({
    label: country.name,
    value: country.code
  }));
  return <div className="map-control">
      <div>
        <ul className="map-control-list">{controlTitles}</ul>
      </div>
      <div className="selectors">
        <Select className="zmax" onChange={handleSubtitleChange} value={{ value: selectedSubtitle, label: selectedSubtitle }} options={controlSubTitles} />
        <Select className="zmax"  value={selectedCountry} options={countriesOptions} onChange={handleCountryChange} />
      </div>
    </div>;
};

export default MapControl;
