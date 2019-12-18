import React from 'react'
import { PATHWAYS } from '../../utils/constants'

import "./Pathway.css";
const Pathway = () => {
  return (
    <div className="pathway">
      <h5>Pathway</h5>
      <div>
        <p className="lead">Choose an example pathway</p>
        <select>
          <option value="" default selected disabled>Choose an example pathway</option>
          {PATHWAYS.map((pathway, i) => <option value={String(i)} key={i}>{pathway}</option>)}
        </select>
      </div>
    </div>
  );
};

export default Pathway;