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

  hasAWinningCol(curMove) {
    return this.getLines().some((line, index) =>
      this.isAWinnerLine(line, index, curMove)
    );
  }

  isAWinnerLine(line, lineIndex, move) {
    const quantityOfUndefinedCells = quantityOfUndefinedInLine(line);
    const undefinedCellIndex = this.getNotPlayedCellInLine(line, lineIndex);

    if (quantityOfUndefinedCells > 1 || !undefinedCellIndex) return false;

    if (
      quantityOfMovesInLine(line, move) === 3 &&
      this.isPlayableCell(undefinedCellIndex)
    )
      return true;

    return false;
  }

  getNotPlayedCellInLine(line, lineIndex) {
    const cellLineIndex = line.findIndex((cell) => cell === undefined);

    return this.linesMap[lineIndex][cellLineIndex];
  }

  isPlayableCell(cellIndex) {
    const cellValue = this.getCellValue(cellIndex);
    const underneathCellIndex = this.getUnderneathCellIndex(cellIndex);
    const underneathCellValue = this.getCellValue(underneathCellIndex);

    return (
      cellValue === undefined &&
      (underneathCellValue !== undefined || this.isCellOutOfBounds(underneathCellIndex))
    );
  }

  getCellValue(cellIndex) {
    const [col, row] = cellIndex;

    return this.scenery[col][row];
  }

  isCellOutOfBounds(cellIndex) {
    const [col, row] = cellIndex;

    return row >= this.rowQuantity;
  }

  getUnderneathCellIndex(cellIndex) {
    const [col, row] = cellIndex;

    return [col, row + 1];
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
