import React from "react";
import { PATHWAYS } from "../../utils/constants";

import "./Pathway.css";
const Pathway = () => {
  return (
    <div className="pathway">
      <h4>Pathway</h4>
      <div>
        <p className="lead">Choose an example pathway</p>
        <select>
          <option defaultValue disabled>
            Choose an example pathway
          </option>
          {PATHWAYS.map((pathway, i) => (
            <option value={String(i)} key={i}>
              {pathway}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Pathway;
