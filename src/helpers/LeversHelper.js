//Import lodash
import _ from "lodash";

//this function takes the arrays from server and sort it to be digested by the app
export default data => {
  const levers = [...data];
  //Sort by headline
  let leversSorted = _.groupBy(levers, "headline");

  //For each Headline
  Object.keys(leversSorted).forEach(headline => {
    leversSorted[headline].forEach(e => {
      if (e.group_1 == null) {
        e.group_1 = e.headline;
      }
    });
    //Sort by group_1
    leversSorted[headline] = _.groupBy(leversSorted[headline], "group_1");
    //For each group1
    Object.keys(leversSorted[headline]).forEach(group1 => {
      leversSorted[headline][group1].forEach((e, i) => {
        if (e.group_2 == null) {
          e.group_2 = e.group_1;
        }
      });
      //Sort by group_1
      leversSorted[headline][group1] = _.groupBy(
        leversSorted[headline][group1],
        "group_2"
      );
      //For each group2
      // Object.keys(leversSorted[headline][group1]).forEach(group2 => {
      //   //console.log(group2);
      //   leversSorted[headline][group1][group2].forEach(e => {});

      //   // if (leversSorted[headline][group1][group2].length > 1) {
      //   //   console.log(leversSorted[headline][group1][group2]);
      //   // } else {
      //   //   console.log(leversSorted[headline][group1][group2]);
      //   // }
      // });
    });
  });
  //console.log(leversSorted);
  return leversSorted;
};
