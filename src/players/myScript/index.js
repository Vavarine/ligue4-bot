import Map from "./Map.js";
import Board from "./Board.js";
import invertMove from "./utils/invertMove.js";
import Game from "./Game.js";

const evaScript = (scenery, myMove) => {
  // console.table(scenery);
  const game = new Game(scenery, myMove);

  // colToPlay = game.getRandomColPlay();

  // const preferableColToPlay = game.getPreferableColToPlay();

  // if (!!preferableColToPlay) {
  // colToPlay = preferableColToPlay;
  // }

  // game.getBestPlay(500);

  return game.getBestPlay(500);
};

export default evaScript;
