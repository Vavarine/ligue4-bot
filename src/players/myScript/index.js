import Map from "./Map.js";
import Board from "./Board.js";
import invertMove from "./utils/invertMove.js";

const evaScript = (scenery, myMove) => {
  // console.log(invertMove(myMove));

  const board = new Board(scenery);

  board.getLoserCell(myMove);

  // console.log(myMove);
  // console.log(board.getLines());
  // console.log("horizontal lines", sceneryMap.getHorizontalLinesMap());
  // console.log("Vertical lines", sceneryMap.getVerticalLinesMap());
  // console.log("First diagonal lines", sceneryMap.getFirstDiagonalsMap());
  // console.log("Second diagonal lines", sceneryMap.getSecondDiagonalsMap());

  // console.log(sceneryMap.linesMap);

  return Math.floor(Math.random() * 8);
};

//retornar um número entre 0 e 7

export default evaScript;
