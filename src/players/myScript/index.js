import Map from "./Map.js";
import Board from "./Board.js";
import invertMove from "./utils/invertMove.js";
import Game from "./Game.js";

const evaScript = (scenery, myMove) => {
  const game = new Game(scenery, myMove);
  let colToPlay;

  colToPlay = game.getRandomColPlay();

  // const preferableColToPlay = game.getPreferableColToPlay();

  // if (!!preferableColToPlay) {
  //   colToPlay = preferableColToPlay;
  // }

  return colToPlay;
};

export default evaScript;
