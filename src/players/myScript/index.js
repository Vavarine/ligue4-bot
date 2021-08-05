import Game from "./Game.js";

const evaScript = (scenery, myMove) => {
  const game = new Game(scenery, myMove);

  return game.getBestPlay(2000);
};

export default evaScript;
