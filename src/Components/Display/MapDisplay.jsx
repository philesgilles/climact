import React, { useState } from "react";
import Chart from "react-apexcharts";

import "./MapDisplay.css";
const initialOptions = {
  chart: {
    id: "basic-bar"
  },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
  }
};
const initialSeries = [
  {
    name: "series-1",
    data: [30, 40, 45, 50, 49, 60, 70, 91]
  }
];

const MapDisplay = () => {
  const [options, setOptions] = useState(initialOptions);
  const [series, setSeries] = useState(initialSeries);
  return (
    <div className="map-display">
      <Chart options={options} series={series} type="line" height="400px" />
    </div>
  );
};

export default MapDisplay;
