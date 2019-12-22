import React, { useState, useEffect } from "react";
import Pathway from "./Pathway";
import LeversSelector from "./LeversSelector";
import Loading from "../Loading/Loading";
import leversHelper from "../../helpers/LeversHelper";

import "./Levers.css";

const Levers = props => {
  const [allLevers, setAllLevers] = useState(props.levers);
  const [reloadAll, setReloadAll] = useState(false);
  //console.log(props);
  useEffect(() => {
    setAllLevers(props.levers);
  }, [props.levers]);

  const refreshPage = async () => {
    await setReloadAll(!reloadAll);
    props.setUrl();
  };

  let levers = <Loading />;

  if (props.levers.length > 0) {
    const leversSorted = leversHelper(allLevers); // sorting data
    levers = Object.keys(leversSorted).map(headline => {
      let headlineValue = 0;
      let headlinecount = 0;
      allLevers.forEach(e => {
        if (e.headline === headline) {
          headlineValue += e.value;
          headlinecount++;
        }
      });
      headlineValue = (headlineValue / headlinecount).toFixed(0);

      return (
        <LeversSelector
          key={headline}
          title={headline}
          type="headline"
          value={headlineValue}
          reload={refreshPage}
        >
          {Object.keys(leversSorted[headline]).map(groupe1 => {
            if (groupe1 !== headline) {
              let group1Value = 0;
              let group1count = 0;
              allLevers.forEach(element1 => {
                if (element1.group_1 === groupe1) {
                  group1Value += element1.value;
                  group1count++;
                }
              });
              group1Value = (group1Value / group1count).toFixed(0);
              return (
                <LeversSelector
                  key={groupe1}
                  title={groupe1}
                  type="group_1"
                  value={group1Value}
                  reload={refreshPage}
                >
                  {Object.keys(leversSorted[headline][groupe1]).map(groupe2 => {
                    if (groupe2 !== groupe1) {
                      let group2Value = 0;
                      let group2count = 0;
                      allLevers.forEach(element2 => {
                        if (element2.group_2 === groupe2) {
                          group2Value += element2.value;
                          group2count++;
                        }
                      });
                      group2Value = (group2Value / group2count).toFixed(0);
                      return (
                        <LeversSelector
                          key={groupe2}
                          title={groupe2}
                          type="group_2"
                          value={group2Value}
                          reload={refreshPage}
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
      );
    });
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
