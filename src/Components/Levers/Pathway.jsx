import React from 'react'

import "./Pathway.css";
const Pathway = () => {
  return (
    <div className="pathway">
      <h5>Pathway</h5>
      <div>
        <p className="lead">Choose an example pathway</p>
        <select><option disabled="disabled" value=""></option><option value="0">EU reference</option><option value="1">Key behaviours</option><option value="2">Technology and fuels</option><option value="3">Land-food</option><option value="4">Tech and land-food</option><option value="5">Behaviour and land-food</option><option value="6">Behaviour and tech</option><option value="7">Travel, transport and power</option><option value="8">Homes and buildings</option><option value="9">Past trends</option><option value="10">Middle of the road</option><option value="11">Ambitious</option></select>
      </div>
    </div>
  );
};

export default Pathway;