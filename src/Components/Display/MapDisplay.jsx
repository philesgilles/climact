import React, { useState } from "react";
import Chart from "react-apexcharts";

import "./MapDisplay.css";

const generateDayWiseTimeSeries = function(baseval, count, yrange) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = baseval;
    var y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push([x, y]);
    baseval += 86400000;
    i++;
  }
  return series;
};

const initialOptions = {
  chart: {
    stacked: true,
    events: {
      selection: function(chart, e) {
        console.log(new Date(e.xaxis.min));
      }
    }
  },
  colors: ["#008FFB", "#00E396", "#CED4DC"],
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: "smooth"
  },
  fill: {
    type: "gradient",
    gradient: {
      opacityFrom: 0.6,
      opacityTo: 0.8
    }
  },
  legend: {
    position: "bottom",
    horizontalAlign: "center"
  },
  xaxis: {
    type: "datetime"
  }
};
const initialSeries = [
  {
    name: "South",
    data: generateDayWiseTimeSeries(new Date("11 Feb 2017 GMT").getTime(), 20, {
      min: 10,
      max: 20
    })
  },
  {
    name: "North",
    data: generateDayWiseTimeSeries(new Date("11 Feb 2017 GMT").getTime(), 20, {
      min: 10,
      max: 20
    })
  },
  {
    name: "Central",
    data: generateDayWiseTimeSeries(new Date("11 Feb 2017 GMT").getTime(), 20, {
      min: 10,
      max: 15
    })
  }
];

const MapDisplay = () => {
  const [options, setOptions] = useState(initialOptions);
  const [series, setSeries] = useState(initialSeries);
  return (
    <div className="map-display">
      <h4>{"[[MAP TITLE]]"}</h4>
      <Chart options={options} series={series} type="area" height="300" />
    </div>
  );
};

export default MapDisplay;
