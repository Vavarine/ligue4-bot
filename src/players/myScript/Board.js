import Map from "./Map.js";
import invertMove from "./utils/invertMove.js";
import quantityOfMovesInLine from "./utils/quantityOfMovesInLine.js";
import quantityOfUndefinedInLine from "./utils/quantityOfUndefinedInLine.js";

class Board {
  constructor(scenery) {
    this.scenery = scenery;
    this.sceneryMap = new Map(scenery);
    this.linesMap = this.sceneryMap.getPreGeneratedLinesMap();
  }

  getLines() {
    return this.linesMap.map((line) => {
      return line.map((cel) => {
        return this.scenery[cel[0]][cel[1]];
      });
    });
  }

  isLost(move) {
    const openentMove = invertMove(move);

    return this.getLines().some((line) => {
      return quantityOfMovesInLine(line, openentMove) === 4;
    });
  }

  isDraw() {
    return this.getLines().every((line) => {
      return quantityOfUndefinedInLine(line) === 0;
    });
  }

  copyScenery(scenery) {
    const newScenery = new Array();

    for (let i = 0; i < scenery.length; i++) {
      newScenery.push(scenery[i].slice());
    }

    return newScenery;
  }

  setScenery(scenery) {
    this.scenery = scenery;
    this.sceneryMap = new Map(scenery);
    this.linesMap = this.sceneryMap.getPreGeneratedLinesMap();
  }
}
export default Board;
