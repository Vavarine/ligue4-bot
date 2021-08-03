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

      for (let i = 0; i < qtdOfSimulationForCol; i++) {
        const gameData = this.gameSim.simulateGame(this.auxScenery, this.myMove, index);
        if (gameData.result === 3) {
          colGamesPoitsSum += 2;
        }

        if (gameData.result === 2) {
          colGamesPoitsSum += 1;
        }

        if (gameData.result === 1) {
          colGamesPoitsSum -= 2;
        }
      }

      return colGamesPoitsSum;
    });

    return colsGamesPointsSum.indexOf(Math.max(...colsGamesPointsSum));
  }
}

export default Game;
