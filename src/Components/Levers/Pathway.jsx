import React from "react";
import { PATHWAYS } from "../../utils/constants";
import Select from "react-select";

import "./Pathway.css";
const Pathway = () => {
  const pathways = PATHWAYS.map(pathway => ({
    value: pathway,
    label: pathway
  }));

  return (
    <div className="pathway">
      <h4>Pathway</h4>
      <div>
        <p className="lead">Choose an example pathway</p>

        <Select defaultValue={pathways[0]} options={pathways} />

      </div>
    </div>
  );
};

export default Pathway;
