import Board from "./Board.js";
import invertMove from "./utils/invertMove.js";
import quantityOfMovesInLine from "./utils/quantityOfMovesInLine.js";

class GameSimulator {
  constructor(scenery) {
    this.board = new Board(scenery);
    this.scenery = scenery;
  }

  play(colIndex, move, scenery = this.scenery) {
    const colToPlay = scenery[colIndex];

    const rowToPlay = colToPlay.reduce((acc, row, index) => {
      if (row === undefined) return index;

      return acc;
    }, 0);

    const playedScenery = scenery;
    playedScenery[colIndex][rowToPlay] = move;

    return playedScenery;
  }

  isSceneryLost(scenery, move) {
    const board = new Board(scenery);
    const openentMove = invertMove(move);

    return board.getLines().some((line) => {
      return quantityOfMovesInLine(line, openentMove) === 4;
    });
  }
}

export default GameSimulator;
