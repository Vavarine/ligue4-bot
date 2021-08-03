import Board from "./Board.js";
import GameSimulator from "./GameSimulator.js";
import invertMove from "./utils/invertMove.js";

class Game {
  constructor(scenery, myMmove) {
    this.myMove = myMmove;
    this.scenery = scenery.slice();
    this.auxScenery = new Array();
    this.board = new Board(scenery);
    this.gameSim = new GameSimulator(scenery);
    this.openentMove = invertMove(myMmove);

    for (let i = 0; i < this.scenery.length; i++) {
      this.auxScenery.push(scenery[i].slice());
    }
  }

  getPreferableColToPlay() {
    let winnerCol = false;
    let loserCol = false;

    this.board.lines.forEach((line, index) => {
      if (this.board.isAWinnerLine(line, index, this.myMove)) {
        winnerCol = this.board.getNotPlayedCellInLine(line, index)[0];
      }

      if (this.board.isAWinnerLine(line, index, this.openentMove)) {
        loserCol = this.board.getNotPlayedCellInLine(line, index)[0];
      }
    });

    if (winnerCol !== undefined) {
      return winnerCol;
    }

    return loserCol;
  }

  playWillCauseOnLost(colIndex) {
    const playedScenery = this.gameSim.play(colIndex, this.myMove);
    const board = new Board(playedScenery);

    return board.getLines().some((line, index) => {
      if (board.isAWinnerLine(line, index, this.openentMove)) {
        return true;
      }

      return false;
    });
  }

  getRandomColToPlay() {
    const randomPlay = Math.floor(Math.random() * 8);

    return randomPlay;
  }

  getBestPlay(qtdOfSimulationForCol) {
    // console.table(this.scenery);
    // console.table(this.auxScenery);

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
        // console.log(gameData);
      }

      // console.log(colGamegPoitsSum);

      return colGamesPoitsSum;
    });

    console.log(colsGamesPointsSum);

    colsGamesPointsSum.indexOf(Math.max(...colsGamesPointsSum));

    return colsGamesPointsSum.indexOf(Math.max(...colsGamesPointsSum));

    // console.table(this.scenery);
    // console.table(this.auxScenery);
  }
}

export default Game;
