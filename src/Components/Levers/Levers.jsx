import React, { useState, useEffect } from "react";
import Pathway from "./Pathway";
import LeversSelector from "./LeversSelector";
import Loading from "../Loading/Loading";
import leversHelper from "../../helpers/LeversHelper";

import "./Levers.css";

const Levers = props => {
  const [allLevers, setAllLevers] = useState(props.levers);
  console.log(props);
  useEffect(() => {
    setAllLevers(props.levers);
  }, [props.levers]);

  let levers = <Loading />;

  if (props.levers.length > 0) {
    const leversSorted = leversHelper(allLevers); // sorting data
    levers = Object.keys(leversSorted).map(headline => (
      <LeversSelector key={headline} title={headline} type="headline">
        {Object.keys(leversSorted[headline]).map(groupe1 => {
          if (groupe1 !== headline) {
            return (
              <LeversSelector key={groupe1} title={groupe1} type="group_1">
                {Object.keys(leversSorted[headline][groupe1]).map(groupe2 => {
                  if (groupe2 !== groupe1) {
                    return (
                      <LeversSelector
                        key={groupe2}
                        title={groupe2}
                        type="group_2"
                      >
                        {leversSorted[headline][groupe1][groupe2].map(e => (
                          <LeversSelector
                            key={e.title}
                            title={e.title}
                            type="title"
                            id={e.id}
                            value={e.value}
                          />
                        ))}
                      </LeversSelector>
                    );
                  } else {
                    return leversSorted[headline][groupe1][groupe2].map(e => (
                      <LeversSelector
                        key={e.title}
                        title={e.title}
                        type="title"
                        id={e.id}
                        value={e.value}
                      />
                    ));
                  }
                })}
              </LeversSelector>
            );
          } else {
            return leversSorted[headline][headline][headline].map(e => (
              <LeversSelector
                key={e.title}
                title={e.title}
                type="title"
                id={e.id}
                value={e.value}
              />
            ));
          }
        })}
      </LeversSelector>
    ));
  }
  return (
    <div className="levers">
      <Pathway />
      <div className="levers-wrapper">
        <div className="all-levers">{levers}</div>
      </div>
    </div>
  );
};

export default Levers;
