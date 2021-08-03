import Map from "./Map.js";
import Board from "./Board.js";
import invertMove from "./utils/invertMove.js";
import Game from "./Game.js";

const evaScript = (scenery, myMove) => {
  const game = new Game(scenery, myMove);

  return game.getBestPlay(1000);
};

export default evaScript;
