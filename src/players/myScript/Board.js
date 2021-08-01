import Map from "./Map.js";
import quantityOfMovesInLine from "./utils/quantityOfMovesInLine.js";

class Board {
  constructor(scenery) {
    this.scenery = scenery;
    this.sceneryMap = new Map(scenery);
    this.linesMap = this.sceneryMap.getPreGeneratedLinesMap();
    this.lines = this.getLines();
    this.colQuantity = this.scenery.length;
    this.rowQuantity = this.scenery[0].length;
  }

  getLines() {
    return this.linesMap.map((line) => {
      return line.map((cel) => {
        return this.scenery[cel[0]][cel[1]];
      });
    });
  }

  isAWinnerLine(line, lineIndex, move) {
    const quantityOfUndefinedCells = line.filter((cell) => cell === undefined).length;
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

  getUnderneathCellIndex(cellIndex) {
    const [col, row] = cellIndex;

    return [col, row + 1];
  }

  getCellValue(cellIndex) {
    const [col, row] = cellIndex;

    return this.scenery[col][row];
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

  isCellOutOfBounds(cellIndex) {
    const [col, row] = cellIndex;

    return col >= this.colQuantity || row >= this.rowQuantity;
  }

  hasAWinner() {}

  // Getters & Setters
  setScenery(scenery) {
    this.scenery = scenery;
    this.sceneryMap = new Map(scenery);
    this.lines = this.getLines();
  }
}
export default Board;
