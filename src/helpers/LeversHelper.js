//Import lodash
import _ from "lodash";

export default levers => {
  let leversSorted = _.groupBy(levers, "headline");

  Object.keys(leversSorted).forEach(headline => {
    leversSorted[headline].forEach(e => {
      if (e.group_1 == null) {
        e.group_1 = e.headline;
        //e.group_2 = null;
        //e.title = null;
      }
      delete e.headline;
    });
    leversSorted[headline] = _.groupBy(leversSorted[headline], "group_1");
    Object.keys(leversSorted[headline]).forEach(group1 => {
      leversSorted[headline][group1].forEach((e, i) => {
        if (e.group_2 == null) {
          e.group_2 = e.group_1;
        }
        delete e.group_1;
      });
      leversSorted[headline][group1] = _.groupBy(
        leversSorted[headline][group1],
        "group_2"
      );
      Object.keys(leversSorted[headline][group1]).forEach(group2 => {
        //console.log(group2);
        leversSorted[headline][group1][group2].forEach(e => {
          delete e.group_2;
        });

        // if (leversSorted[headline][group1][group2].length > 1) {
        //   console.log(leversSorted[headline][group1][group2]);
        // } else {
        //   console.log(leversSorted[headline][group1][group2]);
        // }
      });
    });
  });
  //console.log(leversSorted);
  return leversSorted;
};
