import SceneryMap from "./utils/SceneryMap.js";

const evaScript = (scenery, myMove) => {
  const sceneryMap = new SceneryMap(scenery);

  // console.log(scenery);

  // console.log("horizontal lines", sceneryMap.getHorizontalLinesMap());
  // console.log("Vertical lines", sceneryMap.getVerticalLinesMap());
  // console.log("First diagonal lines", sceneryMap.getFirstDiagonalsMap());
  console.log("Second diagonal lines", sceneryMap.getSecondDiagonalsMap());

  return Math.floor(Math.random() * 8);
};

//retornar um número entre 0 e 7

export default evaScript;
