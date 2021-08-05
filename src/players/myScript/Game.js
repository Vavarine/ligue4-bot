import Board from "./Board.js";
import GameSimulator from "./GameSimulator.js";
import invertMove from "./utils/invertMove.js";

class Game {
  constructor(scenery, myMmove) {
    this.myMove = myMmove;
    this.scenery = scenery;
    this.auxScenery = new Array();
    this.board = new Board(scenery);
    this.gameSim = new GameSimulator(scenery);
    this.openentMove = invertMove(myMmove);

    for (let i = 0; i < this.scenery.length; i++) {
      this.auxScenery.push(scenery[i].slice());
    }
  }

  getBestPlay(qtdOfSimulationForCol) {
    const colsGamesPointsSum = this.auxScenery.map((col, index, cols) => {
      let colGamesPoitsSum = 0;

      const isColFull = this.gameSim.isColFull(col);
      const willWin = this.gameSim.willCauseWin(this.myMove, index, this.auxScenery);
      const willLost = this.gameSim.willCauseLost(this.myMove, index, this.auxScenery);

      if (isColFull || willLost) return -Infinity;
      if (willWin) return +Infinity;

      const gameResultMap = {
        3: (points) => (points += 1),
        2: (points) => points,
        1: (points) => (points -= 1),
      };

      for (let i = 0; i < qtdOfSimulationForCol; i++) {
        const gameData = this.gameSim.simulateGame(this.auxScenery, this.myMove, index);

        colGamesPoitsSum = gameResultMap[gameData.result](colGamesPoitsSum);
      }

      return colGamesPoitsSum;
    });

    console.log(colsGamesPointsSum);

    return colsGamesPointsSum.indexOf(Math.max(...colsGamesPointsSum));
  }
}

export default Game;
