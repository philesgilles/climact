//Import lodash
import _ from "lodash";

export default levers => {
  let leversSorted = _.groupBy(levers, "headline");
  //console.log(leversSorted);
  // Sort the levers by Group
  Object.keys(leversSorted).forEach(group => {
    leversSorted[group] = _.groupBy(leversSorted[group], "group");
    Object.keys(leversSorted[group]).forEach(title => {
      leversSorted[group][title] = _.groupBy(
        leversSorted[group][title],
        "title"
      );
    });
  });
  //console.log(leversSorted);
  return leversSorted;
};
