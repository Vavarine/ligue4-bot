import Board from "./Board.js";
import GameSimulator from "./GameSimulator.js";
import invertMove from "./utils/invertMove.js";

class Game {
  constructor(scenery, myMmove) {
    this.myMove = myMmove;
    this.scenery = scenery;
    this.board = new Board(scenery);
    this.gameSim = new GameSimulator(scenery);
    this.openentMove = invertMove(myMmove);
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

    if (this.playWillCauseOnLost(randomPlay)) {
      console.log(`Jogada evitada na coluna ${randomPlay}`);

      return this.getRandomPlay();
    }

    return randomPlay;
  }

  get;
}

export default Game;
