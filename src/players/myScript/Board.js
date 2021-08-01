import Map from "./Map.js";
import invertMove from "./utils/invertMove.js";

class Board {
  constructor(scenery) {
    this.scenery = scenery;
    this.sceneryMap = new Map(scenery);
    this.linesMap = this.sceneryMap.getPreGeneratedLinesMap();
    this.lines = this.getLines();
  }

  getLines() {
    return this.linesMap.map((line) => {
      return line.map((cel) => {
        return this.scenery[cel[0]][cel[1]];
      });
    });
  }

  isALoserLine(line, lineIndex, move) {
    const invertedMove = invertMove(move);
    const undefinedCellIndex = this.getUndefinedCellIndex(line, lineIndex);

    if (!undefinedCellIndex) return false;

    const oponentMovesOnLine = line.filter((cell) => cell === invertedMove).length;

    if (
      oponentMovesOnLine === 3 &&
      this.getUnderneathCell(undefinedCellIndex) !== undefined
    )
      return true;

    return false;
  }

  getUndefinedCellIndex(line, lineIndex) {
    const cellLineIndex = line.findIndex((cell) => cell === undefined);

    return this.linesMap[lineIndex][cellLineIndex];
  }

  getLoserCell(move) {
    this.lines.forEach((line, index) => {
      if (this.isALoserLine(line, index, move)) {
        console.log("about to lose on cell", this.getUndefinedCellIndex(line, index));
      }
    });
  }

  getUnderneathCell(cellIndex) {
    const [col, row] = cellIndex;

    return this.scenery[col][row + 1];
  }
}
export default Board;
